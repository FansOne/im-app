'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../../api/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var util = require('./../../utils/util.js'); // 转换时间插件
var im = require('./../../utils/webim_wx.js'); // 腾讯云 im 包
var imhandler = require('./../../utils/im_handler.js'); // 这个是所有 im 事件的 js

var chatDetails = function (_wepy$page) {
    _inherits(chatDetails, _wepy$page);

    function chatDetails() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, chatDetails);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = chatDetails.__proto__ || Object.getPrototypeOf(chatDetails)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            usingComponents: {
                'wxc-loading': '../../../packages/@minui/wxc-loading/dist/index'
            }
        }, _this.components = {}, _this.data = {
            isShow: true,
            toView: '',
            friendId: '',
            friendName: '',
            friendAvatarUrl: '',
            /**
             * 消息集合（结构如下）：
             * msgTime 消息时间
             * myself 消息发送人 1 - 自己发的 0 - 好友发的
             * avatarUrl 头像
             * msgText 消息内容
            */
            messages: [], // 消息集合
            complete: 0, // 是否还有历史消息可以拉取，1 - 表示没有，0 - 表示有
            content: '', // 输入框的文本值
            lock: false, // 发送消息锁 true - 加锁状态 false - 解锁状态
            scroll_height: 0
        }, _this.methods = {
            /**
             * 获取文本的消息
            */
            getContent: function getContent(e) {
                this.content = e.detail.value;
            },

            /**
             * 发送消息
            */
            sendMsg: function sendMsg(e) {
                // debugger
                var that = this;
                if (that.lock) {
                    wx.showToast({
                        title: '发消息太急了，慢一点',
                        icon: 'none'
                    });
                    return;
                }
                // 开始加锁
                that.lock = true;
                if (that.content == '' || !that.content.replace(/^\s*|\s*$/g, '')) {
                    wx.showToast({
                        title: '输入消息内容',
                        icon: 'none'
                    });
                    that.lock = false;
                    return;
                }
                var content = that.content;
                // 调用腾讯IM发送消息
                imhandler.onSendMsg(content, function cbOk() {
                    that.addMessage(content, true, that);
                }, function cbErr(err) {
                    im.Log.error("消息发送失败", err);
                });
                // 解锁
                that.lock = false;
                that.$apply();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(chatDetails, [{
        key: 'onShow',
        value: function onShow() {
            var that = this;
            // 私聊参数初始化
            imhandler.init({
                accountMode: _wepy2.default.$instance.globalData.im.accountMode,
                accountType: _wepy2.default.$instance.globalData.im.accountType,
                sdkAppID: _wepy2.default.$instance.globalData.im.sdkappid,
                selType: im.SESSION_TYPE.C2C, //私聊
                imId: _wepy2.default.$instance.globalData.im.identifier,
                imName: _wepy2.default.$instance.globalData.im.imName,
                imAvatarUrl: _wepy2.default.$instance.globalData.im.imAvatarUrl,
                friendId: that.data.friendId,
                friendName: that.data.friendName,
                friendAvatarUrl: that.data.friendAvatarUrl,
                contactListThat: null,
                chatThat: that
            });
            _wepy2.default.$instance.initImParams(function cbOk() {
                // 检查是否登录返回 true 和 false,不登录则重新登录
                if (im.checkLogin()) {
                    imhandler.getC2CHistoryMsgs(function cbOk(result) {
                        that.handlerHistoryMsgs(result, that);
                    });
                } else {
                    imhandler.login(that, _wepy2.default.$instance.globalData, function () {
                        imhandler.getC2CHistoryMsgs(function cbOk(result) {
                            that.handlerHistoryMsgs(result, that);
                        });
                    });
                }
                wx.hideLoading();
            });
        }
    }, {
        key: 'onReady',
        value: function onReady() {
            var _this2 = this;

            var query = wx.createSelectorQuery();
            query.select('.reply').boundingClientRect(function (rect) {
                _this2.scroll_height = wx.getSystemInfoSync().windowHeight - rect.height;
                _this2.$apply();
            }).exec();
        }
    }, {
        key: 'onLoad',
        value: function onLoad(options) {
            var that = this;
            if (options) {
                // 设置会话列表传参过来的好友id
                that.friendId = options.friendId, that.friendName = options.friendName, that.friendAvatarUrl = options.friendAvatarUrl;
                wx.setNavigationBarTitle({
                    title: options.friendName
                });
            }
            // 校验好友关系
            wx.request({
                url: _api.accountCheck,
                method: 'POST',
                data: {
                    "From_Account": wx.getStorageSync('loginData').imID,
                    "To_Account": options.friendId
                },
                success: function success(res) {
                    if (res.statusCode != 200) {
                        wx.showToast({
                            title: '好友校验失败',
                            icon: 'none'
                        });
                    }
                }
            });
            that.data.messages = []; // 清空历史消息
        }
    }, {
        key: 'addMessage',

        /**
         * 发送消息
        */
        value: function addMessage(msg, isSend, that) {
            var messages = that.messages;
            var message = {
                'myself': isSend ? 1 : 0,
                'avatarUrl': isSend ? _wepy2.default.$instance.globalData.im.imAvatarUrl : that.friendAvatarUrl,
                'msgText': msg,
                'msgTime': util.getDateDiff(Date.parse(new Date()))
            };
            messages.push(message);
            that.messages = messages, that.content = ''; // 清空输入框文本
            that.$apply();
            that.scrollToBottom();
        }
    }, {
        key: 'scrollToBottom',
        value: function scrollToBottom() {
            this.toView = 'row_' + (this.messages.length - 1);
            this.$apply();
        }
        /**
         * 处理历史消息
        */

    }, {
        key: 'handlerHistoryMsgs',
        value: function handlerHistoryMsgs(result, that) {
            var historyMsgs = [];
            for (var i = 0; i < result.MsgList.length; i++) {
                var msg = result.MsgList[i];
                var message = {
                    'myself': msg.isSend ? 1 : 0,
                    'avatarUrl': msg.isSend ? _wepy2.default.$instance.globalData.im.imAvatarUrl : that.friendAvatarUrl,
                    'msgText': msg.elems[0].content.text,
                    'msgTime': util.getDateDiff(msg.time * 1000)
                };
                historyMsgs.push(message);
            }
            // 拉取消息后，可以先将下一次拉取信息所需要的数据存储起来
            wx.setStorageSync('lastMsgTime', result.LastMsgTime);
            wx.setStorageSync('msgKey', result.MsgKey);
            that.messages = historyMsgs, that.complete = result.Complete;
            that.toView = 'row_' + (historyMsgs.length - 1);
            that.isShow = false;
            that.$apply();
        }
    }]);

    return chatDetails;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(chatDetails , 'subpackage/chatIM/chatDetails'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXREZXRhaWxzLmpzIl0sIm5hbWVzIjpbInV0aWwiLCJyZXF1aXJlIiwiaW0iLCJpbWhhbmRsZXIiLCJjaGF0RGV0YWlscyIsImNvbmZpZyIsInVzaW5nQ29tcG9uZW50cyIsImNvbXBvbmVudHMiLCJkYXRhIiwiaXNTaG93IiwidG9WaWV3IiwiZnJpZW5kSWQiLCJmcmllbmROYW1lIiwiZnJpZW5kQXZhdGFyVXJsIiwibWVzc2FnZXMiLCJjb21wbGV0ZSIsImNvbnRlbnQiLCJsb2NrIiwic2Nyb2xsX2hlaWdodCIsIm1ldGhvZHMiLCJnZXRDb250ZW50IiwiZSIsImRldGFpbCIsInZhbHVlIiwic2VuZE1zZyIsInRoYXQiLCJ3eCIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsInJlcGxhY2UiLCJvblNlbmRNc2ciLCJjYk9rIiwiYWRkTWVzc2FnZSIsImNiRXJyIiwiZXJyIiwiTG9nIiwiZXJyb3IiLCIkYXBwbHkiLCJpbml0IiwiYWNjb3VudE1vZGUiLCJ3ZXB5IiwiJGluc3RhbmNlIiwiZ2xvYmFsRGF0YSIsImFjY291bnRUeXBlIiwic2RrQXBwSUQiLCJzZGthcHBpZCIsInNlbFR5cGUiLCJTRVNTSU9OX1RZUEUiLCJDMkMiLCJpbUlkIiwiaWRlbnRpZmllciIsImltTmFtZSIsImltQXZhdGFyVXJsIiwiY29udGFjdExpc3RUaGF0IiwiY2hhdFRoYXQiLCJpbml0SW1QYXJhbXMiLCJjaGVja0xvZ2luIiwiZ2V0QzJDSGlzdG9yeU1zZ3MiLCJyZXN1bHQiLCJoYW5kbGVySGlzdG9yeU1zZ3MiLCJsb2dpbiIsImhpZGVMb2FkaW5nIiwicXVlcnkiLCJjcmVhdGVTZWxlY3RvclF1ZXJ5Iiwic2VsZWN0IiwiYm91bmRpbmdDbGllbnRSZWN0IiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJ3aW5kb3dIZWlnaHQiLCJyZWN0IiwiaGVpZ2h0IiwiZXhlYyIsIm9wdGlvbnMiLCJzZXROYXZpZ2F0aW9uQmFyVGl0bGUiLCJyZXF1ZXN0IiwidXJsIiwiYWNjb3VudENoZWNrIiwibWV0aG9kIiwiZ2V0U3RvcmFnZVN5bmMiLCJpbUlEIiwic3VjY2VzcyIsInJlcyIsInN0YXR1c0NvZGUiLCJtc2ciLCJpc1NlbmQiLCJtZXNzYWdlIiwiZ2V0RGF0ZURpZmYiLCJEYXRlIiwicGFyc2UiLCJwdXNoIiwic2Nyb2xsVG9Cb3R0b20iLCJsZW5ndGgiLCJoaXN0b3J5TXNncyIsImkiLCJNc2dMaXN0IiwiZWxlbXMiLCJ0ZXh0IiwidGltZSIsInNldFN0b3JhZ2VTeW5jIiwiTGFzdE1zZ1RpbWUiLCJNc2dLZXkiLCJDb21wbGV0ZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxPQUFPQyxRQUFRLHFCQUFSLENBQVgsQyxDQUEyQztBQUMzQyxJQUFJQyxLQUFLRCxRQUFRLHlCQUFSLENBQVQsQyxDQUE2QztBQUM3QyxJQUFJRSxZQUFZRixRQUFRLDJCQUFSLENBQWhCLEMsQ0FBc0Q7O0lBRWpDRyxXOzs7Ozs7Ozs7Ozs7OztvTUFDakJDLE0sR0FBUztBQUNMQyw2QkFBaUI7QUFDYiwrQkFBZTtBQURGO0FBRFosUyxRQUtUQyxVLEdBQWEsRSxRQUViQyxJLEdBQU87QUFDSEMsb0JBQVEsSUFETDtBQUVIQyxvQkFBTyxFQUZKO0FBR0hDLHNCQUFVLEVBSFA7QUFJSEMsd0JBQVksRUFKVDtBQUtIQyw2QkFBaUIsRUFMZDtBQU1IOzs7Ozs7O0FBT0FDLHNCQUFVLEVBYlAsRUFhVTtBQUNiQyxzQkFBVSxDQWRQLEVBY1U7QUFDYkMscUJBQVMsRUFmTixFQWVVO0FBQ2JDLGtCQUFNLEtBaEJILEVBZ0JVO0FBQ2JDLDJCQUFlO0FBakJaLFMsUUFtQlBDLE8sR0FBVTtBQUNOOzs7QUFHQUMsc0JBSk0sc0JBSUtDLENBSkwsRUFJTztBQUNULHFCQUFLTCxPQUFMLEdBQWVLLEVBQUVDLE1BQUYsQ0FBU0MsS0FBeEI7QUFDSCxhQU5LOztBQU9OOzs7QUFHQUMsbUJBVk0sbUJBVUVILENBVkYsRUFVSTtBQUNOO0FBQ0Esb0JB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QUh0QjtBQUlWLCtCQUFXaEcsS0FBS3NGLFdBQUwsQ0FBaUJILElBQUljLElBQUosR0FBVyxJQUE1QjtBQUpELGlCQUFkO0FBTUFMLDRCQUFZSCxJQUFaLENBQWlCSixPQUFqQjtBQUNIO0FBQ0Q7QUFDQTNELGVBQUd3RSxjQUFILENBQWtCLGFBQWxCLEVBQWlDdkMsT0FBT3dDLFdBQXhDO0FBQ0F6RSxlQUFHd0UsY0FBSCxDQUFrQixRQUFsQixFQUE0QnZDLE9BQU95QyxNQUFuQztBQUNBM0UsaUJBQUtYLFFBQUwsR0FBZ0I4RSxXQUFoQixFQUNBbkUsS0FBS1YsUUFBTCxHQUFnQjRDLE9BQU8wQyxRQUR2QjtBQUVBNUUsaUJBQUtmLE1BQUwsR0FBYyxVQUFVa0YsWUFBWUQsTUFBWixHQUFxQixDQUEvQixDQUFkO0FBQ0FsRSxpQkFBS2hCLE1BQUwsR0FBYyxLQUFkO0FBQ0FnQixpQkFBS2EsTUFBTDtBQUNIOzs7O0VBdExvQ0csZUFBSzZELEk7O2tCQUF6QmxHLFciLCJmaWxlIjoiY2hhdERldGFpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbmltcG9ydCB7IGFjY291bnRDaGVjayB9IGZyb20gJy4uLy4uL2FwaS9hcGkuanMnXHJcbnZhciB1dGlsID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbC5qcycpOyAvLyDovazmjaLml7bpl7Tmj5Lku7ZcclxudmFyIGltID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvd2ViaW1fd3guanMnKTsgLy8g6IW+6K6v5LqRIGltIOWMhVxyXG52YXIgaW1oYW5kbGVyID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvaW1faGFuZGxlci5qcycpOyAvLyDov5nkuKrmmK/miYDmnIkgaW0g5LqL5Lu255qEIGpzXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBjaGF0RGV0YWlscyBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgICAgdXNpbmdDb21wb25lbnRzOiB7XHJcbiAgICAgICAgICAgICd3eGMtbG9hZGluZyc6ICcuLi8uLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLWxvYWRpbmcvZGlzdC9pbmRleCdcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuICAgIGNvbXBvbmVudHMgPSB7fTtcclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICAgIGlzU2hvdzogdHJ1ZSxcclxuICAgICAgICB0b1ZpZXc6JycsXHJcbiAgICAgICAgZnJpZW5kSWQ6ICcnLCBcclxuICAgICAgICBmcmllbmROYW1lOiAnJyxcclxuICAgICAgICBmcmllbmRBdmF0YXJVcmw6ICcnLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOa2iOaBr+mbhuWQiO+8iOe7k+aehOWmguS4i++8ie+8mlxyXG4gICAgICAgICAqIG1zZ1RpbWUg5raI5oGv5pe26Ze0XHJcbiAgICAgICAgICogbXlzZWxmIOa2iOaBr+WPkemAgeS6uiAxIC0g6Ieq5bex5Y+R55qEIDAgLSDlpb3lj4vlj5HnmoRcclxuICAgICAgICAgKiBhdmF0YXJVcmwg5aS05YOPXHJcbiAgICAgICAgICogbXNnVGV4dCDmtojmga/lhoXlrrlcclxuICAgICAgICAqL1xyXG4gICAgICAgIG1lc3NhZ2VzOiBbXSwvLyDmtojmga/pm4blkIhcclxuICAgICAgICBjb21wbGV0ZTogMCwgLy8g5piv5ZCm6L+Y5pyJ5Y6G5Y+y5raI5oGv5Y+v5Lul5ouJ5Y+W77yMMSAtIOihqOekuuayoeacie+8jDAgLSDooajnpLrmnIlcclxuICAgICAgICBjb250ZW50OiAnJywgLy8g6L6T5YWl5qGG55qE5paH5pys5YC8XHJcbiAgICAgICAgbG9jazogZmFsc2UsIC8vIOWPkemAgea2iOaBr+mUgSB0cnVlIC0g5Yqg6ZSB54q25oCBIGZhbHNlIC0g6Kej6ZSB54q25oCBXHJcbiAgICAgICAgc2Nyb2xsX2hlaWdodDogMCxcclxuICAgIH07XHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOiOt+WPluaWh+acrOeahOa2iOaBr1xyXG4gICAgICAgICovXHJcbiAgICAgICAgZ2V0Q29udGVudChlKXtcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50ID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWPkemAgea2iOaBr1xyXG4gICAgICAgICovXHJcbiAgICAgICAgc2VuZE1zZyhlKXtcclxuICAgICAgICAgICAgLy8gZGVidWdnZXJcclxuICAgICAgICAgICAgdmFyIHRoYXQgPSB0aGlzXHJcbiAgICAgICAgICAgIGlmKHRoYXQubG9jayl7XHJcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5Y+R5raI5oGv5aSq5oCl5LqG77yM5oWi5LiA54K5JyxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOidub25lJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyDlvIDlp4vliqDplIFcclxuICAgICAgICAgICAgdGhhdC5sb2NrID0gdHJ1ZVxyXG4gICAgICAgICAgICBpZiAodGhhdC5jb250ZW50ID09ICcnIHx8ICF0aGF0LmNvbnRlbnQucmVwbGFjZSgvXlxccyp8XFxzKiQvZywgJycpKSB7XHJcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn6L6T5YWl5raI5oGv5YaF5a65JyxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOidub25lJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGF0LmxvY2sgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gdGhhdC5jb250ZW50XHJcbiAgICAgICAgICAgIC8vIOiwg+eUqOiFvuiur0lN5Y+R6YCB5raI5oGvXHJcbiAgICAgICAgICAgIGltaGFuZGxlci5vblNlbmRNc2coY29udGVudCwgZnVuY3Rpb24gY2JPaygpIHtcclxuICAgICAgICAgICAgICAgIHRoYXQuYWRkTWVzc2FnZShjb250ZW50LCB0cnVlLCB0aGF0KVxyXG4gICAgICAgICAgICB9LCBmdW5jdGlvbiBjYkVycihlcnIpIHtcclxuICAgICAgICAgICAgICAgIGltLkxvZy5lcnJvcihcIua2iOaBr+WPkemAgeWksei0pVwiLCBlcnIpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC8vIOino+mUgVxyXG4gICAgICAgICAgICB0aGF0LmxvY2sgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGF0LiRhcHBseSgpXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIG9uU2hvdygpe1xyXG4gICAgICAgIHZhciB0aGF0ID0gdGhpc1xyXG4gICAgICAgIC8vIOengeiBiuWPguaVsOWIneWni+WMllxyXG4gICAgICAgIGltaGFuZGxlci5pbml0KHtcclxuICAgICAgICAgICAgYWNjb3VudE1vZGU6IHdlcHkuJGluc3RhbmNlLmdsb2JhbERhdGEuaW0uYWNjb3VudE1vZGUsXHJcbiAgICAgICAgICAgIGFjY291bnRUeXBlOiB3ZXB5LiRpbnN0YW5jZS5nbG9iYWxEYXRhLmltLmFjY291bnRUeXBlLFxyXG4gICAgICAgICAgICBzZGtBcHBJRDogd2VweS4kaW5zdGFuY2UuZ2xvYmFsRGF0YS5pbS5zZGthcHBpZCxcclxuICAgICAgICAgICAgc2VsVHlwZTogaW0uU0VTU0lPTl9UWVBFLkMyQywgLy/np4HogYpcclxuICAgICAgICAgICAgaW1JZDogd2VweS4kaW5zdGFuY2UuZ2xvYmFsRGF0YS5pbS5pZGVudGlmaWVyLFxyXG4gICAgICAgICAgICBpbU5hbWU6IHdlcHkuJGluc3RhbmNlLmdsb2JhbERhdGEuaW0uaW1OYW1lLFxyXG4gICAgICAgICAgICBpbUF2YXRhclVybDogd2VweS4kaW5zdGFuY2UuZ2xvYmFsRGF0YS5pbS5pbUF2YXRhclVybCxcclxuICAgICAgICAgICAgZnJpZW5kSWQ6IHRoYXQuZGF0YS5mcmllbmRJZCxcclxuICAgICAgICAgICAgZnJpZW5kTmFtZTogdGhhdC5kYXRhLmZyaWVuZE5hbWUsXHJcbiAgICAgICAgICAgIGZyaWVuZEF2YXRhclVybDogdGhhdC5kYXRhLmZyaWVuZEF2YXRhclVybCxcclxuICAgICAgICAgICAgY29udGFjdExpc3RUaGF0OiBudWxsLFxyXG4gICAgICAgICAgICBjaGF0VGhhdDogdGhhdFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgd2VweS4kaW5zdGFuY2UuaW5pdEltUGFyYW1zKGZ1bmN0aW9uIGNiT2soKSB7XHJcbiAgICAgICAgICAgIC8vIOajgOafpeaYr+WQpueZu+W9lei/lOWbniB0cnVlIOWSjCBmYWxzZSzkuI3nmbvlvZXliJnph43mlrDnmbvlvZVcclxuICAgICAgICAgICAgaWYgKGltLmNoZWNrTG9naW4oKSkge1xyXG4gICAgICAgICAgICAgICAgaW1oYW5kbGVyLmdldEMyQ0hpc3RvcnlNc2dzKGZ1bmN0aW9uIGNiT2socmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5oYW5kbGVySGlzdG9yeU1zZ3MocmVzdWx0LCB0aGF0KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGltaGFuZGxlci5sb2dpbih0aGF0LCB3ZXB5LiRpbnN0YW5jZS5nbG9iYWxEYXRhLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1oYW5kbGVyLmdldEMyQ0hpc3RvcnlNc2dzKGZ1bmN0aW9uIGNiT2socmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuaGFuZGxlckhpc3RvcnlNc2dzKHJlc3VsdCwgdGhhdClcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgb25SZWFkeSgpe1xyXG4gICAgICAgIGxldCBxdWVyeSA9IHd4LmNyZWF0ZVNlbGVjdG9yUXVlcnkoKTtcclxuICAgICAgICBxdWVyeS5zZWxlY3QoJy5yZXBseScpLmJvdW5kaW5nQ2xpZW50UmVjdChyZWN0PT57XHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsX2hlaWdodCA9IHd4LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93SGVpZ2h0IC0gcmVjdC5oZWlnaHRcclxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgIH0pLmV4ZWMoKTtcclxuICAgIH1cclxuICAgIG9uTG9hZChvcHRpb25zKSB7XHJcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzXHJcbiAgICAgICAgaWYgKG9wdGlvbnMpIHsgLy8g6K6+572u5Lya6K+d5YiX6KGo5Lyg5Y+C6L+H5p2l55qE5aW95Y+LaWRcclxuICAgICAgICAgICAgdGhhdC5mcmllbmRJZCA9IG9wdGlvbnMuZnJpZW5kSWQsXHJcbiAgICAgICAgICAgIHRoYXQuZnJpZW5kTmFtZSA9IG9wdGlvbnMuZnJpZW5kTmFtZSxcclxuICAgICAgICAgICAgdGhhdC5mcmllbmRBdmF0YXJVcmwgPSBvcHRpb25zLmZyaWVuZEF2YXRhclVybFxyXG4gICAgICAgICAgICB3eC5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IG9wdGlvbnMuZnJpZW5kTmFtZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDmoKHpqozlpb3lj4vlhbPns7tcclxuICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgdXJsOiBhY2NvdW50Q2hlY2ssXHJcbiAgICAgICAgICAgIG1ldGhvZDonUE9TVCcsXHJcbiAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgICAgXCJGcm9tX0FjY291bnRcIjogd3guZ2V0U3RvcmFnZVN5bmMoJ2xvZ2luRGF0YScpLmltSUQsXHJcbiAgICAgICAgICAgICAgICBcIlRvX0FjY291bnRcIjogb3B0aW9ucy5mcmllbmRJZCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczoocmVzKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYocmVzLnN0YXR1c0NvZGUgIT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICflpb3lj4vmoKHpqozlpLHotKUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICB9KSBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhhdC5kYXRhLm1lc3NhZ2VzID0gW10gLy8g5riF56m65Y6G5Y+y5raI5oGvXHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDlj5HpgIHmtojmga9cclxuICAgICovXHJcbiAgICBhZGRNZXNzYWdlKG1zZywgaXNTZW5kLCB0aGF0KXtcclxuICAgICAgICB2YXIgbWVzc2FnZXMgPSB0aGF0Lm1lc3NhZ2VzO1xyXG4gICAgICAgIHZhciBtZXNzYWdlID0ge1xyXG4gICAgICAgICAgICAnbXlzZWxmJzogaXNTZW5kID8gMSA6IDAsXHJcbiAgICAgICAgICAgICdhdmF0YXJVcmwnOiBpc1NlbmQgPyB3ZXB5LiRpbnN0YW5jZS5nbG9iYWxEYXRhLmltLmltQXZhdGFyVXJsIDogdGhhdC5mcmllbmRBdmF0YXJVcmwsXHJcbiAgICAgICAgICAgICdtc2dUZXh0JzogbXNnLFxyXG4gICAgICAgICAgICAnbXNnVGltZSc6IHV0aWwuZ2V0RGF0ZURpZmYoRGF0ZS5wYXJzZShuZXcgRGF0ZSgpKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgbWVzc2FnZXMucHVzaChtZXNzYWdlKTtcclxuICAgICAgICB0aGF0Lm1lc3NhZ2VzID0gbWVzc2FnZXMsXHJcbiAgICAgICAgdGhhdC5jb250ZW50ID0gJycgLy8g5riF56m66L6T5YWl5qGG5paH5pysXHJcbiAgICAgICAgdGhhdC4kYXBwbHkoKVxyXG4gICAgICAgIHRoYXQuc2Nyb2xsVG9Cb3R0b20oKTtcclxuICAgIH1cclxuICAgIHNjcm9sbFRvQm90dG9tKCl7XHJcbiAgICAgICB0aGlzLnRvVmlldyA9ICdyb3dfJyArICh0aGlzLm1lc3NhZ2VzLmxlbmd0aCAtIDEpXHJcbiAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWkhOeQhuWOhuWPsua2iOaBr1xyXG4gICAgKi9cclxuICAgIGhhbmRsZXJIaXN0b3J5TXNncyhyZXN1bHQsIHRoYXQpe1xyXG4gICAgICAgIHZhciBoaXN0b3J5TXNncyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0Lk1zZ0xpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIG1zZyA9IHJlc3VsdC5Nc2dMaXN0W2ldXHJcbiAgICAgICAgICAgIHZhciBtZXNzYWdlID0ge1xyXG4gICAgICAgICAgICAgICAgJ215c2VsZic6IG1zZy5pc1NlbmQgPyAxIDogMCxcclxuICAgICAgICAgICAgICAgICdhdmF0YXJVcmwnOiBtc2cuaXNTZW5kID8gd2VweS4kaW5zdGFuY2UuZ2xvYmFsRGF0YS5pbS5pbUF2YXRhclVybCA6IHRoYXQuZnJpZW5kQXZhdGFyVXJsLFxyXG4gICAgICAgICAgICAgICAgJ21zZ1RleHQnOiBtc2cuZWxlbXNbMF0uY29udGVudC50ZXh0LFxyXG4gICAgICAgICAgICAgICAgJ21zZ1RpbWUnOiB1dGlsLmdldERhdGVEaWZmKG1zZy50aW1lICogMTAwMClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoaXN0b3J5TXNncy5wdXNoKG1lc3NhZ2UpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOaLieWPlua2iOaBr+WQju+8jOWPr+S7peWFiOWwhuS4i+S4gOasoeaLieWPluS/oeaBr+aJgOmcgOimgeeahOaVsOaNruWtmOWCqOi1t+adpVxyXG4gICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdsYXN0TXNnVGltZScsIHJlc3VsdC5MYXN0TXNnVGltZSk7XHJcbiAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ21zZ0tleScsIHJlc3VsdC5Nc2dLZXkpO1xyXG4gICAgICAgIHRoYXQubWVzc2FnZXMgPSBoaXN0b3J5TXNncyxcclxuICAgICAgICB0aGF0LmNvbXBsZXRlID0gcmVzdWx0LkNvbXBsZXRlXHJcbiAgICAgICAgdGhhdC50b1ZpZXcgPSAncm93XycgKyAoaGlzdG9yeU1zZ3MubGVuZ3RoIC0gMSlcclxuICAgICAgICB0aGF0LmlzU2hvdyA9IGZhbHNlXHJcbiAgICAgICAgdGhhdC4kYXBwbHkoKVxyXG4gICAgfVxyXG59XHJcbiJdfQ==