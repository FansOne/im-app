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

var positionDetails = function (_wepy$page) {
    _inherits(positionDetails, _wepy$page);

    function positionDetails() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, positionDetails);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = positionDetails.__proto__ || Object.getPrototypeOf(positionDetails)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '职位详情',
            usingComponents: {
                'wxc-icon': '../../packages/@minui/wxc-icon/dist/index',
                'wxc-price': '../../packages/@minui/wxc-price/dist/index'
            }
        }, _this.components = {}, _this.data = {
            recommendation: [{
                cover: '../../image/goods-img-default.png',
                name: '项目经理',
                address: '西安市 雁塔区 某某某',
                money: '23000'
            }, {
                cover: '../../image/goods-img-default.png',
                name: '产品销售',
                address: '西安市 雁塔区 某某某',
                money: '9000'
            }, {
                cover: '../../image/goods-img-default.png',
                name: '岗前培训',
                address: '西安市 雁塔区 某某某',
                money: '8000'
            }]
        }, _this.methods = {
            // 跳转企业
            enterprisePage: function enterprisePage() {
                wx.redirectTo({
                    url: './enterpriseDetails'
                });
            }
        }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(positionDetails, [{
        key: 'onLoad',
        value: function onLoad() {}
    }]);

    return positionDetails;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(positionDetails , 'subpackage/square/positionDetails'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc2l0aW9uRGV0YWlscy5qcyJdLCJuYW1lcyI6WyJwb3NpdGlvbkRldGFpbHMiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwidXNpbmdDb21wb25lbnRzIiwiY29tcG9uZW50cyIsImRhdGEiLCJyZWNvbW1lbmRhdGlvbiIsImNvdmVyIiwibmFtZSIsImFkZHJlc3MiLCJtb25leSIsIm1ldGhvZHMiLCJlbnRlcnByaXNlUGFnZSIsInd4IiwicmVkaXJlY3RUbyIsInVybCIsImV2ZW50cyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxlOzs7Ozs7Ozs7Ozs7Ozs0TUFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0IsTUFEbkI7QUFFTEMsNkJBQWlCO0FBQ2IsNEJBQVksMkNBREM7QUFFYiw2QkFBYTtBQUZBO0FBRlosUyxRQU9UQyxVLEdBQWEsRSxRQUViQyxJLEdBQU87QUFDSEMsNEJBQWUsQ0FDWDtBQUNJQyx1QkFBTSxtQ0FEVjtBQUVJQyxzQkFBSyxNQUZUO0FBR0lDLHlCQUFRLGFBSFo7QUFJSUMsdUJBQU07QUFKVixhQURXLEVBT1g7QUFDSUgsdUJBQU0sbUNBRFY7QUFFSUMsc0JBQUssTUFGVDtBQUdJQyx5QkFBUSxhQUhaO0FBSUlDLHVCQUFNO0FBSlYsYUFQVyxFQWFYO0FBQ0lILHVCQUFNLG1DQURWO0FBRUlDLHNCQUFLLE1BRlQ7QUFHSUMseUJBQVEsYUFIWjtBQUlJQyx1QkFBTTtBQUpWLGFBYlc7QUFEWixTLFFBc0JQQyxPLEdBQVU7QUFDTjtBQUNBQywwQkFGTSw0QkFFVTtBQUNaQyxtQkFBR0MsVUFBSCxDQUFjO0FBQ1ZDLHlCQUFLO0FBREssaUJBQWQ7QUFJSDtBQVBLLFMsUUFVVkMsTSxHQUFTLEU7Ozs7O2lDQUNBLENBQUU7Ozs7RUEzQzhCQyxlQUFLQyxJOztrQkFBN0JsQixlIiwiZmlsZSI6InBvc2l0aW9uRGV0YWlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHBvc2l0aW9uRGV0YWlscyBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+iBjOS9jeivpuaDhScsXHJcbiAgICAgICAgdXNpbmdDb21wb25lbnRzOiB7XHJcbiAgICAgICAgICAgICd3eGMtaWNvbic6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLWljb24vZGlzdC9pbmRleCcsXHJcbiAgICAgICAgICAgICd3eGMtcHJpY2UnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1wcmljZS9kaXN0L2luZGV4J1xyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG4gICAgY29tcG9uZW50cyA9IHt9O1xyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgICAgcmVjb21tZW5kYXRpb246W1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb3ZlcjonLi4vLi4vaW1hZ2UvZ29vZHMtaW1nLWRlZmF1bHQucG5nJyxcclxuICAgICAgICAgICAgICAgIG5hbWU6J+mhueebrue7j+eQhicsXHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzOifopb/lronluIIg6ZuB5aGU5Yy6IOafkOafkOafkCcsXHJcbiAgICAgICAgICAgICAgICBtb25leTonMjMwMDAnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvdmVyOicuLi8uLi9pbWFnZS9nb29kcy1pbWctZGVmYXVsdC5wbmcnLFxyXG4gICAgICAgICAgICAgICAgbmFtZTon5Lqn5ZOB6ZSA5ZSuJyxcclxuICAgICAgICAgICAgICAgIGFkZHJlc3M6J+ilv+WuieW4giDpm4HloZTljLog5p+Q5p+Q5p+QJyxcclxuICAgICAgICAgICAgICAgIG1vbmV5Oic5MDAwJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb3ZlcjonLi4vLi4vaW1hZ2UvZ29vZHMtaW1nLWRlZmF1bHQucG5nJyxcclxuICAgICAgICAgICAgICAgIG5hbWU6J+Wyl+WJjeWfueiurScsXHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzOifopb/lronluIIg6ZuB5aGU5Yy6IOafkOafkOafkCcsXHJcbiAgICAgICAgICAgICAgICBtb25leTonODAwMCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdXHJcbiAgICB9O1xyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgICAvLyDot7PovazkvIHkuJpcclxuICAgICAgICBlbnRlcnByaXNlUGFnZSgpe1xyXG4gICAgICAgICAgICB3eC5yZWRpcmVjdFRvKHtcclxuICAgICAgICAgICAgICAgIHVybDogJy4vZW50ZXJwcmlzZURldGFpbHMnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZXZlbnRzID0ge307XHJcbiAgICBvbkxvYWQoKSB7fTtcclxufVxyXG4iXX0=