'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var editorComponent = function (_wepy$component) {
    _inherits(editorComponent, _wepy$component);

    function editorComponent() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, editorComponent);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = editorComponent.__proto__ || Object.getPrototypeOf(editorComponent)).call.apply(_ref, [this].concat(args))), _this), _this.components = {}, _this.data = {
            nodeList: [],
            textBufferPool: []
        }, _this.methods = {
            // 事件：添加文本
            addText: function addText(e) {
                this.writeTextToNode();
                var index = e.currentTarget.dataset.index;
                var node = {
                    name: 'p',
                    attrs: {
                        class: 'xing-p'
                    },
                    children: [{
                        type: 'text',
                        text: ''
                    }]
                };
                var nodeList = this.nodeList;
                var textBufferPool = this.textBufferPool;
                nodeList.splice(index + 1, 0, node);
                textBufferPool.splice(index + 1, 0, '');
                this.nodeList = nodeList;
                this.textBufferPool = textBufferPool;
            },

            // 事件：添加图片
            addImage: function addImage(e) {
                var _this2 = this;

                this.writeTextToNode();
                var index = e.currentTarget.dataset.index;
                wx.chooseImage({
                    success: function success(res) {
                        var tempFilePath = res.tempFilePaths[0];
                        wx.getImageInfo({
                            src: tempFilePath,
                            success: function success(res) {
                                var node = {
                                    name: 'img',
                                    attrs: {
                                        class: 'xing-img',
                                        style: 'width: 100%',
                                        src: tempFilePath,
                                        _height: res.height / res.width
                                    }
                                };
                                var nodeList = _this2.nodeList;
                                var textBufferPool = _this2.textBufferPool;
                                nodeList.splice(index + 1, 0, node);
                                textBufferPool.splice(index + 1, 0, tempFilePath);
                                _this2.nodeList = nodeList;
                                _this2.textBufferPool = textBufferPool;
                                _this2.$apply();
                            }
                        });
                    }
                });
            },

            // 事件：删除节点
            deleteNode: function deleteNode(e) {
                this.writeTextToNode();
                var index = e.currentTarget.dataset.index;
                var nodeList = this.nodeList;
                var textBufferPool = this.textBufferPool;
                nodeList.splice(index, 1);
                textBufferPool.splice(index, 1);
                this.nodeList = nodeList;
                this.textBufferPool = textBufferPool;
            },

            // 事件：文本输入
            onTextareaInput: function onTextareaInput(e) {
                var index = e.currentTarget.dataset.index;
                var textBufferPool = this.textBufferPool;
                textBufferPool[index] = e.detail.value;
                this.textBufferPool = textBufferPool;
            },
            onFinish: function onFinish(e) {
                wx.showLoading({
                    title: '正在保存'
                });
                this.writeTextToNode();
                this.handleOutput();
            }
        }, _this.props = {
            outputType: {
                type: String,
                default: 'html'
            },
            // 是否在选择图片后立即上传
            uploadImageWhenChoose: {
                type: Boolean,
                default: false
            },
            imageUploadUrl: String,
            imageUploadName: String,
            imageUploadKeyChain: String,
            html: String,
            windowHeight: Number
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(editorComponent, [{
        key: 'onLoad',
        value: function onLoad() {
            var nodeList = this.HTMLtoNodeList();
            var textBufferPool = [];
            nodeList.forEach(function (node, index) {
                if (node.name === 'p') {
                    textBufferPool[index] = node.children[0].text;
                }
            });
            this.textBufferPool = textBufferPool;
            this.nodeList = nodeList;
        }
        // 方法：HTML转义

    }, {
        key: 'htmlDecode',
        value: function htmlDecode(str) {
            var s = "";
            if (str.length == 0) return "";
            s = str.replace(/&gt;/g, "&");
            s = s.replace(/&lt;/g, "<");
            s = s.replace(/&gt;/g, ">");
            s = s.replace(/&nbsp;/g, " ");
            s = s.replace(/&#39;/g, "\'");
            s = s.replace(/&quot;/g, "\"");
            s = s.replace(/<br>/g, "\n");
            return s;
        }
        // 方法：HTML转义

    }, {
        key: 'htmlEncode',
        value: function htmlEncode(str) {
            var s = "";
            if (str.length == 0) return "";
            s = str.replace(/&/g, "&gt;");
            s = s.replace(/</g, "&lt;");
            s = s.replace(/>/g, "&gt;");
            s = s.replace(/ /g, "&nbsp;");
            s = s.replace(/\'/g, "&#39;");
            s = s.replace(/\"/g, "&quot;");
            s = s.replace(/\n/g, "<br>");
            return s;
        }
        // 方法：将HTML转为节点

    }, {
        key: 'HTMLtoNodeList',
        value: function HTMLtoNodeList() {
            var _this3 = this;

            var html = this.html;
            var htmlNodeList = [];
            while (html.length > 0) {
                var endTag = html.match(/<\/[a-z0-9]+>/);
                if (!endTag) break;
                var htmlNode = html.substring(0, endTag.index + endTag[0].length);
                htmlNodeList.push(htmlNode);
                html = html.substring(endTag.index + endTag[0].length);
            }
            return htmlNodeList.map(function (htmlNode) {
                var node = { attrs: {} };
                var startTag = htmlNode.match(/<[^<>]+>/);
                var startTagStr = startTag[0].substring(1, startTag[0].length - 1).trim();
                node.name = startTagStr.split(/\s+/)[0];
                startTagStr.match(/[^\s]+="[^"]+"/g).forEach(function (attr) {
                    var _attr$split = attr.split('='),
                        _attr$split2 = _slicedToArray(_attr$split, 2),
                        name = _attr$split2[0],
                        value = _attr$split2[1];

                    node.attrs[name] = value.replace(/"/g, '');
                });
                if (node.name === 'p') {
                    var _endTag = htmlNode.match(/<\/[a-z0-9]+>/);
                    var text = _this3.htmlDecode(htmlNode.substring(startTag.index + startTag[0].length, _endTag.index).trim());
                    node.children = [{
                        text: text,
                        type: 'text'
                    }];
                }
                return node;
            });
        }
        // 方法：上传图片

    }, {
        key: 'uploadImage',
        value: function uploadImage(node) {
            var _this4 = this;

            return new Promise(function (resolve) {
                var options = {
                    filePath: node.attrs.src,
                    url: _this4.imageUploadUrl,
                    name: _this4.imageUploadName
                };
                options.success = function (res) {
                    var keyChain = _this4.imageUploadKeyChain.split('.');
                    var url = JSON.parse(res.data);
                    keyChain.forEach(function (key) {
                        url = url[key];
                    });
                    node.attrs.src = url;
                    node.attrs._uploaded = true;
                    resolve();
                };
                wx.uploadFile(options);
            });
        }
        // 方法：将缓冲池的文本写入节点

    }, {
        key: 'writeTextToNode',
        value: function writeTextToNode(e) {
            var textBufferPool = this.textBufferPool;
            var nodeList = this.nodeList;
            nodeList.forEach(function (node, index) {
                if (node.name === 'p') {
                    node.children[0].text = textBufferPool[index];
                }
            });
            this.nodeList = nodeList;
        }
        // 方法：处理节点，递归

    }, {
        key: 'handleOutput',
        value: function handleOutput() {
            var _this5 = this;

            var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            var nodeList = this.nodeList;
            if (index >= nodeList.length) {
                wx.hideLoading();
                if (this.outputType.toLowerCase() === 'html') {
                    this.$emit('finish', { content: this.nodeListToHTML() });
                }
                return;
            }
            var node = nodeList[index];
            if (node.name === 'img' && !node.attrs._uploaded) {
                this.uploadImage(node).then(function () {
                    _this5.handleOutput(index + 1);
                });
            } else {
                this.handleOutput(index + 1);
            }
        }
        // 方法：将节点转为HTML

    }, {
        key: 'nodeListToHTML',
        value: function nodeListToHTML() {
            var _this6 = this;

            return this.nodeList.map(function (node) {
                return '<' + node.name + ' ' + Object.keys(node.attrs).map(function (key) {
                    return key + '="' + node.attrs[key] + '"';
                }).join(' ') + '>' + (node.children ? _this6.htmlEncode(node.children[0].text) : '') + '</' + node.name + '>';
            }).join('');
        }
    }]);

    return editorComponent;
}(_wepy2.default.component);

exports.default = editorComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRvckNvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJlZGl0b3JDb21wb25lbnQiLCJjb21wb25lbnRzIiwiZGF0YSIsIm5vZGVMaXN0IiwidGV4dEJ1ZmZlclBvb2wiLCJtZXRob2RzIiwiYWRkVGV4dCIsImUiLCJ3cml0ZVRleHRUb05vZGUiLCJpbmRleCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0Iiwibm9kZSIsIm5hbWUiLCJhdHRycyIsImNsYXNzIiwiY2hpbGRyZW4iLCJ0eXBlIiwidGV4dCIsInNwbGljZSIsImFkZEltYWdlIiwid3giLCJjaG9vc2VJbWFnZSIsInN1Y2Nlc3MiLCJ0ZW1wRmlsZVBhdGgiLCJyZXMiLCJ0ZW1wRmlsZVBhdGhzIiwiZ2V0SW1hZ2VJbmZvIiwic3JjIiwic3R5bGUiLCJfaGVpZ2h0IiwiaGVpZ2h0Iiwid2lkdGgiLCIkYXBwbHkiLCJkZWxldGVOb2RlIiwib25UZXh0YXJlYUlucHV0IiwiZGV0YWlsIiwidmFsdWUiLCJvbkZpbmlzaCIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJoYW5kbGVPdXRwdXQiLCJwcm9wcyIsIm91dHB1dFR5cGUiLCJTdHJpbmciLCJkZWZhdWx0IiwidXBsb2FkSW1hZ2VXaGVuQ2hvb3NlIiwiQm9vbGVhbiIsImltYWdlVXBsb2FkVXJsIiwiaW1hZ2VVcGxvYWROYW1lIiwiaW1hZ2VVcGxvYWRLZXlDaGFpbiIsImh0bWwiLCJ3aW5kb3dIZWlnaHQiLCJOdW1iZXIiLCJIVE1MdG9Ob2RlTGlzdCIsImZvckVhY2giLCJzdHIiLCJzIiwibGVuZ3RoIiwicmVwbGFjZSIsImh0bWxOb2RlTGlzdCIsImVuZFRhZyIsIm1hdGNoIiwiaHRtbE5vZGUiLCJzdWJzdHJpbmciLCJwdXNoIiwibWFwIiwic3RhcnRUYWciLCJzdGFydFRhZ1N0ciIsInRyaW0iLCJzcGxpdCIsImF0dHIiLCJodG1sRGVjb2RlIiwiUHJvbWlzZSIsIm9wdGlvbnMiLCJmaWxlUGF0aCIsInVybCIsImtleUNoYWluIiwiSlNPTiIsInBhcnNlIiwia2V5IiwiX3VwbG9hZGVkIiwicmVzb2x2ZSIsInVwbG9hZEZpbGUiLCJoaWRlTG9hZGluZyIsInRvTG93ZXJDYXNlIiwiJGVtaXQiLCJjb250ZW50Iiwibm9kZUxpc3RUb0hUTUwiLCJ1cGxvYWRJbWFnZSIsInRoZW4iLCJPYmplY3QiLCJrZXlzIiwiam9pbiIsImh0bWxFbmNvZGUiLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLGU7Ozs7Ozs7Ozs7Ozs7OzRNQUNqQkMsVSxHQUFhLEUsUUFFYkMsSSxHQUFPO0FBQ0hDLHNCQUFVLEVBRFA7QUFFSEMsNEJBQWdCO0FBRmIsUyxRQUlQQyxPLEdBQVU7QUFDTjtBQUNBQyxtQkFGTSxtQkFFRUMsQ0FGRixFQUVJO0FBQ04scUJBQUtDLGVBQUw7QUFDQSxvQkFBTUMsUUFBUUYsRUFBRUcsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JGLEtBQXRDO0FBQ0Esb0JBQU1HLE9BQU87QUFDVEMsMEJBQU0sR0FERztBQUVUQywyQkFBTztBQUNQQywrQkFBTztBQURBLHFCQUZFO0FBS1RDLDhCQUFVLENBQUM7QUFDWEMsOEJBQU0sTUFESztBQUVYQyw4QkFBTTtBQUZLLHFCQUFEO0FBTEQsaUJBQWI7QUFVQSxvQkFBTWYsV0FBVyxLQUFLQSxRQUF0QjtBQUNBLG9CQUFNQyxpQkFBaUIsS0FBS0EsY0FBNUI7QUFDQUQseUJBQVNnQixNQUFULENBQWdCVixRQUFRLENBQXhCLEVBQTJCLENBQTNCLEVBQThCRyxJQUE5QjtBQUNBUiwrQkFBZWUsTUFBZixDQUFzQlYsUUFBUSxDQUE5QixFQUFpQyxDQUFqQyxFQUFvQyxFQUFwQztBQUNBLHFCQUFLTixRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLHFCQUFLQyxjQUFMLEdBQXNCQSxjQUF0QjtBQUNILGFBckJLOztBQXNCTjtBQUNBZ0Isb0JBdkJNLG9CQXVCR2IsQ0F2QkgsRUF1Qks7QUFBQTs7QUFDUCxxQkFBS0MsZUFBTDtBQUNBLG9CQUFN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QVEsQ0FBMUI7QUFDQyxpQkFGRDtBQUdILGFBSkQsTUFJTztBQUNILHFCQUFLZ0MsWUFBTCxDQUFrQmhDLFFBQVEsQ0FBMUI7QUFDSDtBQUNKO0FBQ0Q7Ozs7eUNBQ2dCO0FBQUE7O0FBQ1osbUJBQU8sS0FBS04sUUFBTCxDQUFjK0QsR0FBZCxDQUFrQjtBQUFBLDZCQUFZdEQsS0FBS0MsSUFBakIsU0FBeUI4RSxPQUFPQyxJQUFQLENBQVloRixLQUFLRSxLQUFqQixFQUF3Qm9ELEdBQXhCLENBQTRCO0FBQUEsMkJBQVVjLEdBQVYsVUFBa0JwRSxLQUFLRSxLQUFMLENBQVdrRSxHQUFYLENBQWxCO0FBQUEsaUJBQTVCLEVBQWtFYSxJQUFsRSxDQUF1RSxHQUF2RSxDQUF6QixVQUF3R2pGLEtBQUtJLFFBQUwsR0FBZ0IsT0FBSzhFLFVBQUwsQ0FBZ0JsRixLQUFLSSxRQUFMLENBQWMsQ0FBZCxFQUFpQkUsSUFBakMsQ0FBaEIsR0FBeUQsRUFBakssV0FBd0tOLEtBQUtDLElBQTdLO0FBQUEsYUFBbEIsRUFBd01nRixJQUF4TSxDQUE2TSxFQUE3TSxDQUFQO0FBQ0g7Ozs7RUFqT3dDRSxlQUFLQyxTOztrQkFBN0JoRyxlIiwiZmlsZSI6ImVkaXRvckNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZWRpdG9yQ29tcG9uZW50IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gICAgY29tcG9uZW50cyA9IHt9O1xyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgICAgbm9kZUxpc3Q6IFtdLFxyXG4gICAgICAgIHRleHRCdWZmZXJQb29sOiBbXSxcclxuICAgIH07XHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICAgIC8vIOS6i+S7tu+8mua3u+WKoOaWh+acrFxyXG4gICAgICAgIGFkZFRleHQoZSl7XHJcbiAgICAgICAgICAgIHRoaXMud3JpdGVUZXh0VG9Ob2RlKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAncCcsXHJcbiAgICAgICAgICAgICAgICBhdHRyczoge1xyXG4gICAgICAgICAgICAgICAgY2xhc3M6ICd4aW5nLXAnLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJydcclxuICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3Qgbm9kZUxpc3QgPSB0aGlzLm5vZGVMaXN0O1xyXG4gICAgICAgICAgICBjb25zdCB0ZXh0QnVmZmVyUG9vbCA9IHRoaXMudGV4dEJ1ZmZlclBvb2w7XHJcbiAgICAgICAgICAgIG5vZGVMaXN0LnNwbGljZShpbmRleCArIDEsIDAsIG5vZGUpO1xyXG4gICAgICAgICAgICB0ZXh0QnVmZmVyUG9vbC5zcGxpY2UoaW5kZXggKyAxLCAwLCAnJyk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZUxpc3QgPSBub2RlTGlzdDtcclxuICAgICAgICAgICAgdGhpcy50ZXh0QnVmZmVyUG9vbCA9IHRleHRCdWZmZXJQb29sO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g5LqL5Lu277ya5re75Yqg5Zu+54mHXHJcbiAgICAgICAgYWRkSW1hZ2UoZSl7XHJcbiAgICAgICAgICAgIHRoaXMud3JpdGVUZXh0VG9Ob2RlKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XHJcbiAgICAgICAgICAgIHd4LmNob29zZUltYWdlKHtcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVtcEZpbGVQYXRoID0gcmVzLnRlbXBGaWxlUGF0aHNbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgd3guZ2V0SW1hZ2VJbmZvKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiB0ZW1wRmlsZVBhdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBub2RlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdpbWcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAneGluZy1pbWcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogJ3dpZHRoOiAxMDAlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiB0ZW1wRmlsZVBhdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9oZWlnaHQ6IHJlcy5oZWlnaHQgLyByZXMud2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBub2RlTGlzdCA9IHRoaXMubm9kZUxpc3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dEJ1ZmZlclBvb2wgPSB0aGlzLnRleHRCdWZmZXJQb29sO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUxpc3Quc3BsaWNlKGluZGV4ICsgMSwgMCwgbm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QnVmZmVyUG9vbC5zcGxpY2UoaW5kZXggKyAxLCAwLCB0ZW1wRmlsZVBhdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlTGlzdCA9IG5vZGVMaXN0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXh0QnVmZmVyUG9vbCA9IHRleHRCdWZmZXJQb29sO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDkuovku7bvvJrliKDpmaToioLngrlcclxuICAgICAgICBkZWxldGVOb2RlKGUpe1xyXG4gICAgICAgICAgICB0aGlzLndyaXRlVGV4dFRvTm9kZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xyXG4gICAgICAgICAgICBsZXQgbm9kZUxpc3QgPSB0aGlzLm5vZGVMaXN0O1xyXG4gICAgICAgICAgICBsZXQgdGV4dEJ1ZmZlclBvb2wgPSB0aGlzLnRleHRCdWZmZXJQb29sO1xyXG4gICAgICAgICAgICBub2RlTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB0ZXh0QnVmZmVyUG9vbC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGVMaXN0ID0gbm9kZUxpc3Q7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dEJ1ZmZlclBvb2wgPSB0ZXh0QnVmZmVyUG9vbDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOS6i+S7tu+8muaWh+acrOi+k+WFpVxyXG4gICAgICAgIG9uVGV4dGFyZWFJbnB1dChlKXtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcclxuICAgICAgICAgICAgbGV0IHRleHRCdWZmZXJQb29sID0gdGhpcy50ZXh0QnVmZmVyUG9vbDtcclxuICAgICAgICAgICAgdGV4dEJ1ZmZlclBvb2xbaW5kZXhdID0gZS5kZXRhaWwudmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dEJ1ZmZlclBvb2wgPSB0ZXh0QnVmZmVyUG9vbDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uRmluaXNoKGUpe1xyXG4gICAgICAgICAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+ato+WcqOS/neWtmCcsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMud3JpdGVUZXh0VG9Ob2RlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlT3V0cHV0KCk7XHJcbiAgICAgICAgfSBcclxuICAgIH07XHJcblxyXG4gICAgcHJvcHMgPSB7XHJcbiAgICAgICAgb3V0cHV0VHlwZToge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdodG1sJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g5piv5ZCm5Zyo6YCJ5oup5Zu+54mH5ZCO56uL5Y2z5LiK5LygXHJcbiAgICAgICAgdXBsb2FkSW1hZ2VXaGVuQ2hvb3NlOntcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbWFnZVVwbG9hZFVybDpTdHJpbmcsXHJcbiAgICAgICAgaW1hZ2VVcGxvYWROYW1lOlN0cmluZyxcclxuICAgICAgICBpbWFnZVVwbG9hZEtleUNoYWluOlN0cmluZyxcclxuICAgICAgICBodG1sOiBTdHJpbmcsXHJcbiAgICAgICAgd2luZG93SGVpZ2h0Ok51bWJlclxyXG4gICAgfVxyXG4gICAgb25Mb2FkKCl7XHJcbiAgICAgICAgY29uc3Qgbm9kZUxpc3QgPSB0aGlzLkhUTUx0b05vZGVMaXN0KCk7XHJcbiAgICAgICAgY29uc3QgdGV4dEJ1ZmZlclBvb2wgPSBbXTtcclxuICAgICAgICBub2RlTGlzdC5mb3JFYWNoKChub2RlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobm9kZS5uYW1lID09PSAncCcpIHtcclxuICAgICAgICAgICAgdGV4dEJ1ZmZlclBvb2xbaW5kZXhdID0gbm9kZS5jaGlsZHJlblswXS50ZXh0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnRleHRCdWZmZXJQb29sID0gdGV4dEJ1ZmZlclBvb2xcclxuICAgICAgICB0aGlzLm5vZGVMaXN0ID0gbm9kZUxpc3RcclxuICAgIH1cclxuICAgIC8vIOaWueazle+8mkhUTUzovazkuYlcclxuICAgIGh0bWxEZWNvZGUoc3RyKXtcclxuICAgICAgICB2YXIgcyA9IFwiXCI7XHJcbiAgICAgICAgaWYoc3RyLmxlbmd0aCA9PSAwKSByZXR1cm4gXCJcIjtcclxuICAgICAgICBzID0gc3RyLnJlcGxhY2UoLyZndDsvZywgXCImXCIpO1xyXG4gICAgICAgIHMgPSBzLnJlcGxhY2UoLyZsdDsvZywgXCI8XCIpO1xyXG4gICAgICAgIHMgPSBzLnJlcGxhY2UoLyZndDsvZywgXCI+XCIpO1xyXG4gICAgICAgIHMgPSBzLnJlcGxhY2UoLyZuYnNwOy9nLCBcIiBcIik7XHJcbiAgICAgICAgcyA9IHMucmVwbGFjZSgvJiMzOTsvZywgXCJcXCdcIik7XHJcbiAgICAgICAgcyA9IHMucmVwbGFjZSgvJnF1b3Q7L2csIFwiXFxcIlwiKTtcclxuICAgICAgICBzID0gcy5yZXBsYWNlKC88YnI+L2csIFwiXFxuXCIpO1xyXG4gICAgICAgIHJldHVybiBzO1xyXG4gICAgfVxyXG4gICAgLy8g5pa55rOV77yaSFRNTOi9rOS5iVxyXG4gICAgaHRtbEVuY29kZShzdHIpe1xyXG4gICAgICAgIHZhciBzID0gXCJcIjtcclxuICAgICAgICBpZiAoc3RyLmxlbmd0aCA9PSAwKSByZXR1cm4gXCJcIjtcclxuICAgICAgICBzID0gc3RyLnJlcGxhY2UoLyYvZywgXCImZ3Q7XCIpO1xyXG4gICAgICAgIHMgPSBzLnJlcGxhY2UoLzwvZywgXCImbHQ7XCIpO1xyXG4gICAgICAgIHMgPSBzLnJlcGxhY2UoLz4vZywgXCImZ3Q7XCIpO1xyXG4gICAgICAgIHMgPSBzLnJlcGxhY2UoLyAvZywgXCImbmJzcDtcIik7XHJcbiAgICAgICAgcyA9IHMucmVwbGFjZSgvXFwnL2csIFwiJiMzOTtcIik7XHJcbiAgICAgICAgcyA9IHMucmVwbGFjZSgvXFxcIi9nLCBcIiZxdW90O1wiKTtcclxuICAgICAgICBzID0gcy5yZXBsYWNlKC9cXG4vZywgXCI8YnI+XCIpO1xyXG4gICAgICAgIHJldHVybiBzO1xyXG4gICAgfVxyXG4gICAgLy8g5pa55rOV77ya5bCGSFRNTOi9rOS4uuiKgueCuVxyXG4gICAgSFRNTHRvTm9kZUxpc3QoKXtcclxuICAgICAgICBsZXQgaHRtbCA9IHRoaXMuaHRtbDtcclxuICAgICAgICBsZXQgaHRtbE5vZGVMaXN0ID0gW107XHJcbiAgICAgICAgd2hpbGUgKGh0bWwubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBlbmRUYWcgPSBodG1sLm1hdGNoKC88XFwvW2EtejAtOV0rPi8pO1xyXG4gICAgICAgICAgICBpZiAoIWVuZFRhZykgYnJlYWs7XHJcbiAgICAgICAgICAgIGNvbnN0IGh0bWxOb2RlID0gaHRtbC5zdWJzdHJpbmcoMCwgZW5kVGFnLmluZGV4ICsgZW5kVGFnWzBdLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGh0bWxOb2RlTGlzdC5wdXNoKGh0bWxOb2RlKTtcclxuICAgICAgICAgICAgaHRtbCA9IGh0bWwuc3Vic3RyaW5nKGVuZFRhZy5pbmRleCArIGVuZFRhZ1swXS5sZW5ndGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaHRtbE5vZGVMaXN0Lm1hcChodG1sTm9kZSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBub2RlID0ge2F0dHJzOiB7fX07XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0VGFnID0gaHRtbE5vZGUubWF0Y2goLzxbXjw+XSs+Lyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0VGFnU3RyID0gc3RhcnRUYWdbMF0uc3Vic3RyaW5nKDEsIHN0YXJ0VGFnWzBdLmxlbmd0aCAtIDEpLnRyaW0oKTtcclxuICAgICAgICAgICAgbm9kZS5uYW1lID0gc3RhcnRUYWdTdHIuc3BsaXQoL1xccysvKVswXTtcclxuICAgICAgICAgICAgc3RhcnRUYWdTdHIubWF0Y2goL1teXFxzXSs9XCJbXlwiXStcIi9nKS5mb3JFYWNoKGF0dHIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgW25hbWUsIHZhbHVlXSA9IGF0dHIuc3BsaXQoJz0nKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuYXR0cnNbbmFtZV0gPSB2YWx1ZS5yZXBsYWNlKC9cIi9nLCAnJyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGlmIChub2RlLm5hbWUgPT09ICdwJykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZW5kVGFnID0gaHRtbE5vZGUubWF0Y2goLzxcXC9bYS16MC05XSs+Lyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0ID0gdGhpcy5odG1sRGVjb2RlKGh0bWxOb2RlLnN1YnN0cmluZyhzdGFydFRhZy5pbmRleCArIHN0YXJ0VGFnWzBdLmxlbmd0aCwgZW5kVGFnLmluZGV4KS50cmltKCkpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5jaGlsZHJlbiA9IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dCxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvLyDmlrnms5XvvJrkuIrkvKDlm77niYdcclxuICAgIHVwbG9hZEltYWdlKG5vZGUpe1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICBmaWxlUGF0aDogbm9kZS5hdHRycy5zcmMsXHJcbiAgICAgICAgICAgICAgICB1cmw6IHRoaXMuaW1hZ2VVcGxvYWRVcmwsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLmltYWdlVXBsb2FkTmFtZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcHRpb25zLnN1Y2Nlc3MgPSByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qga2V5Q2hhaW4gPSB0aGlzLmltYWdlVXBsb2FkS2V5Q2hhaW4uc3BsaXQoJy4nKTtcclxuICAgICAgICAgICAgICAgIGxldCB1cmwgPSBKU09OLnBhcnNlKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGtleUNoYWluLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB1cmwgPSB1cmxba2V5XTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBub2RlLmF0dHJzLnNyYyA9IHVybDtcclxuICAgICAgICAgICAgICAgIG5vZGUuYXR0cnMuX3VwbG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB3eC51cGxvYWRGaWxlKG9wdGlvbnMpO1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy8g5pa55rOV77ya5bCG57yT5Yay5rGg55qE5paH5pys5YaZ5YWl6IqC54K5XHJcbiAgICB3cml0ZVRleHRUb05vZGUoZSl7XHJcbiAgICAgICAgY29uc3QgdGV4dEJ1ZmZlclBvb2wgPSB0aGlzLnRleHRCdWZmZXJQb29sO1xyXG4gICAgICAgIGNvbnN0IG5vZGVMaXN0ID0gdGhpcy5ub2RlTGlzdDtcclxuICAgICAgICBub2RlTGlzdC5mb3JFYWNoKChub2RlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobm9kZS5uYW1lID09PSAncCcpIHtcclxuICAgICAgICAgICAgICAgIG5vZGUuY2hpbGRyZW5bMF0udGV4dCA9IHRleHRCdWZmZXJQb29sW2luZGV4XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5ub2RlTGlzdCA9IG5vZGVMaXN0XHJcbiAgICB9XHJcbiAgICAvLyDmlrnms5XvvJrlpITnkIboioLngrnvvIzpgJLlvZJcclxuICAgIGhhbmRsZU91dHB1dChpbmRleCA9IDApe1xyXG4gICAgICAgIGxldCBub2RlTGlzdCA9IHRoaXMubm9kZUxpc3Q7XHJcbiAgICAgICAgaWYgKGluZGV4ID49IG5vZGVMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5vdXRwdXRUeXBlLnRvTG93ZXJDYXNlKCkgPT09ICdodG1sJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnZmluaXNoJywgeyBjb250ZW50OiB0aGlzLm5vZGVMaXN0VG9IVE1MKCkgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBub2RlID0gbm9kZUxpc3RbaW5kZXhdO1xyXG4gICAgICAgIGlmIChub2RlLm5hbWUgPT09ICdpbWcnICYmICFub2RlLmF0dHJzLl91cGxvYWRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnVwbG9hZEltYWdlKG5vZGUpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZU91dHB1dChpbmRleCArIDEpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlT3V0cHV0KGluZGV4ICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8g5pa55rOV77ya5bCG6IqC54K56L2s5Li6SFRNTFxyXG4gICAgbm9kZUxpc3RUb0hUTUwoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5ub2RlTGlzdC5tYXAobm9kZSA9PiBgPCR7bm9kZS5uYW1lfSAke09iamVjdC5rZXlzKG5vZGUuYXR0cnMpLm1hcChrZXkgPT4gYCR7a2V5fT1cIiR7bm9kZS5hdHRyc1trZXldfVwiYCkuam9pbignICcpfT4ke25vZGUuY2hpbGRyZW4gPyB0aGlzLmh0bWxFbmNvZGUobm9kZS5jaGlsZHJlblswXS50ZXh0KSA6ICcnfTwvJHtub2RlLm5hbWV9PmApLmpvaW4oJycpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==