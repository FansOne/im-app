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

var releaseViedoText = function (_wepy$page) {
    _inherits(releaseViedoText, _wepy$page);

    function releaseViedoText() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, releaseViedoText);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = releaseViedoText.__proto__ || Object.getPrototypeOf(releaseViedoText)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '发布视频'
        }, _this.components = {}, _this.data = {
            tempFilePath: ''
        }, _this.methods = {
            chooseVideo: function chooseVideo() {
                var _this2 = this;

                wx.showModal({
                    title: '上传提示',
                    content: '建议上传视频时长不大于2分钟',
                    showCancel: false,
                    confirmText: '知道了',
                    confirmColor: '#3CC51F',
                    success: function success(result) {
                        if (result.confirm) {
                            wx.chooseVideo({
                                sourceType: ['album'],
                                success: function success(res) {
                                    _this2.tempFilePath = res.tempFilePath;
                                    _this2.$apply();
                                }
                            });
                        }
                    }
                });
            }
        }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(releaseViedoText, [{
        key: 'onLoad',
        value: function onLoad() {}
    }]);

    return releaseViedoText;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(releaseViedoText , 'pages/releaseViedoText'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbGVhc2VWaWVkb1RleHQuanMiXSwibmFtZXMiOlsicmVsZWFzZVZpZWRvVGV4dCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZGF0YSIsInRlbXBGaWxlUGF0aCIsIm1ldGhvZHMiLCJjaG9vc2VWaWRlbyIsInd4Iiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50Iiwic2hvd0NhbmNlbCIsImNvbmZpcm1UZXh0IiwiY29uZmlybUNvbG9yIiwic3VjY2VzcyIsInJlc3VsdCIsImNvbmZpcm0iLCJzb3VyY2VUeXBlIiwicmVzIiwiJGFwcGx5IiwiZXZlbnRzIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLGdCOzs7Ozs7Ozs7Ozs7Ozs4TUFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0I7QUFEbkIsUyxRQUdUQyxVLEdBQWEsRSxRQUViQyxJLEdBQU87QUFDSEMsMEJBQWE7QUFEVixTLFFBR1BDLE8sR0FBVTtBQUNOQyx1QkFETSx5QkFDTztBQUFBOztBQUNUQyxtQkFBR0MsU0FBSCxDQUFhO0FBQ1RDLDJCQUFPLE1BREU7QUFFVEMsNkJBQVMsZ0JBRkE7QUFHVEMsZ0NBQVksS0FISDtBQUlUQyxpQ0FBYSxLQUpKO0FBS1RDLGtDQUFjLFNBTEw7QUFNVEMsNkJBQVMsaUJBQUNDLE1BQUQsRUFBWTtBQUNqQiw0QkFBSUEsT0FBT0MsT0FBWCxFQUFvQjtBQUNoQlQsK0JBQUdELFdBQUgsQ0FBZTtBQUNYVyw0Q0FBWSxDQUFDLE9BQUQsQ0FERDtBQUVYSCx5Q0FBUSxpQkFBQ0ksR0FBRCxFQUFRO0FBQ1osMkNBQUtkLFlBQUwsR0FBb0JjLElBQUlkLFlBQXhCO0FBQ0EsMkNBQUtlLE1BQUw7QUFDSDtBQUxVLDZCQUFmO0FBT0g7QUFDSjtBQWhCUSxpQkFBYjtBQWtCSDtBQXBCSyxTLFFBdUJWQyxNLEdBQVMsRTs7Ozs7aUNBQ0EsQ0FBRTs7OztFQWpDK0JDLGVBQUtDLEk7O2tCQUE5QnZCLGdCIiwiZmlsZSI6InJlbGVhc2VWaWVkb1RleHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyByZWxlYXNlVmllZG9UZXh0IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Y+R5biD6KeG6aKRJyxcclxuICAgIH07XHJcbiAgICBjb21wb25lbnRzID0ge307XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgICB0ZW1wRmlsZVBhdGg6JydcclxuICAgIH07XHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICAgIGNob29zZVZpZGVvKCl7XHJcbiAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+S4iuS8oOaPkOekuicsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAn5bu66K6u5LiK5Lyg6KeG6aKR5pe26ZW/5LiN5aSn5LqOMuWIhumSnycsXHJcbiAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNvbmZpcm1UZXh0OiAn55+l6YGT5LqGJyxcclxuICAgICAgICAgICAgICAgIGNvbmZpcm1Db2xvcjogJyMzQ0M1MUYnLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5jaG9vc2VWaWRlbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VUeXBlOiBbJ2FsYnVtJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOihyZXMpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbGVQYXRoID0gcmVzLnRlbXBGaWxlUGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBldmVudHMgPSB7fTtcclxuICAgIG9uTG9hZCgpIHt9O1xyXG59XHJcbiJdfQ==