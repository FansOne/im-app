'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _userMsgItem = require('./../components/userMsgItem.js');

var _userMsgItem2 = _interopRequireDefault(_userMsgItem);

var _registerPopup = require('./../components/registerPopup.js');

var _registerPopup2 = _interopRequireDefault(_registerPopup);

var _recommendUserMsgItem = require('./../components/recommendUserMsgItem.js');

var _recommendUserMsgItem2 = _interopRequireDefault(_recommendUserMsgItem);

var _releaseItem = require('./../components/releaseItem.js');

var _releaseItem2 = _interopRequireDefault(_releaseItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var administration = function (_wepy$page) {
    _inherits(administration, _wepy$page);

    function administration() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, administration);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = administration.__proto__ || Object.getPrototypeOf(administration)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '管理',
            usingComponents: {
                'wxc-price': '../../packages/@minui/wxc-price/dist/index',
                'wxc-icon': '../../packages/@minui/wxc-icon/dist/index'
            }
        }, _this.$repeat = {}, _this.$props = { "userMsgItem": { "v-bind:syncTitle.sync": "applyUser" }, "recommendUserMsgItem": { "v-bind:syncTitle.sync": "applyUser" }, "releaseItem": { "xmlns:v-bind": "", "v-bind:recommendData.sync": "recommend", "v-bind:recommendDatas.sync": "recommend1" } }, _this.$events = {}, _this.components = {
            userMsgItem: _userMsgItem2.default,
            recommendUserMsgItem: _recommendUserMsgItem2.default,
            releaseItem: _releaseItem2.default,
            registerPopup: _registerPopup2.default
        }, _this.data = {
            topBoxHeight: 0,
            navbar: ['我的发布', '我的申请', '职位管理'],
            currentTab: 0,
            addIcon: true,
            recommend: [{
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
            recommend1: [{
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
            applyUser: [{
                cover: '../image/goods-img-default.png',
                name: '花泽类',
                lable: 'IT互联网｜云计算',
                promptText: '上海英淘上海英淘上海英淘上海英淘上海英淘上海英淘上海英淘'
            }, {
                cover: '../image/goods-img-default.png',
                name: '花泽类',
                lable: 'IT互联网｜云计算',
                promptText: '上海英淘上海英淘上海英淘上海英淘上海英淘上海英淘上海英淘'
            }],
            windowWidth: 0,
            windowHeight: 0,
            adminPopupShow: false
        }, _this.methods = {
            // tab切换
            navbarTap: function navbarTap(status) {
                this.currentTab = status;
                this.$broadcast('currentStatus', status);
                if (status == 1) {
                    this.addIcon = false;
                } else {
                    this.addIcon = true;
                }
            },

            // 查看全文
            lookFullText: function lookFullText(index) {
                if (this.currentTab == 0) this.recommend[index].show = true;
                if (this.currentTab == 1) this.recommend1[index].show = true;
            },

            // 隐藏全文
            hiddenFullText: function hiddenFullText(index) {
                if (this.currentTab == 0) this.recommend[index].show = false;
                if (this.currentTab == 1) this.recommend1[index].show = false;
            },

            // 图片预览
            previewImage: function previewImage(index, img) {
                wx.previewImage({
                    current: img, // 当前显示图片的http链接
                    urls: this.recommend[index].previewImage // 需要预览的图片http链接列表
                });
            },

            // 调出弹窗
            adminPopupShow: function adminPopupShow(currentTab) {
                wx.pageScrollTo({
                    scrollTop: 0
                });
                this.$broadcast('adminPopup', currentTab);
                this.adminPopupShow = true;
            },

            // 关闭弹窗
            closeAdminPopup: function closeAdminPopup(currentTab) {
                this.adminPopupShow = false;
            }
        }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(administration, [{
        key: 'onReady',
        value: function onReady() {
            var _this2 = this;

            var query = wx.createSelectorQuery();
            query.select('.personalMsgTabBox').boundingClientRect(function (rect) {
                _this2.topBoxHeight = rect.height;
                _this2.$apply();
            }).exec();
            // 获取窗口尺寸
            wx.getSystemInfo({
                success: function success(res) {
                    _this2.windowWidth = res.windowWidth;
                    _this2.windowHeight = res.windowHeight;
                    _this2.$apply();
                }
            });
        }
    }, {
        key: 'onLoad',
        value: function onLoad() {
            this.$broadcast('currentStatus', 0);
        }
    }]);

    return administration;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(administration , 'pages/administration'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluaXN0cmF0aW9uLmpzIl0sIm5hbWVzIjpbImFkbWluaXN0cmF0aW9uIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInVzZXJNc2dJdGVtIiwicmVjb21tZW5kVXNlck1zZ0l0ZW0iLCJyZWxlYXNlSXRlbSIsInJlZ2lzdGVyUG9wdXAiLCJkYXRhIiwidG9wQm94SGVpZ2h0IiwibmF2YmFyIiwiY3VycmVudFRhYiIsImFkZEljb24iLCJyZWNvbW1lbmQiLCJmb2xsb3ciLCJleHBsYWluIiwidXNlck5hbWUiLCJjb3ZlciIsImRlbWFuZERlc2NyaWJlIiwid29yayIsInRhcmdldEluZHVzdHJpZXMiLCJ0YXJnZXRBZGRyZXNzIiwicHJldmlld0ltYWdlIiwicmVjb21tZW5kMSIsInphbk51bXMiLCJhcHBseVVzZXIiLCJuYW1lIiwibGFibGUiLCJwcm9tcHRUZXh0Iiwid2luZG93V2lkdGgiLCJ3aW5kb3dIZWlnaHQiLCJhZG1pblBvcHVwU2hvdyIsIm1ldGhvZHMiLCJuYXZiYXJUYXAiLCJzdGF0dXMiLCIkYnJvYWRjYXN0IiwibG9va0Z1bGxUZXh0IiwiaW5kZXgiLCJzaG93IiwiaGlkZGVuRnVsbFRleHQiLCJpbWciLCJ3eCIsImN1cnJlbnQiLCJ1cmxzIiwicGFnZVNjcm9sbFRvIiwic2Nyb2xsVG9wIiwiY2xvc2VBZG1pblBvcHVwIiwiZXZlbnRzIiwicXVlcnkiLCJjcmVhdGVTZWxlY3RvclF1ZXJ5Iiwic2VsZWN0IiwiYm91bmRpbmdDbGllbnRSZWN0IiwicmVjdCIsImhlaWdodCIsIiRhcHBseSIsImV4ZWMiLCJnZXRTeXN0ZW1JbmZvIiwic3VjY2VzcyIsInJlcyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7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VUFBN0I7QUFDQSxxQkFBS29CLGNBQUwsR0FBc0IsSUFBdEI7QUFDSCxhQW5DSzs7QUFvQ047QUFDQWUsMkJBckNNLDJCQXFDVW5DLFVBckNWLEVBcUNxQjtBQUN2QixxQkFBS29CLGNBQUwsR0FBc0IsS0FBdEI7QUFDSDtBQXZDSyxTLFFBMENWZ0IsTSxHQUFTLEU7Ozs7O2tDQUNBO0FBQUE7O0FBQ0wsZ0JBQUlDLFFBQVFQLEdBQUdRLG1CQUFILEVBQVo7QUFDQUQsa0JBQU1FLE1BQU4sQ0FBYSxvQkFBYixFQUFtQ0Msa0JBQW5DLENBQXNELGdCQUFNO0FBQ3hELHVCQUFLMUMsWUFBTCxHQUFvQjJDLEtBQUtDLE1BQXpCO0FBQ0EsdUJBQUtDLE1BQUw7QUFDSCxhQUhELEVBR0dDLElBSEg7QUFJQTtBQUNBZCxlQUFHZSxhQUFILENBQWlCO0FBQ2JDLHlCQUFRLGlCQUFDQyxHQUFELEVBQVE7QUFDWiwyQkFBSzdCLFdBQUwsR0FBbUI2QixJQUFJN0IsV0FBdkI7QUFDQSwyQkFBS0MsWUFBTCxHQUFvQjRCLElBQUk1QixZQUF4QjtBQUNBLDJCQUFLd0IsTUFBTDtBQUNIO0FBTFksYUFBakI7QUFPSDs7O2lDQUNRO0FBQ0wsaUJBQUtuQixVQUFMLENBQWdCLGVBQWhCLEVBQWdDLENBQWhDO0FBQ0g7Ozs7RUF4S3VDd0IsZUFBS0MsSTs7a0JBQTVCaEUsYyIsImZpbGUiOiJhZG1pbmlzdHJhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5pbXBvcnQgdXNlck1zZ0l0ZW0gZnJvbSAnLi4vY29tcG9uZW50cy91c2VyTXNnSXRlbSdcbmltcG9ydCByZWdpc3RlclBvcHVwIGZyb20gJy4uL2NvbXBvbmVudHMvcmVnaXN0ZXJQb3B1cCc7XG5pbXBvcnQgcmVjb21tZW5kVXNlck1zZ0l0ZW0gZnJvbSAnLi4vY29tcG9uZW50cy9yZWNvbW1lbmRVc2VyTXNnSXRlbSdcbmltcG9ydCByZWxlYXNlSXRlbSBmcm9tICcuLi9jb21wb25lbnRzL3JlbGVhc2VJdGVtJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBhZG1pbmlzdHJhdGlvbiBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn566h55CGJyxcbiAgICAgICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAgICAgICAnd3hjLXByaWNlJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtcHJpY2UvZGlzdC9pbmRleCcsXG4gICAgICAgICAgICAnd3hjLWljb24nOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1pY29uL2Rpc3QvaW5kZXgnXG4gICAgICAgIH0sXG4gICAgfTtcbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1widXNlck1zZ0l0ZW1cIjp7XCJ2LWJpbmQ6c3luY1RpdGxlLnN5bmNcIjpcImFwcGx5VXNlclwifSxcInJlY29tbWVuZFVzZXJNc2dJdGVtXCI6e1widi1iaW5kOnN5bmNUaXRsZS5zeW5jXCI6XCJhcHBseVVzZXJcIn0sXCJyZWxlYXNlSXRlbVwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6cmVjb21tZW5kRGF0YS5zeW5jXCI6XCJyZWNvbW1lbmRcIixcInYtYmluZDpyZWNvbW1lbmREYXRhcy5zeW5jXCI6XCJyZWNvbW1lbmQxXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgdXNlck1zZ0l0ZW0sXG4gICAgICAgIHJlY29tbWVuZFVzZXJNc2dJdGVtLFxuICAgICAgICByZWxlYXNlSXRlbSxcbiAgICAgICAgcmVnaXN0ZXJQb3B1cFxuICAgIH07XG5cbiAgICBkYXRhID0ge1xuICAgICAgICB0b3BCb3hIZWlnaHQ6MCxcbiAgICAgICAgbmF2YmFyOiBbXG4gICAgICAgICAgICAn5oiR55qE5Y+R5biDJyxcbiAgICAgICAgICAgICfmiJHnmoTnlLPor7cnLFxuICAgICAgICAgICAgJ+iBjOS9jeeuoeeQhidcbiAgICAgICAgXSxcbiAgICAgICAgY3VycmVudFRhYjogMCxcbiAgICAgICAgYWRkSWNvbjp0cnVlLFxuICAgICAgICByZWNvbW1lbmQ6W1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZvbGxvdzowLFxuICAgICAgICAgICAgICAgIGV4cGxhaW46WyfmgLvnu4/nkIYnLCfkupLogZTnvZHooYzkuJonLCfopb/lronluILpm4HloZTljLonXSxcbiAgICAgICAgICAgICAgICB1c2VyTmFtZTon6Iqx5rO957G7JyxcbiAgICAgICAgICAgICAgICBjb3ZlcjonLi4vaW1hZ2UvaW5kZXhSZWNvbW1lbmRVc2VyLnBuZycsXG4gICAgICAgICAgICAgICAgZGVtYW5kRGVzY3JpYmU6J+aWh+ahiOadkOaWme+8jOiusuino+aWueahiCcsXG4gICAgICAgICAgICAgICAgd29yazon5paH5qGI5p2Q5paZ77yM6K6y6Kej5pa55qGI5paH5qGI5p2Q5paZ77yM6K6y6Kej5pa55qGI5paH5qGI5p2QIOaWme+8jOiusuino+aWueahiCcsXG4gICAgICAgICAgICAgICAgdGFyZ2V0SW5kdXN0cmllczonSVQv56Gs5Lu2JyxcbiAgICAgICAgICAgICAgICB0YXJnZXRBZGRyZXNzOifopb/lronluILpm4HloZTljLrpq5jmlrDlpKfpg73ojZ8nLFxuICAgICAgICAgICAgICAgIHByZXZpZXdJbWFnZTpbXG4gICAgICAgICAgICAgICAgICAgICdodHRwOi8vaW1nNC5pbWd0bi5iZGltZy5jb20vaXQvdT0xMjY2NjY4MDcxLDE4MTQwNzI5MzcmZm09MjYmZ3A9MC5qcGcnLFxuICAgICAgICAgICAgICAgICAgICAnaHR0cHM6Ly90aW1nc2EuYmFpZHUuY29tL3RpbWc/aW1hZ2UmcXVhbGl0eT04MCZzaXplPWI5OTk5XzEwMDAwJnNlYz0xNTYxNjk5ODU1MzkyJmRpPTY0N2JiNmRjNDY4Mjg0YjMyOTAxNDQ1NWNhNWQyMWRhJmltZ3R5cGU9MCZzcmM9aHR0cCUzQSUyRiUyRnBob3RvY2RuLnNvaHUuY29tJTJGMjAwNjEwMzElMkZJbWcyNDYxMTA1NjAuanBnJyxcbiAgICAgICAgICAgICAgICAgICAgJ2h0dHBzOi8vdGltZ3NhLmJhaWR1LmNvbS90aW1nP2ltYWdlJnF1YWxpdHk9ODAmc2l6ZT1iOTk5OV8xMDAwMCZzZWM9MTU2MTY5OTg1NTM5MSZkaT03MjgyMGQ4NmRlNmZhMTZjY2Q0MDU2ZTZkYWM0MmNjZiZpbWd0eXBlPTAmc3JjPWh0dHAlM0ElMkYlMkZpbWcubXAuc29odS5jb20lMkZ1cGxvYWQlMkYyMDE3MDYxNiUyRjllNjQ5Y2I5ZTAwYzQyNGY5NmZjMjYzMjczODMwYTA3X3RoLnBuZycsXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgcmVjb21tZW5kMTpbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZm9sbG93OjEsXG4gICAgICAgICAgICAgICAgZXhwbGFpbjpbJ+aAu+e7j+eQhicsJ+S6kuiBlOe9keihjOS4micsJ+ilv+WuieW4gumbgeWhlOWMuiddLFxuICAgICAgICAgICAgICAgIHVzZXJOYW1lOifmnY7kuL3kuL0nLFxuICAgICAgICAgICAgICAgIGNvdmVyOicuLi9pbWFnZS9pbmRleFJlY29tbWVuZFVzZXIucG5nJyxcbiAgICAgICAgICAgICAgICBkZW1hbmREZXNjcmliZTon5paH5qGI5p2Q5paZ77yM6K6y6Kej5pa55qGI5paH5qGI5p2Q5paZ77yM6K6y6Kej5pa55qGI5paH5qGI5p2Q5paZ77yM6K6y6Kej5pa55qGI5paH5qGI5p2Q5paZJyxcbiAgICAgICAgICAgICAgICB3b3JrOifmlofmoYjmnZDmlpnvvIzorrLop6PmlrnmoYjmlofmoYjmnZDmlpnvvIzorrLop6PmlrnmoYjmlofmoYjmnZAg5paZ77yM6K6y6Kej5pa55qGIJyxcbiAgICAgICAgICAgICAgICB0YXJnZXRJbmR1c3RyaWVzOidJVC/noazku7YnLFxuICAgICAgICAgICAgICAgIHRhcmdldEFkZHJlc3M6J+ilv+WuieW4gumbgeWhlOWMuumrmOaWsOWkp+mDveiNnycsXG4gICAgICAgICAgICAgICAgemFuTnVtczo0NTFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZm9sbG93OjAsXG4gICAgICAgICAgICAgICAgZXhwbGFpbjpbJ+aAu+e7j+eQhicsJ+S6kuiBlOe9keihjOS4micsJ+ilv+WuieW4gumbgeWhlOWMuiddLFxuICAgICAgICAgICAgICAgIHVzZXJOYW1lOifoirHms73nsbsnLFxuICAgICAgICAgICAgICAgIGNvdmVyOicuLi9pbWFnZS9pbmRleFJlY29tbWVuZFVzZXIucG5nJyxcbiAgICAgICAgICAgICAgICBkZW1hbmREZXNjcmliZTon5paH5qGI5p2Q5paZ77yM6K6y6Kej5pa55qGIJyxcbiAgICAgICAgICAgICAgICB3b3JrOifmlofmoYjmnZDmlpnvvIzorrLop6PmlrnmoYjmlofmoYjmnZDmlpnvvIzorrLop6PmlrnmoYjmlofmoYjmnZAg5paZ77yM6K6y6Kej5pa55qGIJyxcbiAgICAgICAgICAgICAgICB0YXJnZXRJbmR1c3RyaWVzOidJVC/noazku7YnLFxuICAgICAgICAgICAgICAgIHRhcmdldEFkZHJlc3M6J+ilv+WuieW4gumbgeWhlOWMuumrmOaWsOWkp+mDveiNnycsXG4gICAgICAgICAgICAgICAgemFuTnVtczoyODgsXG4gICAgICAgICAgICAgICAgcHJldmlld0ltYWdlOltcbiAgICAgICAgICAgICAgICAgICAgJ2h0dHA6Ly9pbWc0LmltZ3RuLmJkaW1nLmNvbS9pdC91PTEyNjY2NjgwNzEsMTgxNDA3MjkzNyZmbT0yNiZncD0wLmpwZycsXG4gICAgICAgICAgICAgICAgICAgICdodHRwczovL3RpbWdzYS5iYWlkdS5jb20vdGltZz9pbWFnZSZxdWFsaXR5PTgwJnNpemU9Yjk5OTlfMTAwMDAmc2VjPTE1NjE2OTk4NTUzOTImZGk9NjQ3YmI2ZGM0NjgyODRiMzI5MDE0NDU1Y2E1ZDIxZGEmaW1ndHlwZT0wJnNyYz1odHRwJTNBJTJGJTJGcGhvdG9jZG4uc29odS5jb20lMkYyMDA2MTAzMSUyRkltZzI0NjExMDU2MC5qcGcnLFxuICAgICAgICAgICAgICAgICAgICAnaHR0cHM6Ly90aW1nc2EuYmFpZHUuY29tL3RpbWc/aW1hZ2UmcXVhbGl0eT04MCZzaXplPWI5OTk5XzEwMDAwJnNlYz0xNTYxNjk5ODU1MzkxJmRpPTcyODIwZDg2ZGU2ZmExNmNjZDQwNTZlNmRhYzQyY2NmJmltZ3R5cGU9MCZzcmM9aHR0cCUzQSUyRiUyRmltZy5tcC5zb2h1LmNvbSUyRnVwbG9hZCUyRjIwMTcwNjE2JTJGOWU2NDljYjllMDBjNDI0Zjk2ZmMyNjMyNzM4MzBhMDdfdGgucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgJ2h0dHBzOi8vc3MzLmJkc3RhdGljLmNvbS83MGNGdjhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0yMDg1MjIzMzc2LDUzNjE4MTA5MSZmbT0yNiZncD0wLmpwZycsXG4gICAgICAgICAgICAgICAgICAgICdodHRwczovL3RpbWdzYS5iYWlkdS5jb20vdGltZz9pbWFnZSZxdWFsaXR5PTgwJnNpemU9Yjk5OTlfMTAwMDAmc2VjPTE1NjE2OTk4NTUzODgmZGk9NGIwMzdkZjkzMDZjMzY2OWMyY2EyMjA1NzUxYWNhMjMmaW1ndHlwZT0wJnNyYz1odHRwJTNBJTJGJTJGZy5oaXBob3Rvcy5iYWlkdS5jb20lMkZ6aGlkYW8lMkZwaWMlMkZpdGVtJTJGNjNkMGY3MDM5MThmYTBlYzc2ZDNmN2I5MmQ5NzU5ZWUzZDZkZGI2YS5qcGcnLFxuICAgICAgICAgICAgICAgICAgICAnaHR0cHM6Ly9zczEuYmRzdGF0aWMuY29tLzcwY0Z1WFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTM5ODY1OTU2OCwyNjkwNDM5ODY3JmZtPTI2JmdwPTAuanBnJyxcbiAgICAgICAgICAgICAgICAgICAgJ2h0dHBzOi8vc3MyLmJkc3RhdGljLmNvbS83MGNGdm5TaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0yOTc2ODQyMzUyLDYzNjgxMDUzMCZmbT0yNiZncD0wLmpwZycsXG4gICAgICAgICAgICAgICAgICAgICdodHRwczovL3NzMC5iZHN0YXRpYy5jb20vNzBjRnZIU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9MjQ3OTAwNDc1OCwyNzMxMDY3MjA4JmZtPTI2JmdwPTAuanBnJyxcbiAgICAgICAgICAgICAgICAgICAgJ2h0dHBzOi8vdGltZ3NhLmJhaWR1LmNvbS90aW1nP2ltYWdlJnF1YWxpdHk9ODAmc2l6ZT1iOTk5OV8xMDAwMCZzZWM9MTU2MTcwMDA3NjY0NSZkaT02MDZlNTE1M2M5YWNlNjRiMzFhMTFjM2FjMzNhODBjNCZpbWd0eXBlPTAmc3JjPWh0dHAlM0ElMkYlMkZwaWMucWlhbnR1Y2RuLmNvbSUyRjU4cGljJTJGMTIlMkY2OSUyRjc0JTJGODRjNThQSUNBS00uanBnJ1xuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZm9sbG93OjEsXG4gICAgICAgICAgICAgICAgZXhwbGFpbjpbJ+aAu+e7j+eQhicsJ+S6kuiBlOe9keihjOS4micsJ+ilv+WuieW4gumbgeWhlOWMuiddLFxuICAgICAgICAgICAgICAgIHVzZXJOYW1lOifmsarmnJvov4snLFxuICAgICAgICAgICAgICAgIGNvdmVyOicuLi9pbWFnZS9pbmRleFJlY29tbWVuZFVzZXIucG5nJyxcbiAgICAgICAgICAgICAgICBkZW1hbmREZXNjcmliZTon5paH5qGI5p2Q5paZ77yM6K6y6Kej5pa55qGIJyxcbiAgICAgICAgICAgICAgICB3b3JrOifmlofmoYjmnZDmlpnvvIzorrLop6PmlrnmoYjmlofmoYjmnZDmlpnvvIzorrLop6PmlrnmoYjmlofmoYjmnZAg5paZ77yM6K6y6Kej5pa55qGIJyxcbiAgICAgICAgICAgICAgICB0YXJnZXRJbmR1c3RyaWVzOidJVC/noazku7YnLFxuICAgICAgICAgICAgICAgIHRhcmdldEFkZHJlc3M6J+ilv+WuieW4gumbgeWhlOWMuumrmOaWsOWkp+mDveiNnycsXG4gICAgICAgICAgICAgICAgemFuTnVtczozNjZcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIGFwcGx5VXNlcjpbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY292ZXI6Jy4uL2ltYWdlL2dvb2RzLWltZy1kZWZhdWx0LnBuZycsXG4gICAgICAgICAgICAgICAgbmFtZTon6Iqx5rO957G7JyxcbiAgICAgICAgICAgICAgICBsYWJsZTonSVTkupLogZTnvZHvvZzkupHorqHnrpcnLFxuICAgICAgICAgICAgICAgIHByb21wdFRleHQ6J+S4iua1t+iLsea3mOS4iua1t+iLsea3mOS4iua1t+iLsea3mOS4iua1t+iLsea3mOS4iua1t+iLsea3mOS4iua1t+iLsea3mOS4iua1t+iLsea3mCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvdmVyOicuLi9pbWFnZS9nb29kcy1pbWctZGVmYXVsdC5wbmcnLFxuICAgICAgICAgICAgICAgIG5hbWU6J+iKseazveexuycsXG4gICAgICAgICAgICAgICAgbGFibGU6J0lU5LqS6IGU572R772c5LqR6K6h566XJyxcbiAgICAgICAgICAgICAgICBwcm9tcHRUZXh0OifkuIrmtbfoi7Hmt5jkuIrmtbfoi7Hmt5jkuIrmtbfoi7Hmt5jkuIrmtbfoi7Hmt5jkuIrmtbfoi7Hmt5jkuIrmtbfoi7Hmt5jkuIrmtbfoi7Hmt5gnLFxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICB3aW5kb3dXaWR0aDowLFxuICAgICAgICB3aW5kb3dIZWlnaHQ6MCxcbiAgICAgICAgYWRtaW5Qb3B1cFNob3c6ZmFsc2UsXG4gICAgfTtcbiAgICBtZXRob2RzID0ge1xuICAgICAgICAvLyB0YWLliIfmjaJcbiAgICAgICAgbmF2YmFyVGFwKHN0YXR1cyl7XG4gICAgICAgICAgdGhpcy5jdXJyZW50VGFiID0gc3RhdHVzO1xuICAgICAgICAgIHRoaXMuJGJyb2FkY2FzdCgnY3VycmVudFN0YXR1cycsc3RhdHVzKVxuICAgICAgICAgIGlmKHN0YXR1cyA9PSAxKSB7XG4gICAgICAgICAgICAgIHRoaXMuYWRkSWNvbiA9IGZhbHNlXG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgIHRoaXMuYWRkSWNvbiA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8vIOafpeeci+WFqOaWh1xuICAgICAgICBsb29rRnVsbFRleHQoaW5kZXgpe1xuICAgICAgICAgICAgaWYodGhpcy5jdXJyZW50VGFiID09IDApIHRoaXMucmVjb21tZW5kW2luZGV4XS5zaG93ID0gdHJ1ZVxuICAgICAgICAgICAgaWYodGhpcy5jdXJyZW50VGFiID09IDEpdGhpcy5yZWNvbW1lbmQxW2luZGV4XS5zaG93ID0gdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICAvLyDpmpDol4/lhajmlodcbiAgICAgICAgaGlkZGVuRnVsbFRleHQoaW5kZXgpe1xuICAgICAgICAgICAgaWYodGhpcy5jdXJyZW50VGFiID09IDApIHRoaXMucmVjb21tZW5kW2luZGV4XS5zaG93ID0gZmFsc2VcbiAgICAgICAgICAgIGlmKHRoaXMuY3VycmVudFRhYiA9PSAxKSB0aGlzLnJlY29tbWVuZDFbaW5kZXhdLnNob3cgPSBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICAvLyDlm77niYfpooTop4hcbiAgICAgICAgcHJldmlld0ltYWdlKGluZGV4LGltZyl7XG4gICAgICAgICAgICB3eC5wcmV2aWV3SW1hZ2Uoe1xuICAgICAgICAgICAgICAgIGN1cnJlbnQ6IGltZywgLy8g5b2T5YmN5pi+56S65Zu+54mH55qEaHR0cOmTvuaOpVxuICAgICAgICAgICAgICAgIHVybHM6IHRoaXMucmVjb21tZW5kW2luZGV4XS5wcmV2aWV3SW1hZ2UgLy8g6ZyA6KaB6aKE6KeI55qE5Zu+54mHaHR0cOmTvuaOpeWIl+ihqFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgLy8g6LCD5Ye65by556qXXG4gICAgICAgIGFkbWluUG9wdXBTaG93KGN1cnJlbnRUYWIpe1xuICAgICAgICAgICAgd3gucGFnZVNjcm9sbFRvKHtcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IDBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLiRicm9hZGNhc3QoJ2FkbWluUG9wdXAnLGN1cnJlbnRUYWIpXG4gICAgICAgICAgICB0aGlzLmFkbWluUG9wdXBTaG93ID0gdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICAvLyDlhbPpl63lvLnnqpdcbiAgICAgICAgY2xvc2VBZG1pblBvcHVwKGN1cnJlbnRUYWIpe1xuICAgICAgICAgICAgdGhpcy5hZG1pblBvcHVwU2hvdyA9IGZhbHNlXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZXZlbnRzID0ge307XG4gICAgb25SZWFkeSgpe1xuICAgICAgICBsZXQgcXVlcnkgPSB3eC5jcmVhdGVTZWxlY3RvclF1ZXJ5KCk7XG4gICAgICAgIHF1ZXJ5LnNlbGVjdCgnLnBlcnNvbmFsTXNnVGFiQm94JykuYm91bmRpbmdDbGllbnRSZWN0KHJlY3Q9PntcbiAgICAgICAgICAgIHRoaXMudG9wQm94SGVpZ2h0ID0gcmVjdC5oZWlnaHRcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgfSkuZXhlYygpO1xuICAgICAgICAvLyDojrflj5bnqpflj6PlsLrlr7hcbiAgICAgICAgd3guZ2V0U3lzdGVtSW5mbyh7XG4gICAgICAgICAgICBzdWNjZXNzOihyZXMpPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMud2luZG93V2lkdGggPSByZXMud2luZG93V2lkdGhcbiAgICAgICAgICAgICAgICB0aGlzLndpbmRvd0hlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy4kYnJvYWRjYXN0KCdjdXJyZW50U3RhdHVzJywwKVxuICAgIH07XG4gICAgLy8gT3RoZXIgcHJvcGVydGllc1xufVxuIl19