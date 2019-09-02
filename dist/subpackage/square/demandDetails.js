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

var demandDetails = function (_wepy$page) {
    _inherits(demandDetails, _wepy$page);

    function demandDetails() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, demandDetails);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = demandDetails.__proto__ || Object.getPrototypeOf(demandDetails)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '需求详情',
            usingComponents: {
                'wxc-icon': '../../packages/@minui/wxc-icon/dist/index'
            }
        }, _this.components = {}, _this.data = {
            previewImage: ['http://img4.imgtn.bdimg.com/it/u=1266668071,1814072937&fm=26&gp=0.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561699855392&di=647bb6dc468284b329014455ca5d21da&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20061031%2FImg246110560.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561699855391&di=72820d86de6fa16ccd4056e6dac42ccf&imgtype=0&src=http%3A%2F%2Fimg.mp.sohu.com%2Fupload%2F20170616%2F9e649cb9e00c424f96fc263273830a07_th.png', 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2085223376,536181091&fm=26&gp=0.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561699855388&di=4b037df9306c3669c2ca2205751aca23&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F63d0f703918fa0ec76d3f7b92d9759ee3d6ddb6a.jpg', 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=398659568,2690439867&fm=26&gp=0.jpg', 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2976842352,636810530&fm=26&gp=0.jpg', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2479004758,2731067208&fm=26&gp=0.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561700076645&di=606e5153c9ace64b31a11c3ac33a80c4&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F12%2F69%2F74%2F84c58PICAKM.jpg']
        }, _this.methods = {
            // 图片预览
            previewImage: function previewImage(img) {
                wx.previewImage({
                    current: img, // 当前显示图片的http链接
                    urls: this.previewImage // 需要预览的图片http链接列表
                });
            },

            // 拨打电话
            makePhoneCall: function makePhoneCall(phoneNumber) {
                wx.makePhoneCall({
                    phoneNumber: phoneNumber
                });
            }
        }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(demandDetails, [{
        key: 'onLoad',
        value: function onLoad() {}
    }]);

    return demandDetails;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(demandDetails , 'subpackage/square/demandDetails'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbWFuZERldGFpbHMuanMiXSwibmFtZXMiOlsiZGVtYW5kRGV0YWlscyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJ1c2luZ0NvbXBvbmVudHMiLCJjb21wb25lbnRzIiwiZGF0YSIsInByZXZpZXdJbWFnZSIsIm1ldGhvZHMiLCJpbWciLCJ3eCIsImN1cnJlbnQiLCJ1cmxzIiwibWFrZVBob25lQ2FsbCIsInBob25lTnVtYmVyIiwiZXZlbnRzIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLGE7Ozs7Ozs7Ozs7Ozs7O3dNQUNqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QixNQURuQjtBQUVMQyw2QkFBaUI7QUFDYiw0QkFBWTtBQURDO0FBRlosUyxRQU1UQyxVLEdBQWEsRSxRQUViQyxJLEdBQU87QUFDSEMsMEJBQWEsQ0FDVCx1RUFEUyxFQUVULGtNQUZTLEVBR1QsZ09BSFMsRUFJVCwrRkFKUyxFQUtULDRPQUxTLEVBTVQsK0ZBTlMsRUFPVCwrRkFQUyxFQVFULGdHQVJTLEVBU1QsNk1BVFM7QUFEVixTLFFBYVBDLE8sR0FBVTtBQUNOO0FBQ0FELHdCQUZNLHdCQUVPRSxHQUZQLEVBRVc7QUFDYkMsbUJBQUdILFlBQUgsQ0FBZ0I7QUFDWkksNkJBQVNGLEdBREcsRUFDRTtBQUNkRywwQkFBTSxLQUFLTCxZQUZDLENBRVk7QUFGWixpQkFBaEI7QUFJSCxhQVBLOztBQVFOO0FBQ0FNLHlCQVRNLHlCQVNRQyxXQVRSLEVBU29CO0FBQ3RCSixtQkFBR0csYUFBSCxDQUFpQjtBQUNiQyxpQ0FBYUE7QUFEQSxpQkFBakI7QUFHSDtBQWJLLFMsUUFnQlZDLE0sR0FBUyxFOzs7OztpQ0FDQSxDQUFFOzs7O0VBdkM0QkMsZUFBS0MsSTs7a0JBQTNCaEIsYSIsImZpbGUiOiJkZW1hbmREZXRhaWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZGVtYW5kRGV0YWlscyBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mcgOaxguivpuaDhScsXHJcbiAgICAgICAgdXNpbmdDb21wb25lbnRzOiB7XHJcbiAgICAgICAgICAgICd3eGMtaWNvbic6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLWljb24vZGlzdC9pbmRleCdcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuICAgIGNvbXBvbmVudHMgPSB7fTtcclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICAgIHByZXZpZXdJbWFnZTpbXHJcbiAgICAgICAgICAgICdodHRwOi8vaW1nNC5pbWd0bi5iZGltZy5jb20vaXQvdT0xMjY2NjY4MDcxLDE4MTQwNzI5MzcmZm09MjYmZ3A9MC5qcGcnLFxyXG4gICAgICAgICAgICAnaHR0cHM6Ly90aW1nc2EuYmFpZHUuY29tL3RpbWc/aW1hZ2UmcXVhbGl0eT04MCZzaXplPWI5OTk5XzEwMDAwJnNlYz0xNTYxNjk5ODU1MzkyJmRpPTY0N2JiNmRjNDY4Mjg0YjMyOTAxNDQ1NWNhNWQyMWRhJmltZ3R5cGU9MCZzcmM9aHR0cCUzQSUyRiUyRnBob3RvY2RuLnNvaHUuY29tJTJGMjAwNjEwMzElMkZJbWcyNDYxMTA1NjAuanBnJyxcclxuICAgICAgICAgICAgJ2h0dHBzOi8vdGltZ3NhLmJhaWR1LmNvbS90aW1nP2ltYWdlJnF1YWxpdHk9ODAmc2l6ZT1iOTk5OV8xMDAwMCZzZWM9MTU2MTY5OTg1NTM5MSZkaT03MjgyMGQ4NmRlNmZhMTZjY2Q0MDU2ZTZkYWM0MmNjZiZpbWd0eXBlPTAmc3JjPWh0dHAlM0ElMkYlMkZpbWcubXAuc29odS5jb20lMkZ1cGxvYWQlMkYyMDE3MDYxNiUyRjllNjQ5Y2I5ZTAwYzQyNGY5NmZjMjYzMjczODMwYTA3X3RoLnBuZycsXHJcbiAgICAgICAgICAgICdodHRwczovL3NzMy5iZHN0YXRpYy5jb20vNzBjRnY4U2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9MjA4NTIyMzM3Niw1MzYxODEwOTEmZm09MjYmZ3A9MC5qcGcnLFxyXG4gICAgICAgICAgICAnaHR0cHM6Ly90aW1nc2EuYmFpZHUuY29tL3RpbWc/aW1hZ2UmcXVhbGl0eT04MCZzaXplPWI5OTk5XzEwMDAwJnNlYz0xNTYxNjk5ODU1Mzg4JmRpPTRiMDM3ZGY5MzA2YzM2NjljMmNhMjIwNTc1MWFjYTIzJmltZ3R5cGU9MCZzcmM9aHR0cCUzQSUyRiUyRmcuaGlwaG90b3MuYmFpZHUuY29tJTJGemhpZGFvJTJGcGljJTJGaXRlbSUyRjYzZDBmNzAzOTE4ZmEwZWM3NmQzZjdiOTJkOTc1OWVlM2Q2ZGRiNmEuanBnJyxcclxuICAgICAgICAgICAgJ2h0dHBzOi8vc3MxLmJkc3RhdGljLmNvbS83MGNGdVhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0zOTg2NTk1NjgsMjY5MDQzOTg2NyZmbT0yNiZncD0wLmpwZycsXHJcbiAgICAgICAgICAgICdodHRwczovL3NzMi5iZHN0YXRpYy5jb20vNzBjRnZuU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9Mjk3Njg0MjM1Miw2MzY4MTA1MzAmZm09MjYmZ3A9MC5qcGcnLFxyXG4gICAgICAgICAgICAnaHR0cHM6Ly9zczAuYmRzdGF0aWMuY29tLzcwY0Z2SFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTI0NzkwMDQ3NTgsMjczMTA2NzIwOCZmbT0yNiZncD0wLmpwZycsXHJcbiAgICAgICAgICAgICdodHRwczovL3RpbWdzYS5iYWlkdS5jb20vdGltZz9pbWFnZSZxdWFsaXR5PTgwJnNpemU9Yjk5OTlfMTAwMDAmc2VjPTE1NjE3MDAwNzY2NDUmZGk9NjA2ZTUxNTNjOWFjZTY0YjMxYTExYzNhYzMzYTgwYzQmaW1ndHlwZT0wJnNyYz1odHRwJTNBJTJGJTJGcGljLnFpYW50dWNkbi5jb20lMkY1OHBpYyUyRjEyJTJGNjklMkY3NCUyRjg0YzU4UElDQUtNLmpwZydcclxuICAgICAgICBdLFxyXG4gICAgfTtcclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgLy8g5Zu+54mH6aKE6KeIXHJcbiAgICAgICAgcHJldmlld0ltYWdlKGltZyl7XHJcbiAgICAgICAgICAgIHd4LnByZXZpZXdJbWFnZSh7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50OiBpbWcsIC8vIOW9k+WJjeaYvuekuuWbvueJh+eahGh0dHDpk77mjqVcclxuICAgICAgICAgICAgICAgIHVybHM6IHRoaXMucHJldmlld0ltYWdlIC8vIOmcgOimgemihOiniOeahOWbvueJh2h0dHDpk77mjqXliJfooahcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOaLqOaJk+eUteivnVxyXG4gICAgICAgIG1ha2VQaG9uZUNhbGwocGhvbmVOdW1iZXIpe1xyXG4gICAgICAgICAgICB3eC5tYWtlUGhvbmVDYWxsKHtcclxuICAgICAgICAgICAgICAgIHBob25lTnVtYmVyOiBwaG9uZU51bWJlclxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZXZlbnRzID0ge307XHJcbiAgICBvbkxvYWQoKSB7fTtcclxuICAgIFxyXG59XHJcbiJdfQ==