'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyComLoadings = require('./../npm/wepy-com-loadings/loadings.js');

var _wepyComLoadings2 = _interopRequireDefault(_wepyComLoadings);

var _registerPopup = require('./../components/registerPopup.js');

var _registerPopup2 = _interopRequireDefault(_registerPopup);

var _api = require('./../api/api.js');

var _utils = require('./../utils/utils.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var index = function (_wepy$page) {
    _inherits(index, _wepy$page);

    function index() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, index);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = index.__proto__ || Object.getPrototypeOf(index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            backgroundColorBottom: '#fff',
            usingComponents: {
                'wxc-toast': '../../packages/@minui/wxc-toast/dist/index',
                'wxc-loadmore': '../../packages/@minui/wxc-loadmore/dist/index',
                'wxc-abnor': '../../packages/@minui/wxc-abnor/dist/index',
                'wxc-loading': '../../packages/@minui/wxc-loading/dist/index',

                'wxc-icon': '../../packages/@minui/wxc-icon/dist/index',
                'wxc-search': '../../packages/@minui/wxc-search/dist/index'
            }
        }, _this.components = {
            Loadings1: _wepyComLoadings2.default,
            Loadings2: _wepyComLoadings2.default,
            Loadings3: _wepyComLoadings2.default,
            Loadings4: _wepyComLoadings2.default,
            Loadings5: _wepyComLoadings2.default,
            Loadings6: _wepyComLoadings2.default,
            Loadings7: _wepyComLoadings2.default,
            Loadings8: _wepyComLoadings2.default,
            Loadings9: _wepyComLoadings2.default,
            registerPopup: _registerPopup2.default
        }, _this.data = {
            imgUrls: ['../image/indexFirstBanner.png', '../image/indexFirstBanner.png', '../image/indexFirstBanner.png'],
            address: null,
            enterpriseCover: ['../image/q1.png', '../image/q1.png', '../image/q1.png', '../image/q1.png', '../image/q1.png', '../image/q1.png'],
            amoyElite: [{
                cover: '../image/userIconIndex.png',
                name: 'smile',
                prompt: '售前 大数据互联网'
            }, {
                cover: '../image/userIconIndex.png',
                name: 'smile',
                prompt: '售前 大数据互联网'
            }, {
                cover: '../image/userIconIndex.png',
                name: 'smile',
                prompt: '售前 大数据互联网'
            }, {
                cover: '../image/userIconIndex.png',
                name: 'smile',
                prompt: '售前 大数据互联网'
            }],
            secondLevelBanner: ['../image/indexTwoBanner.png'],
            amoyProduct: [{
                img: '../image/product.png',
                title: '无线路由器'
            }, {
                img: '../image/product.png',
                title: '无线路由器'
            }, {
                img: '../image/product.png',
                title: '无线路由器拾掇拾掇拾掇拾掇'
            }, {
                img: '../image/product.png',
                title: '无线路由器'
            }, {
                img: '../image/product.png',
                title: '无线路由器'
            }, {
                img: '../image/product.png',
                title: '无线路由器'
            }, {
                img: '../image/product.png',
                title: '无线路由器'
            }, {
                img: '../image/product.png',
                title: '无线路由器'
            }, {
                img: '../image/product.png',
                title: '无线路由器'
            }],
            recommend: [{
                follow: 1,
                explain: '总经理 / 互联网行业 / 西安市雁塔区',
                userName: '李丽丽',
                cover: '../image/indexRecommendUser.png',
                demandDescribe: '文案材料，讲解方案文案材料，讲解方案文案材料，讲解方案文案材料',
                work: '文案材料，讲解方案文案材料，讲解方案文案材 料，讲解方案',
                targetIndustries: 'IT/硬件',
                targetAddress: '西安市雁塔区高新大都荟',
                zanNums: 451
            }, {
                follow: 0,
                explain: '总经理 / 互联网行业 / 西安市雁塔区',
                userName: '花泽类',
                cover: '../image/indexRecommendUser.png',
                demandDescribe: '文案材料，讲解方案',
                work: '文案材料，讲解方案文案材料，讲解方案文案材 料，讲解方案',
                targetIndustries: 'IT/硬件',
                targetAddress: '西安市雁塔区高新大都荟',
                zanNums: 288,
                previewImage: ['http://img4.imgtn.bdimg.com/it/u=1266668071,1814072937&fm=26&gp=0.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561699855392&di=647bb6dc468284b329014455ca5d21da&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20061031%2FImg246110560.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561699855391&di=72820d86de6fa16ccd4056e6dac42ccf&imgtype=0&src=http%3A%2F%2Fimg.mp.sohu.com%2Fupload%2F20170616%2F9e649cb9e00c424f96fc263273830a07_th.png', 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2085223376,536181091&fm=26&gp=0.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561699855388&di=4b037df9306c3669c2ca2205751aca23&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F63d0f703918fa0ec76d3f7b92d9759ee3d6ddb6a.jpg', 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=398659568,2690439867&fm=26&gp=0.jpg', 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2976842352,636810530&fm=26&gp=0.jpg', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2479004758,2731067208&fm=26&gp=0.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561700076645&di=606e5153c9ace64b31a11c3ac33a80c4&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F12%2F69%2F74%2F84c58PICAKM.jpg']
            }, {
                follow: 1,
                explain: '总经理 / 互联网行业 / 西安市雁塔区',
                userName: '汪望迋',
                cover: '../image/indexRecommendUser.png',
                demandDescribe: '文案材料，讲解方案',
                work: '文案材料，讲解方案文案材料，讲解方案文案材 料，讲解方案',
                targetIndustries: 'IT/硬件',
                targetAddress: '西安市雁塔区高新大都荟',
                zanNums: 366
            }],
            loadmoreEnd: false, //已加载全部数据
            selectDomHeight: 0, //selectAll Height
            amoyEliteFixed: false //控制推荐标题吸顶
        }, _this.methods = {
            // 搜索
            searchPage: function searchPage() {
                wx.navigateTo({
                    url: './search'
                });
            },

            // 查看全文
            lookFullText: function lookFullText(index) {
                this.recommend[index].show = true;
            },

            // 隐藏全文
            hiddenFullText: function hiddenFullText(index) {
                this.recommend[index].show = false;
            },

            // 文章点赞
            fabulous: function fabulous(index) {
                this.recommend[index].fabulous = !this.recommend[index].fabulous;
                if (this.recommend[index].fabulous) {
                    this.recommend[index].zanNums++;
                } else {
                    this.recommend[index].zanNums--;
                }
            },

            // 关注
            follow: function follow(index) {
                this.recommend[index].follow = !this.recommend[index].follow;
            },

            // 图片预览
            previewImage: function previewImage(index, img) {
                wx.previewImage({
                    current: img, // 当前显示图片的http链接
                    urls: this.recommend[index].previewImage // 需要预览的图片http链接列表
                });
            },

            // 跳转企业分类页面
            enterpriseClassPage: function enterpriseClassPage() {
                // wx.navigateTo({
                //     url: './enterpriseClass'
                // });
            },

            // 跳转产品分类页面
            productClassPage: function productClassPage() {
                wx.navigateTo({
                    url: '../subpackage/square/productClass'
                });
            },

            // 企业详情
            enterpriseDetails: function enterpriseDetails(id) {
                wx.navigateTo({
                    url: '../subpackage/square/enterpriseDetails?id=' + id
                });
            },

            // 产品详情
            productDeatils: function productDeatils() {
                wx.navigateTo({
                    url: '../subpackage/square/productDetails'
                });
            },

            // 跳转个人详情
            personalDetailsPage: function personalDetailsPage(id) {
                wx.navigateTo({
                    url: '../subpackage/square/personalDetails?id=' + id
                });
            },

            // 跳转需求详情
            demandDetailsPage: function demandDetailsPage() {
                wx.navigateTo({
                    url: '../subpackage/square/demandDetails'
                });
            }
        }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(index, [{
        key: 'onReady',
        value: function onReady() {
            var _this2 = this;

            var query = wx.createSelectorQuery();
            query.selectAll('.search-wrap,#swiper,#amoyEnterpriseBox,#amoyEnterpriseBox,#enterpriseBox,#amoyElite,.homeFurnishingBox,#swiperTwo,.amoyProductBox').boundingClientRect(function (rect) {
                var selectDomHeight = 0;
                rect.forEach(function (element) {
                    selectDomHeight += element.height;
                });
                _this2.selectDomHeight = selectDomHeight - 15;
                _this2.$apply();
            }).exec();
        }
    }, {
        key: 'onShow',
        value: function onShow() {
            // wx.checkSession({
            //     success: ()=> {
            //         return;
            //     },
            //     fail: ()=> {
            //         // 登录
            //         wx.login({
            //             success: (result) => {
            //                 request(login,'POST',{ code:result.code}).then(res=>{
            //                     wx.hideLoading();
            //                     wx.setStorageSync('loginData', res.data.data);
            //                 })
            //             }
            //         })
            //     }
            // })
        }
    }, {
        key: 'onLoad',
        value: function onLoad() {
            // 获取地址
            // this.userAddress()
            // 请求首页数据&英陶show
            // let indexDatas = request(indexData)
            // Promise.all([indexDatas]).then(res=>{
            //     this.imgUrls = res[0].data.data.main
            //     this.enterpriseCover = res[0].data.data.company
            //     this.amoyElite = res[0].data.data.amoyElite
            //     this.secondLevelBanner = res[0].data.data.second
            //     this.amoyProduct = res[0].data.data.product
            //     this.$apply()
            // })
        }
    }, {
        key: 'onPageScroll',
        value: function onPageScroll(e) {
            if (e.scrollTop >= this.selectDomHeight) {
                this.amoyEliteFixed = true;
                this.$apply();
            } else {
                this.amoyEliteFixed = false;
                this.$apply();
            }
        }
    }, {
        key: 'onShareAppMessage',
        value: function onShareAppMessage(res) {
            var fullTextShare = {};
            if (res.from == "button") {
                fullTextShare.title = '\u5F53\u524D\u5206\u4EAB---' + res.target.dataset.username + '\uFF08\u6D4B\u8BD5\uFF09';
                fullTextShare.path = '/pages/index';
            }
            return fullTextShare;
        }
    }, {
        key: 'onReachBottom',
        value: function onReachBottom() {
            var _this3 = this;

            setTimeout(function () {
                _this3.loadmoreEnd = true;
                _this3.$apply();
            }, 1500);
        }
    }]);

    return index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImluZGV4IiwiY29uZmlnIiwiYmFja2dyb3VuZENvbG9yQm90dG9tIiwidXNpbmdDb21wb25lbnRzIiwiY29tcG9uZW50cyIsIkxvYWRpbmdzMSIsIkxvYWRpbmdzIiwiTG9hZGluZ3MyIiwiTG9hZGluZ3MzIiwiTG9hZGluZ3M0IiwiTG9hZGluZ3M1IiwiTG9hZGluZ3M2IiwiTG9hZGluZ3M3IiwiTG9hZGluZ3M4IiwiTG9hZGluZ3M5IiwicmVnaXN0ZXJQb3B1cCIsImRhdGEiLCJpbWdVcmxzIiwiYWRkcmVzcyIsImVudGVycHJpc2VDb3ZlciIsImFtb3lFbGl0ZSIsImNvdmVyIiwibmFtZSIsInByb21wdCIsInNlY29uZExldmVsQmFubmVyIiwiYW1veVByb2R1Y3QiLCJpbWciLCJ0aXRsZSIsInJlY29tbWVuZCIsImZvbGxvdyIsImV4cGxhaW4iLCJ1c2VyTmFtZSIsImRlbWFuZERlc2NyaWJlIiwid29yayIsInRhcmdldEluZHVzdHJpZXMiLCJ0YXJnZXRBZGRyZXNzIiwiemFuTnVtcyIsInByZXZpZXdJbWFnZSIsImxvYWRtb3JlRW5kIiwic2VsZWN0RG9tSGVpZ2h0IiwiYW1veUVsaXRlRml4ZWQiLCJtZXRob2RzIiwic2VhcmNoUGFnZSIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsImxvb2tGdWxsVGV4dCIsInNob3ciLCJoaWRkZW5GdWxsVGV4dCIsImZhYnVsb3VzIiwiY3VycmVudCIsInVybHMiLCJlbnRlcnByaXNlQ2xhc3NQYWdlIiwicHJvZHVjdENsYXNzUGFnZSIsImVudGVycHJpc2VEZXRhaWxzIiwiaWQiLCJwcm9kdWN0RGVhdGlscyIsInBlcnNvbmFsRGV0YWlsc1BhZ2UiLCJkZW1hbmREZXRhaWxzUGFnZSIsImV2ZW50cyIsInF1ZXJ5IiwiY3JlYXRlU2VsZWN0b3JRdWVyeSIsInNlbGVjdEFsbCIsImJvdW5kaW5nQ2xpZW50UmVjdCIsInJlY3QiLCJmb3JFYWNoIiwiZWxlbWVudCIsImhlaWdodCIsIiRhcHBseSIsImV4ZWMiLCJlIiwic2Nyb2xsVG9wIiwicmVzIiwiZnVsbFRleHRTaGFyZSIsImZyb20iLCJ0YXJnZXQiLCJkYXRhc2V0IiwidXNlcm5hbWUiLCJwYXRoIiwic2V0VGltZW91dCIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2pCQyxNLEdBQVM7QUFDTEMsbUNBQXNCLE1BRGpCO0FBRUxDLDZCQUFpQjtBQUNiLDZCQUFhLDRDQURBO0FBRWIsZ0NBQWdCLCtDQUZIO0FBR2IsNkJBQWEsNENBSEE7QUFJYiwrQkFBZSw4Q0FKRjs7QUFNYiw0QkFBWSwyQ0FOQztBQU9iLDhCQUFjO0FBUEQ7QUFGWixTLFFBWVRDLFUsR0FBYTtBQUNUQyx1QkFBVUMseUJBREQ7QUFFVEMsdUJBQVVELHlCQUZEO0FBR1RFLHVCQUFVRix5QkFIRDtBQUlURyx1QkFBVUgseUJBSkQ7QUFLVEksdUJBQVVKLHlCQUxEO0FBTVRLLHVCQUFVTCx5QkFORDtBQU9UTSx1QkFBVU4seUJBUEQ7QUFRVE8sdUJBQVVQLHlCQVJEO0FBU1RRLHVCQUFVUix5QkFURDtBQVVUUztBQVZTLFMsUUFhYkMsSSxHQUFPO0FBQ0hDLHFCQUFTLENBQ0wsK0JBREssRUFFTCwrQkFGSyxFQUdMLCtCQUhLLENBRE47QUFNSEMscUJBQVEsSUFOTDtBQU9IQyw2QkFBZ0IsQ0FDWixpQkFEWSxFQUVaLGlCQUZZLEVBR1osaUJBSFksRUFJWixpQkFKWSxFQUtaLGlCQUxZLEVBTVosaUJBTlksQ0FQYjtBQWVIQyx1QkFBVSxDQUNOO0FBQ0lDLHVCQUFNLDRCQURWO0FBRUlDLHNCQUFLLE9BRlQ7QUFHSUMsd0JBQU87QUFIWCxhQURNLEVBTU47QUFDSUYsdUJBQU0sNEJBRFY7QUFFSUMsc0JBQUssT0FGVDtBQUdJQyx3QkFBTztBQUhYLGFBTk0sRUFXTjtBQUNJRix1QkFBTSw0QkFEVjtBQUVJQyxz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Q0g7Ozt3Q0FDYztBQUFBOztBQUNYTSx1QkFBVyxZQUFJO0FBQ1gsdUJBQUt6QyxXQUFMLEdBQW1CLElBQW5CO0FBQ0EsdUJBQUs4QixNQUFMO0FBQ0gsYUFIRCxFQUdFLElBSEY7QUFJSDs7OztFQXRTOEJZLGVBQUtDLEk7O2tCQUFuQmpGLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0IExvYWRpbmdzIGZyb20gXCJ3ZXB5LWNvbS1sb2FkaW5nc1wiO1xuaW1wb3J0IHJlZ2lzdGVyUG9wdXAgZnJvbSAnLi4vY29tcG9uZW50cy9yZWdpc3RlclBvcHVwJztcbmltcG9ydCB7IGFwaUxvY2F0aW9uLGluZGV4RGF0YSxsb2dpbiB9IGZyb20gJy4uL2FwaS9hcGkuanMnO1xuaW1wb3J0IHsgcmVxdWVzdCx0b2FzdCB9IGZyb20gJy4uL3V0aWxzL3V0aWxzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgaW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yQm90dG9tOicjZmZmJyxcbiAgICAgICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAgICAgICAnd3hjLXRvYXN0JzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtdG9hc3QvZGlzdC9pbmRleCcsXG4gICAgICAgICAgICAnd3hjLWxvYWRtb3JlJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtbG9hZG1vcmUvZGlzdC9pbmRleCcsXG4gICAgICAgICAgICAnd3hjLWFibm9yJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtYWJub3IvZGlzdC9pbmRleCcsXG4gICAgICAgICAgICAnd3hjLWxvYWRpbmcnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1sb2FkaW5nL2Rpc3QvaW5kZXgnLFxuXG4gICAgICAgICAgICAnd3hjLWljb24nOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1pY29uL2Rpc3QvaW5kZXgnLFxuICAgICAgICAgICAgJ3d4Yy1zZWFyY2gnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1zZWFyY2gvZGlzdC9pbmRleCdcbiAgICAgICAgfSxcbiAgICB9O1xuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgICAgIExvYWRpbmdzMTpMb2FkaW5ncyxcbiAgICAgICAgTG9hZGluZ3MyOkxvYWRpbmdzLFxuICAgICAgICBMb2FkaW5nczM6TG9hZGluZ3MsXG4gICAgICAgIExvYWRpbmdzNDpMb2FkaW5ncyxcbiAgICAgICAgTG9hZGluZ3M1OkxvYWRpbmdzLFxuICAgICAgICBMb2FkaW5nczY6TG9hZGluZ3MsXG4gICAgICAgIExvYWRpbmdzNzpMb2FkaW5ncyxcbiAgICAgICAgTG9hZGluZ3M4OkxvYWRpbmdzLFxuICAgICAgICBMb2FkaW5nczk6TG9hZGluZ3MsXG4gICAgICAgIHJlZ2lzdGVyUG9wdXBcbiAgICB9O1xuXG4gICAgZGF0YSA9IHtcbiAgICAgICAgaW1nVXJsczogW1xuICAgICAgICAgICAgJy4uL2ltYWdlL2luZGV4Rmlyc3RCYW5uZXIucG5nJyxcbiAgICAgICAgICAgICcuLi9pbWFnZS9pbmRleEZpcnN0QmFubmVyLnBuZycsXG4gICAgICAgICAgICAnLi4vaW1hZ2UvaW5kZXhGaXJzdEJhbm5lci5wbmcnXG4gICAgICAgIF0sXG4gICAgICAgIGFkZHJlc3M6bnVsbCxcbiAgICAgICAgZW50ZXJwcmlzZUNvdmVyOltcbiAgICAgICAgICAgICcuLi9pbWFnZS9xMS5wbmcnLFxuICAgICAgICAgICAgJy4uL2ltYWdlL3ExLnBuZycsXG4gICAgICAgICAgICAnLi4vaW1hZ2UvcTEucG5nJyxcbiAgICAgICAgICAgICcuLi9pbWFnZS9xMS5wbmcnLFxuICAgICAgICAgICAgJy4uL2ltYWdlL3ExLnBuZycsXG4gICAgICAgICAgICAnLi4vaW1hZ2UvcTEucG5nJ1xuICAgICAgICBdLFxuICAgICAgICBhbW95RWxpdGU6W1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvdmVyOicuLi9pbWFnZS91c2VySWNvbkluZGV4LnBuZycsXG4gICAgICAgICAgICAgICAgbmFtZTonc21pbGUnLFxuICAgICAgICAgICAgICAgIHByb21wdDon5ZSu5YmNIOWkp+aVsOaNruS6kuiBlOe9kSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY292ZXI6Jy4uL2ltYWdlL3VzZXJJY29uSW5kZXgucG5nJyxcbiAgICAgICAgICAgICAgICBuYW1lOidzbWlsZScsXG4gICAgICAgICAgICAgICAgcHJvbXB0OifllK7liY0g5aSn5pWw5o2u5LqS6IGU572RJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb3ZlcjonLi4vaW1hZ2UvdXNlckljb25JbmRleC5wbmcnLFxuICAgICAgICAgICAgICAgIG5hbWU6J3NtaWxlJyxcbiAgICAgICAgICAgICAgICBwcm9tcHQ6J+WUruWJjSDlpKfmlbDmja7kupLogZTnvZEnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvdmVyOicuLi9pbWFnZS91c2VySWNvbkluZGV4LnBuZycsXG4gICAgICAgICAgICAgICAgbmFtZTonc21pbGUnLFxuICAgICAgICAgICAgICAgIHByb21wdDon5ZSu5YmNIOWkp+aVsOaNruS6kuiBlOe9kSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgc2Vjb25kTGV2ZWxCYW5uZXI6W1xuICAgICAgICAgICAgJy4uL2ltYWdlL2luZGV4VHdvQmFubmVyLnBuZydcbiAgICAgICAgXSxcbiAgICAgICAgYW1veVByb2R1Y3Q6W1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGltZzonLi4vaW1hZ2UvcHJvZHVjdC5wbmcnLFxuICAgICAgICAgICAgICAgIHRpdGxlOifml6Dnur/ot6/nlLHlmagnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGltZzonLi4vaW1hZ2UvcHJvZHVjdC5wbmcnLFxuICAgICAgICAgICAgICAgIHRpdGxlOifml6Dnur/ot6/nlLHlmagnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGltZzonLi4vaW1hZ2UvcHJvZHVjdC5wbmcnLFxuICAgICAgICAgICAgICAgIHRpdGxlOifml6Dnur/ot6/nlLHlmajmi77mjofmi77mjofmi77mjofmi77mjocnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGltZzonLi4vaW1hZ2UvcHJvZHVjdC5wbmcnLFxuICAgICAgICAgICAgICAgIHRpdGxlOifml6Dnur/ot6/nlLHlmagnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGltZzonLi4vaW1hZ2UvcHJvZHVjdC5wbmcnLFxuICAgICAgICAgICAgICAgIHRpdGxlOifml6Dnur/ot6/nlLHlmagnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGltZzonLi4vaW1hZ2UvcHJvZHVjdC5wbmcnLFxuICAgICAgICAgICAgICAgIHRpdGxlOifml6Dnur/ot6/nlLHlmagnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGltZzonLi4vaW1hZ2UvcHJvZHVjdC5wbmcnLFxuICAgICAgICAgICAgICAgIHRpdGxlOifml6Dnur/ot6/nlLHlmagnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGltZzonLi4vaW1hZ2UvcHJvZHVjdC5wbmcnLFxuICAgICAgICAgICAgICAgIHRpdGxlOifml6Dnur/ot6/nlLHlmagnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGltZzonLi4vaW1hZ2UvcHJvZHVjdC5wbmcnLFxuICAgICAgICAgICAgICAgIHRpdGxlOifml6Dnur/ot6/nlLHlmagnXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHJlY29tbWVuZDpbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZm9sbG93OjEsXG4gICAgICAgICAgICAgICAgZXhwbGFpbjon5oC757uP55CGIC8g5LqS6IGU572R6KGM5LiaIC8g6KW/5a6J5biC6ZuB5aGU5Yy6JyxcbiAgICAgICAgICAgICAgICB1c2VyTmFtZTon5p2O5Li95Li9JyxcbiAgICAgICAgICAgICAgICBjb3ZlcjonLi4vaW1hZ2UvaW5kZXhSZWNvbW1lbmRVc2VyLnBuZycsXG4gICAgICAgICAgICAgICAgZGVtYW5kRGVzY3JpYmU6J+aWh+ahiOadkOaWme+8jOiusuino+aWueahiOaWh+ahiOadkOaWme+8jOiusuino+aWueahiOaWh+ahiOadkOaWme+8jOiusuino+aWueahiOaWh+ahiOadkOaWmScsXG4gICAgICAgICAgICAgICAgd29yazon5paH5qGI5p2Q5paZ77yM6K6y6Kej5pa55qGI5paH5qGI5p2Q5paZ77yM6K6y6Kej5pa55qGI5paH5qGI5p2QIOaWme+8jOiusuino+aWueahiCcsXG4gICAgICAgICAgICAgICAgdGFyZ2V0SW5kdXN0cmllczonSVQv56Gs5Lu2JyxcbiAgICAgICAgICAgICAgICB0YXJnZXRBZGRyZXNzOifopb/lronluILpm4HloZTljLrpq5jmlrDlpKfpg73ojZ8nLFxuICAgICAgICAgICAgICAgIHphbk51bXM6NDUxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZvbGxvdzowLFxuICAgICAgICAgICAgICAgIGV4cGxhaW46J+aAu+e7j+eQhiAvIOS6kuiBlOe9keihjOS4miAvIOilv+WuieW4gumbgeWhlOWMuicsXG4gICAgICAgICAgICAgICAgdXNlck5hbWU6J+iKseazveexuycsXG4gICAgICAgICAgICAgICAgY292ZXI6Jy4uL2ltYWdlL2luZGV4UmVjb21tZW5kVXNlci5wbmcnLFxuICAgICAgICAgICAgICAgIGRlbWFuZERlc2NyaWJlOifmlofmoYjmnZDmlpnvvIzorrLop6PmlrnmoYgnLFxuICAgICAgICAgICAgICAgIHdvcms6J+aWh+ahiOadkOaWme+8jOiusuino+aWueahiOaWh+ahiOadkOaWme+8jOiusuino+aWueahiOaWh+ahiOadkCDmlpnvvIzorrLop6PmlrnmoYgnLFxuICAgICAgICAgICAgICAgIHRhcmdldEluZHVzdHJpZXM6J0lUL+ehrOS7ticsXG4gICAgICAgICAgICAgICAgdGFyZ2V0QWRkcmVzczon6KW/5a6J5biC6ZuB5aGU5Yy66auY5paw5aSn6YO96I2fJyxcbiAgICAgICAgICAgICAgICB6YW5OdW1zOjI4OCxcbiAgICAgICAgICAgICAgICBwcmV2aWV3SW1hZ2U6W1xuICAgICAgICAgICAgICAgICAgICAnaHR0cDovL2ltZzQuaW1ndG4uYmRpbWcuY29tL2l0L3U9MTI2NjY2ODA3MSwxODE0MDcyOTM3JmZtPTI2JmdwPTAuanBnJyxcbiAgICAgICAgICAgICAgICAgICAgJ2h0dHBzOi8vdGltZ3NhLmJhaWR1LmNvbS90aW1nP2ltYWdlJnF1YWxpdHk9ODAmc2l6ZT1iOTk5OV8xMDAwMCZzZWM9MTU2MTY5OTg1NTM5MiZkaT02NDdiYjZkYzQ2ODI4NGIzMjkwMTQ0NTVjYTVkMjFkYSZpbWd0eXBlPTAmc3JjPWh0dHAlM0ElMkYlMkZwaG90b2Nkbi5zb2h1LmNvbSUyRjIwMDYxMDMxJTJGSW1nMjQ2MTEwNTYwLmpwZycsXG4gICAgICAgICAgICAgICAgICAgICdodHRwczovL3RpbWdzYS5iYWlkdS5jb20vdGltZz9pbWFnZSZxdWFsaXR5PTgwJnNpemU9Yjk5OTlfMTAwMDAmc2VjPTE1NjE2OTk4NTUzOTEmZGk9NzI4MjBkODZkZTZmYTE2Y2NkNDA1NmU2ZGFjNDJjY2YmaW1ndHlwZT0wJnNyYz1odHRwJTNBJTJGJTJGaW1nLm1wLnNvaHUuY29tJTJGdXBsb2FkJTJGMjAxNzA2MTYlMkY5ZTY0OWNiOWUwMGM0MjRmOTZmYzI2MzI3MzgzMGEwN190aC5wbmcnLFxuICAgICAgICAgICAgICAgICAgICAnaHR0cHM6Ly9zczMuYmRzdGF0aWMuY29tLzcwY0Z2OFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTIwODUyMjMzNzYsNTM2MTgxMDkxJmZtPTI2JmdwPTAuanBnJyxcbiAgICAgICAgICAgICAgICAgICAgJ2h0dHBzOi8vdGltZ3NhLmJhaWR1LmNvbS90aW1nP2ltYWdlJnF1YWxpdHk9ODAmc2l6ZT1iOTk5OV8xMDAwMCZzZWM9MTU2MTY5OTg1NTM4OCZkaT00YjAzN2RmOTMwNmMzNjY5YzJjYTIyMDU3NTFhY2EyMyZpbWd0eXBlPTAmc3JjPWh0dHAlM0ElMkYlMkZnLmhpcGhvdG9zLmJhaWR1LmNvbSUyRnpoaWRhbyUyRnBpYyUyRml0ZW0lMkY2M2QwZjcwMzkxOGZhMGVjNzZkM2Y3YjkyZDk3NTllZTNkNmRkYjZhLmpwZycsXG4gICAgICAgICAgICAgICAgICAgICdodHRwczovL3NzMS5iZHN0YXRpYy5jb20vNzBjRnVYU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9Mzk4NjU5NTY4LDI2OTA0Mzk4NjcmZm09MjYmZ3A9MC5qcGcnLFxuICAgICAgICAgICAgICAgICAgICAnaHR0cHM6Ly9zczIuYmRzdGF0aWMuY29tLzcwY0Z2blNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTI5NzY4NDIzNTIsNjM2ODEwNTMwJmZtPTI2JmdwPTAuanBnJyxcbiAgICAgICAgICAgICAgICAgICAgJ2h0dHBzOi8vc3MwLmJkc3RhdGljLmNvbS83MGNGdkhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0yNDc5MDA0NzU4LDI3MzEwNjcyMDgmZm09MjYmZ3A9MC5qcGcnLFxuICAgICAgICAgICAgICAgICAgICAnaHR0cHM6Ly90aW1nc2EuYmFpZHUuY29tL3RpbWc/aW1hZ2UmcXVhbGl0eT04MCZzaXplPWI5OTk5XzEwMDAwJnNlYz0xNTYxNzAwMDc2NjQ1JmRpPTYwNmU1MTUzYzlhY2U2NGIzMWExMWMzYWMzM2E4MGM0JmltZ3R5cGU9MCZzcmM9aHR0cCUzQSUyRiUyRnBpYy5xaWFudHVjZG4uY29tJTJGNThwaWMlMkYxMiUyRjY5JTJGNzQlMkY4NGM1OFBJQ0FLTS5qcGcnXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmb2xsb3c6MSxcbiAgICAgICAgICAgICAgICBleHBsYWluOifmgLvnu4/nkIYgLyDkupLogZTnvZHooYzkuJogLyDopb/lronluILpm4HloZTljLonLFxuICAgICAgICAgICAgICAgIHVzZXJOYW1lOifmsarmnJvov4snLFxuICAgICAgICAgICAgICAgIGNvdmVyOicuLi9pbWFnZS9pbmRleFJlY29tbWVuZFVzZXIucG5nJyxcbiAgICAgICAgICAgICAgICBkZW1hbmREZXNjcmliZTon5paH5qGI5p2Q5paZ77yM6K6y6Kej5pa55qGIJyxcbiAgICAgICAgICAgICAgICB3b3JrOifmlofmoYjmnZDmlpnvvIzorrLop6PmlrnmoYjmlofmoYjmnZDmlpnvvIzorrLop6PmlrnmoYjmlofmoYjmnZAg5paZ77yM6K6y6Kej5pa55qGIJyxcbiAgICAgICAgICAgICAgICB0YXJnZXRJbmR1c3RyaWVzOidJVC/noazku7YnLFxuICAgICAgICAgICAgICAgIHRhcmdldEFkZHJlc3M6J+ilv+WuieW4gumbgeWhlOWMuumrmOaWsOWkp+mDveiNnycsXG4gICAgICAgICAgICAgICAgemFuTnVtczozNjZcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIGxvYWRtb3JlRW5kOmZhbHNlLCAvL+W3suWKoOi9veWFqOmDqOaVsOaNrlxuICAgICAgICBzZWxlY3REb21IZWlnaHQ6MCwgLy9zZWxlY3RBbGwgSGVpZ2h0XG4gICAgICAgIGFtb3lFbGl0ZUZpeGVkOmZhbHNlLCAvL+aOp+WItuaOqOiNkOagh+mimOWQuOmhtlxuICAgIH07XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgICAgLy8g5pCc57SiXG4gICAgICAgIHNlYXJjaFBhZ2UoKXtcbiAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgIHVybDogJy4vc2VhcmNoJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgLy8g5p+l55yL5YWo5paHXG4gICAgICAgIGxvb2tGdWxsVGV4dChpbmRleCl7XG4gICAgICAgICAgICB0aGlzLnJlY29tbWVuZFtpbmRleF0uc2hvdyA9IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgLy8g6ZqQ6JeP5YWo5paHXG4gICAgICAgIGhpZGRlbkZ1bGxUZXh0KGluZGV4KXtcbiAgICAgICAgICAgIHRoaXMucmVjb21tZW5kW2luZGV4XS5zaG93ID0gZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgLy8g5paH56ug54K56LWeXG4gICAgICAgIGZhYnVsb3VzKGluZGV4KXtcbiAgICAgICAgICAgIHRoaXMucmVjb21tZW5kW2luZGV4XS5mYWJ1bG91cyA9ICF0aGlzLnJlY29tbWVuZFtpbmRleF0uZmFidWxvdXNcbiAgICAgICAgICAgIGlmKHRoaXMucmVjb21tZW5kW2luZGV4XS5mYWJ1bG91cyl7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWNvbW1lbmRbaW5kZXhdLnphbk51bXMrK1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWNvbW1lbmRbaW5kZXhdLnphbk51bXMtLVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvLyDlhbPms6hcbiAgICAgICAgZm9sbG93KGluZGV4KXtcbiAgICAgICAgICAgIHRoaXMucmVjb21tZW5kW2luZGV4XS5mb2xsb3cgPSAhdGhpcy5yZWNvbW1lbmRbaW5kZXhdLmZvbGxvd1xuICAgICAgICB9LFxuICAgICAgICAvLyDlm77niYfpooTop4hcbiAgICAgICAgcHJldmlld0ltYWdlKGluZGV4LGltZyl7XG4gICAgICAgICAgICB3eC5wcmV2aWV3SW1hZ2Uoe1xuICAgICAgICAgICAgICAgIGN1cnJlbnQ6IGltZywgLy8g5b2T5YmN5pi+56S65Zu+54mH55qEaHR0cOmTvuaOpVxuICAgICAgICAgICAgICAgIHVybHM6IHRoaXMucmVjb21tZW5kW2luZGV4XS5wcmV2aWV3SW1hZ2UgLy8g6ZyA6KaB6aKE6KeI55qE5Zu+54mHaHR0cOmTvuaOpeWIl+ihqFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgLy8g6Lez6L2s5LyB5Lia5YiG57G76aG16Z2iXG4gICAgICAgIGVudGVycHJpc2VDbGFzc1BhZ2UoKXtcbiAgICAgICAgICAgIC8vIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgLy8gICAgIHVybDogJy4vZW50ZXJwcmlzZUNsYXNzJ1xuICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIOi3s+i9rOS6p+WTgeWIhuexu+mhtemdolxuICAgICAgICBwcm9kdWN0Q2xhc3NQYWdlKCl7XG4gICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICB1cmw6ICcuLi9zdWJwYWNrYWdlL3NxdWFyZS9wcm9kdWN0Q2xhc3MnXG4gICAgICAgICAgICB9KTsgICBcbiAgICAgICAgfSxcbiAgICAgICAgLy8g5LyB5Lia6K+m5oOFXG4gICAgICAgIGVudGVycHJpc2VEZXRhaWxzKGlkKXtcbiAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgIHVybDpgLi4vc3VicGFja2FnZS9zcXVhcmUvZW50ZXJwcmlzZURldGFpbHM/aWQ9JHtpZH1gXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgXG4gICAgICAgIH0sXG4gICAgICAgIC8vIOS6p+WTgeivpuaDhVxuICAgICAgICBwcm9kdWN0RGVhdGlscygpe1xuICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgdXJsOiAnLi4vc3VicGFja2FnZS9zcXVhcmUvcHJvZHVjdERldGFpbHMnXG4gICAgICAgICAgICB9KTsgICAgIFxuICAgICAgICB9LFxuICAgICAgICAvLyDot7PovazkuKrkurror6bmg4VcbiAgICAgICAgcGVyc29uYWxEZXRhaWxzUGFnZShpZCl7XG4gICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICB1cmw6IGAuLi9zdWJwYWNrYWdlL3NxdWFyZS9wZXJzb25hbERldGFpbHM/aWQ9JHtpZH1gXG4gICAgICAgICAgICB9KTsgICBcbiAgICAgICAgfSxcbiAgICAgICAgLy8g6Lez6L2s6ZyA5rGC6K+m5oOFXG4gICAgICAgIGRlbWFuZERldGFpbHNQYWdlKCl7XG4gICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICB1cmw6IGAuLi9zdWJwYWNrYWdlL3NxdWFyZS9kZW1hbmREZXRhaWxzYFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBldmVudHMgPSB7fTtcbiAgICBvblJlYWR5KCl7XG4gICAgICAgIGxldCBxdWVyeSA9IHd4LmNyZWF0ZVNlbGVjdG9yUXVlcnkoKTtcbiAgICAgICAgcXVlcnkuc2VsZWN0QWxsKCcuc2VhcmNoLXdyYXAsI3N3aXBlciwjYW1veUVudGVycHJpc2VCb3gsI2Ftb3lFbnRlcnByaXNlQm94LCNlbnRlcnByaXNlQm94LCNhbW95RWxpdGUsLmhvbWVGdXJuaXNoaW5nQm94LCNzd2lwZXJUd28sLmFtb3lQcm9kdWN0Qm94JykuYm91bmRpbmdDbGllbnRSZWN0KHJlY3Q9PntcbiAgICAgICAgICAgIGxldCBzZWxlY3REb21IZWlnaHQ9MDtcbiAgICAgICAgICAgIHJlY3QuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICBzZWxlY3REb21IZWlnaHQgKz0gZWxlbWVudC5oZWlnaHRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3REb21IZWlnaHQgPSBzZWxlY3REb21IZWlnaHQgLSAxNVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICB9KS5leGVjKCk7XG4gICAgfVxuICAgIG9uU2hvdygpe1xuICAgICAgICAvLyB3eC5jaGVja1Nlc3Npb24oe1xuICAgICAgICAvLyAgICAgc3VjY2VzczogKCk9PiB7XG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgLy8gICAgIGZhaWw6ICgpPT4ge1xuICAgICAgICAvLyAgICAgICAgIC8vIOeZu+W9lVxuICAgICAgICAvLyAgICAgICAgIHd4LmxvZ2luKHtcbiAgICAgICAgLy8gICAgICAgICAgICAgc3VjY2VzczogKHJlc3VsdCkgPT4ge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgcmVxdWVzdChsb2dpbiwnUE9TVCcseyBjb2RlOnJlc3VsdC5jb2RlfSkudGhlbihyZXM9PntcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdsb2dpbkRhdGEnLCByZXMuZGF0YS5kYXRhKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICB9KVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9KVxuICAgIH1cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIC8vIOiOt+WPluWcsOWdgFxuICAgICAgICAvLyB0aGlzLnVzZXJBZGRyZXNzKClcbiAgICAgICAgLy8g6K+35rGC6aaW6aG15pWw5o2uJuiLsemZtnNob3dcbiAgICAgICAgLy8gbGV0IGluZGV4RGF0YXMgPSByZXF1ZXN0KGluZGV4RGF0YSlcbiAgICAgICAgLy8gUHJvbWlzZS5hbGwoW2luZGV4RGF0YXNdKS50aGVuKHJlcz0+e1xuICAgICAgICAvLyAgICAgdGhpcy5pbWdVcmxzID0gcmVzWzBdLmRhdGEuZGF0YS5tYWluXG4gICAgICAgIC8vICAgICB0aGlzLmVudGVycHJpc2VDb3ZlciA9IHJlc1swXS5kYXRhLmRhdGEuY29tcGFueVxuICAgICAgICAvLyAgICAgdGhpcy5hbW95RWxpdGUgPSByZXNbMF0uZGF0YS5kYXRhLmFtb3lFbGl0ZVxuICAgICAgICAvLyAgICAgdGhpcy5zZWNvbmRMZXZlbEJhbm5lciA9IHJlc1swXS5kYXRhLmRhdGEuc2Vjb25kXG4gICAgICAgIC8vICAgICB0aGlzLmFtb3lQcm9kdWN0ID0gcmVzWzBdLmRhdGEuZGF0YS5wcm9kdWN0XG4gICAgICAgIC8vICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIC8vIH0pXG4gICAgfTtcbiAgICBvblBhZ2VTY3JvbGwoZSl7XG4gICAgICAgIGlmKGUuc2Nyb2xsVG9wID49IHRoaXMuc2VsZWN0RG9tSGVpZ2h0KXtcbiAgICAgICAgICAgIHRoaXMuYW1veUVsaXRlRml4ZWQgPSB0cnVlXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5hbW95RWxpdGVGaXhlZCA9IGZhbHNlXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIH1cbiAgICB9XG4gICAgb25TaGFyZUFwcE1lc3NhZ2UocmVzKXtcbiAgICAgICAgbGV0IGZ1bGxUZXh0U2hhcmUgPSB7fTtcbiAgICAgICAgaWYocmVzLmZyb20gPT0gXCJidXR0b25cIil7XG4gICAgICAgICAgICBmdWxsVGV4dFNoYXJlLnRpdGxlID0gYOW9k+WJjeWIhuS6qy0tLSR7cmVzLnRhcmdldC5kYXRhc2V0LnVzZXJuYW1lfe+8iOa1i+ivle+8iWBcbiAgICAgICAgICAgIGZ1bGxUZXh0U2hhcmUucGF0aCA9ICcvcGFnZXMvaW5kZXgnXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZ1bGxUZXh0U2hhcmVcbiAgICB9XG4gICAgb25SZWFjaEJvdHRvbSgpe1xuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICB0aGlzLmxvYWRtb3JlRW5kID0gdHJ1ZVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICB9LDE1MDApXG4gICAgfTtcbiAgICAvLyDojrflj5blnLDlnYBcbiAgICAvLyB1c2VyQWRkcmVzcygpe1xuICAgIC8vICAgICB3eC5nZXRMb2NhdGlvbih7XG4gICAgLy8gICAgICAgICB0eXBlOiAnd2dzODQnLFxuICAgIC8vICAgICAgICAgc3VjY2VzczoocmVzKT0+IHtcbiAgICAvLyAgICAgICAgICAgICAvLyDpgIblnLDlnYDop6PmnpBcbiAgICAvLyAgICAgICAgICAgICByZXF1ZXN0KGFwaUxvY2F0aW9uLCdQT1NUJyx7bGF0OnJlcy5sYXRpdHVkZSxsbmc6cmVzLmxvbmdpdHVkZX0pLnRoZW4ocmVzPT57XG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuYWRkcmVzcyA9IHJlcy5kYXRhLmRhdGFcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIC8vICAgICAgICAgICAgIH0pXG4gICAgLy8gICAgICAgICB9LFxuICAgIC8vICAgICAgICAgZmFpbDoocmVzKT0+IHtcbiAgICAvLyAgICAgICAgICAgICB3eC5zaG93TW9kYWwoe1xuICAgIC8vICAgICAgICAgICAgICAgICB0aXRsZTogJ+aOiOadg+aPkOekuicsXG4gICAgLy8gICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfmgqjlt7Lmi5Lnu53kvY3nva7mjojmnYPvvIzlpoLpnIDojrflj5blh4bnoa7kvY3nva7or7fngrnlh7vigJjnoa7lrprigJnku6Xojrflj5bnlKjmiLfmjojmnYPorr7nva4nLFxuICAgIC8vICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOiB0cnVlLFxuICAgIC8vICAgICAgICAgICAgICAgICBjYW5jZWxUZXh0OiAn5Y+W5raIJyxcbiAgICAvLyAgICAgICAgICAgICAgICAgY2FuY2VsQ29sb3I6ICcjMDAwMDAwJyxcbiAgICAvLyAgICAgICAgICAgICAgICAgY29uZmlybVRleHQ6ICfnoa7lrponLFxuICAgIC8vICAgICAgICAgICAgICAgICBjb25maXJtQ29sb3I6ICcjM0NDNTFGJyxcbiAgICAvLyAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5jb25maXJtKXtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB3eC5vcGVuU2V0dGluZyh7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6KHJlcyk9PntcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5hdXRoU2V0dGluZ1snc2NvcGUudXNlckxvY2F0aW9uJ10pe1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0KCfmjojmnYPmiJDlip8nLCdzdWNjZXNzJylcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICB9KTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfSlcbiAgICAvLyB9XG59XG4iXX0=