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

var personalDetails = function (_wepy$page) {
    _inherits(personalDetails, _wepy$page);

    function personalDetails() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, personalDetails);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = personalDetails.__proto__ || Object.getPrototypeOf(personalDetails)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '个人详情',
            usingComponents: {
                'wxc-icon': '../../packages/@minui/wxc-icon/dist/index',
                'wxc-progress': '../../packages/@minui/wxc-progress/dist/index',
                'wxc-abnor': '../../packages/@minui/wxc-abnor/dist/index'
            }
        }, _this.components = {}, _this.data = {
            topBoxHeight: 0,
            isShow: false,
            tabShow: false,
            navbar: ['基本资料', '我的动态'],
            currentTab: 0,
            allData: null,
            personalSkill: [{
                title: '团队建设',
                percent: 35
            }, {
                title: 'Sass',
                percent: 68
            }, {
                title: '英语',
                percent: 80
            }],
            dynamicData: [{
                title: '英淘成功案例',
                time: '2019-09-09',
                jieshao: '案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍绍案例介绍案例介绍绍案例介绍案例介绍绍案例介绍案例介绍',
                previewImage: ['http://img4.imgtn.bdimg.com/it/u=1266668071,1814072937&fm=26&gp=0.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561699855392&di=647bb6dc468284b329014455ca5d21da&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20061031%2FImg246110560.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561699855391&di=72820d86de6fa16ccd4056e6dac42ccf&imgtype=0&src=http%3A%2F%2Fimg.mp.sohu.com%2Fupload%2F20170616%2F9e649cb9e00c424f96fc263273830a07_th.png', 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2085223376,536181091&fm=26&gp=0.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561699855388&di=4b037df9306c3669c2ca2205751aca23&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F63d0f703918fa0ec76d3f7b92d9759ee3d6ddb6a.jpg', 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=398659568,2690439867&fm=26&gp=0.jpg', 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2976842352,636810530&fm=26&gp=0.jpg', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2479004758,2731067208&fm=26&gp=0.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561700076645&di=606e5153c9ace64b31a11c3ac33a80c4&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F12%2F69%2F74%2F84c58PICAKM.jpg']
            }]
        }, _this.methods = {
            // tab切换
            navbarTap: function navbarTap(status) {
                this.currentTab = status;
            },

            // 图片预览
            previewImage: function previewImage(index, img) {
                wx.previewImage({
                    current: img, // 当前显示图片的http链接
                    urls: this.dynamicData[index].previewImage // 需要预览的图片http链接列表
                });
            },

            // 编辑个人简介
            editIntroductionPage: function editIntroductionPage() {
                wx.navigateTo({
                    url: './editIntroduction'
                });
            },

            // 编辑个人技能
            personalSkillPage: function personalSkillPage() {
                wx.navigateTo({
                    url: './editPersonalSkill'
                });
            },

            // 编辑人脉、职业经历、教育背景
            editMsg: function editMsg(title) {
                wx.navigateTo({
                    url: './editMsg?title=' + title
                });
            }
        }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(personalDetails, [{
        key: 'onReady',
        value: function onReady() {
            var _this2 = this;

            var query = wx.createSelectorQuery();
            query.select('.personalTopBox').boundingClientRect(function (rect) {
                _this2.topBoxHeight = rect.height;
                _this2.$apply();
            }).exec();
        }
    }, {
        key: 'onLoad',
        value: function onLoad(options) {
            // request(personalMsg,'POST',{id:options.id}).then(res=>{
            //     // console.log(res.data.data)
            //     if(res.data.code == 1){
            //         this.isShow = false
            //         this.allData = res.data.data
            //     }else{
            //         this.isShow = true
            //     }
            //     this.$apply()
            // }).catch(()=>{
            //     this.isShow = true
            //     this.$apply()
            // })
        }
    }, {
        key: 'onPageScroll',
        value: function onPageScroll(e) {
            if (e.scrollTop >= this.topBoxHeight) {
                this.tabShow = true;
                this.$apply();
            } else {
                this.tabShow = false;
                this.$apply();
            }
        }
    }]);

    return personalDetails;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(personalDetails , 'subpackage/square/personalDetails'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcnNvbmFsRGV0YWlscy5qcyJdLCJuYW1lcyI6WyJwZXJzb25hbERldGFpbHMiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwidXNpbmdDb21wb25lbnRzIiwiY29tcG9uZW50cyIsImRhdGEiLCJ0b3BCb3hIZWlnaHQiLCJpc1Nob3ciLCJ0YWJTaG93IiwibmF2YmFyIiwiY3VycmVudFRhYiIsImFsbERhdGEiLCJwZXJzb25hbFNraWxsIiwidGl0bGUiLCJwZXJjZW50IiwiZHluYW1pY0RhdGEiLCJ0aW1lIiwiamllc2hhbyIsInByZXZpZXdJbWFnZSIsIm1ldGhvZHMiLCJuYXZiYXJUYXAiLCJzdGF0dXMiLCJpbmRleCIsImltZyIsInd4IiwiY3VycmVudCIsInVybHMiLCJlZGl0SW50cm9kdWN0aW9uUGFnZSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJwZXJzb25hbFNraWxsUGFnZSIsImVkaXRNc2ciLCJldmVudHMiLCJxdWVyeSIsImNyZWF0ZVNlbGVjdG9yUXVlcnkiLCJzZWxlY3QiLCJib3VuZGluZ0NsaWVudFJlY3QiLCJyZWN0IiwiaGVpZ2h0IiwiJGFwcGx5IiwiZXhlYyIsIm9wdGlvbnMiLCJlIiwic2Nyb2xsVG9wIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBLGU7Ozs7Ozs7Ozs7Ozs7OzRNQUNqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QixNQURuQjtBQUVMQyw2QkFBaUI7QUFDYiw0QkFBWSwyQ0FEQztBQUViLGdDQUFnQiwrQ0FGSDtBQUdiLDZCQUFhO0FBSEE7QUFGWixTLFFBUVRDLFUsR0FBYSxFLFFBRWJDLEksR0FBTztBQUNIQywwQkFBYSxDQURWO0FBRUhDLG9CQUFPLEtBRko7QUFHSEMscUJBQVEsS0FITDtBQUlIQyxvQkFBUSxDQUNKLE1BREksRUFFSixNQUZJLENBSkw7QUFRSEMsd0JBQVksQ0FSVDtBQVNIQyxxQkFBUSxJQVRMO0FBVUhDLDJCQUFjLENBQ1Y7QUFDSUMsdUJBQU0sTUFEVjtBQUVJQyx5QkFBUTtBQUZaLGFBRFUsRUFLVjtBQUNJRCx1QkFBTSxNQURWO0FBRUlDLHlCQUFRO0FBRlosYUFMVSxFQVNWO0FBQ0lELHVCQUFNLElBRFY7QUFFSUMseUJBQVE7QUFGWixhQVRVLENBVlg7QUF3QkhDLHlCQUFZLENBQ1I7QUFDSUYsdUJBQU0sUUFEVjtBQUVJRyxzQkFBSyxZQUZUO0FBR0lDLHlCQUFRLGlFQUhaO0FBSUlDLDhCQUFhLENBQ1QsdUVBRFMsRUFFVCxrTUFGUyxFQUdULGdPQUhTLEVBSVQsK0ZBSlMsRUFLVCw0T0FMUyxFQU1ULCtGQU5TLEVBT1QsK0ZBUFMsRUFRVCxnR0FSUyxFQVNULDZNQVRTO0FBSmpCLGFBRFE7QUF4QlQsUyxRQTJDUEMsTyxHQUFVO0FBQ047QUFDQUMscUJBRk0scUJBRUlDLE1BRkosRUFFVztBQUNmLHFCQUFLWCxVQUFMLEdBQWtCVyxNQUFsQjtBQUNELGFBSks7O0FBS047QUFDQUgsd0JBTk0sd0JBTU9JLEtBTlAsRUFNYUMsR0FOYixFQU1pQjtBQUNuQkMsbUJBQUdOLFlBQUgsQ0FBZ0I7QUFDWk8sNkJBQVNGLEdBREcsRUFDRTtBQUNkRywwQkFBTSxLQUFLWCxXQUFMLENBQWlCTyxLQUFqQixFQUF3QkosWUFGbEIsQ0FFK0I7QUFGL0IsaUJBQWhCO0FBSUgsYUFYSzs7QUFZTjtBQUNBUyxnQ0FiTSxrQ0FhZ0I7QUFDbEJILG1CQUFHSSxVQUFILENBQWM7QUFDVkMseUJBQUs7QUFESyxpQkFBZDtBQUdILGFBakJLOztBQWtCTjtBQUNBQyw2QkFuQk0sK0JBbUJhO0FBQ2ZOLG1CQUFHSSxVQUFILENBQWM7QUFDVkMseUJBQUs7QUFESyxpQkFBZDtBQUdILGFBdkJLOztBQXdCTjtBQUNBRSxtQkF6Qk0sbUJBeUJFbEIsS0F6QkYsRUF5QlE7QUFDVlcsbUJBQUdJLFVBQUgsQ0FBYztBQUNWQyw4Q0FBd0JoQjtBQURkLGlCQUFkO0FBR0g7QUE3QkssUyxRQWdDVm1CLE0sR0FBUyxFOzs7OztrQ0FDQTtBQUFBOztBQUNMLGdCQUFJQyxRQUFRVCxHQUFHVSxtQkFBSCxFQUFaO0FBQ0FELGtCQUFNRSxNQUFOLENBQWEsaUJBQWIsRUFBZ0NDLGtCQUFoQyxDQUFtRCxnQkFBTTtBQUNyRCx1QkFBSzlCLFlBQUwsR0FBb0IrQixLQUFLQyxNQUF6QjtBQUNBLHVCQUFLQyxNQUFMO0FBQ0gsYUFIRCxFQUdHQyxJQUhIO0FBSUg7OzsrQkFDTUMsTyxFQUFTO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7O3FDQUNZQyxDLEVBQUU7QUFDWCxnQkFBR0EsRUFBRUMsU0FBRixJQUFhLEtBQUtyQyxZQUFyQixFQUFrQztBQUM5QixxQkFBS0UsT0FBTCxHQUFlLElBQWY7QUFDQSxxQkFBSytCLE1BQUw7QUFDSCxhQUhELE1BR0s7QUFDRCxxQkFBSy9CLE9BQUwsR0FBZSxLQUFmO0FBQ0EscUJBQUsrQixNQUFMO0FBQ0g7QUFDSjs7OztFQXJId0NLLGVBQUtDLEk7O2tCQUE3QjdDLGUiLCJmaWxlIjoicGVyc29uYWxEZXRhaWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG5pbXBvcnQgeyBwZXJzb25hbE1zZyB9IGZyb20gXCIuLi8uLi9hcGkvYXBpLmpzXCI7XHJcbmltcG9ydCB7IHJlcXVlc3QsdG9hc3QgfSBmcm9tICcuLi8uLi91dGlscy91dGlscy5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBwZXJzb25hbERldGFpbHMgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfkuKrkurror6bmg4UnLFxyXG4gICAgICAgIHVzaW5nQ29tcG9uZW50czoge1xyXG4gICAgICAgICAgICAnd3hjLWljb24nOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1pY29uL2Rpc3QvaW5kZXgnLFxyXG4gICAgICAgICAgICAnd3hjLXByb2dyZXNzJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtcHJvZ3Jlc3MvZGlzdC9pbmRleCcsXHJcbiAgICAgICAgICAgICd3eGMtYWJub3InOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1hYm5vci9kaXN0L2luZGV4J1xyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG4gICAgY29tcG9uZW50cyA9IHt9O1xyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgICAgdG9wQm94SGVpZ2h0OjAsXHJcbiAgICAgICAgaXNTaG93OmZhbHNlLFxyXG4gICAgICAgIHRhYlNob3c6ZmFsc2UsXHJcbiAgICAgICAgbmF2YmFyOiBbXHJcbiAgICAgICAgICAgICfln7rmnKzotYTmlpknLFxyXG4gICAgICAgICAgICAn5oiR55qE5Yqo5oCBJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgY3VycmVudFRhYjogMCxcclxuICAgICAgICBhbGxEYXRhOm51bGwsXHJcbiAgICAgICAgcGVyc29uYWxTa2lsbDpbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiflm6LpmJ/lu7rorr4nLFxyXG4gICAgICAgICAgICAgICAgcGVyY2VudDozNVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTonU2FzcycsXHJcbiAgICAgICAgICAgICAgICBwZXJjZW50OjY4XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOifoi7Hor60nLFxyXG4gICAgICAgICAgICAgICAgcGVyY2VudDo4MFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBkeW5hbWljRGF0YTpbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOifoi7Hmt5jmiJDlip/moYjkvosnLFxyXG4gICAgICAgICAgICAgICAgdGltZTonMjAxOS0wOS0wOScsXHJcbiAgICAgICAgICAgICAgICBqaWVzaGFvOifmoYjkvovku4vnu43moYjkvovku4vnu43moYjkvovku4vnu43moYjkvovku4vnu43moYjkvovku4vnu43moYjkvovku4vnu43moYjkvovku4vnu43moYjkvovku4vnu43moYjkvovku4vnu43nu43moYjkvovku4vnu43moYjkvovku4vnu43nu43moYjkvovku4vnu43moYjkvovku4vnu43nu43moYjkvovku4vnu43moYjkvovku4vnu40nLFxyXG4gICAgICAgICAgICAgICAgcHJldmlld0ltYWdlOltcclxuICAgICAgICAgICAgICAgICAgICAnaHR0cDovL2ltZzQuaW1ndG4uYmRpbWcuY29tL2l0L3U9MTI2NjY2ODA3MSwxODE0MDcyOTM3JmZtPTI2JmdwPTAuanBnJyxcclxuICAgICAgICAgICAgICAgICAgICAnaHR0cHM6Ly90aW1nc2EuYmFpZHUuY29tL3RpbWc/aW1hZ2UmcXVhbGl0eT04MCZzaXplPWI5OTk5XzEwMDAwJnNlYz0xNTYxNjk5ODU1MzkyJmRpPTY0N2JiNmRjNDY4Mjg0YjMyOTAxNDQ1NWNhNWQyMWRhJmltZ3R5cGU9MCZzcmM9aHR0cCUzQSUyRiUyRnBob3RvY2RuLnNvaHUuY29tJTJGMjAwNjEwMzElMkZJbWcyNDYxMTA1NjAuanBnJyxcclxuICAgICAgICAgICAgICAgICAgICAnaHR0cHM6Ly90aW1nc2EuYmFpZHUuY29tL3RpbWc/aW1hZ2UmcXVhbGl0eT04MCZzaXplPWI5OTk5XzEwMDAwJnNlYz0xNTYxNjk5ODU1MzkxJmRpPTcyODIwZDg2ZGU2ZmExNmNjZDQwNTZlNmRhYzQyY2NmJmltZ3R5cGU9MCZzcmM9aHR0cCUzQSUyRiUyRmltZy5tcC5zb2h1LmNvbSUyRnVwbG9hZCUyRjIwMTcwNjE2JTJGOWU2NDljYjllMDBjNDI0Zjk2ZmMyNjMyNzM4MzBhMDdfdGgucG5nJyxcclxuICAgICAgICAgICAgICAgICAgICAnaHR0cHM6Ly9zczMuYmRzdGF0aWMuY29tLzcwY0Z2OFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTIwODUyMjMzNzYsNTM2MTgxMDkxJmZtPTI2JmdwPTAuanBnJyxcclxuICAgICAgICAgICAgICAgICAgICAnaHR0cHM6Ly90aW1nc2EuYmFpZHUuY29tL3RpbWc/aW1hZ2UmcXVhbGl0eT04MCZzaXplPWI5OTk5XzEwMDAwJnNlYz0xNTYxNjk5ODU1Mzg4JmRpPTRiMDM3ZGY5MzA2YzM2NjljMmNhMjIwNTc1MWFjYTIzJmltZ3R5cGU9MCZzcmM9aHR0cCUzQSUyRiUyRmcuaGlwaG90b3MuYmFpZHUuY29tJTJGemhpZGFvJTJGcGljJTJGaXRlbSUyRjYzZDBmNzAzOTE4ZmEwZWM3NmQzZjdiOTJkOTc1OWVlM2Q2ZGRiNmEuanBnJyxcclxuICAgICAgICAgICAgICAgICAgICAnaHR0cHM6Ly9zczEuYmRzdGF0aWMuY29tLzcwY0Z1WFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTM5ODY1OTU2OCwyNjkwNDM5ODY3JmZtPTI2JmdwPTAuanBnJyxcclxuICAgICAgICAgICAgICAgICAgICAnaHR0cHM6Ly9zczIuYmRzdGF0aWMuY29tLzcwY0Z2blNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTI5NzY4NDIzNTIsNjM2ODEwNTMwJmZtPTI2JmdwPTAuanBnJyxcclxuICAgICAgICAgICAgICAgICAgICAnaHR0cHM6Ly9zczAuYmRzdGF0aWMuY29tLzcwY0Z2SFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTI0NzkwMDQ3NTgsMjczMTA2NzIwOCZmbT0yNiZncD0wLmpwZycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2h0dHBzOi8vdGltZ3NhLmJhaWR1LmNvbS90aW1nP2ltYWdlJnF1YWxpdHk9ODAmc2l6ZT1iOTk5OV8xMDAwMCZzZWM9MTU2MTcwMDA3NjY0NSZkaT02MDZlNTE1M2M5YWNlNjRiMzFhMTFjM2FjMzNhODBjNCZpbWd0eXBlPTAmc3JjPWh0dHAlM0ElMkYlMkZwaWMucWlhbnR1Y2RuLmNvbSUyRjU4cGljJTJGMTIlMkY2OSUyRjc0JTJGODRjNThQSUNBS00uanBnJ1xyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfTtcclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgLy8gdGFi5YiH5o2iXHJcbiAgICAgICAgbmF2YmFyVGFwKHN0YXR1cyl7XHJcbiAgICAgICAgICB0aGlzLmN1cnJlbnRUYWIgPSBzdGF0dXM7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDlm77niYfpooTop4hcclxuICAgICAgICBwcmV2aWV3SW1hZ2UoaW5kZXgsaW1nKXtcclxuICAgICAgICAgICAgd3gucHJldmlld0ltYWdlKHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnQ6IGltZywgLy8g5b2T5YmN5pi+56S65Zu+54mH55qEaHR0cOmTvuaOpVxyXG4gICAgICAgICAgICAgICAgdXJsczogdGhpcy5keW5hbWljRGF0YVtpbmRleF0ucHJldmlld0ltYWdlIC8vIOmcgOimgemihOiniOeahOWbvueJh2h0dHDpk77mjqXliJfooahcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOe8lui+keS4quS6uueugOS7i1xyXG4gICAgICAgIGVkaXRJbnRyb2R1Y3Rpb25QYWdlKCl7XHJcbiAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnLi9lZGl0SW50cm9kdWN0aW9uJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g57yW6L6R5Liq5Lq65oqA6IO9XHJcbiAgICAgICAgcGVyc29uYWxTa2lsbFBhZ2UoKXtcclxuICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcuL2VkaXRQZXJzb25hbFNraWxsJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g57yW6L6R5Lq66ISJ44CB6IGM5Lia57uP5Y6G44CB5pWZ6IKy6IOM5pmvXHJcbiAgICAgICAgZWRpdE1zZyh0aXRsZSl7XHJcbiAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBgLi9lZGl0TXNnP3RpdGxlPSR7dGl0bGV9YFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZXZlbnRzID0ge307XHJcbiAgICBvblJlYWR5KCl7XHJcbiAgICAgICAgbGV0IHF1ZXJ5ID0gd3guY3JlYXRlU2VsZWN0b3JRdWVyeSgpO1xyXG4gICAgICAgIHF1ZXJ5LnNlbGVjdCgnLnBlcnNvbmFsVG9wQm94JykuYm91bmRpbmdDbGllbnRSZWN0KHJlY3Q9PntcclxuICAgICAgICAgICAgdGhpcy50b3BCb3hIZWlnaHQgPSByZWN0LmhlaWdodFxyXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgfSkuZXhlYygpO1xyXG4gICAgfVxyXG4gICAgb25Mb2FkKG9wdGlvbnMpIHtcclxuICAgICAgICAvLyByZXF1ZXN0KHBlcnNvbmFsTXNnLCdQT1NUJyx7aWQ6b3B0aW9ucy5pZH0pLnRoZW4ocmVzPT57XHJcbiAgICAgICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKHJlcy5kYXRhLmRhdGEpXHJcbiAgICAgICAgLy8gICAgIGlmKHJlcy5kYXRhLmNvZGUgPT0gMSl7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmlzU2hvdyA9IGZhbHNlXHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmFsbERhdGEgPSByZXMuZGF0YS5kYXRhXHJcbiAgICAgICAgLy8gICAgIH1lbHNle1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5pc1Nob3cgPSB0cnVlXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgIC8vIH0pLmNhdGNoKCgpPT57XHJcbiAgICAgICAgLy8gICAgIHRoaXMuaXNTaG93ID0gdHJ1ZVxyXG4gICAgICAgIC8vICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgLy8gfSlcclxuICAgIH07XHJcbiAgICBvblBhZ2VTY3JvbGwoZSl7XHJcbiAgICAgICAgaWYoZS5zY3JvbGxUb3A+PXRoaXMudG9wQm94SGVpZ2h0KXtcclxuICAgICAgICAgICAgdGhpcy50YWJTaG93ID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMudGFiU2hvdyA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19