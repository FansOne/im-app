'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../../api/api.js');

var _utils = require('./../../utils/utils.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var productList = function (_wepy$page) {
    _inherits(productList, _wepy$page);

    function productList() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, productList);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = productList.__proto__ || Object.getPrototypeOf(productList)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '产品列表',
            usingComponents: {
                'wxc-search': '../../packages/@minui/wxc-search/dist/index',
                'wxc-abnor': '../../packages/@minui/wxc-abnor/dist/index',
                'wxc-loadmore': '../../packages/@minui/wxc-loadmore/dist/index'
            }
        }, _this.components = {}, _this.data = {
            allData: null,
            isShow: false
        }, _this.methods = {
            // 跳转产品详情
            productDetails: function productDetails() {
                wx.navigateTo({
                    url: './productDetails'
                });
            },

            // 跳转搜索页面
            searchPage: function searchPage() {
                wx.navigateTo({
                    url: '../../pages/search?currentTab=4'
                });
            }
        }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(productList, [{
        key: 'onLoad',
        value: function onLoad(options) {
            var _this2 = this;

            // 获取产品数据
            (0, _utils.request)(_api.productLists, 'POST', { id: options.id }).then(function (res) {
                if (res.data.code == 1) {
                    _this2.isShow = false;
                    _this2.allData = res.data.data;
                } else {
                    _this2.isShow = true;
                }
                _this2.$apply();
            }).catch(function () {
                _this2.isShow = true;
                _this2.$apply();
            });
        }
    }]);

    return productList;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(productList , 'subpackage/square/productList'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RMaXN0LmpzIl0sIm5hbWVzIjpbInByb2R1Y3RMaXN0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImNvbXBvbmVudHMiLCJkYXRhIiwiYWxsRGF0YSIsImlzU2hvdyIsIm1ldGhvZHMiLCJwcm9kdWN0RGV0YWlscyIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsInNlYXJjaFBhZ2UiLCJldmVudHMiLCJvcHRpb25zIiwicHJvZHVjdExpc3RzIiwiaWQiLCJ0aGVuIiwicmVzIiwiY29kZSIsIiRhcHBseSIsImNhdGNoIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBLFc7Ozs7Ozs7Ozs7Ozs7O29NQUNqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QixNQURuQjtBQUVMQyw2QkFBZ0I7QUFDWiw4QkFBYyw2Q0FERjtBQUVaLDZCQUFhLDRDQUZEO0FBR1osZ0NBQWdCO0FBSEo7QUFGWCxTLFFBUVRDLFUsR0FBYSxFLFFBRWJDLEksR0FBTztBQUNIQyxxQkFBUSxJQURMO0FBRUhDLG9CQUFPO0FBRkosUyxRQUlQQyxPLEdBQVU7QUFDTjtBQUNBQywwQkFGTSw0QkFFVTtBQUNaQyxtQkFBR0MsVUFBSCxDQUFjO0FBQ1ZDLHlCQUFLO0FBREssaUJBQWQ7QUFHSCxhQU5LOztBQU9OO0FBQ0FDLHNCQVJNLHdCQVFNO0FBQ1JILG1CQUFHQyxVQUFILENBQWM7QUFDVkM7QUFEVSxpQkFBZDtBQUdIO0FBWkssUyxRQWVWRSxNLEdBQVMsRTs7Ozs7K0JBQ0ZDLE8sRUFBUztBQUFBOztBQUNaO0FBQ0EsZ0NBQVFDLGlCQUFSLEVBQXFCLE1BQXJCLEVBQTRCLEVBQUVDLElBQUlGLFFBQVFFLEVBQWQsRUFBNUIsRUFBK0NDLElBQS9DLENBQW9ELGVBQUs7QUFDckQsb0JBQUdDLElBQUlkLElBQUosQ0FBU2UsSUFBVCxJQUFnQixDQUFuQixFQUFxQjtBQUNqQiwyQkFBS2IsTUFBTCxHQUFjLEtBQWQ7QUFDQSwyQkFBS0QsT0FBTCxHQUFlYSxJQUFJZCxJQUFKLENBQVNBLElBQXhCO0FBQ0gsaUJBSEQsTUFHSztBQUNELDJCQUFLRSxNQUFMLEdBQWMsSUFBZDtBQUNIO0FBQ0QsdUJBQUtjLE1BQUw7QUFDSCxhQVJELEVBUUdDLEtBUkgsQ0FRUyxZQUFJO0FBQ1QsdUJBQUtmLE1BQUwsR0FBYyxJQUFkO0FBQ0EsdUJBQUtjLE1BQUw7QUFDSCxhQVhEO0FBWUg7Ozs7RUE3Q29DRSxlQUFLQyxJOztrQkFBekJ4QixXIiwiZmlsZSI6InByb2R1Y3RMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG5pbXBvcnQgeyBwcm9kdWN0TGlzdHMgfSBmcm9tICcuLi8uLi9hcGkvYXBpLmpzJztcclxuaW1wb3J0IHsgcmVxdWVzdCx0b2FzdCB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzLmpzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcHJvZHVjdExpc3QgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfkuqflk4HliJfooagnLFxyXG4gICAgICAgIHVzaW5nQ29tcG9uZW50czp7XHJcbiAgICAgICAgICAgICd3eGMtc2VhcmNoJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtc2VhcmNoL2Rpc3QvaW5kZXgnLFxyXG4gICAgICAgICAgICAnd3hjLWFibm9yJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtYWJub3IvZGlzdC9pbmRleCcsXHJcbiAgICAgICAgICAgICd3eGMtbG9hZG1vcmUnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1sb2FkbW9yZS9kaXN0L2luZGV4J1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb21wb25lbnRzID0ge307XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgICBhbGxEYXRhOm51bGwsXHJcbiAgICAgICAgaXNTaG93OmZhbHNlXHJcbiAgICB9O1xyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgICAvLyDot7Povazkuqflk4Hor6bmg4VcclxuICAgICAgICBwcm9kdWN0RGV0YWlscygpe1xyXG4gICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgIHVybDogJy4vcHJvZHVjdERldGFpbHMnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g6Lez6L2s5pCc57Si6aG16Z2iXHJcbiAgICAgICAgc2VhcmNoUGFnZSgpe1xyXG4gICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgIHVybDogYC4uLy4uL3BhZ2VzL3NlYXJjaD9jdXJyZW50VGFiPTRgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZXZlbnRzID0ge307XHJcbiAgICBvbkxvYWQob3B0aW9ucykge1xyXG4gICAgICAgIC8vIOiOt+WPluS6p+WTgeaVsOaNrlxyXG4gICAgICAgIHJlcXVlc3QocHJvZHVjdExpc3RzLCdQT1NUJyx7IGlkOiBvcHRpb25zLmlkfSkudGhlbihyZXM9PntcclxuICAgICAgICAgICAgaWYocmVzLmRhdGEuY29kZSA9PTEpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1Nob3cgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGxEYXRhID0gcmVzLmRhdGEuZGF0YVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNTaG93ID0gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICB9KS5jYXRjaCgoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLmlzU2hvdyA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgIH0pXHJcbiAgICB9O1xyXG59XHJcbiJdfQ==