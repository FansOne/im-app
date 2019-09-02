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

var productClass = function (_wepy$page) {
    _inherits(productClass, _wepy$page);

    function productClass() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, productClass);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = productClass.__proto__ || Object.getPrototypeOf(productClass)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '更多产品',
            usingComponents: {
                'wxc-search': '../../packages/@minui/wxc-search/dist/index',
                'wxc-loadmore': '../../packages/@minui/wxc-loadmore/dist/index',
                'wxc-loading': '../../packages/@minui/wxc-loading/dist/index'
            }
        }, _this.components = {}, _this.data = {
            typeData: [], // 列表数据
            contentActive: '', // 内容栏id
            navActive: 0, // 导航栏选中索引
            defaultImg: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=466014254,3101228283&fm=26&gp=0.jpg',
            isShow: true
        }, _this.methods = {
            // 左侧导航栏点击事件
            chooseType: function chooseType(e) {
                var id = e.currentTarget.dataset.id;
                var index = e.currentTarget.dataset.index;
                this.contentActive = id;
                this.navActive = index;
            },

            // 跳转相关分类下产品页面
            productList: function productList(id) {
                wx.navigateTo({
                    url: './productList?id=' + id
                });
            },

            // 跳转搜索页面
            searchPage: function searchPage() {
                wx.navigateTo({
                    url: '../../pages/search?currentTab=4'
                });
            }
        }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(productClass, [{
        key: 'onLoad',
        value: function onLoad() {
            var _this2 = this;

            setTimeout(function () {
                _this2.isShow = false;
                _this2.$apply();
            }, 777);
            this.typeData = require('./../../utils/listData.js').data;
            // request(productCategory).then(res=>{
            //     if(res.data.code == 1){
            //         this.isShow = false
            //         this.typeData = res.data.data
            //     }else{
            //         this.isShow = true
            //     }
            //     this.$apply()
            // })
        }
    }]);

    return productClass;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(productClass , 'subpackage/square/productClass'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RDbGFzcy5qcyJdLCJuYW1lcyI6WyJwcm9kdWN0Q2xhc3MiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwidXNpbmdDb21wb25lbnRzIiwiY29tcG9uZW50cyIsImRhdGEiLCJ0eXBlRGF0YSIsImNvbnRlbnRBY3RpdmUiLCJuYXZBY3RpdmUiLCJkZWZhdWx0SW1nIiwiaXNTaG93IiwibWV0aG9kcyIsImNob29zZVR5cGUiLCJlIiwiaWQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImluZGV4IiwicHJvZHVjdExpc3QiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJzZWFyY2hQYWdlIiwiZXZlbnRzIiwic2V0VGltZW91dCIsIiRhcHBseSIsInJlcXVpcmUiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsWTs7Ozs7Ozs7Ozs7Ozs7c01BQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCLE1BRG5CO0FBRUxDLDZCQUFnQjtBQUNaLDhCQUFjLDZDQURGO0FBRVosZ0NBQWdCLCtDQUZKO0FBR1osK0JBQWU7QUFISDtBQUZYLFMsUUFRVEMsVSxHQUFhLEUsUUFFYkMsSSxHQUFPO0FBQ0hDLHNCQUFVLEVBRFAsRUFDVztBQUNkQywyQkFBZSxFQUZaLEVBRWdCO0FBQ25CQyx1QkFBVyxDQUhSLEVBR1c7QUFDZEMsd0JBQVksK0ZBSlQ7QUFLSEMsb0JBQU87QUFMSixTLFFBT1BDLE8sR0FBVTtBQUNOO0FBQ0FDLHNCQUZNLHNCQUVLQyxDQUZMLEVBRVE7QUFDVixvQkFBSUMsS0FBS0QsRUFBRUUsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JGLEVBQWpDO0FBQ0Esb0JBQUlHLFFBQVFKLEVBQUVFLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCQyxLQUFwQztBQUNBLHFCQUFLVixhQUFMLEdBQXFCTyxFQUFyQjtBQUNBLHFCQUFLTixTQUFMLEdBQWlCUyxLQUFqQjtBQUNILGFBUEs7O0FBUU47QUFDQUMsdUJBVE0sdUJBU01KLEVBVE4sRUFTUztBQUNYSyxtQkFBR0MsVUFBSCxDQUFjO0FBQ1ZDLCtDQUF5QlA7QUFEZixpQkFBZDtBQUdILGFBYks7O0FBY047QUFDQVEsc0JBZk0sd0JBZU07QUFDUkgsbUJBQUdDLFVBQUgsQ0FBYztBQUNWQztBQURVLGlCQUFkO0FBR0g7QUFuQkssUyxRQXNCVkUsTSxHQUFTLEU7Ozs7O2lDQUNBO0FBQUE7O0FBQ0xDLHVCQUFXLFlBQU07QUFDYix1QkFBS2QsTUFBTCxHQUFjLEtBQWQ7QUFDQSx1QkFBS2UsTUFBTDtBQUNILGFBSEQsRUFHRyxHQUhIO0FBSUEsaUJBQUtuQixRQUFMLEdBQWdCb0IsUUFBUSx5QkFBUixFQUFtQ3JCLElBQW5EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7Ozs7RUF4RHFDc0IsZUFBS0MsSTs7a0JBQTFCNUIsWSIsImZpbGUiOiJwcm9kdWN0Q2xhc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbmltcG9ydCB7IHByb2R1Y3RDYXRlZ29yeSB9IGZyb20gJy4uLy4uL2FwaS9hcGkuanMnO1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcHJvZHVjdENsYXNzIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5pu05aSa5Lqn5ZOBJyxcclxuICAgICAgICB1c2luZ0NvbXBvbmVudHM6e1xyXG4gICAgICAgICAgICAnd3hjLXNlYXJjaCc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLXNlYXJjaC9kaXN0L2luZGV4JyxcclxuICAgICAgICAgICAgJ3d4Yy1sb2FkbW9yZSc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLWxvYWRtb3JlL2Rpc3QvaW5kZXgnLFxyXG4gICAgICAgICAgICAnd3hjLWxvYWRpbmcnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1sb2FkaW5nL2Rpc3QvaW5kZXgnXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbXBvbmVudHMgPSB7fTtcclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICAgIHR5cGVEYXRhOiBbXSwgLy8g5YiX6KGo5pWw5o2uXHJcbiAgICAgICAgY29udGVudEFjdGl2ZTogJycsIC8vIOWGheWuueagj2lkXHJcbiAgICAgICAgbmF2QWN0aXZlOiAwLCAvLyDlr7zoiKrmoI/pgInkuK3ntKLlvJVcclxuICAgICAgICBkZWZhdWx0SW1nOiAnaHR0cHM6Ly9zczEuYmRzdGF0aWMuY29tLzcwY0Z1WFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTQ2NjAxNDI1NCwzMTAxMjI4MjgzJmZtPTI2JmdwPTAuanBnJyxcclxuICAgICAgICBpc1Nob3c6dHJ1ZVxyXG4gICAgfTtcclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgLy8g5bem5L6n5a+86Iiq5qCP54K55Ye75LqL5Lu2XHJcbiAgICAgICAgY2hvb3NlVHlwZShlKSB7XHJcbiAgICAgICAgICAgIGxldCBpZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkO1xyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50QWN0aXZlID0gaWRcclxuICAgICAgICAgICAgdGhpcy5uYXZBY3RpdmUgPSBpbmRleFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g6Lez6L2s55u45YWz5YiG57G75LiL5Lqn5ZOB6aG16Z2iXHJcbiAgICAgICAgcHJvZHVjdExpc3QoaWQpe1xyXG4gICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgIHVybDogYC4vcHJvZHVjdExpc3Q/aWQ9JHtpZH1gXHJcbiAgICAgICAgICAgIH0pOyAgICAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g6Lez6L2s5pCc57Si6aG16Z2iXHJcbiAgICAgICAgc2VhcmNoUGFnZSgpe1xyXG4gICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgIHVybDogYC4uLy4uL3BhZ2VzL3NlYXJjaD9jdXJyZW50VGFiPTRgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZXZlbnRzID0ge307XHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNTaG93ID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgIH0sIDc3Nyk7XHJcbiAgICAgICAgdGhpcy50eXBlRGF0YSA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2xpc3REYXRhLmpzJykuZGF0YVxyXG4gICAgICAgIC8vIHJlcXVlc3QocHJvZHVjdENhdGVnb3J5KS50aGVuKHJlcz0+e1xyXG4gICAgICAgIC8vICAgICBpZihyZXMuZGF0YS5jb2RlID09IDEpe1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5pc1Nob3cgPSBmYWxzZVxyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy50eXBlRGF0YSA9IHJlcy5kYXRhLmRhdGFcclxuICAgICAgICAvLyAgICAgfWVsc2V7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmlzU2hvdyA9IHRydWVcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgLy8gfSlcclxuICAgIH07XHJcbn1cclxuIl19