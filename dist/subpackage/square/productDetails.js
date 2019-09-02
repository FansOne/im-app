'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var productDetails = function (_wepy$page) {
    _inherits(productDetails, _wepy$page);

    function productDetails() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, productDetails);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = productDetails.__proto__ || Object.getPrototypeOf(productDetails)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '产品详情',
            usingComponents: {
                'wxc-icon': '../../packages/@minui/wxc-icon/dist/index'
            }
        }, _this.components = {}, _this.data = {
            imgUrls: ['../../image/indexFirstBanner.png'],
            enterpriseFollow: false,
            amoyProductData: [{
                cover: '../../image/product.png',
                title: '无线路由器'
            }, {
                cover: '../../image/product.png',
                title: '无线路由器'
            }, {
                cover: '../../image/product.png',
                title: '无线路由器'
            }, {
                cover: '../../image/product.png',
                title: '无线路由器'
            }, {
                cover: '../../image/product.png',
                title: '无线路由器'
            }]
        }, _this.methods = {
            // 关注
            follow: function follow(index) {
                this.enterpriseFollow = !this.enterpriseFollow;
            }
        }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(productDetails, [{
        key: 'onLoad',
        value: function onLoad() {}
    }]);

    return productDetails;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(productDetails , 'subpackage/square/productDetails'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3REZXRhaWxzLmpzIl0sIm5hbWVzIjpbInByb2R1Y3REZXRhaWxzIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImNvbXBvbmVudHMiLCJkYXRhIiwiaW1nVXJscyIsImVudGVycHJpc2VGb2xsb3ciLCJhbW95UHJvZHVjdERhdGEiLCJjb3ZlciIsInRpdGxlIiwibWV0aG9kcyIsImZvbGxvdyIsImluZGV4IiwiZXZlbnRzIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLGM7Ozs7Ozs7Ozs7Ozs7OzBNQUNqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QixNQURuQjtBQUVMQyw2QkFBaUI7QUFDYiw0QkFBWTtBQURDO0FBRlosUyxRQU1UQyxVLEdBQWEsRSxRQUViQyxJLEdBQU87QUFDSEMscUJBQVMsQ0FDTCxrQ0FESyxDQUROO0FBSUhDLDhCQUFpQixLQUpkO0FBS0hDLDZCQUFnQixDQUNaO0FBQ0lDLHVCQUFNLHlCQURWO0FBRUlDLHVCQUFNO0FBRlYsYUFEWSxFQUtaO0FBQ0lELHVCQUFNLHlCQURWO0FBRUlDLHVCQUFNO0FBRlYsYUFMWSxFQVNaO0FBQ0lELHVCQUFNLHlCQURWO0FBRUlDLHVCQUFNO0FBRlYsYUFUWSxFQWFaO0FBQ0lELHVCQUFNLHlCQURWO0FBRUlDLHVCQUFNO0FBRlYsYUFiWSxFQWlCWjtBQUNJRCx1QkFBTSx5QkFEVjtBQUVJQyx1QkFBTTtBQUZWLGFBakJZO0FBTGIsUyxRQTRCUEMsTyxHQUFVO0FBQ047QUFDQUMsa0JBRk0sa0JBRUNDLEtBRkQsRUFFTztBQUNULHFCQUFLTixnQkFBTCxHQUF3QixDQUFDLEtBQUtBLGdCQUE5QjtBQUNIO0FBSkssUyxRQU9WTyxNLEdBQVMsRTs7Ozs7aUNBQ0EsQ0FBRTs7OztFQTdDNkJDLGVBQUtDLEk7O2tCQUE1QmhCLGMiLCJmaWxlIjoicHJvZHVjdERldGFpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBwcm9kdWN0RGV0YWlscyBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S6p+WTgeivpuaDhScsXHJcbiAgICAgICAgdXNpbmdDb21wb25lbnRzOiB7XHJcbiAgICAgICAgICAgICd3eGMtaWNvbic6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLWljb24vZGlzdC9pbmRleCdcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuICAgIGNvbXBvbmVudHMgPSB7fTtcclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICAgIGltZ1VybHM6IFtcclxuICAgICAgICAgICAgJy4uLy4uL2ltYWdlL2luZGV4Rmlyc3RCYW5uZXIucG5nJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZW50ZXJwcmlzZUZvbGxvdzpmYWxzZSxcclxuICAgICAgICBhbW95UHJvZHVjdERhdGE6W1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb3ZlcjonLi4vLi4vaW1hZ2UvcHJvZHVjdC5wbmcnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6J+aXoOe6v+i3r+eUseWZqCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY292ZXI6Jy4uLy4uL2ltYWdlL3Byb2R1Y3QucG5nJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOifml6Dnur/ot6/nlLHlmagnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvdmVyOicuLi8uLi9pbWFnZS9wcm9kdWN0LnBuZycsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTon5peg57q/6Lev55Sx5ZmoJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb3ZlcjonLi4vLi4vaW1hZ2UvcHJvZHVjdC5wbmcnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6J+aXoOe6v+i3r+eUseWZqCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY292ZXI6Jy4uLy4uL2ltYWdlL3Byb2R1Y3QucG5nJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOifml6Dnur/ot6/nlLHlmagnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXVxyXG4gICAgfTtcclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgLy8g5YWz5rOoXHJcbiAgICAgICAgZm9sbG93KGluZGV4KXtcclxuICAgICAgICAgICAgdGhpcy5lbnRlcnByaXNlRm9sbG93ID0gIXRoaXMuZW50ZXJwcmlzZUZvbGxvd1xyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIGV2ZW50cyA9IHt9O1xyXG4gICAgb25Mb2FkKCkge307XHJcbn1cclxuIl19