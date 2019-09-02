'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _releaseItem = require('./../components/releaseItem.js');

var _releaseItem2 = _interopRequireDefault(_releaseItem);

var _registerPopup = require('./../components/registerPopup.js');

var _registerPopup2 = _interopRequireDefault(_registerPopup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var about = function (_wepy$page) {
    _inherits(about, _wepy$page);

    function about() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, about);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = about.__proto__ || Object.getPrototypeOf(about)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '我的',
            usingComponents: {
                'wxc-icon': '../../packages/@minui/wxc-icon/dist/index'
            }
        }, _this.$repeat = {}, _this.$props = { "releaseItem": { "xmlns:v-bind": "", "v-bind:recommendData.sync": "recommend", "v-bind:stylePaddingTop.once": "stylePaddingTop", "v-bind:recommendDatas.sync": "recommend1" } }, _this.$events = {}, _this.components = {
            releaseItem: _releaseItem2.default,
            registerPopup: _registerPopup2.default
        }, _this.data = {
            bigV: true, //大V界面展示开关
            aboutOperationModel: [{
                icon: '../image/originWrite.png',
                title: '申请成为原创内容创作者'
            }, {
                icon: '../image/shenqingguanli.png',
                title: '申请企业版面'
            }, {
                icon: '../image/icon-test.png',
                title: '开通企业专版',
                prompt: '「更多功能,更多资源」'
            }, {
                icon: '../image/fuwutiaokuan.png',
                title: '隐私条款'
            }, {
                icon: '../image/bangzhu.png',
                title: '帮助与反馈'
            }, {
                icon: '../image/kefu-2.png',
                title: '客服'
            }, {
                icon: '../image/yonghuxieyi.png',
                title: '用户协议'
            }],
            navbar: ['全部', '图文', '视频'],
            currentTab: 0,
            recommend: [{
                follow: 1,
                explain: ['总经理', '互联网行业', '西安市雁塔区'],
                userName: '李丽丽',
                cover: '../image/indexRecommendUser.png',
                demandDescribe: '文案材料，讲解方案文案材料，讲解方案文案材料，讲解方案文案材料',
                work: '文案材料，讲解方案文案材料，讲解方案文案材 料，讲解方案',
                targetIndustries: 'IT/硬件',
                targetAddress: '西安市雁塔区高新大都荟',
                zanNums: 451
            }, {
                follow: 0,
                explain: ['总经理', '互联网行业', '西安市雁塔区'],
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
                explain: ['总经理', '互联网行业', '西安市雁塔区'],
                userName: '汪望迋',
                cover: '../image/indexRecommendUser.png',
                demandDescribe: '文案材料，讲解方案',
                work: '文案材料，讲解方案文案材料，讲解方案文案材 料，讲解方案',
                targetIndustries: 'IT/硬件',
                targetAddress: '西安市雁塔区高新大都荟',
                zanNums: 366
            }],
            recommend1: [{
                follow: 0,
                explain: ['总经理', '互联网行业', '西安市雁塔区'],
                userName: '花泽类',
                cover: '../image/indexRecommendUser.png',
                demandDescribe: '文案材料，讲解方案',
                work: '文案材料，讲解方案文案材料，讲解方案文案材 料，讲解方案',
                targetIndustries: 'IT/硬件',
                targetAddress: '西安市雁塔区高新大都荟',
                previewImage: ['http://img4.imgtn.bdimg.com/it/u=1266668071,1814072937&fm=26&gp=0.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561699855392&di=647bb6dc468284b329014455ca5d21da&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20061031%2FImg246110560.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561699855391&di=72820d86de6fa16ccd4056e6dac42ccf&imgtype=0&src=http%3A%2F%2Fimg.mp.sohu.com%2Fupload%2F20170616%2F9e649cb9e00c424f96fc263273830a07_th.png']
            }],
            stylePaddingTop: true
        }, _this.methods = {
            // tab切换
            navbarTap: function navbarTap(status) {
                this.$broadcast('currentStatus', status);
                this.currentTab = status;
            },

            // 发布图文
            releaseImgText: function releaseImgText() {
                wx.navigateTo({
                    url: './releaseImgText'
                });
            },

            // 发布视频
            releaseViedoText: function releaseViedoText() {
                wx.navigateTo({
                    url: './releaseViedoText'
                });
            }
        }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(about, [{
        key: 'onLoad',
        value: function onLoad() {
            this.$broadcast('currentStatus', 0);
        }
    }]);

    return about;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(about , 'pages/about'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmpzIl0sIm5hbWVzIjpbImFib3V0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInJlbGVhc2VJdGVtIiwicmVnaXN0ZXJQb3B1cCIsImRhdGEiLCJiaWdWIiwiYWJvdXRPcGVyYXRpb25Nb2RlbCIsImljb24iLCJ0aXRsZSIsInByb21wdCIsIm5hdmJhciIsImN1cnJlbnRUYWIiLCJyZWNvbW1lbmQiLCJmb2xsb3ciLCJleHBsYWluIiwidXNlck5hbWUiLCJjb3ZlciIsImRlbWFuZERlc2NyaWJlIiwid29yayIsInRhcmdldEluZHVzdHJpZXMiLCJ0YXJnZXRBZGRyZXNzIiwiemFuTnVtcyIsInByZXZpZXdJbWFnZSIsInJlY29tbWVuZDEiLCJzdHlsZVBhZGRpbmdUb3AiLCJtZXRob2RzIiwibmF2YmFyVGFwIiwic3RhdHVzIiwiJGJyb2FkY2FzdCIsInJlbGVhc2VJbWdUZXh0Iiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwicmVsZWFzZVZpZWRvVGV4dCIsImV2ZW50cyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCLElBRG5CO0FBRUxDLDZCQUFpQjtBQUNiLDRCQUFZO0FBREM7QUFGWixTLFFBTVZDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLGVBQWMsRUFBQyxnQkFBZSxFQUFoQixFQUFtQiw2QkFBNEIsV0FBL0MsRUFBMkQsK0JBQThCLGlCQUF6RixFQUEyRyw4QkFBNkIsWUFBeEksRUFBZixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNOQyw4Q0FETTtBQUVOQztBQUZNLFMsUUFLVkMsSSxHQUFPO0FBQ0hDLGtCQUFLLElBREYs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QWhDO0FBQ0g7Ozs7RUE5SThCTyxlQUFLQyxJOztrQkFBbkIxQyxLIiwiZmlsZSI6ImFib3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCByZWxlYXNlSXRlbSBmcm9tICcuLi9jb21wb25lbnRzL3JlbGVhc2VJdGVtJ1xuaW1wb3J0IHJlZ2lzdGVyUG9wdXAgZnJvbSAnLi4vY29tcG9uZW50cy9yZWdpc3RlclBvcHVwJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgYWJvdXQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahCcsXG4gICAgICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgICAgICAgJ3d4Yy1pY29uJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtaWNvbi9kaXN0L2luZGV4J1xuICAgICAgICB9LFxuICAgIH07XG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInJlbGVhc2VJdGVtXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpyZWNvbW1lbmREYXRhLnN5bmNcIjpcInJlY29tbWVuZFwiLFwidi1iaW5kOnN0eWxlUGFkZGluZ1RvcC5vbmNlXCI6XCJzdHlsZVBhZGRpbmdUb3BcIixcInYtYmluZDpyZWNvbW1lbmREYXRhcy5zeW5jXCI6XCJyZWNvbW1lbmQxXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgcmVsZWFzZUl0ZW0sXG4gICAgICAgIHJlZ2lzdGVyUG9wdXBcbiAgICB9O1xuXG4gICAgZGF0YSA9IHtcbiAgICAgICAgYmlnVjp0cnVlLCAvL+Wkp1bnlYzpnaLlsZXnpLrlvIDlhbNcbiAgICAgICAgYWJvdXRPcGVyYXRpb25Nb2RlbDpbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWNvbjonLi4vaW1hZ2Uvb3JpZ2luV3JpdGUucG5nJyxcbiAgICAgICAgICAgICAgICB0aXRsZTon55Sz6K+35oiQ5Li65Y6f5Yib5YaF5a655Yib5L2c6ICFJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpY29uOicuLi9pbWFnZS9zaGVucWluZ2d1YW5saS5wbmcnLFxuICAgICAgICAgICAgICAgIHRpdGxlOifnlLPor7fkvIHkuJrniYjpnaInXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGljb246Jy4uL2ltYWdlL2ljb24tdGVzdC5wbmcnLFxuICAgICAgICAgICAgICAgIHRpdGxlOiflvIDpgJrkvIHkuJrkuJPniYgnLFxuICAgICAgICAgICAgICAgIHByb21wdDon44CM5pu05aSa5Yqf6IO9LOabtOWkmui1hOa6kOOAjSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWNvbjonLi4vaW1hZ2UvZnV3dXRpYW9rdWFuLnBuZycsXG4gICAgICAgICAgICAgICAgdGl0bGU6J+makOengeadoeasvidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWNvbjonLi4vaW1hZ2UvYmFuZ3podS5wbmcnLFxuICAgICAgICAgICAgICAgIHRpdGxlOifluK7liqnkuI7lj43ppognXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGljb246Jy4uL2ltYWdlL2tlZnUtMi5wbmcnLFxuICAgICAgICAgICAgICAgIHRpdGxlOiflrqLmnI0nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGljb246Jy4uL2ltYWdlL3lvbmdodXhpZXlpLnBuZycsXG4gICAgICAgICAgICAgICAgdGl0bGU6J+eUqOaIt+WNj+iuridcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIG5hdmJhcjogW1xuICAgICAgICAgICAgJ+WFqOmDqCcsXG4gICAgICAgICAgICAn5Zu+5paHJyxcbiAgICAgICAgICAgICfop4bpopEnXG4gICAgICAgIF0sXG4gICAgICAgIGN1cnJlbnRUYWI6IDAsXG4gICAgICAgIHJlY29tbWVuZDpbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZm9sbG93OjEsXG4gICAgICAgICAgICAgICAgZXhwbGFpbjpbJ+aAu+e7j+eQhicsJ+S6kuiBlOe9keihjOS4micsJ+ilv+WuieW4gumbgeWhlOWMuiddLFxuICAgICAgICAgICAgICAgIHVzZXJOYW1lOifmnY7kuL3kuL0nLFxuICAgICAgICAgICAgICAgIGNvdmVyOicuLi9pbWFnZS9pbmRleFJlY29tbWVuZFVzZXIucG5nJyxcbiAgICAgICAgICAgICAgICBkZW1hbmREZXNjcmliZTon5paH5qGI5p2Q5paZ77yM6K6y6Kej5pa55qGI5paH5qGI5p2Q5paZ77yM6K6y6Kej5pa55qGI5paH5qGI5p2Q5paZ77yM6K6y6Kej5pa55qGI5paH5qGI5p2Q5paZJyxcbiAgICAgICAgICAgICAgICB3b3JrOifmlofmoYjmnZDmlpnvvIzorrLop6PmlrnmoYjmlofmoYjmnZDmlpnvvIzorrLop6PmlrnmoYjmlofmoYjmnZAg5paZ77yM6K6y6Kej5pa55qGIJyxcbiAgICAgICAgICAgICAgICB0YXJnZXRJbmR1c3RyaWVzOidJVC/noazku7YnLFxuICAgICAgICAgICAgICAgIHRhcmdldEFkZHJlc3M6J+ilv+WuieW4gumbgeWhlOWMuumrmOaWsOWkp+mDveiNnycsXG4gICAgICAgICAgICAgICAgemFuTnVtczo0NTFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZm9sbG93OjAsXG4gICAgICAgICAgICAgICAgZXhwbGFpbjpbJ+aAu+e7j+eQhicsJ+S6kuiBlOe9keihjOS4micsJ+ilv+WuieW4gumbgeWhlOWMuiddLFxuICAgICAgICAgICAgICAgIHVzZXJOYW1lOifoirHms73nsbsnLFxuICAgICAgICAgICAgICAgIGNvdmVyOicuLi9pbWFnZS9pbmRleFJlY29tbWVuZFVzZXIucG5nJyxcbiAgICAgICAgICAgICAgICBkZW1hbmREZXNjcmliZTon5paH5qGI5p2Q5paZ77yM6K6y6Kej5pa55qGIJyxcbiAgICAgICAgICAgICAgICB3b3JrOifmlofmoYjmnZDmlpnvvIzorrLop6PmlrnmoYjmlofmoYjmnZDmlpnvvIzorrLop6PmlrnmoYjmlofmoYjmnZAg5paZ77yM6K6y6Kej5pa55qGIJyxcbiAgICAgICAgICAgICAgICB0YXJnZXRJbmR1c3RyaWVzOidJVC/noazku7YnLFxuICAgICAgICAgICAgICAgIHRhcmdldEFkZHJlc3M6J+ilv+WuieW4gumbgeWhlOWMuumrmOaWsOWkp+mDveiNnycsXG4gICAgICAgICAgICAgICAgemFuTnVtczoyODgsXG4gICAgICAgICAgICAgICAgcHJldmlld0ltYWdlOltcbiAgICAgICAgICAgICAgICAgICAgJ2h0dHA6Ly9pbWc0LmltZ3RuLmJkaW1nLmNvbS9pdC91PTEyNjY2NjgwNzEsMTgxNDA3MjkzNyZmbT0yNiZncD0wLmpwZycsXG4gICAgICAgICAgICAgICAgICAgICdodHRwczovL3RpbWdzYS5iYWlkdS5jb20vdGltZz9pbWFnZSZxdWFsaXR5PTgwJnNpemU9Yjk5OTlfMTAwMDAmc2VjPTE1NjE2OTk4NTUzOTImZGk9NjQ3YmI2ZGM0NjgyODRiMzI5MDE0NDU1Y2E1ZDIxZGEmaW1ndHlwZT0wJnNyYz1odHRwJTNBJTJGJTJGcGhvdG9jZG4uc29odS5jb20lMkYyMDA2MTAzMSUyRkltZzI0NjExMDU2MC5qcGcnLFxuICAgICAgICAgICAgICAgICAgICAnaHR0cHM6Ly90aW1nc2EuYmFpZHUuY29tL3RpbWc/aW1hZ2UmcXVhbGl0eT04MCZzaXplPWI5OTk5XzEwMDAwJnNlYz0xNTYxNjk5ODU1MzkxJmRpPTcyODIwZDg2ZGU2ZmExNmNjZDQwNTZlNmRhYzQyY2NmJmltZ3R5cGU9MCZzcmM9aHR0cCUzQSUyRiUyRmltZy5tcC5zb2h1LmNvbSUyRnVwbG9hZCUyRjIwMTcwNjE2JTJGOWU2NDljYjllMDBjNDI0Zjk2ZmMyNjMyNzM4MzBhMDdfdGgucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgJ2h0dHBzOi8vc3MzLmJkc3RhdGljLmNvbS83MGNGdjhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0yMDg1MjIzMzc2LDUzNjE4MTA5MSZmbT0yNiZncD0wLmpwZycsXG4gICAgICAgICAgICAgICAgICAgICdodHRwczovL3RpbWdzYS5iYWlkdS5jb20vdGltZz9pbWFnZSZxdWFsaXR5PTgwJnNpemU9Yjk5OTlfMTAwMDAmc2VjPTE1NjE2OTk4NTUzODgmZGk9NGIwMzdkZjkzMDZjMzY2OWMyY2EyMjA1NzUxYWNhMjMmaW1ndHlwZT0wJnNyYz1odHRwJTNBJTJGJTJGZy5oaXBob3Rvcy5iYWlkdS5jb20lMkZ6aGlkYW8lMkZwaWMlMkZpdGVtJTJGNjNkMGY3MDM5MThmYTBlYzc2ZDNmN2I5MmQ5NzU5ZWUzZDZkZGI2YS5qcGcnLFxuICAgICAgICAgICAgICAgICAgICAnaHR0cHM6Ly9zczEuYmRzdGF0aWMuY29tLzcwY0Z1WFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTM5ODY1OTU2OCwyNjkwNDM5ODY3JmZtPTI2JmdwPTAuanBnJyxcbiAgICAgICAgICAgICAgICAgICAgJ2h0dHBzOi8vc3MyLmJkc3RhdGljLmNvbS83MGNGdm5TaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0yOTc2ODQyMzUyLDYzNjgxMDUzMCZmbT0yNiZncD0wLmpwZycsXG4gICAgICAgICAgICAgICAgICAgICdodHRwczovL3NzMC5iZHN0YXRpYy5jb20vNzBjRnZIU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9MjQ3OTAwNDc1OCwyNzMxMDY3MjA4JmZtPTI2JmdwPTAuanBnJyxcbiAgICAgICAgICAgICAgICAgICAgJ2h0dHBzOi8vdGltZ3NhLmJhaWR1LmNvbS90aW1nP2ltYWdlJnF1YWxpdHk9ODAmc2l6ZT1iOTk5OV8xMDAwMCZzZWM9MTU2MTcwMDA3NjY0NSZkaT02MDZlNTE1M2M5YWNlNjRiMzFhMTFjM2FjMzNhODBjNCZpbWd0eXBlPTAmc3JjPWh0dHAlM0ElMkYlMkZwaWMucWlhbnR1Y2RuLmNvbSUyRjU4cGljJTJGMTIlMkY2OSUyRjc0JTJGODRjNThQSUNBS00uanBnJ1xuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZm9sbG93OjEsXG4gICAgICAgICAgICAgICAgZXhwbGFpbjpbJ+aAu+e7j+eQhicsJ+S6kuiBlOe9keihjOS4micsJ+ilv+WuieW4gumbgeWhlOWMuiddLFxuICAgICAgICAgICAgICAgIHVzZXJOYW1lOifmsarmnJvov4snLFxuICAgICAgICAgICAgICAgIGNvdmVyOicuLi9pbWFnZS9pbmRleFJlY29tbWVuZFVzZXIucG5nJyxcbiAgICAgICAgICAgICAgICBkZW1hbmREZXNjcmliZTon5paH5qGI5p2Q5paZ77yM6K6y6Kej5pa55qGIJyxcbiAgICAgICAgICAgICAgICB3b3JrOifmlofmoYjmnZDmlpnvvIzorrLop6PmlrnmoYjmlofmoYjmnZDmlpnvvIzorrLop6PmlrnmoYjmlofmoYjmnZAg5paZ77yM6K6y6Kej5pa55qGIJyxcbiAgICAgICAgICAgICAgICB0YXJnZXRJbmR1c3RyaWVzOidJVC/noazku7YnLFxuICAgICAgICAgICAgICAgIHRhcmdldEFkZHJlc3M6J+ilv+WuieW4gumbgeWhlOWMuumrmOaWsOWkp+mDveiNnycsXG4gICAgICAgICAgICAgICAgemFuTnVtczozNjZcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHJlY29tbWVuZDE6W1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZvbGxvdzowLFxuICAgICAgICAgICAgICAgIGV4cGxhaW46WyfmgLvnu4/nkIYnLCfkupLogZTnvZHooYzkuJonLCfopb/lronluILpm4HloZTljLonXSxcbiAgICAgICAgICAgICAgICB1c2VyTmFtZTon6Iqx5rO957G7JyxcbiAgICAgICAgICAgICAgICBjb3ZlcjonLi4vaW1hZ2UvaW5kZXhSZWNvbW1lbmRVc2VyLnBuZycsXG4gICAgICAgICAgICAgICAgZGVtYW5kRGVzY3JpYmU6J+aWh+ahiOadkOaWme+8jOiusuino+aWueahiCcsXG4gICAgICAgICAgICAgICAgd29yazon5paH5qGI5p2Q5paZ77yM6K6y6Kej5pa55qGI5paH5qGI5p2Q5paZ77yM6K6y6Kej5pa55qGI5paH5qGI5p2QIOaWme+8jOiusuino+aWueahiCcsXG4gICAgICAgICAgICAgICAgdGFyZ2V0SW5kdXN0cmllczonSVQv56Gs5Lu2JyxcbiAgICAgICAgICAgICAgICB0YXJnZXRBZGRyZXNzOifopb/lronluILpm4HloZTljLrpq5jmlrDlpKfpg73ojZ8nLFxuICAgICAgICAgICAgICAgIHByZXZpZXdJbWFnZTpbXG4gICAgICAgICAgICAgICAgICAgICdodHRwOi8vaW1nNC5pbWd0bi5iZGltZy5jb20vaXQvdT0xMjY2NjY4MDcxLDE4MTQwNzI5MzcmZm09MjYmZ3A9MC5qcGcnLFxuICAgICAgICAgICAgICAgICAgICAnaHR0cHM6Ly90aW1nc2EuYmFpZHUuY29tL3RpbWc/aW1hZ2UmcXVhbGl0eT04MCZzaXplPWI5OTk5XzEwMDAwJnNlYz0xNTYxNjk5ODU1MzkyJmRpPTY0N2JiNmRjNDY4Mjg0YjMyOTAxNDQ1NWNhNWQyMWRhJmltZ3R5cGU9MCZzcmM9aHR0cCUzQSUyRiUyRnBob3RvY2RuLnNvaHUuY29tJTJGMjAwNjEwMzElMkZJbWcyNDYxMTA1NjAuanBnJyxcbiAgICAgICAgICAgICAgICAgICAgJ2h0dHBzOi8vdGltZ3NhLmJhaWR1LmNvbS90aW1nP2ltYWdlJnF1YWxpdHk9ODAmc2l6ZT1iOTk5OV8xMDAwMCZzZWM9MTU2MTY5OTg1NTM5MSZkaT03MjgyMGQ4NmRlNmZhMTZjY2Q0MDU2ZTZkYWM0MmNjZiZpbWd0eXBlPTAmc3JjPWh0dHAlM0ElMkYlMkZpbWcubXAuc29odS5jb20lMkZ1cGxvYWQlMkYyMDE3MDYxNiUyRjllNjQ5Y2I5ZTAwYzQyNGY5NmZjMjYzMjczODMwYTA3X3RoLnBuZycsXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgc3R5bGVQYWRkaW5nVG9wOnRydWVcbiAgICB9O1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICAgIC8vIHRhYuWIh+aNolxuICAgICAgICBuYXZiYXJUYXAoc3RhdHVzKXtcbiAgICAgICAgICAgIHRoaXMuJGJyb2FkY2FzdCgnY3VycmVudFN0YXR1cycsc3RhdHVzKVxuICAgICAgICAgICAgdGhpcy5jdXJyZW50VGFiID0gc3RhdHVzO1xuICAgICAgICB9LFxuICAgICAgICAvLyDlj5HluIPlm77mlodcbiAgICAgICAgcmVsZWFzZUltZ1RleHQoKXtcbiAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgIHVybDogYC4vcmVsZWFzZUltZ1RleHRgXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICAvLyDlj5HluIPop4bpopFcbiAgICAgICAgcmVsZWFzZVZpZWRvVGV4dCgpe1xuICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgdXJsOiBgLi9yZWxlYXNlVmllZG9UZXh0YFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBldmVudHMgPSB7fTtcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuJGJyb2FkY2FzdCgnY3VycmVudFN0YXR1cycsMClcbiAgICB9O1xufVxuIl19