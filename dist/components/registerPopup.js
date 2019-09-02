'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _utils = require('./../utils/utils.js');

var _api = require('./../api/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var registerPopup = function (_wepy$component) {
    _inherits(registerPopup, _wepy$component);

    function registerPopup() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, registerPopup);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = registerPopup.__proto__ || Object.getPrototypeOf(registerPopup)).call.apply(_ref, [this].concat(args))), _this), _this.components = {}, _this.data = {
            userRegister: false
        }, _this.methods = {
            // 遮罩禁止穿透事件
            preventTouchMove: function preventTouchMove() {},

            //获取用户信息
            getuserinfo: function getuserinfo(e) {
                wx.login({
                    success: function success(result) {
                        (0, _utils.request)(_api.imLogin, 'POST', { userInfo: e.detail.userInfo, code: result.code }).then(function (res) {
                            if (res.data.data.status == 200 || res.data.data.status == 0) {
                                wx.navigateTo({
                                    url: '../subpackage/square/personalRegistration?userId=' + res.data.data.userId + '&avatarUrl=' + e.detail.userInfo.avatarUrl
                                });
                            }
                        });
                    }
                });
            }
        }, _this.events = {}, _this.props = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(registerPopup, [{
        key: 'onLoad',
        value: function onLoad() {
            var find = wx.getStorageSync('loginData').find;
            // if(find == undefined){
            //     wx.login({
            //         success: (result) => {
            //             request(login,'POST',{ code:result.code}).then(res=>{
            //                 wx.hideLoading();
            //                 if(res.data.data.find){
            //                     this.userRegister = false
            //                 }else{
            //                     this.userRegister = true
            //                 }
            //                 this.$apply()
            //                 wx.setStorageSync('loginData', res.data.data);
            //             })
            //         }
            //     })
            // }else if (find != undefined){
            //     if(find){
            //         this.userRegister = false
            //     }else{
            //         this.userRegister = true
            //     }
            //     this.$apply()
            // }
        }
    }]);

    return registerPopup;
}(_wepy2.default.component);

exports.default = registerPopup;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyUG9wdXAuanMiXSwibmFtZXMiOlsicmVnaXN0ZXJQb3B1cCIsImNvbXBvbmVudHMiLCJkYXRhIiwidXNlclJlZ2lzdGVyIiwibWV0aG9kcyIsInByZXZlbnRUb3VjaE1vdmUiLCJnZXR1c2VyaW5mbyIsImUiLCJ3eCIsImxvZ2luIiwic3VjY2VzcyIsInJlc3VsdCIsImltTG9naW4iLCJ1c2VySW5mbyIsImRldGFpbCIsImNvZGUiLCJ0aGVuIiwicmVzIiwic3RhdHVzIiwibmF2aWdhdGVUbyIsInVybCIsInVzZXJJZCIsImF2YXRhclVybCIsImV2ZW50cyIsInByb3BzIiwiZmluZCIsImdldFN0b3JhZ2VTeW5jIiwid2VweSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQUNxQkEsYTs7Ozs7Ozs7Ozs7Ozs7d01BQ2pCQyxVLEdBQWEsRSxRQUViQyxJLEdBQU87QUFDSEMsMEJBQWE7QUFEVixTLFFBR1BDLE8sR0FBVTtBQUNOO0FBQ0FDLDRCQUZNLDhCQUVZLENBQUUsQ0FGZDs7QUFHTjtBQUNBQyx1QkFKTSx1QkFJTUMsQ0FKTixFQUlRO0FBQ1ZDLG1CQUFHQyxLQUFILENBQVM7QUFDTEMsNkJBQVMsaUJBQUNDLE1BQUQsRUFBWTtBQUNqQiw0Q0FBUUMsWUFBUixFQUFnQixNQUFoQixFQUF1QixFQUFFQyxVQUFTTixFQUFFTyxNQUFGLENBQVNELFFBQXBCLEVBQTZCRSxNQUFLSixPQUFPSSxJQUF6QyxFQUF2QixFQUNDQyxJQURELENBQ00sZUFBSztBQUNQLGdDQUFHQyxJQUFJZixJQUFKLENBQVNBLElBQVQsQ0FBY2dCLE1BQWQsSUFBd0IsR0FBeEIsSUFBK0JELElBQUlmLElBQUosQ0FBU0EsSUFBVCxDQUFjZ0IsTUFBZCxJQUF3QixDQUExRCxFQUE0RDtBQUN4RFYsbUNBQUdXLFVBQUgsQ0FBYztBQUNWQywrRkFBeURILElBQUlmLElBQUosQ0FBU0EsSUFBVCxDQUFjbUIsTUFBdkUsbUJBQTJGZCxFQUFFTyxNQUFGLENBQVNELFFBQVQsQ0FBa0JTO0FBRG5HLGlDQUFkO0FBR0g7QUFDSix5QkFQRDtBQVFIO0FBVkksaUJBQVQ7QUFZSDtBQWpCSyxTLFFBNkNWQyxNLEdBQVMsRSxRQUNUQyxLLEdBQVEsRTs7Ozs7aUNBM0JBO0FBQ0osZ0JBQUlDLE9BQU9qQixHQUFHa0IsY0FBSCxDQUFrQixXQUFsQixFQUErQkQsSUFBMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7Ozs7RUFsRHNDRSxlQUFLQyxTOztrQkFBM0I1QixhIiwiZmlsZSI6InJlZ2lzdGVyUG9wdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbmltcG9ydCB7IHJlcXVlc3QsdG9hc3QgfSBmcm9tICcuLi91dGlscy91dGlscy5qcyc7XHJcbmltcG9ydCB7IGxvZ2luLGltTG9naW4gfSBmcm9tICcuLi9hcGkvYXBpLmpzJ1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyByZWdpc3RlclBvcHVwIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gICAgY29tcG9uZW50cyA9IHt9O1xyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgICAgdXNlclJlZ2lzdGVyOmZhbHNlXHJcbiAgICB9O1xyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgICAvLyDpga7nvannpoHmraLnqb/pgI/kuovku7ZcclxuICAgICAgICBwcmV2ZW50VG91Y2hNb3ZlKCl7fSxcclxuICAgICAgICAvL+iOt+WPlueUqOaIt+S/oeaBr1xyXG4gICAgICAgIGdldHVzZXJpbmZvKGUpe1xyXG4gICAgICAgICAgICB3eC5sb2dpbih7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdChpbUxvZ2luLCdQT1NUJyx7IHVzZXJJbmZvOmUuZGV0YWlsLnVzZXJJbmZvLGNvZGU6cmVzdWx0LmNvZGUgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXM9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmRhdGEuZGF0YS5zdGF0dXMgPT0gMjAwIHx8IHJlcy5kYXRhLmRhdGEuc3RhdHVzID09IDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBgLi4vc3VicGFja2FnZS9zcXVhcmUvcGVyc29uYWxSZWdpc3RyYXRpb24/dXNlcklkPSR7cmVzLmRhdGEuZGF0YS51c2VySWR9JmF2YXRhclVybD0ke2UuZGV0YWlsLnVzZXJJbmZvLmF2YXRhclVybH1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBvbkxvYWQoKXtcclxuICAgICAgICBsZXQgZmluZCA9IHd4LmdldFN0b3JhZ2VTeW5jKCdsb2dpbkRhdGEnKS5maW5kO1xyXG4gICAgICAgIC8vIGlmKGZpbmQgPT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAvLyAgICAgd3gubG9naW4oe1xyXG4gICAgICAgIC8vICAgICAgICAgc3VjY2VzczogKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHJlcXVlc3QobG9naW4sJ1BPU1QnLHsgY29kZTpyZXN1bHQuY29kZX0pLnRoZW4ocmVzPT57XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGlmKHJlcy5kYXRhLmRhdGEuZmluZCl7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJSZWdpc3RlciA9IGZhbHNlXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyUmVnaXN0ZXIgPSB0cnVlXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnbG9naW5EYXRhJywgcmVzLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfSlcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAvLyB9ZWxzZSBpZiAoZmluZCAhPSB1bmRlZmluZWQpe1xyXG4gICAgICAgIC8vICAgICBpZihmaW5kKXtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMudXNlclJlZ2lzdGVyID0gZmFsc2VcclxuICAgICAgICAvLyAgICAgfWVsc2V7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnVzZXJSZWdpc3RlciA9IHRydWVcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG4gICAgZXZlbnRzID0ge307XHJcbiAgICBwcm9wcyA9IHt9XHJcbn1cclxuIl19