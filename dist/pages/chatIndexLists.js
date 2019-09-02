'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _registerPopup = require('./../components/registerPopup.js');

var _registerPopup2 = _interopRequireDefault(_registerPopup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var util = require('./../utils/util.js'); // 转换时间插件
var im = require('./../utils/webim_wx.js'); // 腾讯云 im 包
var imhandler = require('./../utils/im_handler.js'); // 这个是所有 im 事件的 js

var chatIndexLists = function (_wepy$page) {
    _inherits(chatIndexLists, _wepy$page);

    function chatIndexLists() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, chatIndexLists);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = chatIndexLists.__proto__ || Object.getPrototypeOf(chatIndexLists)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '消息',
            usingComponents: {
                'wxc-abnor': '../../packages/@minui/wxc-abnor/dist/index',
                'wxc-loading': '../../packages/@minui/wxc-loading/dist/index'
            }
        }, _this.components = {
            registerPopup: _registerPopup2.default
        }, _this.data = {
            isNoData: false, // isNoData 用于判断是否无数据列表，然后页面做出无数据列表的反应 TODO 效果未实现
            contactList: [],
            isShow: true
        }, _this.methods = {
            /**
            * go chat.wxml
            */
            linkChat: function linkChat(e) {
                wx.navigateTo({
                    url: '/subpackage/chatIM/chatDetails?friendId=' + e.currentTarget.dataset.id + '&friendName=' + e.currentTarget.dataset.name + '&friendAvatarUrl=' + e.currentTarget.dataset.image
                });
            }
        }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(chatIndexLists, [{
        key: 'onShow',
        value: function onShow() {
            var that = this;
            // 会话列表所需参数初始化 需将当前会话好友数据清空
            imhandler.init({
                accountMode: _wepy2.default.$instance.globalData.im.accountMode,
                accountType: _wepy2.default.$instance.globalData.im.accountType,
                sdkAppID: _wepy2.default.$instance.globalData.im.sdkAppID,
                selType: im.SESSION_TYPE.C2C,
                imId: _wepy2.default.$instance.globalData.im.imId,
                imName: _wepy2.default.$instance.globalData.im.imName,
                imAvatarUrl: _wepy2.default.$instance.globalData.im.imAvatarUrl,
                friendId: null,
                friendName: null,
                friendAvatarUrl: null,
                contactListThat: that,
                chatThat: null
            });
            _wepy2.default.$instance.initImParams(function cbOk() {
                // 检查是否登录返回 true 和 false,不登录则重新登录
                if (im.checkLogin()) {
                    that.initRecentContactList();
                    // 初始化最近会话的消息未读数（监听新消息事件）
                    im.syncMsgs(imhandler.onMsgNotify());
                } else {
                    imhandler.login(that, _wepy2.default.$instance.globalData, function () {
                        that.initRecentContactList();
                        // 初始化最近会话的消息未读数（监听新消息事件）
                        im.syncMsgs(imhandler.onMsgNotify());
                    });
                }
                wx.hideLoading();
            });
        }
    }, {
        key: 'onLoad',
        value: function onLoad() {
            // console.log(wepy.$instance.globalData)
            var find = wx.getStorageSync('loginData').find;
            if (find == 0) {
                this.isShow = false;
            } else {
                this.isShow = false;
                this.isNoData = true;
            }
        }
    }, {
        key: 'initRecentContactList',

        /**
        * 拉取最近联系人列表
        */
        value: function initRecentContactList() {
            im.Log.warn("开始拉取最近联系人列表");
            var that = this;
            // 真正获取会话列表的方法 count: 最近的会话数 ,最大可设置为 100 只获取有价值数据
            im.getRecentContactList({ 'Count': 10 }, function (resp) {

                if (resp.SessionItem && resp.SessionItem.length > 0) {
                    var contactList = resp.SessionItem.map(function (item, index) {
                        return {
                            "friendId": item.To_Account,
                            "friendName": item.C2cNick,
                            "friendAvatarUrl": item.C2cImage,
                            "msgTime": util.getDateDiff(item.MsgTimeStamp * 1000),
                            "msg": item.MsgShow,
                            "unreadMsgCount": item.UnreadMsgCount
                        };
                    });
                    // 设置联系人列表
                    that.contactList = contactList;
                    that.isNoData = true;
                    that.$apply();
                    that.updateUnread();
                } else {
                    that.isNoData = false, that.$apply();
                }
            });
            im.Log.warn("成功拉取最近联系人列表");
            this.isShow = false;
        }
        /**
         * 更新未读消息数
        */

    }, {
        key: 'updateUnread',
        value: function updateUnread() {
            var that = this;
            // 还需要获取未读消息数
            var sessionMap = im.MsgStore.sessMap();
            var contactList = that.contactList;
            for (var i in sessionMap) {
                var session = sessionMap[i];
                if (session.unread() > 0) {
                    contactList = contactList.map(function (item, index) {
                        if (item.friendId === session.id()) {
                            item.unreadMsgCount = session.unread();
                        }
                        return item;
                    });
                }
            }
            // 设置联系人列表
            that.contactList = contactList;
            that.$apply();
        }
    }]);

    return chatIndexLists;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(chatIndexLists , 'pages/chatIndexLists'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRJbmRleExpc3RzLmpzIl0sIm5hbWVzIjpbInV0aWwiLCJyZXF1aXJlIiwiaW0iLCJpbWhhbmRsZXIiLCJjaGF0SW5kZXhMaXN0cyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJ1c2luZ0NvbXBvbmVudHMiLCJjb21wb25lbnRzIiwicmVnaXN0ZXJQb3B1cCIsImRhdGEiLCJpc05vRGF0YSIsImNvbnRhY3RMaXN0IiwiaXNTaG93IiwibWV0aG9kcyIsImxpbmtDaGF0IiwiZSIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaWQiLCJuYW1lIiwiaW1hZ2UiLCJldmVudHMiLCJ0aGF0IiwiaW5pdCIsImFjY291bnRNb2RlIiwid2VweSIsIiRpbnN0YW5jZSIsImdsb2JhbERhdGEiLCJhY2NvdW50VHlwZSIsInNka0FwcElEIiwic2VsVHlwZSIsIlNFU1NJT05fVFlQRSIsIkMyQyIsImltSWQiLCJpbU5hbWUiLCJpbUF2YXRhclVybCIsImZyaWVuZElkIiwiZnJpZW5kTmFtZSIsImZyaWVuZEF2YXRhclVybCIsImNvbnRhY3RMaXN0VGhhdCIsImNoYXRUaGF0IiwiaW5pdEltUGFyYW1zIiwiY2JPayIsImNoZWNrTG9naW4iLCJpbml0UmVjZW50Q29udGFjdExpc3QiLCJzeW5jTXNncyIsIm9uTXNnTm90aWZ5IiwibG9naW4iLCJoaWRlTG9hZGluZyIsImZpbmQiLCJnZXRTdG9yYWdlU3luYyIsIkxvZyIsIndhcm4iLCJnZXRSZWNlbnRDb250YWN0TGlzdCIsInJlc3AiLCJTZXNzaW9uSXRlbSIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIlRvX0FjY291bnQiLCJDMmNOaWNrIiwiQzJjSW1hZ2UiLCJnZXREYXRlRGlmZiIsIk1zZ1RpbWVTdGFtcCIsIk1zZ1Nob3ciLCJVbnJlYWRNc2dDb3VudCIsIiRhcHBseSIsInVwZGF0ZVVucmVhZCIsInNlc3Npb25NYXAiLCJNc2dTdG9y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QUFDQSxnQkFBSStDLGFBQWF2RSxHQUFHd0UsUUFBSCxDQUFZQyxPQUFaLEVBQWpCO0FBQ0EsZ0JBQUkvRCxjQUFjYyxLQUFLZCxXQUF2QjtBQUNBLGlCQUFLLElBQUlnRSxDQUFULElBQWNILFVBQWQsRUFBMEI7QUFDMUIsb0JBQUlJLFVBQVVKLFdBQVdHLENBQVgsQ0FBZDtBQUNBLG9CQUFJQyxRQUFRQyxNQUFSLEtBQW1CLENBQXZCLEVBQTBCO0FBQ3RCbEUsa0NBQWNBLFlBQVlpRCxHQUFaLENBQWdCLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUMzQyw0QkFBSUQsS0FBS3RCLFFBQUwsS0FBa0JxQyxRQUFRdkQsRUFBUixFQUF0QixFQUFvQztBQUNoQ3dDLGlDQUFLaUIsY0FBTCxHQUFzQkYsUUFBUUMsTUFBUixFQUF0QjtBQUNIO0FBQ0QsK0JBQU9oQixJQUFQO0FBQ0gscUJBTGEsQ0FBZDtBQU1IO0FBQ0E7QUFDRDtBQUNBcEMsaUJBQUtkLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0FjLGlCQUFLNkMsTUFBTDtBQUNIOzs7O0VBbEl1QzFDLGVBQUttRCxJOztrQkFBNUI1RSxjIiwiZmlsZSI6ImNoYXRJbmRleExpc3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG5pbXBvcnQgcmVnaXN0ZXJQb3B1cCBmcm9tICcuLi9jb21wb25lbnRzL3JlZ2lzdGVyUG9wdXAnO1xyXG5sZXQgdXRpbCA9IHJlcXVpcmUoJy4uL3V0aWxzL3V0aWwuanMnKTsgLy8g6L2s5o2i5pe26Ze05o+S5Lu2XHJcbmxldCBpbSA9IHJlcXVpcmUoJy4uL3V0aWxzL3dlYmltX3d4LmpzJyk7IC8vIOiFvuiur+S6kSBpbSDljIVcclxubGV0IGltaGFuZGxlciA9IHJlcXVpcmUoJy4uL3V0aWxzL2ltX2hhbmRsZXIuanMnKTsgLy8g6L+Z5Liq5piv5omA5pyJIGltIOS6i+S7tueahCBqc1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgY2hhdEluZGV4TGlzdHMgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmtojmga8nLFxyXG4gICAgICAgIHVzaW5nQ29tcG9uZW50czoge1xyXG4gICAgICAgICAgICAnd3hjLWFibm9yJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtYWJub3IvZGlzdC9pbmRleCcsXHJcbiAgICAgICAgICAgICd3eGMtbG9hZGluZyc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLWxvYWRpbmcvZGlzdC9pbmRleCdcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuICAgIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgICAgcmVnaXN0ZXJQb3B1cFxyXG4gICAgfTtcclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICAgIGlzTm9EYXRhOiBmYWxzZSwgLy8gaXNOb0RhdGEg55So5LqO5Yik5pat5piv5ZCm5peg5pWw5o2u5YiX6KGo77yM54S25ZCO6aG16Z2i5YGa5Ye65peg5pWw5o2u5YiX6KGo55qE5Y+N5bqUIFRPRE8g5pWI5p6c5pyq5a6e546wXHJcbiAgICAgICAgY29udGFjdExpc3Q6W10sXHJcbiAgICAgICAgaXNTaG93OiB0cnVlXHJcbiAgICB9O1xyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgICAvKipcclxuICAgICAgICAqIGdvIGNoYXQud3htbFxyXG4gICAgICAgICovXHJcbiAgICAgICAgbGlua0NoYXQoZSl7XHJcbiAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICB1cmw6ICcvc3VicGFja2FnZS9jaGF0SU0vY2hhdERldGFpbHM/ZnJpZW5kSWQ9JyArIGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkXHJcbiAgICAgICAgICAgICAgICArICcmZnJpZW5kTmFtZT0nICsgZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQubmFtZVxyXG4gICAgICAgICAgICAgICAgKyAnJmZyaWVuZEF2YXRhclVybD0nICsgZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW1hZ2UsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBldmVudHMgPSB7fTtcclxuICAgIG9uU2hvdygpe1xyXG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgICAgICAvLyDkvJror53liJfooajmiYDpnIDlj4LmlbDliJ3lp4vljJYg6ZyA5bCG5b2T5YmN5Lya6K+d5aW95Y+L5pWw5o2u5riF56m6XHJcbiAgICAgICAgaW1oYW5kbGVyLmluaXQoe1xyXG4gICAgICAgICAgICBhY2NvdW50TW9kZTogd2VweS4kaW5zdGFuY2UuZ2xvYmFsRGF0YS5pbS5hY2NvdW50TW9kZSxcclxuICAgICAgICAgICAgYWNjb3VudFR5cGU6IHdlcHkuJGluc3RhbmNlLmdsb2JhbERhdGEuaW0uYWNjb3VudFR5cGUsXHJcbiAgICAgICAgICAgIHNka0FwcElEOiB3ZXB5LiRpbnN0YW5jZS5nbG9iYWxEYXRhLmltLnNka0FwcElELFxyXG4gICAgICAgICAgICBzZWxUeXBlOiBpbS5TRVNTSU9OX1RZUEUuQzJDLFxyXG4gICAgICAgICAgICBpbUlkOiB3ZXB5LiRpbnN0YW5jZS5nbG9iYWxEYXRhLmltLmltSWQsXHJcbiAgICAgICAgICAgIGltTmFtZTogd2VweS4kaW5zdGFuY2UuZ2xvYmFsRGF0YS5pbS5pbU5hbWUsXHJcbiAgICAgICAgICAgIGltQXZhdGFyVXJsOiB3ZXB5LiRpbnN0YW5jZS5nbG9iYWxEYXRhLmltLmltQXZhdGFyVXJsLFxyXG4gICAgICAgICAgICBmcmllbmRJZDogbnVsbCxcclxuICAgICAgICAgICAgZnJpZW5kTmFtZTogbnVsbCxcclxuICAgICAgICAgICAgZnJpZW5kQXZhdGFyVXJsOiBudWxsLFxyXG4gICAgICAgICAgICBjb250YWN0TGlzdFRoYXQ6IHRoYXQsXHJcbiAgICAgICAgICAgIGNoYXRUaGF0OiBudWxsXHJcbiAgICAgICAgfSlcclxuICAgICAgICB3ZXB5LiRpbnN0YW5jZS5pbml0SW1QYXJhbXMoZnVuY3Rpb24gY2JPaygpe1xyXG4gICAgICAgICAgICAvLyDmo4Dmn6XmmK/lkKbnmbvlvZXov5Tlm54gdHJ1ZSDlkowgZmFsc2Us5LiN55m75b2V5YiZ6YeN5paw55m75b2VXHJcbiAgICAgICAgICAgIGlmIChpbS5jaGVja0xvZ2luKCkpIHtcclxuICAgICAgICAgICAgICAgIHRoYXQuaW5pdFJlY2VudENvbnRhY3RMaXN0KCk7XHJcbiAgICAgICAgICAgICAgICAvLyDliJ3lp4vljJbmnIDov5HkvJror53nmoTmtojmga/mnKror7vmlbDvvIjnm5HlkKzmlrDmtojmga/kuovku7bvvIlcclxuICAgICAgICAgICAgICAgIGltLnN5bmNNc2dzKGltaGFuZGxlci5vbk1zZ05vdGlmeSgpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGltaGFuZGxlci5sb2dpbih0aGF0LCB3ZXB5LiRpbnN0YW5jZS5nbG9iYWxEYXRhLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5pbml0UmVjZW50Q29udGFjdExpc3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyDliJ3lp4vljJbmnIDov5HkvJror53nmoTmtojmga/mnKror7vmlbDvvIjnm5HlkKzmlrDmtojmga/kuovku7bvvIlcclxuICAgICAgICAgICAgICAgICAgICBpbS5zeW5jTXNncyhpbWhhbmRsZXIub25Nc2dOb3RpZnkoKSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh3ZXB5LiRpbnN0YW5jZS5nbG9iYWxEYXRhKVxyXG4gICAgICAgIGxldCBmaW5kID0gd3guZ2V0U3RvcmFnZVN5bmMoJ2xvZ2luRGF0YScpLmZpbmQ7XHJcbiAgICAgICAgaWYoZmluZCA9PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5pc1Nob3cgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICB0aGlzLmlzU2hvdyA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuaXNOb0RhdGEgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgKiDmi4nlj5bmnIDov5HogZTns7vkurrliJfooahcclxuICAgICovXHJcbiAgICBpbml0UmVjZW50Q29udGFjdExpc3QoKXtcclxuICAgICAgICBpbS5Mb2cud2FybihcIuW8gOWni+aLieWPluacgOi/keiBlOezu+S6uuWIl+ihqFwiKTtcclxuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgLy8g55yf5q2j6I635Y+W5Lya6K+d5YiX6KGo55qE5pa55rOVIGNvdW50OiDmnIDov5HnmoTkvJror53mlbAgLOacgOWkp+WPr+iuvue9ruS4uiAxMDAg5Y+q6I635Y+W5pyJ5Lu35YC85pWw5o2uXHJcbiAgICAgICAgaW0uZ2V0UmVjZW50Q29udGFjdExpc3QoeyAnQ291bnQnOiAxMCB9LCBmdW5jdGlvbiAocmVzcCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHJlc3AuU2Vzc2lvbkl0ZW0gJiYgcmVzcC5TZXNzaW9uSXRlbS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY29udGFjdExpc3QgPSByZXNwLlNlc3Npb25JdGVtLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImZyaWVuZElkXCI6IGl0ZW0uVG9fQWNjb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJmcmllbmROYW1lXCI6IGl0ZW0uQzJjTmljayxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJmcmllbmRBdmF0YXJVcmxcIjogaXRlbS5DMmNJbWFnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtc2dUaW1lXCI6IHV0aWwuZ2V0RGF0ZURpZmYoaXRlbS5Nc2dUaW1lU3RhbXAgKiAxMDAwKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtc2dcIjogaXRlbS5Nc2dTaG93LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInVucmVhZE1zZ0NvdW50XCI6IGl0ZW0uVW5yZWFkTXNnQ291bnRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLy8g6K6+572u6IGU57O75Lq65YiX6KGoXHJcbiAgICAgICAgICAgICAgICB0aGF0LmNvbnRhY3RMaXN0ID0gY29udGFjdExpc3RcclxuICAgICAgICAgICAgICAgIHRoYXQuaXNOb0RhdGEgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpXHJcbiAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZVVucmVhZCgpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGF0LmlzTm9EYXRhID0gZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGltLkxvZy53YXJuKFwi5oiQ5Yqf5ouJ5Y+W5pyA6L+R6IGU57O75Lq65YiX6KGoXCIpO1xyXG4gICAgICAgIHRoaXMuaXNTaG93ID0gZmFsc2VcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5pu05paw5pyq6K+75raI5oGv5pWwXHJcbiAgICAqL1xyXG4gICAgdXBkYXRlVW5yZWFkKCl7XHJcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzXHJcbiAgICAgICAgLy8g6L+Y6ZyA6KaB6I635Y+W5pyq6K+75raI5oGv5pWwXHJcbiAgICAgICAgdmFyIHNlc3Npb25NYXAgPSBpbS5Nc2dTdG9yZS5zZXNzTWFwKCk7XHJcbiAgICAgICAgdmFyIGNvbnRhY3RMaXN0ID0gdGhhdC5jb250YWN0TGlzdFxyXG4gICAgICAgIGZvciAodmFyIGkgaW4gc2Vzc2lvbk1hcCkge1xyXG4gICAgICAgIHZhciBzZXNzaW9uID0gc2Vzc2lvbk1hcFtpXVxyXG4gICAgICAgIGlmIChzZXNzaW9uLnVucmVhZCgpID4gMCkge1xyXG4gICAgICAgICAgICBjb250YWN0TGlzdCA9IGNvbnRhY3RMaXN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLmZyaWVuZElkID09PSBzZXNzaW9uLmlkKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLnVucmVhZE1zZ0NvdW50ID0gc2Vzc2lvbi51bnJlYWQoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDorr7nva7ogZTns7vkurrliJfooahcclxuICAgICAgICB0aGF0LmNvbnRhY3RMaXN0ID0gY29udGFjdExpc3RcclxuICAgICAgICB0aGF0LiRhcHBseSgpXHJcbiAgICB9XHJcbn1cclxuIl19