'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var releaseImgText = function (_wepy$page) {
    _inherits(releaseImgText, _wepy$page);

    function releaseImgText() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, releaseImgText);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = releaseImgText.__proto__ || Object.getPrototypeOf(releaseImgText)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '发布图文'
        }, _this.components = {}, _this.data = {
            articleAbstractLength: 0
        }, _this.methods = {
            articleAbstractInput: function articleAbstractInput(e) {
                this.articleAbstractLength = e.detail.value.length;
            },
            formSubmit: function formSubmit(e) {
                console.log(e.detail.value);
            },
            editorPage: function editorPage() {
                // 编辑文章详情
                wx.navigateTo({
                    url: '../subpackage/editorRichText/editor?title=\u7F16\u8F91\u6587\u7AE0\u8BE6\u60C5'
                });
            }
        }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(releaseImgText, [{
        key: 'onLoad',
        value: function onLoad() {}
    }]);

    return releaseImgText;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(releaseImgText , 'pages/releaseImgText'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbGVhc2VJbWdUZXh0LmpzIl0sIm5hbWVzIjpbInJlbGVhc2VJbWdUZXh0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwiYXJ0aWNsZUFic3RyYWN0TGVuZ3RoIiwibWV0aG9kcyIsImFydGljbGVBYnN0cmFjdElucHV0IiwiZSIsImRldGFpbCIsInZhbHVlIiwibGVuZ3RoIiwiZm9ybVN1Ym1pdCIsImNvbnNvbGUiLCJsb2ciLCJlZGl0b3JQYWdlIiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwiZXZlbnRzIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLGM7Ozs7Ozs7Ozs7Ozs7OzBNQUNqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QjtBQURuQixTLFFBR1RDLFUsR0FBYSxFLFFBRWJDLEksR0FBTztBQUNIQyxtQ0FBc0I7QUFEbkIsUyxRQUdQQyxPLEdBQVU7QUFDTkMsZ0NBRE0sZ0NBQ2VDLENBRGYsRUFDaUI7QUFDbkIscUJBQUtILHFCQUFMLEdBQTZCRyxFQUFFQyxNQUFGLENBQVNDLEtBQVQsQ0FBZUMsTUFBNUM7QUFDSCxhQUhLO0FBSU5DLHNCQUpNLHNCQUlLSixDQUpMLEVBSU87QUFDVEssd0JBQVFDLEdBQVIsQ0FBWU4sRUFBRUMsTUFBRixDQUFTQyxLQUFyQjtBQUNILGFBTks7QUFPTkssc0JBUE0sd0JBT007QUFDUjtBQUNBQyxtQkFBR0MsVUFBSCxDQUFjO0FBQ1ZDO0FBRFUsaUJBQWQ7QUFHSDtBQVpLLFMsUUFlVkMsTSxHQUFTLEU7Ozs7O2lDQUNBLENBQUU7Ozs7RUF6QjZCQyxlQUFLQyxJOztrQkFBNUJyQixjIiwiZmlsZSI6InJlbGVhc2VJbWdUZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcmVsZWFzZUltZ1RleHQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflj5HluIPlm77mlocnLFxyXG4gICAgfTtcclxuICAgIGNvbXBvbmVudHMgPSB7fTtcclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICAgIGFydGljbGVBYnN0cmFjdExlbmd0aDowLFxyXG4gICAgfTtcclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgYXJ0aWNsZUFic3RyYWN0SW5wdXQoZSl7XHJcbiAgICAgICAgICAgIHRoaXMuYXJ0aWNsZUFic3RyYWN0TGVuZ3RoID0gZS5kZXRhaWwudmFsdWUubGVuZ3RoXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmb3JtU3VibWl0KGUpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlLmRldGFpbC52YWx1ZSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVkaXRvclBhZ2UoKXtcclxuICAgICAgICAgICAgLy8g57yW6L6R5paH56ug6K+m5oOFXHJcbiAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBgLi4vc3VicGFja2FnZS9lZGl0b3JSaWNoVGV4dC9lZGl0b3I/dGl0bGU957yW6L6R5paH56ug6K+m5oOFYFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZXZlbnRzID0ge307XHJcbiAgICBvbkxvYWQoKSB7fTtcclxufVxyXG4iXX0=