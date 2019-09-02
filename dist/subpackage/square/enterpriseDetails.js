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

var enterpriseDetails = function (_wepy$page) {
    _inherits(enterpriseDetails, _wepy$page);

    function enterpriseDetails() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, enterpriseDetails);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = enterpriseDetails.__proto__ || Object.getPrototypeOf(enterpriseDetails)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '企业详情',
            usingComponents: {
                'wxc-icon': '../../packages/@minui/wxc-icon/dist/index',
                'wxc-abnor': '../../packages/@minui/wxc-abnor/dist/index'
            }
        }, _this.components = {}, _this.data = {
            id: 0,
            allData: null,
            topBoxHeight: 0,
            tabShow: false,
            enterpriseFollow: false,
            navbar: ['公司简介', '产品方案', '成功案例', '职位专区'],
            currentTab: 0,
            enterpriseCover: ['../../image/goods-img-default.png', '../../image/goods-img-default.png'],
            productProgramme: [],
            positionMag: [],
            wxcAbnorShow: false
        }, _this.methods = {
            // 关注
            follow: function follow(index) {
                this.enterpriseFollow = !this.enterpriseFollow;
            },

            // 跳转企业信息编辑页面
            enterpriseEditPage: function enterpriseEditPage() {
                wx.navigateTo({
                    url: './enterpriseMsgEdit'
                });
            },

            // tab切换
            navbarTap: function navbarTap(status) {
                this.currentTab = status;
                //   this.dataDetails(status,this.id)
            },

            // 跳转职位详情
            positionDetailsPage: function positionDetailsPage() {
                wx.navigateTo({
                    url: './positionDetails'
                });
            },

            // 跳转产品详情
            productDetailsPage: function productDetailsPage() {
                wx.navigateTo({
                    url: './productDetails'
                });
            },

            // 创建产品
            productEstablish: function productEstablish() {
                wx.navigateTo({
                    url: './productEstablish'
                });
            }
        }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(enterpriseDetails, [{
        key: 'onReady',
        value: function onReady() {
            var _this2 = this;

            var query = wx.createSelectorQuery();
            query.select('.enterpriseBasicMsgBox').boundingClientRect(function (rect) {
                _this2.topBoxHeight = rect.height;
                _this2.$apply();
            }).exec();
        }
    }, {
        key: 'onLoad',
        value: function onLoad(options) {
            this.id = options.id;
            // 请求企业详情数据
            // this.dataDetails(0,options.id)
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
        // 请求企业详情数据

    }, {
        key: 'dataDetails',
        value: function dataDetails(flag, id) {
            var _this3 = this;

            (0, _utils.request)(_api.companyDetails, 'POST', { flag: flag, id: id }).then(function (res) {
                if (res.data.code != 1) {
                    _this3.wxcAbnorShow = true;
                } else {
                    _this3.wxcAbnorShow = false;
                    if (flag == 0) {
                        res.data.data.keywords = res.data.data.keywords.replace(',', ' | ');
                        res.data.data.diyname = res.data.data.diyname.replace(',', '、');
                        _this3.allData = res.data.data;
                    } else if (flag == 1 || flag == 2) {
                        _this3.productProgramme = res.data.data;
                    } else if (flag == 3) {
                        _this3.positionMag = res.data.data;
                    }
                }
                _this3.$apply();
            });
        }
    }]);

    return enterpriseDetails;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(enterpriseDetails , 'subpackage/square/enterpriseDetails'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudGVycHJpc2VEZXRhaWxzLmpzIl0sIm5hbWVzIjpbImVudGVycHJpc2VEZXRhaWxzIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImNvbXBvbmVudHMiLCJkYXRhIiwiaWQiLCJhbGxEYXRhIiwidG9wQm94SGVpZ2h0IiwidGFiU2hvdyIsImVudGVycHJpc2VGb2xsb3ciLCJuYXZiYXIiLCJjdXJyZW50VGFiIiwiZW50ZXJwcmlzZUNvdmVyIiwicHJvZHVjdFByb2dyYW1tZSIsInBvc2l0aW9uTWFnIiwid3hjQWJub3JTaG93IiwibWV0aG9kcyIsImZvbGxvdyIsImluZGV4IiwiZW50ZXJwcmlzZUVkaXRQYWdlIiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwibmF2YmFyVGFwIiwic3RhdHVzIiwicG9zaXRpb25EZXRhaWxzUGFnZSIsInByb2R1Y3REZXRhaWxzUGFnZSIsInByb2R1Y3RFc3RhYmxpc2giLCJldmVudHMiLCJxdWVyeSIsImNyZWF0ZVNlbGVjdG9yUXVlcnkiLCJzZWxlY3QiLCJib3VuZGluZ0NsaWVudFJlY3QiLCJyZWN0IiwiaGVpZ2h0IiwiJGFwcGx5IiwiZXhlYyIsIm9wdGlvbnMiLCJlIiwic2Nyb2xsVG9wIiwiZmxhZyIsImNvbXBhbnlEZXRhaWxzIiwidGhlbiIsInJlcyIsImNvZGUiLCJrZXl3b3JkcyIsInJlcGxhY2UiLCJkaXluYW1lIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBLGlCOzs7Ozs7Ozs7Ozs7OztnTkFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0IsTUFEbkI7QUFFTEMsNkJBQWlCO0FBQ2IsNEJBQVksMkNBREM7QUFFYiw2QkFBYTtBQUZBO0FBRlosUyxRQU9UQyxVLEdBQWEsRSxRQUViQyxJLEdBQU87QUFDSEMsZ0JBQUcsQ0FEQTtBQUVIQyxxQkFBUSxJQUZMO0FBR0hDLDBCQUFh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SUFBYUEsUUFBUSxDQUF4QixFQUEwQjtBQUM1QiwrQkFBSzNCLGdCQUFMLEdBQXdCOEIsSUFBSXZDLElBQUosQ0FBU0EsSUFBakM7QUFDSCxxQkFGSyxNQUVBLElBQUdvQyxRQUFRLENBQVgsRUFBYTtBQUNmLCtCQUFLMUIsV0FBTCxHQUFtQjZCLElBQUl2QyxJQUFKLENBQVNBLElBQTVCO0FBQ0g7QUFDSjtBQUNELHVCQUFLK0IsTUFBTDtBQUNILGFBaEJEO0FBaUJIOzs7O0VBdkcwQ2EsZUFBS0MsSTs7a0JBQS9CbEQsaUIiLCJmaWxlIjoiZW50ZXJwcmlzZURldGFpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbmltcG9ydCB7IGNvbXBhbnlEZXRhaWxzIH0gZnJvbSAnLi4vLi4vYXBpL2FwaS5qcyc7XHJcbmltcG9ydCB7IHJlcXVlc3QsdG9hc3QgfSBmcm9tICcuLi8uLi91dGlscy91dGlscy5qcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGVudGVycHJpc2VEZXRhaWxzIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5LyB5Lia6K+m5oOFJyxcclxuICAgICAgICB1c2luZ0NvbXBvbmVudHM6IHtcclxuICAgICAgICAgICAgJ3d4Yy1pY29uJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtaWNvbi9kaXN0L2luZGV4JyxcclxuICAgICAgICAgICAgJ3d4Yy1hYm5vcic6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLWFibm9yL2Rpc3QvaW5kZXgnLFxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG4gICAgY29tcG9uZW50cyA9IHt9O1xyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgICAgaWQ6MCxcclxuICAgICAgICBhbGxEYXRhOm51bGwsXHJcbiAgICAgICAgdG9wQm94SGVpZ2h0OjAsXHJcbiAgICAgICAgdGFiU2hvdzpmYWxzZSxcclxuICAgICAgICBlbnRlcnByaXNlRm9sbG93OmZhbHNlLFxyXG4gICAgICAgIG5hdmJhcjogWyflhazlj7jnroDku4snLCfkuqflk4HmlrnmoYgnLCfmiJDlip/moYjkvosnLCfogYzkvY3kuJPljLonXSxcclxuICAgICAgICBjdXJyZW50VGFiOiAwLFxyXG4gICAgICAgIGVudGVycHJpc2VDb3ZlcjpbXHJcbiAgICAgICAgICAgICcuLi8uLi9pbWFnZS9nb29kcy1pbWctZGVmYXVsdC5wbmcnLFxyXG4gICAgICAgICAgICAnLi4vLi4vaW1hZ2UvZ29vZHMtaW1nLWRlZmF1bHQucG5nJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgcHJvZHVjdFByb2dyYW1tZTpbXSxcclxuICAgICAgICBwb3NpdGlvbk1hZzpbXSxcclxuICAgICAgICB3eGNBYm5vclNob3c6ZmFsc2VcclxuICAgIH07XHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICAgIC8vIOWFs+azqFxyXG4gICAgICAgIGZvbGxvdyhpbmRleCl7XHJcbiAgICAgICAgICAgIHRoaXMuZW50ZXJwcmlzZUZvbGxvdyA9ICF0aGlzLmVudGVycHJpc2VGb2xsb3dcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOi3s+i9rOS8geS4muS/oeaBr+e8lui+kemhtemdolxyXG4gICAgICAgIGVudGVycHJpc2VFZGl0UGFnZSgpe1xyXG4gICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgIHVybDogYC4vZW50ZXJwcmlzZU1zZ0VkaXRgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyB0YWLliIfmjaJcclxuICAgICAgICBuYXZiYXJUYXAoc3RhdHVzKXtcclxuICAgICAgICAgIHRoaXMuY3VycmVudFRhYiA9IHN0YXR1cztcclxuICAgICAgICAvLyAgIHRoaXMuZGF0YURldGFpbHMoc3RhdHVzLHRoaXMuaWQpXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDot7PovazogYzkvY3or6bmg4VcclxuICAgICAgICBwb3NpdGlvbkRldGFpbHNQYWdlKCl7XHJcbiAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnLi9wb3NpdGlvbkRldGFpbHMnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g6Lez6L2s5Lqn5ZOB6K+m5oOFXHJcbiAgICAgICAgcHJvZHVjdERldGFpbHNQYWdlKCl7XHJcbiAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBgLi9wcm9kdWN0RGV0YWlsc2BcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOWIm+W7uuS6p+WTgVxyXG4gICAgICAgIHByb2R1Y3RFc3RhYmxpc2goKXtcclxuICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IGAuL3Byb2R1Y3RFc3RhYmxpc2hgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBldmVudHMgPSB7fTtcclxuICAgIG9uUmVhZHkoKXtcclxuICAgICAgICBsZXQgcXVlcnkgPSB3eC5jcmVhdGVTZWxlY3RvclF1ZXJ5KCk7XHJcbiAgICAgICAgcXVlcnkuc2VsZWN0KCcuZW50ZXJwcmlzZUJhc2ljTXNnQm94JykuYm91bmRpbmdDbGllbnRSZWN0KHJlY3Q9PntcclxuICAgICAgICAgICAgdGhpcy50b3BCb3hIZWlnaHQgPSByZWN0LmhlaWdodFxyXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgfSkuZXhlYygpO1xyXG4gICAgfVxyXG4gICAgb25Mb2FkKG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmlkID0gb3B0aW9ucy5pZFxyXG4gICAgICAgIC8vIOivt+axguS8geS4muivpuaDheaVsOaNrlxyXG4gICAgICAgIC8vIHRoaXMuZGF0YURldGFpbHMoMCxvcHRpb25zLmlkKVxyXG4gICAgfTtcclxuICAgIG9uUGFnZVNjcm9sbChlKXtcclxuICAgICAgICBpZihlLnNjcm9sbFRvcD49dGhpcy50b3BCb3hIZWlnaHQpe1xyXG4gICAgICAgICAgICB0aGlzLnRhYlNob3cgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy50YWJTaG93ID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIOivt+axguS8geS4muivpuaDheaVsOaNrlxyXG4gICAgZGF0YURldGFpbHMoZmxhZyxpZCl7XHJcbiAgICAgICAgcmVxdWVzdChjb21wYW55RGV0YWlscywnUE9TVCcse2ZsYWc6ZmxhZyxpZDppZH0pLnRoZW4ocmVzPT57XHJcbiAgICAgICAgICAgIGlmKHJlcy5kYXRhLmNvZGUgIT0gMSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnd4Y0Fibm9yU2hvdyA9IHRydWVcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnd4Y0Fibm9yU2hvdyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBpZihmbGFnID09IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5kYXRhLmRhdGEua2V5d29yZHMgPSByZXMuZGF0YS5kYXRhLmtleXdvcmRzLnJlcGxhY2UoJywnLCAnIHwgJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLmRhdGEuZGF0YS5kaXluYW1lID0gcmVzLmRhdGEuZGF0YS5kaXluYW1lLnJlcGxhY2UoJywnLCAn44CBJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxEYXRhID0gcmVzLmRhdGEuZGF0YVxyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYoZmxhZyA9PSAxIHx8IGZsYWcgPT0gMil7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0UHJvZ3JhbW1lID0gcmVzLmRhdGEuZGF0YVxyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYoZmxhZyA9PSAzKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uTWFnID0gcmVzLmRhdGEuZGF0YVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcbiJdfQ==