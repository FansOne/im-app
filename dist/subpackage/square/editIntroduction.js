'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _utils = require('./../../utils/utils.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var editIntroduction = function (_wepy$page) {
    _inherits(editIntroduction, _wepy$page);

    function editIntroduction() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, editIntroduction);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = editIntroduction.__proto__ || Object.getPrototypeOf(editIntroduction)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '编辑个人简介',
            navigationBarBackgroundColor: '#FAFAFA',
            disableScroll: true
        }, _this.components = {}, _this.data = {
            leng: 0
        }, _this.methods = {
            sectionValue: function sectionValue(e) {
                var leng = e.detail.value.length;
                this.leng = leng;
            },
            formSubmit: function formSubmit(e) {
                var textarea = e.detail.value.textarea;
                if (this.starNum && textarea) {
                    request(api.work_reviews, 'POST', {
                        m_id: this.m_id,
                        contents: textarea,
                        num: this.starNum
                    }).then(function (res) {
                        wx.hideLoading();
                        if (res.data.status == 200) {
                            (0, _utils.toast)('评价成功', 'success');
                            setTimeout(function () {
                                wx.reLaunch({
                                    url: './orderLists'
                                });
                            }, 700);
                        } else {
                            (0, _utils.toast)(res.data.message || '请求服务器数据异常');
                        }
                    });
                } else {
                    (0, _utils.toast)('请完善信息后提交');
                }
            }
        }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(editIntroduction, [{
        key: 'onLoad',
        value: function onLoad() {}
    }]);

    return editIntroduction;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(editIntroduction , 'subpackage/square/editIntroduction'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRJbnRyb2R1Y3Rpb24uanMiXSwibmFtZXMiOlsiZWRpdEludHJvZHVjdGlvbiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwiZGlzYWJsZVNjcm9sbCIsImNvbXBvbmVudHMiLCJkYXRhIiwibGVuZyIsIm1ldGhvZHMiLCJzZWN0aW9uVmFsdWUiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJsZW5ndGgiLCJmb3JtU3VibWl0IiwidGV4dGFyZWEiLCJzdGFyTnVtIiwicmVxdWVzdCIsImFwaSIsIndvcmtfcmV2aWV3cyIsIm1faWQiLCJjb250ZW50cyIsIm51bSIsInRoZW4iLCJ3eCIsImhpZGVMb2FkaW5nIiwicmVzIiwic3RhdHVzIiwic2V0VGltZW91dCIsInJlTGF1bmNoIiwidXJsIiwibWVzc2FnZSIsImV2ZW50cyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxnQjs7Ozs7Ozs7Ozs7Ozs7OE1BQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCLFFBRG5CO0FBRUxDLDBDQUE2QixTQUZ4QjtBQUdMQywyQkFBYztBQUhULFMsUUFLVEMsVSxHQUFhLEUsUUFFYkMsSSxHQUFPO0FBQ0hDLGtCQUFLO0FBREYsUyxRQUdQQyxPLEdBQVU7QUFDTkMsd0JBRE0sd0JBQ09DLENBRFAsRUFDUztBQUNYLG9CQUFJSCxPQUFPRyxFQUFFQyxNQUFGLENBQVNDLEtBQVQsQ0FBZUMsTUFBMUI7QUFDQSxxQkFBS04sSUFBTCxHQUFZQSxJQUFaO0FBQ0gsYUFKSztBQUtOTyxzQkFMTSxzQkFLS0osQ0FMTCxFQUtPO0FBQ1Qsb0JBQUlLLFdBQVdMLEVBQUVDLE1BQUYsQ0FBU0MsS0FBVCxDQUFlRyxRQUE5QjtBQUNBLG9CQUFHLEtBQUtDLE9BQUwsSUFBZ0JELFFBQW5CLEVBQTRCO0FBQ3hCRSw0QkFBUUMsSUFBSUMsWUFBWixFQUF5QixNQUF6QixFQUFnQztBQUM1QkMsOEJBQU8sS0FBS0EsSUFEZ0I7QUFFNUJDLGtDQUFXTixRQUZpQjtBQUc1Qk8sNkJBQU0sS0FBS047QUFIaUIscUJBQWhDLEVBSUdPLElBSkgsQ0FJUSxlQUFLO0FBQ1RDLDJCQUFHQyxXQUFIO0FBQ0EsNEJBQUdDLElBQUlwQixJQUFKLENBQVNxQixNQUFULElBQW1CLEdBQXRCLEVBQTBCO0FBQ3RCLDhDQUFNLE1BQU4sRUFBYSxTQUFiO0FBQ0FDLHVDQUFXLFlBQU07QUFDYkosbUNBQUdLLFFBQUgsQ0FBWTtBQUNSQyx5Q0FBSztBQURHLGlDQUFaO0FBR0gsNkJBSkQsRUFJRyxHQUpIO0FBS0gseUJBUEQsTUFPSztBQUNELDhDQUFNSixJQUFJcEIsSUFBSixDQUFTeUIsT0FBVCxJQUFvQixXQUExQjtBQUNIO0FBQ0oscUJBaEJEO0FBaUJILGlCQWxCRCxNQWtCSztBQUNELHNDQUFNLFVBQU47QUFDSDtBQUNKO0FBNUJLLFMsUUErQlZDLE0sR0FBUyxFOzs7OztpQ0FDQSxDQUFFOzs7O0VBM0MrQkMsZUFBS0MsSTs7a0JBQTlCbEMsZ0IiLCJmaWxlIjoiZWRpdEludHJvZHVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICcuLi8uLi91dGlscy91dGlscy5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBlZGl0SW50cm9kdWN0aW9uIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn57yW6L6R5Liq5Lq6566A5LuLJyxcclxuICAgICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOicjRkFGQUZBJyxcclxuICAgICAgICBkaXNhYmxlU2Nyb2xsOnRydWVcclxuICAgIH07XHJcbiAgICBjb21wb25lbnRzID0ge307XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgICBsZW5nOjAsXHJcbiAgICB9O1xyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgICBzZWN0aW9uVmFsdWUoZSl7XHJcbiAgICAgICAgICAgIGxldCBsZW5nID0gZS5kZXRhaWwudmFsdWUubGVuZ3RoXHJcbiAgICAgICAgICAgIHRoaXMubGVuZyA9IGxlbmdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZvcm1TdWJtaXQoZSl7XHJcbiAgICAgICAgICAgIGxldCB0ZXh0YXJlYSA9IGUuZGV0YWlsLnZhbHVlLnRleHRhcmVhO1xyXG4gICAgICAgICAgICBpZih0aGlzLnN0YXJOdW0gJiYgdGV4dGFyZWEpe1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdChhcGkud29ya19yZXZpZXdzLCdQT1NUJyx7XHJcbiAgICAgICAgICAgICAgICAgICAgbV9pZCA6IHRoaXMubV9pZCxcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50cyA6IHRleHRhcmVhLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bSA6IHRoaXMuc3Rhck51bVxyXG4gICAgICAgICAgICAgICAgfSkudGhlbihyZXM9PntcclxuICAgICAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlcy5kYXRhLnN0YXR1cyA9PSAyMDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdCgn6K+E5Lu35oiQ5YqfJywnc3VjY2VzcycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3gucmVMYXVuY2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy4vb3JkZXJMaXN0cydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCA3MDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdChyZXMuZGF0YS5tZXNzYWdlIHx8ICfor7fmsYLmnI3liqHlmajmlbDmja7lvILluLgnKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdG9hc3QoJ+ivt+WujOWWhOS/oeaBr+WQjuaPkOS6pCcpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGV2ZW50cyA9IHt9XHJcbiAgICBvbkxvYWQoKSB7fTtcclxuICAgIC8vIE90aGVyIHByb3BlcnRpZXNcclxufVxyXG4iXX0=