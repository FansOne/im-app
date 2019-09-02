'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* webim javascript SDK (for wechat miniProgram )
 * VER 1.7.2
 */
module.exports = function () {

    if (typeof Array.prototype.forEach != 'function') {
        Array.prototype.forEach = function (callback) {
            for (var i = 0; i < this.length; i++) {
                callback.apply(this, [this[i], i, this]);
            }
        };
    }
    /* webim javascript SDK
     * VER 1.7.2
     */

    /* webim API definitions
     */
    var msgCache = {};
    var webim = { // namespace object webim

        /* function init
         *   sdk登录
         * params:
         *   loginInfo      - Object, 登录身份相关参数集合，详见下面
         *   {
         *     sdkAppID     - String, 用户标识接入SDK的应用ID，必填
         *     accountType  - int, 账号类型，必填
         *     identifier   - String, 用户帐号,必须是字符串类型，必填
         *     identifierNick   - String, 用户昵称，选填
         *     userSig      - String, 鉴权Token，必须是字符串类型，必填
         *   }
         *   listeners      - Object, 事件回调函数集合, 详见下面
         *   {
         *     onConnNotify - function(connInfo), 用于收到连接状态相关通知的回调函数,目前未使用
         *     onMsgNotify  - function(newMsgList), 用于收到消息通知的回调函数,
         *      newMsgList为新消息数组，格式为[Msg对象]
         *      使用方有两种处理回调: 1)处理newMsgList中的增量消息,2)直接访问webim.MsgStore获取最新的消息
         *     onGroupInfoChangeNotify  - function(groupInfo), 用于监听群组资料变更的回调函数,
         *          groupInfo为新的群组资料信息
         *     onGroupSystemNotifys - Object, 用于监听（多终端同步）群系统消息的回调函数对象
         *
         *   }
         *   options        - Object, 其它选项, 目前未使用
         * return:
         *   (无)
         */
        login: function login(loginInfo, listeners, options) {},

        /* function syncMsgs
         *   拉取最新C2C消息
         *   一般不需要使用方直接调用, SDK底层会自动同步最新消息并通知使用方, 一种有用的调用场景是用户手动触发刷新消息
         * params:
         *   cbOk   - function(msgList)类型, 当同步消息成功时的回调函数, msgList为新消息数组，格式为[Msg对象],
         *            如果此参数为null或undefined则同步消息成功后会像自动同步那样回调cbNotify
         *   cbErr  - function(err)类型, 当同步消息失败时的回调函数, err为错误对象
         * return:
         *   (无)
         */
        syncMsgs: function syncMsgs(cbOk, cbErr) {},

        /* function getC2CHistoryMsgs
         * 拉取C2C漫游消息
         * params:
         *   options    - 请求参数
         *   cbOk   - function(msgList)类型, 成功时的回调函数, msgList为消息数组，格式为[Msg对象],
         *   cbErr  - function(err)类型, 失败时回调函数, err为错误对象
         * return:
         *   (无)
         */
        getC2CHistoryMsgs: function getC2CHistoryMsgs(options, cbOk, cbErr) {},

        /* function syncGroupMsgs
         * 拉取群漫游消息
         * params:
         *   options    - 请求参数
         *   cbOk   - function(msgList)类型, 成功时的回调函数, msgList为消息数组，格式为[Msg对象],
         *   cbErr  - function(err)类型, 失败时回调函数, err为错误对象
         * return:
         *   (无)
         */
        syncGroupMsgs: function syncGroupMsgs(options, cbOk, cbErr) {},

        /* function sendMsg
         *   发送一条消息
         * params:
         *   msg    - webim.Msg类型, 要发送的消息对象
         *   cbOk   - function()类型, 当发送消息成功时的回调函数
         *   cbErr  - function(err)类型, 当发送消息失败时的回调函数, err为错误对象
         * return:
         *   (无)
         */
        sendMsg: function sendMsg(msg, cbOk, cbErr) {},

        /* function logout
         *   sdk登出
         * params:
         *   cbOk   - function()类型, 成功时回调函数
         *   cbErr  - function(err)类型, 失败时回调函数, err为错误对象
         * return:
         *   (无)
         */
        logout: function logout(cbOk, cbErr) {},

        /* function setAutoRead
         * 设置会话自动已读上报标志
         * params:
         *   selSess    - webim.Session类型, 当前会话
         *   isOn   - boolean, 将selSess的自动已读消息标志改为isOn，同时是否上报当前会话已读消息
         *   isResetAll - boolean，是否重置所有会话的自动已读标志
         * return:
         *   (无)
         */
        setAutoRead: function setAutoRead(selSess, isOn, isResetAll) {},

        /* function getProfilePortrait
         *   拉取资料（搜索用户）
         * params:
         *   cbOk   - function()类型, 成功时回调函数
         *   cbErr  - function(err)类型, 失败时回调函数, err为错误对象
         * return:
         *   (无)
         */
        getProfilePortrait: function getProfilePortrait(options, cbOk, cbErr) {},

        /* function setProfilePortrait
         *   设置个人资料
         * params:
         *   cbOk   - function()类型, 成功时回调函数
         *   cbErr  - function(err)类型, 失败时回调函数, err为错误对象
         * return:
         *   (无)
         */
        setProfilePortrait: function setProfilePortrait(options, cbOk, cbErr) {},

        /* function applyAddFriend
         *   申请添加好友
         * params:
         *   cbOk   - function()类型, 成功时回调函数
         *   cbErr  - function(err)类型, 失败时回调函数, err为错误对象
         * return:
         *   (无)
         */
        applyAddFriend: function applyAddFriend(options, cbOk, cbErr) {},

        /* function getPendency
         *   拉取好友申请
         * params:
         *   cbOk   - function()类型, 成功时回调函数
         *   cbErr  - function(err)类型, 失败时回调函数, err为错误对象
         * return:
         *   (无)
         */
        getPendency: function getPendency(options, cbOk, cbErr) {},

        /* function deletePendency
         *   删除好友申请
         * params:
         *   cbOk   - function()类型, 成功时回调函数
         *   cbErr  - function(err)类型, 失败时回调函数, err为错误对象
         * return:
         *   (无)
         */
        deletePendency: function deletePendency(options, cbOk, cbErr) {},

        /* function responseFriend
         *   响应好友申请
         * params:
         *   cbOk   - function()类型, 成功时回调函数
         *   cbErr  - function(err)类型, 失败时回调函数, err为错误对象
         * return:
         *   (无)
         */
        responseFriend: function responseFriend(options, cbOk, cbErr) {},

        /* function getAllFriend
         *   拉取我的好友
         * params:
         *   cbOk   - function()类型, 成功时回调函数
         *   cbErr  - function(err)类型, 失败时回调函数, err为错误对象
         * return:
         *   (无)
         */
        getAllFriend: function getAllFriend(options, cbOk, cbErr) {},

        /* function deleteFriend
         *   删除好友
         * params:
         *   cbOk   - function()类型, 成功时回调函数
         *   cbErr  - function(err)类型, 失败时回调函数, err为错误对象
         * return:
         *   (无)
         */
        deleteFriend: function deleteFriend(options, cbOk, cbErr) {},

        /* function addBlackList
         *   增加黑名单
         * params:
         *   cbOk   - function()类型, 成功时回调函数
         *   cbErr  - function(err)类型, 失败时回调函数, err为错误对象
         * return:
         *   (无)
         */
        addBlackList: function addBlackList(options, cbOk, cbErr) {},

        /* function getBlackList
         *   删除黑名单
         * params:
         *   cbOk   - function()类型, 成功时回调函数
         *   cbErr  - function(err)类型, 失败时回调函数, err为错误对象
         * return:
         *   (无)
         */
        getBlackList: function getBlackList(options, cbOk, cbErr) {},

        /* function deleteBlackList
         *   我的黑名单
         * params:
         *   cbOk   - function()类型, 成功时回调函数
         *   cbErr  - function(err)类型, 失败时回调函数, err为错误对象
         * return:
         *   (无)
         */
        deleteBlackList: function deleteBlackList(options, cbOk, cbErr) {},

        /* function uploadPic
         *   上传图片
         * params:
         *   options    - 请求参数，详见api文档
         *   cbOk   - function()类型, 成功时回调函数
         *   cbErr  - function(err)类型, 失败时回调函数, err为错误对象
         * return:
         *   (无)
         */
        uploadPic: function uploadPic(options, cbOk, cbErr) {},

        /* function createGroup
         *   创建群
         * params:
         *   options    - 请求参数，详见api文档
         *   cbOk   - function()类型, 成功时回调函数
         *   cbErr  - function(err)类型, 失败时回调函数, err为错误对象
         * return:
         *   (无)
         */
        createGroup: function createGroup(options, cbOk, cbErr) {},

        /* function applyJoinGroup
         *   申请加群
         * params:
         *   options    - 请求参数，详见api文档
         *   cbOk   - function()类型, 成功时回调函数
         *   cbErr  - function(err)类型, 失败时回调函数, err为错误对象
         * return:
         *   (无)
         */
        applyJoinGroup: function applyJoinGroup(options, cbOk, cbErr) {},

        /* function handleApplyJoinGroup
         *   处理申请加群(同意或拒绝)
         * params:
         *   options    - 请求参数，详见api文档
         *   cbOk   - function()类型, 成功时回调函数
         *   cbErr  - function(err)类型, 失败时回调函数, err为错误对象
         * return:
         *   (无)
         */
        handleApplyJoinGroup: function handleApplyJoinGroup(options, cbOk, cbErr) {},

        /* function deleteApplyJoinGroupPendency
         *   删除加群申请
         * params:
         *   options    - 请求参数，详见api文档
         *   cbOk   - function()类型, 成功时回调函数
         *   cbErr  - function(err)类型, 失败时回调函数, err为错误对象
         * return:
         *   (无)
         */
        deleteApplyJoinGroupPendency: function deleteApplyJoinGroupPendency(options, cbOk, cbErr) {},

        /* function quitGroup
         *  主动退群
         * params:
         *   options    - 请求参数，详见api文档
         *   cbOk   - function()类型, 成功时回调函数
         *   cbErr  - function(err)类型, 失败时回调函数, err为错误对象
         * return:
         *   (无)
         */
        quitGroup: function quitGroup(options, cbOk, cbErr) {},

        /* function getGroupPublicInfo
         *   读取群公开资料-高级接口
         * params:
         *   options    - 请求参数，详见api文档
         *   cbOk   - function()类型, 成功时回调函数
         *   cbErr  - function(err)类型, 失败时回调函数, err为错误对象
         * return:
         *   (无)
         */
        getGroupPublicInfo: function getGroupPublicInfo(options, cbOk, cbErr) {},

        /* function getGroupInfo
         *   读取群详细资料-高级接口
         * params:
         *   options    - 请求参数，详见api文档
         *   cbOk   - function()类型, 成功时回调函数
         *   cbErr  - function(err)类型, 失败时回调函数, err为错误对象
         * return:
         *   (无)
         */
        getGroupInfo: function getGroupInfo(options, cbOk, cbErr) {},

        /* function modifyGroupBaseInfo
         *   修改群基本资料
         * params:
         *   options    - 请求参数，详见api文档
         *   cbOk   - function()类型, 成功时回调函数
         *   cbErr  - function(err)类型, 失败时回调函数, err为错误对象
         * return:
         *   (无)
         */
        modifyGroupBaseInfo: function modifyGroupBaseInfo(options, cbOk, cbErr) {},

        /* function destroyGroup
         *  解散群
         * params:
         *   options    - 请求参数，详见api文档
         *   cbOk   - function()类型, 成功时回调函数
         *   cbErr  - function(err)类型, 失败时回调函数, err为错误对象
         * return:
         *   (无)
         */
        destroyGroup: function destroyGroup(options, cbOk, cbErr) {},

        /* function getJoinedGroupListHigh
         *   获取我的群组-高级接口
         * params:
         *   options    - 请求参数，详见api文档
         *   cbOk   - function()类型, 成功时回调函数
         *   cbErr  - function(err)类型, 失败时回调函数, err为错误对象
         * return:
         *   (无)
         */
        getJoinedGroupListHigh: function getJoinedGroupListHigh(options, cbOk, cbErr) {},

        /* function getGroupMemberInfo
         *   获取群组成员列表
         * params:
         *   options    - 请求参数，详见api文档
         *   cbOk   - function()类型, 成功时回调函数
         *   cbErr  - function(err)类型, 失败时回调函数, err为错误对象
         * return:
         *   (无)
         */
        getGroupMemberInfo: function getGroupMemberInfo(options, cbOk, cbErr) {},

        /* function addGroupMember
         *   邀请好友加群
         * params:
         *   options    - 请求参数，详见api文档
         *   cbOk   - function()类型, 成功时回调函数
         *   cbErr  - function(err)类型, 失败时回调函数, err为错误对象
         * return:
         *   (无)
         */
        addGroupMember: function addGroupMember(options, cbOk, cbErr) {},

        /* function modifyGroupMember
         *   修改群成员资料（角色或者群消息提类型示）
         * params:
         *   options    - 请求参数，详见api文档
         *   cbOk   - function()类型, 成功时回调函数
         *   cbErr  - function(err)类型, 失败时回调函数, err为错误对象
         * return:
         *   (无)
         */
        modifyGroupMember: function modifyGroupMember(options, cbOk, cbErr) {},

        /* function forbidSendMsg
         *   设置群成员禁言时间
         * params:
         *   options    - 请求参数，详见api文档
         *   cbOk   - function()类型, 成功时回调函数
         *   cbErr  - function(err)类型, 失败时回调函数, err为错误对象
         * return:
         *   (无)
         */
        forbidSendMsg: function forbidSendMsg(options, cbOk, cbErr) {},

        /* function deleteGroupMember
         *   删除群成员
         * params:
         *   options    - 请求参数，详见api文档
         *   cbOk   - function()类型, 成功时回调函数
         *   cbErr  - function(err)类型, 失败时回调函数, err为错误对象
         * return:
         *   (无)
         */
        deleteGroupMember: function deleteGroupMember(options, cbOk, cbErr) {},

        /* function getPendencyGroup
         *   获取群组未决列表
         * params:
         *   options    - 请求参数，详见api文档
         *   cbOk   - function()类型, 成功时回调函数
         *   cbErr  - function(err)类型, 失败时回调函数, err为错误对象
         * return:
         *   (无)
         */
        getPendencyGroup: function getPendencyGroup(options, cbOk, cbErr) {},

        /* function getPendencyReport
         *   好友未决已读上报
         * params:
         *   options    - 请求参数，详见api文档
         *   cbOk   - function()类型, 成功时回调函数
         *   cbErr  - function(err)类型, 失败时回调函数, err为错误对象
         * return:
         *   (无)
         */
        getPendencyReport: function getPendencyReport(options, cbOk, cbErr) {},

        /* function getPendencyGroupRead
         *   群组未决已读上报
         * params:
         *   options    - 请求参数，详见api文档
         *   cbOk   - function()类型, 成功时回调函数
         *   cbErr  - function(err)类型, 失败时回调函数, err为错误对象
         * return:
         *   (无)
         */
        getPendencyGroupRead: function getPendencyGroupRead(options, cbOk, cbErr) {},

        /* function sendCustomGroupNotify
         *   发送自定义群通知
         * params:
         *   options    - 请求参数，详见api文档
         *   cbOk   - function()类型, 成功时回调函数
         *   cbErr  - function(err)类型, 失败时回调函数, err为错误对象
         * return:
         *   (无)
         */
        sendCustomGroupNotify: function sendCustomGroupNotify(options, cbOk, cbErr) {},

        /* class webim.Msg
         *   一条消息的描述类, 消息发送、接收的API中都会涉及此类型的对象
         * properties:
         *   sess   - Session object-ref, 消息所属的会话(e.g:我与好友A的C2C会话，我与群组G的GROUP会话)
         *   isSend - Boolean, true表示是我发出消息, false表示是发给我的消息)
         *   seq    - Integer, 消息序列号, 用于判断消息是否同一条
         *   random - Integer, 消息随机数,用于判断消息是否同一条
         *   time   - Integer, 消息时间戳, 为unix timestamp
         *   fromAccount -String,  消息发送者帐号
         *   subType -Integer,  消息子类型，c2c消息时，0-表示普通消息；群消息时，0-普通消息，1-点赞消息，2-提示消息
         *   fromAccountNick -String,  消息发送者昵称
         *   elems  - Array of webim.Msg.Elem, 描述消息内容的元素列表
         * constructor:
         *   Msg(sess, isSend, seq,random time,fromAccount) - 构造函数, 参数定义同上面properties中定义
         * methods:
         *   addText(text)  - 向elems中添加一个TEXT元素
         *   addFace(face)  - 向elems中添加一个FACE元素
         *   toHtml()       - 转成可展示的html String
         *addFace
         * sub-class webim.Msg.Elem
         *   消息中一个组成元素的描述类, 一条消息的内容被抽象描述为N个元素的有序列表
         * properties:
         *   type   - 元素类型, 目前有TEXT(文本)、FACE(表情)、IMAGE(图片)等
         *   content- 元素内容体, 当TEXT时为String, 当PIC时为UrlString
         * constructor:
         *   Elem(type, content) - 构造函数, 参数定义同上面properties中定义
         *
         * sub-class webim.Msg.Elem.TextElem
         *   文本
         * properties:
         *   text  - String 内容
         * constructor:
         *   TextElem(text) - 构造函数, 参数定义同上面properties中定义
         *
         * sub-class webim.Msg.Elem.FaceElem
         *   表情
         * properties:
         *   index  - Integer 表情索引, 用户自定义
         *   data   - String 额外数据，用户自定义
         * constructor:
         *   FaceElem(index,data) - 构造函数, 参数定义同上面properties中定义
         *
         *
         */
        Msg: function Msg(sess, isSend, seq, random, time, fromAccount, subType, fromAccountNick, fromAccountHeadurl) {/*Class constructor*/},

        /* singleton object MsgStore
         * webim.MsgStore是消息数据的Model对象(参考MVC概念), 它提供接口访问当前存储的会话和消息数据
         * 下面说明下会话数据类型: Session
         *
         * class Session
         *   一个Session对象描述一个会话，会话可简单理解为最近会话列表的一个条目，它由两个字段唯一标识:
         *     type - String, 会话类型(如"C2C", "GROUP", ...)
         *     id   - String, 会话ID(如C2C类型中为对方帐号,"C2C"时为好友ID,"GROUP"时为群ID)
         * properties:
         *   (Session对象未对外暴露任何属性字段, 所有访问通过下面的getter方法进行)
         * methods:
         *   type()     - String, 返回会话类型,"C2C"表示与好友私聊，"GROUP"表示群聊
         *   id()       - String, 返回会话ID
         *   name()     - String, 返回会话标题(如C2C类型中为对方的昵称,暂不支持)
         *   icon()     - String, 返回会话图标(对C2C类型中为对方的头像URL，暂不支持)
         *   unread()           - Integer, 返回会话未读条数
         *   time()     - Integer, 返回会话最后活跃时间, 为unix timestamp
         *   curMaxMsgSeq() - Integer, 返回会话最大消息序列号
         *   msgCount() - Integer, 返回会话中所有消息条数
         *   msg(index) - webim.Msg, 返回会话中第index条消息
         */
        MsgStore: {
            /* function sessMap
             *   获取所有会话
             * return:
             *   所有会话对象
             */
            sessMap: function sessMap() {
                return {/*Object*/};
            },
            /* function sessCount
             *   获取当前会话的个数
             * return:
             *   Integer, 会话个数
             */
            sessCount: function sessCount() {
                return 0;
            },

            /* function sessByTypeId
             *   根据会话类型和会话ID取得相应会话
             * params:
             *   type   - String, 会话类型(如"C2C", "GROUP", ...)
             *   id     - String, 会话ID(如对方ID)
             * return:
             *   Session, 会话对象(说明见上面)
             */
            sessByTypeId: function sessByTypeId(type, id) {
                return {/*Session Object*/};
            },
            /* function delSessByTypeId
             *   根据会话类型和会话ID删除相应会话
             * params:
             *   type   - String, 会话类型(如"C2C", "GROUP", ...)
             *   id     - String, 会话ID(如对方ID)
             * return:
             *   Boolean, 布尔类型
             */
            delSessByTypeId: function delSessByTypeId(type, id) {
                return true;
            },

            /* function resetCookieAndSyncFlag
             *   重置上一次读取新c2c消息Cookie和是否继续拉取标记
             * return:
             *
             */
            resetCookieAndSyncFlag: function resetCookieAndSyncFlag() {},

            downloadMap: {}
        }

    };

    /* webim API implementation
     */
    (function (webim) {
        //sdk版本
        var SDK = {
            'VERSION': '1.7.2', //sdk版本号
            'APPID': '537048168', //web im sdk 版本 APPID
            'PLAATFORM': "10" //发送请求时判断其是来自web端的请求
        };

        //是否启用正式环境，默认启用
        var isAccessFormaEnvironment = true;
        // var isAccessFormaEnvironment = false;

        //后台接口主机
        var SRV_HOST = {
            'FORMAL': {
                'COMMON': 'https://webim.tim.qq.com',
                'PIC': 'https://pic.tim.qq.com'
            },
            'TEST': {
                'COMMON': 'https://test.tim.qq.com',
                'PIC': 'https://pic.tim.qq.com'
            }
        };

        //浏览器版本信息
        var BROWSER_INFO = {};
        //是否为ie9（含）以下
        var lowerBR = false;

        //服务名称
        var SRV_NAME = {
            'OPEN_IM': 'openim', //私聊（拉取未读c2c消息，长轮询，c2c消息已读上报等）服务名
            'GROUP': 'group_open_http_svc', //群组管理（拉取群消息，创建群，群成员管理，群消息已读上报等）服务名
            'FRIEND': 'sns', //关系链管理（好友管理，黑名单管理等）服务名
            'PROFILE': 'profile', //资料管理（查询，设置个人资料等）服务名
            'RECENT_CONTACT': 'recentcontact', //最近联系人服务名
            'PIC': 'openpic', //图片（或文件）服务名
            'BIG_GROUP': 'group_open_http_noauth_svc', //直播大群 群组管理（申请加大群）服务名
            'BIG_GROUP_LONG_POLLING': 'group_open_long_polling_http_noauth_svc', //直播大群 长轮询（拉取消息等）服务名
            'IM_OPEN_STAT': 'imopenstat', //质量上报，统计接口错误率
            'DEL_CHAT': 'recentcontact', //删除会话
            'WEB_IM': 'webim'
        };

        //不同服务对应的版本号
        var SRV_NAME_VER = {
            'openim': 'v4',
            'group_open_http_svc': 'v4',
            'sns': 'v4',
            'profile': 'v4',
            'recentcontact': 'v4',
            'openpic': 'v4',
            'group_open_http_noauth_svc': 'v1',
            'group_open_long_polling_http_noauth_svc': 'v1',
            'imopenstat': 'v4',
            'webim': 'v3'
        };

        //不同的命令名对应的上报类型ID，用于接口质量上报
        var CMD_EVENT_ID_MAP = {
            'login': 1, //登录
            'pic_up': 3, //上传图片
            'apply_join_group': 9, //申请加入群组
            'create_group': 10, //创建群组
            'longpolling': 18, //普通长轮询
            'send_group_msg': 19, //群聊
            'sendmsg': 20 //私聊
        };

        //聊天类型
        var SESSION_TYPE = {
            'C2C': 'C2C', //私聊
            'GROUP': 'GROUP' //群聊
        };

        //最近联系人类型
        var RECENT_CONTACT_TYPE = {
            'C2C': 1, //好友
            'GROUP': 2 //群
        };

        //消息最大长度（字节）
        var MSG_MAX_LENGTH = {
            'C2C': 12000, //私聊消息
            'GROUP': 8898 //群聊
        };

        //后台接口返回类型
        var ACTION_STATUS = {
            'OK': 'OK', //成功
            'FAIL': 'FAIL' //失败
        };

        var ERROR_CODE_CUSTOM = 99999; //自定义后台接口返回错误码

        //消息元素类型
        var MSG_ELEMENT_TYPE = {
            'TEXT': 'TIMTextElem', //文本
            'FACE': 'TIMFaceElem', //表情
            'IMAGE': 'TIMImageElem', //图片
            'CUSTOM': 'TIMCustomElem', //自定义
            'SOUND': 'TIMSoundElem', //语音,只支持显示
            'FILE': 'TIMFileElem', //文件,只支持显示
            'LOCATION': 'TIMLocationElem', //地理位置
            'GROUP_TIP': 'TIMGroupTipElem' //群提示消息,只支持显示
        };

        //图片类型
        var IMAGE_TYPE = {
            'ORIGIN': 1, //原图
            'LARGE': 2, //缩略大图
            'SMALL': 3 //缩略小图
        };

        //图片格式
        var IMAGE_FORMAT = {
            JPG: 0x1,
            JPEG: 0x1,
            GIF: 0x2,
            PNG: 0x3,
            BMP: 0x4,
            UNKNOWN: 0xff
        };

        //上传资源包类型
        var UPLOAD_RES_PKG_FLAG = {
            'RAW_DATA': 0, //原始数据
            'BASE64_DATA': 1 //base64编码数据
        };

        //下载文件配置
        var DOWNLOAD_FILE = {
            'BUSSINESS_ID': '10001', //下载文件业务ID
            'AUTH_KEY': '617574686b6579', //下载文件authkey
            'SERVER_IP': '182.140.186.147' //下载文件服务器IP
        };

        //下载文件类型
        var DOWNLOAD_FILE_TYPE = {
            "SOUND": 2106, //语音
            "FILE": 2107 //普通文件
        };

        //上传资源类型
        var UPLOAD_RES_TYPE = {
            "IMAGE": 1, //图片
            "FILE": 2, //文件
            "SHORT_VIDEO": 3, //短视频
            "SOUND": 4 //语音，PTT
        };

        //版本号，用于上传图片或文件接口
        var VERSION_INFO = {
            'APP_VERSION': '2.1', //应用版本号
            'SERVER_VERSION': 1 //服务端版本号
        };

        //长轮询消息类型
        var LONG_POLLINNG_EVENT_TYPE = {
            "C2C": 1 //新的c2c消息通知

            , "GROUP_COMMON": 3 //新的群普通消息

            , "GROUP_TIP": 4 //新的群提示消息

            , "GROUP_SYSTEM": 5 //新的群系统消息

            , "GROUP_TIP2": 6 //新的群提示消息2

            , "FRIEND_NOTICE": 7 //好友系统通知

            , "PROFILE_NOTICE": 8 //资料系统通知

            , "C2C_COMMON": 9 //新的C2C消息

            , "C2C_EVENT": 10
        };

        //c2c消息子类型
        var C2C_MSG_SUB_TYPE = {
            "COMMON": 0 //普通消息
        };
        //c2c消息子类型
        var C2C_EVENT_SUB_TYPE = {
            "READED": 92, //已读消息同步
            "KICKEDOUT": 96
        };

        //群消息子类型
        var GROUP_MSG_SUB_TYPE = {
            "COMMON": 0, //普通消息
            "LOVEMSG": 1, //点赞消息
            "TIP": 2, //提示消息
            "REDPACKET": 3 //红包消息
        };

        //群消息优先级类型
        var GROUP_MSG_PRIORITY_TYPE = {
            "REDPACKET": 1, //红包消息
            "COMMON": 2, //普通消息
            "LOVEMSG": 3 //点赞消息
        };

        //群提示消息类型
        var GROUP_TIP_TYPE = {
            "JOIN": 1, //加入群组
            "QUIT": 2, //退出群组
            "KICK": 3, //被踢出群组
            "SET_ADMIN": 4, //被设置为管理员
            "CANCEL_ADMIN": 5, //被取消管理员
            "MODIFY_GROUP_INFO": 6, //修改群资料
            "MODIFY_MEMBER_INFO": 7 //修改群成员信息
        };

        //群提示消息-群资料变更类型
        var GROUP_TIP_MODIFY_GROUP_INFO_TYPE = {
            "FACE_URL": 1, //修改群头像URL
            "NAME": 2, //修改群名称
            "OWNER": 3, //修改群主
            "NOTIFICATION": 4, //修改群公告
            "INTRODUCTION": 5 //修改群简介
        };

        //群系统消息类型
        var GROUP_SYSTEM_TYPE = {
            "JOIN_GROUP_REQUEST": 1, //申请加群请求（只有管理员会收到）
            "JOIN_GROUP_ACCEPT": 2, //申请加群被同意（只有申请人能够收到）
            "JOIN_GROUP_REFUSE": 3, //申请加群被拒绝（只有申请人能够收到）
            "KICK": 4, //被管理员踢出群(只有被踢者接收到)
            "DESTORY": 5, //群被解散(全员接收)
            "CREATE": 6, //创建群(创建者接收, 不展示)
            "INVITED_JOIN_GROUP_REQUEST": 7, //邀请加群(被邀请者接收)
            "QUIT": 8, //主动退群(主动退出者接收, 不展示)
            "SET_ADMIN": 9, //设置管理员(被设置者接收)
            "CANCEL_ADMIN": 10, //取消管理员(被取消者接收)
            "REVOKE": 11, //群已被回收(全员接收, 不展示)
            "READED": 15, //群消息已读同步
            "CUSTOM": 255, //用户自定义通知(默认全员接收)
            "INVITED_JOIN_GROUP_REQUEST_AGREE": 12 //邀请加群(被邀请者需同意)
        };

        //好友系统通知子类型
        var FRIEND_NOTICE_TYPE = {
            "FRIEND_ADD": 1, //好友表增加
            "FRIEND_DELETE": 2, //好友表删除
            "PENDENCY_ADD": 3, //未决增加
            "PENDENCY_DELETE": 4, //未决删除
            "BLACK_LIST_ADD": 5, //黑名单增加
            "BLACK_LIST_DELETE": 6, //黑名单删除
            "PENDENCY_REPORT": 7, //未决已读上报
            "FRIEND_UPDATE": 8 //好友数据更新
        };

        //资料系统通知子类型
        var PROFILE_NOTICE_TYPE = {
            "PROFILE_MODIFY": 1 //资料修改
        };

        //腾讯登录服务错误码（用于托管模式）
        var TLS_ERROR_CODE = {
            'OK': 0, //成功
            'SIGNATURE_EXPIRATION': 11 //用户身份凭证过期
        };

        //长轮询连接状态
        var CONNECTION_STATUS = {
            'INIT': -1, //初始化
            'ON': 0, //连接正常
            'RECONNECT': 1, //连接恢复正常
            'OFF': 9999 //连接已断开,可能是用户网络问题，或者长轮询接口报错引起的
        };

        var UPLOAD_PIC_BUSSINESS_TYPE = { //图片业务类型
            'GROUP_MSG': 1, //私聊图片
            'C2C_MSG': 2, //群聊图片
            'USER_HEAD': 3, //用户头像
            'GROUP_HEAD': 4 //群头像
        };

        var FRIEND_WRITE_MSG_ACTION = { //好友输入消息状态
            'ING': 14, //正在输入
            'STOP': 15 //停止输入
        };

        //ajax默认超时时间，单位：毫秒
        var ajaxDefaultTimeOut = 15000;

        //大群长轮询接口返回正常时，延时一定时间再发起下一次请求
        var OK_DELAY_TIME = 1000;

        //大群长轮询接口发生错误时，延时一定时间再发起下一次请求
        var ERROR_DELAY_TIME = 5000;

        //群提示消息最多显示人数
        var GROUP_TIP_MAX_USER_COUNT = 10;

        //长轮询连接状态
        var curLongPollingStatus = CONNECTION_STATUS.INIT;

        //当长轮询连接断开后，是否已经回调过
        var longPollingOffCallbackFlag = false;

        //当前长轮询返回错误次数
        var curLongPollingRetErrorCount = 0;

        //长轮询默认超时时间，单位：毫秒
        var longPollingDefaultTimeOut = 60000;

        //长轮询返回错误次数达到一定值后，发起新的长轮询请求间隔时间，单位：毫秒
        var longPollingIntervalTime = 5000;

        //没有新消息时，长轮询返回60008错误码是正常的
        var longPollingTimeOutErrorCode = 60008;

        //多实例登录被kick的错误码
        var longPollingKickedErrorCode = 91101;

        var longPollingPackageTooLargeErrorCode = 10018;
        var LongPollingId = null;

        //当前大群长轮询返回错误次数
        var curBigGroupLongPollingRetErrorCount = 0;

        //最大允许长轮询返回错误次数
        var LONG_POLLING_MAX_RET_ERROR_COUNT = 10;

        //上传重试累计
        var Upload_Retry_Times = 0;
        //最大上传重试
        var Upload_Retry_Max_Times = 20;

        var uploadResultIframeId = 0; //用于上传图片的iframe id

        var ipList = []; //文件下载地址
        var authkey = null; //文件下载票据
        var expireTime = null; //文件下载票据超时时间

        //错误码
        var ERROR = {};
        //当前登录用户
        var ctx = {
            sdkAppID: null,
            appIDAt3rd: null,
            accountType: null,
            identifier: null,
            tinyid: null,
            identifierNick: null,
            userSig: null,
            a2: null,
            contentType: 'json',
            apn: 1
        };
        var opt = {};
        var xmlHttpObjSeq = 0; //ajax请求id
        var xmlHttpObjMap = {}; //发起的ajax请求
        var curSeq = 0; //消息seq
        var tempC2CMsgList = []; //新c2c消息临时缓存
        var tempC2CHistoryMsgList = []; //漫游c2c消息临时缓存

        var maxApiReportItemCount = 20; //一次最多上报条数
        var apiReportItems = []; //暂存api接口质量上报数据

        var Resources = {
            downloadMap: {}
        };

        //表情标识字符和索引映射关系对象，用户可以自定义
        var emotionDataIndexs = {
            "[惊讶]": 0,
            "[撇嘴]": 1,
            "[色]": 2,
            "[发呆]": 3,
            "[得意]": 4,
            "[流泪]": 5,
            "[害羞]": 6,
            "[闭嘴]": 7,
            "[睡]": 8,
            "[大哭]": 9,
            "[尴尬]": 10,
            "[发怒]": 11,
            "[调皮]": 12,
            "[龇牙]": 13,
            "[微笑]": 14,
            "[难过]": 15,
            "[酷]": 16,
            "[冷汗]": 17,
            "[抓狂]": 18,
            "[吐]": 19,
            "[偷笑]": 20,
            "[可爱]": 21,
            "[白眼]": 22,
            "[傲慢]": 23,
            "[饿]": 24,
            "[困]": 25,
            "[惊恐]": 26,
            "[流汗]": 27,
            "[憨笑]": 28,
            "[大兵]": 29,
            "[奋斗]": 30,
            "[咒骂]": 31,
            "[疑问]": 32,
            "[嘘]": 33,
            "[晕]": 34
        };

        //表情对象，用户可以自定义
        var emotions = {};
        //工具类
        var tool = new function () {

            //格式化时间戳
            //format格式如下：
            //yyyy-MM-dd hh:mm:ss 年月日时分秒(默认格式)
            //yyyy-MM-dd 年月日
            //hh:mm:ss 时分秒
            this.formatTimeStamp = function (timestamp, format) {
                if (!timestamp) {
                    return 0;
                }
                var formatTime;
                format = format || 'yyyy-MM-dd hh:mm:ss';
                var date = new Date(timestamp * 1000);
                var o = {
                    "M+": date.getMonth() + 1, //月份
                    "d+": date.getDate(), //日
                    "h+": date.getHours(), //小时
                    "m+": date.getMinutes(), //分
                    "s+": date.getSeconds() //秒
                };
                if (/(y+)/.test(format)) {
                    formatTime = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
                } else {
                    formatTime = format;
                }
                for (var k in o) {
                    if (new RegExp("(" + k + ")").test(formatTime)) formatTime = formatTime.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
                }
                return formatTime;
            };

            //根据群类型英文名转换成中文名
            this.groupTypeEn2Ch = function (type_en) {
                var type_ch = null;
                switch (type_en) {
                    case 'Public':
                        type_ch = '公开群';
                        break;
                    case 'ChatRoom':
                        type_ch = '聊天室';
                        break;
                    case 'Private':
                        type_ch = '私有群'; //即讨论组
                        break;
                    case 'AVChatRoom':
                        type_ch = '直播聊天室';
                        break;
                    default:
                        type_ch = type_en;
                        break;
                }
                return type_ch;
            };
            //根据群类型中文名转换成英文名
            this.groupTypeCh2En = function (type_ch) {
                var type_en = null;
                switch (type_ch) {
                    case '公开群':
                        type_en = 'Public';
                        break;
                    case '聊天室':
                        type_en = 'ChatRoom';
                        break;
                    case '私有群':
                        //即讨论组
                        type_en = 'Private';
                        break;
                    case '直播聊天室':
                        type_en = 'AVChatRoom';
                        break;
                    default:
                        type_en = type_ch;
                        break;
                }
                return type_en;
            };
            //根据群身份英文名转换成群身份中文名
            this.groupRoleEn2Ch = function (role_en) {
                var role_ch = null;
                switch (role_en) {
                    case 'Member':
                        role_ch = '成员';
                        break;
                    case 'Admin':
                        role_ch = '管理员';
                        break;
                    case 'Owner':
                        role_ch = '群主';
                        break;
                    default:
                        role_ch = role_en;
                        break;
                }
                return role_ch;
            };
            //根据群身份中文名转换成群身份英文名
            this.groupRoleCh2En = function (role_ch) {
                var role_en = null;
                switch (role_ch) {
                    case '成员':
                        role_en = 'Member';
                        break;
                    case '管理员':
                        role_en = 'Admin';
                        break;
                    case '群主':
                        role_en = 'Owner';
                        break;
                    default:
                        role_en = role_ch;
                        break;
                }
                return role_en;
            };
            //根据群消息提示类型英文转换中文
            this.groupMsgFlagEn2Ch = function (msg_flag_en) {
                var msg_flag_ch = null;
                switch (msg_flag_en) {
                    case 'AcceptAndNotify':
                        msg_flag_ch = '接收并提示';
                        break;
                    case 'AcceptNotNotify':
                        msg_flag_ch = '接收不提示';
                        break;
                    case 'Discard':
                        msg_flag_ch = '屏蔽';
                        break;
                    default:
                        msg_flag_ch = msg_flag_en;
                        break;
                }
                return msg_flag_ch;
            };
            //根据群消息提示类型中文名转换英文名
            this.groupMsgFlagCh2En = function (msg_flag_ch) {
                var msg_flag_en = null;
                switch (msg_flag_ch) {
                    case '接收并提示':
                        msg_flag_en = 'AcceptAndNotify';
                        break;
                    case '接收不提示':
                        msg_flag_en = 'AcceptNotNotify';
                        break;
                    case '屏蔽':
                        msg_flag_en = 'Discard';
                        break;
                    default:
                        msg_flag_en = msg_flag_ch;
                        break;
                }
                return msg_flag_en;
            };
            //将空格和换行符转换成HTML标签
            this.formatText2Html = function (text) {
                var html = text;
                if (html) {
                    html = this.xssFilter(html); //用户昵称或群名称等字段会出现脚本字符串
                    html = html.replace(/ /g, "&nbsp;");
                    html = html.replace(/\n/g, "<br/>");
                }
                return html;
            };
            //将HTML标签转换成空格和换行符
            this.formatHtml2Text = function (html) {
                var text = html;
                if (text) {
                    text = text.replace(/&nbsp;/g, " ");
                    text = text.replace(/<br\/>/g, "\n");
                }
                return text;
            };
            //获取字符串(UTF-8编码)所占字节数
            //参考：http://zh.wikipedia.org/zh-cn/UTF-8
            this.getStrBytes = function (str) {
                if (str == null || str === undefined) return 0;
                if (typeof str != "string") {
                    return 0;
                }
                var total = 0,
                    charCode,
                    i,
                    len;
                for (i = 0, len = str.length; i < len; i++) {
                    charCode = str.charCodeAt(i);
                    if (charCode <= 0x007f) {
                        total += 1; //字符代码在000000 – 00007F之间的，用一个字节编码
                    } else if (charCode <= 0x07ff) {
                        total += 2; //000080 – 0007FF之间的字符用两个字节
                    } else if (charCode <= 0xffff) {
                        total += 3; //000800 – 00D7FF 和 00E000 – 00FFFF之间的用三个字节，注: Unicode在范围 D800-DFFF 中不存在任何字符
                    } else {
                        total += 4; //010000 – 10FFFF之间的用4个字节
                    }
                }
                return total;
            };

            //防止XSS攻击
            this.xssFilter = function (val) {
                val = val.toString();
                val = val.replace(/[<]/g, "&lt;");
                val = val.replace(/[>]/g, "&gt;");
                val = val.replace(/"/g, "&quot;");
                //val = val.replace(/'/g, "&#039;");
                return val;
            };

            //去掉头尾空白符
            this.trimStr = function (str) {
                if (!str) return '';
                str = str.toString();
                return str.replace(/(^\s*)|(\s*$)/g, "");
            };
            //判断是否为8位整数
            this.validNumber = function (str) {
                str = str.toString();
                return str.match(/(^\d{1,8}$)/g);
            };
            this.getReturnError = function (errorInfo, errorCode) {
                if (!errorCode) {
                    errorCode = -100;
                }
                var error = {
                    'ActionStatus': ACTION_STATUS.FAIL,
                    'ErrorCode': errorCode,
                    'ErrorInfo': errorInfo + "[" + errorCode + "]"
                };
                return error;
            };
            this.replaceObject = function (keyMap, json) {
                for (var a in json) {
                    if (keyMap[a]) {
                        json[keyMap[a]] = json[a];
                        delete json[a];
                        if (json[keyMap[a]] instanceof Array) {
                            var len = json[keyMap[a]].length;
                            for (var i = 0; i < len; i++) {
                                json[keyMap[a]][i] = this.replaceObject(keyMap, json[keyMap[a]][i]);
                            }
                        } else if (_typeof(json[keyMap[a]]) === 'object') {
                            json[keyMap[a]] = this.replaceObject(keyMap, json[keyMap[a]]);
                        }
                    }
                }
                return json;
            };
        }();

        //日志对象
        var log = new function () {

            var on = true;

            this.setOn = function (onFlag) {
                on = onFlag;
            };

            this.getOn = function () {
                return on;
            };

            this.error = function (logStr) {
                try {
                    on && console.error(logStr);
                } catch (e) {}
            };
            this.warn = function (logStr) {
                try {
                    on && console.warn(logStr);
                } catch (e) {}
            };
            this.info = function (logStr) {
                try {
                    on && console.info(logStr);
                } catch (e) {}
            };
            this.debug = function (logStr) {
                try {
                    on && console.debug(logStr);
                } catch (e) {}
            };
        }();
        //获取unix时间戳
        var unixtime = function unixtime(d) {
            if (!d) d = new Date();
            return Math.round(d.getTime() / 1000);
        };
        //时间戳转日期
        var fromunixtime = function fromunixtime(t) {
            return new Date(t * 1000);
        };
        //获取下一个消息序号
        var nextSeq = function nextSeq() {
            if (curSeq) {
                curSeq = curSeq + 1;
            } else {
                curSeq = Math.round(Math.random() * 10000000);
            }
            return curSeq;
        };
        //产生随机数
        var createRandom = function createRandom() {
            return Math.round(Math.random() * 4294967296);
        };

        //发起ajax请求
        var ajaxRequest = function ajaxRequest(meth, url, req, timeout, isLongPolling, cbOk, cbErr) {

            wx.request({
                url: url,
                data: req,
                dataType: 'json',
                method: meth,
                header: {
                    'Content-Type': 'application/json'
                },
                success: function success(res) {
                    curLongPollingRetErrorCount = curBigGroupLongPollingRetErrorCount = 0;
                    if (cbOk) cbOk(res.data);
                },
                fail: function fail(res) {
                    setTimeout(function () {
                        var errInfo = "请求服务器失败,请检查你的网络是否正常";
                        var error = tool.getReturnError(errInfo, -2);
                        //if (!isLongPolling && cbErr) cbErr(error);
                        if (cbErr) cbErr(error);
                    }, 16);
                }
            });
        };

        //发起ajax请求（json格式数据）
        var ajaxRequestJson = function ajaxRequestJson(meth, url, req, timeout, isLongPolling, cbOk, cbErr) {
            ajaxRequest(meth, url, JSON.stringify(req), timeout, isLongPolling, function (resp) {
                var json = null;
                if (resp) json = resp; //将返回的json字符串转换成json对象
                if (cbOk) cbOk(json);
            }, cbErr);
        };
        //判断用户是否已登录
        var isLogin = function isLogin() {
            return ctx.sdkAppID && ctx.identifier;
        };
        //检查是否登录
        var checkLogin = function checkLogin(cbErr, isNeedCallBack) {
            if (!isLogin()) {
                if (isNeedCallBack) {
                    var errInfo = "请登录";
                    var error = tool.getReturnError(errInfo, -4);

                    if (cbErr) cbErr(error);
                }
                return false;
            }
            return true;
        };

        //检查是否访问正式环境
        var isAccessFormalEnv = function isAccessFormalEnv() {
            return isAccessFormaEnvironment;
        };

        //根据不同的服务名和命令，获取对应的接口地址
        var getApiUrl = function getApiUrl(srvName, cmd, cbOk, cbErr) {
            var srvHost = SRV_HOST;
            if (isAccessFormalEnv()) {
                srvHost = SRV_HOST.FORMAL.COMMON;
            } else {
                srvHost = SRV_HOST.TEST.COMMON;
            }

            //if (srvName == SRV_NAME.RECENT_CONTACT) {
            //    srvHost = SRV_HOST.TEST.COMMON;
            //}

            if (srvName == SRV_NAME.PIC) {
                if (isAccessFormalEnv()) {
                    srvHost = SRV_HOST.FORMAL.PIC;
                } else {
                    srvHost = SRV_HOST.TEST.PIC;
                }
            }

            var url = srvHost + '/' + SRV_NAME_VER[srvName] + '/' + srvName + '/' + cmd + '?websdkappid=' + SDK.APPID + "&v=" + SDK.VERSION + "&platform=" + SDK.PLAATFORM;;

            if (isLogin()) {
                if (cmd == 'login' || cmd == 'accesslayer') {
                    url += '&identifier=' + encodeURIComponent(ctx.identifier) + '&usersig=' + ctx.userSig;
                } else {
                    if (ctx.tinyid && ctx.a2) {
                        url += '&tinyid=' + ctx.tinyid + '&a2=' + ctx.a2;
                    } else {
                        if (cbErr) {
                            log.error("tinyid或a2为空[" + srvName + "][" + cmd + "]");
                            cbErr(tool.getReturnError("tinyid或a2为空[" + srvName + "][" + cmd + "]", -5));
                            return false;
                        }
                    }
                }
                url += '&contenttype=' + ctx.contentType;
            }
            url += '&sdkappid=' + ctx.sdkAppID + '&accounttype=' + ctx.accountType + '&apn=' + ctx.apn + '&reqtime=' + unixtime();
            return url;
        };

        //获取语音下载url
        var getSoundDownUrl = function getSoundDownUrl(uuid, senderId) {
            var soundUrl = null;
            if (authkey && ipList[0]) {
                soundUrl = "http://" + ipList[0] + "/asn.com/stddownload_common_file?authkey=" + authkey + "&bid=" + DOWNLOAD_FILE.BUSSINESS_ID + "&subbid=" + ctx.sdkAppID + "&fileid=" + uuid + "&filetype=" + DOWNLOAD_FILE_TYPE.SOUND + "&openid=" + senderId + "&ver=0";
            } else {
                log.error("拼接语音下载url不报错：ip或者authkey为空");
            }
            return soundUrl;
        };

        //获取文件下载地址
        var getFileDownUrl = function getFileDownUrl(uuid, senderId, fileName) {
            var fileUrl = null;
            if (authkey && ipList[0]) {
                fileUrl = "http://" + ipList[0] + "/asn.com/stddownload_common_file?authkey=" + authkey + "&bid=" + DOWNLOAD_FILE.BUSSINESS_ID + "&subbid=" + ctx.sdkAppID + "&fileid=" + uuid + "&filetype=" + DOWNLOAD_FILE_TYPE.FILE + "&openid=" + senderId + "&ver=0&filename=" + encodeURIComponent(fileName);
            } else {
                log.error("拼接文件下载url不报错：ip或者authkey为空");
            }
            Resources.downloadMap["uuid_" + uuid] = fileUrl;
            return fileUrl;
        };

        //获取文件下载地址
        var getFileDownUrlV2 = function getFileDownUrlV2(uuid, senderId, fileName, downFlag, receiverId, busiId, type) {
            var options = {
                "From_Account": senderId, //"identifer_0",       // 类型: String, 发送者tinyid
                "To_Account": receiverId, //"identifer_1",         // 类型: String, 接收者tinyid
                "os_platform": 10, // 类型: Number, 终端的类型 1(android) 2(ios) 3(windows) 10(others...)
                "Timestamp": unixtime().toString(), // 类型: Number, 时间戳
                "Random": createRandom().toString(), // 类型: Number, 随机值
                "request_info": [// 类型: Array
                {
                    "busi_id": busiId, // 类型: Number, 群(1) C2C(2) 其他请联系sdk开发者分配
                    "download_flag": downFlag, // 类型: Number, 申请下载地址标识  0(申请架平下载地址)  1(申请COS平台下载地址)  2(不需要申请, 直接拿url下载(这里应该不会为2))
                    "type": type, // 类型: Number, 0(短视频缩略图), 1(文件), 2(短视频), 3(ptt), 其他待分配
                    "uuid": uuid, // 类型: Number, 唯一标识一个文件的uuid
                    "version": VERSION_INFO.SERVER_VERSION, // 类型: Number, 架平server版本
                    "auth_key": authkey, // 类型: String, 认证签名
                    "ip": ipList[0] // 类型: Number, 架平IP
                }]
            };
            //获取下载地址
            proto_applyDownload(options, function (resp) {
                if (resp.error_code == 0 && resp.response_info) {
                    Resources.downloadMap["uuid_" + options.uuid] = resp.response_info.url;
                }
                if (onAppliedDownloadUrl) {
                    onAppliedDownloadUrl({
                        uuid: options.uuid,
                        url: resp.response_info.url,
                        maps: Resources.downloadMap
                    });
                }
            }, function (resp) {
                log.error("获取下载地址失败", options.uuid);
            });
        };

        //重置ajax请求
        var clearXmlHttpObjMap = function clearXmlHttpObjMap() {
            //遍历xmlHttpObjMap{}
            for (var seq in xmlHttpObjMap) {
                var xmlHttpObj = xmlHttpObjMap[seq];
                if (xmlHttpObj) {
                    xmlHttpObj.abort(); //中断ajax请求(长轮询)
                    xmlHttpObjMap[xmlHttpObjSeq] = null; //清空
                }
            }
            xmlHttpObjSeq = 0;
            xmlHttpObjMap = {};
        };

        //重置sdk全局变量
        var clearSdk = function clearSdk() {

            clearXmlHttpObjMap();

            //当前登录用户
            ctx = {
                sdkAppID: null,
                appIDAt3rd: null,
                accountType: null,
                identifier: null,
                identifierNick: null,
                userSig: null,
                contentType: 'json',
                apn: 1
            };
            opt = {};

            curSeq = 0;

            apiReportItems = [];

            MsgManager.clear();
            MsgStore.clear();

            //重置longpollingId
            LongPollingId = null;
        };

        //登录
        var _login = function _login(loginInfo, listeners, options, cbOk, cbErr) {

            clearSdk();

            if (options) opt = options;
            if (opt.isAccessFormalEnv == false) {
                log.error("请切换为正式环境！！！！");
                isAccessFormaEnvironment = opt.isAccessFormalEnv;
            }
            if (opt.isLogOn == false) {
                log.setOn(opt.isLogOn);
            }
            /*
             if(opt.emotions){
             emotions=opt.emotions;
             webim.Emotions= emotions;
             }
             if(opt.emotionDataIndexs){
             emotionDataIndexs=opt.emotionDataIndexs;
             webim.EmotionDataIndexs= emotionDataIndexs;
             }*/

            if (!loginInfo) {
                if (cbErr) {
                    cbErr(tool.getReturnError("loginInfo is empty", -6));
                    return;
                }
            }
            if (!loginInfo.sdkAppID) {
                if (cbErr) {
                    cbErr(tool.getReturnError("loginInfo.sdkAppID is empty", -7));
                    return;
                }
            }
            if (!loginInfo.accountType) {
                if (cbErr) {
                    cbErr(tool.getReturnError("loginInfo.accountType is empty", -8));
                    return;
                }
            }

            if (loginInfo.identifier) {
                ctx.identifier = loginInfo.identifier.toString();
            }
            if (loginInfo.identifier && !loginInfo.userSig) {
                if (cbErr) {
                    cbErr(tool.getReturnError("loginInfo.userSig is empty", -9));
                    return;
                }
            }
            if (loginInfo.userSig) {
                ctx.userSig = loginInfo.userSig.toString();
            }
            ctx.sdkAppID = loginInfo.sdkAppID;
            ctx.accountType = loginInfo.accountType;

            if (ctx.identifier && ctx.userSig) {
                //带登录态
                proto_accesslayer(function () {
                    //登录
                    proto_login(function (identifierNick, headurl) {
                        MsgManager.init(listeners, function (mmInitResp) {
                            if (cbOk) {
                                mmInitResp.identifierNick = identifierNick;
                                mmInitResp.headurl = headurl;
                                cbOk(mmInitResp);
                            }
                        }, cbErr);
                    }, cbErr);
                });
            } else {
                //不带登录态，进入直播场景sdk
                MsgManager.init(listeners, cbOk, cbErr);
            }
        };

        //初始化浏览器信息
        var initBrowserInfo = function initBrowserInfo() {
            //初始化浏览器类型
            BROWSER_INFO = "wechat";
        };

        //接口质量上报
        var reportApiQuality = function reportApiQuality(cmd, errorCode, errorInfo) {
            if (cmd == 'longpolling' && (errorCode == longPollingTimeOutErrorCode || errorCode == longPollingKickedErrorCode)) {
                //longpolling 返回60008错误可以视为正常,可以不上报
                return;
            }
            var eventId = CMD_EVENT_ID_MAP[cmd];
            if (eventId) {
                var reportTime = unixtime();
                var uniqKey = null;
                var msgCmdErrorCode = {
                    'Code': errorCode,
                    'ErrMsg': errorInfo
                };
                if (ctx.a2) {
                    uniqKey = ctx.a2.substring(0, 10) + "_" + reportTime + "_" + createRandom();
                } else if (ctx.userSig) {
                    uniqKey = ctx.userSig.substring(0, 10) + "_" + reportTime + "_" + createRandom();
                }

                if (uniqKey) {

                    var rptEvtItem = {
                        "UniqKey": uniqKey,
                        "EventId": eventId,
                        "ReportTime": reportTime,
                        "MsgCmdErrorCode": msgCmdErrorCode
                    };

                    if (cmd == 'login') {
                        var loginApiReportItems = [];
                        loginApiReportItems.push(rptEvtItem);
                        var loginReportOpt = {
                            "EvtItems": loginApiReportItems,
                            "MainVersion": SDK.VERSION,
                            "Version": "0"
                        };
                        proto_reportApiQuality(loginReportOpt, function (resp) {
                            loginApiReportItems = null; //
                        }, function (err) {
                            loginApiReportItems = null; //
                        });
                    } else {
                        apiReportItems.push(rptEvtItem);
                        if (apiReportItems.length >= maxApiReportItemCount) {
                            //累计一定条数再上报
                            var reportOpt = {
                                "EvtItems": apiReportItems,
                                "MainVersion": SDK.VERSION,
                                "Version": "0"
                            };
                            proto_reportApiQuality(reportOpt, function (resp) {
                                apiReportItems = []; //清空
                            }, function (err) {
                                apiReportItems = []; //清空
                            });
                        }
                    }
                }
            }
        };

        var proto_accesslayer = function proto_accesslayer(callback) {
            ConnManager.apiCall(SRV_NAME.WEB_IM, "accesslayer", {}, function (data) {
                if (data.ErrorCode === 0 && data.WebImAccessLayer === 1) {
                    SRV_HOST.FORMAL.COMMON = 'https://events.tim.qq.com';
                }
                callback();
            }, function () {
                callback();
            });
        };
        // REST API calls
        //上线
        var proto_login = function proto_login(cbOk, cbErr) {
            ConnManager.apiCall(SRV_NAME.OPEN_IM, "login", {
                "State": "Online"
            }, function (loginResp) {
                if (loginResp.TinyId) {
                    ctx.tinyid = loginResp.TinyId;
                } else {
                    if (cbErr) {
                        cbErr(tool.getReturnError("TinyId is empty", -10));
                        return;
                    }
                }
                if (loginResp.A2Key) {
                    ctx.a2 = loginResp.A2Key;
                } else {
                    if (cbErr) {
                        cbErr(tool.getReturnError("A2Key is empty", -11));
                        return;
                    }
                }
                var tag_list = ["Tag_Profile_IM_Nick", "Tag_Profile_IM_Image"];
                var options = {
                    'From_Account': ctx.identifier,
                    'To_Account': [ctx.identifier],
                    'LastStandardSequence': 0,
                    'TagList': tag_list
                };
                proto_getProfilePortrait(options, function (resp) {
                    var nick, image;
                    if (resp.UserProfileItem && resp.UserProfileItem.length > 0) {
                        for (var i in resp.UserProfileItem) {
                            for (var j in resp.UserProfileItem[i].ProfileItem) {
                                switch (resp.UserProfileItem[i].ProfileItem[j].Tag) {
                                    case 'Tag_Profile_IM_Nick':
                                        nick = resp.UserProfileItem[i].ProfileItem[j].Value;
                                        if (nick) ctx.identifierNick = nick;
                                        break;
                                    case 'Tag_Profile_IM_Image':
                                        image = resp.UserProfileItem[i].ProfileItem[j].Value;
                                        if (image) ctx.headurl = image;
                                        break;
                                }
                            }
                        }
                    }
                    if (cbOk) cbOk(ctx.identifierNick, ctx.headurl); //回传当前用户昵称
                }, cbErr);
            }, cbErr);
        };
        //下线
        var proto_logout = function proto_logout(type, cbOk, cbErr) {
            if (!checkLogin(cbErr, false)) {
                //不带登录态
                clearSdk();
                if (cbOk) cbOk({
                    'ActionStatus': ACTION_STATUS.OK,
                    'ErrorCode': 0,
                    'ErrorInfo': 'logout success'
                });
                return;
            }
            if (type == "all") {
                ConnManager.apiCall(SRV_NAME.OPEN_IM, "logout", {}, function (resp) {
                    clearSdk();
                    if (cbOk) cbOk(resp);
                }, cbErr);
            } else {
                ConnManager.apiCall(SRV_NAME.OPEN_IM, "longpollinglogout", {
                    LongPollingId: LongPollingId
                }, function (resp) {
                    clearSdk();
                    if (cbOk) cbOk(resp);
                }, cbErr);
            }
        };
        //发送消息，包括私聊和群聊
        var proto_sendMsg = function proto_sendMsg(msg, cbOk, cbErr) {
            if (!checkLogin(cbErr, true)) return;
            var msgInfo = null;

            switch (msg.sess.type()) {
                case SESSION_TYPE.C2C:
                    msgInfo = {
                        'From_Account': ctx.identifier,
                        'To_Account': msg.sess.id().toString(),
                        'MsgTimeStamp': msg.time,
                        'MsgSeq': msg.seq,
                        'MsgRandom': msg.random,
                        'MsgBody': [],
                        'OfflinePushInfo': msg.offlinePushInfo
                    };
                    break;
                case SESSION_TYPE.GROUP:
                    var subType = msg.getSubType();
                    msgInfo = {
                        'GroupId': msg.sess.id().toString(),
                        'From_Account': ctx.identifier,
                        'Random': msg.random,
                        'MsgBody': []
                    };
                    switch (subType) {
                        case GROUP_MSG_SUB_TYPE.COMMON:
                            msgInfo.MsgPriority = "COMMON";
                            break;
                        case GROUP_MSG_SUB_TYPE.REDPACKET:
                            msgInfo.MsgPriority = "REDPACKET";
                            break;
                        case GROUP_MSG_SUB_TYPE.LOVEMSG:
                            msgInfo.MsgPriority = "LOVEMSG";
                            break;
                        case GROUP_MSG_SUB_TYPE.TIP:
                            log.error("不能主动发送群提示消息,subType=" + subType);
                            break;
                        default:
                            log.error("发送群消息时，出现未知子消息类型：subType=" + subType);
                            return;
                            break;
                    }
                    break;
                default:
                    break;
            }

            for (var i in msg.elems) {
                var elem = msg.elems[i];
                var msgContent = null;
                var msgType = elem.type;
                switch (msgType) {
                    case MSG_ELEMENT_TYPE.TEXT:
                        //文本
                        msgContent = {
                            'Text': elem.content.text
                        };
                        break;
                    case MSG_ELEMENT_TYPE.FACE:
                        //表情
                        msgContent = {
                            'Index': elem.content.index,
                            'Data': elem.content.data
                        };
                        break;
                    case MSG_ELEMENT_TYPE.IMAGE:
                        //图片
                        var ImageInfoArray = [];
                        for (var j in elem.content.ImageInfoArray) {
                            ImageInfoArray.push({
                                'Type': elem.content.ImageInfoArray[j].type,
                                'Size': elem.content.ImageInfoArray[j].size,
                                'Width': elem.content.ImageInfoArray[j].width,
                                'Height': elem.content.ImageInfoArray[j].height,
                                'URL': elem.content.ImageInfoArray[j].url
                            });
                        }
                        msgContent = {
                            'ImageFormat': elem.content.ImageFormat,
                            'UUID': elem.content.UUID,
                            'ImageInfoArray': ImageInfoArray
                        };
                        break;
                    case MSG_ELEMENT_TYPE.SOUND:
                        //
                        log.warn('web端暂不支持发送语音消息');
                        continue;
                        break;
                    case MSG_ELEMENT_TYPE.LOCATION:
                        //
                        log.warn('web端暂不支持发送地理位置消息');
                        continue;
                        break;
                    case MSG_ELEMENT_TYPE.FILE:
                        //
                        msgContent = {
                            'UUID': elem.content.uuid,
                            'FileName': elem.content.name,
                            'FileSize': elem.content.size,
                            'DownloadFlag': elem.content.downFlag
                        };
                        break;
                    case MSG_ELEMENT_TYPE.CUSTOM:
                        //
                        msgContent = {
                            'Data': elem.content.data,
                            'Desc': elem.content.desc,
                            'Ext': elem.content.ext
                        };
                        msgType = MSG_ELEMENT_TYPE.CUSTOM;
                        break;
                    default:
                        log.warn('web端暂不支持发送' + elem.type + '消息');
                        continue;
                        break;
                }

                if (msg.PushInfoBoolean) {
                    msgInfo.OfflinePushInfo = msg.PushInfo; //当android终端进程被杀掉时才走push，IOS退到后台即可
                }

                msgInfo.MsgBody.push({
                    'MsgType': msgType,
                    'MsgContent': msgContent
                });
            }
            if (msg.sess.type() == SESSION_TYPE.C2C) {
                //私聊
                ConnManager.apiCall(SRV_NAME.OPEN_IM, "sendmsg", msgInfo, cbOk, cbErr);
            } else if (msg.sess.type() == SESSION_TYPE.GROUP) {
                //群聊
                ConnManager.apiCall(SRV_NAME.GROUP, "send_group_msg", msgInfo, cbOk, cbErr);
            }
        };
        //长轮询接口
        var proto_longPolling = function proto_longPolling(options, cbOk, cbErr) {
            if (!isAccessFormaEnvironment && typeof stopPolling != "undefined" && stopPolling == true) {
                return;
            }
            if (!checkLogin(cbErr, true)) return;
            ConnManager.apiCall(SRV_NAME.OPEN_IM, "longpolling", options, cbOk, cbErr, longPollingDefaultTimeOut, true);
        };

        //长轮询接口(拉取直播聊天室新消息)
        var proto_bigGroupLongPolling = function proto_bigGroupLongPolling(options, cbOk, cbErr, timeout) {
            ConnManager.apiCall(SRV_NAME.BIG_GROUP_LONG_POLLING, "get_msg", options, cbOk, cbErr, timeout);
        };

        //拉取未读c2c消息接口
        var proto_getMsgs = function proto_getMsgs(cookie, syncFlag, cbOk, cbErr) {
            if (!checkLogin(cbErr, true)) return;
            ConnManager.apiCall(SRV_NAME.OPEN_IM, "getmsg", {
                'Cookie': cookie,
                'SyncFlag': syncFlag
            }, function (resp) {

                if (resp.MsgList && resp.MsgList.length) {
                    for (var i in resp.MsgList) {
                        tempC2CMsgList.push(resp.MsgList[i]);
                    }
                }
                if (resp.SyncFlag == 1) {
                    proto_getMsgs(resp.Cookie, resp.SyncFlag, cbOk, cbErr);
                } else {
                    resp.MsgList = tempC2CMsgList;
                    tempC2CMsgList = [];
                    if (cbOk) cbOk(resp);
                }
            }, cbErr);
        };
        //C2C消息已读上报接口
        var proto_c2CMsgReaded = function proto_c2CMsgReaded(cookie, c2CMsgReadedItem, cbOk, cbErr) {
            if (!checkLogin(cbErr, true)) return;
            var tmpC2CMsgReadedItem = [];
            for (var i in c2CMsgReadedItem) {
                var item = {
                    'To_Account': c2CMsgReadedItem[i].toAccount,
                    'LastedMsgTime': c2CMsgReadedItem[i].lastedMsgTime
                };
                tmpC2CMsgReadedItem.push(item);
            }
            ConnManager.apiCall(SRV_NAME.OPEN_IM, "msgreaded", {
                C2CMsgReaded: {
                    'Cookie': cookie,
                    'C2CMsgReadedItem': tmpC2CMsgReadedItem
                }
            }, cbOk, cbErr);
        };

        //删除c2c消息
        var proto_deleteC2CMsg = function proto_deleteC2CMsg(options, cbOk, cbErr) {
            if (!checkLogin(cbErr, true)) return;

            ConnManager.apiCall(SRV_NAME.OPEN_IM, "deletemsg", options, cbOk, cbErr);
        };

        //拉取c2c历史消息接口
        var proto_getC2CHistoryMsgs = function proto_getC2CHistoryMsgs(options, cbOk, cbErr) {
            if (!checkLogin(cbErr, true)) return;
            ConnManager.apiCall(SRV_NAME.OPEN_IM, "getroammsg", options, function (resp) {
                var reqMsgCount = options.MaxCnt;
                var complete = resp.Complete;
                var rspMsgCount = resp.MaxCnt;
                var msgKey = resp.MsgKey;
                var lastMsgTime = resp.LastMsgTime;

                if (resp.MsgList && resp.MsgList.length) {
                    for (var i in resp.MsgList) {
                        tempC2CHistoryMsgList.push(resp.MsgList[i]);
                    }
                }
                var netxOptions = null;
                if (complete == 0) {
                    //还有历史消息可拉取
                    if (rspMsgCount < reqMsgCount) {
                        netxOptions = {
                            'Peer_Account': options.Peer_Account,
                            'MaxCnt': reqMsgCount - rspMsgCount,
                            'LastMsgTime': lastMsgTime,
                            'MsgKey': msgKey
                        };
                    }
                }

                if (netxOptions) {
                    //继续拉取
                    proto_getC2CHistoryMsgs(netxOptions, cbOk, cbErr);
                } else {
                    resp.MsgList = tempC2CHistoryMsgList;
                    tempC2CHistoryMsgList = [];
                    if (cbOk) cbOk(resp);
                }
            }, cbErr);
        };

        //群组接口
        //创建群组
        //协议参考：https://www.qcloud.com/doc/product/269/1615
        var proto_createGroup = function proto_createGroup(options, cbOk, cbErr) {
            if (!checkLogin(cbErr, true)) return;
            var opt = {
                //必填    群组形态，包括Public（公开群），Private（私有群），ChatRoom（聊天室），AVChatRoom（互动直播聊天室）。
                'Type': options.Type,
                //必填    群名称，最长30字节。
                'Name': options.Name
            };
            var member_list = [];

            //Array 选填  初始群成员列表，最多500个。成员信息字段详情参见：群成员资料。
            for (var i = 0; i < options.MemberList.length; i++) {
                member_list.push({
                    'Member_Account': options.MemberList[i]
                });
            }
            opt.MemberList = member_list;
            //选填    为了使得群组ID更加简单，便于记忆传播，腾讯云支持APP在通过REST API创建群组时自定义群组ID。详情参见：自定义群组ID。
            if (options.GroupId) {
                opt.GroupId = options.GroupId;
            }
            //选填    群主id，自动添加到群成员中。如果不填，群没有群主。
            if (options.Owner_Account) {
                opt.Owner_Account = options.Owner_Account;
            }
            //选填    群简介，最长240字节。
            if (options.Introduction) {
                opt.Introduction = options.Introduction;
            }
            //选填    群公告，最长300字节。
            if (options.Notification) {
                opt.Notification = options.Notification;
            }
            //选填    最大群成员数量，最大为10000，不填默认为2000个。
            if (options.MaxMemberCount) {
                opt.MaxMemberCount = options.MaxMemberCount;
            }
            //选填    申请加群处理方式。包含FreeAccess（自由加入），NeedPermission（需要验证），DisableApply（禁止加群），不填默认为NeedPermission（需要验证）。
            if (options.ApplyJoinOption) {
                //
                opt.ApplyJoinOption = options.ApplyJoinOption;
            }
            //Array 选填  群组维度的自定义字段，默认情况是没有的，需要开通，详情参见：自定义字段。
            if (options.AppDefinedData) {
                opt.AppDefinedData = options.AppDefinedData;
            }
            //选填    群头像URL，最长100字节。
            if (options.FaceUrl) {
                opt.FaceUrl = options.FaceUrl;
            }
            ConnManager.apiCall(SRV_NAME.GROUP, "create_group", opt, cbOk, cbErr);
        };

        //创建群组-高级接口
        //协议参考：https://www.qcloud.com/doc/product/269/1615
        var proto_createGroupHigh = function proto_createGroupHigh(options, cbOk, cbErr) {
            if (!checkLogin(cbErr, true)) return;
            ConnManager.apiCall(SRV_NAME.GROUP, "create_group", options, cbOk, cbErr);
        };

        //修改群组基本资料
        //协议参考：https://www.qcloud.com/doc/product/269/1620
        var proto_modifyGroupBaseInfo = function proto_modifyGroupBaseInfo(options, cbOk, cbErr) {
            if (!checkLogin(cbErr, true)) return;

            ConnManager.apiCall(SRV_NAME.GROUP, "modify_group_base_info", options, cbOk, cbErr);
        };

        //申请加群
        var proto_applyJoinGroup = function proto_applyJoinGroup(options, cbOk, cbErr) {
            if (!checkLogin(cbErr, true)) return;

            options.GroupId = String(options.GroupId);
            ConnManager.apiCall(SRV_NAME.GROUP, "apply_join_group", {
                'GroupId': options.GroupId,
                'ApplyMsg': options.ApplyMsg,
                'UserDefinedField': options.UserDefinedField
            }, cbOk, cbErr);
        };

        //申请加入大群
        var BigGroupId;
        var proto_applyJoinBigGroup = function proto_applyJoinBigGroup(options, cbOk, cbErr) {
            options.GroupId = String(options.GroupId);
            BigGroupId = options.GroupId;
            var srvName;
            if (!checkLogin(cbErr, false)) {
                //未登录
                srvName = SRV_NAME.BIG_GROUP;
            } else {
                //已登录
                srvName = SRV_NAME.GROUP;
            }
            ConnManager.apiCall(srvName, "apply_join_group", {
                'GroupId': options.GroupId,
                'ApplyMsg': options.ApplyMsg,
                'UserDefinedField': options.UserDefinedField
            }, function (resp) {
                if (resp.JoinedStatus && resp.JoinedStatus == 'JoinedSuccess') {
                    if (resp.LongPollingKey) {
                        MsgManager.setBigGroupLongPollingOn(true); //开启长轮询
                        MsgManager.setBigGroupLongPollingKey(resp.LongPollingKey); //更新大群长轮询key
                        MsgManager.setBigGroupLongPollingMsgMap(options.GroupId, 0); //收到的群消息置0
                        MsgManager.bigGroupLongPolling(); //开启长轮询
                    } else {
                        //没有返回LongPollingKey，说明申请加的群不是直播聊天室(AVChatRoom)
                        cbErr && cbErr(tool.getReturnError("Join Group succeed; But the type of group is not AVChatRoom: groupid=" + options.GroupId, -12));
                        return;
                    }
                }
                if (cbOk) cbOk(resp);
            }, function (err) {

                if (cbErr) cbErr(err);
            });
        };

        //处理加群申请(同意或拒绝)
        var proto_handleApplyJoinGroupPendency = function proto_handleApplyJoinGroupPendency(options, cbOk, cbErr) {
            if (!checkLogin(cbErr, true)) return;

            ConnManager.apiCall(SRV_NAME.GROUP, "handle_apply_join_group", {
                'GroupId': options.GroupId,
                'Applicant_Account': options.Applicant_Account,
                'HandleMsg': options.HandleMsg,
                'Authentication': options.Authentication,
                'MsgKey': options.MsgKey,
                'ApprovalMsg': options.ApprovalMsg,
                'UserDefinedField': options.UserDefinedField
            }, cbOk, function (err) {
                if (err.ErrorCode == 10024) {
                    //apply has be handled
                    if (cbOk) {
                        var resp = {
                            'ActionStatus': ACTION_STATUS.OK,
                            'ErrorCode': 0,
                            'ErrorInfo': '该申请已经被处理过'
                        };
                        cbOk(resp);
                    }
                } else {
                    if (cbErr) cbErr(err);
                }
            });
        };

        //获取群组未决列表
        var proto_getPendencyGroup = function proto_getPendencyGroup(options, cbOk, cbErr) {
            if (!checkLogin(cbErr, true)) return;

            ConnManager.apiCall(SRV_NAME.GROUP, "get_pendency", {
                'StartTime': options.StartTime,
                'Limit': options.Limit,
                'Handle_Account': ctx.identifier
            }, cbOk, function (err) {});
        };

        //群组未决已经上报
        var proto_getPendencyGroupRead = function proto_getPendencyGroupRead(options, cbOk, cbErr) {
            if (!checkLogin(cbErr, true)) return;

            ConnManager.apiCall(SRV_NAME.GROUP, "report_pendency", {
                'ReportTime': options.ReportTime,
                'From_Account': ctx.identifier
            }, cbOk, function (err) {});
        };

        //处理被邀请进群申请(同意或拒绝)
        var proto_handleInviteJoinGroupRequest = function proto_handleInviteJoinGroupRequest(options, cbOk, cbErr) {
            if (!checkLogin(cbErr, true)) return;

            ConnManager.apiCall(SRV_NAME.GROUP, "handle_invite_join_group", {
                'GroupId': options.GroupId,
                'Inviter_Account': options.Inviter_Account,
                'HandleMsg': options.HandleMsg,
                'Authentication': options.Authentication,
                'MsgKey': options.MsgKey,
                'ApprovalMsg': options.ApprovalMsg,
                'UserDefinedField': options.UserDefinedField
            }, cbOk, function (err) {});
        };

        //主动退群
        var proto_quitGroup = function proto_quitGroup(options, cbOk, cbErr) {
            if (!checkLogin(cbErr, true)) return;

            ConnManager.apiCall(SRV_NAME.GROUP, "quit_group", {
                'GroupId': options.GroupId
            }, cbOk, cbErr);
        };

        //退出大群
        var proto_quitBigGroup = function proto_quitBigGroup(options, cbOk, cbErr) {
            var srvName;
            if (!checkLogin(cbErr, false)) {
                //未登录
                srvName = SRV_NAME.BIG_GROUP;
            } else {
                //已登录
                srvName = SRV_NAME.GROUP;
            }
            MsgManager.resetBigGroupLongPollingInfo();
            ConnManager.apiCall(srvName, "quit_group", {
                'GroupId': options.GroupId
            }, function (resp) {
                MsgStore.delSessByTypeId(SESSION_TYPE.GROUP, options.GroupId);
                //重置当前再请求中的ajax
                //clearXmlHttpObjMap();
                //退出大群成功之后需要重置长轮询信息
                // MsgManager.resetBigGroupLongPollingInfo();
                if (cbOk) cbOk(resp);
            }, cbErr);
        };
        //查找群(按名称)
        var proto_searchGroupByName = function proto_searchGroupByName(options, cbOk, cbErr) {
            ConnManager.apiCall(SRV_NAME.GROUP, "search_group", options, cbOk, cbErr);
        };

        //获取群组公开资料
        var proto_getGroupPublicInfo = function proto_getGroupPublicInfo(options, cbOk, cbErr) {
            if (!checkLogin(cbErr, true)) return;

            ConnManager.apiCall(SRV_NAME.GROUP, "get_group_public_info", {
                'GroupIdList': options.GroupIdList,
                'ResponseFilter': {
                    'GroupBasePublicInfoFilter': options.GroupBasePublicInfoFilter
                }
            }, function (resp) {
                resp.ErrorInfo = '';
                if (resp.GroupInfo) {
                    for (var i in resp.GroupInfo) {
                        var errorCode = resp.GroupInfo[i].ErrorCode;
                        if (errorCode > 0) {
                            resp.ActionStatus = ACTION_STATUS.FAIL;
                            resp.GroupInfo[i].ErrorInfo = "[" + errorCode + "]" + resp.GroupInfo[i].ErrorInfo;
                            resp.ErrorInfo += resp.GroupInfo[i].ErrorInfo + '\n';
                        }
                    }
                }
                if (resp.ActionStatus == ACTION_STATUS.FAIL) {
                    if (cbErr) {
                        cbErr(resp);
                    }
                } else if (cbOk) {
                    cbOk(resp);
                }
            }, cbErr);
        };

        //获取群组详细资料--高级
        //请求协议参考：https://www.qcloud.com/doc/product/269/1616
        var proto_getGroupInfo = function proto_getGroupInfo(options, cbOk, cbErr) {
            if (!checkLogin(cbErr, true)) return;

            var opt = {
                'GroupIdList': options.GroupIdList,
                'ResponseFilter': {
                    'GroupBaseInfoFilter': options.GroupBaseInfoFilter,
                    'MemberInfoFilter': options.MemberInfoFilter
                }
            };
            if (options.AppDefinedDataFilter_Group) {
                opt.ResponseFilter.AppDefinedDataFilter_Group = options.AppDefinedDataFilter_Group;
            }
            if (options.AppDefinedDataFilter_GroupMember) {
                opt.ResponseFilter.AppDefinedDataFilter_GroupMember = options.AppDefinedDataFilter_GroupMember;
            }
            ConnManager.apiCall(SRV_NAME.GROUP, "get_group_info", opt, cbOk, cbErr);
        };

        //获取群组成员-高级接口
        //协议参考：https://www.qcloud.com/doc/product/269/1617
        var proto_getGroupMemberInfo = function proto_getGroupMemberInfo(options, cbOk, cbErr) {
            if (!checkLogin(cbErr, true)) return;

            ConnManager.apiCall(SRV_NAME.GROUP, "get_group_member_info", {
                'GroupId': options.GroupId,
                'Offset': options.Offset,
                'Limit': options.Limit,
                'MemberInfoFilter': options.MemberInfoFilter,
                'MemberRoleFilter': options.MemberRoleFilter,
                'AppDefinedDataFilter_GroupMember': options.AppDefinedDataFilter_GroupMember
            }, cbOk, cbErr);
        };

        //增加群组成员
        //协议参考：https://www.qcloud.com/doc/product/269/1621
        var proto_addGroupMember = function proto_addGroupMember(options, cbOk, cbErr) {
            if (!checkLogin(cbErr, true)) return;

            ConnManager.apiCall(SRV_NAME.GROUP, "add_group_member", {
                'GroupId': options.GroupId,
                'Silence': options.Silence,
                'MemberList': options.MemberList
            }, cbOk, cbErr);
        };
        //修改群组成员资料
        //协议参考：https://www.qcloud.com/doc/product/269/1623
        var proto_modifyGroupMember = function proto_modifyGroupMember(options, cbOk, cbErr) {
            if (!checkLogin(cbErr, true)) return;
            var opt = {};
            if (options.GroupId) {
                opt.GroupId = options.GroupId;
            }
            if (options.Member_Account) {
                opt.Member_Account = options.Member_Account;
            }
            //Admin或者Member
            if (options.Role) {
                opt.Role = options.Role;
            }
            // AcceptAndNotify代表解收并提示消息，Discard代表不接收也不提示消息，AcceptNotNotify代表接收消息但不提示
            if (options.MsgFlag) {
                opt.MsgFlag = options.MsgFlag;
            }
            if (options.ShutUpTime) {
                //禁言时间
                opt.ShutUpTime = options.ShutUpTime;
            }
            if (options.NameCard) {
                //群名片,最大不超过50个字节
                opt.NameCard = options.NameCard;
            }
            if (options.AppMemberDefinedData) {
                //群成员维度的自定义字段，默认情况是没有的，需要开通
                opt.AppMemberDefinedData = options.AppMemberDefinedData;
            }
            ConnManager.apiCall(SRV_NAME.GROUP, "modify_group_member_info", opt, cbOk, cbErr);
        };
        //删除群组成员
        //协议参考：https://www.qcloud.com/doc/product/269/1622
        var proto_deleteGroupMember = function proto_deleteGroupMember(options, cbOk, cbErr) {
            if (!checkLogin(cbErr, true)) return;

            ConnManager.apiCall(SRV_NAME.GROUP, "delete_group_member", {
                'GroupId': options.GroupId,
                'Silence': options.Silence,
                'MemberToDel_Account': options.MemberToDel_Account,
                'Reason': options.Reason
            }, cbOk, cbErr);
        };
        //解散群组
        //协议参考：https://www.qcloud.com/doc/product/269/1624
        var proto_destroyGroup = function proto_destroyGroup(options, cbOk, cbErr) {
            if (!checkLogin(cbErr, true)) return;

            ConnManager.apiCall(SRV_NAME.GROUP, "destroy_group", {
                'GroupId': options.GroupId
            }, cbOk, cbErr);
        };
        //转让群组
        //协议参考：https://www.qcloud.com/doc/product/269/1633
        var proto_changeGroupOwner = function proto_changeGroupOwner(options, cbOk, cbErr) {
            if (!checkLogin(cbErr, true)) return;
            ConnManager.apiCall(SRV_NAME.GROUP, "change_group_owner", options, cbOk, cbErr);
        };
        //获取用户所加入的群组-高级接口
        //协议参考：https://www.qcloud.com/doc/product/269/1625
        var proto_getJoinedGroupListHigh = function proto_getJoinedGroupListHigh(options, cbOk, cbErr) {
            if (!checkLogin(cbErr, true)) return;

            ConnManager.apiCall(SRV_NAME.GROUP, "get_joined_group_list", {
                'Member_Account': options.Member_Account,
                'Limit': options.Limit,
                'Offset': options.Offset,
                'GroupType': options.GroupType,
                'ResponseFilter': {
                    'GroupBaseInfoFilter': options.GroupBaseInfoFilter,
                    'SelfInfoFilter': options.SelfInfoFilter
                }
            }, cbOk, cbErr);
        };
        //查询一组UserId在群中的身份
        //协议参考：https://www.qcloud.com/doc/product/269/1626
        var proto_getRoleInGroup = function proto_getRoleInGroup(options, cbOk, cbErr) {
            if (!checkLogin(cbErr, true)) return;

            ConnManager.apiCall(SRV_NAME.GROUP, "get_role_in_group", {
                'GroupId': options.GroupId,
                'User_Account': options.User_Account
            }, cbOk, cbErr);
        };
        //设置取消成员禁言时间
        //协议参考：https://www.qcloud.com/doc/product/269/1627
        var proto_forbidSendMsg = function proto_forbidSendMsg(options, cbOk, cbErr) {
            if (!checkLogin(cbErr, true)) return;

            ConnManager.apiCall(SRV_NAME.GROUP, "forbid_send_msg", {
                'GroupId': options.GroupId,
                'Members_Account': options.Members_Account,
                'ShutUpTime': options.ShutUpTime //单位为秒，为0时表示取消禁言
            }, cbOk, cbErr);
        };

        //发送自定义群系统通知
        var proto_sendCustomGroupNotify = function proto_sendCustomGroupNotify(options, cbOk, cbErr) {
            if (!checkLogin(cbErr, true)) return;
            ConnManager.apiCall(SRV_NAME.GROUP, "send_group_system_notification", options, cbOk, cbErr);
        };

        //拉取群消息接口
        var proto_getGroupMsgs = function proto_getGroupMsgs(options, cbOk, cbErr) {
            if (!checkLogin(cbErr, true)) return;
            ConnManager.apiCall(SRV_NAME.GROUP, "group_msg_get", {
                "GroupId": options.GroupId,
                "ReqMsgSeq": options.ReqMsgSeq,
                "ReqMsgNumber": options.ReqMsgNumber
            }, cbOk, cbErr);
        };
        //群消息已读上报接口
        var proto_groupMsgReaded = function proto_groupMsgReaded(options, cbOk, cbErr) {
            if (!checkLogin(cbErr, true)) return;
            ConnManager.apiCall(SRV_NAME.GROUP, "msg_read_report", {
                'GroupId': options.GroupId,
                'MsgReadedSeq': options.MsgReadedSeq
            }, cbOk, cbErr);
        };
        //end

        //好友接口
        //处理好友接口返回的错误码
        var convertErrorEn2ZhFriend = function convertErrorEn2ZhFriend(resp) {
            var errorAccount = [];
            if (resp.Fail_Account && resp.Fail_Account.length) {
                errorAccount = resp.Fail_Account;
            }
            if (resp.Invalid_Account && resp.Invalid_Account.length) {
                for (var k in resp.Invalid_Account) {
                    errorAccount.push(resp.Invalid_Account[k]);
                }
            }
            if (errorAccount.length) {
                resp.ActionStatus = ACTION_STATUS.FAIL;
                resp.ErrorCode = ERROR_CODE_CUSTOM;
                resp.ErrorInfo = '';
                for (var i in errorAccount) {
                    var failCount = errorAccount[i];
                    for (var j in resp.ResultItem) {
                        if (resp.ResultItem[j].To_Account == failCount) {

                            var resultCode = resp.ResultItem[j].ResultCode;
                            resp.ResultItem[j].ResultInfo = "[" + resultCode + "]" + resp.ResultItem[j].ResultInfo;
                            resp.ErrorInfo += resp.ResultItem[j].ResultInfo + "\n";
                            break;
                        }
                    }
                }
            }
            return resp;
        };
        //添加好友
        var proto_applyAddFriend = function proto_applyAddFriend(options, cbOk, cbErr) {
            if (!checkLogin(cbErr, true)) return;
            ConnManager.apiCall(SRV_NAME.FRIEND, "friend_add", {
                'From_Account': ctx.identifier,
                'AddFriendItem': options.AddFriendItem
            }, function (resp) {
                var newResp = convertErrorEn2ZhFriend(resp);
                if (newResp.ActionStatus == ACTION_STATUS.FAIL) {
                    if (cbErr) cbErr(newResp);
                } else if (cbOk) {
                    cbOk(newResp);
                }
            }, cbErr);
        };
        //删除好友
        var proto_deleteFriend = function proto_deleteFriend(options, cbOk, cbErr) {
            if (!checkLogin(cbErr, true)) return;
            ConnManager.apiCall(SRV_NAME.FRIEND, "friend_delete", {
                'From_Account': ctx.identifier,
                'To_Account': options.To_Account,
                'DeleteType': options.DeleteType
            }, function (resp) {
                var newResp = convertErrorEn2ZhFriend(resp);
                if (newResp.ActionStatus == ACTION_STATUS.FAIL) {
                    if (cbErr) cbErr(newResp);
                } else if (cbOk) {
                    cbOk(newResp);
                }
            }, cbErr);
        };

        //删除会话
        var proto_deleteChat = function proto_deleteChat(options, cbOk, cbErr) {
            if (!checkLogin(cbErr, true)) return;

            if (options.chatType == 1) {
                ConnManager.apiCall(SRV_NAME.DEL_CHAT, "delete", {
                    'From_Account': ctx.identifier,
                    'Type': options.chatType,
                    'To_Account': options.To_Account
                }, cbOk, cbErr);
            } else {
                ConnManager.apiCall(SRV_NAME.DEL_CHAT, "delete", {
                    'From_Account': ctx.identifier,
                    'Type': options.chatType,
                    'ToGroupid': options.To_Account
                }, cbOk, cbErr);
            }
        };

        //获取好友申请
        var proto_getPendency = function proto_getPendency(options, cbOk, cbErr) {
            if (!checkLogin(cbErr, true)) return;
            ConnManager.apiCall(SRV_NAME.FRIEND, "pendency_get", {
                "From_Account": ctx.identifier,
                "PendencyType": options.PendencyType,
                "StartTime": options.StartTime,
                "MaxLimited": options.MaxLimited,
                "LastSequence": options.LastSequence
            }, cbOk, cbErr);
        };
        //好友申请已读上报
        var proto_getPendencyReport = function proto_getPendencyReport(options, cbOk, cbErr) {
            if (!checkLogin(cbErr, true)) return;
            ConnManager.apiCall(SRV_NAME.FRIEND, "PendencyReport", {
                "From_Account": ctx.identifier,
                "LatestPendencyTimeStamp": options.LatestPendencyTimeStamp
            }, cbOk, cbErr);
        };
        //删除好友申请
        var proto_deletePendency = function proto_deletePendency(options, cbOk, cbErr) {
            if (!checkLogin(cbErr, true)) return;
            ConnManager.apiCall(SRV_NAME.FRIEND, "pendency_delete", {
                "From_Account": ctx.identifier,
                "PendencyType": options.PendencyType,
                "To_Account": options.To_Account

            }, function (resp) {
                var newResp = convertErrorEn2ZhFriend(resp);
                if (newResp.ActionStatus == ACTION_STATUS.FAIL) {
                    if (cbErr) cbErr(newResp);
                } else if (cbOk) {
                    cbOk(newResp);
                }
            }, cbErr);
        };
        //处理好友申请
        var proto_responseFriend = function proto_responseFriend(options, cbOk, cbErr) {
            if (!checkLogin(cbErr, true)) return;
            ConnManager.apiCall(SRV_NAME.FRIEND, "friend_response", {
                'From_Account': ctx.identifier,
                'ResponseFriendItem': options.ResponseFriendItem
            }, function (resp) {
                var newResp = convertErrorEn2ZhFriend(resp);
                if (newResp.ActionStatus == ACTION_STATUS.FAIL) {
                    if (cbErr) cbErr(newResp);
                } else if (cbOk) {
                    cbOk(newResp);
                }
            }, cbErr);
        };
        //我的好友
        var proto_getAllFriend = function proto_getAllFriend(options, cbOk, cbErr) {
            if (!checkLogin(cbErr, true)) return;
            ConnManager.apiCall(SRV_NAME.FRIEND, "friend_get_all", {
                'From_Account': ctx.identifier,
                'TimeStamp': options.TimeStamp,
                'StartIndex': options.StartIndex,
                'GetCount': options.GetCount,
                'LastStandardSequence': options.LastStandardSequence,
                'TagList': options.TagList
            }, cbOk, cbErr);
        };

        //资料接口
        //查看个人资料
        var proto_getProfilePortrait = function proto_getProfilePortrait(options, cbOk, cbErr) {
            if (options.To_Account.length > 100) {
                options.To_Account.length = 100;
                log.error('获取用户资料人数不能超过100人');
            }
            if (!checkLogin(cbErr, true)) return;
            ConnManager.apiCall(SRV_NAME.PROFILE, "portrait_get", {
                'From_Account': ctx.identifier,
                'To_Account': options.To_Account,
                //'LastStandardSequence':options.LastStandardSequence,
                'TagList': options.TagList
            }, function (resp) {
                var errorAccount = [];
                if (resp.Fail_Account && resp.Fail_Account.length) {
                    errorAccount = resp.Fail_Account;
                }
                if (resp.Invalid_Account && resp.Invalid_Account.length) {
                    for (var k in resp.Invalid_Account) {
                        errorAccount.push(resp.Invalid_Account[k]);
                    }
                }
                if (errorAccount.length) {
                    resp.ActionStatus = ACTION_STATUS.FAIL;
                    resp.ErrorCode = ERROR_CODE_CUSTOM;
                    resp.ErrorInfo = '';
                    for (var i in errorAccount) {
                        var failCount = errorAccount[i];
                        for (var j in resp.UserProfileItem) {
                            if (resp.UserProfileItem[j].To_Account == failCount) {
                                var resultCode = resp.UserProfileItem[j].ResultCode;
                                resp.UserProfileItem[j].ResultInfo = "[" + resultCode + "]" + resp.UserProfileItem[j].ResultInfo;
                                resp.ErrorInfo += "账号:" + failCount + "," + resp.UserProfileItem[j].ResultInfo + "\n";
                                break;
                            }
                        }
                    }
                }
                if (resp.ActionStatus == ACTION_STATUS.FAIL) {
                    if (cbErr) cbErr(resp);
                } else if (cbOk) {
                    cbOk(resp);
                }
            }, cbErr);
        };

        //设置个人资料
        var proto_setProfilePortrait = function proto_setProfilePortrait(options, cbOk, cbErr) {
            if (!checkLogin(cbErr, true)) return;
            ConnManager.apiCall(SRV_NAME.PROFILE, "portrait_set", {
                'From_Account': ctx.identifier,
                'ProfileItem': options.ProfileItem
            }, function (resp) {
                for (var i in options.ProfileItem) {
                    var profile = options.ProfileItem[i];
                    if (profile.Tag == 'Tag_Profile_IM_Nick') {
                        ctx.identifierNick = profile.Value; //更新昵称
                        break;
                    }
                }
                if (cbOk) cbOk(resp);
            }, cbErr);
        };

        //增加黑名单
        var proto_addBlackList = function proto_addBlackList(options, cbOk, cbErr) {
            if (!checkLogin(cbErr, true)) return;
            ConnManager.apiCall(SRV_NAME.FRIEND, "black_list_add", {
                'From_Account': ctx.identifier,
                'To_Account': options.To_Account
            }, function (resp) {
                var newResp = convertErrorEn2ZhFriend(resp);
                if (newResp.ActionStatus == ACTION_STATUS.FAIL) {
                    if (cbErr) cbErr(newResp);
                } else if (cbOk) {
                    cbOk(newResp);
                }
            }, cbErr);
        };

        //删除黑名单
        var proto_deleteBlackList = function proto_deleteBlackList(options, cbOk, cbErr) {
            if (!checkLogin(cbErr, true)) return;
            ConnManager.apiCall(SRV_NAME.FRIEND, "black_list_delete", {
                'From_Account': ctx.identifier,
                'To_Account': options.To_Account
            }, function (resp) {
                var newResp = convertErrorEn2ZhFriend(resp);
                if (newResp.ActionStatus == ACTION_STATUS.FAIL) {
                    if (cbErr) cbErr(newResp);
                } else if (cbOk) {
                    cbOk(newResp);
                }
            }, cbErr);
        };

        //我的黑名单
        var proto_getBlackList = function proto_getBlackList(options, cbOk, cbErr) {
            if (!checkLogin(cbErr, true)) return;
            ConnManager.apiCall(SRV_NAME.FRIEND, "black_list_get", {
                'From_Account': ctx.identifier,
                'StartIndex': options.StartIndex,
                'MaxLimited': options.MaxLimited,
                'LastSequence': options.LastSequence
            }, cbOk, cbErr);
        };

        //获取最近联系人
        var proto_getRecentContactList = function proto_getRecentContactList(options, cbOk, cbErr) {
            if (!checkLogin(cbErr, true)) return;
            ConnManager.apiCall(SRV_NAME.RECENT_CONTACT, "get", {
                'From_Account': ctx.identifier,
                'Count': options.Count
            }, cbOk, cbErr);
        };

        //上传图片或文件
        var proto_uploadPic = function proto_uploadPic(options, cbOk, cbErr) {
            if (!checkLogin(cbErr, true)) return;
            var cmdName;
            if (isAccessFormalEnv()) {
                cmdName = 'pic_up';
            } else {
                cmdName = 'pic_up_test';
            }
            ConnManager.apiCall(SRV_NAME.PIC, cmdName, {
                'App_Version': VERSION_INFO.APP_VERSION,
                'From_Account': ctx.identifier,
                'To_Account': options.To_Account,
                'Seq': options.Seq,
                'Timestamp': options.Timestamp,
                'Random': options.Random,
                'File_Str_Md5': options.File_Str_Md5,
                'File_Size': options.File_Size,
                'File_Type': options.File_Type,
                'Server_Ver': VERSION_INFO.SERVER_VERSION,
                'Auth_Key': authkey,
                'Busi_Id': options.Busi_Id,
                'PkgFlag': options.PkgFlag,
                'Slice_Offset': options.Slice_Offset,
                'Slice_Size': options.Slice_Size,
                'Slice_Data': options.Slice_Data
            }, cbOk, cbErr);
        };

        //获取语音和文件下载IP和authkey
        var proto_getIpAndAuthkey = function proto_getIpAndAuthkey(cbOk, cbErr) {
            if (!checkLogin(cbErr, true)) return;
            ConnManager.apiCall(SRV_NAME.OPEN_IM, "authkey", {}, cbOk, cbErr);
        };

        //接口质量上报
        var proto_reportApiQuality = function proto_reportApiQuality(options, cbOk, cbErr) {
            if (!checkLogin(cbErr, true)) return;
            ConnManager.apiCall(SRV_NAME.IM_OPEN_STAT, "web_report", options, cbOk, cbErr);
        };

        var proto_getLongPollingId = function proto_getLongPollingId(options, cbOk, cbErr) {
            if (!checkLogin(cbErr, true)) return;
            ConnManager.apiCall(SRV_NAME.OPEN_IM, "getlongpollingid", {}, function (resp) {
                cbOk && cbOk(resp);
            }, cbErr);
        };

        var proto_applyDownload = function proto_applyDownload(options, cbOk, cbErr) {
            //把下载地址push到map中
            ConnManager.apiCall(SRV_NAME.PIC, "apply_download", options, cbOk, cbErr);
        };

        //end
        initBrowserInfo();
        // singleton object ConnManager
        var ConnManager = new function () {
            var onConnCallback = null; //回调函数
            this.init = function (onConnNotify, cbOk, cbErr) {
                if (onConnNotify) onConnCallback = onConnNotify;
            };
            this.callBack = function (info) {
                if (onConnCallback) onConnCallback(info);
            };
            this.clear = function () {
                onConnCallback = null;
            };
            //请求后台服务接口
            this.apiCall = function (type, cmd, data, cbOk, cbErr, timeout, isLongPolling) {
                //封装后台服务接口地址
                var url = getApiUrl(type, cmd, cbOk, cbErr);
                if (url == false) return;
                //发起ajax请求
                ajaxRequestJson("POST", url, data, timeout, isLongPolling, function (resp) {
                    var errorCode = null,
                        tempErrorInfo = '';
                    if (cmd == 'pic_up') {
                        data.Slice_Data = '';
                    }
                    var info = "\n request url: \n" + url + "\n request body: \n" + JSON.stringify(data) + "\n response: \n" + JSON.stringify(resp);
                    //成功
                    if (resp.ActionStatus == ACTION_STATUS.OK) {
                        log.info("[" + type + "][" + cmd + "]success: " + info);
                        if (cbOk) cbOk(resp); //回调
                        errorCode = 0;
                        tempErrorInfo = '';
                    } else {
                        errorCode = resp.ErrorCode;
                        tempErrorInfo = resp.ErrorInfo;
                        //报错
                        if (cbErr) {
                            resp.SrcErrorInfo = resp.ErrorInfo;
                            resp.ErrorInfo = "[" + type + "][" + cmd + "]failed: " + info;
                            if (cmd != 'longpolling' || resp.ErrorCode != longPollingTimeOutErrorCode) {
                                log.error(resp.ErrorInfo);
                            }
                            cbErr(resp);
                        }
                    }
                    reportApiQuality(cmd, errorCode, tempErrorInfo); //接口质量上报
                }, function (err) {
                    cbErr && cbErr(err);
                    reportApiQuality(cmd, err.ErrorCode, err.ErrorInfo); //接口质量上报
                });
            };
        }();
        // class Session
        var Session = function Session(type, id, name, icon, time, seq) {
            this._impl = {
                skey: Session.skey(type, id),
                type: type,
                id: id,
                name: name,
                icon: icon,
                unread: 0, //未读消息数
                isAutoRead: false,
                time: time >= 0 ? time : 0,
                curMaxMsgSeq: seq >= 0 ? seq : 0,
                msgs: [],
                isFinished: 1
            };
        };
        Session.skey = function (type, id) {
            return type + id;
        };
        Session.prototype.type = function () {
            return this._impl.type;
        };
        Session.prototype.id = function () {
            return this._impl.id;
        };
        Session.prototype.name = function () {
            return this._impl.name;
        };
        Session.prototype.icon = function () {
            return this._impl.icon;
        };
        Session.prototype.unread = function (val) {
            if (typeof val !== 'undefined') {
                this._impl.unread = val;
            } else {
                return this._impl.unread;
            }
        };
        Session.prototype.isFinished = function (val) {
            if (typeof val !== 'undefined') {
                this._impl.isFinished = val;
            } else {
                return this._impl.isFinished;
            }
        };
        Session.prototype.time = function () {
            return this._impl.time;
        };
        Session.prototype.curMaxMsgSeq = function (seq) {
            if (typeof seq !== 'undefined') {
                this._impl.curMaxMsgSeq = seq;
            } else {
                return this._impl.curMaxMsgSeq;
            }
        };
        Session.prototype.msgCount = function () {
            return this._impl.msgs.length;
        };
        Session.prototype.msg = function (index) {
            return this._impl.msgs[index];
        };
        Session.prototype.msgs = function () {
            return this._impl.msgs;
        };
        Session.prototype._impl_addMsg = function (msg, unread) {
            this._impl.msgs.push(msg);
            //if (!msg.isSend && msg.time > this._impl.time)
            if (msg.time > this._impl.time) this._impl.time = msg.time;
            //if (!msg.isSend && msg.seq > this._impl.curMaxMsgSeq)
            if (msg.seq > this._impl.curMaxMsgSeq) this._impl.curMaxMsgSeq = msg.seq;
            //自己发送的消息不计入未读数
            if (!msg.isSend && !this._impl.isAutoRead && unread) {
                this._impl.unread++;
            }
        };
        //class C2CMsgReadedItem
        var C2CMsgReadedItem = function C2CMsgReadedItem(toAccount, lastedMsgTime) {
            this.toAccount = toAccount;
            this.lastedMsgTime = lastedMsgTime;
        };

        // class Msg
        var Msg = function Msg(sess, isSend, seq, random, time, fromAccount, subType, fromAccountNick, fromAccountHeadurl) {
            this.sess = sess;
            this.subType = subType >= 0 ? subType : 0; //消息类型,c2c消息时，type取值为0；group消息时，type取值0和1，0-普通群消息，1-群提示消息
            this.fromAccount = fromAccount;
            this.fromAccountNick = fromAccountNick ? fromAccountNick : fromAccount;
            this.fromAccountHeadurl = fromAccountHeadurl || null;
            this.isSend = Boolean(isSend);
            this.seq = seq >= 0 ? seq : nextSeq();
            this.random = random >= 0 ? random : createRandom();
            this.time = time >= 0 ? time : unixtime();
            this.elems = [];
            var type = sess.type();
            switch (type) {
                case SESSION_TYPE.GROUP:
                    break;
                case SESSION_TYPE.C2C:
                default:
                    break;
            }
        };
        Msg.prototype.getSession = function () {
            return this.sess;
        };
        Msg.prototype.getType = function () {
            return this.subType;
        };
        Msg.prototype.getSubType = function () {
            return this.subType;
        };
        Msg.prototype.getFromAccount = function () {
            return this.fromAccount;
        };
        Msg.prototype.getFromAccountNick = function () {
            return this.fromAccountNick;
        };
        Msg.prototype.getIsSend = function () {
            return this.isSend;
        };
        Msg.prototype.getSeq = function () {
            return this.seq;
        };
        Msg.prototype.getTime = function () {
            return this.time;
        };
        Msg.prototype.getRandom = function () {
            return this.random;
        };
        Msg.prototype.getElems = function () {
            return this.elems;
        };
        Msg.prototype.getMsgUniqueId = function () {
            return this.uniqueId;
        };
        //文本
        Msg.prototype.addText = function (text) {
            this.addElem(new webim.Msg.Elem(MSG_ELEMENT_TYPE.TEXT, text));
        };
        //表情
        Msg.prototype.addFace = function (face) {
            this.addElem(new webim.Msg.Elem(MSG_ELEMENT_TYPE.FACE, face));
        };
        //图片
        Msg.prototype.addImage = function (image) {
            this.addElem(new webim.Msg.Elem(MSG_ELEMENT_TYPE.IMAGE, image));
        };
        //地理位置
        Msg.prototype.addLocation = function (location) {
            this.addElem(new webim.Msg.Elem(MSG_ELEMENT_TYPE.LOCATION, location));
        };
        //文件
        Msg.prototype.addFile = function (file) {
            this.addElem(new webim.Msg.Elem(MSG_ELEMENT_TYPE.FILE, file));
        };
        //自定义
        Msg.prototype.addCustom = function (custom) {
            this.addElem(new webim.Msg.Elem(MSG_ELEMENT_TYPE.CUSTOM, custom));
        };
        Msg.prototype.addElem = function (elem) {
            this.elems.push(elem);
        };
        Msg.prototype.toHtml = function () {
            var html = "";
            for (var i in this.elems) {
                var elem = this.elems[i];
                html += elem.toHtml();
            }
            return html;
        };

        // class Msg.Elem
        Msg.Elem = function (type, value) {
            this.type = type;
            this.content = value;
        };
        Msg.Elem.prototype.getType = function () {
            return this.type;
        };
        Msg.Elem.prototype.getContent = function () {
            return this.content;
        };
        Msg.Elem.prototype.toHtml = function () {
            var html;
            html = this.content.toHtml();
            return html;
        };

        // class Msg.Elem.Text
        Msg.Elem.Text = function (text) {
            this.text = tool.xssFilter(text);
        };
        Msg.Elem.Text.prototype.getText = function () {
            return this.text;
        };
        Msg.Elem.Text.prototype.toHtml = function () {
            return this.text;
        };

        // class Msg.Elem.Face
        Msg.Elem.Face = function (index, data) {
            this.index = index;
            this.data = data;
        };
        Msg.Elem.Face.prototype.getIndex = function () {
            return this.index;
        };
        Msg.Elem.Face.prototype.getData = function () {
            return this.data;
        };
        Msg.Elem.Face.prototype.toHtml = function () {
            var faceUrl = null;
            var index = emotionDataIndexs[this.data];
            var emotion = emotions[index];
            if (emotion && emotion[1]) {
                faceUrl = emotion[1];
            }
            if (faceUrl) {
                return "<img src='" + faceUrl + "'/>";
            } else {
                return this.data;
            }
        };

        // 地理位置消息 class Msg.Elem.Location
        Msg.Elem.Location = function (longitude, latitude, desc) {
            this.latitude = latitude; //纬度
            this.longitude = longitude; //经度
            this.desc = desc; //描述
        };
        Msg.Elem.Location.prototype.getLatitude = function () {
            return this.latitude;
        };
        Msg.Elem.Location.prototype.getLongitude = function () {
            return this.longitude;
        };
        Msg.Elem.Location.prototype.getDesc = function () {
            return this.desc;
        };
        Msg.Elem.Location.prototype.toHtml = function () {
            return '经度=' + this.longitude + ',纬度=' + this.latitude + ',描述=' + this.desc;
        };

        //图片消息
        // class Msg.Elem.Images
        Msg.Elem.Images = function (imageId, format) {
            this.UUID = imageId;
            if (typeof format !== 'number') {
                format = parseInt(IMAGE_FORMAT[format] || IMAGE_FORMAT['UNKNOWN'], 10);
            }
            this.ImageFormat = format;
            this.ImageInfoArray = [];
        };
        Msg.Elem.Images.prototype.addImage = function (image) {
            this.ImageInfoArray.push(image);
        };
        Msg.Elem.Images.prototype.toHtml = function () {
            var smallImage = this.getImage(IMAGE_TYPE.SMALL);
            var bigImage = this.getImage(IMAGE_TYPE.LARGE);
            var oriImage = this.getImage(IMAGE_TYPE.ORIGIN);
            if (!bigImage) {
                bigImage = smallImage;
            }
            if (!oriImage) {
                oriImage = smallImage;
            }
            return "<img src='" + smallImage.getUrl() + "#" + bigImage.getUrl() + "#" + oriImage.getUrl() + "' style='CURSOR: hand' id='" + this.getImageId() + "' bigImgUrl='" + bigImage.getUrl() + "' onclick='imageClick(this)' />";
        };
        Msg.Elem.Images.prototype.getImageId = function () {
            return this.UUID;
        };
        Msg.Elem.Images.prototype.getImageFormat = function () {
            return this.ImageFormat;
        };
        Msg.Elem.Images.prototype.getImage = function (type) {
            for (var i in this.ImageInfoArray) {
                if (this.ImageInfoArray[i].getType() == type) {
                    return this.ImageInfoArray[i];
                }
            }
            var img = null;
            this.ImageInfoArray.forEach(function (image) {
                if (image.getType() == type) {
                    img = image;
                }
            });
            return img;
        };
        // class Msg.Elem.Images.Image
        Msg.Elem.Images.Image = function (type, size, width, height, url) {
            this.type = type;
            this.size = size;
            this.width = width;
            this.height = height;
            this.url = url;
        };
        Msg.Elem.Images.Image.prototype.getType = function () {
            return this.type;
        };
        Msg.Elem.Images.Image.prototype.getSize = function () {
            return this.size;
        };
        Msg.Elem.Images.Image.prototype.getWidth = function () {
            return this.width;
        };
        Msg.Elem.Images.Image.prototype.getHeight = function () {
            return this.height;
        };
        Msg.Elem.Images.Image.prototype.getUrl = function () {
            return this.url;
        };

        // class Msg.Elem.Sound
        Msg.Elem.Sound = function (uuid, second, size, senderId, receiverId, downFlag, chatType) {
            this.uuid = uuid; //文件id
            this.second = second; //时长，单位：秒
            this.size = size; //大小，单位：字节
            this.senderId = senderId; //发送者
            this.receiverId = receiverId; //接收方id
            this.downFlag = downFlag; //下载标志位
            this.busiId = chatType == SESSION_TYPE.C2C ? 2 : 1; //busi_id ( 1：群    2:C2C)

            //根据不同情况拉取数据
            //是否需要申请下载地址  0:到架平申请  1:到cos申请  2:不需要申请, 直接拿url下载
            if (this.downFlag !== undefined && this.busiId !== undefined) {
                getFileDownUrlV2(uuid, senderId, second, downFlag, receiverId, this.busiId, UPLOAD_RES_TYPE.SOUND);
            } else {
                this.downUrl = getSoundDownUrl(uuid, senderId, second); //下载地址
            }
        };
        Msg.Elem.Sound.prototype.getUUID = function () {
            return this.uuid;
        };
        Msg.Elem.Sound.prototype.getSecond = function () {
            return this.second;
        };
        Msg.Elem.Sound.prototype.getSize = function () {
            return this.size;
        };
        Msg.Elem.Sound.prototype.getSenderId = function () {
            return this.senderId;
        };
        Msg.Elem.Sound.prototype.getDownUrl = function () {
            return this.downUrl;
        };
        Msg.Elem.Sound.prototype.toHtml = function () {
            if (BROWSER_INFO.type == 'ie' && parseInt(BROWSER_INFO.ver) <= 8) {
                return '[这是一条语音消息]demo暂不支持ie8(含)以下浏览器播放语音,语音URL:' + this.downUrl;
            }
            return '<audio id="uuid_' + this.uuid + '" src="' + this.downUrl + '" controls="controls" onplay="onChangePlayAudio(this)" preload="none"></audio>';
        };

        // class Msg.Elem.File
        Msg.Elem.File = function (uuid, name, size, senderId, receiverId, downFlag, chatType) {
            this.uuid = uuid; //文件id
            this.name = name; //文件名
            this.size = size; //大小，单位：字节
            this.senderId = senderId; //发送者
            this.receiverId = receiverId; //接收方id
            this.downFlag = downFlag; //下载标志位

            this.busiId = chatType == SESSION_TYPE.C2C ? 2 : 1; //busi_id ( 1：群    2:C2C)
            //根据不同情况拉取数据
            //是否需要申请下载地址  0:到架平申请  1:到cos申请  2:不需要申请, 直接拿url下载
            if (downFlag !== undefined && busiId !== undefined) {
                getFileDownUrlV2(uuid, senderId, name, downFlag, receiverId, this.busiId, UPLOAD_RES_TYPE.FILE);
            } else {
                this.downUrl = getFileDownUrl(uuid, senderId, name); //下载地址
            }
        };
        Msg.Elem.File.prototype.getUUID = function () {
            return this.uuid;
        };
        Msg.Elem.File.prototype.getName = function () {
            return this.name;
        };
        Msg.Elem.File.prototype.getSize = function () {
            return this.size;
        };
        Msg.Elem.File.prototype.getSenderId = function () {
            return this.senderId;
        };
        Msg.Elem.File.prototype.getDownUrl = function () {
            return this.downUrl;
        };
        Msg.Elem.File.prototype.getDownFlag = function () {
            return this.downFlag;
        };
        Msg.Elem.File.prototype.toHtml = function () {
            var fileSize, unitStr;
            fileSize = this.size;
            unitStr = "Byte";
            if (this.size >= 1024) {
                fileSize = Math.round(this.size / 1024);
                unitStr = "KB";
            }
            return {
                uuid: this.uuid,
                name: this.name,
                size: fileSize,
                unitStr: unitStr
            };
        };

        // class Msg.Elem.GroupTip 群提示消息对象
        Msg.Elem.GroupTip = function (opType, opUserId, groupId, groupName, userIdList, userinfo) {
            this.opType = opType; //操作类型
            this.opUserId = opUserId; //操作者id
            this.groupId = groupId; //群id
            this.groupName = groupName; //群名称
            this.userIdList = userIdList ? userIdList : []; //被操作的用户id列表
            this.groupInfoList = []; //新的群资料信息，群资料变更时才有值
            this.memberInfoList = []; //新的群成员资料信息，群成员资料变更时才有值
            this.groupMemberNum = null; //群成员数，操作类型为加群或者退群时才有值
            this.userinfo = userinfo ? userinfo : []; //被操作的用户信息列表列表
        };
        Msg.Elem.GroupTip.prototype.addGroupInfo = function (groupInfo) {
            this.groupInfoList.push(groupInfo);
        };
        Msg.Elem.GroupTip.prototype.addMemberInfo = function (memberInfo) {
            this.memberInfoList.push(memberInfo);
        };
        Msg.Elem.GroupTip.prototype.getOpType = function () {
            return this.opType;
        };
        Msg.Elem.GroupTip.prototype.getOpUserId = function () {
            return this.opUserId;
        };
        Msg.Elem.GroupTip.prototype.getGroupId = function () {
            return this.groupId;
        };
        Msg.Elem.GroupTip.prototype.getGroupName = function () {
            return this.groupName;
        };
        Msg.Elem.GroupTip.prototype.getUserIdList = function () {
            return this.userIdList;
        };
        Msg.Elem.GroupTip.prototype.getUserInfo = function () {
            return this.userinfo;
        };
        Msg.Elem.GroupTip.prototype.getGroupInfoList = function () {
            return this.groupInfoList;
        };
        Msg.Elem.GroupTip.prototype.getMemberInfoList = function () {
            return this.memberInfoList;
        };
        Msg.Elem.GroupTip.prototype.getGroupMemberNum = function () {
            return this.groupMemberNum;
        };
        Msg.Elem.GroupTip.prototype.setGroupMemberNum = function (groupMemberNum) {
            return this.groupMemberNum = groupMemberNum;
        };
        Msg.Elem.GroupTip.prototype.toHtml = function () {
            var text = "[群提示消息]";
            var maxIndex = GROUP_TIP_MAX_USER_COUNT - 1;
            switch (this.opType) {
                case GROUP_TIP_TYPE.JOIN:
                    //加入群
                    text += this.opUserId + "邀请了";
                    for (var m in this.userIdList) {
                        text += this.userIdList[m] + ",";
                        if (this.userIdList.length > GROUP_TIP_MAX_USER_COUNT && m == maxIndex) {
                            text += "等" + this.userIdList.length + "人";
                            break;
                        }
                    }
                    text += "加入该群";
                    break;
                case GROUP_TIP_TYPE.QUIT:
                    //退出群
                    text += this.opUserId + "主动退出该群";
                    break;
                case GROUP_TIP_TYPE.KICK:
                    //踢出群
                    text += this.opUserId + "将";
                    for (var m in this.userIdList) {
                        text += this.userIdList[m] + ",";
                        if (this.userIdList.length > GROUP_TIP_MAX_USER_COUNT && m == maxIndex) {
                            text += "等" + this.userIdList.length + "人";
                            break;
                        }
                    }
                    text += "踢出该群";
                    break;
                case GROUP_TIP_TYPE.SET_ADMIN:
                    //设置管理员
                    text += this.opUserId + "将";
                    for (var m in this.userIdList) {
                        text += this.userIdList[m] + ",";
                        if (this.userIdList.length > GROUP_TIP_MAX_USER_COUNT && m == maxIndex) {
                            text += "等" + this.userIdList.length + "人";
                            break;
                        }
                    }
                    text += "设为管理员";
                    break;
                case GROUP_TIP_TYPE.CANCEL_ADMIN:
                    //取消管理员
                    text += this.opUserId + "取消";
                    for (var m in this.userIdList) {
                        text += this.userIdList[m] + ",";
                        if (this.userIdList.length > GROUP_TIP_MAX_USER_COUNT && m == maxIndex) {
                            text += "等" + this.userIdList.length + "人";
                            break;
                        }
                    }
                    text += "的管理员资格";
                    break;

                case GROUP_TIP_TYPE.MODIFY_GROUP_INFO:
                    //群资料变更
                    text += this.opUserId + "修改了群资料：";
                    for (var m in this.groupInfoList) {
                        var type = this.groupInfoList[m].getType();
                        var value = this.groupInfoList[m].getValue();
                        switch (type) {
                            case GROUP_TIP_MODIFY_GROUP_INFO_TYPE.FACE_URL:
                                text += "群头像为" + value + "; ";
                                break;
                            case GROUP_TIP_MODIFY_GROUP_INFO_TYPE.NAME:
                                text += "群名称为" + value + "; ";
                                break;
                            case GROUP_TIP_MODIFY_GROUP_INFO_TYPE.OWNER:
                                text += "群主为" + value + "; ";
                                break;
                            case GROUP_TIP_MODIFY_GROUP_INFO_TYPE.NOTIFICATION:
                                text += "群公告为" + value + "; ";
                                break;
                            case GROUP_TIP_MODIFY_GROUP_INFO_TYPE.INTRODUCTION:
                                text += "群简介为" + value + "; ";
                                break;
                            default:
                                text += "未知信息为:type=" + type + ",value=" + value + "; ";
                                break;
                        }
                    }
                    break;

                case GROUP_TIP_TYPE.MODIFY_MEMBER_INFO:
                    //群成员资料变更(禁言时间)
                    text += this.opUserId + "修改了群成员资料:";
                    for (var m in this.memberInfoList) {
                        var userId = this.memberInfoList[m].getUserId();
                        var shutupTime = this.memberInfoList[m].getShutupTime();
                        text += userId + ": ";
                        if (shutupTime != null && shutupTime !== undefined) {
                            if (shutupTime == 0) {
                                text += "取消禁言; ";
                            } else {
                                text += "禁言" + shutupTime + "秒; ";
                            }
                        } else {
                            text += " shutupTime为空";
                        }
                        if (this.memberInfoList.length > GROUP_TIP_MAX_USER_COUNT && m == maxIndex) {
                            text += "等" + this.memberInfoList.length + "人";
                            break;
                        }
                    }
                    break;

                case GROUP_TIP_TYPE.READED:
                    //消息已读
                    /**/
                    Log.info("消息已读同步");
                    break;
                default:
                    text += "未知群提示消息类型：type=" + this.opType;
                    break;
            }
            return text;
        };

        // class Msg.Elem.GroupTip.GroupInfo，变更的群资料信息对象
        Msg.Elem.GroupTip.GroupInfo = function (type, value) {
            this.type = type; //群资料信息类型
            this.value = value; //对应的值
        };
        Msg.Elem.GroupTip.GroupInfo.prototype.getType = function () {
            return this.type;
        };
        Msg.Elem.GroupTip.GroupInfo.prototype.getValue = function () {
            return this.value;
        };

        // class Msg.Elem.GroupTip.MemberInfo，变更的群成员资料信息对象
        Msg.Elem.GroupTip.MemberInfo = function (userId, shutupTime) {
            this.userId = userId; //群成员id
            this.shutupTime = shutupTime; //群成员被禁言时间，0表示取消禁言，大于0表示被禁言时长，单位：秒
        };
        Msg.Elem.GroupTip.MemberInfo.prototype.getUserId = function () {
            return this.userId;
        };
        Msg.Elem.GroupTip.MemberInfo.prototype.getShutupTime = function () {
            return this.shutupTime;
        };

        // 自定义消息类型 class Msg.Elem.Custom
        Msg.Elem.Custom = function (data, desc, ext) {
            this.data = data; //数据
            this.desc = desc; //描述
            this.ext = ext; //扩展字段
        };
        Msg.Elem.Custom.prototype.getData = function () {
            return this.data;
        };
        Msg.Elem.Custom.prototype.getDesc = function () {
            return this.desc;
        };
        Msg.Elem.Custom.prototype.getExt = function () {
            return this.ext;
        };
        Msg.Elem.Custom.prototype.toHtml = function () {
            return this.data;
        };

        // singleton object MsgStore
        var MsgStore = new function () {
            var sessMap = {}; //跟所有用户或群的聊天记录MAP
            var sessTimeline = []; //按时间降序排列的会话列表
            msgCache = {}; //消息缓存，用于判重
            //C2C
            this.cookie = ""; //上一次拉取新c2c消息的cookie
            this.syncFlag = 0; //上一次拉取新c2c消息的是否继续拉取标记

            var visitSess = function visitSess(visitor) {
                for (var i in sessMap) {
                    visitor(sessMap[i]);
                }
            };
            //消息查重
            var checkDupMsg = function checkDupMsg(msg) {
                var dup = false;
                var first_key = msg.sess._impl.skey;
                var second_key = msg.isSend + msg.seq + msg.random;
                var tempMsg = msgCache[first_key] && msgCache[first_key][second_key];
                if (tempMsg) {
                    dup = true;
                }
                if (msgCache[first_key]) {
                    msgCache[first_key][second_key] = {
                        time: msg.time
                    };
                } else {
                    msgCache[first_key] = {};
                    msgCache[first_key][second_key] = {
                        time: msg.time
                    };
                }
                return dup;
            };

            this.sessMap = function () {
                return sessMap;
            };
            this.sessCount = function () {
                return sessTimeline.length;
            };
            this.sessByTypeId = function (type, id) {
                var skey = Session.skey(type, id);
                if (skey === undefined || skey == null) return null;
                return sessMap[skey];
            };
            this.delSessByTypeId = function (type, id) {
                var skey = Session.skey(type, id);
                if (skey === undefined || skey == null) return false;
                if (sessMap[skey]) {
                    delete sessMap[skey];
                    delete msgCache[skey];
                }
                return true;
            };
            this.resetCookieAndSyncFlag = function () {
                this.cookie = "";
                this.syncFlag = 0;
            };

            //切换将当前会话的自动读取消息标志为isOn,重置其他会话的自动读取消息标志为false
            this.setAutoRead = function (selSess, isOn, isResetAll) {
                if (isResetAll) visitSess(function (s) {
                    s._impl.isAutoRead = false;
                });
                if (selSess) {
                    selSess._impl.isAutoRead = isOn; //
                    if (isOn) {
                        //是否调用已读上报接口
                        selSess._impl.unread = 0;

                        if (selSess._impl.type == SESSION_TYPE.C2C) {
                            //私聊消息已读上报
                            var tmpC2CMsgReadedItem = [];
                            tmpC2CMsgReadedItem.push(new C2CMsgReadedItem(selSess._impl.id, selSess._impl.time));
                            //调用C2C消息已读上报接口
                            proto_c2CMsgReaded(MsgStore.cookie, tmpC2CMsgReadedItem, function (resp) {
                                log.info("[setAutoRead]: c2CMsgReaded success");
                            }, function (err) {
                                log.error("[setAutoRead}: c2CMsgReaded failed:" + err.ErrorInfo);
                            });
                        } else if (selSess._impl.type == SESSION_TYPE.GROUP) {
                            //群聊消息已读上报
                            var tmpOpt = {
                                'GroupId': selSess._impl.id,
                                'MsgReadedSeq': selSess._impl.curMaxMsgSeq
                            };
                            //调用group消息已读上报接口
                            proto_groupMsgReaded(tmpOpt, function (resp) {
                                log.info("groupMsgReaded success");
                            }, function (err) {
                                log.error("groupMsgReaded failed:" + err.ErrorInfo);
                            });
                        }
                    }
                }
            };

            this.c2CMsgReaded = function (opts, cbOk, cbErr) {
                var tmpC2CMsgReadedItem = [];
                tmpC2CMsgReadedItem.push(new C2CMsgReadedItem(opts.To_Account, opts.LastedMsgTime));
                //调用C2C消息已读上报接口
                proto_c2CMsgReaded(MsgStore.cookie, tmpC2CMsgReadedItem, function (resp) {
                    if (cbOk) {
                        log.info("c2CMsgReaded success");
                        cbOk(resp);
                    }
                }, function (err) {
                    if (cbErr) {
                        log.error("c2CMsgReaded failed:" + err.ErrorInfo);
                        cbErr(err);
                    }
                });
            };

            this.addSession = function (sess) {
                sessMap[sess._impl.skey] = sess;
            };
            this.delSession = function (sess) {
                delete sessMap[sess._impl.skey];
            };
            this.clear = function () {
                sessMap = {}; //跟所有用户或群的聊天记录MAP
                sessTimeline = []; //按时间降序排列的会话列表
                msgCache = {}; //消息缓存，用于判重
                this.cookie = ""; //上一次拉取新c2c消息的cookie
                this.syncFlag = 0; //上一次拉取新c2c消息的是否继续拉取标记
            };
            this.addMsg = function (msg, unread) {
                if (checkDupMsg(msg)) return false;
                var sess = msg.sess;
                if (!sessMap[sess._impl.skey]) this.addSession(sess);
                sess._impl_addMsg(msg, unread);
                return true;
            };
            this.updateTimeline = function () {
                var arr = new Array();
                visitSess(function (sess) {
                    arr.push(sess);
                });
                arr.sort(function (a, b) {
                    return b.time - a.time;
                });
                sessTimeline = arr;
            };
        }();
        // singleton object MsgManager
        var MsgManager = new function () {

            var onMsgCallback = null; //新消息(c2c和group)回调

            var onGroupInfoChangeCallback = null; //群资料变化回调
            //收到新群系统消息回调列表
            var onGroupSystemNotifyCallbacks = {
                "1": null,
                "2": null,
                "3": null,
                "4": null,
                "5": null,
                "6": null,
                "7": null,
                "8": null,
                "9": null,
                "10": null,
                "11": null,
                "15": null,
                "255": null,
                "12": null
            };
            //监听好友系统通知函数
            var onFriendSystemNotifyCallbacks = {
                "1": null,
                "2": null,
                "3": null,
                "4": null,
                "5": null,
                "6": null,
                "7": null,
                "8": null
            };

            var onProfileSystemNotifyCallbacks = {
                "1": null
            };

            var onKickedEventCall = null;

            var onMsgReadCallback = null;

            //普通长轮询
            var longPollingOn = false; //是否开启普通长轮询
            var isLongPollingRequesting = false; //是否在长轮询ing
            var notifySeq = 0; //c2c通知seq
            var noticeSeq = 0; //群消息seq

            //大群长轮询
            var onBigGroupMsgCallback = null; //大群消息回调
            var bigGroupLongPollingOn = false; //是否开启长轮询
            var bigGroupLongPollingStartSeq = 0; //请求拉消息的起始seq(大群长轮询)
            var bigGroupLongPollingHoldTime = 90; //客户端长轮询的超时时间，单位是秒(大群长轮询)
            var bigGroupLongPollingKey = null; //客户端加入群组后收到的的Key(大群长轮询)
            var bigGroupLongPollingMsgMap = {}; //记录收到的群消息数
            var onC2cEventCallbacks = {
                "92": null, //消息已读通知,
                "96": null
            };;
            var onAppliedDownloadUrl = null;

            var getLostGroupMsgCount = 0; //补拉丢失的群消息次数
            //我的群当前最大的seq
            var myGroupMaxSeqs = {}; //用于补拉丢失的群消息

            var groupSystemMsgsCache = {}; //群组系统消息缓存,用于判重

            //设置长轮询开关
            //isOn=true 开启
            //isOn=false 停止
            this.setLongPollingOn = function (isOn) {
                longPollingOn = isOn;
            };
            this.getLongPollingOn = function () {
                return longPollingOn;
            };

            //重置长轮询变量
            this.resetLongPollingInfo = function () {
                longPollingOn = false;
                notifySeq = 0;
                noticeSeq = 0;
            };

            //设置大群长轮询开关
            //isOn=true 开启
            //isOn=false 停止
            this.setBigGroupLongPollingOn = function (isOn) {
                bigGroupLongPollingOn = isOn;
            };
            //设置大群长轮询key
            this.setBigGroupLongPollingKey = function (key) {
                bigGroupLongPollingKey = key;
            };
            //重置大群长轮询变量
            this.resetBigGroupLongPollingInfo = function () {
                bigGroupLongPollingOn = false;
                bigGroupLongPollingStartSeq = 0;
                bigGroupLongPollingKey = null;
                bigGroupLongPollingMsgMap = {};
            };

            //设置群消息数据条数
            this.setBigGroupLongPollingMsgMap = function (groupId, count) {
                var bigGroupLongPollingMsgCount = bigGroupLongPollingMsgMap[groupId];
                if (bigGroupLongPollingMsgCount) {
                    bigGroupLongPollingMsgCount = parseInt(bigGroupLongPollingMsgCount) + count;
                    bigGroupLongPollingMsgMap[groupId] = bigGroupLongPollingMsgCount;
                } else {
                    bigGroupLongPollingMsgMap[groupId] = count;
                }
            };

            //重置
            this.clear = function () {

                onGroupInfoChangeCallback = null;
                onGroupSystemNotifyCallbacks = {
                    "1": null, //申请加群请求（只有管理员会收到）
                    "2": null, //申请加群被同意（只有申请人能够收到）
                    "3": null, //申请加群被拒绝（只有申请人能够收到）
                    "4": null, //被管理员踢出群(只有被踢者接收到)
                    "5": null, //群被解散(全员接收)
                    "6": null, //创建群(创建者接收)
                    "7": null, //邀请加群(被邀请者接收)
                    "8": null, //主动退群(主动退出者接收)
                    "9": null, //设置管理员(被设置者接收)
                    "10": null, //取消管理员(被取消者接收)
                    "11": null, //群已被回收(全员接收)
                    "15": null, //群已被回收(全员接收)
                    "255": null, //用户自定义通知(默认全员接收)
                    "12": null //邀请加群(被邀请者需要同意)
                };
                onFriendSystemNotifyCallbacks = {
                    "1": null, //好友表增加
                    "2": null, //好友表删除
                    "3": null, //未决增加
                    "4": null, //未决删除
                    "5": null, //黑名单增加
                    "6": null, //黑名单删除
                    "7": null, //未决已读上报
                    "8": null //好友信息(备注，分组)变更
                };
                onProfileSystemNotifyCallbacks = {
                    "1": null //资料修改
                };
                //重置普通长轮询参数
                onMsgCallback = null;
                longPollingOn = false;
                notifySeq = 0; //c2c新消息通知seq
                noticeSeq = 0; //group新消息seq

                //重置大群长轮询参数
                onBigGroupMsgCallback = null;
                bigGroupLongPollingOn = false;
                bigGroupLongPollingStartSeq = 0;
                bigGroupLongPollingKey = null;
                bigGroupLongPollingMsgMap = {};

                groupSystemMsgsCache = {};

                ipList = []; //文件下载地址
                authkey = null; //文件下载票据
                expireTime = null; //票据超时时间
            };

            //初始化文件下载ip和票据
            var initIpAndAuthkey = function initIpAndAuthkey(cbOk, cbErr) {
                proto_getIpAndAuthkey(function (resp) {
                    ipList = resp.IpList;
                    authkey = resp.AuthKey;
                    expireTime = resp.ExpireTime;
                    if (cbOk) cbOk(resp);
                }, function (err) {
                    log.error("initIpAndAuthkey failed:" + err.ErrorInfo);
                    if (cbErr) cbErr(err);
                });
            };

            //初始化我的群当前最大的seq，用于补拉丢失的群消息
            var initMyGroupMaxSeqs = function initMyGroupMaxSeqs(cbOk, cbErr) {
                var opts = {
                    'Member_Account': ctx.identifier,
                    'Limit': 1000,
                    'Offset': 0,
                    'GroupBaseInfoFilter': ['NextMsgSeq']
                };
                proto_getJoinedGroupListHigh(opts, function (resp) {
                    if (!resp.GroupIdList || resp.GroupIdList.length == 0) {
                        log.info("initMyGroupMaxSeqs: 目前还没有加入任何群组");
                        if (cbOk) cbOk(resp);
                        return;
                    }
                    for (var i = 0; i < resp.GroupIdList.length; i++) {
                        var group_id = resp.GroupIdList[i].GroupId;
                        var curMaxSeq = resp.GroupIdList[i].NextMsgSeq - 1;
                        myGroupMaxSeqs[group_id] = curMaxSeq;
                    }

                    if (cbOk) cbOk(resp);
                }, function (err) {
                    log.error("initMyGroupMaxSeqs failed:" + err.ErrorInfo);
                    if (cbErr) cbErr(err);
                });
            };

            //补拉群消息
            var getLostGroupMsgs = function getLostGroupMsgs(groupId, reqMsgSeq, reqMsgNumber) {
                getLostGroupMsgCount++;
                //发起一个拉群群消息请求
                var tempOpts = {
                    'GroupId': groupId,
                    'ReqMsgSeq': reqMsgSeq,
                    'ReqMsgNumber': reqMsgNumber
                };
                //发起一个拉群群消息请求
                log.warn("第" + getLostGroupMsgCount + "次补齐群消息,参数=" + JSON.stringify(tempOpts));
                MsgManager.syncGroupMsgs(tempOpts);
            };

            //更新群当前最大消息seq
            var updateMyGroupCurMaxSeq = function updateMyGroupCurMaxSeq(groupId, msgSeq) {
                //更新myGroupMaxSeqs中的群最大seq
                var curMsgSeq = myGroupMaxSeqs[groupId];
                if (curMsgSeq) {
                    //如果存在，比较大小
                    if (msgSeq > curMsgSeq) {
                        myGroupMaxSeqs[groupId] = msgSeq;
                    }
                } else {
                    //不存在，新增
                    myGroupMaxSeqs[groupId] = msgSeq;
                }
            };

            //添加群消息列表
            var addGroupMsgList = function addGroupMsgList(msgs, new_group_msgs) {
                for (var p in msgs) {
                    var newGroupMsg = msgs[p];
                    //发群消息时，长轮询接口会返回用户自己发的群消息
                    //if(newGroupMsg.From_Account && newGroupMsg.From_Account!=ctx.identifier ){
                    if (newGroupMsg.From_Account) {
                        //false-不是主动拉取的历史消息
                        //true-需要保存到sdk本地session,并且需要判重
                        var msg = handlerGroupMsg(newGroupMsg, false, true);
                        if (msg) {
                            //不为空，加到新消息里
                            new_group_msgs.push(msg);
                        }
                        //更新myGroupMaxSeqs中的群最大seq
                        updateMyGroupCurMaxSeq(newGroupMsg.ToGroupId, newGroupMsg.MsgSeq);
                    }
                }
                return new_group_msgs;
            };

            //处理收到的群普通和提示消息
            var handlerOrdinaryAndTipC2cMsgs = function handlerOrdinaryAndTipC2cMsgs(eventType, groupMsgArray) {
                var groupMsgMap = {}; //保存收到的C2c消息信息（群号，最小，最大消息seq，消息列表）
                var new_group_msgs = [];
                var minGroupMsgSeq = 99999999;
                var maxGroupMsgSeq = -1;
                for (var j in groupMsgArray) {

                    var groupMsgs = groupMsgMap[groupMsgArray[j].ToGroupId];
                    if (!groupMsgs) {
                        groupMsgs = groupMsgMap[groupMsgArray[j].ToGroupId] = {
                            "min": minGroupMsgSeq, //收到新消息最小seq
                            "max": maxGroupMsgSeq, //收到新消息最大seq
                            "msgs": [] //收到的新消息
                        };
                    }
                    //更新长轮询的群NoticeSeq
                    if (groupMsgArray[j].NoticeSeq > noticeSeq) {
                        log.warn("noticeSeq=" + noticeSeq + ",msgNoticeSeq=" + groupMsgArray[j].NoticeSeq);
                        noticeSeq = groupMsgArray[j].NoticeSeq;
                    }
                    groupMsgArray[j].Event = eventType;
                    groupMsgMap[groupMsgArray[j].ToGroupId].msgs.push(groupMsgArray[j]); //新增一条消息
                    if (groupMsgArray[j].MsgSeq < groupMsgs.min) {
                        //记录最小的消息seq
                        groupMsgMap[groupMsgArray[j].ToGroupId].min = groupMsgArray[j].MsgSeq;
                    }
                    if (groupMsgArray[j].MsgSeq > groupMsgs.max) {
                        //记录最大的消息seq
                        groupMsgMap[groupMsgArray[j].ToGroupId].max = groupMsgArray[j].MsgSeq;
                    }
                }

                for (var groupId in groupMsgMap) {
                    var tempCount = groupMsgMap[groupId].max - groupMsgMap[groupId].min + 1; //收到的新的群消息数
                    var curMaxMsgSeq = myGroupMaxSeqs[groupId]; //获取本地保存的群最大消息seq
                    if (curMaxMsgSeq) {
                        //存在这个群的最大消息seq
                        //高并发情况下，长轮询可能存在丢消息，这时需要客户端通过拉取群消息接口补齐下
                        //1、如果收到的新消息最小seq比当前最大群消息seq大于1，则表示收到的群消息发生跳跃，需要补齐
                        //2、收到的新群消息seq存在不连续情况，也需要补齐
                        if (groupMsgMap[groupId].min - curMaxMsgSeq > 1 || groupMsgMap[groupId].msgs.length < tempCount) {
                            //发起一个拉群群消息请求
                            log.warn("发起一次补齐群消息请求,curMaxMsgSeq=" + curMaxMsgSeq + ", minMsgSeq=" + groupMsgMap[groupId].min + ", maxMsgSeq=" + groupMsgMap[groupId].max + ", msgs.length=" + groupMsgMap[groupId].msgs.length + ", tempCount=" + tempCount);
                            getLostGroupMsgs(groupId, groupMsgMap[groupId].max, groupMsgMap[groupId].max - curMaxMsgSeq);
                            //更新myGroupMaxSeqs中的群最大seq
                            updateMyGroupCurMaxSeq(groupId, groupMsgMap[groupId].max);
                        } else {
                            new_group_msgs = addGroupMsgList(groupMsgMap[groupId].msgs, new_group_msgs);
                        }
                    } else {
                        //不存在该群的最大消息seq
                        log.warn("不存在该群的最大消息seq，群id=" + groupId);
                        //高并发情况下，长轮询可能存在丢消息，这时需要客户端通过拉取群消息接口补齐下
                        //1、收到的新群消息seq存在不连续情况，也需要补齐
                        if (groupMsgMap[groupId].msgs.length < tempCount) {
                            //发起一个拉群群消息请求
                            log.warn("发起一次补齐群消息请求,minMsgSeq=" + groupMsgMap[groupId].min + ", maxMsgSeq=" + groupMsgMap[groupId].max + ", msgs.length=" + groupMsgMap[groupId].msgs.length + ", tempCount=" + tempCount);
                            getLostGroupMsgs(groupId, groupMsgMap[groupId].max, tempCount);
                            //更新myGroupMaxSeqs中的群最大seq
                            updateMyGroupCurMaxSeq(groupId, groupMsgMap[groupId].max);
                        } else {
                            new_group_msgs = addGroupMsgList(groupMsgMap[groupId].msgs, new_group_msgs);
                        }
                    }
                }
                if (new_group_msgs.length) {
                    MsgStore.updateTimeline();
                }
                if (onMsgCallback && new_group_msgs.length) onMsgCallback(new_group_msgs);
            };

            //处理收到的群普通和提示消息
            var handlerOrdinaryAndTipGroupMsgs = function handlerOrdinaryAndTipGroupMsgs(eventType, groupMsgArray) {
                var groupMsgMap = {}; //保存收到的群消息信息（群号，最小，最大消息seq，消息列表）
                var new_group_msgs = [];
                var minGroupMsgSeq = 99999999;
                var maxGroupMsgSeq = -1;
                for (var j in groupMsgArray) {

                    var groupMsgs = groupMsgMap[groupMsgArray[j].ToGroupId];
                    if (!groupMsgs) {
                        groupMsgs = groupMsgMap[groupMsgArray[j].ToGroupId] = {
                            "min": minGroupMsgSeq, //收到新消息最小seq
                            "max": maxGroupMsgSeq, //收到新消息最大seq
                            "msgs": [] //收到的新消息
                        };
                    }
                    //更新长轮询的群NoticeSeq
                    if (groupMsgArray[j].NoticeSeq > noticeSeq) {
                        log.warn("noticeSeq=" + noticeSeq + ",msgNoticeSeq=" + groupMsgArray[j].NoticeSeq);
                        noticeSeq = groupMsgArray[j].NoticeSeq;
                    }
                    groupMsgArray[j].Event = eventType;
                    groupMsgMap[groupMsgArray[j].ToGroupId].msgs.push(groupMsgArray[j]); //新增一条消息
                    if (groupMsgArray[j].MsgSeq < groupMsgs.min) {
                        //记录最小的消息seq
                        groupMsgMap[groupMsgArray[j].ToGroupId].min = groupMsgArray[j].MsgSeq;
                    }
                    if (groupMsgArray[j].MsgSeq > groupMsgs.max) {
                        //记录最大的消息seq
                        groupMsgMap[groupMsgArray[j].ToGroupId].max = groupMsgArray[j].MsgSeq;
                    }
                }

                for (var groupId in groupMsgMap) {
                    var tempCount = groupMsgMap[groupId].max - groupMsgMap[groupId].min + 1; //收到的新的群消息数
                    var curMaxMsgSeq = myGroupMaxSeqs[groupId]; //获取本地保存的群最大消息seq
                    if (curMaxMsgSeq) {
                        //存在这个群的最大消息seq
                        //高并发情况下，长轮询可能存在丢消息，这时需要客户端通过拉取群消息接口补齐下
                        //1、如果收到的新消息最小seq比当前最大群消息seq大于1，则表示收到的群消息发生跳跃，需要补齐
                        //2、收到的新群消息seq存在不连续情况，也需要补齐
                        if (groupMsgMap[groupId].min - curMaxMsgSeq > 1 || groupMsgMap[groupId].msgs.length < tempCount) {
                            //发起一个拉群群消息请求
                            log.warn("发起一次补齐群消息请求,curMaxMsgSeq=" + curMaxMsgSeq + ", minMsgSeq=" + groupMsgMap[groupId].min + ", maxMsgSeq=" + groupMsgMap[groupId].max + ", msgs.length=" + groupMsgMap[groupId].msgs.length + ", tempCount=" + tempCount);
                            getLostGroupMsgs(groupId, groupMsgMap[groupId].max, groupMsgMap[groupId].max - curMaxMsgSeq);
                            //更新myGroupMaxSeqs中的群最大seq
                            updateMyGroupCurMaxSeq(groupId, groupMsgMap[groupId].max);
                        } else {
                            new_group_msgs = addGroupMsgList(groupMsgMap[groupId].msgs, new_group_msgs);
                        }
                    } else {
                        //不存在该群的最大消息seq
                        log.warn("不存在该群的最大消息seq，群id=" + groupId);
                        //高并发情况下，长轮询可能存在丢消息，这时需要客户端通过拉取群消息接口补齐下
                        //1、收到的新群消息seq存在不连续情况，也需要补齐
                        if (groupMsgMap[groupId].msgs.length < tempCount) {
                            //发起一个拉群群消息请求
                            log.warn("发起一次补齐群消息请求,minMsgSeq=" + groupMsgMap[groupId].min + ", maxMsgSeq=" + groupMsgMap[groupId].max + ", msgs.length=" + groupMsgMap[groupId].msgs.length + ", tempCount=" + tempCount);
                            getLostGroupMsgs(groupId, groupMsgMap[groupId].max, tempCount);
                            //更新myGroupMaxSeqs中的群最大seq
                            updateMyGroupCurMaxSeq(groupId, groupMsgMap[groupId].max);
                        } else {
                            new_group_msgs = addGroupMsgList(groupMsgMap[groupId].msgs, new_group_msgs);
                        }
                    }
                }
                if (new_group_msgs.length) {
                    MsgStore.updateTimeline();
                }
                if (onMsgCallback && new_group_msgs.length) onMsgCallback(new_group_msgs);
            };

            //处理新的群提示消息
            var handlerGroupTips = function handlerGroupTips(groupTips) {
                var new_group_msgs = [];
                for (var o in groupTips) {
                    var groupTip = groupTips[o];
                    //添加event字段
                    groupTip.Event = LONG_POLLINNG_EVENT_TYPE.GROUP_TIP;
                    //更新群消息通知seq
                    if (groupTip.NoticeSeq > noticeSeq) {
                        noticeSeq = groupTip.NoticeSeq;
                    }
                    var msg = handlerGroupMsg(groupTip, false, true);
                    if (msg) {
                        new_group_msgs.push(msg);
                    }
                }
                if (new_group_msgs.length) {
                    MsgStore.updateTimeline();
                }
                if (onMsgCallback && new_group_msgs.length) onMsgCallback(new_group_msgs);
            };

            //处理新的群系统消息
            //isNeedValidRepeatMsg 是否需要判重
            var handlerGroupSystemMsgs = function handlerGroupSystemMsgs(groupSystemMsgs, isNeedValidRepeatMsg) {
                for (var k in groupSystemMsgs) {
                    var groupTip = groupSystemMsgs[k];
                    var groupReportTypeMsg = groupTip.MsgBody;
                    var reportType = groupReportTypeMsg.ReportType;
                    //当长轮询返回的群系统消息，才需要更新群消息通知seq
                    if (isNeedValidRepeatMsg == false && groupTip.NoticeSeq && groupTip.NoticeSeq > noticeSeq) {
                        noticeSeq = groupTip.NoticeSeq;
                    }
                    var toAccount = groupTip.GroupInfo.To_Account;
                    //过滤本不应该给自己的系统消息
                    /*if (!toAccount || toAccount != ctx.identifier) {
                    log.error("收到本不应该给自己的系统消息: To_Account=" + toAccount);
                    continue;
                    }*/
                    if (isNeedValidRepeatMsg) {
                        //var key=groupTip.ToGroupId+"_"+reportType+"_"+groupTip.MsgTimeStamp+"_"+groupReportTypeMsg.Operator_Account;
                        var key = groupTip.ToGroupId + "_" + reportType + "_" + groupReportTypeMsg.Operator_Account;
                        var isExist = groupSystemMsgsCache[key];
                        if (isExist) {
                            log.warn("收到重复的群系统消息：key=" + key);
                            continue;
                        }
                        groupSystemMsgsCache[key] = true;
                    }

                    var notify = {
                        "SrcFlag": 0,
                        "ReportType": reportType,
                        "GroupId": groupTip.ToGroupId,
                        "GroupName": groupTip.GroupInfo.GroupName,
                        "Operator_Account": groupReportTypeMsg.Operator_Account,
                        "MsgTime": groupTip.MsgTimeStamp,
                        "groupReportTypeMsg": groupReportTypeMsg
                    };
                    switch (reportType) {
                        case GROUP_SYSTEM_TYPE.JOIN_GROUP_REQUEST:
                            //申请加群(只有管理员会接收到)
                            notify["RemarkInfo"] = groupReportTypeMsg.RemarkInfo;
                            notify["MsgKey"] = groupReportTypeMsg.MsgKey;
                            notify["Authentication"] = groupReportTypeMsg.Authentication;
                            notify["UserDefinedField"] = groupTip.UserDefinedField;
                            notify["From_Account"] = groupTip.From_Account;
                            notify["MsgSeq"] = groupTip.ClientSeq;
                            notify["MsgRandom"] = groupTip.MsgRandom;
                            break;
                        case GROUP_SYSTEM_TYPE.JOIN_GROUP_ACCEPT: //申请加群被同意(只有申请人自己接收到)
                        case GROUP_SYSTEM_TYPE.JOIN_GROUP_REFUSE:
                            //申请加群被拒绝(只有申请人自己接收到)
                            notify["RemarkInfo"] = groupReportTypeMsg.RemarkInfo;
                            break;
                        case GROUP_SYSTEM_TYPE.KICK: //被管理员踢出群(只有被踢者接收到)
                        case GROUP_SYSTEM_TYPE.DESTORY: //群被解散(全员接收)
                        case GROUP_SYSTEM_TYPE.CREATE: //创建群(创建者接收, 不展示)
                        case GROUP_SYSTEM_TYPE.INVITED_JOIN_GROUP_REQUEST: //邀请加群(被邀请者接收)
                        case GROUP_SYSTEM_TYPE.INVITED_JOIN_GROUP_REQUEST_AGREE: //邀请加群(被邀请者需同意)
                        case GROUP_SYSTEM_TYPE.QUIT: //主动退群(主动退出者接收, 不展示)
                        case GROUP_SYSTEM_TYPE.SET_ADMIN: //群设置管理员(被设置者接收)
                        case GROUP_SYSTEM_TYPE.CANCEL_ADMIN: //取消管理员(被取消者接收)
                        case GROUP_SYSTEM_TYPE.REVOKE:
                            //群已被回收(全员接收, 不展示)
                            break;
                        case GROUP_SYSTEM_TYPE.READED:
                            //群消息已读同步
                            break;
                        case GROUP_SYSTEM_TYPE.CUSTOM:
                            //用户自定义通知(默认全员接收)
                            notify["MsgSeq"] = groupTip.MsgSeq;
                            notify["UserDefinedField"] = groupReportTypeMsg.UserDefinedField;
                            break;
                        default:
                            log.error("未知群系统消息类型：reportType=" + reportType);
                            break;
                    }

                    if (isNeedValidRepeatMsg) {
                        //注释只收取一种通知
                        // if (reportType == GROUP_SYSTEM_TYPE.JOIN_GROUP_REQUEST) {
                        //回调
                        if (onGroupSystemNotifyCallbacks[reportType]) {
                            onGroupSystemNotifyCallbacks[reportType](notify);
                        } else {
                            log.error("未知群系统消息类型：reportType=" + reportType);
                        }
                        //}
                    } else {
                        //回调
                        if (onGroupSystemNotifyCallbacks[reportType]) {
                            if (reportType == GROUP_SYSTEM_TYPE.READED) {
                                var arr = notify.groupReportTypeMsg.GroupReadInfoArray;
                                for (var i = 0, l = arr.length; i < l; i++) {
                                    var item = arr[i];
                                    onGroupSystemNotifyCallbacks[reportType](item);
                                }
                            } else {
                                onGroupSystemNotifyCallbacks[reportType](notify);
                            }
                        }
                    }
                } //loop
            };

            //处理新的好友系统通知
            //isNeedValidRepeatMsg 是否需要判重
            var handlerFriendSystemNotices = function handlerFriendSystemNotices(friendSystemNotices, isNeedValidRepeatMsg) {
                var friendNotice, type, notify;
                for (var k in friendSystemNotices) {
                    friendNotice = friendSystemNotices[k];
                    type = friendNotice.PushType;
                    //当长轮询返回的群系统消息，才需要更新通知seq
                    if (isNeedValidRepeatMsg == false && friendNotice.NoticeSeq && friendNotice.NoticeSeq > noticeSeq) {
                        noticeSeq = friendNotice.NoticeSeq;
                    }
                    notify = {
                        'Type': type
                    };
                    switch (type) {
                        case FRIEND_NOTICE_TYPE.FRIEND_ADD:
                            //好友表增加
                            notify["Accounts"] = friendNotice.FriendAdd_Account;
                            break;
                        case FRIEND_NOTICE_TYPE.FRIEND_DELETE:
                            //好友表删除
                            notify["Accounts"] = friendNotice.FriendDel_Account;
                            break;
                        case FRIEND_NOTICE_TYPE.PENDENCY_ADD:
                            //未决增加
                            notify["PendencyList"] = friendNotice.PendencyAdd;
                            break;
                        case FRIEND_NOTICE_TYPE.PENDENCY_DELETE:
                            //未决删除
                            notify["Accounts"] = friendNotice.FrienPencydDel_Account;
                            break;
                        case FRIEND_NOTICE_TYPE.BLACK_LIST_ADD:
                            //黑名单增加
                            notify["Accounts"] = friendNotice.BlackListAdd_Account;
                            break;
                        case FRIEND_NOTICE_TYPE.BLACK_LIST_DELETE:
                            //黑名单删除
                            notify["Accounts"] = friendNotice.BlackListDel_Account;
                            break;
                        /*case FRIEND_NOTICE_TYPE.PENDENCY_REPORT://未决已读上报
                        break;
                        case FRIEND_NOTICE_TYPE.FRIEND_UPDATE://好友数据更新
                        break;
                        */
                        default:
                            log.error("未知好友系统通知类型：friendNotice=" + JSON.stringify(friendNotice));
                            break;
                    }

                    if (isNeedValidRepeatMsg) {
                        if (type == FRIEND_NOTICE_TYPE.PENDENCY_ADD) {
                            //回调
                            if (onFriendSystemNotifyCallbacks[type]) onFriendSystemNotifyCallbacks[type](notify);
                        }
                    } else {
                        //回调
                        if (onFriendSystemNotifyCallbacks[type]) onFriendSystemNotifyCallbacks[type](notify);
                    }
                } //loop
            };

            //处理新的资料系统通知
            //isNeedValidRepeatMsg 是否需要判重
            var handlerProfileSystemNotices = function handlerProfileSystemNotices(profileSystemNotices, isNeedValidRepeatMsg) {
                var profileNotice, type, notify;
                for (var k in profileSystemNotices) {
                    profileNotice = profileSystemNotices[k];
                    type = profileNotice.PushType;
                    //当长轮询返回的群系统消息，才需要更新通知seq
                    if (isNeedValidRepeatMsg == false && profileNotice.NoticeSeq && profileNotice.NoticeSeq > noticeSeq) {
                        noticeSeq = profileNotice.NoticeSeq;
                    }
                    notify = {
                        'Type': type
                    };
                    switch (type) {
                        case PROFILE_NOTICE_TYPE.PROFILE_MODIFY:
                            //资料修改
                            notify["Profile_Account"] = profileNotice.Profile_Account;
                            notify["ProfileList"] = profileNotice.ProfileList;
                            break;
                        default:
                            log.error("未知资料系统通知类型：profileNotice=" + JSON.stringify(profileNotice));
                            break;
                    }

                    if (isNeedValidRepeatMsg) {
                        if (type == PROFILE_NOTICE_TYPE.PROFILE_MODIFY) {
                            //回调
                            if (onProfileSystemNotifyCallbacks[type]) onProfileSystemNotifyCallbacks[type](notify);
                        }
                    } else {
                        //回调
                        if (onProfileSystemNotifyCallbacks[type]) onProfileSystemNotifyCallbacks[type](notify);
                    }
                } //loop
            };

            //处理新的群系统消息(用于直播大群长轮询)
            var handlerGroupSystemMsg = function handlerGroupSystemMsg(groupTip) {
                var groupReportTypeMsg = groupTip.MsgBody;
                var reportType = groupReportTypeMsg.ReportType;
                var toAccount = groupTip.GroupInfo.To_Account;
                //过滤本不应该给自己的系统消息
                //if(!toAccount || toAccount!=ctx.identifier){
                //    log.error("收到本不应该给自己的系统消息: To_Account="+toAccount);
                //    continue;
                //}
                var notify = {
                    "SrcFlag": 1,
                    "ReportType": reportType,
                    "GroupId": groupTip.ToGroupId,
                    "GroupName": groupTip.GroupInfo.GroupName,
                    "Operator_Account": groupReportTypeMsg.Operator_Account,
                    "MsgTime": groupTip.MsgTimeStamp
                };
                switch (reportType) {
                    case GROUP_SYSTEM_TYPE.JOIN_GROUP_REQUEST:
                        //申请加群(只有管理员会接收到)
                        notify["RemarkInfo"] = groupReportTypeMsg.RemarkInfo;
                        notify["MsgKey"] = groupReportTypeMsg.MsgKey;
                        notify["Authentication"] = groupReportTypeMsg.Authentication;
                        notify["UserDefinedField"] = groupTip.UserDefinedField;
                        notify["From_Account"] = groupTip.From_Account;
                        notify["MsgSeq"] = groupTip.ClientSeq;
                        notify["MsgRandom"] = groupTip.MsgRandom;
                        break;
                    case GROUP_SYSTEM_TYPE.JOIN_GROUP_ACCEPT: //申请加群被同意(只有申请人自己接收到)
                    case GROUP_SYSTEM_TYPE.JOIN_GROUP_REFUSE:
                        //申请加群被拒绝(只有申请人自己接收到)
                        notify["RemarkInfo"] = groupReportTypeMsg.RemarkInfo;
                        break;
                    case GROUP_SYSTEM_TYPE.KICK: //被管理员踢出群(只有被踢者接收到)
                    case GROUP_SYSTEM_TYPE.DESTORY: //群被解散(全员接收)
                    case GROUP_SYSTEM_TYPE.CREATE: //创建群(创建者接收, 不展示)
                    case GROUP_SYSTEM_TYPE.INVITED_JOIN_GROUP_REQUEST: //邀请加群(被邀请者接收)
                    case GROUP_SYSTEM_TYPE.INVITED_JOIN_GROUP_REQUEST_AGREE: //邀请加群(被邀请者需要同意)
                    case GROUP_SYSTEM_TYPE.QUIT: //主动退群(主动退出者接收, 不展示)
                    case GROUP_SYSTEM_TYPE.SET_ADMIN: //群设置管理员(被设置者接收)
                    case GROUP_SYSTEM_TYPE.CANCEL_ADMIN: //取消管理员(被取消者接收)
                    case GROUP_SYSTEM_TYPE.REVOKE:
                        //群已被回收(全员接收, 不展示)
                        break;
                    case GROUP_SYSTEM_TYPE.CUSTOM:
                        //用户自定义通知(默认全员接收)
                        notify["MsgSeq"] = groupTip.MsgSeq;
                        notify["UserDefinedField"] = groupReportTypeMsg.UserDefinedField;
                        break;
                    default:
                        log.error("未知群系统消息类型：reportType=" + reportType);
                        break;
                }
                //回调
                if (onGroupSystemNotifyCallbacks[reportType]) onGroupSystemNotifyCallbacks[reportType](notify);
            };

            //处理C2C EVENT 消息通道Array
            var handlerC2cNotifyMsgArray = function handlerC2cNotifyMsgArray(arr) {
                for (var i = 0, l = arr.length; i < l; i++) {
                    handlerC2cEventMsg(arr[i]);
                }
            };

            //处理C2C EVENT 消息通道Item
            var handlerC2cEventMsg = function handlerC2cEventMsg(notify) {
                console.error(notify);
                var subType = notify.SubMsgType;
                switch (subType) {
                    case C2C_EVENT_SUB_TYPE.READED:
                        log.warn("C2C已读消息通知");
                        if (notify.ReadC2cMsgNotify && notify.ReadC2cMsgNotify.UinPairReadArray && onC2cEventCallbacks[subType]) {
                            for (var i = 0, l = notify.ReadC2cMsgNotify.UinPairReadArray.length; i < l; i++) {
                                var item = notify.ReadC2cMsgNotify.UinPairReadArray[i];
                                onC2cEventCallbacks[subType](item);
                            }
                        }
                        break;
                    case C2C_EVENT_SUB_TYPE.KICKEDOUT:
                        log.warn("多终端互踢通知");
                        proto_logout('instance');
                        if (onC2cEventCallbacks[subType]) {
                            onC2cEventCallbacks[subType]();
                        }
                        break;
                    default:
                        log.error("未知C2c系统消息：subType=" + subType);
                        break;
                }
            };

            //长轮询
            this.longPolling = function (cbOk, cbErr) {

                var opts = {
                    'Timeout': longPollingDefaultTimeOut / 1000,
                    'Cookie': {
                        'NotifySeq': notifySeq,
                        'NoticeSeq': noticeSeq
                    }
                };
                if (LongPollingId) {
                    opts.Cookie.LongPollingId = LongPollingId;
                    doPolling();
                } else {
                    proto_getLongPollingId({}, function (resp) {
                        LongPollingId = opts.Cookie.LongPollingId = resp.LongPollingId;
                        //根据回包设置超时时间，超时时长不能>60秒，因为webkit手机端的最长超时时间不能大于60s
                        longPollingDefaultTimeOut = resp.Timeout > 60 ? longPollingDefaultTimeOut : resp.Timeout * 1000;
                        doPolling();
                    });
                }

                function doPolling() {
                    proto_longPolling(opts, function (resp) {
                        for (var i in resp.EventArray) {
                            var e = resp.EventArray[i];
                            switch (e.Event) {
                                case LONG_POLLINNG_EVENT_TYPE.C2C:
                                    //c2c消息通知
                                    //更新C2C消息通知seq
                                    notifySeq = e.NotifySeq;
                                    log.warn("longpolling: received new c2c msg");
                                    //获取新消息
                                    MsgManager.syncMsgs();
                                    break;
                                case LONG_POLLINNG_EVENT_TYPE.GROUP_COMMON:
                                    //普通群消息通知
                                    log.warn("longpolling: received new group msgs");
                                    handlerOrdinaryAndTipGroupMsgs(e.Event, e.GroupMsgArray);
                                    break;
                                case LONG_POLLINNG_EVENT_TYPE.GROUP_TIP:
                                    //（全员广播）群提示消息
                                    log.warn("longpolling: received new group tips");
                                    handlerOrdinaryAndTipGroupMsgs(e.Event, e.GroupTips);
                                    break;
                                case LONG_POLLINNG_EVENT_TYPE.GROUP_TIP2:
                                    //群提示消息
                                    log.warn("longpolling: received new group tips");
                                    handlerOrdinaryAndTipGroupMsgs(e.Event, e.GroupTips);
                                    break;
                                case LONG_POLLINNG_EVENT_TYPE.GROUP_SYSTEM:
                                    //（多终端同步）群系统消息
                                    log.warn("longpolling: received new group system msgs");
                                    //false 表示 通过长轮询收到的群系统消息，可以不判重
                                    handlerGroupSystemMsgs(e.GroupTips, false);
                                    break;
                                case LONG_POLLINNG_EVENT_TYPE.FRIEND_NOTICE:
                                    //好友系统通知
                                    log.warn("longpolling: received new friend system notice");
                                    //false 表示 通过长轮询收到的好友系统通知，可以不判重
                                    handlerFriendSystemNotices(e.FriendListMod, false);
                                    break;
                                case LONG_POLLINNG_EVENT_TYPE.PROFILE_NOTICE:
                                    //资料系统通知
                                    log.warn("longpolling: received new profile system notice");
                                    //false 表示 通过长轮询收到的资料系统通知，可以不判重
                                    handlerProfileSystemNotices(e.ProfileDataMod, false);
                                    break;
                                case LONG_POLLINNG_EVENT_TYPE.C2C_COMMON:
                                    //c2c消息通知
                                    noticeSeq = e.C2cMsgArray[0].NoticeSeq;
                                    //更新C2C消息通知seq
                                    log.warn("longpolling: received new c2c_common msg", noticeSeq);
                                    handlerOrdinaryAndTipC2cMsgs(e.Event, e.C2cMsgArray);
                                    break;
                                case LONG_POLLINNG_EVENT_TYPE.C2C_EVENT:
                                    //c2c已读消息通知
                                    noticeSeq = e.C2cNotifyMsgArray[0].NoticeSeq;
                                    log.warn("longpolling: received new c2c_event msg");
                                    handlerC2cNotifyMsgArray(e.C2cNotifyMsgArray);
                                    break;
                                default:
                                    log.error("longpolling收到未知新消息类型: Event=" + e.Event);
                                    break;
                            }
                        }
                        var successInfo = {
                            'ActionStatus': ACTION_STATUS.OK,
                            'ErrorCode': 0
                        };
                        updatecLongPollingStatus(successInfo);
                    }, function (err) {
                        //log.error(err);
                        updatecLongPollingStatus(err);
                        if (cbErr) cbErr(err);
                    });
                }
            };

            //大群 长轮询
            this.bigGroupLongPolling = function (cbOk, cbErr) {

                var GroupId = BigGroupId;
                var opts = {
                    'USP': 1,
                    'StartSeq': bigGroupLongPollingStartSeq, //请求拉消息的起始seq
                    'HoldTime': bigGroupLongPollingHoldTime, //客户端长轮询的超时时间，单位是秒
                    'Key': bigGroupLongPollingKey //客户端加入群组后收到的的Key
                };

                proto_bigGroupLongPolling(opts, function (resp) {
                    if (GroupId != BigGroupId) return;
                    var msgObjList = [];
                    bigGroupLongPollingStartSeq = resp.NextSeq;
                    bigGroupLongPollingHoldTime = resp.HoldTime;
                    bigGroupLongPollingKey = resp.Key;

                    if (resp.RspMsgList && resp.RspMsgList.length > 0) {
                        var msgCount = 0,
                            msgInfo,
                            event,
                            msg;
                        for (var i = resp.RspMsgList.length - 1; i >= 0; i--) {
                            msgInfo = resp.RspMsgList[i];
                            //后台这里做了调整，缩短字段名，以下是兼容代码
                            var keyMap = {
                                "F_Account": "From_Account",
                                "T_Account": "To_Account",
                                "FAType": "EnumFrom_AccountType",
                                "TAType": "EnumTo_AccountType",
                                "GCode": "GroupCode",
                                "GName": "GroupName",
                                "GId": "GroupId",
                                "MFlg": "MsgFlag",
                                "FAEInfo": "MsgFrom_AccountExtraInfo",
                                "Evt": "Event",
                                "GInfo": "GroupInfo",
                                "BPlc": "IsPlaceMsg",
                                "MBody": "MsgBody",
                                "Pri": "MsgPriority",
                                "Rdm": "MsgRandom",
                                "MSeq": "MsgSeq",
                                "TStp": "MsgTimeStamp",
                                "TGId": "ToGroupId",
                                "UEInfo": "UinExtInfo",
                                "UId": "UserId",
                                "BSys": "IsSystemMsg",
                                "FAHUrl": "From_AccountHeadurl",
                                "FANick": "From_AccountNick"
                            };
                            msgInfo = tool.replaceObject(keyMap, msgInfo);
                            //如果是已经删除的消息或者发送者帐号为空或者消息内容为空
                            //IsPlaceMsg=1
                            if (msgInfo.IsPlaceMsg || !msgInfo.From_Account || !msgInfo.MsgBody || msgInfo.MsgBody.length == 0) {
                                continue;
                            }

                            event = msgInfo.Event; //群消息类型
                            switch (event) {
                                case LONG_POLLINNG_EVENT_TYPE.GROUP_COMMON:
                                    //群普通消息
                                    log.info("bigGroupLongPolling: return new group msg");
                                    msg = handlerGroupMsg(msgInfo, false, false);
                                    msg && msgObjList.push(msg);
                                    msgCount = msgCount + 1;
                                    break;
                                case LONG_POLLINNG_EVENT_TYPE.GROUP_TIP: //群提示消息
                                case LONG_POLLINNG_EVENT_TYPE.GROUP_TIP2:
                                    //群提示消息
                                    log.info("bigGroupLongPolling: return new group tip");
                                    msg = handlerGroupMsg(msgInfo, false, false);
                                    msg && msgObjList.push(msg);
                                    //msgCount=msgCount+1;
                                    break;
                                case LONG_POLLINNG_EVENT_TYPE.GROUP_SYSTEM:
                                    //群系统消息
                                    log.info("bigGroupLongPolling: new group system msg");
                                    handlerGroupSystemMsg(msgInfo);
                                    break;
                                default:
                                    log.error("bigGroupLongPolling收到未知新消息类型: Event=" + event);
                                    break;
                            }
                        } // for loop
                        if (msgCount > 0) {
                            MsgManager.setBigGroupLongPollingMsgMap(msgInfo.ToGroupId, msgCount); //
                            log.warn("current bigGroupLongPollingMsgMap: " + JSON.stringify(bigGroupLongPollingMsgMap));
                        }
                    }
                    curBigGroupLongPollingRetErrorCount = 0;
                    //返回连接状态
                    var successInfo = {
                        'ActionStatus': ACTION_STATUS.OK,
                        'ErrorCode': CONNECTION_STATUS.ON,
                        'ErrorInfo': 'connection is ok...'
                    };
                    ConnManager.callBack(successInfo);

                    if (cbOk) cbOk(msgObjList);else if (onBigGroupMsgCallback) onBigGroupMsgCallback(msgObjList); //返回新消息

                    //重新启动长轮询
                    bigGroupLongPollingOn && MsgManager.bigGroupLongPolling();
                }, function (err) {
                    if (err.ErrorCode == longPollingPackageTooLargeErrorCode) {
                        bigGroupLongPollingStartSeq = 0;
                    } else if (err.ErrorCode != longPollingTimeOutErrorCode) {
                        log.error(err.ErrorInfo);
                        //记录长轮询返回错误次数
                        curBigGroupLongPollingRetErrorCount++;
                    }
                    if (err.ErrorCode == longPollingKickedErrorCode) {
                        //登出
                        log.error("多实例登录，被kick");
                        if (onKickedEventCall) {
                            onKickedEventCall();
                        }
                    }
                    //累计超过一定次数，不再发起长轮询请求
                    if (curBigGroupLongPollingRetErrorCount < LONG_POLLING_MAX_RET_ERROR_COUNT) {
                        bigGroupLongPollingOn && MsgManager.bigGroupLongPolling();
                    } else {
                        var errInfo = {
                            'ActionStatus': ACTION_STATUS.FAIL,
                            'ErrorCode': CONNECTION_STATUS.OFF,
                            'ErrorInfo': 'connection is off'
                        };
                        ConnManager.callBack(errInfo);
                    }
                    if (cbErr) cbErr(err);
                }, bigGroupLongPollingHoldTime * 1000);
            };

            //更新连接状态
            var updatecLongPollingStatus = function updatecLongPollingStatus(errObj) {
                if (errObj.ErrorCode == 0 || errObj.ErrorCode == longPollingTimeOutErrorCode) {
                    curLongPollingRetErrorCount = 0;
                    longPollingOffCallbackFlag = false;
                    var errorInfo;
                    var isNeedCallback = false;
                    switch (curLongPollingStatus) {
                        case CONNECTION_STATUS.INIT:
                            isNeedCallback = true;
                            curLongPollingStatus = CONNECTION_STATUS.ON;
                            errorInfo = "create connection successfully(INIT->ON)";
                            break;
                        case CONNECTION_STATUS.ON:
                            errorInfo = "connection is on...(ON->ON)";
                            break;
                        case CONNECTION_STATUS.RECONNECT:
                            curLongPollingStatus = CONNECTION_STATUS.ON;
                            errorInfo = "connection is on...(RECONNECT->ON)";
                            break;
                        case CONNECTION_STATUS.OFF:
                            isNeedCallback = true;
                            curLongPollingStatus = CONNECTION_STATUS.RECONNECT;
                            errorInfo = "reconnect successfully(OFF->RECONNECT)";
                            break;
                    }
                    var successInfo = {
                        'ActionStatus': ACTION_STATUS.OK,
                        'ErrorCode': curLongPollingStatus,
                        'ErrorInfo': errorInfo
                    };
                    isNeedCallback && ConnManager.callBack(successInfo);
                    longPollingOn && MsgManager.longPolling();
                } else if (errObj.ErrorCode == longPollingKickedErrorCode) {
                    //登出
                    log.error("多实例登录，被kick");
                    if (onKickedEventCall) {
                        onKickedEventCall();
                    }
                } else {
                    //记录长轮询返回解析json错误次数
                    curLongPollingRetErrorCount++;
                    log.warn("longPolling接口第" + curLongPollingRetErrorCount + "次报错: " + errObj.ErrorInfo);
                    //累计超过一定次数
                    if (curLongPollingRetErrorCount <= LONG_POLLING_MAX_RET_ERROR_COUNT) {
                        setTimeout(startNextLongPolling, 100); //
                    } else {
                        curLongPollingStatus = CONNECTION_STATUS.OFF;
                        var errInfo = {
                            'ActionStatus': ACTION_STATUS.FAIL,
                            'ErrorCode': CONNECTION_STATUS.OFF,
                            'ErrorInfo': 'connection is off'
                        };
                        longPollingOffCallbackFlag == false && ConnManager.callBack(errInfo);
                        longPollingOffCallbackFlag = true;
                        log.warn(longPollingIntervalTime + "毫秒之后,SDK会发起新的longPolling请求...");
                        setTimeout(startNextLongPolling, longPollingIntervalTime); //长轮询接口报错次数达到一定值，每间隔5s发起新的长轮询
                    }
                }
            };

            //处理收到的普通C2C消息
            var handlerOrdinaryAndTipC2cMsgs = function handlerOrdinaryAndTipC2cMsgs(eventType, C2cMsgArray) {
                //处理c2c消息
                var notifyInfo = [];
                var msgInfos = [];
                msgInfos = C2cMsgArray; //返回的消息列表
                // MsgStore.cookie = resp.Cookie;//cookies，记录当前读到的最新消息位置

                for (var i in msgInfos) {
                    var msgInfo = msgInfos[i];
                    var isSendMsg, id;
                    var headUrl = msgInfo.From_AccountHeadurl || '';
                    if (msgInfo.From_Account == ctx.identifier) {
                        //当前用户发送的消息
                        isSendMsg = true;
                        id = msgInfo.To_Account; //读取接收者信息
                    } else {
                        //当前用户收到的消息
                        isSendMsg = false;
                        id = msgInfo.From_Account; //读取发送者信息
                    }
                    var sess = MsgStore.sessByTypeId(SESSION_TYPE.C2C, id);
                    if (!sess) {
                        sess = new Session(SESSION_TYPE.C2C, id, id, headUrl, 0, 0);
                    }
                    var msg = new Msg(sess, isSendMsg, msgInfo.MsgSeq, msgInfo.MsgRandom, msgInfo.MsgTimeStamp, msgInfo.From_Account, C2C_MSG_SUB_TYPE.COMMON, msgInfo.From_AccountNick, headUrl);
                    var msgBody = null;
                    var msgContent = null;
                    var msgType = null;
                    for (var mi in msgInfo.MsgBody) {
                        msgBody = msgInfo.MsgBody[mi];
                        msgType = msgBody.MsgType;
                        switch (msgType) {
                            case MSG_ELEMENT_TYPE.TEXT:
                                msgContent = new Msg.Elem.Text(msgBody.MsgContent.Text);
                                break;
                            case MSG_ELEMENT_TYPE.FACE:
                                msgContent = new Msg.Elem.Face(msgBody.MsgContent.Index, msgBody.MsgContent.Data);
                                break;
                            case MSG_ELEMENT_TYPE.IMAGE:
                                msgContent = new Msg.Elem.Images(msgBody.MsgContent.UUID, msgBody.MsgContent.ImageFormat || "");
                                for (var j in msgBody.MsgContent.ImageInfoArray) {
                                    var tempImg = msgBody.MsgContent.ImageInfoArray[j];
                                    msgContent.addImage(new Msg.Elem.Images.Image(tempImg.Type, tempImg.Size, tempImg.Width, tempImg.Height, tempImg.URL));
                                }
                                break;
                            case MSG_ELEMENT_TYPE.SOUND:
                                if (msgBody.MsgContent) {
                                    msgContent = new Msg.Elem.Sound(msgBody.MsgContent.UUID, msgBody.MsgContent.Second, msgBody.MsgContent.Size, msgInfo.From_Account, msgInfo.To_Account, msgBody.MsgContent.Download_Flag, SESSION_TYPE.C2C);
                                } else {
                                    msgType = MSG_ELEMENT_TYPE.TEXT;
                                    msgContent = new Msg.Elem.Text('[语音消息]下载地址解析出错');
                                }
                                break;
                            case MSG_ELEMENT_TYPE.LOCATION:
                                msgContent = new Msg.Elem.Location(msgBody.MsgContent.Longitude, msgBody.MsgContent.Latitude, msgBody.MsgContent.Desc);
                                break;
                            case MSG_ELEMENT_TYPE.FILE:
                            case MSG_ELEMENT_TYPE.FILE + " ":
                                msgType = MSG_ELEMENT_TYPE.FILE;
                                if (msgBody.MsgContent) {
                                    msgContent = new Msg.Elem.File(msgBody.MsgContent.UUID, msgBody.MsgContent.FileName, msgBody.MsgContent.FileSize, msgInfo.From_Account, msgInfo.To_Account, msgBody.MsgContent.Download_Flag, SESSION_TYPE.C2C);
                                } else {
                                    msgType = MSG_ELEMENT_TYPE.TEXT;
                                    msgContent = new Msg.Elem.Text('[文件消息下载地址解析出错]');
                                }
                                break;
                            case MSG_ELEMENT_TYPE.CUSTOM:
                                try {
                                    var data = JSON.parse(msgBody.MsgContent.Data);
                                    if (data && data.userAction && data.userAction == FRIEND_WRITE_MSG_ACTION.ING) {
                                        //过滤安卓或ios的正在输入自定义消息
                                        continue;
                                    }
                                } catch (e) {}

                                msgType = MSG_ELEMENT_TYPE.CUSTOM;
                                msgContent = new Msg.Elem.Custom(msgBody.MsgContent.Data, msgBody.MsgContent.Desc, msgBody.MsgContent.Ext);
                                break;
                            default:
                                msgType = MSG_ELEMENT_TYPE.TEXT;
                                msgContent = new Msg.Elem.Text('web端暂不支持' + msgBody.MsgType + '消息');
                                break;
                        }
                        msg.elems.push(new Msg.Elem(msgType, msgContent));
                    }

                    if (msg.elems.length > 0 && MsgStore.addMsg(msg, true)) {
                        notifyInfo.push(msg);
                    }
                } // for loop
                if (notifyInfo.length > 0) MsgStore.updateTimeline();
                if (notifyInfo.length > 0) {
                    if (onMsgCallback) onMsgCallback(notifyInfo);
                }
            };

            //发起新的长轮询请求
            var startNextLongPolling = function startNextLongPolling() {
                longPollingOn && MsgManager.longPolling();
            };

            //处理未决的加群申请消息列表
            var handlerApplyJoinGroupSystemMsgs = function handlerApplyJoinGroupSystemMsgs(eventArray) {
                for (var i in eventArray) {
                    var e = eventArray[i];
                    handlerGroupSystemMsgs(e.GroupTips, true);
                    switch (e.Event) {
                        case LONG_POLLINNG_EVENT_TYPE.GROUP_SYSTEM:
                            //（多终端同步）群系统消息
                            log.warn("handlerApplyJoinGroupSystemMsgs： handler new group system msg");
                            //true 表示 解决加群申请通知存在重复的问题（已处理的通知，下次登录还会拉到），需要判重
                            handlerGroupSystemMsgs(e.GroupTips, true);
                            break;
                        default:
                            log.error("syncMsgs收到未知的群系统消息类型: Event=" + e.Event);
                            break;
                    }
                }
            };

            //拉取c2c消息(包含加群未决消息，需要处理)
            this.syncMsgs = function (cbOk, cbErr) {
                var notifyInfo = [];
                var msgInfos = [];
                //读取C2C消息
                proto_getMsgs(MsgStore.cookie, MsgStore.syncFlag, function (resp) {
                    //拉取完毕
                    if (resp.SyncFlag == 2) {
                        MsgStore.syncFlag = 0;
                    }
                    //处理c2c消息
                    msgInfos = resp.MsgList; //返回的消息列表
                    MsgStore.cookie = resp.Cookie; //cookies，记录当前读到的最新消息位置

                    for (var i in msgInfos) {
                        var msgInfo = msgInfos[i];
                        var isSendMsg, id, headUrl;
                        if (msgInfo.From_Account == ctx.identifier) {
                            //当前用户发送的消息
                            isSendMsg = true;
                            id = msgInfo.To_Account; //读取接收者信息
                            headUrl = '';
                        } else {
                            //当前用户收到的消息
                            isSendMsg = false;
                            id = msgInfo.From_Account; //读取发送者信息
                            headUrl = '';
                        }
                        var sess = MsgStore.sessByTypeId(SESSION_TYPE.C2C, id);
                        if (!sess) {
                            sess = new Session(SESSION_TYPE.C2C, id, id, headUrl, 0, 0);
                        }
                        var msg = new Msg(sess, isSendMsg, msgInfo.MsgSeq, msgInfo.MsgRandom, msgInfo.MsgTimeStamp, msgInfo.From_Account, C2C_MSG_SUB_TYPE.COMMON, msgInfo.From_AccountNick, msgInfo.From_AccountHeadurl);
                        var msgBody = null;
                        var msgContent = null;
                        var msgType = null;
                        for (var mi in msgInfo.MsgBody) {
                            msgBody = msgInfo.MsgBody[mi];
                            msgType = msgBody.MsgType;
                            switch (msgType) {
                                case MSG_ELEMENT_TYPE.TEXT:
                                    msgContent = new Msg.Elem.Text(msgBody.MsgContent.Text);
                                    break;
                                case MSG_ELEMENT_TYPE.FACE:
                                    msgContent = new Msg.Elem.Face(msgBody.MsgContent.Index, msgBody.MsgContent.Data);
                                    break;
                                case MSG_ELEMENT_TYPE.IMAGE:
                                    msgContent = new Msg.Elem.Images(msgBody.MsgContent.UUID, msgBody.MsgContent.ImageFormat);
                                    for (var j in msgBody.MsgContent.ImageInfoArray) {
                                        var tempImg = msgBody.MsgContent.ImageInfoArray[j];
                                        msgContent.addImage(new Msg.Elem.Images.Image(tempImg.Type, tempImg.Size, tempImg.Width, tempImg.Height, tempImg.URL));
                                    }
                                    break;
                                case MSG_ELEMENT_TYPE.SOUND:
                                    // var soundUrl = getSoundDownUrl(msgBody.MsgContent.UUID, msgInfo.From_Account);
                                    if (msgBody.MsgContent) {
                                        msgContent = new Msg.Elem.Sound(msgBody.MsgContent.UUID, msgBody.MsgContent.Second, msgBody.MsgContent.Size, msgInfo.From_Account, msgInfo.To_Account, msgBody.MsgContent.Download_Flag, SESSION_TYPE.C2C);
                                    } else {
                                        msgType = MSG_ELEMENT_TYPE.TEXT;
                                        msgContent = new Msg.Elem.Text('[语音消息]下载地址解析出错');
                                    }
                                    break;
                                case MSG_ELEMENT_TYPE.LOCATION:
                                    msgContent = new Msg.Elem.Location(msgBody.MsgContent.Longitude, msgBody.MsgContent.Latitude, msgBody.MsgContent.Desc);
                                    break;
                                case MSG_ELEMENT_TYPE.FILE:
                                case MSG_ELEMENT_TYPE.FILE + " ":
                                    msgType = MSG_ELEMENT_TYPE.FILE;
                                    // var fileUrl = getFileDownUrl(msgBody.MsgContent.UUID, msgInfo.From_Account, msgBody.MsgContent.FileName);
                                    if (msgBody.MsgContent) {
                                        msgContent = new Msg.Elem.File(msgBody.MsgContent.UUID, msgBody.MsgContent.FileName, msgBody.MsgContent.FileSize, msgInfo.From_Account, msgInfo.To_Account, msgBody.MsgContent.Download_Flag, SESSION_TYPE.C2C);
                                    } else {
                                        msgType = MSG_ELEMENT_TYPE.TEXT;
                                        msgContent = new Msg.Elem.Text('[文件消息下载地址解析出错]');
                                    }
                                    break;
                                case MSG_ELEMENT_TYPE.CUSTOM:
                                    try {
                                        var data = JSON.parse(msgBody.MsgContent.Data);
                                        if (data && data.userAction && data.userAction == FRIEND_WRITE_MSG_ACTION.ING) {
                                            //过滤安卓或ios的正在输入自定义消息
                                            continue;
                                        }
                                    } catch (e) {}

                                    msgType = MSG_ELEMENT_TYPE.CUSTOM;
                                    msgContent = new Msg.Elem.Custom(msgBody.MsgContent.Data, msgBody.MsgContent.Desc, msgBody.MsgContent.Ext);
                                    break;
                                default:
                                    msgType = MSG_ELEMENT_TYPE.TEXT;
                                    msgContent = new Msg.Elem.Text('web端暂不支持' + msgBody.MsgType + '消息');
                                    break;
                            }
                            msg.elems.push(new Msg.Elem(msgType, msgContent));
                        }

                        if (msg.elems.length > 0 && MsgStore.addMsg(msg, true)) {
                            notifyInfo.push(msg);
                        }
                    } // for loop

                    //处理加群未决申请消息
                    handlerApplyJoinGroupSystemMsgs(resp.EventArray);

                    if (notifyInfo.length > 0) MsgStore.updateTimeline();
                    if (cbOk) cbOk(notifyInfo);else if (notifyInfo.length > 0) {
                        if (onMsgCallback) onMsgCallback(notifyInfo);
                    }
                }, function (err) {
                    log.error("getMsgs failed:" + err.ErrorInfo);
                    if (cbErr) cbErr(err);
                });
            };

            //拉取C2C漫游消息
            this.getC2CHistoryMsgs = function (options, cbOk, cbErr) {

                if (!options.Peer_Account) {
                    if (cbErr) {
                        cbErr(tool.getReturnError("Peer_Account is empty", -13));
                        return;
                    }
                }
                if (!options.MaxCnt) {
                    options.MaxCnt = 15;
                }
                if (options.MaxCnt <= 0) {
                    if (cbErr) {
                        cbErr(tool.getReturnError("MaxCnt should be greater than 0", -14));
                        return;
                    }
                }
                if (options.MaxCnt > 15) {
                    if (cbErr) {
                        cbErr(tool.getReturnError("MaxCnt can not be greater than 15", -15));
                        return;
                    }
                    return;
                }
                if (options.MsgKey == null || options.MsgKey === undefined) {
                    options.MsgKey = '';
                }
                var opts = {
                    'Peer_Account': options.Peer_Account,
                    'MaxCnt': options.MaxCnt,
                    'LastMsgTime': options.LastMsgTime,
                    'MsgKey': options.MsgKey
                };
                //读取c2c漫游消息
                proto_getC2CHistoryMsgs(opts, function (resp) {
                    var msgObjList = [];
                    var msgInfos = [];
                    //处理c2c消息
                    msgInfos = resp.MsgList; //返回的消息列表
                    var sess = MsgStore.sessByTypeId(SESSION_TYPE.C2C, options.Peer_Account);
                    if (!sess) {
                        sess = new Session(SESSION_TYPE.C2C, options.Peer_Account, options.Peer_Account, '', 0, 0);
                    }
                    for (var i in msgInfos) {
                        var msgInfo = msgInfos[i];
                        var isSendMsg, id;
                        var headUrl = msgInfo.From_AccountHeadurl || '';
                        if (msgInfo.From_Account == ctx.identifier) {
                            //当前用户发送的消息
                            isSendMsg = true;
                            id = msgInfo.To_Account; //读取接收者信息
                        } else {
                            //当前用户收到的消息
                            isSendMsg = false;
                            id = msgInfo.From_Account; //读取发送者信息
                        }
                        var msg = new Msg(sess, isSendMsg, msgInfo.MsgSeq, msgInfo.MsgRandom, msgInfo.MsgTimeStamp, msgInfo.From_Account, C2C_MSG_SUB_TYPE.COMMON, msgInfo.From_AccountNick, headUrl);
                        var msgBody = null;
                        var msgContent = null;
                        var msgType = null;
                        for (var mi in msgInfo.MsgBody) {
                            msgBody = msgInfo.MsgBody[mi];
                            msgType = msgBody.MsgType;
                            switch (msgType) {
                                case MSG_ELEMENT_TYPE.TEXT:
                                    msgContent = new Msg.Elem.Text(msgBody.MsgContent.Text);
                                    break;
                                case MSG_ELEMENT_TYPE.FACE:
                                    msgContent = new Msg.Elem.Face(msgBody.MsgContent.Index, msgBody.MsgContent.Data);
                                    break;
                                case MSG_ELEMENT_TYPE.IMAGE:
                                    msgContent = new Msg.Elem.Images(msgBody.MsgContent.UUID, msgBody.MsgContent.ImageFormat);
                                    for (var j in msgBody.MsgContent.ImageInfoArray) {
                                        var tempImg = msgBody.MsgContent.ImageInfoArray[j];
                                        msgContent.addImage(new Msg.Elem.Images.Image(tempImg.Type, tempImg.Size, tempImg.Width, tempImg.Height, tempImg.URL));
                                    }
                                    break;
                                case MSG_ELEMENT_TYPE.SOUND:

                                    // var soundUrl = getSoundDownUrl(msgBody.MsgContent.UUID, msgInfo.From_Account);

                                    if (msgBody.MsgContent) {
                                        msgContent = new Msg.Elem.Sound(msgBody.MsgContent.UUID, msgBody.MsgContent.Second, msgBody.MsgContent.Size, msgInfo.From_Account, msgInfo.To_Account, msgBody.MsgContent.Download_Flag, SESSION_TYPE.C2C);
                                    } else {
                                        msgType = MSG_ELEMENT_TYPE.TEXT;
                                        msgContent = new Msg.Elem.Text('[语音消息]下载地址解析出错');
                                    }
                                    break;
                                case MSG_ELEMENT_TYPE.LOCATION:
                                    msgContent = new Msg.Elem.Location(msgBody.MsgContent.Longitude, msgBody.MsgContent.Latitude, msgBody.MsgContent.Desc);
                                    break;
                                case MSG_ELEMENT_TYPE.FILE:
                                case MSG_ELEMENT_TYPE.FILE + " ":
                                    msgType = MSG_ELEMENT_TYPE.FILE;
                                    // var fileUrl = getFileDownUrl(msgBody.MsgContent.UUID, msgInfo.From_Account, msgBody.MsgContent.FileName);

                                    if (msgBody.MsgContent) {
                                        msgContent = new Msg.Elem.File(msgBody.MsgContent.UUID, msgBody.MsgContent.FileName, msgBody.MsgContent.FileSize, msgInfo.From_Account, msgInfo.To_Account, msgBody.MsgContent.Download_Flag, SESSION_TYPE.C2C);
                                    } else {
                                        msgType = MSG_ELEMENT_TYPE.TEXT;
                                        msgContent = new Msg.Elem.Text('[文件消息下载地址解析出错]');
                                    }
                                    break;
                                case MSG_ELEMENT_TYPE.CUSTOM:
                                    msgType = MSG_ELEMENT_TYPE.CUSTOM;
                                    msgContent = new Msg.Elem.Custom(msgBody.MsgContent.Data, msgBody.MsgContent.Desc, msgBody.MsgContent.Ext);

                                    break;
                                default:
                                    msgType = MSG_ELEMENT_TYPE.TEXT;
                                    msgContent = new Msg.Elem.Text('web端暂不支持' + msgBody.MsgType + '消息');
                                    break;
                            }
                            msg.elems.push(new Msg.Elem(msgType, msgContent));
                        }
                        MsgStore.addMsg(msg);
                        msgObjList.push(msg);
                    } // for loop

                    MsgStore.updateTimeline();
                    if (cbOk) {

                        var newResp = {
                            'Complete': resp.Complete,
                            'MsgCount': msgObjList.length,
                            'LastMsgTime': resp.LastMsgTime,
                            'MsgKey': resp.MsgKey,
                            'MsgList': msgObjList
                        };
                        sess.isFinished(resp.Complete);
                        cbOk(newResp);
                    }
                }, function (err) {
                    log.error("getC2CHistoryMsgs failed:" + err.ErrorInfo);
                    if (cbErr) cbErr(err);
                });
            };

            //拉群历史消息
            //不传cbOk 和 cbErr，则会调用新消息回调函数
            this.syncGroupMsgs = function (options, cbOk, cbErr) {
                if (options.ReqMsgSeq <= 0) {
                    if (cbErr) {
                        var errInfo = "ReqMsgSeq must be greater than 0";
                        var error = tool.getReturnError(errInfo, -16);
                        cbErr(error);
                    }
                    return;
                }
                var opts = {
                    'GroupId': options.GroupId,
                    'ReqMsgSeq': options.ReqMsgSeq,
                    'ReqMsgNumber': options.ReqMsgNumber
                };
                //读群漫游消息
                proto_getGroupMsgs(opts, function (resp) {
                    var notifyInfo = [];
                    var group_id = resp.GroupId; //返回的群id
                    var msgInfos = resp.RspMsgList; //返回的消息列表
                    var isFinished = resp.IsFinished;

                    if (msgInfos == null || msgInfos === undefined) {
                        if (cbOk) {
                            cbOk([]);
                        }
                        return;
                    }
                    for (var i = msgInfos.length - 1; i >= 0; i--) {
                        var msgInfo = msgInfos[i];
                        //如果是已经删除的消息或者发送者帐号为空或者消息内容为空
                        //IsPlaceMsg=1
                        if (msgInfo.IsPlaceMsg || !msgInfo.From_Account || !msgInfo.MsgBody || msgInfo.MsgBody.length == 0) {
                            continue;
                        }
                        var msg = handlerGroupMsg(msgInfo, true, true, isFinished);
                        if (msg) {
                            notifyInfo.push(msg);
                        }
                    } // for loop
                    if (notifyInfo.length > 0) MsgStore.updateTimeline();
                    if (cbOk) cbOk(notifyInfo);else if (notifyInfo.length > 0) {
                        if (onMsgCallback) onMsgCallback(notifyInfo);
                    }
                }, function (err) {
                    log.error("getGroupMsgs failed:" + err.ErrorInfo);
                    if (cbErr) cbErr(err);
                });
            };

            //处理群消息(普通消息+提示消息)
            //isSyncGroupMsgs 是否主动拉取群消息标志
            //isAddMsgFlag 是否需要保存到MsgStore，如果需要，这里会存在判重逻辑
            var handlerGroupMsg = function handlerGroupMsg(msgInfo, isSyncGroupMsgs, isAddMsgFlag, isFinished) {
                if (msgInfo.IsPlaceMsg || !msgInfo.From_Account || !msgInfo.MsgBody || msgInfo.MsgBody.length == 0) {
                    return null;
                }
                var isSendMsg, id, headUrl, fromAccountNick, fromAccountHeadurl;
                var group_id = msgInfo.ToGroupId;
                var group_name = group_id;
                if (msgInfo.GroupInfo) {
                    //取出群名称
                    if (msgInfo.GroupInfo.GroupName) {
                        group_name = msgInfo.GroupInfo.GroupName;
                    }
                }
                //取出成员昵称
                fromAccountNick = msgInfo.From_Account;
                //fromAccountHeadurl = msgInfo.GroupInfo.From_AccountHeadurl;
                if (msgInfo.GroupInfo) {
                    if (msgInfo.GroupInfo.From_AccountNick) {
                        fromAccountNick = msgInfo.GroupInfo.From_AccountNick;
                    }
                    if (msgInfo.GroupInfo.From_AccountHeadurl) {
                        fromAccountHeadurl = msgInfo.GroupInfo.From_AccountHeadurl;
                    } else {
                        fromAccountHeadurl = null;
                    }
                }
                if (msgInfo.From_Account == ctx.identifier) {
                    //当前用户发送的消息
                    isSendMsg = true;
                    id = msgInfo.From_Account; //读取接收者信息
                    headUrl = '';
                } else {
                    //当前用户收到的消息
                    isSendMsg = false;
                    id = msgInfo.From_Account; //读取发送者信息
                    headUrl = '';
                }
                var sess = MsgStore.sessByTypeId(SESSION_TYPE.GROUP, group_id);
                if (!sess) {
                    sess = new Session(SESSION_TYPE.GROUP, group_id, group_name, headUrl, 0, 0);
                }
                if (typeof isFinished !== "undefined") {
                    sess.isFinished(isFinished || 0);
                }
                var subType = GROUP_MSG_SUB_TYPE.COMMON; //消息类型
                //群提示消息,重新封装下
                if (LONG_POLLINNG_EVENT_TYPE.GROUP_TIP == msgInfo.Event || LONG_POLLINNG_EVENT_TYPE.GROUP_TIP2 == msgInfo.Event) {
                    subType = GROUP_MSG_SUB_TYPE.TIP;
                    var groupTip = msgInfo.MsgBody;
                    msgInfo.MsgBody = [];
                    msgInfo.MsgBody.push({
                        "MsgType": MSG_ELEMENT_TYPE.GROUP_TIP,
                        "MsgContent": groupTip
                    });
                } else if (msgInfo.MsgPriority) {
                    //群点赞消息
                    if (msgInfo.MsgPriority == GROUP_MSG_PRIORITY_TYPE.REDPACKET) {
                        subType = GROUP_MSG_SUB_TYPE.REDPACKET;
                    } else if (msgInfo.MsgPriority == GROUP_MSG_PRIORITY_TYPE.LOVEMSG) {
                        subType = GROUP_MSG_SUB_TYPE.LOVEMSG;
                    }
                }
                var msg = new Msg(sess, isSendMsg, msgInfo.MsgSeq, msgInfo.MsgRandom, msgInfo.MsgTimeStamp, msgInfo.From_Account, subType, fromAccountNick, fromAccountHeadurl);
                var msgBody = null;
                var msgContent = null;
                var msgType = null;
                for (var mi in msgInfo.MsgBody) {
                    msgBody = msgInfo.MsgBody[mi];
                    msgType = msgBody.MsgType;
                    switch (msgType) {
                        case MSG_ELEMENT_TYPE.TEXT:
                            msgContent = new Msg.Elem.Text(msgBody.MsgContent.Text);
                            break;
                        case MSG_ELEMENT_TYPE.FACE:
                            msgContent = new Msg.Elem.Face(msgBody.MsgContent.Index, msgBody.MsgContent.Data);
                            break;
                        case MSG_ELEMENT_TYPE.IMAGE:
                            msgContent = new Msg.Elem.Images(msgBody.MsgContent.UUID, msgBody.MsgContent.ImageFormat || "");
                            for (var j in msgBody.MsgContent.ImageInfoArray) {
                                msgContent.addImage(new Msg.Elem.Images.Image(msgBody.MsgContent.ImageInfoArray[j].Type, msgBody.MsgContent.ImageInfoArray[j].Size, msgBody.MsgContent.ImageInfoArray[j].Width, msgBody.MsgContent.ImageInfoArray[j].Height, msgBody.MsgContent.ImageInfoArray[j].URL));
                            }
                            break;
                        case MSG_ELEMENT_TYPE.SOUND:
                            if (msgBody.MsgContent) {
                                msgContent = new Msg.Elem.Sound(msgBody.MsgContent.UUID, msgBody.MsgContent.Second, msgBody.MsgContent.Size, msgInfo.From_Account, msgInfo.To_Account, msgBody.MsgContent.Download_Flag, SESSION_TYPE.GROUP);
                            } else {
                                msgType = MSG_ELEMENT_TYPE.TEXT;
                                msgContent = new Msg.Elem.Text('[语音消息]下载地址解析出错');
                            }
                            break;
                        case MSG_ELEMENT_TYPE.LOCATION:
                            msgContent = new Msg.Elem.Location(msgBody.MsgContent.Longitude, msgBody.MsgContent.Latitude, msgBody.MsgContent.Desc);
                            break;
                        case MSG_ELEMENT_TYPE.FILE:
                        case MSG_ELEMENT_TYPE.FILE + " ":
                            msgType = MSG_ELEMENT_TYPE.FILE;
                            var fileUrl = getFileDownUrl(msgBody.MsgContent.UUID, msgInfo.From_Account, msgBody.MsgContent.FileName);

                            if (msgBody.MsgContent) {
                                msgContent = new Msg.Elem.File(msgBody.MsgContent.UUID, msgBody.MsgContent.FileName, msgBody.MsgContent.FileSize, msgInfo.From_Account, msgInfo.To_Account, msgBody.MsgContent.Download_Flag, SESSION_TYPE.GROUP);
                            } else {
                                msgType = MSG_ELEMENT_TYPE.TEXT;
                                msgContent = new Msg.Elem.Text('[文件消息]地址解析出错');
                            }
                            break;
                        case MSG_ELEMENT_TYPE.GROUP_TIP:
                            var opType = msgBody.MsgContent.OpType;
                            msgContent = new Msg.Elem.GroupTip(opType, msgBody.MsgContent.Operator_Account, group_id, msgInfo.GroupInfo.GroupName, msgBody.MsgContent.List_Account, msgBody.MsgContent.MsgMemberExtraInfo);
                            if (GROUP_TIP_TYPE.JOIN == opType || GROUP_TIP_TYPE.QUIT == opType) {
                                //加群或退群时，设置最新群成员数
                                msgContent.setGroupMemberNum(msgBody.MsgContent.MemberNum);
                            } else if (GROUP_TIP_TYPE.MODIFY_GROUP_INFO == opType) {
                                //群资料变更
                                var tempIsCallbackFlag = false;
                                var tempNewGroupInfo = {
                                    "GroupId": group_id,
                                    "GroupFaceUrl": null,
                                    "GroupName": null,
                                    "OwnerAccount": null,
                                    "GroupNotification": null,
                                    "GroupIntroduction": null
                                };
                                var msgGroupNewInfo = msgBody.MsgContent.MsgGroupNewInfo;
                                if (msgGroupNewInfo.GroupFaceUrl) {
                                    var tmpNGIFaceUrl = new Msg.Elem.GroupTip.GroupInfo(GROUP_TIP_MODIFY_GROUP_INFO_TYPE.FACE_URL, msgGroupNewInfo.GroupFaceUrl);
                                    msgContent.addGroupInfo(tmpNGIFaceUrl);
                                    tempIsCallbackFlag = true;
                                    tempNewGroupInfo.GroupFaceUrl = msgGroupNewInfo.GroupFaceUrl;
                                }
                                if (msgGroupNewInfo.GroupName) {
                                    var tmpNGIName = new Msg.Elem.GroupTip.GroupInfo(GROUP_TIP_MODIFY_GROUP_INFO_TYPE.NAME, msgGroupNewInfo.GroupName);
                                    msgContent.addGroupInfo(tmpNGIName);
                                    tempIsCallbackFlag = true;
                                    tempNewGroupInfo.GroupName = msgGroupNewInfo.GroupName;
                                }
                                if (msgGroupNewInfo.Owner_Account) {
                                    var tmpNGIOwner = new Msg.Elem.GroupTip.GroupInfo(GROUP_TIP_MODIFY_GROUP_INFO_TYPE.OWNER, msgGroupNewInfo.Owner_Account);
                                    msgContent.addGroupInfo(tmpNGIOwner);
                                    tempIsCallbackFlag = true;
                                    tempNewGroupInfo.OwnerAccount = msgGroupNewInfo.Owner_Account;
                                }
                                if (msgGroupNewInfo.GroupNotification) {
                                    var tmpNGINotification = new Msg.Elem.GroupTip.GroupInfo(GROUP_TIP_MODIFY_GROUP_INFO_TYPE.NOTIFICATION, msgGroupNewInfo.GroupNotification);
                                    msgContent.addGroupInfo(tmpNGINotification);
                                    tempIsCallbackFlag = true;
                                    tempNewGroupInfo.GroupNotification = msgGroupNewInfo.GroupNotification;
                                }
                                if (msgGroupNewInfo.GroupIntroduction) {
                                    var tmpNGIIntroduction = new Msg.Elem.GroupTip.GroupInfo(GROUP_TIP_MODIFY_GROUP_INFO_TYPE.INTRODUCTION, msgGroupNewInfo.GroupIntroduction);
                                    msgContent.addGroupInfo(tmpNGIIntroduction);
                                    tempIsCallbackFlag = true;
                                    tempNewGroupInfo.GroupIntroduction = msgGroupNewInfo.GroupIntroduction;
                                }

                                //回调群资料变化通知方法
                                if (isSyncGroupMsgs == false && tempIsCallbackFlag && onGroupInfoChangeCallback) {
                                    onGroupInfoChangeCallback(tempNewGroupInfo);
                                }
                            } else if (GROUP_TIP_TYPE.MODIFY_MEMBER_INFO == opType) {
                                //群成员变更
                                var memberInfos = msgBody.MsgContent.MsgMemberInfo;
                                for (var n in memberInfos) {
                                    var memberInfo = memberInfos[n];
                                    msgContent.addMemberInfo(new Msg.Elem.GroupTip.MemberInfo(memberInfo.User_Account, memberInfo.ShutupTime));
                                }
                            }
                            break;
                        case MSG_ELEMENT_TYPE.CUSTOM:
                            msgType = MSG_ELEMENT_TYPE.CUSTOM;
                            msgContent = new Msg.Elem.Custom(msgBody.MsgContent.Data, msgBody.MsgContent.Desc, msgBody.MsgContent.Ext);
                            break;
                        default:
                            msgType = MSG_ELEMENT_TYPE.TEXT;
                            msgContent = new Msg.Elem.Text('web端暂不支持' + msgBody.MsgType + '消息');
                            break;
                    }
                    msg.elems.push(new Msg.Elem(msgType, msgContent));
                }

                if (isAddMsgFlag == false) {
                    //不需要保存消息
                    return msg;
                }

                if (MsgStore.addMsg(msg, true)) {
                    msg.extraInfo = msgInfo.GroupInfo.MsgFrom_AccountExtraInfo;
                    return msg;
                } else {
                    return null;
                }
            };

            //初始化
            this.init = function (listeners, cbOk, cbErr) {
                if (!listeners.onMsgNotify) {
                    log.warn('listeners.onMsgNotify is empty');
                }
                onMsgCallback = listeners.onMsgNotify;

                if (listeners.onBigGroupMsgNotify) {
                    onBigGroupMsgCallback = listeners.onBigGroupMsgNotify;
                } else {
                    log.warn('listeners.onBigGroupMsgNotify is empty');
                }

                if (listeners.onC2cEventNotifys) {
                    onC2cEventCallbacks = listeners.onC2cEventNotifys;
                } else {
                    log.warn('listeners.onC2cEventNotifys is empty');
                }
                if (listeners.onGroupSystemNotifys) {
                    onGroupSystemNotifyCallbacks = listeners.onGroupSystemNotifys;
                } else {
                    log.warn('listeners.onGroupSystemNotifys is empty');
                }
                if (listeners.onGroupInfoChangeNotify) {
                    onGroupInfoChangeCallback = listeners.onGroupInfoChangeNotify;
                } else {
                    log.warn('listeners.onGroupInfoChangeNotify is empty');
                }
                if (listeners.onFriendSystemNotifys) {
                    onFriendSystemNotifyCallbacks = listeners.onFriendSystemNotifys;
                } else {
                    log.warn('listeners.onFriendSystemNotifys is empty');
                }
                if (listeners.onProfileSystemNotifys) {
                    onProfileSystemNotifyCallbacks = listeners.onProfileSystemNotifys;
                } else {
                    log.warn('listeners.onProfileSystemNotifys is empty');
                }
                if (listeners.onKickedEventCall) {
                    onKickedEventCall = listeners.onKickedEventCall;
                } else {
                    log.warn('listeners.onKickedEventCall is empty');
                }
                if (listeners.onLongPullingNotify) {
                    onLongPullingNotify = listeners.onLongPullingNotify;
                } else {
                    log.warn('listeners.onKickedEventCall is empty');
                }

                if (listeners.onAppliedDownloadUrl) {
                    onAppliedDownloadUrl = listeners.onAppliedDownloadUrl;
                } else {
                    log.warn('listeners.onAppliedDownloadUrl is empty');
                }

                if (!ctx.identifier || !ctx.userSig) {
                    if (cbOk) {
                        var success = {
                            'ActionStatus': ACTION_STATUS.OK,
                            'ErrorCode': 0,
                            'ErrorInfo': "login success(no login state)"
                        };
                        cbOk(success);
                    }
                    return;
                }

                //初始化
                initMyGroupMaxSeqs(function (resp) {
                    log.info('initMyGroupMaxSeqs success');
                    //初始化文件
                    initIpAndAuthkey(function (initIpAndAuthkeyResp) {
                        log.info('initIpAndAuthkey success');
                        if (cbOk) {
                            log.info('login success(have login state))');
                            var success = {
                                'ActionStatus': ACTION_STATUS.OK,
                                'ErrorCode': 0,
                                'ErrorInfo': "login success"
                            };
                            cbOk(success);
                        }
                        MsgManager.setLongPollingOn(true); //开启长轮询
                        longPollingOn && MsgManager.longPolling(cbOk);
                    }, cbErr);
                }, cbErr);
            };

            //发消息（私聊或群聊）
            this.sendMsg = function (msg, cbOk, cbErr) {
                proto_sendMsg(msg, function (resp) {
                    //私聊时，加入自己的发的消息，群聊时，由于seq和服务器的seq不一样，所以不作处理
                    if (msg.sess.type() == SESSION_TYPE.C2C) {
                        if (!MsgStore.addMsg(msg)) {
                            var errInfo = "sendMsg: addMsg failed!";
                            var error = tool.getReturnError(errInfo, -17);
                            log.error(errInfo);
                            if (cbErr) cbErr(error);
                            return;
                        }
                        //更新信息流时间
                        MsgStore.updateTimeline();
                    }
                    if (cbOk) cbOk(resp);
                }, function (err) {
                    if (cbErr) cbErr(err);
                });
            };
        }();

        //上传文件
        var FileUploader = new function () {
            this.fileMd5 = null;
            //获取文件MD5
            var getFileMD5 = function getFileMD5(file, cbOk, cbErr) {

                //FileReader pc浏览器兼容性
                //Feature   Firefox (Gecko) Chrome  Internet Explorer   Opera   Safari
                //Basic support 3.6 7   10                      12.02   6.0.2
                var fileReader = null;
                try {
                    fileReader = new FileReader(); //分块读取文件对象
                } catch (e) {
                    if (cbErr) {
                        cbErr(tool.getReturnError('当前浏览器不支持FileReader', -18));
                        return;
                    }
                }
                //file的slice方法，注意它的兼容性，在不同浏览器的写法不同
                var blobSlice = File.prototype.mozSlice || File.prototype.webkitSlice || File.prototype.slice;
                if (!blobSlice) {
                    if (cbErr) {
                        cbErr(tool.getReturnError('当前浏览器不支持FileAPI', -19));
                        return;
                    }
                }

                var chunkSize = 2 * 1024 * 1024; //分块大小，2M
                var chunks = Math.ceil(file.size / chunkSize); //总块数
                var currentChunk = 0; //当前块数
                var spark = new SparkMD5(); //获取MD5对象

                fileReader.onload = function (e) {
                    //数据加载完毕事件

                    var binaryStr = "";
                    var bytes = new Uint8Array(e.target.result);
                    var length = bytes.byteLength;
                    for (var i = 0; i < length; i++) {
                        binaryStr += String.fromCharCode(bytes[i]); //二进制转换字符串
                    }
                    spark.appendBinary(binaryStr);
                    currentChunk++;
                    if (currentChunk < chunks) {
                        loadNext(); //读取下一块数据
                    } else {
                        this.fileMd5 = spark.end(); //得到文件MD5值
                        if (cbOk) {
                            cbOk(this.fileMd5);
                        }
                    }
                };
                //分片读取文件

                function loadNext() {
                    var start = currentChunk * chunkSize,
                        end = start + chunkSize >= file.size ? file.size : start + chunkSize;
                    //根据开始和结束位置，切割文件
                    var b = blobSlice.call(file, start, end);
                    //readAsBinaryString ie浏览器不兼容此方法
                    //fileReader.readAsBinaryString(blobSlice.call(file, start, end));
                    fileReader.readAsArrayBuffer(b); //ie，chrome，firefox等主流浏览器兼容此方法
                }

                loadNext(); //开始读取
            };
            //上传图片或文件(用于高版本浏览器，支持FileAPI)
            this.uploadFile = function (options, cbOk, cbErr) {

                var file_upload = {
                    //初始化
                    init: function init(options, cbOk, cbErr) {
                        var me = this;
                        me.file = options.file;
                        //分片上传进度回调事件
                        me.onProgressCallBack = options.onProgressCallBack;
                        //停止上传图片按钮
                        if (options.abortButton) {
                            options.abortButton.onclick = me.abortHandler;
                        }
                        me.total = me.file.size; //文件总大小
                        me.loaded = 0; //已读取字节数
                        me.step = 1080 * 1024; //分块大小，1080K
                        me.sliceSize = 0; //分片大小
                        me.sliceOffset = 0; //当前分片位置
                        me.timestamp = unixtime(); //当前时间戳
                        me.seq = nextSeq(); //请求seq
                        me.random = createRandom(); //请求随机数
                        me.fromAccount = ctx.identifier; //发送者
                        me.toAccount = options.To_Account; //接收者
                        me.fileMd5 = options.fileMd5; //文件MD5
                        me.businessType = options.businessType; //图片或文件的业务类型，群消息:1; c2c消息:2; 个人头像：3; 群头像：4;
                        me.fileType = options.fileType; //文件类型，不填为默认认为上传的是图片；1：图片；2：文件；3：短视频；4：PTT

                        me.cbOk = cbOk; //上传成功回调事件
                        me.cbErr = cbErr; //上传失败回调事件

                        me.reader = new FileReader(); //读取文件对象
                        me.blobSlice = File.prototype.mozSlice || File.prototype.webkitSlice || File.prototype.slice; //file的slice方法,不同浏览器不一样

                        me.reader.onloadstart = me.onLoadStart; //开始读取回调事件
                        me.reader.onprogress = me.onProgress; //读取文件进度回调事件
                        me.reader.onabort = me.onAbort; //停止读取回调事件
                        me.reader.onerror = me.onerror; //读取发生错误回调事件
                        me.reader.onload = me.onLoad; //分片加载完毕回调事件
                        me.reader.onloadend = me.onLoadEnd; //读取文件完毕回调事件
                    },
                    //上传方法
                    upload: function upload() {
                        var me = file_upload;
                        //读取第一块
                        me.readBlob(0);
                    },
                    onLoadStart: function onLoadStart() {
                        var me = file_upload;
                    },
                    onProgress: function onProgress(e) {
                        var me = file_upload;
                        me.loaded += e.loaded;
                        if (me.onProgressCallBack) {
                            me.onProgressCallBack(me.loaded, me.total);
                        }
                    },
                    onAbort: function onAbort() {
                        var me = file_upload;
                    },
                    onError: function onError() {
                        var me = file_upload;
                    },
                    onLoad: function onLoad(e) {
                        var me = file_upload;
                        if (e.target.readyState == FileReader.DONE) {
                            var slice_data_base64 = e.target.result;
                            //注意，一定要去除base64编码头部
                            var pos = slice_data_base64.indexOf(",");
                            if (pos != -1) {
                                slice_data_base64 = slice_data_base64.substr(pos + 1);
                            }
                            //封装上传图片接口的请求参数
                            var opt = {
                                'From_Account': me.fromAccount,
                                'To_Account': me.toAccount,
                                'Busi_Id': me.businessType,
                                'File_Type': me.fileType,
                                'File_Str_Md5': me.fileMd5,
                                'PkgFlag': UPLOAD_RES_PKG_FLAG.BASE64_DATA,
                                'File_Size': me.total,
                                'Slice_Offset': me.sliceOffset,
                                'Slice_Size': me.sliceSize,
                                'Slice_Data': slice_data_base64,
                                'Seq': me.seq,
                                'Timestamp': me.timestamp,
                                'Random': me.random
                            };

                            //上传成功的成功回调
                            var succCallback = function succCallback(resp) {
                                if (resp.IsFinish == 0) {
                                    me.loaded = resp.Next_Offset;
                                    if (me.loaded < me.total) {
                                        me.readBlob(me.loaded);
                                    } else {
                                        me.loaded = me.total;
                                    }
                                } else {

                                    if (me.cbOk) {
                                        var tempResp = {
                                            'ActionStatus': resp.ActionStatus,
                                            'ErrorCode': resp.ErrorCode,
                                            'ErrorInfo': resp.ErrorInfo,
                                            'File_UUID': resp.File_UUID,
                                            'File_Size': resp.Next_Offset,
                                            'URL_INFO': resp.URL_INFO,
                                            'Download_Flag': resp.Download_Flag
                                        };
                                        if (me.fileType == UPLOAD_RES_TYPE.FILE) {
                                            //如果上传的是文件，下载地址需要sdk内部拼接
                                            tempResp.URL_INFO = getFileDownUrl(resp.File_UUID, ctx.identifier, me.file.name);
                                        }
                                        me.cbOk(tempResp);
                                    }
                                }
                                Upload_Retry_Times = 0;
                            };
                            //上传失败的回调
                            var errorCallback = function errorCallback(resp) {
                                if (Upload_Retry_Times < Upload_Retry_Max_Times) {
                                    Upload_Retry_Times++;
                                    setTimeout(function () {
                                        proto_uploadPic(opt, succCallback, errorCallback);
                                    }, 1000);
                                } else {
                                    me.cbErr(resp);
                                }
                                //me.cbErr
                            };
                            //分片上传图片接口
                            proto_uploadPic(opt, succCallback, errorCallback);
                        }
                    },
                    onLoadEnd: function onLoadEnd() {
                        var me = file_upload;
                    },
                    //分片读取文件方法
                    readBlob: function readBlob(start) {
                        var me = file_upload;
                        var blob,
                            file = me.file;
                        var end = start + me.step;
                        if (end > me.total) {
                            end = me.total;
                            me.sliceSize = end - start;
                        } else {
                            me.sliceSize = me.step;
                        }
                        me.sliceOffset = start;
                        //根据起始和结束位置，分片读取文件
                        blob = me.blobSlice.call(file, start, end);
                        //将分片的二进制数据转换为base64编码
                        me.reader.readAsDataURL(blob);
                    },
                    abortHandler: function abortHandler() {
                        var me = file_upload;
                        if (me.reader) {
                            me.reader.abort();
                        }
                    }
                };

                //读取文件MD5
                getFileMD5(options.file, function (fileMd5) {
                    log.info('fileMd5: ' + fileMd5);
                    options.fileMd5 = fileMd5;
                    //初始化上传参数
                    file_upload.init(options, cbOk, cbErr);
                    //开始上传文件
                    file_upload.upload();
                }, cbErr);
            };
        }();

        //web im 基础对象

        //常量对象

        //会话类型
        webim.SESSION_TYPE = SESSION_TYPE;

        webim.MSG_MAX_LENGTH = MSG_MAX_LENGTH;

        //c2c消息子类型
        webim.C2C_MSG_SUB_TYPE = C2C_MSG_SUB_TYPE;

        //群消息子类型
        webim.GROUP_MSG_SUB_TYPE = GROUP_MSG_SUB_TYPE;

        //消息元素类型
        webim.MSG_ELEMENT_TYPE = MSG_ELEMENT_TYPE;

        //群提示消息类型
        webim.GROUP_TIP_TYPE = GROUP_TIP_TYPE;

        //图片类型
        webim.IMAGE_TYPE = IMAGE_TYPE;

        //群系统消息类型
        webim.GROUP_SYSTEM_TYPE = GROUP_SYSTEM_TYPE;

        //好友系统通知子类型
        webim.FRIEND_NOTICE_TYPE = FRIEND_NOTICE_TYPE;

        //群提示消息-群资料变更类型
        webim.GROUP_TIP_MODIFY_GROUP_INFO_TYPE = GROUP_TIP_MODIFY_GROUP_INFO_TYPE;

        //浏览器信息
        webim.BROWSER_INFO = BROWSER_INFO;

        //表情对象
        webim.Emotions = webim.EmotionPicData = emotions;
        //表情标识符和index Map
        webim.EmotionDataIndexs = webim.EmotionPicDataIndex = emotionDataIndexs;

        //腾讯登录服务错误码(托管模式)
        webim.TLS_ERROR_CODE = TLS_ERROR_CODE;

        //连接状态
        webim.CONNECTION_STATUS = CONNECTION_STATUS;

        //上传图片业务类型
        webim.UPLOAD_PIC_BUSSINESS_TYPE = UPLOAD_PIC_BUSSINESS_TYPE;

        //最近联系人类型
        webim.RECENT_CONTACT_TYPE = RECENT_CONTACT_TYPE;

        //上传资源类型
        webim.UPLOAD_RES_TYPE = UPLOAD_RES_TYPE;

        /**************************************/

        //类对象
        //
        //工具对象
        webim.Tool = tool;
        //控制台打印日志对象
        webim.Log = log;

        //消息对象
        webim.Msg = Msg;
        //会话对象
        webim.Session = Session;
        //会话存储对象
        webim.MsgStore = {
            sessMap: function sessMap() {
                return MsgStore.sessMap();
            },
            sessCount: function sessCount() {
                return MsgStore.sessCount();
            },
            sessByTypeId: function sessByTypeId(type, id) {
                return MsgStore.sessByTypeId(type, id);
            },
            delSessByTypeId: function delSessByTypeId(type, id) {
                return MsgStore.delSessByTypeId(type, id);
            },
            resetCookieAndSyncFlag: function resetCookieAndSyncFlag() {
                return MsgStore.resetCookieAndSyncFlag();
            }
        };

        webim.Resources = Resources;

        /**************************************/

        // webim API impl
        //
        //基本接口
        //登录
        webim.login = webim.init = function (loginInfo, listeners, opts, cbOk, cbErr) {

            //初始化连接状态回调函数
            ConnManager.init(listeners.onConnNotify, cbOk, cbErr);

            //登录
            _login(loginInfo, listeners, opts, cbOk, cbErr);
        };
        //登出
        //需要传长轮询id
        //这样登出之后其他的登录实例还可以继续收取消息
        webim.logout = webim.offline = function (cbOk, cbErr) {
            return proto_logout('instance', cbOk, cbErr);
        };

        //登出
        //这种登出方式，所有的实例都将不会收到消息推送，直到重新登录
        webim.logoutAll = function (cbOk, cbErr) {
            return proto_logout('all', cbOk, cbErr);
        };

        //消息管理接口
        //发消息接口（私聊和群聊）
        webim.sendMsg = function (msg, cbOk, cbErr) {
            return MsgManager.sendMsg(msg, cbOk, cbErr);
        };
        //拉取未读c2c消息
        webim.syncMsgs = function (cbOk, cbErr) {
            return MsgManager.syncMsgs(cbOk, cbErr);
        };
        //拉取C2C漫游消息
        webim.getC2CHistoryMsgs = function (options, cbOk, cbErr) {
            return MsgManager.getC2CHistoryMsgs(options, cbOk, cbErr);
        };
        //拉取群漫游消息
        webim.syncGroupMsgs = function (options, cbOk, cbErr) {
            return MsgManager.syncGroupMsgs(options, cbOk, cbErr);
        };

        //上报c2c消息已读
        webim.c2CMsgReaded = function (options, cbOk, cbErr) {
            return MsgStore.c2CMsgReaded(options, cbOk, cbErr);
        };

        //上报群消息已读
        webim.groupMsgReaded = function (options, cbOk, cbErr) {
            return proto_groupMsgReaded(options, cbOk, cbErr);
        };

        //设置聊天会话自动标记已读
        webim.setAutoRead = function (selSess, isOn, isResetAll) {
            return MsgStore.setAutoRead(selSess, isOn, isResetAll);
        };

        //群组管理接口
        //
        //创建群
        webim.createGroup = function (options, cbOk, cbErr) {
            return proto_createGroup(options, cbOk, cbErr);
        };
        //创建群-高级接口
        webim.createGroupHigh = function (options, cbOk, cbErr) {
            return proto_createGroupHigh(options, cbOk, cbErr);
        };
        //申请加群
        webim.applyJoinGroup = function (options, cbOk, cbErr) {
            return proto_applyJoinGroup(options, cbOk, cbErr);
        };
        //处理加群申请(同意或拒绝)
        webim.handleApplyJoinGroupPendency = function (options, cbOk, cbErr) {
            return proto_handleApplyJoinGroupPendency(options, cbOk, cbErr);
        };

        //获取群组未决列表
        webim.getPendencyGroup = function (options, cbOk, cbErr) {
            return proto_getPendencyGroup(options, cbOk, cbErr);
        };

        //群未决已读上报
        webim.getPendencyGroupRead = function (options, cbOk, cbErr) {
            return proto_getPendencyGroupRead(options, cbOk, cbErr);
        };

        //处理邀请进群申请(同意或拒绝)
        webim.handleInviteJoinGroupRequest = function (options, cbOk, cbErr) {
            return proto_handleInviteJoinGroupRequest(options, cbOk, cbErr);
        };

        //删除加群申请
        webim.deleteApplyJoinGroupPendency = function (options, cbOk, cbErr) {
            return proto_deleteC2CMsg(options, cbOk, cbErr);
        };

        //主动退群
        webim.quitGroup = function (options, cbOk, cbErr) {
            return proto_quitGroup(options, cbOk, cbErr);
        };
        //搜索群组(根据名称)
        webim.searchGroupByName = function (options, cbOk, cbErr) {
            return proto_searchGroupByName(options, cbOk, cbErr);
        };
        //获取群组公开资料(根据群id搜索)
        webim.getGroupPublicInfo = function (options, cbOk, cbErr) {
            return proto_getGroupPublicInfo(options, cbOk, cbErr);
        };
        //获取群组详细资料-高级接口
        webim.getGroupInfo = function (options, cbOk, cbErr) {
            return proto_getGroupInfo(options, cbOk, cbErr);
        };
        //修改群基本资料
        webim.modifyGroupBaseInfo = function (options, cbOk, cbErr) {
            return proto_modifyGroupBaseInfo(options, cbOk, cbErr);
        };
        //获取群成员列表
        webim.getGroupMemberInfo = function (options, cbOk, cbErr) {
            return proto_getGroupMemberInfo(options, cbOk, cbErr);
        };
        //邀请好友加群
        webim.addGroupMember = function (options, cbOk, cbErr) {
            return proto_addGroupMember(options, cbOk, cbErr);
        };
        //修改群成员资料
        webim.modifyGroupMember = function (options, cbOk, cbErr) {
            return proto_modifyGroupMember(options, cbOk, cbErr);
        };
        //删除群成员
        webim.deleteGroupMember = function (options, cbOk, cbErr) {
            return proto_deleteGroupMember(options, cbOk, cbErr);
        };
        //解散群
        webim.destroyGroup = function (options, cbOk, cbErr) {
            return proto_destroyGroup(options, cbOk, cbErr);
        };
        //转让群组
        webim.changeGroupOwner = function (options, cbOk, cbErr) {
            return proto_changeGroupOwner(options, cbOk, cbErr);
        };

        //获取我的群组列表-高级接口
        webim.getJoinedGroupListHigh = function (options, cbOk, cbErr) {
            return proto_getJoinedGroupListHigh(options, cbOk, cbErr);
        };
        //获取群成员角色
        webim.getRoleInGroup = function (options, cbOk, cbErr) {
            return proto_getRoleInGroup(options, cbOk, cbErr);
        };
        //设置群成员禁言时间
        webim.forbidSendMsg = function (options, cbOk, cbErr) {
            return proto_forbidSendMsg(options, cbOk, cbErr);
        };
        //发送自定义群系统通知
        webim.sendCustomGroupNotify = function (options, cbOk, cbErr) {
            return proto_sendCustomGroupNotify(options, cbOk, cbErr);
        };

        //进入大群
        webim.applyJoinBigGroup = function (options, cbOk, cbErr) {
            return proto_applyJoinBigGroup(options, cbOk, cbErr);
        };
        //退出大群
        webim.quitBigGroup = function (options, cbOk, cbErr) {
            return proto_quitBigGroup(options, cbOk, cbErr);
        };

        //资料关系链管理接口
        //
        //获取个人资料接口，可用于搜索用户
        webim.getProfilePortrait = function (options, cbOk, cbErr) {
            return proto_getProfilePortrait(options, cbOk, cbErr);
        };
        //设置个人资料
        webim.setProfilePortrait = function (options, cbOk, cbErr) {
            return proto_setProfilePortrait(options, cbOk, cbErr);
        };
        //申请加好友
        webim.applyAddFriend = function (options, cbOk, cbErr) {
            return proto_applyAddFriend(options, cbOk, cbErr);
        };
        //获取好友申请列表
        webim.getPendency = function (options, cbOk, cbErr) {
            return proto_getPendency(options, cbOk, cbErr);
        };
        //好友申请列表已读上报
        webim.getPendencyReport = function (options, cbOk, cbErr) {
            return proto_getPendencyReport(options, cbOk, cbErr);
        };
        //删除好友申请
        webim.deletePendency = function (options, cbOk, cbErr) {
            return proto_deletePendency(options, cbOk, cbErr);
        };
        //处理好友申请
        webim.responseFriend = function (options, cbOk, cbErr) {
            return proto_responseFriend(options, cbOk, cbErr);
        };
        //获取我的好友
        webim.getAllFriend = function (options, cbOk, cbErr) {
            return proto_getAllFriend(options, cbOk, cbErr);
        };
        //删除会话
        webim.deleteChat = function (options, cbOk, cbErr) {
            return proto_deleteChat(options, cbOk, cbErr);
        };
        //删除好友
        webim.deleteFriend = function (options, cbOk, cbErr) {
            return proto_deleteFriend(options, cbOk, cbErr);
        };
        //拉黑
        webim.addBlackList = function (options, cbOk, cbErr) {
            return proto_addBlackList(options, cbOk, cbErr);
        };
        //删除黑名单
        webim.deleteBlackList = function (options, cbOk, cbErr) {
            return proto_deleteBlackList(options, cbOk, cbErr);
        };
        //获取我的黑名单
        webim.getBlackList = function (options, cbOk, cbErr) {
            return proto_getBlackList(options, cbOk, cbErr);
        };

        //获取最近会话
        webim.getRecentContactList = function (options, cbOk, cbErr) {
            return proto_getRecentContactList(options, cbOk, cbErr);
        };

        //图片或文件服务接口
        //
        //上传文件接口（高版本浏览器）
        webim.uploadFile = webim.uploadPic = function (options, cbOk, cbErr) {
            return FileUploader.uploadFile(options, cbOk, cbErr);
        };
        //提交上传图片表单接口（用于低版本ie）
        webim.submitUploadFileForm = function (options, cbOk, cbErr) {
            return FileUploader.submitUploadFileForm(options, cbOk, cbErr);
        };
        //上传图片或文件(Base64)接口
        webim.uploadFileByBase64 = webim.uploadPicByBase64 = function (options, cbOk, cbErr) {
            //请求参数
            var opt = {
                'To_Account': options.toAccount,
                'Busi_Id': options.businessType,
                'File_Type': options.File_Type,
                'File_Str_Md5': options.fileMd5,
                'PkgFlag': UPLOAD_RES_PKG_FLAG.BASE64_DATA,
                'File_Size': options.totalSize,
                'Slice_Offset': 0,
                'Slice_Size': options.totalSize,
                'Slice_Data': options.base64Str,
                'Seq': nextSeq(),
                'Timestamp': unixtime(),
                'Random': createRandom()
            };
            return proto_uploadPic(opt, cbOk, cbErr);
        };

        //获取长轮询ID
        webim.getLongPollingId = function (options, cbOk, cbErr) {
            return proto_getLongPollingId(options, cbOk, cbErr);
        };

        //获取下载地址
        webim.applyDownload = function (options, cbOk, cbErr) {
            return proto_applyDownload(options, cbOk, cbErr);
        };

        //检查是否登录
        webim.checkLogin = function (cbErr, isNeedCallBack) {
            return checkLogin(cbErr, isNeedCallBack);
        };
    })(webim);
    return webim;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYmltX3d4LmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJBcnJheSIsInByb3RvdHlwZSIsImZvckVhY2giLCJjYWxsYmFjayIsImkiLCJsZW5ndGgiLCJhcHBseSIsIm1zZ0NhY2hlIiwid2ViaW0iLCJsb2dpbiIsImxvZ2luSW5mbyIsImxpc3RlbmVycyIsIm9wdGlvbnMiLCJzeW5jTXNncyIsImNiT2siLCJjYkVyciIsImdldEMyQ0hpc3RvcnlNc2dzIiwic3luY0dyb3VwTXNncyIsInNlbmRNc2ciLCJtc2ciLCJsb2dvdXQiLCJzZXRBdXRvUmVhZCIsInNlbFNlc3MiLCJpc09uIiwiaXNSZXNldEFsbCIsImdldFByb2ZpbGVQb3J0cmFpdCIsInNldFByb2ZpbGVQb3J0cmFpdCIsImFwcGx5QWRkRnJpZW5kIiwiZ2V0UGVuZGVuY3kiLCJkZWxldGVQZW5kZW5jeSIsInJlc3BvbnNlRnJpZW5kIiwiZ2V0QWxsRnJpZW5kIiwiZGVsZXRlRnJpZW5kIiwiYWRkQmxhY2tMaXN0IiwiZ2V0QmxhY2tMaXN0IiwiZGVsZXRlQmxhY2tMaXN0IiwidXBsb2FkUGljIiwiY3JlYXRlR3JvdXAiLCJhcHBseUpvaW5Hcm91cCIsImhhbmRsZUFwcGx5Sm9pbkdyb3VwIiwiZGVsZXRlQXBwbHlKb2luR3JvdXBQZW5kZW5jeSIsInF1aXRHcm91cCIsImdldEdyb3VwUHVibGljSW5mbyIsImdldEdyb3VwSW5mbyIsIm1vZGlmeUdyb3VwQmFzZUluZm8iLCJkZXN0cm95R3JvdXAiLCJnZXRKb2luZWRHcm91cExpc3RIaWdoIiwiZ2V0R3JvdXBNZW1iZXJJbmZvIiwiYWRkR3JvdXBNZW1iZXIiLCJtb2RpZnlHcm91cE1lbWJlciIsImZvcmJpZFNlbmRNc2ciLCJkZWxldGVHcm91cE1lbWJlciIsImdldFBlbmRlbmN5R3JvdXAiLCJnZXRQZW5kZW5jeVJlcG9ydCIsImdldFBlbmRlbmN5R3JvdXBSZWFkIiwic2VuZEN1c3RvbUdyb3VwTm90aWZ5IiwiTXNnIiwic2VzcyIsImlzU2VuZCIsInNlcSIsInJhbmRvbSIsInRpbWUiLCJmcm9tQWNjb3VudCIsInN1YlR5cGUiLCJmcm9tQWNjb3VudE5pY2siLCJmcm9tQWNjb3VudEhlYWR1cmwiLCJNc2dTdG9yZSIsInNlc3NNYXAiLCJzZXNzQ291bnQiLCJzZXNzQnlUeXBlSWQiLCJ0eXBlIiwiaWQiLCJkZWxTZXNzQnlUeXBlSWQiLCJyZXNldENvb2tpZUFuZFN5bmNGbGFnIiwiZG93bmxvYWRNYXAiLCJTREsiLCJpc0FjY2Vzc0Zvcm1hRW52aXJvbm1lbnQiLCJTUlZfSE9TVCIsIkJST1dTRVJfSU5GTyIsImxvd2VyQlIiLCJTUlZfTkFNRSIsIlNSVl9OQU1FX1ZFUiIsIkNNRF9FVkVOVF9JRF9NQVAiLCJTRVNTSU9OX1RZUEUiLCJSRUNFTlRfQ09OVEFDVF9UWVBFIiwiTVNHX01BWF9MRU5HVEgiLCJBQ1RJT05fU1RBVFVTIiwiRVJST1JfQ09ERV9DVVNUT00iLCJNU0dfRUxFTUVOVF9UWVBFIiwiSU1BR0VfVFlQRSIsIklNQUdFX0ZPUk1BVCIsIkpQRyIsIkpQRUciLCJHSUYiLCJQTkciLCJCTVAiLCJVTktOT1dOIiwiVVBMT0FEX1JFU19QS0dfRkxBRyIsIkRPV05MT0FEX0ZJTEUiLCJET1dOTE9BRF9GSUxFX1RZUEUiLCJVUExPQURfUkVTX1RZUEUiLCJWRVJTSU9OX0lORk8iLCJMT05HX1BPTExJTk5HX0VWRU5UX1RZUEUiLCJDMkNfTVNHX1NVQl9UWVBFIiwiQzJDX0VWRU5UX1NVQl9UWVBFIiwiR1JPVVBfTVNHX1NVQl9UWVBFIiwiR1JPVVBfTVNHX1BSSU9SSVRZX1RZUEUiLCJHUk9VUF9USVBfVFlQRSIsIkdST1VQX1RJUF9NT0RJRllfR1JPVVBfSU5GT19UWVBFIiwiR1JPVVBfU1lTVEVNX1RZUEUiLCJGUklFTkRfTk9USUNFX1RZUEUiLCJQUk9GSUxFX05PVElDRV9UWVBFIiwiVExTX0VSUk9SX0NPREUiLCJDT05ORUNUSU9OX1NUQVRVUyIsIlVQTE9BRF9QSUNfQlVTU0lORVNTX1RZUEUiLCJGUklFTkRfV1JJVEVfTVNHX0FDVElPTiIsImFqYXhEZWZhdWx0VGltZU91dCIsIk9LX0RFTEFZX1RJTUUiLCJFUlJPUl9ERUxBWV9USU1FIiwiR1JPVVBfVElQX01BWF9VU0VSX0NPVU5UIiwiY3VyTG9uZ1BvbGxpbmdTdGF0dXMiLCJJTklUIiwibG9uZ1BvbGxpbmdPZmZDYWxsYmFja0ZsYWciLCJjdXJMb25nUG9sbGluZ1JldEVycm9yQ291bnQiLCJsb25nUG9sbGluZ0RlZmF1bHRUaW1lT3V0IiwibG9uZ1BvbGxpbmdJbnRlcnZhbFRpbWUiLCJsb25nUG9sbGluZ1RpbWVPdXRFcnJvckNvZGUiLCJsb25nUG9sbGluZ0tpY2tlZEVycm9yQ29kZSIsImxvbmdQb2xsaW5nUGFja2FnZVRvb0xhcmdlRXJyb3JDb2RlIiwiTG9uZ1BvbGxpbmdJZCIsImN1ckJpZ0dyb3VwTG9uZ1BvbGxpbmdSZXRFcnJvckNvdW50IiwiTE9OR19QT0xMSU5HX01BWF9SRVRfRVJST1JfQ09VTlQiLCJVcGxvYWRfUmV0cnlfVGltZXMiLCJVcGxvYWRfUmV0cnlfTWF4X1RpbWVzIiwidXBsb2FkUmVzdWx0SWZyYW1lSWQiLCJpcExpc3QiLCJhdXRoa2V5IiwiZXhwaXJlVGltZSIsIkVSUk9SIiwiY3R4Iiwic2RrQXBwSUQiLCJhcHBJREF0M3JkIiwiYWNjb3VudFR5cGUiLCJpZGVudGlmaWVyIiwidGlueWlkIiwiaWRlbnRpZmllck5pY2siLCJ1c2VyU2lnIiwiYTIiLCJjb250ZW50VHlwZSIsImFwbiIsIm9wdCIsInhtbEh0dHBPYmpTZXEiLCJ4bWxIdHRwT2JqTWFwIiwiY3VyU2VxIiwidGVtcEMyQ01zZ0xpc3QiLCJ0ZW1wQzJDSGlzdG9yeU1zZ0xpc3QiLCJtYXhBcGlSZXBvcnRJdGVtQ291bnQiLCJhcGlSZXBvcnRJdGVtcyIsIlJlc291cmNlcyIsImVtb3Rpb25EYXRhSW5kZXhzIiwiZW1vdGlvbnMiLCJ0b29sIiwiZm9ybWF0VGltZVN0YW1wIiwidGltZXN0YW1wIiwiZm9ybWF0IiwiZm9ybWF0VGltZSIsImRhdGUiLCJEYXRlIiwibyIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJ0ZXN0IiwicmVwbGFjZSIsIlJlZ0V4cCIsIiQxIiwiZ2V0RnVsbFllYXIiLCJzdWJzdHIiLCJrIiwiZ3JvdXBUeXBlRW4yQ2giLCJ0eXBlX2VuIiwidHlwZV9jaCIsImdyb3VwVHlwZUNoMkVuIiwiZ3JvdXBSb2xlRW4yQ2giLCJyb2xlX2VuIiwicm9sZV9jaCIsImdyb3VwUm9sZUNoMkVuIiwiZ3JvdXBNc2dGbGFnRW4yQ2giLCJtc2dfZmxhZ19lbiIsIm1zZ19mbGFnX2NoIiwiZ3JvdXBNc2dGbGFnQ2gyRW4iLCJmb3JtYXRUZXh0Mkh0bWwiLCJ0ZXh0IiwiaHRtbCIsInhzc0ZpbHRlciIsImZvcm1hdEh0bWwyVGV4dCIsImdldFN0ckJ5dGVzIiwic3RyIiwidW5kZWZpbmVkIiwidG90YWwiLCJjaGFyQ29kZSIsImxlbiIsImNoYXJDb2RlQXQiLCJ2YWwiLCJ0b1N0cmluZyIsInRyaW1TdHIiLCJ2YWxpZE51bWJlciIsIm1hdGNoIiwiZ2V0UmV0dXJuRXJyb3IiLCJlcnJvckluZm8iLCJlcnJvckNvZGUiLCJlcnJvciIsIkZBSUwiLCJyZXBsYWNlT2JqZWN0Iiwia2V5TWFwIiwianNvbiIsImEiLCJsb2ciLCJvbiIsInNldE9uIiwib25GbGFnIiwiZ2V0T24iLCJsb2dTdHIiLCJjb25zb2xlIiwiZSIsIndhcm4iLCJpbmZvIiwiZGVidWciLCJ1bml4dGltZSIsImQiLCJNYXRoIiwicm91bmQiLCJnZXRUaW1lIiwiZnJvbXVuaXh0aW1lIiwidCIsIm5leHRTZXEiLCJjcmVhdGVSYW5kb20iLCJhamF4UmVxdWVzdCIsIm1ldGgiLCJ1cmwiLCJyZXEiLCJ0aW1lb3V0IiwiaXNMb25nUG9sbGluZyIsInd4IiwicmVxdWVzdCIsImRhdGEiLCJkYXRhVHlwZSIsIm1ldGhvZCIsImhlYWRlciIsInN1Y2Nlc3MiLCJyZXMiLCJmYWlsIiwic2V0VGltZW91dCIsImVyckluZm8iLCJhamF4UmVxdWVzdEpzb24iLCJKU09OIiwic3RyaW5naWZ5IiwicmVzcCIsImlzTG9naW4iLCJjaGVja0xvZ2luIiwiaXNOZWVkQ2FsbEJhY2siLCJpc0FjY2Vzc0Zvcm1hbEVudiIsImdldEFwaVVybCIsInNydk5hbWUiLCJjbWQiLCJzcnZIb3N0IiwiRk9STUFMIiwiQ09NTU9OIiwiVEVTVCIsIlBJQyIsIkFQUElEIiwiVkVSU0lPTiIsIlBMQUFURk9STSIsImVuY29kZVVSSUNvbXBvbmVudCIsImdldFNvdW5kRG93blVybCIsInV1aWQiLCJzZW5kZXJJZCIsInNvdW5kVXJsIiwiQlVTU0lORVNTX0lEIiwiU09VTkQiLCJnZXRGaWxlRG93blVybCIsImZpbGVOYW1lIiwiZmlsZVVybCIsIkZJTEUiLCJnZXRGaWxlRG93blVybFYyIiwiZG93bkZsYWciLCJyZWNlaXZlcklkIiwiYnVzaUlkIiwiU0VSVkVSX1ZFUlNJT04iLCJwcm90b19hcHBseURvd25sb2FkIiwiZXJyb3JfY29kZSIsInJlc3BvbnNlX2luZm8iLCJvbkFwcGxpZWREb3dubG9hZFVybCIsIm1hcHMiLCJjbGVhclhtbEh0dHBPYmpNYXAiLCJ4bWxIdHRwT2JqIiwiYWJvcnQiLCJjbGVhclNkayIsIk1zZ01hbmFnZXIiLCJjbGVhciIsIl9sb2dpbiIsImlzTG9nT24iLCJwcm90b19hY2Nlc3NsYXllciIsInByb3RvX2xvZ2luIiwiaGVhZHVybCIsImluaXQiLCJtbUluaXRSZXNwIiwiaW5pdEJyb3dzZXJJbmZvIiwicmVwb3J0QXBpUXVhbGl0eSIsImV2ZW50SWQiLCJyZXBvcnRUaW1lIiwidW5pcUtleSIsIm1zZ0NtZEVycm9yQ29kZSIsInN1YnN0cmluZyIsInJwdEV2dEl0ZW0iLCJsb2dpbkFwaVJlcG9ydEl0ZW1zIiwicHVzaCIsImxvZ2luUmVwb3J0T3B0IiwicHJvdG9fcmVwb3J0QXBpUXVhbGl0eSIsImVyciIsInJlcG9ydE9wdCIsIkNvbm5NYW5hZ2VyIiwiYXBpQ2FsbCIsIldFQl9JTSIsIkVycm9yQ29kZSIsIldlYkltQWNjZXNzTGF5ZXIiLCJPUEVOX0lNIiwibG9naW5SZXNwIiwiVGlueUlkIiwiQTJLZXkiLCJ0YWdfbGlzdCIsInByb3RvX2dldFByb2ZpbGVQb3J0cmFpdCIsIm5pY2siLCJpbWFnZSIsIlVzZXJQcm9maWxlSXRlbSIsImoiLCJQcm9maWxlSXRlbSIsIlRhZyIsIlZhbHVlIiwicHJvdG9fbG9nb3V0IiwiT0siLCJwcm90b19zZW5kTXNnIiwibXNnSW5mbyIsIkMyQyIsIm9mZmxpbmVQdXNoSW5mbyIsIkdST1VQIiwiZ2V0U3ViVHlwZSIsIk1zZ1ByaW9yaXR5IiwiUkVEUEFDS0VUIiwiTE9WRU1TRyIsIlRJUCIsImVsZW1zIiwiZWxlbSIsIm1zZ0NvbnRlbnQiLCJtc2dUeXBlIiwiVEVYVCIsImNvbnRlbnQiLCJGQUNFIiwiaW5kZXgiLCJJTUFHRSIsIkltYWdlSW5mb0FycmF5Iiwic2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiSW1hZ2VGb3JtYXQiLCJVVUlEIiwiTE9DQVRJT04iLCJuYW1lIiwiQ1VTVE9NIiwiZGVzYyIsImV4dCIsIlB1c2hJbmZvQm9vbGVhbiIsIk9mZmxpbmVQdXNoSW5mbyIsIlB1c2hJbmZvIiwiTXNnQm9keSIsInByb3RvX2xvbmdQb2xsaW5nIiwic3RvcFBvbGxpbmciLCJwcm90b19iaWdHcm91cExvbmdQb2xsaW5nIiwiQklHX0dST1VQX0xPTkdfUE9MTElORyIsInByb3RvX2dldE1zZ3MiLCJjb29raWUiLCJzeW5jRmxhZyIsIk1zZ0xpc3QiLCJTeW5jRmxhZyIsIkNvb2tpZSIsInByb3RvX2MyQ01zZ1JlYWRlZCIsImMyQ01zZ1JlYWRlZEl0ZW0iLCJ0bXBDMkNNc2dSZWFkZWRJdGVtIiwiaXRlbSIsInRvQWNjb3VudCIsImxhc3RlZE1zZ1RpbWUiLCJDMkNNc2dSZWFkZWQiLCJwcm90b19kZWxldGVDMkNNc2ciLCJwcm90b19nZXRDMkNIaXN0b3J5TXNncyIsInJlcU1zZ0NvdW50IiwiTWF4Q250IiwiY29tcGxldGUiLCJDb21wbGV0ZSIsInJzcE1zZ0NvdW50IiwibXNnS2V5IiwiTXNnS2V5IiwibGFzdE1zZ1RpbWUiLCJMYXN0TXNnVGltZSIsIm5ldHhPcHRpb25zIiwiUGVlcl9BY2NvdW50IiwicHJvdG9fY3JlYXRlR3JvdXAiLCJUeXBlIiwiTmFtZSIsIm1lbWJlcl9saXN0IiwiTWVtYmVyTGlzdCIsIkdyb3VwSWQiLCJPd25lcl9BY2NvdW50IiwiSW50cm9kdWN0aW9uIiwiTm90aWZpY2F0aW9uIiwiTWF4TWVtYmVyQ291bnQiLCJBcHBseUpvaW5PcHRpb24iLCJBcHBEZWZpbmVkRGF0YSIsIkZhY2VVcmwiLCJwcm90b19jcmVhdGVHcm91cEhpZ2giLCJwcm90b19tb2RpZnlHcm91cEJhc2VJbmZvIiwicHJvdG9fYXBwbHlKb2luR3JvdXAiLCJTdHJpbmciLCJBcHBseU1zZyIsIlVzZXJEZWZpbmVkRmllbGQiLCJCaWdHcm91cElkIiwicHJvdG9fYXBwbHlKb2luQmlnR3JvdXAiLCJCSUdfR1JPVVAiLCJKb2luZWRTdGF0dXMiLCJMb25nUG9sbGluZ0tleSIsInNldEJpZ0dyb3VwTG9uZ1BvbGxpbmdPbiIsInNldEJpZ0dyb3VwTG9uZ1BvbGxpbmdLZXkiLCJzZXRCaWdHcm91cExvbmdQb2xsaW5nTXNnTWFwIiwiYmlnR3JvdXBMb25nUG9sbGluZyIsInByb3RvX2hhbmRsZUFwcGx5Sm9pbkdyb3VwUGVuZGVuY3kiLCJBcHBsaWNhbnRfQWNjb3VudCIsIkhhbmRsZU1zZyIsIkF1dGhlbnRpY2F0aW9uIiwiQXBwcm92YWxNc2ciLCJwcm90b19nZXRQZW5kZW5jeUdyb3VwIiwiU3RhcnRUaW1lIiwiTGltaXQiLCJwcm90b19nZXRQZW5kZW5jeUdyb3VwUmVhZCIsIlJlcG9ydFRpbWUiLCJwcm90b19oYW5kbGVJbnZpdGVKb2luR3JvdXBSZXF1ZXN0IiwiSW52aXRlcl9BY2NvdW50IiwicHJvdG9fcXVpdEdyb3VwIiwicHJvdG9fcXVpdEJpZ0dyb3VwIiwicmVzZXRCaWdHcm91cExvbmdQb2xsaW5nSW5mbyIsInByb3RvX3NlYXJjaEdyb3VwQnlOYW1lIiwicHJvdG9fZ2V0R3JvdXBQdWJsaWNJbmZvIiwiR3JvdXBJZExpc3QiLCJHcm91cEJhc2VQdWJsaWNJbmZvRmlsdGVyIiwiRXJyb3JJbmZvIiwiR3JvdXBJbmZvIiwiQWN0aW9uU3RhdHVzIiwicHJvdG9fZ2V0R3JvdXBJbmZvIiwiR3JvdXBCYXNlSW5mb0ZpbHRlciIsIk1lbWJlckluZm9GaWx0ZXIiLCJBcHBEZWZpbmVkRGF0YUZpbHRlcl9Hcm91cCIsIlJlc3BvbnNlRmlsdGVyIiwiQXBwRGVmaW5lZERhdGFGaWx0ZXJfR3JvdXBNZW1iZXIiLCJwcm90b19nZXRHcm91cE1lbWJlckluZm8iLCJPZmZzZXQiLCJNZW1iZXJSb2xlRmlsdGVyIiwicHJvdG9fYWRkR3JvdXBNZW1iZXIiLCJTaWxlbmNlIiwicHJvdG9fbW9kaWZ5R3JvdXBNZW1iZXIiLCJNZW1iZXJfQWNjb3VudCIsIlJvbGUiLCJNc2dGbGFnIiwiU2h1dFVwVGltZSIsIk5hbWVDYXJkIiwiQXBwTWVtYmVyRGVmaW5lZERhdGEiLCJwcm90b19kZWxldGVHcm91cE1lbWJlciIsIk1lbWJlclRvRGVsX0FjY291bnQiLCJSZWFzb24iLCJwcm90b19kZXN0cm95R3JvdXAiLCJwcm90b19jaGFuZ2VHcm91cE93bmVyIiwicHJvdG9fZ2V0Sm9pbmVkR3JvdXBMaXN0SGlnaCIsIkdyb3VwVHlwZSIsIlNlbGZJbmZvRmlsdGVyIiwicHJvdG9fZ2V0Um9sZUluR3JvdXAiLCJVc2VyX0FjY291bnQiLCJwcm90b19mb3JiaWRTZW5kTXNnIiwiTWVtYmVyc19BY2NvdW50IiwicHJvdG9fc2VuZEN1c3RvbUdyb3VwTm90aWZ5IiwicHJvdG9fZ2V0R3JvdXBNc2dzIiwiUmVxTXNnU2VxIiwiUmVxTXNnTnVtYmVyIiwicHJvdG9fZ3JvdXBNc2dSZWFkZWQiLCJNc2dSZWFkZWRTZXEiLCJjb252ZXJ0RXJyb3JFbjJaaEZyaWVuZCIsImVycm9yQWNjb3VudCIsIkZhaWxfQWNjb3VudCIsIkludmFsaWRfQWNjb3VudCIsImZhaWxDb3VudCIsIlJlc3VsdEl0ZW0iLCJUb19BY2NvdW50IiwicmVzdWx0Q29kZSIsIlJlc3VsdENvZGUiLCJSZXN1bHRJbmZvIiwicHJvdG9fYXBwbHlBZGRGcmllbmQiLCJGUklFTkQiLCJBZGRGcmllbmRJdGVtIiwibmV3UmVzcCIsInByb3RvX2RlbGV0ZUZyaWVuZCIsIkRlbGV0ZVR5cGUiLCJwcm90b19kZWxldGVDaGF0IiwiY2hhdFR5cGUiLCJERUxfQ0hBVCIsInByb3RvX2dldFBlbmRlbmN5IiwiUGVuZGVuY3lUeXBlIiwiTWF4TGltaXRlZCIsIkxhc3RTZXF1ZW5jZSIsInByb3RvX2dldFBlbmRlbmN5UmVwb3J0IiwiTGF0ZXN0UGVuZGVuY3lUaW1lU3RhbXAiLCJwcm90b19kZWxldGVQZW5kZW5jeSIsInByb3RvX3Jlc3BvbnNlRnJpZW5kIiwiUmVzcG9uc2VGcmllbmRJdGVtIiwicHJvdG9fZ2V0QWxsRnJpZW5kIiwiVGltZVN0YW1wIiwiU3RhcnRJbmRleCIsIkdldENvdW50IiwiTGFzdFN0YW5kYXJkU2VxdWVuY2UiLCJUYWdMaXN0IiwiUFJPRklMRSIsInByb3RvX3NldFByb2ZpbGVQb3J0cmFpdCIsInByb2ZpbGUiLCJwcm90b19hZGRCbGFja0xpc3QiLCJwcm90b19kZWxldGVCbGFja0xpc3QiLCJwcm90b19nZXRCbGFja0xpc3QiLCJwcm90b19nZXRSZWNlbnRDb250YWN0TGlzdCIsIlJFQ0VOVF9DT05UQUNUIiwiQ291bnQiLCJwcm90b191cGxvYWRQaWMiLCJjbWROYW1lIiwiQVBQX1ZFUlNJT04iLCJTZXEiLCJUaW1lc3RhbXAiLCJSYW5kb20iLCJGaWxlX1N0cl9NZDUiLCJGaWxlX1NpemUiLCJGaWxlX1R5cGUiLCJCdXNpX0lkIiwiUGtnRmxhZyIsIlNsaWNlX09mZnNldCIsIlNsaWNlX1NpemUiLCJTbGljZV9EYXRhIiwicHJvdG9fZ2V0SXBBbmRBdXRoa2V5IiwiSU1fT1BFTl9TVEFUIiwicHJvdG9fZ2V0TG9uZ1BvbGxpbmdJZCIsIm9uQ29ubkNhbGxiYWNrIiwib25Db25uTm90aWZ5IiwiY2FsbEJhY2siLCJ0ZW1wRXJyb3JJbmZvIiwiU3JjRXJyb3JJbmZvIiwiU2Vzc2lvbiIsImljb24iLCJfaW1wbCIsInNrZXkiLCJ1bnJlYWQiLCJpc0F1dG9SZWFkIiwiY3VyTWF4TXNnU2VxIiwibXNncyIsImlzRmluaXNoZWQiLCJtc2dDb3VudCIsIl9pbXBsX2FkZE1zZyIsIkMyQ01zZ1JlYWRlZEl0ZW0iLCJCb29sZWFuIiwiZ2V0U2Vzc2lvbiIsImdldFR5cGUiLCJnZXRGcm9tQWNjb3VudCIsImdldEZyb21BY2NvdW50TmljayIsImdldElzU2VuZCIsImdldFNlcSIsImdldFJhbmRvbSIsImdldEVsZW1zIiwiZ2V0TXNnVW5pcXVlSWQiLCJ1bmlxdWVJZCIsImFkZFRleHQiLCJhZGRFbGVtIiwiRWxlbSIsImFkZEZhY2UiLCJmYWNlIiwiYWRkSW1hZ2UiLCJhZGRMb2NhdGlvbiIsImxvY2F0aW9uIiwiYWRkRmlsZSIsImZpbGUiLCJhZGRDdXN0b20iLCJjdXN0b20iLCJ0b0h0bWwiLCJ2YWx1ZSIsImdldENvbnRlbnQiLCJUZXh0IiwiZ2V0VGV4dCIsIkZhY2UiLCJnZXRJbmRleCIsImdldERhdGEiLCJmYWNlVXJsIiwiZW1vdGlvbiIsIkxvY2F0aW9uIiwibG9uZ2l0dWRlIiwibGF0aXR1ZGUiLCJnZXRMYXRpdHVkZSIsImdldExvbmdpdHVkZSIsImdldERlc2MiLCJJbWFnZXMiLCJpbWFnZUlkIiwicGFyc2VJbnQiLCJzbWFsbEltYWdlIiwiZ2V0SW1hZ2UiLCJTTUFMTCIsImJpZ0ltYWdlIiwiTEFSR0UiLCJvcmlJbWFnZSIsIk9SSUdJTiIsImdldFVybCIsImdldEltYWdlSWQiLCJnZXRJbWFnZUZvcm1hdCIsImltZyIsIkltYWdlIiwiZ2V0U2l6ZSIsImdldFdpZHRoIiwiZ2V0SGVpZ2h0IiwiU291bmQiLCJzZWNvbmQiLCJkb3duVXJsIiwiZ2V0VVVJRCIsImdldFNlY29uZCIsImdldFNlbmRlcklkIiwiZ2V0RG93blVybCIsInZlciIsIkZpbGUiLCJnZXROYW1lIiwiZ2V0RG93bkZsYWciLCJmaWxlU2l6ZSIsInVuaXRTdHIiLCJHcm91cFRpcCIsIm9wVHlwZSIsIm9wVXNlcklkIiwiZ3JvdXBJZCIsImdyb3VwTmFtZSIsInVzZXJJZExpc3QiLCJ1c2VyaW5mbyIsImdyb3VwSW5mb0xpc3QiLCJtZW1iZXJJbmZvTGlzdCIsImdyb3VwTWVtYmVyTnVtIiwiYWRkR3JvdXBJbmZvIiwiZ3JvdXBJbmZvIiwiYWRkTWVtYmVySW5mbyIsIm1lbWJlckluZm8iLCJnZXRPcFR5cGUiLCJnZXRPcFVzZXJJZCIsImdldEdyb3VwSWQiLCJnZXRHcm91cE5hbWUiLCJnZXRVc2VySWRMaXN0IiwiZ2V0VXNlckluZm8iLCJnZXRHcm91cEluZm9MaXN0IiwiZ2V0TWVtYmVySW5mb0xpc3QiLCJnZXRHcm91cE1lbWJlck51bSIsInNldEdyb3VwTWVtYmVyTnVtIiwibWF4SW5kZXgiLCJKT0lOIiwibSIsIlFVSVQiLCJLSUNLIiwiU0VUX0FETUlOIiwiQ0FOQ0VMX0FETUlOIiwiTU9ESUZZX0dST1VQX0lORk8iLCJnZXRWYWx1ZSIsIkZBQ0VfVVJMIiwiTkFNRSIsIk9XTkVSIiwiTk9USUZJQ0FUSU9OIiwiSU5UUk9EVUNUSU9OIiwiTU9ESUZZX01FTUJFUl9JTkZPIiwidXNlcklkIiwiZ2V0VXNlcklkIiwic2h1dHVwVGltZSIsImdldFNodXR1cFRpbWUiLCJSRUFERUQiLCJMb2ciLCJNZW1iZXJJbmZvIiwiQ3VzdG9tIiwiZ2V0RXh0Iiwic2Vzc1RpbWVsaW5lIiwidmlzaXRTZXNzIiwidmlzaXRvciIsImNoZWNrRHVwTXNnIiwiZHVwIiwiZmlyc3Rfa2V5Iiwic2Vjb25kX2tleSIsInRlbXBNc2ciLCJzIiwidG1wT3B0IiwiYzJDTXNnUmVhZGVkIiwib3B0cyIsIkxhc3RlZE1zZ1RpbWUiLCJhZGRTZXNzaW9uIiwiZGVsU2Vzc2lvbiIsImFkZE1zZyIsInVwZGF0ZVRpbWVsaW5lIiwiYXJyIiwic29ydCIsImIiLCJvbk1zZ0NhbGxiYWNrIiwib25Hcm91cEluZm9DaGFuZ2VDYWxsYmFjayIsIm9uR3JvdXBTeXN0ZW1Ob3RpZnlDYWxsYmFja3MiLCJvbkZyaWVuZFN5c3RlbU5vdGlmeUNhbGxiYWNrcyIsIm9uUHJvZmlsZVN5c3RlbU5vdGlmeUNhbGxiYWNrcyIsIm9uS2lja2VkRXZlbnRDYWxsIiwib25Nc2dSZWFkQ2FsbGJhY2siLCJsb25nUG9sbGluZ09uIiwiaXNMb25nUG9sbGluZ1JlcXVlc3RpbmciLCJub3RpZnlTZXEiLCJub3RpY2VTZXEiLCJvbkJpZ0dyb3VwTXNnQ2FsbGJhY2siLCJiaWdHcm91cExvbmdQb2xsaW5nT24iLCJiaWdHcm91cExvbmdQb2xsaW5nU3RhcnRTZXEiLCJiaWdHcm91cExvbmdQb2xsaW5nSG9sZFRpbWUiLCJiaWdHcm91cExvbmdQb2xsaW5nS2V5IiwiYmlnR3JvdXBMb25nUG9sbGluZ01zZ01hcCIsIm9uQzJjRXZlbnRDYWxsYmFja3MiLCJnZXRMb3N0R3JvdXBNc2dDb3VudCIsIm15R3JvdXBNYXhTZXFzIiwiZ3JvdXBTeXN0ZW1Nc2dzQ2FjaGUiLCJzZXRMb25nUG9sbGluZ09uIiwiZ2V0TG9uZ1BvbGxpbmdPbiIsInJlc2V0TG9uZ1BvbGxpbmdJbmZvIiwia2V5IiwiY291bnQiLCJiaWdHcm91cExvbmdQb2xsaW5nTXNnQ291bnQiLCJpbml0SXBBbmRBdXRoa2V5IiwiSXBMaXN0IiwiQXV0aEtleSIsIkV4cGlyZVRpbWUiLCJpbml0TXlHcm91cE1heFNlcXMiLCJncm91cF9pZCIsImN1ck1heFNlcSIsIk5leHRNc2dTZXEiLCJnZXRMb3N0R3JvdXBNc2dzIiwicmVxTXNnU2VxIiwicmVxTXNnTnVtYmVyIiwidGVtcE9wdHMiLCJ1cGRhdGVNeUdyb3VwQ3VyTWF4U2VxIiwibXNnU2VxIiwiY3VyTXNnU2VxIiwiYWRkR3JvdXBNc2dMaXN0IiwibmV3X2dyb3VwX21zZ3MiLCJwIiwibmV3R3JvdXBNc2ciLCJGcm9tX0FjY291bnQiLCJoYW5kbGVyR3JvdXBNc2ciLCJUb0dyb3VwSWQiLCJNc2dTZXEiLCJoYW5kbGVyT3JkaW5hcnlBbmRUaXBDMmNNc2dzIiwiZXZlbnRUeXBlIiwiZ3JvdXBNc2dBcnJheSIsImdyb3VwTXNnTWFwIiwibWluR3JvdXBNc2dTZXEiLCJtYXhHcm91cE1zZ1NlcSIsImdyb3VwTXNncyIsIk5vdGljZVNlcSIsIkV2ZW50IiwibWluIiwibWF4IiwidGVtcENvdW50IiwiaGFuZGxlck9yZGluYXJ5QW5kVGlwR3JvdXBNc2dzIiwiaGFuZGxlckdyb3VwVGlwcyIsImdyb3VwVGlwcyIsImdyb3VwVGlwIiwiR1JPVVBfVElQIiwiaGFuZGxlckdyb3VwU3lzdGVtTXNncyIsImdyb3VwU3lzdGVtTXNncyIsImlzTmVlZFZhbGlkUmVwZWF0TXNnIiwiZ3JvdXBSZXBvcnRUeXBlTXNnIiwicmVwb3J0VHlwZSIsIlJlcG9ydFR5cGUiLCJPcGVyYXRvcl9BY2NvdW50IiwiaXNFeGlzdCIsIm5vdGlmeSIsIkdyb3VwTmFtZSIsIk1zZ1RpbWVTdGFtcCIsIkpPSU5fR1JPVVBfUkVRVUVTVCIsIlJlbWFya0luZm8iLCJDbGllbnRTZXEiLCJNc2dSYW5kb20iLCJKT0lOX0dST1VQX0FDQ0VQVCIsIkpPSU5fR1JPVVBfUkVGVVNFIiwiREVTVE9SWSIsIkNSRUFURSIsIklOVklURURfSk9JTl9HUk9VUF9SRVFVRVNUIiwiSU5WSVRFRF9KT0lOX0dST1VQX1JFUVVFU1RfQUdSRUUiLCJSRVZPS0UiLCJHcm91cFJlYWRJbmZvQXJyYXkiLCJsIiwiaGFuZGxlckZyaWVuZFN5c3RlbU5vdGljZXMiLCJmcmllbmRTeXN0ZW1Ob3RpY2VzIiwiZnJpZW5kTm90aWNlIiwiUHVzaFR5cGUiLCJGUklFTkRfQUREIiwiRnJpZW5kQWRkX0FjY291bnQiLCJGUklFTkRfREVMRVRFIiwiRnJpZW5kRGVsX0FjY291bnQiLCJQRU5ERU5DWV9BREQiLCJQZW5kZW5jeUFkZCIsIlBFTkRFTkNZX0RFTEVURSIsIkZyaWVuUGVuY3lkRGVsX0FjY291bnQiLCJCTEFDS19MSVNUX0FERCIsIkJsYWNrTGlzdEFkZF9BY2NvdW50IiwiQkxBQ0tfTElTVF9ERUxFVEUiLCJCbGFja0xpc3REZWxfQWNjb3VudCIsImhhbmRsZXJQcm9maWxlU3lzdGVtTm90aWNlcyIsInByb2ZpbGVTeXN0ZW1Ob3RpY2VzIiwicHJvZmlsZU5vdGljZSIsIlBST0ZJTEVfTU9ESUZZIiwiUHJvZmlsZV9BY2NvdW50IiwiUHJvZmlsZUxpc3QiLCJoYW5kbGVyR3JvdXBTeXN0ZW1Nc2ciLCJoYW5kbGVyQzJjTm90aWZ5TXNnQXJyYXkiLCJoYW5kbGVyQzJjRXZlbnRNc2ciLCJTdWJNc2dUeXBlIiwiUmVhZEMyY01zZ05vdGlmeSIsIlVpblBhaXJSZWFkQXJyYXkiLCJLSUNLRURPVVQiLCJsb25nUG9sbGluZyIsImRvUG9sbGluZyIsIlRpbWVvdXQiLCJFdmVudEFycmF5IiwiTm90aWZ5U2VxIiwiR1JPVVBfQ09NTU9OIiwiR3JvdXBNc2dBcnJheSIsIkdyb3VwVGlwcyIsIkdST1VQX1RJUDIiLCJHUk9VUF9TWVNURU0iLCJGUklFTkRfTk9USUNFIiwiRnJpZW5kTGlzdE1vZCIsIlBST0ZJTEVfTk9USUNFIiwiUHJvZmlsZURhdGFNb2QiLCJDMkNfQ09NTU9OIiwiQzJjTXNnQXJyYXkiLCJDMkNfRVZFTlQiLCJDMmNOb3RpZnlNc2dBcnJheSIsInN1Y2Nlc3NJbmZvIiwidXBkYXRlY0xvbmdQb2xsaW5nU3RhdHVzIiwibXNnT2JqTGlzdCIsIk5leHRTZXEiLCJIb2xkVGltZSIsIktleSIsIlJzcE1zZ0xpc3QiLCJldmVudCIsIklzUGxhY2VNc2ciLCJPTiIsIk9GRiIsImVyck9iaiIsImlzTmVlZENhbGxiYWNrIiwiUkVDT05ORUNUIiwic3RhcnROZXh0TG9uZ1BvbGxpbmciLCJub3RpZnlJbmZvIiwibXNnSW5mb3MiLCJpc1NlbmRNc2ciLCJoZWFkVXJsIiwiRnJvbV9BY2NvdW50SGVhZHVybCIsIkZyb21fQWNjb3VudE5pY2siLCJtc2dCb2R5IiwibWkiLCJNc2dUeXBlIiwiTXNnQ29udGVudCIsIkluZGV4IiwiRGF0YSIsInRlbXBJbWciLCJTaXplIiwiV2lkdGgiLCJIZWlnaHQiLCJVUkwiLCJTZWNvbmQiLCJEb3dubG9hZF9GbGFnIiwiTG9uZ2l0dWRlIiwiTGF0aXR1ZGUiLCJEZXNjIiwiRmlsZU5hbWUiLCJGaWxlU2l6ZSIsInBhcnNlIiwidXNlckFjdGlvbiIsIklORyIsIkV4dCIsImhhbmRsZXJBcHBseUpvaW5Hcm91cFN5c3RlbU1zZ3MiLCJldmVudEFycmF5IiwiSXNGaW5pc2hlZCIsImlzU3luY0dyb3VwTXNncyIsImlzQWRkTXNnRmxhZyIsImdyb3VwX25hbWUiLCJPcFR5cGUiLCJMaXN0X0FjY291bnQiLCJNc2dNZW1iZXJFeHRyYUluZm8iLCJNZW1iZXJOdW0iLCJ0ZW1wSXNDYWxsYmFja0ZsYWciLCJ0ZW1wTmV3R3JvdXBJbmZvIiwibXNnR3JvdXBOZXdJbmZvIiwiTXNnR3JvdXBOZXdJbmZvIiwiR3JvdXBGYWNlVXJsIiwidG1wTkdJRmFjZVVybCIsInRtcE5HSU5hbWUiLCJ0bXBOR0lPd25lciIsIk93bmVyQWNjb3VudCIsIkdyb3VwTm90aWZpY2F0aW9uIiwidG1wTkdJTm90aWZpY2F0aW9uIiwiR3JvdXBJbnRyb2R1Y3Rpb24iLCJ0bXBOR0lJbnRyb2R1Y3Rpb24iLCJtZW1iZXJJbmZvcyIsIk1zZ01lbWJlckluZm8iLCJuIiwiU2h1dHVwVGltZSIsImV4dHJhSW5mbyIsIk1zZ0Zyb21fQWNjb3VudEV4dHJhSW5mbyIsIm9uTXNnTm90aWZ5Iiwib25CaWdHcm91cE1zZ05vdGlmeSIsIm9uQzJjRXZlbnROb3RpZnlzIiwib25Hcm91cFN5c3RlbU5vdGlmeXMiLCJvbkdyb3VwSW5mb0NoYW5nZU5vdGlmeSIsIm9uRnJpZW5kU3lzdGVtTm90aWZ5cyIsIm9uUHJvZmlsZVN5c3RlbU5vdGlmeXMiLCJvbkxvbmdQdWxsaW5nTm90aWZ5IiwiaW5pdElwQW5kQXV0aGtleVJlc3AiLCJGaWxlVXBsb2FkZXIiLCJmaWxlTWQ1IiwiZ2V0RmlsZU1ENSIsImZpbGVSZWFkZXIiLCJGaWxlUmVhZGVyIiwiYmxvYlNsaWNlIiwibW96U2xpY2UiLCJ3ZWJraXRTbGljZSIsInNsaWNlIiwiY2h1bmtTaXplIiwiY2h1bmtzIiwiY2VpbCIsImN1cnJlbnRDaHVuayIsInNwYXJrIiwiU3BhcmtNRDUiLCJvbmxvYWQiLCJiaW5hcnlTdHIiLCJieXRlcyIsIlVpbnQ4QXJyYXkiLCJ0YXJnZXQiLCJyZXN1bHQiLCJieXRlTGVuZ3RoIiwiZnJvbUNoYXJDb2RlIiwiYXBwZW5kQmluYXJ5IiwibG9hZE5leHQiLCJlbmQiLCJzdGFydCIsImNhbGwiLCJyZWFkQXNBcnJheUJ1ZmZlciIsInVwbG9hZEZpbGUiLCJmaWxlX3VwbG9hZCIsIm1lIiwib25Qcm9ncmVzc0NhbGxCYWNrIiwiYWJvcnRCdXR0b24iLCJvbmNsaWNrIiwiYWJvcnRIYW5kbGVyIiwibG9hZGVkIiwic3RlcCIsInNsaWNlU2l6ZSIsInNsaWNlT2Zmc2V0IiwiYnVzaW5lc3NUeXBlIiwiZmlsZVR5cGUiLCJyZWFkZXIiLCJvbmxvYWRzdGFydCIsIm9uTG9hZFN0YXJ0Iiwib25wcm9ncmVzcyIsIm9uUHJvZ3Jlc3MiLCJvbmFib3J0Iiwib25BYm9ydCIsIm9uZXJyb3IiLCJvbkxvYWQiLCJvbmxvYWRlbmQiLCJvbkxvYWRFbmQiLCJ1cGxvYWQiLCJyZWFkQmxvYiIsIm9uRXJyb3IiLCJyZWFkeVN0YXRlIiwiRE9ORSIsInNsaWNlX2RhdGFfYmFzZTY0IiwicG9zIiwiaW5kZXhPZiIsIkJBU0U2NF9EQVRBIiwic3VjY0NhbGxiYWNrIiwiSXNGaW5pc2giLCJOZXh0X09mZnNldCIsInRlbXBSZXNwIiwiRmlsZV9VVUlEIiwiVVJMX0lORk8iLCJlcnJvckNhbGxiYWNrIiwiYmxvYiIsInJlYWRBc0RhdGFVUkwiLCJFbW90aW9ucyIsIkVtb3Rpb25QaWNEYXRhIiwiRW1vdGlvbkRhdGFJbmRleHMiLCJFbW90aW9uUGljRGF0YUluZGV4IiwiVG9vbCIsIm9mZmxpbmUiLCJsb2dvdXRBbGwiLCJncm91cE1zZ1JlYWRlZCIsImNyZWF0ZUdyb3VwSGlnaCIsImhhbmRsZUFwcGx5Sm9pbkdyb3VwUGVuZGVuY3kiLCJoYW5kbGVJbnZpdGVKb2luR3JvdXBSZXF1ZXN0Iiwic2VhcmNoR3JvdXBCeU5hbWUiLCJjaGFuZ2VHcm91cE93bmVyIiwiZ2V0Um9sZUluR3JvdXAiLCJhcHBseUpvaW5CaWdHcm91cCIsInF1aXRCaWdHcm91cCIsImRlbGV0ZUNoYXQiLCJnZXRSZWNlbnRDb250YWN0TGlzdCIsInN1Ym1pdFVwbG9hZEZpbGVGb3JtIiwidXBsb2FkRmlsZUJ5QmFzZTY0IiwidXBsb2FkUGljQnlCYXNlNjQiLCJ0b3RhbFNpemUiLCJiYXNlNjRTdHIiLCJnZXRMb25nUG9sbGluZ0lkIiwiYXBwbHlEb3dubG9hZCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7QUFHQUEsT0FBT0MsT0FBUCxHQUFpQixZQUFZOztBQUV6QixRQUFJLE9BQU9DLE1BQU1DLFNBQU4sQ0FBZ0JDLE9BQXZCLElBQWtDLFVBQXRDLEVBQWtEO0FBQzlDRixjQUFNQyxTQUFOLENBQWdCQyxPQUFoQixHQUEwQixVQUFVQyxRQUFWLEVBQW9CO0FBQzFDLGlCQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSSxLQUFLQyxNQUF6QixFQUFpQ0QsR0FBakMsRUFBc0M7QUFDbENELHlCQUFTRyxLQUFULENBQWUsSUFBZixFQUFxQixDQUFDLEtBQUtGLENBQUwsQ0FBRCxFQUFVQSxDQUFWLEVBQWEsSUFBYixDQUFyQjtBQUNIO0FBQ0osU0FKRDtBQUtIO0FBQ0Q7Ozs7QUFJQTs7QUFFQSxRQUFJRyxXQUFXLEVBQWY7QUFDQSxRQUFJQyxRQUFRLEVBQUU7O0FBRVY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEJBQyxlQUFPLGVBQVVDLFNBQVYsRUFBcUJDLFNBQXJCLEVBQWdDQyxPQUFoQyxFQUF5QyxDQUFFLENBNUIxQzs7QUE4QlI7Ozs7Ozs7Ozs7QUFVQUMsa0JBQVUsa0JBQVVDLElBQVYsRUFBZ0JDLEtBQWhCLEVBQXVCLENBQUUsQ0F4QzNCOztBQTJDUjs7Ozs7Ozs7O0FBU0FDLDJCQUFtQiwyQkFBVUosT0FBVixFQUFtQkUsSUFBbkIsRUFBeUJDLEtBQXpCLEVBQWdDLENBQUUsQ0FwRDdDOztBQXNEUjs7Ozs7Ozs7O0FBU0FFLHVCQUFl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Q2hELG1CQUFPRCxXQUFXdFAsS0FBWCxFQUFrQnVQLGNBQWxCLENBQVA7QUFDSCxTQUZEO0FBR0gsS0F0NUtELEVBczVLRzlQLEtBdDVLSDtBQXU1S0EsV0FBT0EsS0FBUDtBQUNILENBOThMZ0IsRUFBakIiLCJmaWxlIjoid2ViaW1fd3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB3ZWJpbSBqYXZhc2NyaXB0IFNESyAoZm9yIHdlY2hhdCBtaW5pUHJvZ3JhbSApXHJcbiAqIFZFUiAxLjcuMlxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgaWYgKHR5cGVvZiBBcnJheS5wcm90b3R5cGUuZm9yRWFjaCAhPSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5hcHBseSh0aGlzLCBbdGhpc1tpXSwgaSwgdGhpc10pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIC8qIHdlYmltIGphdmFzY3JpcHQgU0RLXHJcbiAgICAgKiBWRVIgMS43LjJcclxuICAgICAqL1xyXG5cclxuICAgIC8qIHdlYmltIEFQSSBkZWZpbml0aW9uc1xyXG4gICAgICovXHJcbiAgICB2YXIgbXNnQ2FjaGUgPSB7fTtcclxuICAgIHZhciB3ZWJpbSA9IHsgLy8gbmFtZXNwYWNlIG9iamVjdCB3ZWJpbVxyXG5cclxuICAgICAgICAvKiBmdW5jdGlvbiBpbml0XHJcbiAgICAgICAgICogICBzZGvnmbvlvZVcclxuICAgICAgICAgKiBwYXJhbXM6XHJcbiAgICAgICAgICogICBsb2dpbkluZm8gICAgICAtIE9iamVjdCwg55m75b2V6Lqr5Lu955u45YWz5Y+C5pWw6ZuG5ZCI77yM6K+m6KeB5LiL6Z2iXHJcbiAgICAgICAgICogICB7XHJcbiAgICAgICAgICogICAgIHNka0FwcElEICAgICAtIFN0cmluZywg55So5oi35qCH6K+G5o6l5YWlU0RL55qE5bqU55SoSUTvvIzlv4XloatcclxuICAgICAgICAgKiAgICAgYWNjb3VudFR5cGUgIC0gaW50LCDotKblj7fnsbvlnovvvIzlv4XloatcclxuICAgICAgICAgKiAgICAgaWRlbnRpZmllciAgIC0gU3RyaW5nLCDnlKjmiLfluJDlj7cs5b+F6aG75piv5a2X56ym5Liy57G75Z6L77yM5b+F5aGrXHJcbiAgICAgICAgICogICAgIGlkZW50aWZpZXJOaWNrICAgLSBTdHJpbmcsIOeUqOaIt+aYteensO+8jOmAieWhq1xyXG4gICAgICAgICAqICAgICB1c2VyU2lnICAgICAgLSBTdHJpbmcsIOmJtOadg1Rva2Vu77yM5b+F6aG75piv5a2X56ym5Liy57G75Z6L77yM5b+F5aGrXHJcbiAgICAgICAgICogICB9XHJcbiAgICAgICAgICogICBsaXN0ZW5lcnMgICAgICAtIE9iamVjdCwg5LqL5Lu25Zue6LCD5Ye95pWw6ZuG5ZCILCDor6bop4HkuIvpnaJcclxuICAgICAgICAgKiAgIHtcclxuICAgICAgICAgKiAgICAgb25Db25uTm90aWZ5IC0gZnVuY3Rpb24oY29ubkluZm8pLCDnlKjkuo7mlLbliLDov57mjqXnirbmgIHnm7jlhbPpgJrnn6XnmoTlm57osIPlh73mlbAs55uu5YmN5pyq5L2/55SoXHJcbiAgICAgICAgICogICAgIG9uTXNnTm90aWZ5ICAtIGZ1bmN0aW9uKG5ld01zZ0xpc3QpLCDnlKjkuo7mlLbliLDmtojmga/pgJrnn6XnmoTlm57osIPlh73mlbAsXHJcbiAgICAgICAgICogICAgICBuZXdNc2dMaXN05Li65paw5raI5oGv5pWw57uE77yM5qC85byP5Li6W01zZ+WvueixoV1cclxuICAgICAgICAgKiAgICAgIOS9v+eUqOaWueacieS4pOenjeWkhOeQhuWbnuiwgzogMSnlpITnkIZuZXdNc2dMaXN05Lit55qE5aKe6YeP5raI5oGvLDIp55u05o6l6K6/6Zeud2ViaW0uTXNnU3RvcmXojrflj5bmnIDmlrDnmoTmtojmga9cclxuICAgICAgICAgKiAgICAgb25Hcm91cEluZm9DaGFuZ2VOb3RpZnkgIC0gZnVuY3Rpb24oZ3JvdXBJbmZvKSwg55So5LqO55uR5ZCs576k57uE6LWE5paZ5Y+Y5pu055qE5Zue6LCD5Ye95pWwLFxyXG4gICAgICAgICAqICAgICAgICAgIGdyb3VwSW5mb+S4uuaWsOeahOe+pOe7hOi1hOaWmeS/oeaBr1xyXG4gICAgICAgICAqICAgICBvbkdyb3VwU3lzdGVtTm90aWZ5cyAtIE9iamVjdCwg55So5LqO55uR5ZCs77yI5aSa57uI56uv5ZCM5q2l77yJ576k57O757uf5raI5oGv55qE5Zue6LCD5Ye95pWw5a+56LGhXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiAgIH1cclxuICAgICAgICAgKiAgIG9wdGlvbnMgICAgICAgIC0gT2JqZWN0LCDlhbblroPpgInpobksIOebruWJjeacquS9v+eUqFxyXG4gICAgICAgICAqIHJldHVybjpcclxuICAgICAgICAgKiAgICjml6ApXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbG9naW46IGZ1bmN0aW9uIChsb2dpbkluZm8sIGxpc3RlbmVycywgb3B0aW9ucykge30sXHJcblxyXG4gICAgICAgIC8qIGZ1bmN0aW9uIHN5bmNNc2dzXHJcbiAgICAgICAgICogICDmi4nlj5bmnIDmlrBDMkPmtojmga9cclxuICAgICAgICAgKiAgIOS4gOiIrOS4jemcgOimgeS9v+eUqOaWueebtOaOpeiwg+eUqCwgU0RL5bqV5bGC5Lya6Ieq5Yqo5ZCM5q2l5pyA5paw5raI5oGv5bm26YCa55+l5L2/55So5pa5LCDkuIDnp43mnInnlKjnmoTosIPnlKjlnLrmma/mmK/nlKjmiLfmiYvliqjop6blj5HliLfmlrDmtojmga9cclxuICAgICAgICAgKiBwYXJhbXM6XHJcbiAgICAgICAgICogICBjYk9rICAgLSBmdW5jdGlvbihtc2dMaXN0Keexu+Weiywg5b2T5ZCM5q2l5raI5oGv5oiQ5Yqf5pe255qE5Zue6LCD5Ye95pWwLCBtc2dMaXN05Li65paw5raI5oGv5pWw57uE77yM5qC85byP5Li6W01zZ+WvueixoV0sXHJcbiAgICAgICAgICogICAgICAgICAgICDlpoLmnpzmraTlj4LmlbDkuLpudWxs5oiWdW5kZWZpbmVk5YiZ5ZCM5q2l5raI5oGv5oiQ5Yqf5ZCO5Lya5YOP6Ieq5Yqo5ZCM5q2l6YKj5qC35Zue6LCDY2JOb3RpZnlcclxuICAgICAgICAgKiAgIGNiRXJyICAtIGZ1bmN0aW9uKGVycinnsbvlnossIOW9k+WQjOatpea2iOaBr+Wksei0peaXtueahOWbnuiwg+WHveaVsCwgZXJy5Li66ZSZ6K+v5a+56LGhXHJcbiAgICAgICAgICogcmV0dXJuOlxyXG4gICAgICAgICAqICAgKOaXoClcclxuICAgICAgICAgKi9cclxuICAgICAgICBzeW5jTXNnczogZnVuY3Rpb24gKGNiT2ssIGNiRXJyKSB7fSxcclxuXHJcblxyXG4gICAgICAgIC8qIGZ1bmN0aW9uIGdldEMyQ0hpc3RvcnlNc2dzXHJcbiAgICAgICAgICog5ouJ5Y+WQzJD5ryr5ri45raI5oGvXHJcbiAgICAgICAgICogcGFyYW1zOlxyXG4gICAgICAgICAqICAgb3B0aW9ucyAgICAtIOivt+axguWPguaVsFxyXG4gICAgICAgICAqICAgY2JPayAgIC0gZnVuY3Rpb24obXNnTGlzdCnnsbvlnossIOaIkOWKn+aXtueahOWbnuiwg+WHveaVsCwgbXNnTGlzdOS4uua2iOaBr+aVsOe7hO+8jOagvOW8j+S4ultNc2flr7nosaFdLFxyXG4gICAgICAgICAqICAgY2JFcnIgIC0gZnVuY3Rpb24oZXJyKeexu+Weiywg5aSx6LSl5pe25Zue6LCD5Ye95pWwLCBlcnLkuLrplJnor6/lr7nosaFcclxuICAgICAgICAgKiByZXR1cm46XHJcbiAgICAgICAgICogICAo5pegKVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldEMyQ0hpc3RvcnlNc2dzOiBmdW5jdGlvbiAob3B0aW9ucywgY2JPaywgY2JFcnIpIHt9LFxyXG5cclxuICAgICAgICAvKiBmdW5jdGlvbiBzeW5jR3JvdXBNc2dzXHJcbiAgICAgICAgICog5ouJ5Y+W576k5ryr5ri45raI5oGvXHJcbiAgICAgICAgICogcGFyYW1zOlxyXG4gICAgICAgICAqICAgb3B0aW9ucyAgICAtIOivt+axguWPguaVsFxyXG4gICAgICAgICAqICAgY2JPayAgIC0gZnVuY3Rpb24obXNnTGlzdCnnsbvlnossIOaIkOWKn+aXtueahOWbnuiwg+WHveaVsCwgbXNnTGlzdOS4uua2iOaBr+aVsOe7hO+8jOagvOW8j+S4ultNc2flr7nosaFdLFxyXG4gICAgICAgICAqICAgY2JFcnIgIC0gZnVuY3Rpb24oZXJyKeexu+Weiywg5aSx6LSl5pe25Zue6LCD5Ye95pWwLCBlcnLkuLrplJnor6/lr7nosaFcclxuICAgICAgICAgKiByZXR1cm46XHJcbiAgICAgICAgICogICAo5pegKVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHN5bmNHcm91cE1zZ3M6IGZ1bmN0aW9uIChvcHRpb25zLCBjYk9rLCBjYkVycikge30sXHJcblxyXG4gICAgICAgIC8qIGZ1bmN0aW9uIHNlbmRNc2dcclxuICAgICAgICAgKiAgIOWPkemAgeS4gOadoea2iOaBr1xyXG4gICAgICAgICAqIHBhcmFtczpcclxuICAgICAgICAgKiAgIG1zZyAgICAtIHdlYmltLk1zZ+exu+Weiywg6KaB5Y+R6YCB55qE5raI5oGv5a+56LGhXHJcbiAgICAgICAgICogICBjYk9rICAgLSBmdW5jdGlvbigp57G75Z6LLCDlvZPlj5HpgIHmtojmga/miJDlip/ml7bnmoTlm57osIPlh73mlbBcclxuICAgICAgICAgKiAgIGNiRXJyICAtIGZ1bmN0aW9uKGVycinnsbvlnossIOW9k+WPkemAgea2iOaBr+Wksei0peaXtueahOWbnuiwg+WHveaVsCwgZXJy5Li66ZSZ6K+v5a+56LGhXHJcbiAgICAgICAgICogcmV0dXJuOlxyXG4gICAgICAgICAqICAgKOaXoClcclxuICAgICAgICAgKi9cclxuICAgICAgICBzZW5kTXNnOiBmdW5jdGlvbiAobXNnLCBjYk9rLCBjYkVycikge30sXHJcblxyXG4gICAgICAgIC8qIGZ1bmN0aW9uIGxvZ291dFxyXG4gICAgICAgICAqICAgc2Rr55m75Ye6XHJcbiAgICAgICAgICogcGFyYW1zOlxyXG4gICAgICAgICAqICAgY2JPayAgIC0gZnVuY3Rpb24oKeexu+Weiywg5oiQ5Yqf5pe25Zue6LCD5Ye95pWwXHJcbiAgICAgICAgICogICBjYkVyciAgLSBmdW5jdGlvbihlcnIp57G75Z6LLCDlpLHotKXml7blm57osIPlh73mlbAsIGVycuS4uumUmeivr+WvueixoVxyXG4gICAgICAgICAqIHJldHVybjpcclxuICAgICAgICAgKiAgICjml6ApXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbG9nb3V0OiBmdW5jdGlvbiAoY2JPaywgY2JFcnIpIHt9LFxyXG5cclxuICAgICAgICAvKiBmdW5jdGlvbiBzZXRBdXRvUmVhZFxyXG4gICAgICAgICAqIOiuvue9ruS8muivneiHquWKqOW3suivu+S4iuaKpeagh+W/l1xyXG4gICAgICAgICAqIHBhcmFtczpcclxuICAgICAgICAgKiAgIHNlbFNlc3MgICAgLSB3ZWJpbS5TZXNzaW9u57G75Z6LLCDlvZPliY3kvJror51cclxuICAgICAgICAgKiAgIGlzT24gICAtIGJvb2xlYW4sIOWwhnNlbFNlc3PnmoToh6rliqjlt7Lor7vmtojmga/moIflv5fmlLnkuLppc09u77yM5ZCM5pe25piv5ZCm5LiK5oql5b2T5YmN5Lya6K+d5bey6K+75raI5oGvXHJcbiAgICAgICAgICogICBpc1Jlc2V0QWxsIC0gYm9vbGVhbu+8jOaYr+WQpumHjee9ruaJgOacieS8muivneeahOiHquWKqOW3suivu+agh+W/l1xyXG4gICAgICAgICAqIHJldHVybjpcclxuICAgICAgICAgKiAgICjml6ApXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc2V0QXV0b1JlYWQ6IGZ1bmN0aW9uIChzZWxTZXNzLCBpc09uLCBpc1Jlc2V0QWxsKSB7fSxcclxuXHJcbiAgICAgICAgLyogZnVuY3Rpb24gZ2V0UHJvZmlsZVBvcnRyYWl0XHJcbiAgICAgICAgICogICDmi4nlj5botYTmlpnvvIjmkJzntKLnlKjmiLfvvIlcclxuICAgICAgICAgKiBwYXJhbXM6XHJcbiAgICAgICAgICogICBjYk9rICAgLSBmdW5jdGlvbigp57G75Z6LLCDmiJDlip/ml7blm57osIPlh73mlbBcclxuICAgICAgICAgKiAgIGNiRXJyICAtIGZ1bmN0aW9uKGVycinnsbvlnossIOWksei0peaXtuWbnuiwg+WHveaVsCwgZXJy5Li66ZSZ6K+v5a+56LGhXHJcbiAgICAgICAgICogcmV0dXJuOlxyXG4gICAgICAgICAqICAgKOaXoClcclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXRQcm9maWxlUG9ydHJhaXQ6IGZ1bmN0aW9uIChvcHRpb25zLCBjYk9rLCBjYkVycikge30sXHJcblxyXG4gICAgICAgIC8qIGZ1bmN0aW9uIHNldFByb2ZpbGVQb3J0cmFpdFxyXG4gICAgICAgICAqICAg6K6+572u5Liq5Lq66LWE5paZXHJcbiAgICAgICAgICogcGFyYW1zOlxyXG4gICAgICAgICAqICAgY2JPayAgIC0gZnVuY3Rpb24oKeexu+Weiywg5oiQ5Yqf5pe25Zue6LCD5Ye95pWwXHJcbiAgICAgICAgICogICBjYkVyciAgLSBmdW5jdGlvbihlcnIp57G75Z6LLCDlpLHotKXml7blm57osIPlh73mlbAsIGVycuS4uumUmeivr+WvueixoVxyXG4gICAgICAgICAqIHJldHVybjpcclxuICAgICAgICAgKiAgICjml6ApXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc2V0UHJvZmlsZVBvcnRyYWl0OiBmdW5jdGlvbiAob3B0aW9ucywgY2JPaywgY2JFcnIpIHt9LFxyXG5cclxuICAgICAgICAvKiBmdW5jdGlvbiBhcHBseUFkZEZyaWVuZFxyXG4gICAgICAgICAqICAg55Sz6K+35re75Yqg5aW95Y+LXHJcbiAgICAgICAgICogcGFyYW1zOlxyXG4gICAgICAgICAqICAgY2JPayAgIC0gZnVuY3Rpb24oKeexu+Weiywg5oiQ5Yqf5pe25Zue6LCD5Ye95pWwXHJcbiAgICAgICAgICogICBjYkVyciAgLSBmdW5jdGlvbihlcnIp57G75Z6LLCDlpLHotKXml7blm57osIPlh73mlbAsIGVycuS4uumUmeivr+WvueixoVxyXG4gICAgICAgICAqIHJldHVybjpcclxuICAgICAgICAgKiAgICjml6ApXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgYXBwbHlBZGRGcmllbmQ6IGZ1bmN0aW9uIChvcHRpb25zLCBjYk9rLCBjYkVycikge30sXHJcblxyXG4gICAgICAgIC8qIGZ1bmN0aW9uIGdldFBlbmRlbmN5XHJcbiAgICAgICAgICogICDmi4nlj5blpb3lj4vnlLPor7dcclxuICAgICAgICAgKiBwYXJhbXM6XHJcbiAgICAgICAgICogICBjYk9rICAgLSBmdW5jdGlvbigp57G75Z6LLCDmiJDlip/ml7blm57osIPlh73mlbBcclxuICAgICAgICAgKiAgIGNiRXJyICAtIGZ1bmN0aW9uKGVycinnsbvlnossIOWksei0peaXtuWbnuiwg+WHveaVsCwgZXJy5Li66ZSZ6K+v5a+56LGhXHJcbiAgICAgICAgICogcmV0dXJuOlxyXG4gICAgICAgICAqICAgKOaXoClcclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXRQZW5kZW5jeTogZnVuY3Rpb24gKG9wdGlvbnMsIGNiT2ssIGNiRXJyKSB7fSxcclxuXHJcbiAgICAgICAgLyogZnVuY3Rpb24gZGVsZXRlUGVuZGVuY3lcclxuICAgICAgICAgKiAgIOWIoOmZpOWlveWPi+eUs+ivt1xyXG4gICAgICAgICAqIHBhcmFtczpcclxuICAgICAgICAgKiAgIGNiT2sgICAtIGZ1bmN0aW9uKCnnsbvlnossIOaIkOWKn+aXtuWbnuiwg+WHveaVsFxyXG4gICAgICAgICAqICAgY2JFcnIgIC0gZnVuY3Rpb24oZXJyKeexu+Weiywg5aSx6LSl5pe25Zue6LCD5Ye95pWwLCBlcnLkuLrplJnor6/lr7nosaFcclxuICAgICAgICAgKiByZXR1cm46XHJcbiAgICAgICAgICogICAo5pegKVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGRlbGV0ZVBlbmRlbmN5OiBmdW5jdGlvbiAob3B0aW9ucywgY2JPaywgY2JFcnIpIHt9LFxyXG5cclxuICAgICAgICAvKiBmdW5jdGlvbiByZXNwb25zZUZyaWVuZFxyXG4gICAgICAgICAqICAg5ZON5bqU5aW95Y+L55Sz6K+3XHJcbiAgICAgICAgICogcGFyYW1zOlxyXG4gICAgICAgICAqICAgY2JPayAgIC0gZnVuY3Rpb24oKeexu+Weiywg5oiQ5Yqf5pe25Zue6LCD5Ye95pWwXHJcbiAgICAgICAgICogICBjYkVyciAgLSBmdW5jdGlvbihlcnIp57G75Z6LLCDlpLHotKXml7blm57osIPlh73mlbAsIGVycuS4uumUmeivr+WvueixoVxyXG4gICAgICAgICAqIHJldHVybjpcclxuICAgICAgICAgKiAgICjml6ApXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcmVzcG9uc2VGcmllbmQ6IGZ1bmN0aW9uIChvcHRpb25zLCBjYk9rLCBjYkVycikge30sXHJcblxyXG4gICAgICAgIC8qIGZ1bmN0aW9uIGdldEFsbEZyaWVuZFxyXG4gICAgICAgICAqICAg5ouJ5Y+W5oiR55qE5aW95Y+LXHJcbiAgICAgICAgICogcGFyYW1zOlxyXG4gICAgICAgICAqICAgY2JPayAgIC0gZnVuY3Rpb24oKeexu+Weiywg5oiQ5Yqf5pe25Zue6LCD5Ye95pWwXHJcbiAgICAgICAgICogICBjYkVyciAgLSBmdW5jdGlvbihlcnIp57G75Z6LLCDlpLHotKXml7blm57osIPlh73mlbAsIGVycuS4uumUmeivr+WvueixoVxyXG4gICAgICAgICAqIHJldHVybjpcclxuICAgICAgICAgKiAgICjml6ApXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0QWxsRnJpZW5kOiBmdW5jdGlvbiAob3B0aW9ucywgY2JPaywgY2JFcnIpIHt9LFxyXG5cclxuICAgICAgICAvKiBmdW5jdGlvbiBkZWxldGVGcmllbmRcclxuICAgICAgICAgKiAgIOWIoOmZpOWlveWPi1xyXG4gICAgICAgICAqIHBhcmFtczpcclxuICAgICAgICAgKiAgIGNiT2sgICAtIGZ1bmN0aW9uKCnnsbvlnossIOaIkOWKn+aXtuWbnuiwg+WHveaVsFxyXG4gICAgICAgICAqICAgY2JFcnIgIC0gZnVuY3Rpb24oZXJyKeexu+Weiywg5aSx6LSl5pe25Zue6LCD5Ye95pWwLCBlcnLkuLrplJnor6/lr7nosaFcclxuICAgICAgICAgKiByZXR1cm46XHJcbiAgICAgICAgICogICAo5pegKVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGRlbGV0ZUZyaWVuZDogZnVuY3Rpb24gKG9wdGlvbnMsIGNiT2ssIGNiRXJyKSB7fSxcclxuXHJcbiAgICAgICAgLyogZnVuY3Rpb24gYWRkQmxhY2tMaXN0XHJcbiAgICAgICAgICogICDlop7liqDpu5HlkI3ljZVcclxuICAgICAgICAgKiBwYXJhbXM6XHJcbiAgICAgICAgICogICBjYk9rICAgLSBmdW5jdGlvbigp57G75Z6LLCDmiJDlip/ml7blm57osIPlh73mlbBcclxuICAgICAgICAgKiAgIGNiRXJyICAtIGZ1bmN0aW9uKGVycinnsbvlnossIOWksei0peaXtuWbnuiwg+WHveaVsCwgZXJy5Li66ZSZ6K+v5a+56LGhXHJcbiAgICAgICAgICogcmV0dXJuOlxyXG4gICAgICAgICAqICAgKOaXoClcclxuICAgICAgICAgKi9cclxuICAgICAgICBhZGRCbGFja0xpc3Q6IGZ1bmN0aW9uIChvcHRpb25zLCBjYk9rLCBjYkVycikge30sXHJcblxyXG4gICAgICAgIC8qIGZ1bmN0aW9uIGdldEJsYWNrTGlzdFxyXG4gICAgICAgICAqICAg5Yig6Zmk6buR5ZCN5Y2VXHJcbiAgICAgICAgICogcGFyYW1zOlxyXG4gICAgICAgICAqICAgY2JPayAgIC0gZnVuY3Rpb24oKeexu+Weiywg5oiQ5Yqf5pe25Zue6LCD5Ye95pWwXHJcbiAgICAgICAgICogICBjYkVyciAgLSBmdW5jdGlvbihlcnIp57G75Z6LLCDlpLHotKXml7blm57osIPlh73mlbAsIGVycuS4uumUmeivr+WvueixoVxyXG4gICAgICAgICAqIHJldHVybjpcclxuICAgICAgICAgKiAgICjml6ApXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0QmxhY2tMaXN0OiBmdW5jdGlvbiAob3B0aW9ucywgY2JPaywgY2JFcnIpIHt9LFxyXG5cclxuICAgICAgICAvKiBmdW5jdGlvbiBkZWxldGVCbGFja0xpc3RcclxuICAgICAgICAgKiAgIOaIkeeahOm7keWQjeWNlVxyXG4gICAgICAgICAqIHBhcmFtczpcclxuICAgICAgICAgKiAgIGNiT2sgICAtIGZ1bmN0aW9uKCnnsbvlnossIOaIkOWKn+aXtuWbnuiwg+WHveaVsFxyXG4gICAgICAgICAqICAgY2JFcnIgIC0gZnVuY3Rpb24oZXJyKeexu+Weiywg5aSx6LSl5pe25Zue6LCD5Ye95pWwLCBlcnLkuLrplJnor6/lr7nosaFcclxuICAgICAgICAgKiByZXR1cm46XHJcbiAgICAgICAgICogICAo5pegKVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGRlbGV0ZUJsYWNrTGlzdDogZnVuY3Rpb24gKG9wdGlvbnMsIGNiT2ssIGNiRXJyKSB7fSxcclxuXHJcbiAgICAgICAgLyogZnVuY3Rpb24gdXBsb2FkUGljXHJcbiAgICAgICAgICogICDkuIrkvKDlm77niYdcclxuICAgICAgICAgKiBwYXJhbXM6XHJcbiAgICAgICAgICogICBvcHRpb25zICAgIC0g6K+35rGC5Y+C5pWw77yM6K+m6KeBYXBp5paH5qGjXHJcbiAgICAgICAgICogICBjYk9rICAgLSBmdW5jdGlvbigp57G75Z6LLCDmiJDlip/ml7blm57osIPlh73mlbBcclxuICAgICAgICAgKiAgIGNiRXJyICAtIGZ1bmN0aW9uKGVycinnsbvlnossIOWksei0peaXtuWbnuiwg+WHveaVsCwgZXJy5Li66ZSZ6K+v5a+56LGhXHJcbiAgICAgICAgICogcmV0dXJuOlxyXG4gICAgICAgICAqICAgKOaXoClcclxuICAgICAgICAgKi9cclxuICAgICAgICB1cGxvYWRQaWM6IGZ1bmN0aW9uIChvcHRpb25zLCBjYk9rLCBjYkVycikge30sXHJcblxyXG4gICAgICAgIC8qIGZ1bmN0aW9uIGNyZWF0ZUdyb3VwXHJcbiAgICAgICAgICogICDliJvlu7rnvqRcclxuICAgICAgICAgKiBwYXJhbXM6XHJcbiAgICAgICAgICogICBvcHRpb25zICAgIC0g6K+35rGC5Y+C5pWw77yM6K+m6KeBYXBp5paH5qGjXHJcbiAgICAgICAgICogICBjYk9rICAgLSBmdW5jdGlvbigp57G75Z6LLCDmiJDlip/ml7blm57osIPlh73mlbBcclxuICAgICAgICAgKiAgIGNiRXJyICAtIGZ1bmN0aW9uKGVycinnsbvlnossIOWksei0peaXtuWbnuiwg+WHveaVsCwgZXJy5Li66ZSZ6K+v5a+56LGhXHJcbiAgICAgICAgICogcmV0dXJuOlxyXG4gICAgICAgICAqICAgKOaXoClcclxuICAgICAgICAgKi9cclxuICAgICAgICBjcmVhdGVHcm91cDogZnVuY3Rpb24gKG9wdGlvbnMsIGNiT2ssIGNiRXJyKSB7fSxcclxuXHJcbiAgICAgICAgLyogZnVuY3Rpb24gYXBwbHlKb2luR3JvdXBcclxuICAgICAgICAgKiAgIOeUs+ivt+WKoOe+pFxyXG4gICAgICAgICAqIHBhcmFtczpcclxuICAgICAgICAgKiAgIG9wdGlvbnMgICAgLSDor7fmsYLlj4LmlbDvvIzor6bop4FhcGnmlofmoaNcclxuICAgICAgICAgKiAgIGNiT2sgICAtIGZ1bmN0aW9uKCnnsbvlnossIOaIkOWKn+aXtuWbnuiwg+WHveaVsFxyXG4gICAgICAgICAqICAgY2JFcnIgIC0gZnVuY3Rpb24oZXJyKeexu+Weiywg5aSx6LSl5pe25Zue6LCD5Ye95pWwLCBlcnLkuLrplJnor6/lr7nosaFcclxuICAgICAgICAgKiByZXR1cm46XHJcbiAgICAgICAgICogICAo5pegKVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGFwcGx5Sm9pbkdyb3VwOiBmdW5jdGlvbiAob3B0aW9ucywgY2JPaywgY2JFcnIpIHt9LFxyXG5cclxuICAgICAgICAvKiBmdW5jdGlvbiBoYW5kbGVBcHBseUpvaW5Hcm91cFxyXG4gICAgICAgICAqICAg5aSE55CG55Sz6K+35Yqg576kKOWQjOaEj+aIluaLkue7nSlcclxuICAgICAgICAgKiBwYXJhbXM6XHJcbiAgICAgICAgICogICBvcHRpb25zICAgIC0g6K+35rGC5Y+C5pWw77yM6K+m6KeBYXBp5paH5qGjXHJcbiAgICAgICAgICogICBjYk9rICAgLSBmdW5jdGlvbigp57G75Z6LLCDmiJDlip/ml7blm57osIPlh73mlbBcclxuICAgICAgICAgKiAgIGNiRXJyICAtIGZ1bmN0aW9uKGVycinnsbvlnossIOWksei0peaXtuWbnuiwg+WHveaVsCwgZXJy5Li66ZSZ6K+v5a+56LGhXHJcbiAgICAgICAgICogcmV0dXJuOlxyXG4gICAgICAgICAqICAgKOaXoClcclxuICAgICAgICAgKi9cclxuICAgICAgICBoYW5kbGVBcHBseUpvaW5Hcm91cDogZnVuY3Rpb24gKG9wdGlvbnMsIGNiT2ssIGNiRXJyKSB7fSxcclxuXHJcbiAgICAgICAgLyogZnVuY3Rpb24gZGVsZXRlQXBwbHlKb2luR3JvdXBQZW5kZW5jeVxyXG4gICAgICAgICAqICAg5Yig6Zmk5Yqg576k55Sz6K+3XHJcbiAgICAgICAgICogcGFyYW1zOlxyXG4gICAgICAgICAqICAgb3B0aW9ucyAgICAtIOivt+axguWPguaVsO+8jOivpuingWFwaeaWh+aho1xyXG4gICAgICAgICAqICAgY2JPayAgIC0gZnVuY3Rpb24oKeexu+Weiywg5oiQ5Yqf5pe25Zue6LCD5Ye95pWwXHJcbiAgICAgICAgICogICBjYkVyciAgLSBmdW5jdGlvbihlcnIp57G75Z6LLCDlpLHotKXml7blm57osIPlh73mlbAsIGVycuS4uumUmeivr+WvueixoVxyXG4gICAgICAgICAqIHJldHVybjpcclxuICAgICAgICAgKiAgICjml6ApXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZGVsZXRlQXBwbHlKb2luR3JvdXBQZW5kZW5jeTogZnVuY3Rpb24gKG9wdGlvbnMsIGNiT2ssIGNiRXJyKSB7fSxcclxuXHJcblxyXG4gICAgICAgIC8qIGZ1bmN0aW9uIHF1aXRHcm91cFxyXG4gICAgICAgICAqICDkuLvliqjpgIDnvqRcclxuICAgICAgICAgKiBwYXJhbXM6XHJcbiAgICAgICAgICogICBvcHRpb25zICAgIC0g6K+35rGC5Y+C5pWw77yM6K+m6KeBYXBp5paH5qGjXHJcbiAgICAgICAgICogICBjYk9rICAgLSBmdW5jdGlvbigp57G75Z6LLCDmiJDlip/ml7blm57osIPlh73mlbBcclxuICAgICAgICAgKiAgIGNiRXJyICAtIGZ1bmN0aW9uKGVycinnsbvlnossIOWksei0peaXtuWbnuiwg+WHveaVsCwgZXJy5Li66ZSZ6K+v5a+56LGhXHJcbiAgICAgICAgICogcmV0dXJuOlxyXG4gICAgICAgICAqICAgKOaXoClcclxuICAgICAgICAgKi9cclxuICAgICAgICBxdWl0R3JvdXA6IGZ1bmN0aW9uIChvcHRpb25zLCBjYk9rLCBjYkVycikge30sXHJcblxyXG4gICAgICAgIC8qIGZ1bmN0aW9uIGdldEdyb3VwUHVibGljSW5mb1xyXG4gICAgICAgICAqICAg6K+75Y+W576k5YWs5byA6LWE5paZLemrmOe6p+aOpeWPo1xyXG4gICAgICAgICAqIHBhcmFtczpcclxuICAgICAgICAgKiAgIG9wdGlvbnMgICAgLSDor7fmsYLlj4LmlbDvvIzor6bop4FhcGnmlofmoaNcclxuICAgICAgICAgKiAgIGNiT2sgICAtIGZ1bmN0aW9uKCnnsbvlnossIOaIkOWKn+aXtuWbnuiwg+WHveaVsFxyXG4gICAgICAgICAqICAgY2JFcnIgIC0gZnVuY3Rpb24oZXJyKeexu+Weiywg5aSx6LSl5pe25Zue6LCD5Ye95pWwLCBlcnLkuLrplJnor6/lr7nosaFcclxuICAgICAgICAgKiByZXR1cm46XHJcbiAgICAgICAgICogICAo5pegKVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldEdyb3VwUHVibGljSW5mbzogZnVuY3Rpb24gKG9wdGlvbnMsIGNiT2ssIGNiRXJyKSB7fSxcclxuXHJcbiAgICAgICAgLyogZnVuY3Rpb24gZ2V0R3JvdXBJbmZvXHJcbiAgICAgICAgICogICDor7vlj5bnvqTor6bnu4botYTmlpkt6auY57qn5o6l5Y+jXHJcbiAgICAgICAgICogcGFyYW1zOlxyXG4gICAgICAgICAqICAgb3B0aW9ucyAgICAtIOivt+axguWPguaVsO+8jOivpuingWFwaeaWh+aho1xyXG4gICAgICAgICAqICAgY2JPayAgIC0gZnVuY3Rpb24oKeexu+Weiywg5oiQ5Yqf5pe25Zue6LCD5Ye95pWwXHJcbiAgICAgICAgICogICBjYkVyciAgLSBmdW5jdGlvbihlcnIp57G75Z6LLCDlpLHotKXml7blm57osIPlh73mlbAsIGVycuS4uumUmeivr+WvueixoVxyXG4gICAgICAgICAqIHJldHVybjpcclxuICAgICAgICAgKiAgICjml6ApXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0R3JvdXBJbmZvOiBmdW5jdGlvbiAob3B0aW9ucywgY2JPaywgY2JFcnIpIHt9LFxyXG5cclxuICAgICAgICAvKiBmdW5jdGlvbiBtb2RpZnlHcm91cEJhc2VJbmZvXHJcbiAgICAgICAgICogICDkv67mlLnnvqTln7rmnKzotYTmlplcclxuICAgICAgICAgKiBwYXJhbXM6XHJcbiAgICAgICAgICogICBvcHRpb25zICAgIC0g6K+35rGC5Y+C5pWw77yM6K+m6KeBYXBp5paH5qGjXHJcbiAgICAgICAgICogICBjYk9rICAgLSBmdW5jdGlvbigp57G75Z6LLCDmiJDlip/ml7blm57osIPlh73mlbBcclxuICAgICAgICAgKiAgIGNiRXJyICAtIGZ1bmN0aW9uKGVycinnsbvlnossIOWksei0peaXtuWbnuiwg+WHveaVsCwgZXJy5Li66ZSZ6K+v5a+56LGhXHJcbiAgICAgICAgICogcmV0dXJuOlxyXG4gICAgICAgICAqICAgKOaXoClcclxuICAgICAgICAgKi9cclxuICAgICAgICBtb2RpZnlHcm91cEJhc2VJbmZvOiBmdW5jdGlvbiAob3B0aW9ucywgY2JPaywgY2JFcnIpIHt9LFxyXG5cclxuICAgICAgICAvKiBmdW5jdGlvbiBkZXN0cm95R3JvdXBcclxuICAgICAgICAgKiAg6Kej5pWj576kXHJcbiAgICAgICAgICogcGFyYW1zOlxyXG4gICAgICAgICAqICAgb3B0aW9ucyAgICAtIOivt+axguWPguaVsO+8jOivpuingWFwaeaWh+aho1xyXG4gICAgICAgICAqICAgY2JPayAgIC0gZnVuY3Rpb24oKeexu+Weiywg5oiQ5Yqf5pe25Zue6LCD5Ye95pWwXHJcbiAgICAgICAgICogICBjYkVyciAgLSBmdW5jdGlvbihlcnIp57G75Z6LLCDlpLHotKXml7blm57osIPlh73mlbAsIGVycuS4uumUmeivr+WvueixoVxyXG4gICAgICAgICAqIHJldHVybjpcclxuICAgICAgICAgKiAgICjml6ApXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZGVzdHJveUdyb3VwOiBmdW5jdGlvbiAob3B0aW9ucywgY2JPaywgY2JFcnIpIHt9LFxyXG5cclxuICAgICAgICAvKiBmdW5jdGlvbiBnZXRKb2luZWRHcm91cExpc3RIaWdoXHJcbiAgICAgICAgICogICDojrflj5bmiJHnmoTnvqTnu4Qt6auY57qn5o6l5Y+jXHJcbiAgICAgICAgICogcGFyYW1zOlxyXG4gICAgICAgICAqICAgb3B0aW9ucyAgICAtIOivt+axguWPguaVsO+8jOivpuingWFwaeaWh+aho1xyXG4gICAgICAgICAqICAgY2JPayAgIC0gZnVuY3Rpb24oKeexu+Weiywg5oiQ5Yqf5pe25Zue6LCD5Ye95pWwXHJcbiAgICAgICAgICogICBjYkVyciAgLSBmdW5jdGlvbihlcnIp57G75Z6LLCDlpLHotKXml7blm57osIPlh73mlbAsIGVycuS4uumUmeivr+WvueixoVxyXG4gICAgICAgICAqIHJldHVybjpcclxuICAgICAgICAgKiAgICjml6ApXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0Sm9pbmVkR3JvdXBMaXN0SGlnaDogZnVuY3Rpb24gKG9wdGlvbnMsIGNiT2ssIGNiRXJyKSB7fSxcclxuXHJcbiAgICAgICAgLyogZnVuY3Rpb24gZ2V0R3JvdXBNZW1iZXJJbmZvXHJcbiAgICAgICAgICogICDojrflj5bnvqTnu4TmiJDlkZjliJfooahcclxuICAgICAgICAgKiBwYXJhbXM6XHJcbiAgICAgICAgICogICBvcHRpb25zICAgIC0g6K+35rGC5Y+C5pWw77yM6K+m6KeBYXBp5paH5qGjXHJcbiAgICAgICAgICogICBjYk9rICAgLSBmdW5jdGlvbigp57G75Z6LLCDmiJDlip/ml7blm57osIPlh73mlbBcclxuICAgICAgICAgKiAgIGNiRXJyICAtIGZ1bmN0aW9uKGVycinnsbvlnossIOWksei0peaXtuWbnuiwg+WHveaVsCwgZXJy5Li66ZSZ6K+v5a+56LGhXHJcbiAgICAgICAgICogcmV0dXJuOlxyXG4gICAgICAgICAqICAgKOaXoClcclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXRHcm91cE1lbWJlckluZm86IGZ1bmN0aW9uIChvcHRpb25zLCBjYk9rLCBjYkVycikge30sXHJcblxyXG4gICAgICAgIC8qIGZ1bmN0aW9uIGFkZEdyb3VwTWVtYmVyXHJcbiAgICAgICAgICogICDpgoDor7flpb3lj4vliqDnvqRcclxuICAgICAgICAgKiBwYXJhbXM6XHJcbiAgICAgICAgICogICBvcHRpb25zICAgIC0g6K+35rGC5Y+C5pWw77yM6K+m6KeBYXBp5paH5qGjXHJcbiAgICAgICAgICogICBjYk9rICAgLSBmdW5jdGlvbigp57G75Z6LLCDmiJDlip/ml7blm57osIPlh73mlbBcclxuICAgICAgICAgKiAgIGNiRXJyICAtIGZ1bmN0aW9uKGVycinnsbvlnossIOWksei0peaXtuWbnuiwg+WHveaVsCwgZXJy5Li66ZSZ6K+v5a+56LGhXHJcbiAgICAgICAgICogcmV0dXJuOlxyXG4gICAgICAgICAqICAgKOaXoClcclxuICAgICAgICAgKi9cclxuICAgICAgICBhZGRHcm91cE1lbWJlcjogZnVuY3Rpb24gKG9wdGlvbnMsIGNiT2ssIGNiRXJyKSB7fSxcclxuXHJcbiAgICAgICAgLyogZnVuY3Rpb24gbW9kaWZ5R3JvdXBNZW1iZXJcclxuICAgICAgICAgKiAgIOS/ruaUuee+pOaIkOWRmOi1hOaWme+8iOinkuiJsuaIluiAhee+pOa2iOaBr+aPkOexu+Wei+ekuu+8iVxyXG4gICAgICAgICAqIHBhcmFtczpcclxuICAgICAgICAgKiAgIG9wdGlvbnMgICAgLSDor7fmsYLlj4LmlbDvvIzor6bop4FhcGnmlofmoaNcclxuICAgICAgICAgKiAgIGNiT2sgICAtIGZ1bmN0aW9uKCnnsbvlnossIOaIkOWKn+aXtuWbnuiwg+WHveaVsFxyXG4gICAgICAgICAqICAgY2JFcnIgIC0gZnVuY3Rpb24oZXJyKeexu+Weiywg5aSx6LSl5pe25Zue6LCD5Ye95pWwLCBlcnLkuLrplJnor6/lr7nosaFcclxuICAgICAgICAgKiByZXR1cm46XHJcbiAgICAgICAgICogICAo5pegKVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG1vZGlmeUdyb3VwTWVtYmVyOiBmdW5jdGlvbiAob3B0aW9ucywgY2JPaywgY2JFcnIpIHt9LFxyXG5cclxuICAgICAgICAvKiBmdW5jdGlvbiBmb3JiaWRTZW5kTXNnXHJcbiAgICAgICAgICogICDorr7nva7nvqTmiJDlkZjnpoHoqIDml7bpl7RcclxuICAgICAgICAgKiBwYXJhbXM6XHJcbiAgICAgICAgICogICBvcHRpb25zICAgIC0g6K+35rGC5Y+C5pWw77yM6K+m6KeBYXBp5paH5qGjXHJcbiAgICAgICAgICogICBjYk9rICAgLSBmdW5jdGlvbigp57G75Z6LLCDmiJDlip/ml7blm57osIPlh73mlbBcclxuICAgICAgICAgKiAgIGNiRXJyICAtIGZ1bmN0aW9uKGVycinnsbvlnossIOWksei0peaXtuWbnuiwg+WHveaVsCwgZXJy5Li66ZSZ6K+v5a+56LGhXHJcbiAgICAgICAgICogcmV0dXJuOlxyXG4gICAgICAgICAqICAgKOaXoClcclxuICAgICAgICAgKi9cclxuICAgICAgICBmb3JiaWRTZW5kTXNnOiBmdW5jdGlvbiAob3B0aW9ucywgY2JPaywgY2JFcnIpIHt9LFxyXG5cclxuICAgICAgICAvKiBmdW5jdGlvbiBkZWxldGVHcm91cE1lbWJlclxyXG4gICAgICAgICAqICAg5Yig6Zmk576k5oiQ5ZGYXHJcbiAgICAgICAgICogcGFyYW1zOlxyXG4gICAgICAgICAqICAgb3B0aW9ucyAgICAtIOivt+axguWPguaVsO+8jOivpuingWFwaeaWh+aho1xyXG4gICAgICAgICAqICAgY2JPayAgIC0gZnVuY3Rpb24oKeexu+Weiywg5oiQ5Yqf5pe25Zue6LCD5Ye95pWwXHJcbiAgICAgICAgICogICBjYkVyciAgLSBmdW5jdGlvbihlcnIp57G75Z6LLCDlpLHotKXml7blm57osIPlh73mlbAsIGVycuS4uumUmeivr+WvueixoVxyXG4gICAgICAgICAqIHJldHVybjpcclxuICAgICAgICAgKiAgICjml6ApXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZGVsZXRlR3JvdXBNZW1iZXI6IGZ1bmN0aW9uIChvcHRpb25zLCBjYk9rLCBjYkVycikge30sXHJcblxyXG4gICAgICAgIC8qIGZ1bmN0aW9uIGdldFBlbmRlbmN5R3JvdXBcclxuICAgICAgICAgKiAgIOiOt+WPlue+pOe7hOacquWGs+WIl+ihqFxyXG4gICAgICAgICAqIHBhcmFtczpcclxuICAgICAgICAgKiAgIG9wdGlvbnMgICAgLSDor7fmsYLlj4LmlbDvvIzor6bop4FhcGnmlofmoaNcclxuICAgICAgICAgKiAgIGNiT2sgICAtIGZ1bmN0aW9uKCnnsbvlnossIOaIkOWKn+aXtuWbnuiwg+WHveaVsFxyXG4gICAgICAgICAqICAgY2JFcnIgIC0gZnVuY3Rpb24oZXJyKeexu+Weiywg5aSx6LSl5pe25Zue6LCD5Ye95pWwLCBlcnLkuLrplJnor6/lr7nosaFcclxuICAgICAgICAgKiByZXR1cm46XHJcbiAgICAgICAgICogICAo5pegKVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldFBlbmRlbmN5R3JvdXA6IGZ1bmN0aW9uIChvcHRpb25zLCBjYk9rLCBjYkVycikge30sXHJcblxyXG4gICAgICAgIC8qIGZ1bmN0aW9uIGdldFBlbmRlbmN5UmVwb3J0XHJcbiAgICAgICAgICogICDlpb3lj4vmnKrlhrPlt7Lor7vkuIrmiqVcclxuICAgICAgICAgKiBwYXJhbXM6XHJcbiAgICAgICAgICogICBvcHRpb25zICAgIC0g6K+35rGC5Y+C5pWw77yM6K+m6KeBYXBp5paH5qGjXHJcbiAgICAgICAgICogICBjYk9rICAgLSBmdW5jdGlvbigp57G75Z6LLCDmiJDlip/ml7blm57osIPlh73mlbBcclxuICAgICAgICAgKiAgIGNiRXJyICAtIGZ1bmN0aW9uKGVycinnsbvlnossIOWksei0peaXtuWbnuiwg+WHveaVsCwgZXJy5Li66ZSZ6K+v5a+56LGhXHJcbiAgICAgICAgICogcmV0dXJuOlxyXG4gICAgICAgICAqICAgKOaXoClcclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXRQZW5kZW5jeVJlcG9ydDogZnVuY3Rpb24gKG9wdGlvbnMsIGNiT2ssIGNiRXJyKSB7fSxcclxuXHJcbiAgICAgICAgLyogZnVuY3Rpb24gZ2V0UGVuZGVuY3lHcm91cFJlYWRcclxuICAgICAgICAgKiAgIOe+pOe7hOacquWGs+W3suivu+S4iuaKpVxyXG4gICAgICAgICAqIHBhcmFtczpcclxuICAgICAgICAgKiAgIG9wdGlvbnMgICAgLSDor7fmsYLlj4LmlbDvvIzor6bop4FhcGnmlofmoaNcclxuICAgICAgICAgKiAgIGNiT2sgICAtIGZ1bmN0aW9uKCnnsbvlnossIOaIkOWKn+aXtuWbnuiwg+WHveaVsFxyXG4gICAgICAgICAqICAgY2JFcnIgIC0gZnVuY3Rpb24oZXJyKeexu+Weiywg5aSx6LSl5pe25Zue6LCD5Ye95pWwLCBlcnLkuLrplJnor6/lr7nosaFcclxuICAgICAgICAgKiByZXR1cm46XHJcbiAgICAgICAgICogICAo5pegKVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldFBlbmRlbmN5R3JvdXBSZWFkOiBmdW5jdGlvbiAob3B0aW9ucywgY2JPaywgY2JFcnIpIHt9LFxyXG5cclxuICAgICAgICAvKiBmdW5jdGlvbiBzZW5kQ3VzdG9tR3JvdXBOb3RpZnlcclxuICAgICAgICAgKiAgIOWPkemAgeiHquWumuS5iee+pOmAmuefpVxyXG4gICAgICAgICAqIHBhcmFtczpcclxuICAgICAgICAgKiAgIG9wdGlvbnMgICAgLSDor7fmsYLlj4LmlbDvvIzor6bop4FhcGnmlofmoaNcclxuICAgICAgICAgKiAgIGNiT2sgICAtIGZ1bmN0aW9uKCnnsbvlnossIOaIkOWKn+aXtuWbnuiwg+WHveaVsFxyXG4gICAgICAgICAqICAgY2JFcnIgIC0gZnVuY3Rpb24oZXJyKeexu+Weiywg5aSx6LSl5pe25Zue6LCD5Ye95pWwLCBlcnLkuLrplJnor6/lr7nosaFcclxuICAgICAgICAgKiByZXR1cm46XHJcbiAgICAgICAgICogICAo5pegKVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNlbmRDdXN0b21Hcm91cE5vdGlmeTogZnVuY3Rpb24gKG9wdGlvbnMsIGNiT2ssIGNiRXJyKSB7fSxcclxuXHJcbiAgICAgICAgLyogY2xhc3Mgd2ViaW0uTXNnXHJcbiAgICAgICAgICogICDkuIDmnaHmtojmga/nmoTmj4/ov7DnsbssIOa2iOaBr+WPkemAgeOAgeaOpeaUtueahEFQSeS4remDveS8mua2ieWPiuatpOexu+Wei+eahOWvueixoVxyXG4gICAgICAgICAqIHByb3BlcnRpZXM6XHJcbiAgICAgICAgICogICBzZXNzICAgLSBTZXNzaW9uIG9iamVjdC1yZWYsIOa2iOaBr+aJgOWxnueahOS8muivnShlLmc65oiR5LiO5aW95Y+LQeeahEMyQ+S8muivne+8jOaIkeS4jue+pOe7hEfnmoRHUk9VUOS8muivnSlcclxuICAgICAgICAgKiAgIGlzU2VuZCAtIEJvb2xlYW4sIHRydWXooajnpLrmmK/miJHlj5Hlh7rmtojmga8sIGZhbHNl6KGo56S65piv5Y+R57uZ5oiR55qE5raI5oGvKVxyXG4gICAgICAgICAqICAgc2VxICAgIC0gSW50ZWdlciwg5raI5oGv5bqP5YiX5Y+3LCDnlKjkuo7liKTmlq3mtojmga/mmK/lkKblkIzkuIDmnaFcclxuICAgICAgICAgKiAgIHJhbmRvbSAtIEludGVnZXIsIOa2iOaBr+maj+acuuaVsCznlKjkuo7liKTmlq3mtojmga/mmK/lkKblkIzkuIDmnaFcclxuICAgICAgICAgKiAgIHRpbWUgICAtIEludGVnZXIsIOa2iOaBr+aXtumXtOaIsywg5Li6dW5peCB0aW1lc3RhbXBcclxuICAgICAgICAgKiAgIGZyb21BY2NvdW50IC1TdHJpbmcsICDmtojmga/lj5HpgIHogIXluJDlj7dcclxuICAgICAgICAgKiAgIHN1YlR5cGUgLUludGVnZXIsICDmtojmga/lrZDnsbvlnovvvIxjMmPmtojmga/ml7bvvIwwLeihqOekuuaZrumAmua2iOaBr++8m+e+pOa2iOaBr+aXtu+8jDAt5pmu6YCa5raI5oGv77yMMS3ngrnotZ7mtojmga/vvIwyLeaPkOekuua2iOaBr1xyXG4gICAgICAgICAqICAgZnJvbUFjY291bnROaWNrIC1TdHJpbmcsICDmtojmga/lj5HpgIHogIXmmLXnp7BcclxuICAgICAgICAgKiAgIGVsZW1zICAtIEFycmF5IG9mIHdlYmltLk1zZy5FbGVtLCDmj4/ov7Dmtojmga/lhoXlrrnnmoTlhYPntKDliJfooahcclxuICAgICAgICAgKiBjb25zdHJ1Y3RvcjpcclxuICAgICAgICAgKiAgIE1zZyhzZXNzLCBpc1NlbmQsIHNlcSxyYW5kb20gdGltZSxmcm9tQWNjb3VudCkgLSDmnoTpgKDlh73mlbAsIOWPguaVsOWumuS5ieWQjOS4iumdonByb3BlcnRpZXPkuK3lrprkuYlcclxuICAgICAgICAgKiBtZXRob2RzOlxyXG4gICAgICAgICAqICAgYWRkVGV4dCh0ZXh0KSAgLSDlkJFlbGVtc+S4rea3u+WKoOS4gOS4qlRFWFTlhYPntKBcclxuICAgICAgICAgKiAgIGFkZEZhY2UoZmFjZSkgIC0g5ZCRZWxlbXPkuK3mt7vliqDkuIDkuKpGQUNF5YWD57SgXHJcbiAgICAgICAgICogICB0b0h0bWwoKSAgICAgICAtIOi9rOaIkOWPr+WxleekuueahGh0bWwgU3RyaW5nXHJcbiAgICAgICAgICphZGRGYWNlXHJcbiAgICAgICAgICogc3ViLWNsYXNzIHdlYmltLk1zZy5FbGVtXHJcbiAgICAgICAgICogICDmtojmga/kuK3kuIDkuKrnu4TmiJDlhYPntKDnmoTmj4/ov7DnsbssIOS4gOadoea2iOaBr+eahOWGheWuueiiq+aKveixoeaPj+i/sOS4uk7kuKrlhYPntKDnmoTmnInluo/liJfooahcclxuICAgICAgICAgKiBwcm9wZXJ0aWVzOlxyXG4gICAgICAgICAqICAgdHlwZSAgIC0g5YWD57Sg57G75Z6LLCDnm67liY3mnIlURVhUKOaWh+acrCnjgIFGQUNFKOihqOaDhSnjgIFJTUFHRSjlm77niYcp562JXHJcbiAgICAgICAgICogICBjb250ZW50LSDlhYPntKDlhoXlrrnkvZMsIOW9k1RFWFTml7bkuLpTdHJpbmcsIOW9k1BJQ+aXtuS4ulVybFN0cmluZ1xyXG4gICAgICAgICAqIGNvbnN0cnVjdG9yOlxyXG4gICAgICAgICAqICAgRWxlbSh0eXBlLCBjb250ZW50KSAtIOaehOmAoOWHveaVsCwg5Y+C5pWw5a6a5LmJ5ZCM5LiK6Z2icHJvcGVydGllc+S4reWumuS5iVxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogc3ViLWNsYXNzIHdlYmltLk1zZy5FbGVtLlRleHRFbGVtXHJcbiAgICAgICAgICogICDmlofmnKxcclxuICAgICAgICAgKiBwcm9wZXJ0aWVzOlxyXG4gICAgICAgICAqICAgdGV4dCAgLSBTdHJpbmcg5YaF5a65XHJcbiAgICAgICAgICogY29uc3RydWN0b3I6XHJcbiAgICAgICAgICogICBUZXh0RWxlbSh0ZXh0KSAtIOaehOmAoOWHveaVsCwg5Y+C5pWw5a6a5LmJ5ZCM5LiK6Z2icHJvcGVydGllc+S4reWumuS5iVxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogc3ViLWNsYXNzIHdlYmltLk1zZy5FbGVtLkZhY2VFbGVtXHJcbiAgICAgICAgICogICDooajmg4VcclxuICAgICAgICAgKiBwcm9wZXJ0aWVzOlxyXG4gICAgICAgICAqICAgaW5kZXggIC0gSW50ZWdlciDooajmg4XntKLlvJUsIOeUqOaIt+iHquWumuS5iVxyXG4gICAgICAgICAqICAgZGF0YSAgIC0gU3RyaW5nIOmineWkluaVsOaNru+8jOeUqOaIt+iHquWumuS5iVxyXG4gICAgICAgICAqIGNvbnN0cnVjdG9yOlxyXG4gICAgICAgICAqICAgRmFjZUVsZW0oaW5kZXgsZGF0YSkgLSDmnoTpgKDlh73mlbAsIOWPguaVsOWumuS5ieWQjOS4iumdonByb3BlcnRpZXPkuK3lrprkuYlcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgTXNnOiBmdW5jdGlvbiAoc2VzcywgaXNTZW5kLCBzZXEsIHJhbmRvbSwgdGltZSwgZnJvbUFjY291bnQsIHN1YlR5cGUsIGZyb21BY2NvdW50TmljaywgZnJvbUFjY291bnRIZWFkdXJsKSB7IC8qQ2xhc3MgY29uc3RydWN0b3IqLyB9LFxyXG5cclxuICAgICAgICAvKiBzaW5nbGV0b24gb2JqZWN0IE1zZ1N0b3JlXHJcbiAgICAgICAgICogd2ViaW0uTXNnU3RvcmXmmK/mtojmga/mlbDmja7nmoRNb2RlbOWvueixoSjlj4LogINNVkPmpoLlv7UpLCDlroPmj5DkvpvmjqXlj6Porr/pl67lvZPliY3lrZjlgqjnmoTkvJror53lkozmtojmga/mlbDmja5cclxuICAgICAgICAgKiDkuIvpnaLor7TmmI7kuIvkvJror53mlbDmja7nsbvlnos6IFNlc3Npb25cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIGNsYXNzIFNlc3Npb25cclxuICAgICAgICAgKiAgIOS4gOS4qlNlc3Npb27lr7nosaHmj4/ov7DkuIDkuKrkvJror53vvIzkvJror53lj6/nroDljZXnkIbop6PkuLrmnIDov5HkvJror53liJfooajnmoTkuIDkuKrmnaHnm67vvIzlroPnlLHkuKTkuKrlrZfmrrXllK/kuIDmoIfor4Y6XHJcbiAgICAgICAgICogICAgIHR5cGUgLSBTdHJpbmcsIOS8muivneexu+WeiyjlpoJcIkMyQ1wiLCBcIkdST1VQXCIsIC4uLilcclxuICAgICAgICAgKiAgICAgaWQgICAtIFN0cmluZywg5Lya6K+dSUQo5aaCQzJD57G75Z6L5Lit5Li65a+55pa55biQ5Y+3LFwiQzJDXCLml7bkuLrlpb3lj4tJRCxcIkdST1VQXCLml7bkuLrnvqRJRClcclxuICAgICAgICAgKiBwcm9wZXJ0aWVzOlxyXG4gICAgICAgICAqICAgKFNlc3Npb27lr7nosaHmnKrlr7nlpJbmmrTpnLLku7vkvZXlsZ7mgKflrZfmrrUsIOaJgOacieiuv+mXrumAmui/h+S4i+mdoueahGdldHRlcuaWueazlei/m+ihjClcclxuICAgICAgICAgKiBtZXRob2RzOlxyXG4gICAgICAgICAqICAgdHlwZSgpICAgICAtIFN0cmluZywg6L+U5Zue5Lya6K+d57G75Z6LLFwiQzJDXCLooajnpLrkuI7lpb3lj4vnp4HogYrvvIxcIkdST1VQXCLooajnpLrnvqTogYpcclxuICAgICAgICAgKiAgIGlkKCkgICAgICAgLSBTdHJpbmcsIOi/lOWbnuS8muivnUlEXHJcbiAgICAgICAgICogICBuYW1lKCkgICAgIC0gU3RyaW5nLCDov5Tlm57kvJror53moIfpopgo5aaCQzJD57G75Z6L5Lit5Li65a+55pa555qE5pi156ewLOaaguS4jeaUr+aMgSlcclxuICAgICAgICAgKiAgIGljb24oKSAgICAgLSBTdHJpbmcsIOi/lOWbnuS8muivneWbvuaghyjlr7lDMkPnsbvlnovkuK3kuLrlr7nmlrnnmoTlpLTlg49VUkzvvIzmmoLkuI3mlK/mjIEpXHJcbiAgICAgICAgICogICB1bnJlYWQoKSAgICAgICAgICAgLSBJbnRlZ2VyLCDov5Tlm57kvJror53mnKror7vmnaHmlbBcclxuICAgICAgICAgKiAgIHRpbWUoKSAgICAgLSBJbnRlZ2VyLCDov5Tlm57kvJror53mnIDlkI7mtLvot4Pml7bpl7QsIOS4unVuaXggdGltZXN0YW1wXHJcbiAgICAgICAgICogICBjdXJNYXhNc2dTZXEoKSAtIEludGVnZXIsIOi/lOWbnuS8muivneacgOWkp+a2iOaBr+W6j+WIl+WPt1xyXG4gICAgICAgICAqICAgbXNnQ291bnQoKSAtIEludGVnZXIsIOi/lOWbnuS8muivneS4reaJgOaciea2iOaBr+adoeaVsFxyXG4gICAgICAgICAqICAgbXNnKGluZGV4KSAtIHdlYmltLk1zZywg6L+U5Zue5Lya6K+d5Lit56ysaW5kZXjmnaHmtojmga9cclxuICAgICAgICAgKi9cclxuICAgICAgICBNc2dTdG9yZToge1xyXG4gICAgICAgICAgICAvKiBmdW5jdGlvbiBzZXNzTWFwXHJcbiAgICAgICAgICAgICAqICAg6I635Y+W5omA5pyJ5Lya6K+dXHJcbiAgICAgICAgICAgICAqIHJldHVybjpcclxuICAgICAgICAgICAgICogICDmiYDmnInkvJror53lr7nosaFcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHNlc3NNYXA6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IC8qT2JqZWN0Ki8gfTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLyogZnVuY3Rpb24gc2Vzc0NvdW50XHJcbiAgICAgICAgICAgICAqICAg6I635Y+W5b2T5YmN5Lya6K+d55qE5Liq5pWwXHJcbiAgICAgICAgICAgICAqIHJldHVybjpcclxuICAgICAgICAgICAgICogICBJbnRlZ2VyLCDkvJror53kuKrmlbBcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHNlc3NDb3VudDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAvKiBmdW5jdGlvbiBzZXNzQnlUeXBlSWRcclxuICAgICAgICAgICAgICogICDmoLnmja7kvJror53nsbvlnovlkozkvJror51JROWPluW+l+ebuOW6lOS8muivnVxyXG4gICAgICAgICAgICAgKiBwYXJhbXM6XHJcbiAgICAgICAgICAgICAqICAgdHlwZSAgIC0gU3RyaW5nLCDkvJror53nsbvlnoso5aaCXCJDMkNcIiwgXCJHUk9VUFwiLCAuLi4pXHJcbiAgICAgICAgICAgICAqICAgaWQgICAgIC0gU3RyaW5nLCDkvJror51JRCjlpoLlr7nmlrlJRClcclxuICAgICAgICAgICAgICogcmV0dXJuOlxyXG4gICAgICAgICAgICAgKiAgIFNlc3Npb24sIOS8muivneWvueixoSjor7TmmI7op4HkuIrpnaIpXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBzZXNzQnlUeXBlSWQ6IGZ1bmN0aW9uICh0eXBlLCBpZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLypTZXNzaW9uIE9iamVjdCovIH07XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8qIGZ1bmN0aW9uIGRlbFNlc3NCeVR5cGVJZFxyXG4gICAgICAgICAgICAgKiAgIOagueaNruS8muivneexu+Wei+WSjOS8muivnUlE5Yig6Zmk55u45bqU5Lya6K+dXHJcbiAgICAgICAgICAgICAqIHBhcmFtczpcclxuICAgICAgICAgICAgICogICB0eXBlICAgLSBTdHJpbmcsIOS8muivneexu+WeiyjlpoJcIkMyQ1wiLCBcIkdST1VQXCIsIC4uLilcclxuICAgICAgICAgICAgICogICBpZCAgICAgLSBTdHJpbmcsIOS8muivnUlEKOWmguWvueaWuUlEKVxyXG4gICAgICAgICAgICAgKiByZXR1cm46XHJcbiAgICAgICAgICAgICAqICAgQm9vbGVhbiwg5biD5bCU57G75Z6LXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBkZWxTZXNzQnlUeXBlSWQ6IGZ1bmN0aW9uICh0eXBlLCBpZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAvKiBmdW5jdGlvbiByZXNldENvb2tpZUFuZFN5bmNGbGFnXHJcbiAgICAgICAgICAgICAqICAg6YeN572u5LiK5LiA5qyh6K+75Y+W5pawYzJj5raI5oGvQ29va2ll5ZKM5piv5ZCm57un57ut5ouJ5Y+W5qCH6K6wXHJcbiAgICAgICAgICAgICAqIHJldHVybjpcclxuICAgICAgICAgICAgICpcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHJlc2V0Q29va2llQW5kU3luY0ZsYWc6IGZ1bmN0aW9uICgpIHt9LFxyXG5cclxuICAgICAgICAgICAgZG93bmxvYWRNYXA6IHt9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgLyogd2ViaW0gQVBJIGltcGxlbWVudGF0aW9uXHJcbiAgICAgKi9cclxuICAgIChmdW5jdGlvbiAod2ViaW0pIHtcclxuICAgICAgICAvL3Nka+eJiOacrFxyXG4gICAgICAgIHZhciBTREsgPSB7XHJcbiAgICAgICAgICAgICdWRVJTSU9OJzogJzEuNy4yJywgLy9zZGvniYjmnKzlj7dcclxuICAgICAgICAgICAgJ0FQUElEJzogJzUzNzA0ODE2OCcsIC8vd2ViIGltIHNkayDniYjmnKwgQVBQSURcclxuICAgICAgICAgICAgJ1BMQUFURk9STSc6IFwiMTBcIiAvL+WPkemAgeivt+axguaXtuWIpOaWreWFtuaYr+adpeiHqndlYuerr+eahOivt+axglxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8v5piv5ZCm5ZCv55So5q2j5byP546v5aKD77yM6buY6K6k5ZCv55SoXHJcbiAgICAgICAgdmFyIGlzQWNjZXNzRm9ybWFFbnZpcm9ubWVudCA9IHRydWU7XHJcbiAgICAgICAgLy8gdmFyIGlzQWNjZXNzRm9ybWFFbnZpcm9ubWVudCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvL+WQjuWPsOaOpeWPo+S4u+aculxyXG4gICAgICAgIHZhciBTUlZfSE9TVCA9IHtcclxuICAgICAgICAgICAgJ0ZPUk1BTCc6IHtcclxuICAgICAgICAgICAgICAgICdDT01NT04nOiAnaHR0cHM6Ly93ZWJpbS50aW0ucXEuY29tJyxcclxuICAgICAgICAgICAgICAgICdQSUMnOiAnaHR0cHM6Ly9waWMudGltLnFxLmNvbSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ1RFU1QnOiB7XHJcbiAgICAgICAgICAgICAgICAnQ09NTU9OJzogJ2h0dHBzOi8vdGVzdC50aW0ucXEuY29tJyxcclxuICAgICAgICAgICAgICAgICdQSUMnOiAnaHR0cHM6Ly9waWMudGltLnFxLmNvbSdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8v5rWP6KeI5Zmo54mI5pys5L+h5oGvXHJcbiAgICAgICAgdmFyIEJST1dTRVJfSU5GTyA9IHt9O1xyXG4gICAgICAgIC8v5piv5ZCm5Li6aWU577yI5ZCr77yJ5Lul5LiLXHJcbiAgICAgICAgdmFyIGxvd2VyQlIgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy/mnI3liqHlkI3np7BcclxuICAgICAgICB2YXIgU1JWX05BTUUgPSB7XHJcbiAgICAgICAgICAgICdPUEVOX0lNJzogJ29wZW5pbScsIC8v56eB6IGK77yI5ouJ5Y+W5pyq6K+7YzJj5raI5oGv77yM6ZW/6L2u6K+i77yMYzJj5raI5oGv5bey6K+75LiK5oql562J77yJ5pyN5Yqh5ZCNXHJcbiAgICAgICAgICAgICdHUk9VUCc6ICdncm91cF9vcGVuX2h0dHBfc3ZjJywgLy/nvqTnu4TnrqHnkIbvvIjmi4nlj5bnvqTmtojmga/vvIzliJvlu7rnvqTvvIznvqTmiJDlkZjnrqHnkIbvvIznvqTmtojmga/lt7Lor7vkuIrmiqXnrYnvvInmnI3liqHlkI1cclxuICAgICAgICAgICAgJ0ZSSUVORCc6ICdzbnMnLCAvL+WFs+ezu+mTvueuoeeQhu+8iOWlveWPi+euoeeQhu+8jOm7keWQjeWNleeuoeeQhuetie+8ieacjeWKoeWQjVxyXG4gICAgICAgICAgICAnUFJPRklMRSc6ICdwcm9maWxlJywgLy/otYTmlpnnrqHnkIbvvIjmn6Xor6LvvIzorr7nva7kuKrkurrotYTmlpnnrYnvvInmnI3liqHlkI1cclxuICAgICAgICAgICAgJ1JFQ0VOVF9DT05UQUNUJzogJ3JlY2VudGNvbnRhY3QnLCAvL+acgOi/keiBlOezu+S6uuacjeWKoeWQjVxyXG4gICAgICAgICAgICAnUElDJzogJ29wZW5waWMnLCAvL+WbvueJh++8iOaIluaWh+S7tu+8ieacjeWKoeWQjVxyXG4gICAgICAgICAgICAnQklHX0dST1VQJzogJ2dyb3VwX29wZW5faHR0cF9ub2F1dGhfc3ZjJywgLy/nm7Tmkq3lpKfnvqQg576k57uE566h55CG77yI55Sz6K+35Yqg5aSn576k77yJ5pyN5Yqh5ZCNXHJcbiAgICAgICAgICAgICdCSUdfR1JPVVBfTE9OR19QT0xMSU5HJzogJ2dyb3VwX29wZW5fbG9uZ19wb2xsaW5nX2h0dHBfbm9hdXRoX3N2YycsIC8v55u05pKt5aSn576kIOmVv+i9ruivou+8iOaLieWPlua2iOaBr+etie+8ieacjeWKoeWQjVxyXG4gICAgICAgICAgICAnSU1fT1BFTl9TVEFUJzogJ2ltb3BlbnN0YXQnLCAvL+i0qOmHj+S4iuaKpe+8jOe7n+iuoeaOpeWPo+mUmeivr+eOh1xyXG4gICAgICAgICAgICAnREVMX0NIQVQnOiAncmVjZW50Y29udGFjdCcsIC8v5Yig6Zmk5Lya6K+dXHJcbiAgICAgICAgICAgICdXRUJfSU0nOiAnd2ViaW0nXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy/kuI3lkIzmnI3liqHlr7nlupTnmoTniYjmnKzlj7dcclxuICAgICAgICB2YXIgU1JWX05BTUVfVkVSID0ge1xyXG4gICAgICAgICAgICAnb3BlbmltJzogJ3Y0JyxcclxuICAgICAgICAgICAgJ2dyb3VwX29wZW5faHR0cF9zdmMnOiAndjQnLFxyXG4gICAgICAgICAgICAnc25zJzogJ3Y0JyxcclxuICAgICAgICAgICAgJ3Byb2ZpbGUnOiAndjQnLFxyXG4gICAgICAgICAgICAncmVjZW50Y29udGFjdCc6ICd2NCcsXHJcbiAgICAgICAgICAgICdvcGVucGljJzogJ3Y0JyxcclxuICAgICAgICAgICAgJ2dyb3VwX29wZW5faHR0cF9ub2F1dGhfc3ZjJzogJ3YxJyxcclxuICAgICAgICAgICAgJ2dyb3VwX29wZW5fbG9uZ19wb2xsaW5nX2h0dHBfbm9hdXRoX3N2Yyc6ICd2MScsXHJcbiAgICAgICAgICAgICdpbW9wZW5zdGF0JzogJ3Y0JyxcclxuICAgICAgICAgICAgJ3dlYmltJzogJ3YzJ1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8v5LiN5ZCM55qE5ZG95Luk5ZCN5a+55bqU55qE5LiK5oql57G75Z6LSUTvvIznlKjkuo7mjqXlj6PotKjph4/kuIrmiqVcclxuICAgICAgICB2YXIgQ01EX0VWRU5UX0lEX01BUCA9IHtcclxuICAgICAgICAgICAgJ2xvZ2luJzogMSwgLy/nmbvlvZVcclxuICAgICAgICAgICAgJ3BpY191cCc6IDMsIC8v5LiK5Lyg5Zu+54mHXHJcbiAgICAgICAgICAgICdhcHBseV9qb2luX2dyb3VwJzogOSwgLy/nlLPor7fliqDlhaXnvqTnu4RcclxuICAgICAgICAgICAgJ2NyZWF0ZV9ncm91cCc6IDEwLCAvL+WIm+W7uue+pOe7hFxyXG4gICAgICAgICAgICAnbG9uZ3BvbGxpbmcnOiAxOCwgLy/mma7pgJrplb/ova7or6JcclxuICAgICAgICAgICAgJ3NlbmRfZ3JvdXBfbXNnJzogMTksIC8v576k6IGKXHJcbiAgICAgICAgICAgICdzZW5kbXNnJzogMjAgLy/np4HogYpcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL+iBiuWkqeexu+Wei1xyXG4gICAgICAgIHZhciBTRVNTSU9OX1RZUEUgPSB7XHJcbiAgICAgICAgICAgICdDMkMnOiAnQzJDJywgLy/np4HogYpcclxuICAgICAgICAgICAgJ0dST1VQJzogJ0dST1VQJyAvL+e+pOiBilxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8v5pyA6L+R6IGU57O75Lq657G75Z6LXHJcbiAgICAgICAgdmFyIFJFQ0VOVF9DT05UQUNUX1RZUEUgPSB7XHJcbiAgICAgICAgICAgICdDMkMnOiAxLCAvL+WlveWPi1xyXG4gICAgICAgICAgICAnR1JPVVAnOiAyIC8v576kXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy/mtojmga/mnIDlpKfplb/luqbvvIjlrZfoioLvvIlcclxuICAgICAgICB2YXIgTVNHX01BWF9MRU5HVEggPSB7XHJcbiAgICAgICAgICAgICdDMkMnOiAxMjAwMCwgLy/np4HogYrmtojmga9cclxuICAgICAgICAgICAgJ0dST1VQJzogODg5OCAvL+e+pOiBilxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8v5ZCO5Y+w5o6l5Y+j6L+U5Zue57G75Z6LXHJcbiAgICAgICAgdmFyIEFDVElPTl9TVEFUVVMgPSB7XHJcbiAgICAgICAgICAgICdPSyc6ICdPSycsIC8v5oiQ5YqfXHJcbiAgICAgICAgICAgICdGQUlMJzogJ0ZBSUwnIC8v5aSx6LSlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIEVSUk9SX0NPREVfQ1VTVE9NID0gOTk5OTk7IC8v6Ieq5a6a5LmJ5ZCO5Y+w5o6l5Y+j6L+U5Zue6ZSZ6K+v56CBXHJcblxyXG4gICAgICAgIC8v5raI5oGv5YWD57Sg57G75Z6LXHJcbiAgICAgICAgdmFyIE1TR19FTEVNRU5UX1RZUEUgPSB7XHJcbiAgICAgICAgICAgICdURVhUJzogJ1RJTVRleHRFbGVtJywgLy/mlofmnKxcclxuICAgICAgICAgICAgJ0ZBQ0UnOiAnVElNRmFjZUVsZW0nLCAvL+ihqOaDhVxyXG4gICAgICAgICAgICAnSU1BR0UnOiAnVElNSW1hZ2VFbGVtJywgLy/lm77niYdcclxuICAgICAgICAgICAgJ0NVU1RPTSc6ICdUSU1DdXN0b21FbGVtJywgLy/oh6rlrprkuYlcclxuICAgICAgICAgICAgJ1NPVU5EJzogJ1RJTVNvdW5kRWxlbScsIC8v6K+t6Z+zLOWPquaUr+aMgeaYvuekulxyXG4gICAgICAgICAgICAnRklMRSc6ICdUSU1GaWxlRWxlbScsIC8v5paH5Lu2LOWPquaUr+aMgeaYvuekulxyXG4gICAgICAgICAgICAnTE9DQVRJT04nOiAnVElNTG9jYXRpb25FbGVtJywgLy/lnLDnkIbkvY3nva5cclxuICAgICAgICAgICAgJ0dST1VQX1RJUCc6ICdUSU1Hcm91cFRpcEVsZW0nIC8v576k5o+Q56S65raI5oGvLOWPquaUr+aMgeaYvuekulxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8v5Zu+54mH57G75Z6LXHJcbiAgICAgICAgdmFyIElNQUdFX1RZUEUgPSB7XHJcbiAgICAgICAgICAgICdPUklHSU4nOiAxLCAvL+WOn+WbvlxyXG4gICAgICAgICAgICAnTEFSR0UnOiAyLCAvL+e8qeeVpeWkp+WbvlxyXG4gICAgICAgICAgICAnU01BTEwnOiAzIC8v57yp55Wl5bCP5Zu+XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy/lm77niYfmoLzlvI9cclxuICAgICAgICB2YXIgSU1BR0VfRk9STUFUID0ge1xyXG4gICAgICAgICAgICBKUEc6IDB4MSxcclxuICAgICAgICAgICAgSlBFRzogMHgxLFxyXG4gICAgICAgICAgICBHSUY6IDB4MixcclxuICAgICAgICAgICAgUE5HOiAweDMsXHJcbiAgICAgICAgICAgIEJNUDogMHg0LFxyXG4gICAgICAgICAgICBVTktOT1dOOiAweGZmXHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIC8v5LiK5Lyg6LWE5rqQ5YyF57G75Z6LXHJcbiAgICAgICAgdmFyIFVQTE9BRF9SRVNfUEtHX0ZMQUcgPSB7XHJcbiAgICAgICAgICAgICdSQVdfREFUQSc6IDAsIC8v5Y6f5aeL5pWw5o2uXHJcbiAgICAgICAgICAgICdCQVNFNjRfREFUQSc6IDEgLy9iYXNlNjTnvJbnoIHmlbDmja5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL+S4i+i9veaWh+S7tumFjee9rlxyXG4gICAgICAgIHZhciBET1dOTE9BRF9GSUxFID0ge1xyXG4gICAgICAgICAgICAnQlVTU0lORVNTX0lEJzogJzEwMDAxJywgLy/kuIvovb3mlofku7bkuJrliqFJRFxyXG4gICAgICAgICAgICAnQVVUSF9LRVknOiAnNjE3NTc0Njg2YjY1NzknLCAvL+S4i+i9veaWh+S7tmF1dGhrZXlcclxuICAgICAgICAgICAgJ1NFUlZFUl9JUCc6ICcxODIuMTQwLjE4Ni4xNDcnIC8v5LiL6L295paH5Lu25pyN5Yqh5ZmoSVBcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL+S4i+i9veaWh+S7tuexu+Wei1xyXG4gICAgICAgIHZhciBET1dOTE9BRF9GSUxFX1RZUEUgPSB7XHJcbiAgICAgICAgICAgIFwiU09VTkRcIjogMjEwNiwgLy/or63pn7NcclxuICAgICAgICAgICAgXCJGSUxFXCI6IDIxMDcgLy/mma7pgJrmlofku7ZcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL+S4iuS8oOi1hOa6kOexu+Wei1xyXG4gICAgICAgIHZhciBVUExPQURfUkVTX1RZUEUgPSB7XHJcbiAgICAgICAgICAgIFwiSU1BR0VcIjogMSwgLy/lm77niYdcclxuICAgICAgICAgICAgXCJGSUxFXCI6IDIsIC8v5paH5Lu2XHJcbiAgICAgICAgICAgIFwiU0hPUlRfVklERU9cIjogMywgLy/nn63op4bpopFcclxuICAgICAgICAgICAgXCJTT1VORFwiOiA0IC8v6K+t6Z+z77yMUFRUXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy/niYjmnKzlj7fvvIznlKjkuo7kuIrkvKDlm77niYfmiJbmlofku7bmjqXlj6NcclxuICAgICAgICB2YXIgVkVSU0lPTl9JTkZPID0ge1xyXG4gICAgICAgICAgICAnQVBQX1ZFUlNJT04nOiAnMi4xJywgLy/lupTnlKjniYjmnKzlj7dcclxuICAgICAgICAgICAgJ1NFUlZFUl9WRVJTSU9OJzogMSAvL+acjeWKoeerr+eJiOacrOWPt1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8v6ZW/6L2u6K+i5raI5oGv57G75Z6LXHJcbiAgICAgICAgdmFyIExPTkdfUE9MTElOTkdfRVZFTlRfVFlQRSA9IHtcclxuICAgICAgICAgICAgXCJDMkNcIjogMSAvL+aWsOeahGMyY+a2iOaBr+mAmuefpVxyXG4gICAgICAgICAgICAgICAgLFxyXG4gICAgICAgICAgICBcIkdST1VQX0NPTU1PTlwiOiAzIC8v5paw55qE576k5pmu6YCa5raI5oGvXHJcbiAgICAgICAgICAgICAgICAsXHJcbiAgICAgICAgICAgIFwiR1JPVVBfVElQXCI6IDQgLy/mlrDnmoTnvqTmj5DnpLrmtojmga9cclxuICAgICAgICAgICAgICAgICxcclxuICAgICAgICAgICAgXCJHUk9VUF9TWVNURU1cIjogNSAvL+aWsOeahOe+pOezu+e7n+a2iOaBr1xyXG4gICAgICAgICAgICAgICAgLFxyXG4gICAgICAgICAgICBcIkdST1VQX1RJUDJcIjogNiAvL+aWsOeahOe+pOaPkOekuua2iOaBrzJcclxuICAgICAgICAgICAgICAgICxcclxuICAgICAgICAgICAgXCJGUklFTkRfTk9USUNFXCI6IDcgLy/lpb3lj4vns7vnu5/pgJrnn6VcclxuICAgICAgICAgICAgICAgICxcclxuICAgICAgICAgICAgXCJQUk9GSUxFX05PVElDRVwiOiA4IC8v6LWE5paZ57O757uf6YCa55+lXHJcbiAgICAgICAgICAgICAgICAsXHJcbiAgICAgICAgICAgIFwiQzJDX0NPTU1PTlwiOiA5IC8v5paw55qEQzJD5raI5oGvXHJcbiAgICAgICAgICAgICAgICAsXHJcbiAgICAgICAgICAgIFwiQzJDX0VWRU5UXCI6IDEwXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy9jMmPmtojmga/lrZDnsbvlnotcclxuICAgICAgICB2YXIgQzJDX01TR19TVUJfVFlQRSA9IHtcclxuICAgICAgICAgICAgXCJDT01NT05cIjogMCAvL+aZrumAmua2iOaBr1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy9jMmPmtojmga/lrZDnsbvlnotcclxuICAgICAgICB2YXIgQzJDX0VWRU5UX1NVQl9UWVBFID0ge1xyXG4gICAgICAgICAgICBcIlJFQURFRFwiOiA5MiwgLy/lt7Lor7vmtojmga/lkIzmraVcclxuICAgICAgICAgICAgXCJLSUNLRURPVVRcIjogOTZcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL+e+pOa2iOaBr+WtkOexu+Wei1xyXG4gICAgICAgIHZhciBHUk9VUF9NU0dfU1VCX1RZUEUgPSB7XHJcbiAgICAgICAgICAgIFwiQ09NTU9OXCI6IDAsIC8v5pmu6YCa5raI5oGvXHJcbiAgICAgICAgICAgIFwiTE9WRU1TR1wiOiAxLCAvL+eCuei1nua2iOaBr1xyXG4gICAgICAgICAgICBcIlRJUFwiOiAyLCAvL+aPkOekuua2iOaBr1xyXG4gICAgICAgICAgICBcIlJFRFBBQ0tFVFwiOiAzIC8v57qi5YyF5raI5oGvXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy/nvqTmtojmga/kvJjlhYjnuqfnsbvlnotcclxuICAgICAgICB2YXIgR1JPVVBfTVNHX1BSSU9SSVRZX1RZUEUgPSB7XHJcbiAgICAgICAgICAgIFwiUkVEUEFDS0VUXCI6IDEsIC8v57qi5YyF5raI5oGvXHJcbiAgICAgICAgICAgIFwiQ09NTU9OXCI6IDIsIC8v5pmu6YCa5raI5oGvXHJcbiAgICAgICAgICAgIFwiTE9WRU1TR1wiOiAzIC8v54K56LWe5raI5oGvXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy/nvqTmj5DnpLrmtojmga/nsbvlnotcclxuICAgICAgICB2YXIgR1JPVVBfVElQX1RZUEUgPSB7XHJcbiAgICAgICAgICAgIFwiSk9JTlwiOiAxLCAvL+WKoOWFpee+pOe7hFxyXG4gICAgICAgICAgICBcIlFVSVRcIjogMiwgLy/pgIDlh7rnvqTnu4RcclxuICAgICAgICAgICAgXCJLSUNLXCI6IDMsIC8v6KKr6Lii5Ye6576k57uEXHJcbiAgICAgICAgICAgIFwiU0VUX0FETUlOXCI6IDQsIC8v6KKr6K6+572u5Li6566h55CG5ZGYXHJcbiAgICAgICAgICAgIFwiQ0FOQ0VMX0FETUlOXCI6IDUsIC8v6KKr5Y+W5raI566h55CG5ZGYXHJcbiAgICAgICAgICAgIFwiTU9ESUZZX0dST1VQX0lORk9cIjogNiwgLy/kv67mlLnnvqTotYTmlplcclxuICAgICAgICAgICAgXCJNT0RJRllfTUVNQkVSX0lORk9cIjogNyAvL+S/ruaUuee+pOaIkOWRmOS/oeaBr1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8v576k5o+Q56S65raI5oGvLee+pOi1hOaWmeWPmOabtOexu+Wei1xyXG4gICAgICAgIHZhciBHUk9VUF9USVBfTU9ESUZZX0dST1VQX0lORk9fVFlQRSA9IHtcclxuICAgICAgICAgICAgXCJGQUNFX1VSTFwiOiAxLCAvL+S/ruaUuee+pOWktOWDj1VSTFxyXG4gICAgICAgICAgICBcIk5BTUVcIjogMiwgLy/kv67mlLnnvqTlkI3np7BcclxuICAgICAgICAgICAgXCJPV05FUlwiOiAzLCAvL+S/ruaUuee+pOS4u1xyXG4gICAgICAgICAgICBcIk5PVElGSUNBVElPTlwiOiA0LCAvL+S/ruaUuee+pOWFrOWRilxyXG4gICAgICAgICAgICBcIklOVFJPRFVDVElPTlwiOiA1IC8v5L+u5pS5576k566A5LuLXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy/nvqTns7vnu5/mtojmga/nsbvlnotcclxuICAgICAgICB2YXIgR1JPVVBfU1lTVEVNX1RZUEUgPSB7XHJcbiAgICAgICAgICAgIFwiSk9JTl9HUk9VUF9SRVFVRVNUXCI6IDEsIC8v55Sz6K+35Yqg576k6K+35rGC77yI5Y+q5pyJ566h55CG5ZGY5Lya5pS25Yiw77yJXHJcbiAgICAgICAgICAgIFwiSk9JTl9HUk9VUF9BQ0NFUFRcIjogMiwgLy/nlLPor7fliqDnvqTooqvlkIzmhI/vvIjlj6rmnInnlLPor7fkurrog73lpJ/mlLbliLDvvIlcclxuICAgICAgICAgICAgXCJKT0lOX0dST1VQX1JFRlVTRVwiOiAzLCAvL+eUs+ivt+WKoOe+pOiiq+aLkue7ne+8iOWPquacieeUs+ivt+S6uuiDveWkn+aUtuWIsO+8iVxyXG4gICAgICAgICAgICBcIktJQ0tcIjogNCwgLy/ooqvnrqHnkIblkZjouKLlh7rnvqQo5Y+q5pyJ6KKr6Lii6ICF5o6l5pS25YiwKVxyXG4gICAgICAgICAgICBcIkRFU1RPUllcIjogNSwgLy/nvqTooqvop6PmlaMo5YWo5ZGY5o6l5pS2KVxyXG4gICAgICAgICAgICBcIkNSRUFURVwiOiA2LCAvL+WIm+W7uue+pCjliJvlu7rogIXmjqXmlLYsIOS4jeWxleekuilcclxuICAgICAgICAgICAgXCJJTlZJVEVEX0pPSU5fR1JPVVBfUkVRVUVTVFwiOiA3LCAvL+mCgOivt+WKoOe+pCjooqvpgoDor7fogIXmjqXmlLYpXHJcbiAgICAgICAgICAgIFwiUVVJVFwiOiA4LCAvL+S4u+WKqOmAgOe+pCjkuLvliqjpgIDlh7rogIXmjqXmlLYsIOS4jeWxleekuilcclxuICAgICAgICAgICAgXCJTRVRfQURNSU5cIjogOSwgLy/orr7nva7nrqHnkIblkZgo6KKr6K6+572u6ICF5o6l5pS2KVxyXG4gICAgICAgICAgICBcIkNBTkNFTF9BRE1JTlwiOiAxMCwgLy/lj5bmtojnrqHnkIblkZgo6KKr5Y+W5raI6ICF5o6l5pS2KVxyXG4gICAgICAgICAgICBcIlJFVk9LRVwiOiAxMSwgLy/nvqTlt7Looqvlm57mlLYo5YWo5ZGY5o6l5pS2LCDkuI3lsZXnpLopXHJcbiAgICAgICAgICAgIFwiUkVBREVEXCI6IDE1LCAvL+e+pOa2iOaBr+W3suivu+WQjOatpVxyXG4gICAgICAgICAgICBcIkNVU1RPTVwiOiAyNTUsIC8v55So5oi36Ieq5a6a5LmJ6YCa55+lKOm7mOiupOWFqOWRmOaOpeaUtilcclxuICAgICAgICAgICAgXCJJTlZJVEVEX0pPSU5fR1JPVVBfUkVRVUVTVF9BR1JFRVwiOiAxMiwgLy/pgoDor7fliqDnvqQo6KKr6YKA6K+36ICF6ZyA5ZCM5oSPKVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8v5aW95Y+L57O757uf6YCa55+l5a2Q57G75Z6LXHJcbiAgICAgICAgdmFyIEZSSUVORF9OT1RJQ0VfVFlQRSA9IHtcclxuICAgICAgICAgICAgXCJGUklFTkRfQUREXCI6IDEsIC8v5aW95Y+L6KGo5aKe5YqgXHJcbiAgICAgICAgICAgIFwiRlJJRU5EX0RFTEVURVwiOiAyLCAvL+WlveWPi+ihqOWIoOmZpFxyXG4gICAgICAgICAgICBcIlBFTkRFTkNZX0FERFwiOiAzLCAvL+acquWGs+WinuWKoFxyXG4gICAgICAgICAgICBcIlBFTkRFTkNZX0RFTEVURVwiOiA0LCAvL+acquWGs+WIoOmZpFxyXG4gICAgICAgICAgICBcIkJMQUNLX0xJU1RfQUREXCI6IDUsIC8v6buR5ZCN5Y2V5aKe5YqgXHJcbiAgICAgICAgICAgIFwiQkxBQ0tfTElTVF9ERUxFVEVcIjogNiwgLy/pu5HlkI3ljZXliKDpmaRcclxuICAgICAgICAgICAgXCJQRU5ERU5DWV9SRVBPUlRcIjogNywgLy/mnKrlhrPlt7Lor7vkuIrmiqVcclxuICAgICAgICAgICAgXCJGUklFTkRfVVBEQVRFXCI6IDggLy/lpb3lj4vmlbDmja7mm7TmlrBcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL+i1hOaWmeezu+e7n+mAmuefpeWtkOexu+Wei1xyXG4gICAgICAgIHZhciBQUk9GSUxFX05PVElDRV9UWVBFID0ge1xyXG4gICAgICAgICAgICBcIlBST0ZJTEVfTU9ESUZZXCI6IDEgLy/otYTmlpnkv67mlLlcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL+iFvuiur+eZu+W9leacjeWKoemUmeivr+egge+8iOeUqOS6juaJmOeuoeaooeW8j++8iVxyXG4gICAgICAgIHZhciBUTFNfRVJST1JfQ09ERSA9IHtcclxuICAgICAgICAgICAgJ09LJzogMCwgLy/miJDlip9cclxuICAgICAgICAgICAgJ1NJR05BVFVSRV9FWFBJUkFUSU9OJzogMTEgLy/nlKjmiLfouqvku73lh63or4Hov4fmnJ9cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL+mVv+i9ruivoui/nuaOpeeKtuaAgVxyXG4gICAgICAgIHZhciBDT05ORUNUSU9OX1NUQVRVUyA9IHtcclxuICAgICAgICAgICAgJ0lOSVQnOiAtMSwgLy/liJ3lp4vljJZcclxuICAgICAgICAgICAgJ09OJzogMCwgLy/ov57mjqXmraPluLhcclxuICAgICAgICAgICAgJ1JFQ09OTkVDVCc6IDEsIC8v6L+e5o6l5oGi5aSN5q2j5bi4XHJcbiAgICAgICAgICAgICdPRkYnOiA5OTk5IC8v6L+e5o6l5bey5pat5byALOWPr+iDveaYr+eUqOaIt+e9kee7nOmXrumimO+8jOaIluiAhemVv+i9ruivouaOpeWPo+aKpemUmeW8lei1t+eahFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBVUExPQURfUElDX0JVU1NJTkVTU19UWVBFID0geyAvL+WbvueJh+S4muWKoeexu+Wei1xyXG4gICAgICAgICAgICAnR1JPVVBfTVNHJzogMSwgLy/np4HogYrlm77niYdcclxuICAgICAgICAgICAgJ0MyQ19NU0cnOiAyLCAvL+e+pOiBiuWbvueJh1xyXG4gICAgICAgICAgICAnVVNFUl9IRUFEJzogMywgLy/nlKjmiLflpLTlg49cclxuICAgICAgICAgICAgJ0dST1VQX0hFQUQnOiA0IC8v576k5aS05YOPXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIEZSSUVORF9XUklURV9NU0dfQUNUSU9OID0geyAvL+WlveWPi+i+k+WFpea2iOaBr+eKtuaAgVxyXG4gICAgICAgICAgICAnSU5HJzogMTQsIC8v5q2j5Zyo6L6T5YWlXHJcbiAgICAgICAgICAgICdTVE9QJzogMTUgLy/lgZzmraLovpPlhaVcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL2FqYXjpu5jorqTotoXml7bml7bpl7TvvIzljZXkvY3vvJrmr6vnp5JcclxuICAgICAgICB2YXIgYWpheERlZmF1bHRUaW1lT3V0ID0gMTUwMDA7XHJcblxyXG4gICAgICAgIC8v5aSn576k6ZW/6L2u6K+i5o6l5Y+j6L+U5Zue5q2j5bi45pe277yM5bu25pe25LiA5a6a5pe26Ze05YaN5Y+R6LW35LiL5LiA5qyh6K+35rGCXHJcbiAgICAgICAgdmFyIE9LX0RFTEFZX1RJTUUgPSAxMDAwO1xyXG5cclxuICAgICAgICAvL+Wkp+e+pOmVv+i9ruivouaOpeWPo+WPkeeUn+mUmeivr+aXtu+8jOW7tuaXtuS4gOWumuaXtumXtOWGjeWPkei1t+S4i+S4gOasoeivt+axglxyXG4gICAgICAgIHZhciBFUlJPUl9ERUxBWV9USU1FID0gNTAwMDtcclxuXHJcbiAgICAgICAgLy/nvqTmj5DnpLrmtojmga/mnIDlpJrmmL7npLrkurrmlbBcclxuICAgICAgICB2YXIgR1JPVVBfVElQX01BWF9VU0VSX0NPVU5UID0gMTA7XHJcblxyXG4gICAgICAgIC8v6ZW/6L2u6K+i6L+e5o6l54q25oCBXHJcbiAgICAgICAgdmFyIGN1ckxvbmdQb2xsaW5nU3RhdHVzID0gQ09OTkVDVElPTl9TVEFUVVMuSU5JVDtcclxuXHJcbiAgICAgICAgLy/lvZPplb/ova7or6Lov57mjqXmlq3lvIDlkI7vvIzmmK/lkKblt7Lnu4/lm57osIPov4dcclxuICAgICAgICB2YXIgbG9uZ1BvbGxpbmdPZmZDYWxsYmFja0ZsYWcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy/lvZPliY3plb/ova7or6Lov5Tlm57plJnor6/mrKHmlbBcclxuICAgICAgICB2YXIgY3VyTG9uZ1BvbGxpbmdSZXRFcnJvckNvdW50ID0gMDtcclxuXHJcbiAgICAgICAgLy/plb/ova7or6Lpu5jorqTotoXml7bml7bpl7TvvIzljZXkvY3vvJrmr6vnp5JcclxuICAgICAgICB2YXIgbG9uZ1BvbGxpbmdEZWZhdWx0VGltZU91dCA9IDYwMDAwO1xyXG5cclxuICAgICAgICAvL+mVv+i9ruivoui/lOWbnumUmeivr+asoeaVsOi+vuWIsOS4gOWumuWAvOWQju+8jOWPkei1t+aWsOeahOmVv+i9ruivouivt+axgumXtOmalOaXtumXtO+8jOWNleS9je+8muavq+enklxyXG4gICAgICAgIHZhciBsb25nUG9sbGluZ0ludGVydmFsVGltZSA9IDUwMDA7XHJcblxyXG4gICAgICAgIC8v5rKh5pyJ5paw5raI5oGv5pe277yM6ZW/6L2u6K+i6L+U5ZueNjAwMDjplJnor6/noIHmmK/mraPluLjnmoRcclxuICAgICAgICB2YXIgbG9uZ1BvbGxpbmdUaW1lT3V0RXJyb3JDb2RlID0gNjAwMDg7XHJcblxyXG4gICAgICAgIC8v5aSa5a6e5L6L55m75b2V6KKra2lja+eahOmUmeivr+eggVxyXG4gICAgICAgIHZhciBsb25nUG9sbGluZ0tpY2tlZEVycm9yQ29kZSA9IDkxMTAxO1xyXG5cclxuICAgICAgICB2YXIgbG9uZ1BvbGxpbmdQYWNrYWdlVG9vTGFyZ2VFcnJvckNvZGUgPSAxMDAxODtcclxuICAgICAgICB2YXIgTG9uZ1BvbGxpbmdJZCA9IG51bGw7XHJcblxyXG4gICAgICAgIC8v5b2T5YmN5aSn576k6ZW/6L2u6K+i6L+U5Zue6ZSZ6K+v5qyh5pWwXHJcbiAgICAgICAgdmFyIGN1ckJpZ0dyb3VwTG9uZ1BvbGxpbmdSZXRFcnJvckNvdW50ID0gMDtcclxuXHJcbiAgICAgICAgLy/mnIDlpKflhYHorrjplb/ova7or6Lov5Tlm57plJnor6/mrKHmlbBcclxuICAgICAgICB2YXIgTE9OR19QT0xMSU5HX01BWF9SRVRfRVJST1JfQ09VTlQgPSAxMDtcclxuXHJcbiAgICAgICAgLy/kuIrkvKDph43or5XntK/orqFcclxuICAgICAgICB2YXIgVXBsb2FkX1JldHJ5X1RpbWVzID0gMDtcclxuICAgICAgICAvL+acgOWkp+S4iuS8oOmHjeivlVxyXG4gICAgICAgIHZhciBVcGxvYWRfUmV0cnlfTWF4X1RpbWVzID0gMjA7XHJcblxyXG5cclxuICAgICAgICB2YXIgdXBsb2FkUmVzdWx0SWZyYW1lSWQgPSAwOyAvL+eUqOS6juS4iuS8oOWbvueJh+eahGlmcmFtZSBpZFxyXG5cclxuICAgICAgICB2YXIgaXBMaXN0ID0gW107IC8v5paH5Lu25LiL6L295Zyw5Z2AXHJcbiAgICAgICAgdmFyIGF1dGhrZXkgPSBudWxsOyAvL+aWh+S7tuS4i+i9veelqOaNrlxyXG4gICAgICAgIHZhciBleHBpcmVUaW1lID0gbnVsbDsgLy/mlofku7bkuIvovb3npajmja7otoXml7bml7bpl7RcclxuXHJcbiAgICAgICAgLy/plJnor6/noIFcclxuICAgICAgICB2YXIgRVJST1IgPSB7fTtcclxuICAgICAgICAvL+W9k+WJjeeZu+W9leeUqOaIt1xyXG4gICAgICAgIHZhciBjdHggPSB7XHJcbiAgICAgICAgICAgIHNka0FwcElEOiBudWxsLFxyXG4gICAgICAgICAgICBhcHBJREF0M3JkOiBudWxsLFxyXG4gICAgICAgICAgICBhY2NvdW50VHlwZTogbnVsbCxcclxuICAgICAgICAgICAgaWRlbnRpZmllcjogbnVsbCxcclxuICAgICAgICAgICAgdGlueWlkOiBudWxsLFxyXG4gICAgICAgICAgICBpZGVudGlmaWVyTmljazogbnVsbCxcclxuICAgICAgICAgICAgdXNlclNpZzogbnVsbCxcclxuICAgICAgICAgICAgYTI6IG51bGwsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGFwbjogMVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIG9wdCA9IHt9O1xyXG4gICAgICAgIHZhciB4bWxIdHRwT2JqU2VxID0gMDsgLy9hamF46K+35rGCaWRcclxuICAgICAgICB2YXIgeG1sSHR0cE9iak1hcCA9IHt9OyAvL+WPkei1t+eahGFqYXjor7fmsYJcclxuICAgICAgICB2YXIgY3VyU2VxID0gMDsgLy/mtojmga9zZXFcclxuICAgICAgICB2YXIgdGVtcEMyQ01zZ0xpc3QgPSBbXTsgLy/mlrBjMmPmtojmga/kuLTml7bnvJPlrZhcclxuICAgICAgICB2YXIgdGVtcEMyQ0hpc3RvcnlNc2dMaXN0ID0gW107IC8v5ryr5ri4YzJj5raI5oGv5Li05pe257yT5a2YXHJcblxyXG4gICAgICAgIHZhciBtYXhBcGlSZXBvcnRJdGVtQ291bnQgPSAyMDsgLy/kuIDmrKHmnIDlpJrkuIrmiqXmnaHmlbBcclxuICAgICAgICB2YXIgYXBpUmVwb3J0SXRlbXMgPSBbXTsgLy/mmoLlrZhhcGnmjqXlj6PotKjph4/kuIrmiqXmlbDmja5cclxuXHJcbiAgICAgICAgdmFyIFJlc291cmNlcyA9IHtcclxuICAgICAgICAgICAgZG93bmxvYWRNYXA6IHt9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy/ooajmg4XmoIfor4blrZfnrKblkozntKLlvJXmmKDlsITlhbPns7vlr7nosaHvvIznlKjmiLflj6/ku6Xoh6rlrprkuYlcclxuICAgICAgICB2YXIgZW1vdGlvbkRhdGFJbmRleHMgPSB7XHJcbiAgICAgICAgICAgIFwiW+aDiuiutl1cIjogMCxcclxuICAgICAgICAgICAgXCJb5pKH5Zi0XVwiOiAxLFxyXG4gICAgICAgICAgICBcIlvoibJdXCI6IDIsXHJcbiAgICAgICAgICAgIFwiW+WPkeWRhl1cIjogMyxcclxuICAgICAgICAgICAgXCJb5b6X5oSPXVwiOiA0LFxyXG4gICAgICAgICAgICBcIlvmtYHms6pdXCI6IDUsXHJcbiAgICAgICAgICAgIFwiW+Wus+e+nl1cIjogNixcclxuICAgICAgICAgICAgXCJb6Zet5Zi0XVwiOiA3LFxyXG4gICAgICAgICAgICBcIlvnnaFdXCI6IDgsXHJcbiAgICAgICAgICAgIFwiW+Wkp+WTrV1cIjogOSxcclxuICAgICAgICAgICAgXCJb5bC05bCsXVwiOiAxMCxcclxuICAgICAgICAgICAgXCJb5Y+R5oCSXVwiOiAxMSxcclxuICAgICAgICAgICAgXCJb6LCD55quXVwiOiAxMixcclxuICAgICAgICAgICAgXCJb6b6H54mZXVwiOiAxMyxcclxuICAgICAgICAgICAgXCJb5b6u56yRXVwiOiAxNCxcclxuICAgICAgICAgICAgXCJb6Zq+6L+HXVwiOiAxNSxcclxuICAgICAgICAgICAgXCJb6YW3XVwiOiAxNixcclxuICAgICAgICAgICAgXCJb5Ya35rGXXVwiOiAxNyxcclxuICAgICAgICAgICAgXCJb5oqT54uCXVwiOiAxOCxcclxuICAgICAgICAgICAgXCJb5ZCQXVwiOiAxOSxcclxuICAgICAgICAgICAgXCJb5YG356yRXVwiOiAyMCxcclxuICAgICAgICAgICAgXCJb5Y+v54ixXVwiOiAyMSxcclxuICAgICAgICAgICAgXCJb55m955y8XVwiOiAyMixcclxuICAgICAgICAgICAgXCJb5YKy5oWiXVwiOiAyMyxcclxuICAgICAgICAgICAgXCJb6aW/XVwiOiAyNCxcclxuICAgICAgICAgICAgXCJb5ZuwXVwiOiAyNSxcclxuICAgICAgICAgICAgXCJb5oOK5oGQXVwiOiAyNixcclxuICAgICAgICAgICAgXCJb5rWB5rGXXVwiOiAyNyxcclxuICAgICAgICAgICAgXCJb5oao56yRXVwiOiAyOCxcclxuICAgICAgICAgICAgXCJb5aSn5YW1XVwiOiAyOSxcclxuICAgICAgICAgICAgXCJb5aWL5paXXVwiOiAzMCxcclxuICAgICAgICAgICAgXCJb5ZKS6aqCXVwiOiAzMSxcclxuICAgICAgICAgICAgXCJb55aR6ZeuXVwiOiAzMixcclxuICAgICAgICAgICAgXCJb5ZiYXVwiOiAzMyxcclxuICAgICAgICAgICAgXCJb5pmVXVwiOiAzNFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8v6KGo5oOF5a+56LGh77yM55So5oi35Y+v5Lul6Ieq5a6a5LmJXHJcbiAgICAgICAgdmFyIGVtb3Rpb25zID0ge307XHJcbiAgICAgICAgLy/lt6XlhbfnsbtcclxuICAgICAgICB2YXIgdG9vbCA9IG5ldyBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAvL+agvOW8j+WMluaXtumXtOaIs1xyXG4gICAgICAgICAgICAvL2Zvcm1hdOagvOW8j+WmguS4i++8mlxyXG4gICAgICAgICAgICAvL3l5eXktTU0tZGQgaGg6bW06c3Mg5bm05pyI5pel5pe25YiG56eSKOm7mOiupOagvOW8jylcclxuICAgICAgICAgICAgLy95eXl5LU1NLWRkIOW5tOaciOaXpVxyXG4gICAgICAgICAgICAvL2hoOm1tOnNzIOaXtuWIhuenklxyXG4gICAgICAgICAgICB0aGlzLmZvcm1hdFRpbWVTdGFtcCA9IGZ1bmN0aW9uICh0aW1lc3RhbXAsIGZvcm1hdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aW1lc3RhbXApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBmb3JtYXRUaW1lO1xyXG4gICAgICAgICAgICAgICAgZm9ybWF0ID0gZm9ybWF0IHx8ICd5eXl5LU1NLWRkIGhoOm1tOnNzJztcclxuICAgICAgICAgICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUodGltZXN0YW1wICogMTAwMCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBcIk0rXCI6IGRhdGUuZ2V0TW9udGgoKSArIDEsIC8v5pyI5Lu9XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkK1wiOiBkYXRlLmdldERhdGUoKSwgLy/ml6VcclxuICAgICAgICAgICAgICAgICAgICBcImgrXCI6IGRhdGUuZ2V0SG91cnMoKSwgLy/lsI/ml7ZcclxuICAgICAgICAgICAgICAgICAgICBcIm0rXCI6IGRhdGUuZ2V0TWludXRlcygpLCAvL+WIhlxyXG4gICAgICAgICAgICAgICAgICAgIFwicytcIjogZGF0ZS5nZXRTZWNvbmRzKCkgLy/np5JcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBpZiAoLyh5KykvLnRlc3QoZm9ybWF0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdFRpbWUgPSBmb3JtYXQucmVwbGFjZShSZWdFeHAuJDEsIChkYXRlLmdldEZ1bGxZZWFyKCkgKyBcIlwiKS5zdWJzdHIoNCAtIFJlZ0V4cC4kMS5sZW5ndGgpKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0VGltZSA9IGZvcm1hdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGsgaW4gbykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXcgUmVnRXhwKFwiKFwiICsgayArIFwiKVwiKS50ZXN0KGZvcm1hdFRpbWUpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXRUaW1lID0gZm9ybWF0VGltZS5yZXBsYWNlKFJlZ0V4cC4kMSwgKFJlZ0V4cC4kMS5sZW5ndGggPT0gMSkgPyAob1trXSkgOiAoKFwiMDBcIiArIG9ba10pLnN1YnN0cigoXCJcIiArIG9ba10pLmxlbmd0aCkpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBmb3JtYXRUaW1lO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLy/moLnmja7nvqTnsbvlnovoi7HmloflkI3ovazmjaLmiJDkuK3mloflkI1cclxuICAgICAgICAgICAgdGhpcy5ncm91cFR5cGVFbjJDaCA9IGZ1bmN0aW9uICh0eXBlX2VuKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdHlwZV9jaCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHR5cGVfZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdQdWJsaWMnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlX2NoID0gJ+WFrOW8gOe+pCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0NoYXRSb29tJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZV9jaCA9ICfogYrlpKnlrqQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdQcml2YXRlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZV9jaCA9ICfnp4HmnInnvqQnOyAvL+WNs+iuqOiuuue7hFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdBVkNoYXRSb29tJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZV9jaCA9ICfnm7Tmkq3ogYrlpKnlrqQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlX2NoID0gdHlwZV9lbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZV9jaDtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLy/moLnmja7nvqTnsbvlnovkuK3mloflkI3ovazmjaLmiJDoi7HmloflkI1cclxuICAgICAgICAgICAgdGhpcy5ncm91cFR5cGVDaDJFbiA9IGZ1bmN0aW9uICh0eXBlX2NoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdHlwZV9lbiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHR5cGVfY2gpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICflhazlvIDnvqQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlX2VuID0gJ1B1YmxpYyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ+iBiuWkqeWupCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVfZW4gPSAnQ2hhdFJvb20nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICfnp4HmnInnvqQnOiAvL+WNs+iuqOiuuue7hFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlX2VuID0gJ1ByaXZhdGUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICfnm7Tmkq3ogYrlpKnlrqQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlX2VuID0gJ0FWQ2hhdFJvb20nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlX2VuID0gdHlwZV9jaDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZV9lbjtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLy/moLnmja7nvqTouqvku73oi7HmloflkI3ovazmjaLmiJDnvqTouqvku73kuK3mloflkI1cclxuICAgICAgICAgICAgdGhpcy5ncm91cFJvbGVFbjJDaCA9IGZ1bmN0aW9uIChyb2xlX2VuKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcm9sZV9jaCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHJvbGVfZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdNZW1iZXInOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb2xlX2NoID0gJ+aIkOWRmCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0FkbWluJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm9sZV9jaCA9ICfnrqHnkIblkZgnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdPd25lcic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvbGVfY2ggPSAn576k5Li7JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm9sZV9jaCA9IHJvbGVfZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvbGVfY2g7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8v5qC55o2u576k6Lqr5Lu95Lit5paH5ZCN6L2s5o2i5oiQ576k6Lqr5Lu96Iux5paH5ZCNXHJcbiAgICAgICAgICAgIHRoaXMuZ3JvdXBSb2xlQ2gyRW4gPSBmdW5jdGlvbiAocm9sZV9jaCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJvbGVfZW4gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChyb2xlX2NoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAn5oiQ5ZGYJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm9sZV9lbiA9ICdNZW1iZXInO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICfnrqHnkIblkZgnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb2xlX2VuID0gJ0FkbWluJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAn576k5Li7JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm9sZV9lbiA9ICdPd25lcic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvbGVfZW4gPSByb2xlX2NoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiByb2xlX2VuO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvL+agueaNrue+pOa2iOaBr+aPkOekuuexu+Wei+iLseaWh+i9rOaNouS4reaWh1xyXG4gICAgICAgICAgICB0aGlzLmdyb3VwTXNnRmxhZ0VuMkNoID0gZnVuY3Rpb24gKG1zZ19mbGFnX2VuKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbXNnX2ZsYWdfY2ggPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChtc2dfZmxhZ19lbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0FjY2VwdEFuZE5vdGlmeSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1zZ19mbGFnX2NoID0gJ+aOpeaUtuW5tuaPkOekuic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0FjY2VwdE5vdE5vdGlmeSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1zZ19mbGFnX2NoID0gJ+aOpeaUtuS4jeaPkOekuic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0Rpc2NhcmQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtc2dfZmxhZ19jaCA9ICflsY/olL0nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtc2dfZmxhZ19jaCA9IG1zZ19mbGFnX2VuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBtc2dfZmxhZ19jaDtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLy/moLnmja7nvqTmtojmga/mj5DnpLrnsbvlnovkuK3mloflkI3ovazmjaLoi7HmloflkI1cclxuICAgICAgICAgICAgdGhpcy5ncm91cE1zZ0ZsYWdDaDJFbiA9IGZ1bmN0aW9uIChtc2dfZmxhZ19jaCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1zZ19mbGFnX2VuID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAobXNnX2ZsYWdfY2gpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICfmjqXmlLblubbmj5DnpLonOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtc2dfZmxhZ19lbiA9ICdBY2NlcHRBbmROb3RpZnknO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICfmjqXmlLbkuI3mj5DnpLonOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtc2dfZmxhZ19lbiA9ICdBY2NlcHROb3ROb3RpZnknO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICflsY/olL0nOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtc2dfZmxhZ19lbiA9ICdEaXNjYXJkJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXNnX2ZsYWdfZW4gPSBtc2dfZmxhZ19jaDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbXNnX2ZsYWdfZW47XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8v5bCG56m65qC85ZKM5o2i6KGM56ym6L2s5o2i5oiQSFRNTOagh+etvlxyXG4gICAgICAgICAgICB0aGlzLmZvcm1hdFRleHQySHRtbCA9IGZ1bmN0aW9uICh0ZXh0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaHRtbCA9IHRleHQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoaHRtbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGh0bWwgPSB0aGlzLnhzc0ZpbHRlcihodG1sKTsgLy/nlKjmiLfmmLXnp7DmiJbnvqTlkI3np7DnrYnlrZfmrrXkvJrlh7rnjrDohJrmnKzlrZfnrKbkuLJcclxuICAgICAgICAgICAgICAgICAgICBodG1sID0gaHRtbC5yZXBsYWNlKC8gL2csIFwiJm5ic3A7XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGh0bWwgPSBodG1sLnJlcGxhY2UoL1xcbi9nLCBcIjxici8+XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGh0bWw7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8v5bCGSFRNTOagh+etvui9rOaNouaIkOepuuagvOWSjOaNouihjOesplxyXG4gICAgICAgICAgICB0aGlzLmZvcm1hdEh0bWwyVGV4dCA9IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGV4dCA9IGh0bWw7XHJcbiAgICAgICAgICAgICAgICBpZiAodGV4dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoLyZuYnNwOy9nLCBcIiBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dCA9IHRleHQucmVwbGFjZSgvPGJyXFwvPi9nLCBcIlxcblwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB0ZXh0O1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvL+iOt+WPluWtl+espuS4sihVVEYtOOe8lueggSnmiYDljaDlrZfoioLmlbBcclxuICAgICAgICAgICAgLy/lj4LogIPvvJpodHRwOi8vemgud2lraXBlZGlhLm9yZy96aC1jbi9VVEYtOFxyXG4gICAgICAgICAgICB0aGlzLmdldFN0ckJ5dGVzID0gZnVuY3Rpb24gKHN0cikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0ciA9PSBudWxsIHx8IHN0ciA9PT0gdW5kZWZpbmVkKSByZXR1cm4gMDtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc3RyICE9IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciB0b3RhbCA9IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgY2hhckNvZGUsIGksIGxlbjtcclxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDAsIGxlbiA9IHN0ci5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoYXJDb2RlID0gc3RyLmNoYXJDb2RlQXQoaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoYXJDb2RlIDw9IDB4MDA3Zikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbCArPSAxOyAvL+Wtl+espuS7o+eggeWcqDAwMDAwMCDigJMgMDAwMDdG5LmL6Ze055qE77yM55So5LiA5Liq5a2X6IqC57yW56CBXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaGFyQ29kZSA8PSAweDA3ZmYpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWwgKz0gMjsgLy8wMDAwODAg4oCTIDAwMDdGRuS5i+mXtOeahOWtl+espueUqOS4pOS4quWtl+iKglxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hhckNvZGUgPD0gMHhmZmZmKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsICs9IDM7IC8vMDAwODAwIOKAkyAwMEQ3RkYg5ZKMIDAwRTAwMCDigJMgMDBGRkZG5LmL6Ze055qE55So5LiJ5Liq5a2X6IqC77yM5rOoOiBVbmljb2Rl5Zyo6IyD5Zu0IEQ4MDAtREZGRiDkuK3kuI3lrZjlnKjku7vkvZXlrZfnrKZcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbCArPSA0OyAvLzAxMDAwMCDigJMgMTBGRkZG5LmL6Ze055qE55SoNOS4quWtl+iKglxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB0b3RhbDtcclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAvL+mYsuatolhTU+aUu+WHu1xyXG4gICAgICAgICAgICB0aGlzLnhzc0ZpbHRlciA9IGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgICAgICAgICAgIHZhbCA9IHZhbC50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgdmFsID0gdmFsLnJlcGxhY2UoL1s8XS9nLCBcIiZsdDtcIik7XHJcbiAgICAgICAgICAgICAgICB2YWwgPSB2YWwucmVwbGFjZSgvWz5dL2csIFwiJmd0O1wiKTtcclxuICAgICAgICAgICAgICAgIHZhbCA9IHZhbC5yZXBsYWNlKC9cIi9nLCBcIiZxdW90O1wiKTtcclxuICAgICAgICAgICAgICAgIC8vdmFsID0gdmFsLnJlcGxhY2UoLycvZywgXCImIzAzOTtcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLy/ljrvmjonlpLTlsL7nqbrnmb3nrKZcclxuICAgICAgICAgICAgdGhpcy50cmltU3RyID0gZnVuY3Rpb24gKHN0cikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzdHIpIHJldHVybiAnJztcclxuICAgICAgICAgICAgICAgIHN0ciA9IHN0ci50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oXlxccyopfChcXHMqJCkvZywgXCJcIik7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8v5Yik5pat5piv5ZCm5Li6OOS9jeaVtOaVsFxyXG4gICAgICAgICAgICB0aGlzLnZhbGlkTnVtYmVyID0gZnVuY3Rpb24gKHN0cikge1xyXG4gICAgICAgICAgICAgICAgc3RyID0gc3RyLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RyLm1hdGNoKC8oXlxcZHsxLDh9JCkvZyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0UmV0dXJuRXJyb3IgPSBmdW5jdGlvbiAoZXJyb3JJbmZvLCBlcnJvckNvZGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICghZXJyb3JDb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JDb2RlID0gLTEwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBlcnJvciA9IHtcclxuICAgICAgICAgICAgICAgICAgICAnQWN0aW9uU3RhdHVzJzogQUNUSU9OX1NUQVRVUy5GQUlMLFxyXG4gICAgICAgICAgICAgICAgICAgICdFcnJvckNvZGUnOiBlcnJvckNvZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Vycm9ySW5mbyc6IGVycm9ySW5mbyArIFwiW1wiICsgZXJyb3JDb2RlICsgXCJdXCJcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMucmVwbGFjZU9iamVjdCA9IGZ1bmN0aW9uIChrZXlNYXAsIGpzb24pIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGEgaW4ganNvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXlNYXBbYV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAganNvbltrZXlNYXBbYV1dID0ganNvblthXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUganNvblthXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoanNvbltrZXlNYXBbYV1dIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsZW4gPSBqc29uW2tleU1hcFthXV0ubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganNvbltrZXlNYXBbYV1dW2ldID0gdGhpcy5yZXBsYWNlT2JqZWN0KGtleU1hcCwganNvbltrZXlNYXBbYV1dW2ldKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBqc29uW2tleU1hcFthXV0gPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqc29uW2tleU1hcFthXV0gPSB0aGlzLnJlcGxhY2VPYmplY3Qoa2V5TWFwLCBqc29uW2tleU1hcFthXV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ganNvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8v5pel5b+X5a+56LGhXHJcbiAgICAgICAgdmFyIGxvZyA9IG5ldyBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgb24gPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRPbiA9IGZ1bmN0aW9uIChvbkZsYWcpIHtcclxuICAgICAgICAgICAgICAgIG9uID0gb25GbGFnO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5nZXRPbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvbjtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBmdW5jdGlvbiAobG9nU3RyKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9uICYmIGNvbnNvbGUuZXJyb3IobG9nU3RyKTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMud2FybiA9IGZ1bmN0aW9uIChsb2dTdHIpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb24gJiYgY29uc29sZS53YXJuKGxvZ1N0cik7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLmluZm8gPSBmdW5jdGlvbiAobG9nU3RyKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9uICYmIGNvbnNvbGUuaW5mbyhsb2dTdHIpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5kZWJ1ZyA9IGZ1bmN0aW9uIChsb2dTdHIpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb24gJiYgY29uc29sZS5kZWJ1Zyhsb2dTdHIpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8v6I635Y+WdW5peOaXtumXtOaIs1xyXG4gICAgICAgIHZhciB1bml4dGltZSA9IGZ1bmN0aW9uIChkKSB7XHJcbiAgICAgICAgICAgIGlmICghZCkgZCA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKGQuZ2V0VGltZSgpIC8gMTAwMCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvL+aXtumXtOaIs+i9rOaXpeacn1xyXG4gICAgICAgIHZhciBmcm9tdW5peHRpbWUgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGUodCAqIDEwMDApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy/ojrflj5bkuIvkuIDkuKrmtojmga/luo/lj7dcclxuICAgICAgICB2YXIgbmV4dFNlcSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGN1clNlcSkge1xyXG4gICAgICAgICAgICAgICAgY3VyU2VxID0gY3VyU2VxICsgMTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGN1clNlcSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gY3VyU2VxO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy/kuqfnlJ/pmo/mnLrmlbBcclxuICAgICAgICB2YXIgY3JlYXRlUmFuZG9tID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogNDI5NDk2NzI5Nik7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy/lj5HotbdhamF46K+35rGCXHJcbiAgICAgICAgdmFyIGFqYXhSZXF1ZXN0ID0gZnVuY3Rpb24gKG1ldGgsIHVybCwgcmVxLCB0aW1lb3V0LCBpc0xvbmdQb2xsaW5nLCBjYk9rLCBjYkVycikge1xyXG5cclxuICAgICAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHJlcSxcclxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IG1ldGgsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1ckxvbmdQb2xsaW5nUmV0RXJyb3JDb3VudCA9IGN1ckJpZ0dyb3VwTG9uZ1BvbGxpbmdSZXRFcnJvckNvdW50ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2JPaykgY2JPayhyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJySW5mbyA9IFwi6K+35rGC5pyN5Yqh5Zmo5aSx6LSlLOivt+ajgOafpeS9oOeahOe9kee7nOaYr+WQpuato+W4uFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJyb3IgPSB0b29sLmdldFJldHVybkVycm9yKGVyckluZm8sIC0yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9pZiAoIWlzTG9uZ1BvbGxpbmcgJiYgY2JFcnIpIGNiRXJyKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNiRXJyKSBjYkVycihlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMTYpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v5Y+R6LW3YWpheOivt+axgu+8iGpzb27moLzlvI/mlbDmja7vvIlcclxuICAgICAgICB2YXIgYWpheFJlcXVlc3RKc29uID0gZnVuY3Rpb24gKG1ldGgsIHVybCwgcmVxLCB0aW1lb3V0LCBpc0xvbmdQb2xsaW5nLCBjYk9rLCBjYkVycikge1xyXG4gICAgICAgICAgICBhamF4UmVxdWVzdChtZXRoLCB1cmwsIEpTT04uc3RyaW5naWZ5KHJlcSksIHRpbWVvdXQsIGlzTG9uZ1BvbGxpbmcsIGZ1bmN0aW9uIChyZXNwKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIganNvbiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcCkganNvbiA9IHJlc3A7IC8v5bCG6L+U5Zue55qEanNvbuWtl+espuS4sui9rOaNouaIkGpzb27lr7nosaFcclxuICAgICAgICAgICAgICAgIGlmIChjYk9rKSBjYk9rKGpzb24pO1xyXG4gICAgICAgICAgICB9LCBjYkVycik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5Yik5pat55So5oi35piv5ZCm5bey55m75b2VXHJcbiAgICAgICAgdmFyIGlzTG9naW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjdHguc2RrQXBwSUQgJiYgY3R4LmlkZW50aWZpZXI7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvL+ajgOafpeaYr+WQpueZu+W9lVxyXG4gICAgICAgIHZhciBjaGVja0xvZ2luID0gZnVuY3Rpb24gKGNiRXJyLCBpc05lZWRDYWxsQmFjaykge1xyXG4gICAgICAgICAgICBpZiAoIWlzTG9naW4oKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzTmVlZENhbGxCYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVyckluZm8gPSBcIuivt+eZu+W9lVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBlcnJvciA9IHRvb2wuZ2V0UmV0dXJuRXJyb3IoZXJySW5mbywgLTQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2JFcnIpIGNiRXJyKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL+ajgOafpeaYr+WQpuiuv+mXruato+W8j+eOr+Wig1xyXG4gICAgICAgIHZhciBpc0FjY2Vzc0Zvcm1hbEVudiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlzQWNjZXNzRm9ybWFFbnZpcm9ubWVudDtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL+agueaNruS4jeWQjOeahOacjeWKoeWQjeWSjOWRveS7pO+8jOiOt+WPluWvueW6lOeahOaOpeWPo+WcsOWdgFxyXG4gICAgICAgIHZhciBnZXRBcGlVcmwgPSBmdW5jdGlvbiAoc3J2TmFtZSwgY21kLCBjYk9rLCBjYkVycikge1xyXG4gICAgICAgICAgICB2YXIgc3J2SG9zdCA9IFNSVl9IT1NUO1xyXG4gICAgICAgICAgICBpZiAoaXNBY2Nlc3NGb3JtYWxFbnYoKSkge1xyXG4gICAgICAgICAgICAgICAgc3J2SG9zdCA9IFNSVl9IT1NULkZPUk1BTC5DT01NT047XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzcnZIb3N0ID0gU1JWX0hPU1QuVEVTVC5DT01NT047XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vaWYgKHNydk5hbWUgPT0gU1JWX05BTUUuUkVDRU5UX0NPTlRBQ1QpIHtcclxuICAgICAgICAgICAgLy8gICAgc3J2SG9zdCA9IFNSVl9IT1NULlRFU1QuQ09NTU9OO1xyXG4gICAgICAgICAgICAvL31cclxuXHJcbiAgICAgICAgICAgIGlmIChzcnZOYW1lID09IFNSVl9OQU1FLlBJQykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzQWNjZXNzRm9ybWFsRW52KCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzcnZIb3N0ID0gU1JWX0hPU1QuRk9STUFMLlBJQztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3J2SG9zdCA9IFNSVl9IT1NULlRFU1QuUElDO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgdXJsID0gc3J2SG9zdCArICcvJyArIFNSVl9OQU1FX1ZFUltzcnZOYW1lXSArICcvJyArIHNydk5hbWUgKyAnLycgKyBjbWQgKyAnP3dlYnNka2FwcGlkPScgKyBTREsuQVBQSUQgKyBcIiZ2PVwiICsgU0RLLlZFUlNJT04gKyBcIiZwbGF0Zm9ybT1cIiArIFNESy5QTEFBVEZPUk07O1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzTG9naW4oKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNtZCA9PSAnbG9naW4nIHx8IGNtZCA9PSAnYWNjZXNzbGF5ZXInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsICs9ICcmaWRlbnRpZmllcj0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGN0eC5pZGVudGlmaWVyKSArICcmdXNlcnNpZz0nICsgY3R4LnVzZXJTaWc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdHgudGlueWlkICYmIGN0eC5hMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmwgKz0gJyZ0aW55aWQ9JyArIGN0eC50aW55aWQgKyAnJmEyPScgKyBjdHguYTI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNiRXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2cuZXJyb3IoXCJ0aW55aWTmiJZhMuS4uuepultcIiArIHNydk5hbWUgKyBcIl1bXCIgKyBjbWQgKyBcIl1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYkVycih0b29sLmdldFJldHVybkVycm9yKFwidGlueWlk5oiWYTLkuLrnqbpbXCIgKyBzcnZOYW1lICsgXCJdW1wiICsgY21kICsgXCJdXCIsIC01KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZjb250ZW50dHlwZT0nICsgY3R4LmNvbnRlbnRUeXBlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHVybCArPSAnJnNka2FwcGlkPScgKyBjdHguc2RrQXBwSUQgKyAnJmFjY291bnR0eXBlPScgKyBjdHguYWNjb3VudFR5cGUgKyAnJmFwbj0nICsgY3R4LmFwbiArICcmcmVxdGltZT0nICsgdW5peHRpbWUoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHVybDtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL+iOt+WPluivremfs+S4i+i9vXVybFxyXG4gICAgICAgIHZhciBnZXRTb3VuZERvd25VcmwgPSBmdW5jdGlvbiAodXVpZCwgc2VuZGVySWQpIHtcclxuICAgICAgICAgICAgdmFyIHNvdW5kVXJsID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKGF1dGhrZXkgJiYgaXBMaXN0WzBdKSB7XHJcbiAgICAgICAgICAgICAgICBzb3VuZFVybCA9IFwiaHR0cDovL1wiICsgaXBMaXN0WzBdICsgXCIvYXNuLmNvbS9zdGRkb3dubG9hZF9jb21tb25fZmlsZT9hdXRoa2V5PVwiICsgYXV0aGtleSArIFwiJmJpZD1cIiArIERPV05MT0FEX0ZJTEUuQlVTU0lORVNTX0lEICsgXCImc3ViYmlkPVwiICsgY3R4LnNka0FwcElEICsgXCImZmlsZWlkPVwiICsgdXVpZCArIFwiJmZpbGV0eXBlPVwiICsgRE9XTkxPQURfRklMRV9UWVBFLlNPVU5EICsgXCImb3BlbmlkPVwiICsgc2VuZGVySWQgKyBcIiZ2ZXI9MFwiO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbG9nLmVycm9yKFwi5ou85o6l6K+t6Z+z5LiL6L29dXJs5LiN5oql6ZSZ77yaaXDmiJbogIVhdXRoa2V55Li656m6XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzb3VuZFVybDtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL+iOt+WPluaWh+S7tuS4i+i9veWcsOWdgFxyXG4gICAgICAgIHZhciBnZXRGaWxlRG93blVybCA9IGZ1bmN0aW9uICh1dWlkLCBzZW5kZXJJZCwgZmlsZU5hbWUpIHtcclxuICAgICAgICAgICAgdmFyIGZpbGVVcmwgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAoYXV0aGtleSAmJiBpcExpc3RbMF0pIHtcclxuICAgICAgICAgICAgICAgIGZpbGVVcmwgPSBcImh0dHA6Ly9cIiArIGlwTGlzdFswXSArIFwiL2Fzbi5jb20vc3RkZG93bmxvYWRfY29tbW9uX2ZpbGU/YXV0aGtleT1cIiArIGF1dGhrZXkgKyBcIiZiaWQ9XCIgKyBET1dOTE9BRF9GSUxFLkJVU1NJTkVTU19JRCArIFwiJnN1YmJpZD1cIiArIGN0eC5zZGtBcHBJRCArIFwiJmZpbGVpZD1cIiArIHV1aWQgKyBcIiZmaWxldHlwZT1cIiArIERPV05MT0FEX0ZJTEVfVFlQRS5GSUxFICsgXCImb3BlbmlkPVwiICsgc2VuZGVySWQgKyBcIiZ2ZXI9MCZmaWxlbmFtZT1cIiArIGVuY29kZVVSSUNvbXBvbmVudChmaWxlTmFtZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsb2cuZXJyb3IoXCLmi7zmjqXmlofku7bkuIvovb11cmzkuI3miqXplJnvvJppcOaIluiAhWF1dGhrZXnkuLrnqbpcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgUmVzb3VyY2VzLmRvd25sb2FkTWFwW1widXVpZF9cIiArIHV1aWRdID0gZmlsZVVybDtcclxuICAgICAgICAgICAgcmV0dXJuIGZpbGVVcmw7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy/ojrflj5bmlofku7bkuIvovb3lnLDlnYBcclxuICAgICAgICB2YXIgZ2V0RmlsZURvd25VcmxWMiA9IGZ1bmN0aW9uICh1dWlkLCBzZW5kZXJJZCwgZmlsZU5hbWUsIGRvd25GbGFnLCByZWNlaXZlcklkLCBidXNpSWQsIHR5cGUpIHtcclxuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICBcIkZyb21fQWNjb3VudFwiOiBzZW5kZXJJZCwgLy9cImlkZW50aWZlcl8wXCIsICAgICAgIC8vIOexu+WeizogU3RyaW5nLCDlj5HpgIHogIV0aW55aWRcclxuICAgICAgICAgICAgICAgIFwiVG9fQWNjb3VudFwiOiByZWNlaXZlcklkLCAvL1wiaWRlbnRpZmVyXzFcIiwgICAgICAgICAvLyDnsbvlnos6IFN0cmluZywg5o6l5pS26ICFdGlueWlkXHJcbiAgICAgICAgICAgICAgICBcIm9zX3BsYXRmb3JtXCI6IDEwLCAvLyDnsbvlnos6IE51bWJlciwg57uI56uv55qE57G75Z6LIDEoYW5kcm9pZCkgMihpb3MpIDMod2luZG93cykgMTAob3RoZXJzLi4uKVxyXG4gICAgICAgICAgICAgICAgXCJUaW1lc3RhbXBcIjogdW5peHRpbWUoKS50b1N0cmluZygpLCAvLyDnsbvlnos6IE51bWJlciwg5pe26Ze05oizXHJcbiAgICAgICAgICAgICAgICBcIlJhbmRvbVwiOiBjcmVhdGVSYW5kb20oKS50b1N0cmluZygpLCAvLyDnsbvlnos6IE51bWJlciwg6ZqP5py65YC8XHJcbiAgICAgICAgICAgICAgICBcInJlcXVlc3RfaW5mb1wiOiBbIC8vIOexu+WeizogQXJyYXlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYnVzaV9pZFwiOiBidXNpSWQsIC8vIOexu+WeizogTnVtYmVyLCDnvqQoMSkgQzJDKDIpIOWFtuS7luivt+iBlOezu3Nka+W8gOWPkeiAheWIhumFjVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRvd25sb2FkX2ZsYWdcIjogZG93bkZsYWcsIC8vIOexu+WeizogTnVtYmVyLCDnlLPor7fkuIvovb3lnLDlnYDmoIfor4YgIDAo55Sz6K+35p625bmz5LiL6L295Zyw5Z2AKSAgMSjnlLPor7dDT1PlubPlj7DkuIvovb3lnLDlnYApICAyKOS4jemcgOimgeeUs+ivtywg55u05o6l5ou/dXJs5LiL6L29KOi/memHjOW6lOivpeS4jeS8muS4ujIpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogdHlwZSwgLy8g57G75Z6LOiBOdW1iZXIsIDAo55+t6KeG6aKR57yp55Wl5Zu+KSwgMSjmlofku7YpLCAyKOefreinhumikSksIDMocHR0KSwg5YW25LuW5b6F5YiG6YWNXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidXVpZFwiOiB1dWlkLCAvLyDnsbvlnos6IE51bWJlciwg5ZSv5LiA5qCH6K+G5LiA5Liq5paH5Lu255qEdXVpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogVkVSU0lPTl9JTkZPLlNFUlZFUl9WRVJTSU9OLCAvLyDnsbvlnos6IE51bWJlciwg5p625bmzc2VydmVy54mI5pysXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXV0aF9rZXlcIjogYXV0aGtleSwgLy8g57G75Z6LOiBTdHJpbmcsIOiupOivgeetvuWQjVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImlwXCI6IGlwTGlzdFswXSAvLyDnsbvlnos6IE51bWJlciwg5p625bmzSVBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8v6I635Y+W5LiL6L295Zyw5Z2AXHJcbiAgICAgICAgICAgIHByb3RvX2FwcGx5RG93bmxvYWQob3B0aW9ucywgZnVuY3Rpb24gKHJlc3ApIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwLmVycm9yX2NvZGUgPT0gMCAmJiByZXNwLnJlc3BvbnNlX2luZm8pIHtcclxuICAgICAgICAgICAgICAgICAgICBSZXNvdXJjZXMuZG93bmxvYWRNYXBbXCJ1dWlkX1wiICsgb3B0aW9ucy51dWlkXSA9IHJlc3AucmVzcG9uc2VfaW5mby51cmw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAob25BcHBsaWVkRG93bmxvYWRVcmwpIHtcclxuICAgICAgICAgICAgICAgICAgICBvbkFwcGxpZWREb3dubG9hZFVybCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHV1aWQ6IG9wdGlvbnMudXVpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiByZXNwLnJlc3BvbnNlX2luZm8udXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXBzOiBSZXNvdXJjZXMuZG93bmxvYWRNYXBcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHJlc3ApIHtcclxuICAgICAgICAgICAgICAgIGxvZy5lcnJvcihcIuiOt+WPluS4i+i9veWcsOWdgOWksei0pVwiLCBvcHRpb25zLnV1aWQpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAvL+mHjee9rmFqYXjor7fmsYJcclxuICAgICAgICB2YXIgY2xlYXJYbWxIdHRwT2JqTWFwID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvL+mBjeWOhnhtbEh0dHBPYmpNYXB7fVxyXG4gICAgICAgICAgICBmb3IgKHZhciBzZXEgaW4geG1sSHR0cE9iak1hcCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHhtbEh0dHBPYmogPSB4bWxIdHRwT2JqTWFwW3NlcV07XHJcbiAgICAgICAgICAgICAgICBpZiAoeG1sSHR0cE9iaikge1xyXG4gICAgICAgICAgICAgICAgICAgIHhtbEh0dHBPYmouYWJvcnQoKTsgLy/kuK3mlq1hamF46K+35rGCKOmVv+i9ruivoilcclxuICAgICAgICAgICAgICAgICAgICB4bWxIdHRwT2JqTWFwW3htbEh0dHBPYmpTZXFdID0gbnVsbDsgLy/muIXnqbpcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB4bWxIdHRwT2JqU2VxID0gMDtcclxuICAgICAgICAgICAgeG1sSHR0cE9iak1hcCA9IHt9O1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8v6YeN572uc2Rr5YWo5bGA5Y+Y6YePXHJcbiAgICAgICAgdmFyIGNsZWFyU2RrID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgY2xlYXJYbWxIdHRwT2JqTWFwKCk7XHJcblxyXG4gICAgICAgICAgICAvL+W9k+WJjeeZu+W9leeUqOaIt1xyXG4gICAgICAgICAgICBjdHggPSB7XHJcbiAgICAgICAgICAgICAgICBzZGtBcHBJRDogbnVsbCxcclxuICAgICAgICAgICAgICAgIGFwcElEQXQzcmQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBhY2NvdW50VHlwZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIGlkZW50aWZpZXI6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBpZGVudGlmaWVyTmljazogbnVsbCxcclxuICAgICAgICAgICAgICAgIHVzZXJTaWc6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICAgICAgYXBuOiAxXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIG9wdCA9IHt9O1xyXG5cclxuICAgICAgICAgICAgY3VyU2VxID0gMDtcclxuXHJcblxyXG4gICAgICAgICAgICBhcGlSZXBvcnRJdGVtcyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgTXNnTWFuYWdlci5jbGVhcigpO1xyXG4gICAgICAgICAgICBNc2dTdG9yZS5jbGVhcigpO1xyXG5cclxuICAgICAgICAgICAgLy/ph43nva5sb25ncG9sbGluZ0lkXHJcbiAgICAgICAgICAgIExvbmdQb2xsaW5nSWQgPSBudWxsO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8v55m75b2VXHJcbiAgICAgICAgdmFyIF9sb2dpbiA9IGZ1bmN0aW9uIChsb2dpbkluZm8sIGxpc3RlbmVycywgb3B0aW9ucywgY2JPaywgY2JFcnIpIHtcclxuXHJcbiAgICAgICAgICAgIGNsZWFyU2RrKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAob3B0aW9ucykgb3B0ID0gb3B0aW9ucztcclxuICAgICAgICAgICAgaWYgKG9wdC5pc0FjY2Vzc0Zvcm1hbEVudiA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgbG9nLmVycm9yKFwi6K+35YiH5o2i5Li65q2j5byP546v5aKD77yB77yB77yB77yBXCIpO1xyXG4gICAgICAgICAgICAgICAgaXNBY2Nlc3NGb3JtYUVudmlyb25tZW50ID0gb3B0LmlzQWNjZXNzRm9ybWFsRW52O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChvcHQuaXNMb2dPbiA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgbG9nLnNldE9uKG9wdC5pc0xvZ09uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgaWYob3B0LmVtb3Rpb25zKXtcclxuICAgICAgICAgICAgIGVtb3Rpb25zPW9wdC5lbW90aW9ucztcclxuICAgICAgICAgICAgIHdlYmltLkVtb3Rpb25zPSBlbW90aW9ucztcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIGlmKG9wdC5lbW90aW9uRGF0YUluZGV4cyl7XHJcbiAgICAgICAgICAgICBlbW90aW9uRGF0YUluZGV4cz1vcHQuZW1vdGlvbkRhdGFJbmRleHM7XHJcbiAgICAgICAgICAgICB3ZWJpbS5FbW90aW9uRGF0YUluZGV4cz0gZW1vdGlvbkRhdGFJbmRleHM7XHJcbiAgICAgICAgICAgICB9Ki9cclxuXHJcbiAgICAgICAgICAgIGlmICghbG9naW5JbmZvKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2JFcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYkVycih0b29sLmdldFJldHVybkVycm9yKFwibG9naW5JbmZvIGlzIGVtcHR5XCIsIC02KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghbG9naW5JbmZvLnNka0FwcElEKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2JFcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYkVycih0b29sLmdldFJldHVybkVycm9yKFwibG9naW5JbmZvLnNka0FwcElEIGlzIGVtcHR5XCIsIC03KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghbG9naW5JbmZvLmFjY291bnRUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2JFcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYkVycih0b29sLmdldFJldHVybkVycm9yKFwibG9naW5JbmZvLmFjY291bnRUeXBlIGlzIGVtcHR5XCIsIC04KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAobG9naW5JbmZvLmlkZW50aWZpZXIpIHtcclxuICAgICAgICAgICAgICAgIGN0eC5pZGVudGlmaWVyID0gbG9naW5JbmZvLmlkZW50aWZpZXIudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobG9naW5JbmZvLmlkZW50aWZpZXIgJiYgIWxvZ2luSW5mby51c2VyU2lnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2JFcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYkVycih0b29sLmdldFJldHVybkVycm9yKFwibG9naW5JbmZvLnVzZXJTaWcgaXMgZW1wdHlcIiwgLTkpKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGxvZ2luSW5mby51c2VyU2lnKSB7XHJcbiAgICAgICAgICAgICAgICBjdHgudXNlclNpZyA9IGxvZ2luSW5mby51c2VyU2lnLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3R4LnNka0FwcElEID0gbG9naW5JbmZvLnNka0FwcElEO1xyXG4gICAgICAgICAgICBjdHguYWNjb3VudFR5cGUgPSBsb2dpbkluZm8uYWNjb3VudFR5cGU7XHJcblxyXG4gICAgICAgICAgICBpZiAoY3R4LmlkZW50aWZpZXIgJiYgY3R4LnVzZXJTaWcpIHsgLy/luKbnmbvlvZXmgIFcclxuICAgICAgICAgICAgICAgIHByb3RvX2FjY2Vzc2xheWVyKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+eZu+W9lVxyXG4gICAgICAgICAgICAgICAgICAgIHByb3RvX2xvZ2luKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoaWRlbnRpZmllck5pY2ssIGhlYWR1cmwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1zZ01hbmFnZXIuaW5pdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKG1tSW5pdFJlc3ApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNiT2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1tSW5pdFJlc3AuaWRlbnRpZmllck5pY2sgPSBpZGVudGlmaWVyTmljaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1tSW5pdFJlc3AuaGVhZHVybCA9IGhlYWR1cmw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYk9rKG1tSW5pdFJlc3ApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgY2JFcnJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNiRXJyXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSB7IC8v5LiN5bim55m75b2V5oCB77yM6L+b5YWl55u05pKt5Zy65pmvc2RrXHJcbiAgICAgICAgICAgICAgICBNc2dNYW5hZ2VyLmluaXQoXHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzLFxyXG4gICAgICAgICAgICAgICAgICAgIGNiT2ssXHJcbiAgICAgICAgICAgICAgICAgICAgY2JFcnJcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL+WIneWni+WMlua1j+iniOWZqOS/oeaBr1xyXG4gICAgICAgIHZhciBpbml0QnJvd3NlckluZm8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8v5Yid5aeL5YyW5rWP6KeI5Zmo57G75Z6LXHJcbiAgICAgICAgICAgIEJST1dTRVJfSU5GTyA9IFwid2VjaGF0XCJcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL+aOpeWPo+i0qOmHj+S4iuaKpVxyXG4gICAgICAgIHZhciByZXBvcnRBcGlRdWFsaXR5ID0gZnVuY3Rpb24gKGNtZCwgZXJyb3JDb2RlLCBlcnJvckluZm8pIHtcclxuICAgICAgICAgICAgaWYgKGNtZCA9PSAnbG9uZ3BvbGxpbmcnICYmIChlcnJvckNvZGUgPT0gbG9uZ1BvbGxpbmdUaW1lT3V0RXJyb3JDb2RlIHx8IGVycm9yQ29kZSA9PSBsb25nUG9sbGluZ0tpY2tlZEVycm9yQ29kZSkpIHsgLy9sb25ncG9sbGluZyDov5Tlm542MDAwOOmUmeivr+WPr+S7peinhuS4uuato+W4uCzlj6/ku6XkuI3kuIrmiqVcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgZXZlbnRJZCA9IENNRF9FVkVOVF9JRF9NQVBbY21kXTtcclxuICAgICAgICAgICAgaWYgKGV2ZW50SWQpIHtcclxuICAgICAgICAgICAgICAgIHZhciByZXBvcnRUaW1lID0gdW5peHRpbWUoKTtcclxuICAgICAgICAgICAgICAgIHZhciB1bmlxS2V5ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHZhciBtc2dDbWRFcnJvckNvZGUgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvZGUnOiBlcnJvckNvZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Vyck1zZyc6IGVycm9ySW5mb1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGlmIChjdHguYTIpIHtcclxuICAgICAgICAgICAgICAgICAgICB1bmlxS2V5ID0gY3R4LmEyLnN1YnN0cmluZygwLCAxMCkgKyBcIl9cIiArIHJlcG9ydFRpbWUgKyBcIl9cIiArIGNyZWF0ZVJhbmRvbSgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdHgudXNlclNpZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHVuaXFLZXkgPSBjdHgudXNlclNpZy5zdWJzdHJpbmcoMCwgMTApICsgXCJfXCIgKyByZXBvcnRUaW1lICsgXCJfXCIgKyBjcmVhdGVSYW5kb20oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodW5pcUtleSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgcnB0RXZ0SXRlbSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJVbmlxS2V5XCI6IHVuaXFLZXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiRXZlbnRJZFwiOiBldmVudElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlJlcG9ydFRpbWVcIjogcmVwb3J0VGltZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJNc2dDbWRFcnJvckNvZGVcIjogbXNnQ21kRXJyb3JDb2RlXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNtZCA9PSAnbG9naW4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsb2dpbkFwaVJlcG9ydEl0ZW1zID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luQXBpUmVwb3J0SXRlbXMucHVzaChycHRFdnRJdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxvZ2luUmVwb3J0T3B0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJFdnRJdGVtc1wiOiBsb2dpbkFwaVJlcG9ydEl0ZW1zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJNYWluVmVyc2lvblwiOiBTREsuVkVSU0lPTixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVmVyc2lvblwiOiBcIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm90b19yZXBvcnRBcGlRdWFsaXR5KGxvZ2luUmVwb3J0T3B0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKHJlc3ApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dpbkFwaVJlcG9ydEl0ZW1zID0gbnVsbDsgLy9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9naW5BcGlSZXBvcnRJdGVtcyA9IG51bGw7IC8vXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBpUmVwb3J0SXRlbXMucHVzaChycHRFdnRJdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFwaVJlcG9ydEl0ZW1zLmxlbmd0aCA+PSBtYXhBcGlSZXBvcnRJdGVtQ291bnQpIHsgLy/ntK/orqHkuIDlrprmnaHmlbDlho3kuIrmiqVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXBvcnRPcHQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJFdnRJdGVtc1wiOiBhcGlSZXBvcnRJdGVtcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk1haW5WZXJzaW9uXCI6IFNESy5WRVJTSU9OLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVmVyc2lvblwiOiBcIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3RvX3JlcG9ydEFwaVF1YWxpdHkocmVwb3J0T3B0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChyZXNwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwaVJlcG9ydEl0ZW1zID0gW107IC8v5riF56m6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwaVJlcG9ydEl0ZW1zID0gW107IC8v5riF56m6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgcHJvdG9fYWNjZXNzbGF5ZXIgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgQ29ubk1hbmFnZXIuYXBpQ2FsbChTUlZfTkFNRS5XRUJfSU0sIFwiYWNjZXNzbGF5ZXJcIiwge30sIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5FcnJvckNvZGUgPT09IDAgJiYgZGF0YS5XZWJJbUFjY2Vzc0xheWVyID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgU1JWX0hPU1QuRk9STUFMLkNPTU1PTiA9ICdodHRwczovL2V2ZW50cy50aW0ucXEuY29tJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gUkVTVCBBUEkgY2FsbHNcclxuICAgICAgICAvL+S4iue6v1xyXG4gICAgICAgIHZhciBwcm90b19sb2dpbiA9IGZ1bmN0aW9uIChjYk9rLCBjYkVycikge1xyXG4gICAgICAgICAgICBDb25uTWFuYWdlci5hcGlDYWxsKFNSVl9OQU1FLk9QRU5fSU0sIFwibG9naW5cIiwge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiU3RhdGVcIjogXCJPbmxpbmVcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChsb2dpblJlc3ApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobG9naW5SZXNwLlRpbnlJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdHgudGlueWlkID0gbG9naW5SZXNwLlRpbnlJZDtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2JFcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNiRXJyKHRvb2wuZ2V0UmV0dXJuRXJyb3IoXCJUaW55SWQgaXMgZW1wdHlcIiwgLTEwKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxvZ2luUmVzcC5BMktleSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdHguYTIgPSBsb2dpblJlc3AuQTJLZXk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNiRXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYkVycih0b29sLmdldFJldHVybkVycm9yKFwiQTJLZXkgaXMgZW1wdHlcIiwgLTExKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhZ19saXN0ID0gW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlRhZ19Qcm9maWxlX0lNX05pY2tcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJUYWdfUHJvZmlsZV9JTV9JbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0Zyb21fQWNjb3VudCc6IGN0eC5pZGVudGlmaWVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnVG9fQWNjb3VudCc6IFtjdHguaWRlbnRpZmllcl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdMYXN0U3RhbmRhcmRTZXF1ZW5jZSc6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdUYWdMaXN0JzogdGFnX2xpc3RcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3RvX2dldFByb2ZpbGVQb3J0cmFpdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKHJlc3ApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuaWNrLCBpbWFnZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwLlVzZXJQcm9maWxlSXRlbSAmJiByZXNwLlVzZXJQcm9maWxlSXRlbS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSBpbiByZXNwLlVzZXJQcm9maWxlSXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqIGluIHJlc3AuVXNlclByb2ZpbGVJdGVtW2ldLlByb2ZpbGVJdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHJlc3AuVXNlclByb2ZpbGVJdGVtW2ldLlByb2ZpbGVJdGVtW2pdLlRhZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ1RhZ19Qcm9maWxlX0lNX05pY2snOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuaWNrID0gcmVzcC5Vc2VyUHJvZmlsZUl0ZW1baV0uUHJvZmlsZUl0ZW1bal0uVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuaWNrKSBjdHguaWRlbnRpZmllck5pY2sgPSBuaWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdUYWdfUHJvZmlsZV9JTV9JbWFnZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlID0gcmVzcC5Vc2VyUHJvZmlsZUl0ZW1baV0uUHJvZmlsZUl0ZW1bal0uVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWFnZSkgY3R4LmhlYWR1cmwgPSBpbWFnZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2JPaykgY2JPayhjdHguaWRlbnRpZmllck5pY2ssIGN0eC5oZWFkdXJsKTsgLy/lm57kvKDlvZPliY3nlKjmiLfmmLXnp7BcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgY2JFcnIpO1xyXG4gICAgICAgICAgICAgICAgfSwgY2JFcnIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy/kuIvnur9cclxuICAgICAgICB2YXIgcHJvdG9fbG9nb3V0ID0gZnVuY3Rpb24gKHR5cGUsIGNiT2ssIGNiRXJyKSB7XHJcbiAgICAgICAgICAgIGlmICghY2hlY2tMb2dpbihjYkVyciwgZmFsc2UpKSB7IC8v5LiN5bim55m75b2V5oCBXHJcbiAgICAgICAgICAgICAgICBjbGVhclNkaygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNiT2spIGNiT2soe1xyXG4gICAgICAgICAgICAgICAgICAgICdBY3Rpb25TdGF0dXMnOiBBQ1RJT05fU1RBVFVTLk9LLFxyXG4gICAgICAgICAgICAgICAgICAgICdFcnJvckNvZGUnOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICdFcnJvckluZm8nOiAnbG9nb3V0IHN1Y2Nlc3MnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodHlwZSA9PSBcImFsbFwiKSB7XHJcbiAgICAgICAgICAgICAgICBDb25uTWFuYWdlci5hcGlDYWxsKFNSVl9OQU1FLk9QRU5fSU0sIFwibG9nb3V0XCIsIHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChyZXNwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyU2RrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYk9rKSBjYk9rKHJlc3ApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY2JFcnIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgQ29ubk1hbmFnZXIuYXBpQ2FsbChTUlZfTkFNRS5PUEVOX0lNLCBcImxvbmdwb2xsaW5nbG9nb3V0XCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9uZ1BvbGxpbmdJZDogTG9uZ1BvbGxpbmdJZFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKHJlc3ApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJTZGsoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNiT2spIGNiT2socmVzcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBjYkVycik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIC8v5Y+R6YCB5raI5oGv77yM5YyF5ous56eB6IGK5ZKM576k6IGKXHJcbiAgICAgICAgdmFyIHByb3RvX3NlbmRNc2cgPSBmdW5jdGlvbiAobXNnLCBjYk9rLCBjYkVycikge1xyXG4gICAgICAgICAgICBpZiAoIWNoZWNrTG9naW4oY2JFcnIsIHRydWUpKSByZXR1cm47XHJcbiAgICAgICAgICAgIHZhciBtc2dJbmZvID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAobXNnLnNlc3MudHlwZSgpKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFNFU1NJT05fVFlQRS5DMkM6XHJcbiAgICAgICAgICAgICAgICAgICAgbXNnSW5mbyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0Zyb21fQWNjb3VudCc6IGN0eC5pZGVudGlmaWVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnVG9fQWNjb3VudCc6IG1zZy5zZXNzLmlkKCkudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ01zZ1RpbWVTdGFtcCc6IG1zZy50aW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnTXNnU2VxJzogbXNnLnNlcSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ01zZ1JhbmRvbSc6IG1zZy5yYW5kb20sXHJcbiAgICAgICAgICAgICAgICAgICAgXHQnTXNnQm9keSc6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgIFx0J09mZmxpbmVQdXNoSW5mbyc6IG1zZy5vZmZsaW5lUHVzaEluZm9cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBTRVNTSU9OX1RZUEUuR1JPVVA6XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN1YlR5cGUgPSBtc2cuZ2V0U3ViVHlwZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1zZ0luZm8gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdHcm91cElkJzogbXNnLnNlc3MuaWQoKS50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnRnJvbV9BY2NvdW50JzogY3R4LmlkZW50aWZpZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdSYW5kb20nOiBtc2cucmFuZG9tLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnTXNnQm9keSc6IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHN1YlR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBHUk9VUF9NU0dfU1VCX1RZUEUuQ09NTU9OOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnSW5mby5Nc2dQcmlvcml0eSA9IFwiQ09NTU9OXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBHUk9VUF9NU0dfU1VCX1RZUEUuUkVEUEFDS0VUOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnSW5mby5Nc2dQcmlvcml0eSA9IFwiUkVEUEFDS0VUXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBHUk9VUF9NU0dfU1VCX1RZUEUuTE9WRU1TRzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0luZm8uTXNnUHJpb3JpdHkgPSBcIkxPVkVNU0dcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEdST1VQX01TR19TVUJfVFlQRS5USVA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2cuZXJyb3IoXCLkuI3og73kuLvliqjlj5HpgIHnvqTmj5DnpLrmtojmga8sc3ViVHlwZT1cIiArIHN1YlR5cGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2cuZXJyb3IoXCLlj5HpgIHnvqTmtojmga/ml7bvvIzlh7rnjrDmnKrnn6XlrZDmtojmga/nsbvlnovvvJpzdWJUeXBlPVwiICsgc3ViVHlwZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBpIGluIG1zZy5lbGVtcykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGVsZW0gPSBtc2cuZWxlbXNbaV07XHJcbiAgICAgICAgICAgICAgICB2YXIgbXNnQ29udGVudCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB2YXIgbXNnVHlwZSA9IGVsZW0udHlwZTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAobXNnVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgTVNHX0VMRU1FTlRfVFlQRS5URVhUOiAvL+aWh+acrFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtc2dDb250ZW50ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1RleHQnOiBlbGVtLmNvbnRlbnQudGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIE1TR19FTEVNRU5UX1RZUEUuRkFDRTogLy/ooajmg4VcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXNnQ29udGVudCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdJbmRleCc6IGVsZW0uY29udGVudC5pbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdEYXRhJzogZWxlbS5jb250ZW50LmRhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBNU0dfRUxFTUVOVF9UWVBFLklNQUdFOiAvL+WbvueJh1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgSW1hZ2VJbmZvQXJyYXkgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiBpbiBlbGVtLmNvbnRlbnQuSW1hZ2VJbmZvQXJyYXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEltYWdlSW5mb0FycmF5LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdUeXBlJzogZWxlbS5jb250ZW50LkltYWdlSW5mb0FycmF5W2pdLnR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1NpemUnOiBlbGVtLmNvbnRlbnQuSW1hZ2VJbmZvQXJyYXlbal0uc2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnV2lkdGgnOiBlbGVtLmNvbnRlbnQuSW1hZ2VJbmZvQXJyYXlbal0ud2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0hlaWdodCc6IGVsZW0uY29udGVudC5JbWFnZUluZm9BcnJheVtqXS5oZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1VSTCc6IGVsZW0uY29udGVudC5JbWFnZUluZm9BcnJheVtqXS51cmxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0NvbnRlbnQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnSW1hZ2VGb3JtYXQnOiBlbGVtLmNvbnRlbnQuSW1hZ2VGb3JtYXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnVVVJRCc6IGVsZW0uY29udGVudC5VVUlELFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0ltYWdlSW5mb0FycmF5JzogSW1hZ2VJbmZvQXJyYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBNU0dfRUxFTUVOVF9UWVBFLlNPVU5EOiAvL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2cud2Fybignd2Vi56uv5pqC5LiN5pSv5oyB5Y+R6YCB6K+t6Z+z5raI5oGvJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIE1TR19FTEVNRU5UX1RZUEUuTE9DQVRJT046IC8vXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZy53YXJuKCd3ZWLnq6/mmoLkuI3mlK/mjIHlj5HpgIHlnLDnkIbkvY3nva7mtojmga8nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgTVNHX0VMRU1FTlRfVFlQRS5GSUxFOiAvL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtc2dDb250ZW50ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1VVSUQnOiBlbGVtLmNvbnRlbnQudXVpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdGaWxlTmFtZSc6IGVsZW0uY29udGVudC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0ZpbGVTaXplJzogZWxlbS5jb250ZW50LnNpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnRG93bmxvYWRGbGFnJzogZWxlbS5jb250ZW50LmRvd25GbGFnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgTVNHX0VMRU1FTlRfVFlQRS5DVVNUT006IC8vXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0NvbnRlbnQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnRGF0YSc6IGVsZW0uY29udGVudC5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0Rlc2MnOiBlbGVtLmNvbnRlbnQuZGVzYyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdFeHQnOiBlbGVtLmNvbnRlbnQuZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1zZ1R5cGUgPSBNU0dfRUxFTUVOVF9UWVBFLkNVU1RPTTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nLndhcm4oJ3dlYuerr+aaguS4jeaUr+aMgeWPkemAgScgKyBlbGVtLnR5cGUgKyAn5raI5oGvJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobXNnLlB1c2hJbmZvQm9vbGVhbikge1xyXG4gICAgICAgICAgICAgICAgICAgIG1zZ0luZm8uT2ZmbGluZVB1c2hJbmZvID0gbXNnLlB1c2hJbmZvOyAvL+W9k2FuZHJvaWTnu4jnq6/ov5vnqIvooqvmnYDmjonml7bmiY3otbBwdXNo77yMSU9T6YCA5Yiw5ZCO5Y+w5Y2z5Y+vXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbXNnSW5mby5Nc2dCb2R5LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICdNc2dUeXBlJzogbXNnVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAnTXNnQ29udGVudCc6IG1zZ0NvbnRlbnRcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChtc2cuc2Vzcy50eXBlKCkgPT0gU0VTU0lPTl9UWVBFLkMyQykgeyAvL+engeiBilxyXG4gICAgICAgICAgICAgICAgQ29ubk1hbmFnZXIuYXBpQ2FsbChTUlZfTkFNRS5PUEVOX0lNLCBcInNlbmRtc2dcIiwgbXNnSW5mbywgY2JPaywgY2JFcnIpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1zZy5zZXNzLnR5cGUoKSA9PSBTRVNTSU9OX1RZUEUuR1JPVVApIHsgLy/nvqTogYpcclxuICAgICAgICAgICAgICAgIENvbm5NYW5hZ2VyLmFwaUNhbGwoU1JWX05BTUUuR1JPVVAsIFwic2VuZF9ncm91cF9tc2dcIiwgbXNnSW5mbywgY2JPaywgY2JFcnIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvL+mVv+i9ruivouaOpeWPo1xyXG4gICAgICAgIHZhciBwcm90b19sb25nUG9sbGluZyA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYk9rLCBjYkVycikge1xyXG4gICAgICAgICAgICBpZiAoIWlzQWNjZXNzRm9ybWFFbnZpcm9ubWVudCAmJiB0eXBlb2Ygc3RvcFBvbGxpbmcgIT0gXCJ1bmRlZmluZWRcIiAmJiBzdG9wUG9sbGluZyA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFjaGVja0xvZ2luKGNiRXJyLCB0cnVlKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICBDb25uTWFuYWdlci5hcGlDYWxsKFNSVl9OQU1FLk9QRU5fSU0sIFwibG9uZ3BvbGxpbmdcIiwgb3B0aW9ucywgY2JPaywgY2JFcnIsIGxvbmdQb2xsaW5nRGVmYXVsdFRpbWVPdXQsIHRydWUpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8v6ZW/6L2u6K+i5o6l5Y+jKOaLieWPluebtOaSreiBiuWkqeWupOaWsOa2iOaBrylcclxuICAgICAgICB2YXIgcHJvdG9fYmlnR3JvdXBMb25nUG9sbGluZyA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYk9rLCBjYkVyciwgdGltZW91dCkge1xyXG4gICAgICAgICAgICBDb25uTWFuYWdlci5hcGlDYWxsKFNSVl9OQU1FLkJJR19HUk9VUF9MT05HX1BPTExJTkcsIFwiZ2V0X21zZ1wiLCBvcHRpb25zLCBjYk9rLCBjYkVyciwgdGltZW91dCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy/mi4nlj5bmnKror7tjMmPmtojmga/mjqXlj6NcclxuICAgICAgICB2YXIgcHJvdG9fZ2V0TXNncyA9IGZ1bmN0aW9uIChjb29raWUsIHN5bmNGbGFnLCBjYk9rLCBjYkVycikge1xyXG4gICAgICAgICAgICBpZiAoIWNoZWNrTG9naW4oY2JFcnIsIHRydWUpKSByZXR1cm47XHJcbiAgICAgICAgICAgIENvbm5NYW5hZ2VyLmFwaUNhbGwoU1JWX05BTUUuT1BFTl9JTSwgXCJnZXRtc2dcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICdDb29raWUnOiBjb29raWUsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1N5bmNGbGFnJzogc3luY0ZsYWdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAocmVzcCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcC5Nc2dMaXN0ICYmIHJlc3AuTXNnTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSBpbiByZXNwLk1zZ0xpc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBDMkNNc2dMaXN0LnB1c2gocmVzcC5Nc2dMaXN0W2ldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcC5TeW5jRmxhZyA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3RvX2dldE1zZ3MocmVzcC5Db29raWUsIHJlc3AuU3luY0ZsYWcsIGNiT2ssIGNiRXJyKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwLk1zZ0xpc3QgPSB0ZW1wQzJDTXNnTGlzdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcEMyQ01zZ0xpc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNiT2spIGNiT2socmVzcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNiRXJyKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vQzJD5raI5oGv5bey6K+75LiK5oql5o6l5Y+jXHJcbiAgICAgICAgdmFyIHByb3RvX2MyQ01zZ1JlYWRlZCA9IGZ1bmN0aW9uIChjb29raWUsIGMyQ01zZ1JlYWRlZEl0ZW0sIGNiT2ssIGNiRXJyKSB7XHJcbiAgICAgICAgICAgIGlmICghY2hlY2tMb2dpbihjYkVyciwgdHJ1ZSkpIHJldHVybjtcclxuICAgICAgICAgICAgdmFyIHRtcEMyQ01zZ1JlYWRlZEl0ZW0gPSBbXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBjMkNNc2dSZWFkZWRJdGVtKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAnVG9fQWNjb3VudCc6IGMyQ01zZ1JlYWRlZEl0ZW1baV0udG9BY2NvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICdMYXN0ZWRNc2dUaW1lJzogYzJDTXNnUmVhZGVkSXRlbVtpXS5sYXN0ZWRNc2dUaW1lXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgdG1wQzJDTXNnUmVhZGVkSXRlbS5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIENvbm5NYW5hZ2VyLmFwaUNhbGwoU1JWX05BTUUuT1BFTl9JTSwgXCJtc2dyZWFkZWRcIiwge1xyXG4gICAgICAgICAgICAgICAgQzJDTXNnUmVhZGVkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0Nvb2tpZSc6IGNvb2tpZSxcclxuICAgICAgICAgICAgICAgICAgICAnQzJDTXNnUmVhZGVkSXRlbSc6IHRtcEMyQ01zZ1JlYWRlZEl0ZW1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgY2JPaywgY2JFcnIpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8v5Yig6ZmkYzJj5raI5oGvXHJcbiAgICAgICAgdmFyIHByb3RvX2RlbGV0ZUMyQ01zZyA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYk9rLCBjYkVycikge1xyXG4gICAgICAgICAgICBpZiAoIWNoZWNrTG9naW4oY2JFcnIsIHRydWUpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBDb25uTWFuYWdlci5hcGlDYWxsKFNSVl9OQU1FLk9QRU5fSU0sIFwiZGVsZXRlbXNnXCIsIG9wdGlvbnMsXHJcbiAgICAgICAgICAgICAgICBjYk9rLCBjYkVycik7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy/mi4nlj5ZjMmPljoblj7Lmtojmga/mjqXlj6NcclxuICAgICAgICB2YXIgcHJvdG9fZ2V0QzJDSGlzdG9yeU1zZ3MgPSBmdW5jdGlvbiAob3B0aW9ucywgY2JPaywgY2JFcnIpIHtcclxuICAgICAgICAgICAgaWYgKCFjaGVja0xvZ2luKGNiRXJyLCB0cnVlKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICBDb25uTWFuYWdlci5hcGlDYWxsKFNSVl9OQU1FLk9QRU5fSU0sIFwiZ2V0cm9hbW1zZ1wiLCBvcHRpb25zLFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKHJlc3ApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVxTXNnQ291bnQgPSBvcHRpb25zLk1heENudDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29tcGxldGUgPSByZXNwLkNvbXBsZXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByc3BNc2dDb3VudCA9IHJlc3AuTWF4Q250O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtc2dLZXkgPSByZXNwLk1zZ0tleTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbGFzdE1zZ1RpbWUgPSByZXNwLkxhc3RNc2dUaW1lO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcC5Nc2dMaXN0ICYmIHJlc3AuTXNnTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSBpbiByZXNwLk1zZ0xpc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBDMkNIaXN0b3J5TXNnTGlzdC5wdXNoKHJlc3AuTXNnTGlzdFtpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ldHhPcHRpb25zID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGxldGUgPT0gMCkgeyAvL+i/mOacieWOhuWPsua2iOaBr+WPr+aLieWPllxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocnNwTXNnQ291bnQgPCByZXFNc2dDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV0eE9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1BlZXJfQWNjb3VudCc6IG9wdGlvbnMuUGVlcl9BY2NvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdNYXhDbnQnOiByZXFNc2dDb3VudCAtIHJzcE1zZ0NvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdMYXN0TXNnVGltZSc6IGxhc3RNc2dUaW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdNc2dLZXknOiBtc2dLZXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXR4T3B0aW9ucykgeyAvL+e7p+e7reaLieWPllxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm90b19nZXRDMkNIaXN0b3J5TXNncyhuZXR4T3B0aW9ucywgY2JPaywgY2JFcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3AuTXNnTGlzdCA9IHRlbXBDMkNIaXN0b3J5TXNnTGlzdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcEMyQ0hpc3RvcnlNc2dMaXN0ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYk9rKSBjYk9rKHJlc3ApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjYkVycik7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy/nvqTnu4TmjqXlj6NcclxuICAgICAgICAvL+WIm+W7uue+pOe7hFxyXG4gICAgICAgIC8v5Y2P6K6u5Y+C6ICD77yaaHR0cHM6Ly93d3cucWNsb3VkLmNvbS9kb2MvcHJvZHVjdC8yNjkvMTYxNVxyXG4gICAgICAgIHZhciBwcm90b19jcmVhdGVHcm91cCA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYk9rLCBjYkVycikge1xyXG4gICAgICAgICAgICBpZiAoIWNoZWNrTG9naW4oY2JFcnIsIHRydWUpKSByZXR1cm47XHJcbiAgICAgICAgICAgIHZhciBvcHQgPSB7XHJcbiAgICAgICAgICAgICAgICAvL+W/heWhqyAgICDnvqTnu4TlvaLmgIHvvIzljIXmi6xQdWJsaWPvvIjlhazlvIDnvqTvvInvvIxQcml2YXRl77yI56eB5pyJ576k77yJ77yMQ2hhdFJvb23vvIjogYrlpKnlrqTvvInvvIxBVkNoYXRSb29t77yI5LqS5Yqo55u05pKt6IGK5aSp5a6k77yJ44CCXHJcbiAgICAgICAgICAgICAgICAnVHlwZSc6IG9wdGlvbnMuVHlwZSxcclxuICAgICAgICAgICAgICAgIC8v5b+F5aGrICAgIOe+pOWQjeensO+8jOacgOmVvzMw5a2X6IqC44CCXHJcbiAgICAgICAgICAgICAgICAnTmFtZSc6IG9wdGlvbnMuTmFtZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB2YXIgbWVtYmVyX2xpc3QgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIC8vQXJyYXkg6YCJ5aGrICDliJ3lp4vnvqTmiJDlkZjliJfooajvvIzmnIDlpJo1MDDkuKrjgILmiJDlkZjkv6Hmga/lrZfmrrXor6bmg4Xlj4Lop4HvvJrnvqTmiJDlkZjotYTmlpnjgIJcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvcHRpb25zLk1lbWJlckxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIG1lbWJlcl9saXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICdNZW1iZXJfQWNjb3VudCc6IG9wdGlvbnMuTWVtYmVyTGlzdFtpXVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcHQuTWVtYmVyTGlzdCA9IG1lbWJlcl9saXN0O1xyXG4gICAgICAgICAgICAvL+mAieWhqyAgICDkuLrkuobkvb/lvpfnvqTnu4RJROabtOWKoOeugOWNle+8jOS+v+S6juiusOW/huS8oOaSre+8jOiFvuiur+S6keaUr+aMgUFQUOWcqOmAmui/h1JFU1QgQVBJ5Yib5bu6576k57uE5pe26Ieq5a6a5LmJ576k57uESUTjgILor6bmg4Xlj4Lop4HvvJroh6rlrprkuYnnvqTnu4RJROOAglxyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5Hcm91cElkKSB7XHJcbiAgICAgICAgICAgICAgICBvcHQuR3JvdXBJZCA9IG9wdGlvbnMuR3JvdXBJZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+mAieWhqyAgICDnvqTkuLtpZO+8jOiHquWKqOa3u+WKoOWIsOe+pOaIkOWRmOS4reOAguWmguaenOS4jeWhq++8jOe+pOayoeaciee+pOS4u+OAglxyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5Pd25lcl9BY2NvdW50KSB7XHJcbiAgICAgICAgICAgICAgICBvcHQuT3duZXJfQWNjb3VudCA9IG9wdGlvbnMuT3duZXJfQWNjb3VudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+mAieWhqyAgICDnvqTnroDku4vvvIzmnIDplb8yNDDlrZfoioLjgIJcclxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuSW50cm9kdWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBvcHQuSW50cm9kdWN0aW9uID0gb3B0aW9ucy5JbnRyb2R1Y3Rpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/pgInloasgICAg576k5YWs5ZGK77yM5pyA6ZW/MzAw5a2X6IqC44CCXHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLk5vdGlmaWNhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgb3B0Lk5vdGlmaWNhdGlvbiA9IG9wdGlvbnMuTm90aWZpY2F0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v6YCJ5aGrICAgIOacgOWkp+e+pOaIkOWRmOaVsOmHj++8jOacgOWkp+S4ujEwMDAw77yM5LiN5aGr6buY6K6k5Li6MjAwMOS4quOAglxyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5NYXhNZW1iZXJDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgb3B0Lk1heE1lbWJlckNvdW50ID0gb3B0aW9ucy5NYXhNZW1iZXJDb3VudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+mAieWhqyAgICDnlLPor7fliqDnvqTlpITnkIbmlrnlvI/jgILljIXlkKtGcmVlQWNjZXNz77yI6Ieq55Sx5Yqg5YWl77yJ77yMTmVlZFBlcm1pc3Npb27vvIjpnIDopoHpqozor4HvvInvvIxEaXNhYmxlQXBwbHnvvIjnpoHmraLliqDnvqTvvInvvIzkuI3loavpu5jorqTkuLpOZWVkUGVybWlzc2lvbu+8iOmcgOimgemqjOivge+8ieOAglxyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5BcHBseUpvaW5PcHRpb24pIHsgLy9cclxuICAgICAgICAgICAgICAgIG9wdC5BcHBseUpvaW5PcHRpb24gPSBvcHRpb25zLkFwcGx5Sm9pbk9wdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL0FycmF5IOmAieWhqyAg576k57uE57u05bqm55qE6Ieq5a6a5LmJ5a2X5q6177yM6buY6K6k5oOF5Ya15piv5rKh5pyJ55qE77yM6ZyA6KaB5byA6YCa77yM6K+m5oOF5Y+C6KeB77ya6Ieq5a6a5LmJ5a2X5q6144CCXHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLkFwcERlZmluZWREYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBvcHQuQXBwRGVmaW5lZERhdGEgPSBvcHRpb25zLkFwcERlZmluZWREYXRhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v6YCJ5aGrICAgIOe+pOWktOWDj1VSTO+8jOacgOmVvzEwMOWtl+iKguOAglxyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5GYWNlVXJsKSB7XHJcbiAgICAgICAgICAgICAgICBvcHQuRmFjZVVybCA9IG9wdGlvbnMuRmFjZVVybDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBDb25uTWFuYWdlci5hcGlDYWxsKFNSVl9OQU1FLkdST1VQLCBcImNyZWF0ZV9ncm91cFwiLCBvcHQsXHJcbiAgICAgICAgICAgICAgICBjYk9rLCBjYkVycik7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy/liJvlu7rnvqTnu4Qt6auY57qn5o6l5Y+jXHJcbiAgICAgICAgLy/ljY/orq7lj4LogIPvvJpodHRwczovL3d3dy5xY2xvdWQuY29tL2RvYy9wcm9kdWN0LzI2OS8xNjE1XHJcbiAgICAgICAgdmFyIHByb3RvX2NyZWF0ZUdyb3VwSGlnaCA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYk9rLCBjYkVycikge1xyXG4gICAgICAgICAgICBpZiAoIWNoZWNrTG9naW4oY2JFcnIsIHRydWUpKSByZXR1cm47XHJcbiAgICAgICAgICAgIENvbm5NYW5hZ2VyLmFwaUNhbGwoU1JWX05BTUUuR1JPVVAsIFwiY3JlYXRlX2dyb3VwXCIsIG9wdGlvbnMsXHJcbiAgICAgICAgICAgICAgICBjYk9rLCBjYkVycik7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy/kv67mlLnnvqTnu4Tln7rmnKzotYTmlplcclxuICAgICAgICAvL+WNj+iuruWPguiAg++8mmh0dHBzOi8vd3d3LnFjbG91ZC5jb20vZG9jL3Byb2R1Y3QvMjY5LzE2MjBcclxuICAgICAgICB2YXIgcHJvdG9fbW9kaWZ5R3JvdXBCYXNlSW5mbyA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYk9rLCBjYkVycikge1xyXG4gICAgICAgICAgICBpZiAoIWNoZWNrTG9naW4oY2JFcnIsIHRydWUpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBDb25uTWFuYWdlci5hcGlDYWxsKFNSVl9OQU1FLkdST1VQLCBcIm1vZGlmeV9ncm91cF9iYXNlX2luZm9cIiwgb3B0aW9ucyxcclxuICAgICAgICAgICAgICAgIGNiT2ssIGNiRXJyKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL+eUs+ivt+WKoOe+pFxyXG4gICAgICAgIHZhciBwcm90b19hcHBseUpvaW5Hcm91cCA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYk9rLCBjYkVycikge1xyXG4gICAgICAgICAgICBpZiAoIWNoZWNrTG9naW4oY2JFcnIsIHRydWUpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBvcHRpb25zLkdyb3VwSWQgPSBTdHJpbmcob3B0aW9ucy5Hcm91cElkKVxyXG4gICAgICAgICAgICBDb25uTWFuYWdlci5hcGlDYWxsKFNSVl9OQU1FLkdST1VQLCBcImFwcGx5X2pvaW5fZ3JvdXBcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICdHcm91cElkJzogb3B0aW9ucy5Hcm91cElkLFxyXG4gICAgICAgICAgICAgICAgICAgICdBcHBseU1zZyc6IG9wdGlvbnMuQXBwbHlNc2csXHJcbiAgICAgICAgICAgICAgICAgICAgJ1VzZXJEZWZpbmVkRmllbGQnOiBvcHRpb25zLlVzZXJEZWZpbmVkRmllbGRcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjYk9rLCBjYkVycik7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy/nlLPor7fliqDlhaXlpKfnvqRcclxuICAgICAgICB2YXIgQmlnR3JvdXBJZDtcclxuICAgICAgICB2YXIgcHJvdG9fYXBwbHlKb2luQmlnR3JvdXAgPSBmdW5jdGlvbiAob3B0aW9ucywgY2JPaywgY2JFcnIpIHtcclxuICAgICAgICAgICAgb3B0aW9ucy5Hcm91cElkID0gU3RyaW5nKG9wdGlvbnMuR3JvdXBJZClcclxuICAgICAgICAgICAgQmlnR3JvdXBJZCA9IG9wdGlvbnMuR3JvdXBJZDtcclxuICAgICAgICAgICAgdmFyIHNydk5hbWU7XHJcbiAgICAgICAgICAgIGlmICghY2hlY2tMb2dpbihjYkVyciwgZmFsc2UpKSB7IC8v5pyq55m75b2VXHJcbiAgICAgICAgICAgICAgICBzcnZOYW1lID0gU1JWX05BTUUuQklHX0dST1VQO1xyXG4gICAgICAgICAgICB9IGVsc2UgeyAvL+W3sueZu+W9lVxyXG4gICAgICAgICAgICAgICAgc3J2TmFtZSA9IFNSVl9OQU1FLkdST1VQO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIENvbm5NYW5hZ2VyLmFwaUNhbGwoc3J2TmFtZSwgXCJhcHBseV9qb2luX2dyb3VwXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAnR3JvdXBJZCc6IG9wdGlvbnMuR3JvdXBJZCxcclxuICAgICAgICAgICAgICAgICAgICAnQXBwbHlNc2cnOiBvcHRpb25zLkFwcGx5TXNnLFxyXG4gICAgICAgICAgICAgICAgICAgICdVc2VyRGVmaW5lZEZpZWxkJzogb3B0aW9ucy5Vc2VyRGVmaW5lZEZpZWxkXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKHJlc3ApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcC5Kb2luZWRTdGF0dXMgJiYgcmVzcC5Kb2luZWRTdGF0dXMgPT0gJ0pvaW5lZFN1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwLkxvbmdQb2xsaW5nS2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNc2dNYW5hZ2VyLnNldEJpZ0dyb3VwTG9uZ1BvbGxpbmdPbih0cnVlKTsgLy/lvIDlkK/plb/ova7or6JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1zZ01hbmFnZXIuc2V0QmlnR3JvdXBMb25nUG9sbGluZ0tleShyZXNwLkxvbmdQb2xsaW5nS2V5KTsgLy/mm7TmlrDlpKfnvqTplb/ova7or6JrZXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1zZ01hbmFnZXIuc2V0QmlnR3JvdXBMb25nUG9sbGluZ01zZ01hcChvcHRpb25zLkdyb3VwSWQsIDApOyAvL+aUtuWIsOeahOe+pOa2iOaBr+e9rjBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1zZ01hbmFnZXIuYmlnR3JvdXBMb25nUG9sbGluZygpOyAvL+W8gOWQr+mVv+i9ruivolxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgeyAvL+ayoeaciei/lOWbnkxvbmdQb2xsaW5nS2V577yM6K+05piO55Sz6K+35Yqg55qE576k5LiN5piv55u05pKt6IGK5aSp5a6kKEFWQ2hhdFJvb20pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYkVyciAmJiBjYkVycih0b29sLmdldFJldHVybkVycm9yKFwiSm9pbiBHcm91cCBzdWNjZWVkOyBCdXQgdGhlIHR5cGUgb2YgZ3JvdXAgaXMgbm90IEFWQ2hhdFJvb206IGdyb3VwaWQ9XCIgKyBvcHRpb25zLkdyb3VwSWQsIC0xMikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYk9rKSBjYk9rKHJlc3ApO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNiRXJyKSBjYkVycihlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy/lpITnkIbliqDnvqTnlLPor7co5ZCM5oSP5oiW5ouS57udKVxyXG4gICAgICAgIHZhciBwcm90b19oYW5kbGVBcHBseUpvaW5Hcm91cFBlbmRlbmN5ID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNiT2ssIGNiRXJyKSB7XHJcbiAgICAgICAgICAgIGlmICghY2hlY2tMb2dpbihjYkVyciwgdHJ1ZSkpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIENvbm5NYW5hZ2VyLmFwaUNhbGwoU1JWX05BTUUuR1JPVVAsIFwiaGFuZGxlX2FwcGx5X2pvaW5fZ3JvdXBcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICdHcm91cElkJzogb3B0aW9ucy5Hcm91cElkLFxyXG4gICAgICAgICAgICAgICAgICAgICdBcHBsaWNhbnRfQWNjb3VudCc6IG9wdGlvbnMuQXBwbGljYW50X0FjY291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0hhbmRsZU1zZyc6IG9wdGlvbnMuSGFuZGxlTXNnLFxyXG4gICAgICAgICAgICAgICAgICAgICdBdXRoZW50aWNhdGlvbic6IG9wdGlvbnMuQXV0aGVudGljYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgJ01zZ0tleSc6IG9wdGlvbnMuTXNnS2V5LFxyXG4gICAgICAgICAgICAgICAgICAgICdBcHByb3ZhbE1zZyc6IG9wdGlvbnMuQXBwcm92YWxNc2csXHJcbiAgICAgICAgICAgICAgICAgICAgJ1VzZXJEZWZpbmVkRmllbGQnOiBvcHRpb25zLlVzZXJEZWZpbmVkRmllbGRcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjYk9rLFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIuRXJyb3JDb2RlID09IDEwMDI0KSB7IC8vYXBwbHkgaGFzIGJlIGhhbmRsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNiT2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXNwID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdBY3Rpb25TdGF0dXMnOiBBQ1RJT05fU1RBVFVTLk9LLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdFcnJvckNvZGUnOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdFcnJvckluZm8nOiAn6K+l55Sz6K+35bey57uP6KKr5aSE55CG6L+HJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNiT2socmVzcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2JFcnIpIGNiRXJyKGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8v6I635Y+W576k57uE5pyq5Yaz5YiX6KGoXHJcbiAgICAgICAgdmFyIHByb3RvX2dldFBlbmRlbmN5R3JvdXAgPSBmdW5jdGlvbiAob3B0aW9ucywgY2JPaywgY2JFcnIpIHtcclxuICAgICAgICAgICAgaWYgKCFjaGVja0xvZ2luKGNiRXJyLCB0cnVlKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgQ29ubk1hbmFnZXIuYXBpQ2FsbChTUlZfTkFNRS5HUk9VUCwgXCJnZXRfcGVuZGVuY3lcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICdTdGFydFRpbWUnOiBvcHRpb25zLlN0YXJ0VGltZSxcclxuICAgICAgICAgICAgICAgICAgICAnTGltaXQnOiBvcHRpb25zLkxpbWl0LFxyXG4gICAgICAgICAgICAgICAgICAgICdIYW5kbGVfQWNjb3VudCc6IGN0eC5pZGVudGlmaWVyXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY2JPayxcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIC8v576k57uE5pyq5Yaz5bey57uP5LiK5oqlXHJcbiAgICAgICAgdmFyIHByb3RvX2dldFBlbmRlbmN5R3JvdXBSZWFkID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNiT2ssIGNiRXJyKSB7XHJcbiAgICAgICAgICAgIGlmICghY2hlY2tMb2dpbihjYkVyciwgdHJ1ZSkpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIENvbm5NYW5hZ2VyLmFwaUNhbGwoU1JWX05BTUUuR1JPVVAsIFwicmVwb3J0X3BlbmRlbmN5XCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAnUmVwb3J0VGltZSc6IG9wdGlvbnMuUmVwb3J0VGltZSxcclxuICAgICAgICAgICAgICAgICAgICAnRnJvbV9BY2NvdW50JzogY3R4LmlkZW50aWZpZXJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjYk9rLFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycikge1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL+WkhOeQhuiiq+mCgOivt+i/m+e+pOeUs+ivtyjlkIzmhI/miJbmi5Lnu50pXHJcbiAgICAgICAgdmFyIHByb3RvX2hhbmRsZUludml0ZUpvaW5Hcm91cFJlcXVlc3QgPSBmdW5jdGlvbiAob3B0aW9ucywgY2JPaywgY2JFcnIpIHtcclxuICAgICAgICAgICAgaWYgKCFjaGVja0xvZ2luKGNiRXJyLCB0cnVlKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgQ29ubk1hbmFnZXIuYXBpQ2FsbChTUlZfTkFNRS5HUk9VUCwgXCJoYW5kbGVfaW52aXRlX2pvaW5fZ3JvdXBcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICdHcm91cElkJzogb3B0aW9ucy5Hcm91cElkLFxyXG4gICAgICAgICAgICAgICAgICAgICdJbnZpdGVyX0FjY291bnQnOiBvcHRpb25zLkludml0ZXJfQWNjb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAnSGFuZGxlTXNnJzogb3B0aW9ucy5IYW5kbGVNc2csXHJcbiAgICAgICAgICAgICAgICAgICAgJ0F1dGhlbnRpY2F0aW9uJzogb3B0aW9ucy5BdXRoZW50aWNhdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAnTXNnS2V5Jzogb3B0aW9ucy5Nc2dLZXksXHJcbiAgICAgICAgICAgICAgICAgICAgJ0FwcHJvdmFsTXNnJzogb3B0aW9ucy5BcHByb3ZhbE1zZyxcclxuICAgICAgICAgICAgICAgICAgICAnVXNlckRlZmluZWRGaWVsZCc6IG9wdGlvbnMuVXNlckRlZmluZWRGaWVsZFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNiT2ssXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8v5Li75Yqo6YCA576kXHJcbiAgICAgICAgdmFyIHByb3RvX3F1aXRHcm91cCA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYk9rLCBjYkVycikge1xyXG4gICAgICAgICAgICBpZiAoIWNoZWNrTG9naW4oY2JFcnIsIHRydWUpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBDb25uTWFuYWdlci5hcGlDYWxsKFNSVl9OQU1FLkdST1VQLCBcInF1aXRfZ3JvdXBcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICdHcm91cElkJzogb3B0aW9ucy5Hcm91cElkXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY2JPaywgY2JFcnIpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8v6YCA5Ye65aSn576kXHJcbiAgICAgICAgdmFyIHByb3RvX3F1aXRCaWdHcm91cCA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYk9rLCBjYkVycikge1xyXG4gICAgICAgICAgICB2YXIgc3J2TmFtZTtcclxuICAgICAgICAgICAgaWYgKCFjaGVja0xvZ2luKGNiRXJyLCBmYWxzZSkpIHsgLy/mnKrnmbvlvZVcclxuICAgICAgICAgICAgICAgIHNydk5hbWUgPSBTUlZfTkFNRS5CSUdfR1JPVVA7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7IC8v5bey55m75b2VXHJcbiAgICAgICAgICAgICAgICBzcnZOYW1lID0gU1JWX05BTUUuR1JPVVA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgTXNnTWFuYWdlci5yZXNldEJpZ0dyb3VwTG9uZ1BvbGxpbmdJbmZvKCk7XHJcbiAgICAgICAgICAgIENvbm5NYW5hZ2VyLmFwaUNhbGwoc3J2TmFtZSwgXCJxdWl0X2dyb3VwXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAnR3JvdXBJZCc6IG9wdGlvbnMuR3JvdXBJZFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChyZXNwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTXNnU3RvcmUuZGVsU2Vzc0J5VHlwZUlkKFNFU1NJT05fVFlQRS5HUk9VUCwgb3B0aW9ucy5Hcm91cElkKTtcclxuICAgICAgICAgICAgICAgICAgICAvL+mHjee9ruW9k+WJjeWGjeivt+axguS4reeahGFqYXhcclxuICAgICAgICAgICAgICAgICAgICAvL2NsZWFyWG1sSHR0cE9iak1hcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8v6YCA5Ye65aSn576k5oiQ5Yqf5LmL5ZCO6ZyA6KaB6YeN572u6ZW/6L2u6K+i5L+h5oGvXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTXNnTWFuYWdlci5yZXNldEJpZ0dyb3VwTG9uZ1BvbGxpbmdJbmZvKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNiT2spIGNiT2socmVzcCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY2JFcnIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy/mn6Xmib7nvqQo5oyJ5ZCN56ewKVxyXG4gICAgICAgIHZhciBwcm90b19zZWFyY2hHcm91cEJ5TmFtZSA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYk9rLCBjYkVycikge1xyXG4gICAgICAgICAgICBDb25uTWFuYWdlci5hcGlDYWxsKFNSVl9OQU1FLkdST1VQLCBcInNlYXJjaF9ncm91cFwiLCBvcHRpb25zLCBjYk9rLCBjYkVycik7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy/ojrflj5bnvqTnu4TlhazlvIDotYTmlplcclxuICAgICAgICB2YXIgcHJvdG9fZ2V0R3JvdXBQdWJsaWNJbmZvID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNiT2ssIGNiRXJyKSB7XHJcbiAgICAgICAgICAgIGlmICghY2hlY2tMb2dpbihjYkVyciwgdHJ1ZSkpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIENvbm5NYW5hZ2VyLmFwaUNhbGwoU1JWX05BTUUuR1JPVVAsIFwiZ2V0X2dyb3VwX3B1YmxpY19pbmZvXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAnR3JvdXBJZExpc3QnOiBvcHRpb25zLkdyb3VwSWRMaXN0LFxyXG4gICAgICAgICAgICAgICAgICAgICdSZXNwb25zZUZpbHRlcic6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0dyb3VwQmFzZVB1YmxpY0luZm9GaWx0ZXInOiBvcHRpb25zLkdyb3VwQmFzZVB1YmxpY0luZm9GaWx0ZXJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKHJlc3ApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNwLkVycm9ySW5mbyA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwLkdyb3VwSW5mbykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpIGluIHJlc3AuR3JvdXBJbmZvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJyb3JDb2RlID0gcmVzcC5Hcm91cEluZm9baV0uRXJyb3JDb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yQ29kZSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwLkFjdGlvblN0YXR1cyA9IEFDVElPTl9TVEFUVVMuRkFJTDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwLkdyb3VwSW5mb1tpXS5FcnJvckluZm8gPSBcIltcIiArIGVycm9yQ29kZSArIFwiXVwiICsgcmVzcC5Hcm91cEluZm9baV0uRXJyb3JJbmZvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3AuRXJyb3JJbmZvICs9IHJlc3AuR3JvdXBJbmZvW2ldLkVycm9ySW5mbyArICdcXG4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwLkFjdGlvblN0YXR1cyA9PSBBQ1RJT05fU1RBVFVTLkZBSUwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNiRXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYkVycihyZXNwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2JPaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYk9rKHJlc3ApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY2JFcnIpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8v6I635Y+W576k57uE6K+m57uG6LWE5paZLS3pq5jnuqdcclxuICAgICAgICAvL+ivt+axguWNj+iuruWPguiAg++8mmh0dHBzOi8vd3d3LnFjbG91ZC5jb20vZG9jL3Byb2R1Y3QvMjY5LzE2MTZcclxuICAgICAgICB2YXIgcHJvdG9fZ2V0R3JvdXBJbmZvID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNiT2ssIGNiRXJyKSB7XHJcbiAgICAgICAgICAgIGlmICghY2hlY2tMb2dpbihjYkVyciwgdHJ1ZSkpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHZhciBvcHQgPSB7XHJcbiAgICAgICAgICAgICAgICAnR3JvdXBJZExpc3QnOiBvcHRpb25zLkdyb3VwSWRMaXN0LFxyXG4gICAgICAgICAgICAgICAgJ1Jlc3BvbnNlRmlsdGVyJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICdHcm91cEJhc2VJbmZvRmlsdGVyJzogb3B0aW9ucy5Hcm91cEJhc2VJbmZvRmlsdGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICdNZW1iZXJJbmZvRmlsdGVyJzogb3B0aW9ucy5NZW1iZXJJbmZvRmlsdGVyXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLkFwcERlZmluZWREYXRhRmlsdGVyX0dyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICBvcHQuUmVzcG9uc2VGaWx0ZXIuQXBwRGVmaW5lZERhdGFGaWx0ZXJfR3JvdXAgPSBvcHRpb25zLkFwcERlZmluZWREYXRhRmlsdGVyX0dyb3VwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLkFwcERlZmluZWREYXRhRmlsdGVyX0dyb3VwTWVtYmVyKSB7XHJcbiAgICAgICAgICAgICAgICBvcHQuUmVzcG9uc2VGaWx0ZXIuQXBwRGVmaW5lZERhdGFGaWx0ZXJfR3JvdXBNZW1iZXIgPSBvcHRpb25zLkFwcERlZmluZWREYXRhRmlsdGVyX0dyb3VwTWVtYmVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIENvbm5NYW5hZ2VyLmFwaUNhbGwoU1JWX05BTUUuR1JPVVAsIFwiZ2V0X2dyb3VwX2luZm9cIiwgb3B0LFxyXG4gICAgICAgICAgICAgICAgY2JPaywgY2JFcnIpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8v6I635Y+W576k57uE5oiQ5ZGYLemrmOe6p+aOpeWPo1xyXG4gICAgICAgIC8v5Y2P6K6u5Y+C6ICD77yaaHR0cHM6Ly93d3cucWNsb3VkLmNvbS9kb2MvcHJvZHVjdC8yNjkvMTYxN1xyXG4gICAgICAgIHZhciBwcm90b19nZXRHcm91cE1lbWJlckluZm8gPSBmdW5jdGlvbiAob3B0aW9ucywgY2JPaywgY2JFcnIpIHtcclxuICAgICAgICAgICAgaWYgKCFjaGVja0xvZ2luKGNiRXJyLCB0cnVlKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgQ29ubk1hbmFnZXIuYXBpQ2FsbChTUlZfTkFNRS5HUk9VUCwgXCJnZXRfZ3JvdXBfbWVtYmVyX2luZm9cIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICdHcm91cElkJzogb3B0aW9ucy5Hcm91cElkLFxyXG4gICAgICAgICAgICAgICAgICAgICdPZmZzZXQnOiBvcHRpb25zLk9mZnNldCxcclxuICAgICAgICAgICAgICAgICAgICAnTGltaXQnOiBvcHRpb25zLkxpbWl0LFxyXG4gICAgICAgICAgICAgICAgICAgICdNZW1iZXJJbmZvRmlsdGVyJzogb3B0aW9ucy5NZW1iZXJJbmZvRmlsdGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICdNZW1iZXJSb2xlRmlsdGVyJzogb3B0aW9ucy5NZW1iZXJSb2xlRmlsdGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICdBcHBEZWZpbmVkRGF0YUZpbHRlcl9Hcm91cE1lbWJlcic6IG9wdGlvbnMuQXBwRGVmaW5lZERhdGFGaWx0ZXJfR3JvdXBNZW1iZXJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjYk9rLCBjYkVycik7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIC8v5aKe5Yqg576k57uE5oiQ5ZGYXHJcbiAgICAgICAgLy/ljY/orq7lj4LogIPvvJpodHRwczovL3d3dy5xY2xvdWQuY29tL2RvYy9wcm9kdWN0LzI2OS8xNjIxXHJcbiAgICAgICAgdmFyIHByb3RvX2FkZEdyb3VwTWVtYmVyID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNiT2ssIGNiRXJyKSB7XHJcbiAgICAgICAgICAgIGlmICghY2hlY2tMb2dpbihjYkVyciwgdHJ1ZSkpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIENvbm5NYW5hZ2VyLmFwaUNhbGwoU1JWX05BTUUuR1JPVVAsIFwiYWRkX2dyb3VwX21lbWJlclwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0dyb3VwSWQnOiBvcHRpb25zLkdyb3VwSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NpbGVuY2UnOiBvcHRpb25zLlNpbGVuY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgJ01lbWJlckxpc3QnOiBvcHRpb25zLk1lbWJlckxpc3RcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjYk9rLCBjYkVycik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvL+S/ruaUuee+pOe7hOaIkOWRmOi1hOaWmVxyXG4gICAgICAgIC8v5Y2P6K6u5Y+C6ICD77yaaHR0cHM6Ly93d3cucWNsb3VkLmNvbS9kb2MvcHJvZHVjdC8yNjkvMTYyM1xyXG4gICAgICAgIHZhciBwcm90b19tb2RpZnlHcm91cE1lbWJlciA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYk9rLCBjYkVycikge1xyXG4gICAgICAgICAgICBpZiAoIWNoZWNrTG9naW4oY2JFcnIsIHRydWUpKSByZXR1cm47XHJcbiAgICAgICAgICAgIHZhciBvcHQgPSB7fTtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuR3JvdXBJZCkge1xyXG4gICAgICAgICAgICAgICAgb3B0Lkdyb3VwSWQgPSBvcHRpb25zLkdyb3VwSWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuTWVtYmVyX0FjY291bnQpIHtcclxuICAgICAgICAgICAgICAgIG9wdC5NZW1iZXJfQWNjb3VudCA9IG9wdGlvbnMuTWVtYmVyX0FjY291bnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9BZG1pbuaIluiAhU1lbWJlclxyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5Sb2xlKSB7XHJcbiAgICAgICAgICAgICAgICBvcHQuUm9sZSA9IG9wdGlvbnMuUm9sZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBBY2NlcHRBbmROb3RpZnnku6Pooajop6PmlLblubbmj5DnpLrmtojmga/vvIxEaXNjYXJk5Luj6KGo5LiN5o6l5pS25Lmf5LiN5o+Q56S65raI5oGv77yMQWNjZXB0Tm90Tm90aWZ55Luj6KGo5o6l5pS25raI5oGv5L2G5LiN5o+Q56S6XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLk1zZ0ZsYWcpIHtcclxuICAgICAgICAgICAgICAgIG9wdC5Nc2dGbGFnID0gb3B0aW9ucy5Nc2dGbGFnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLlNodXRVcFRpbWUpIHsgLy/npoHoqIDml7bpl7RcclxuICAgICAgICAgICAgICAgIG9wdC5TaHV0VXBUaW1lID0gb3B0aW9ucy5TaHV0VXBUaW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLk5hbWVDYXJkKSB7IC8v576k5ZCN54mHLOacgOWkp+S4jei2hei/hzUw5Liq5a2X6IqCXHJcbiAgICAgICAgICAgICAgICBvcHQuTmFtZUNhcmQgPSBvcHRpb25zLk5hbWVDYXJkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLkFwcE1lbWJlckRlZmluZWREYXRhKSB7IC8v576k5oiQ5ZGY57u05bqm55qE6Ieq5a6a5LmJ5a2X5q6177yM6buY6K6k5oOF5Ya15piv5rKh5pyJ55qE77yM6ZyA6KaB5byA6YCaXHJcbiAgICAgICAgICAgICAgICBvcHQuQXBwTWVtYmVyRGVmaW5lZERhdGEgPSBvcHRpb25zLkFwcE1lbWJlckRlZmluZWREYXRhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIENvbm5NYW5hZ2VyLmFwaUNhbGwoU1JWX05BTUUuR1JPVVAsIFwibW9kaWZ5X2dyb3VwX21lbWJlcl9pbmZvXCIsIG9wdCxcclxuICAgICAgICAgICAgICAgIGNiT2ssIGNiRXJyKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8v5Yig6Zmk576k57uE5oiQ5ZGYXHJcbiAgICAgICAgLy/ljY/orq7lj4LogIPvvJpodHRwczovL3d3dy5xY2xvdWQuY29tL2RvYy9wcm9kdWN0LzI2OS8xNjIyXHJcbiAgICAgICAgdmFyIHByb3RvX2RlbGV0ZUdyb3VwTWVtYmVyID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNiT2ssIGNiRXJyKSB7XHJcbiAgICAgICAgICAgIGlmICghY2hlY2tMb2dpbihjYkVyciwgdHJ1ZSkpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIENvbm5NYW5hZ2VyLmFwaUNhbGwoU1JWX05BTUUuR1JPVVAsIFwiZGVsZXRlX2dyb3VwX21lbWJlclwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0dyb3VwSWQnOiBvcHRpb25zLkdyb3VwSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NpbGVuY2UnOiBvcHRpb25zLlNpbGVuY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgJ01lbWJlclRvRGVsX0FjY291bnQnOiBvcHRpb25zLk1lbWJlclRvRGVsX0FjY291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1JlYXNvbic6IG9wdGlvbnMuUmVhc29uXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY2JPaywgY2JFcnIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy/op6PmlaPnvqTnu4RcclxuICAgICAgICAvL+WNj+iuruWPguiAg++8mmh0dHBzOi8vd3d3LnFjbG91ZC5jb20vZG9jL3Byb2R1Y3QvMjY5LzE2MjRcclxuICAgICAgICB2YXIgcHJvdG9fZGVzdHJveUdyb3VwID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNiT2ssIGNiRXJyKSB7XHJcbiAgICAgICAgICAgIGlmICghY2hlY2tMb2dpbihjYkVyciwgdHJ1ZSkpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIENvbm5NYW5hZ2VyLmFwaUNhbGwoU1JWX05BTUUuR1JPVVAsIFwiZGVzdHJveV9ncm91cFwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0dyb3VwSWQnOiBvcHRpb25zLkdyb3VwSWRcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjYk9rLCBjYkVycik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvL+i9rOiuqee+pOe7hFxyXG4gICAgICAgIC8v5Y2P6K6u5Y+C6ICD77yaaHR0cHM6Ly93d3cucWNsb3VkLmNvbS9kb2MvcHJvZHVjdC8yNjkvMTYzM1xyXG4gICAgICAgIHZhciBwcm90b19jaGFuZ2VHcm91cE93bmVyID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNiT2ssIGNiRXJyKSB7XHJcbiAgICAgICAgICAgIGlmICghY2hlY2tMb2dpbihjYkVyciwgdHJ1ZSkpIHJldHVybjtcclxuICAgICAgICAgICAgQ29ubk1hbmFnZXIuYXBpQ2FsbChTUlZfTkFNRS5HUk9VUCwgXCJjaGFuZ2VfZ3JvdXBfb3duZXJcIiwgb3B0aW9ucywgY2JPaywgY2JFcnIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy/ojrflj5bnlKjmiLfmiYDliqDlhaXnmoTnvqTnu4Qt6auY57qn5o6l5Y+jXHJcbiAgICAgICAgLy/ljY/orq7lj4LogIPvvJpodHRwczovL3d3dy5xY2xvdWQuY29tL2RvYy9wcm9kdWN0LzI2OS8xNjI1XHJcbiAgICAgICAgdmFyIHByb3RvX2dldEpvaW5lZEdyb3VwTGlzdEhpZ2ggPSBmdW5jdGlvbiAob3B0aW9ucywgY2JPaywgY2JFcnIpIHtcclxuICAgICAgICAgICAgaWYgKCFjaGVja0xvZ2luKGNiRXJyLCB0cnVlKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgQ29ubk1hbmFnZXIuYXBpQ2FsbChTUlZfTkFNRS5HUk9VUCwgXCJnZXRfam9pbmVkX2dyb3VwX2xpc3RcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICdNZW1iZXJfQWNjb3VudCc6IG9wdGlvbnMuTWVtYmVyX0FjY291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0xpbWl0Jzogb3B0aW9ucy5MaW1pdCxcclxuICAgICAgICAgICAgICAgICAgICAnT2Zmc2V0Jzogb3B0aW9ucy5PZmZzZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0dyb3VwVHlwZSc6IG9wdGlvbnMuR3JvdXBUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICdSZXNwb25zZUZpbHRlcic6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0dyb3VwQmFzZUluZm9GaWx0ZXInOiBvcHRpb25zLkdyb3VwQmFzZUluZm9GaWx0ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdTZWxmSW5mb0ZpbHRlcic6IG9wdGlvbnMuU2VsZkluZm9GaWx0ZXJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY2JPaywgY2JFcnIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy/mn6Xor6LkuIDnu4RVc2VySWTlnKjnvqTkuK3nmoTouqvku71cclxuICAgICAgICAvL+WNj+iuruWPguiAg++8mmh0dHBzOi8vd3d3LnFjbG91ZC5jb20vZG9jL3Byb2R1Y3QvMjY5LzE2MjZcclxuICAgICAgICB2YXIgcHJvdG9fZ2V0Um9sZUluR3JvdXAgPSBmdW5jdGlvbiAob3B0aW9ucywgY2JPaywgY2JFcnIpIHtcclxuICAgICAgICAgICAgaWYgKCFjaGVja0xvZ2luKGNiRXJyLCB0cnVlKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgQ29ubk1hbmFnZXIuYXBpQ2FsbChTUlZfTkFNRS5HUk9VUCwgXCJnZXRfcm9sZV9pbl9ncm91cFwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0dyb3VwSWQnOiBvcHRpb25zLkdyb3VwSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1VzZXJfQWNjb3VudCc6IG9wdGlvbnMuVXNlcl9BY2NvdW50XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY2JPaywgY2JFcnIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy/orr7nva7lj5bmtojmiJDlkZjnpoHoqIDml7bpl7RcclxuICAgICAgICAvL+WNj+iuruWPguiAg++8mmh0dHBzOi8vd3d3LnFjbG91ZC5jb20vZG9jL3Byb2R1Y3QvMjY5LzE2MjdcclxuICAgICAgICB2YXIgcHJvdG9fZm9yYmlkU2VuZE1zZyA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYk9rLCBjYkVycikge1xyXG4gICAgICAgICAgICBpZiAoIWNoZWNrTG9naW4oY2JFcnIsIHRydWUpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBDb25uTWFuYWdlci5hcGlDYWxsKFNSVl9OQU1FLkdST1VQLCBcImZvcmJpZF9zZW5kX21zZ1wiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0dyb3VwSWQnOiBvcHRpb25zLkdyb3VwSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgJ01lbWJlcnNfQWNjb3VudCc6IG9wdGlvbnMuTWVtYmVyc19BY2NvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICdTaHV0VXBUaW1lJzogb3B0aW9ucy5TaHV0VXBUaW1lIC8v5Y2V5L2N5Li656eS77yM5Li6MOaXtuihqOekuuWPlua2iOemgeiogFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNiT2ssIGNiRXJyKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL+WPkemAgeiHquWumuS5iee+pOezu+e7n+mAmuefpVxyXG4gICAgICAgIHZhciBwcm90b19zZW5kQ3VzdG9tR3JvdXBOb3RpZnkgPSBmdW5jdGlvbiAob3B0aW9ucywgY2JPaywgY2JFcnIpIHtcclxuICAgICAgICAgICAgaWYgKCFjaGVja0xvZ2luKGNiRXJyLCB0cnVlKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICBDb25uTWFuYWdlci5hcGlDYWxsKFNSVl9OQU1FLkdST1VQLCBcInNlbmRfZ3JvdXBfc3lzdGVtX25vdGlmaWNhdGlvblwiLCBvcHRpb25zLFxyXG4gICAgICAgICAgICAgICAgY2JPaywgY2JFcnIpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8v5ouJ5Y+W576k5raI5oGv5o6l5Y+jXHJcbiAgICAgICAgdmFyIHByb3RvX2dldEdyb3VwTXNncyA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYk9rLCBjYkVycikge1xyXG4gICAgICAgICAgICBpZiAoIWNoZWNrTG9naW4oY2JFcnIsIHRydWUpKSByZXR1cm47XHJcbiAgICAgICAgICAgIENvbm5NYW5hZ2VyLmFwaUNhbGwoU1JWX05BTUUuR1JPVVAsIFwiZ3JvdXBfbXNnX2dldFwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJHcm91cElkXCI6IG9wdGlvbnMuR3JvdXBJZCxcclxuICAgICAgICAgICAgICAgICAgICBcIlJlcU1zZ1NlcVwiOiBvcHRpb25zLlJlcU1zZ1NlcSxcclxuICAgICAgICAgICAgICAgICAgICBcIlJlcU1zZ051bWJlclwiOiBvcHRpb25zLlJlcU1zZ051bWJlclxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNiT2ssIGNiRXJyKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8v576k5raI5oGv5bey6K+75LiK5oql5o6l5Y+jXHJcbiAgICAgICAgdmFyIHByb3RvX2dyb3VwTXNnUmVhZGVkID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNiT2ssIGNiRXJyKSB7XHJcbiAgICAgICAgICAgIGlmICghY2hlY2tMb2dpbihjYkVyciwgdHJ1ZSkpIHJldHVybjtcclxuICAgICAgICAgICAgQ29ubk1hbmFnZXIuYXBpQ2FsbChTUlZfTkFNRS5HUk9VUCwgXCJtc2dfcmVhZF9yZXBvcnRcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICdHcm91cElkJzogb3B0aW9ucy5Hcm91cElkLFxyXG4gICAgICAgICAgICAgICAgICAgICdNc2dSZWFkZWRTZXEnOiBvcHRpb25zLk1zZ1JlYWRlZFNlcVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNiT2ssIGNiRXJyKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vZW5kXHJcblxyXG4gICAgICAgIC8v5aW95Y+L5o6l5Y+jXHJcbiAgICAgICAgLy/lpITnkIblpb3lj4vmjqXlj6Pov5Tlm57nmoTplJnor6/noIFcclxuICAgICAgICB2YXIgY29udmVydEVycm9yRW4yWmhGcmllbmQgPSBmdW5jdGlvbiAocmVzcCkge1xyXG4gICAgICAgICAgICB2YXIgZXJyb3JBY2NvdW50ID0gW107XHJcbiAgICAgICAgICAgIGlmIChyZXNwLkZhaWxfQWNjb3VudCAmJiByZXNwLkZhaWxfQWNjb3VudC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGVycm9yQWNjb3VudCA9IHJlc3AuRmFpbF9BY2NvdW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChyZXNwLkludmFsaWRfQWNjb3VudCAmJiByZXNwLkludmFsaWRfQWNjb3VudC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGsgaW4gcmVzcC5JbnZhbGlkX0FjY291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvckFjY291bnQucHVzaChyZXNwLkludmFsaWRfQWNjb3VudFtrXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGVycm9yQWNjb3VudC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHJlc3AuQWN0aW9uU3RhdHVzID0gQUNUSU9OX1NUQVRVUy5GQUlMO1xyXG4gICAgICAgICAgICAgICAgcmVzcC5FcnJvckNvZGUgPSBFUlJPUl9DT0RFX0NVU1RPTTtcclxuICAgICAgICAgICAgICAgIHJlc3AuRXJyb3JJbmZvID0gJyc7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpIGluIGVycm9yQWNjb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBmYWlsQ291bnQgPSBlcnJvckFjY291bnRbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiBpbiByZXNwLlJlc3VsdEl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3AuUmVzdWx0SXRlbVtqXS5Ub19BY2NvdW50ID09IGZhaWxDb3VudCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHRDb2RlID0gcmVzcC5SZXN1bHRJdGVtW2pdLlJlc3VsdENvZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwLlJlc3VsdEl0ZW1bal0uUmVzdWx0SW5mbyA9IFwiW1wiICsgcmVzdWx0Q29kZSArIFwiXVwiICsgcmVzcC5SZXN1bHRJdGVtW2pdLlJlc3VsdEluZm87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwLkVycm9ySW5mbyArPSByZXNwLlJlc3VsdEl0ZW1bal0uUmVzdWx0SW5mbyArIFwiXFxuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzcDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8v5re75Yqg5aW95Y+LXHJcbiAgICAgICAgdmFyIHByb3RvX2FwcGx5QWRkRnJpZW5kID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNiT2ssIGNiRXJyKSB7XHJcbiAgICAgICAgICAgIGlmICghY2hlY2tMb2dpbihjYkVyciwgdHJ1ZSkpIHJldHVybjtcclxuICAgICAgICAgICAgQ29ubk1hbmFnZXIuYXBpQ2FsbChTUlZfTkFNRS5GUklFTkQsIFwiZnJpZW5kX2FkZFwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0Zyb21fQWNjb3VudCc6IGN0eC5pZGVudGlmaWVyLFxyXG4gICAgICAgICAgICAgICAgICAgICdBZGRGcmllbmRJdGVtJzogb3B0aW9ucy5BZGRGcmllbmRJdGVtXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKHJlc3ApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3UmVzcCA9IGNvbnZlcnRFcnJvckVuMlpoRnJpZW5kKHJlc3ApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdSZXNwLkFjdGlvblN0YXR1cyA9PSBBQ1RJT05fU1RBVFVTLkZBSUwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNiRXJyKSBjYkVycihuZXdSZXNwKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNiT2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2JPayhuZXdSZXNwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCBjYkVycik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvL+WIoOmZpOWlveWPi1xyXG4gICAgICAgIHZhciBwcm90b19kZWxldGVGcmllbmQgPSBmdW5jdGlvbiAob3B0aW9ucywgY2JPaywgY2JFcnIpIHtcclxuICAgICAgICAgICAgaWYgKCFjaGVja0xvZ2luKGNiRXJyLCB0cnVlKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICBDb25uTWFuYWdlci5hcGlDYWxsKFNSVl9OQU1FLkZSSUVORCwgXCJmcmllbmRfZGVsZXRlXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAnRnJvbV9BY2NvdW50JzogY3R4LmlkZW50aWZpZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1RvX0FjY291bnQnOiBvcHRpb25zLlRvX0FjY291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0RlbGV0ZVR5cGUnOiBvcHRpb25zLkRlbGV0ZVR5cGVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAocmVzcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdSZXNwID0gY29udmVydEVycm9yRW4yWmhGcmllbmQocmVzcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1Jlc3AuQWN0aW9uU3RhdHVzID09IEFDVElPTl9TVEFUVVMuRkFJTCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2JFcnIpIGNiRXJyKG5ld1Jlc3ApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2JPaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYk9rKG5ld1Jlc3ApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIGNiRXJyKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL+WIoOmZpOS8muivnVxyXG4gICAgICAgIHZhciBwcm90b19kZWxldGVDaGF0ID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNiT2ssIGNiRXJyKSB7XHJcbiAgICAgICAgICAgIGlmICghY2hlY2tMb2dpbihjYkVyciwgdHJ1ZSkpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmNoYXRUeXBlID09IDEpIHtcclxuICAgICAgICAgICAgICAgIENvbm5NYW5hZ2VyLmFwaUNhbGwoU1JWX05BTUUuREVMX0NIQVQsIFwiZGVsZXRlXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0Zyb21fQWNjb3VudCc6IGN0eC5pZGVudGlmaWVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnVHlwZSc6IG9wdGlvbnMuY2hhdFR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdUb19BY2NvdW50Jzogb3B0aW9ucy5Ub19BY2NvdW50XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBjYk9rLCBjYkVycik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBDb25uTWFuYWdlci5hcGlDYWxsKFNSVl9OQU1FLkRFTF9DSEFULCBcImRlbGV0ZVwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdGcm9tX0FjY291bnQnOiBjdHguaWRlbnRpZmllcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ1R5cGUnOiBvcHRpb25zLmNoYXRUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnVG9Hcm91cGlkJzogb3B0aW9ucy5Ub19BY2NvdW50XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBjYk9rLCBjYkVycik7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8v6I635Y+W5aW95Y+L55Sz6K+3XHJcbiAgICAgICAgdmFyIHByb3RvX2dldFBlbmRlbmN5ID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNiT2ssIGNiRXJyKSB7XHJcbiAgICAgICAgICAgIGlmICghY2hlY2tMb2dpbihjYkVyciwgdHJ1ZSkpIHJldHVybjtcclxuICAgICAgICAgICAgQ29ubk1hbmFnZXIuYXBpQ2FsbChTUlZfTkFNRS5GUklFTkQsIFwicGVuZGVuY3lfZ2V0XCIsIHtcclxuICAgICAgICAgICAgICAgICAgICBcIkZyb21fQWNjb3VudFwiOiBjdHguaWRlbnRpZmllcixcclxuICAgICAgICAgICAgICAgICAgICBcIlBlbmRlbmN5VHlwZVwiOiBvcHRpb25zLlBlbmRlbmN5VHlwZSxcclxuICAgICAgICAgICAgICAgICAgICBcIlN0YXJ0VGltZVwiOiBvcHRpb25zLlN0YXJ0VGltZSxcclxuICAgICAgICAgICAgICAgICAgICBcIk1heExpbWl0ZWRcIjogb3B0aW9ucy5NYXhMaW1pdGVkLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiTGFzdFNlcXVlbmNlXCI6IG9wdGlvbnMuTGFzdFNlcXVlbmNlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY2JPaywgY2JFcnIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy/lpb3lj4vnlLPor7flt7Lor7vkuIrmiqVcclxuICAgICAgICB2YXIgcHJvdG9fZ2V0UGVuZGVuY3lSZXBvcnQgPSBmdW5jdGlvbiAob3B0aW9ucywgY2JPaywgY2JFcnIpIHtcclxuICAgICAgICAgICAgaWYgKCFjaGVja0xvZ2luKGNiRXJyLCB0cnVlKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICBDb25uTWFuYWdlci5hcGlDYWxsKFNSVl9OQU1FLkZSSUVORCwgXCJQZW5kZW5jeVJlcG9ydFwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJGcm9tX0FjY291bnRcIjogY3R4LmlkZW50aWZpZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJMYXRlc3RQZW5kZW5jeVRpbWVTdGFtcFwiOiBvcHRpb25zLkxhdGVzdFBlbmRlbmN5VGltZVN0YW1wXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY2JPaywgY2JFcnIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy/liKDpmaTlpb3lj4vnlLPor7dcclxuICAgICAgICB2YXIgcHJvdG9fZGVsZXRlUGVuZGVuY3kgPSBmdW5jdGlvbiAob3B0aW9ucywgY2JPaywgY2JFcnIpIHtcclxuICAgICAgICAgICAgaWYgKCFjaGVja0xvZ2luKGNiRXJyLCB0cnVlKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICBDb25uTWFuYWdlci5hcGlDYWxsKFNSVl9OQU1FLkZSSUVORCwgXCJwZW5kZW5jeV9kZWxldGVcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiRnJvbV9BY2NvdW50XCI6IGN0eC5pZGVudGlmaWVyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiUGVuZGVuY3lUeXBlXCI6IG9wdGlvbnMuUGVuZGVuY3lUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiVG9fQWNjb3VudFwiOiBvcHRpb25zLlRvX0FjY291bnRcclxuXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKHJlc3ApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3UmVzcCA9IGNvbnZlcnRFcnJvckVuMlpoRnJpZW5kKHJlc3ApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdSZXNwLkFjdGlvblN0YXR1cyA9PSBBQ1RJT05fU1RBVFVTLkZBSUwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNiRXJyKSBjYkVycihuZXdSZXNwKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNiT2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2JPayhuZXdSZXNwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCBjYkVycik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvL+WkhOeQhuWlveWPi+eUs+ivt1xyXG4gICAgICAgIHZhciBwcm90b19yZXNwb25zZUZyaWVuZCA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYk9rLCBjYkVycikge1xyXG4gICAgICAgICAgICBpZiAoIWNoZWNrTG9naW4oY2JFcnIsIHRydWUpKSByZXR1cm47XHJcbiAgICAgICAgICAgIENvbm5NYW5hZ2VyLmFwaUNhbGwoU1JWX05BTUUuRlJJRU5ELCBcImZyaWVuZF9yZXNwb25zZVwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0Zyb21fQWNjb3VudCc6IGN0eC5pZGVudGlmaWVyLFxyXG4gICAgICAgICAgICAgICAgICAgICdSZXNwb25zZUZyaWVuZEl0ZW0nOiBvcHRpb25zLlJlc3BvbnNlRnJpZW5kSXRlbVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChyZXNwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1Jlc3AgPSBjb252ZXJ0RXJyb3JFbjJaaEZyaWVuZChyZXNwKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobmV3UmVzcC5BY3Rpb25TdGF0dXMgPT0gQUNUSU9OX1NUQVRVUy5GQUlMKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYkVycikgY2JFcnIobmV3UmVzcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjYk9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNiT2sobmV3UmVzcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwgY2JFcnIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy/miJHnmoTlpb3lj4tcclxuICAgICAgICB2YXIgcHJvdG9fZ2V0QWxsRnJpZW5kID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNiT2ssIGNiRXJyKSB7XHJcbiAgICAgICAgICAgIGlmICghY2hlY2tMb2dpbihjYkVyciwgdHJ1ZSkpIHJldHVybjtcclxuICAgICAgICAgICAgQ29ubk1hbmFnZXIuYXBpQ2FsbChTUlZfTkFNRS5GUklFTkQsIFwiZnJpZW5kX2dldF9hbGxcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICdGcm9tX0FjY291bnQnOiBjdHguaWRlbnRpZmllcixcclxuICAgICAgICAgICAgICAgICAgICAnVGltZVN0YW1wJzogb3B0aW9ucy5UaW1lU3RhbXAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1N0YXJ0SW5kZXgnOiBvcHRpb25zLlN0YXJ0SW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0dldENvdW50Jzogb3B0aW9ucy5HZXRDb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAnTGFzdFN0YW5kYXJkU2VxdWVuY2UnOiBvcHRpb25zLkxhc3RTdGFuZGFyZFNlcXVlbmNlLFxyXG4gICAgICAgICAgICAgICAgICAgICdUYWdMaXN0Jzogb3B0aW9ucy5UYWdMaXN0XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY2JPaywgY2JFcnIpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8v6LWE5paZ5o6l5Y+jXHJcbiAgICAgICAgLy/mn6XnnIvkuKrkurrotYTmlplcclxuICAgICAgICB2YXIgcHJvdG9fZ2V0UHJvZmlsZVBvcnRyYWl0ID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNiT2ssIGNiRXJyKSB7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLlRvX0FjY291bnQubGVuZ3RoID4gMTAwKSB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLlRvX0FjY291bnQubGVuZ3RoID0gMTAwO1xyXG4gICAgICAgICAgICAgICAgbG9nLmVycm9yKCfojrflj5bnlKjmiLfotYTmlpnkurrmlbDkuI3og73otoXov4cxMDDkuronKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghY2hlY2tMb2dpbihjYkVyciwgdHJ1ZSkpIHJldHVybjtcclxuICAgICAgICAgICAgQ29ubk1hbmFnZXIuYXBpQ2FsbChTUlZfTkFNRS5QUk9GSUxFLCBcInBvcnRyYWl0X2dldFwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0Zyb21fQWNjb3VudCc6IGN0eC5pZGVudGlmaWVyLFxyXG4gICAgICAgICAgICAgICAgICAgICdUb19BY2NvdW50Jzogb3B0aW9ucy5Ub19BY2NvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vJ0xhc3RTdGFuZGFyZFNlcXVlbmNlJzpvcHRpb25zLkxhc3RTdGFuZGFyZFNlcXVlbmNlLFxyXG4gICAgICAgICAgICAgICAgICAgICdUYWdMaXN0Jzogb3B0aW9ucy5UYWdMaXN0XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKHJlc3ApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZXJyb3JBY2NvdW50ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3AuRmFpbF9BY2NvdW50ICYmIHJlc3AuRmFpbF9BY2NvdW50Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvckFjY291bnQgPSByZXNwLkZhaWxfQWNjb3VudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3AuSW52YWxpZF9BY2NvdW50ICYmIHJlc3AuSW52YWxpZF9BY2NvdW50Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrIGluIHJlc3AuSW52YWxpZF9BY2NvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvckFjY291bnQucHVzaChyZXNwLkludmFsaWRfQWNjb3VudFtrXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yQWNjb3VudC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcC5BY3Rpb25TdGF0dXMgPSBBQ1RJT05fU1RBVFVTLkZBSUw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3AuRXJyb3JDb2RlID0gRVJST1JfQ09ERV9DVVNUT007XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3AuRXJyb3JJbmZvID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgaW4gZXJyb3JBY2NvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmFpbENvdW50ID0gZXJyb3JBY2NvdW50W2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiBpbiByZXNwLlVzZXJQcm9maWxlSXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwLlVzZXJQcm9maWxlSXRlbVtqXS5Ub19BY2NvdW50ID09IGZhaWxDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0Q29kZSA9IHJlc3AuVXNlclByb2ZpbGVJdGVtW2pdLlJlc3VsdENvZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3AuVXNlclByb2ZpbGVJdGVtW2pdLlJlc3VsdEluZm8gPSBcIltcIiArIHJlc3VsdENvZGUgKyBcIl1cIiArIHJlc3AuVXNlclByb2ZpbGVJdGVtW2pdLlJlc3VsdEluZm87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3AuRXJyb3JJbmZvICs9IFwi6LSm5Y+3OlwiICsgZmFpbENvdW50ICsgXCIsXCIgKyByZXNwLlVzZXJQcm9maWxlSXRlbVtqXS5SZXN1bHRJbmZvICsgXCJcXG5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwLkFjdGlvblN0YXR1cyA9PSBBQ1RJT05fU1RBVFVTLkZBSUwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNiRXJyKSBjYkVycihyZXNwKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNiT2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2JPayhyZXNwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY2JFcnIpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8v6K6+572u5Liq5Lq66LWE5paZXHJcbiAgICAgICAgdmFyIHByb3RvX3NldFByb2ZpbGVQb3J0cmFpdCA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYk9rLCBjYkVycikge1xyXG4gICAgICAgICAgICBpZiAoIWNoZWNrTG9naW4oY2JFcnIsIHRydWUpKSByZXR1cm47XHJcbiAgICAgICAgICAgIENvbm5NYW5hZ2VyLmFwaUNhbGwoU1JWX05BTUUuUFJPRklMRSwgXCJwb3J0cmFpdF9zZXRcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICdGcm9tX0FjY291bnQnOiBjdHguaWRlbnRpZmllcixcclxuICAgICAgICAgICAgICAgICAgICAnUHJvZmlsZUl0ZW0nOiBvcHRpb25zLlByb2ZpbGVJdGVtXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKHJlc3ApIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpIGluIG9wdGlvbnMuUHJvZmlsZUl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb2ZpbGUgPSBvcHRpb25zLlByb2ZpbGVJdGVtW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvZmlsZS5UYWcgPT0gJ1RhZ19Qcm9maWxlX0lNX05pY2snKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHguaWRlbnRpZmllck5pY2sgPSBwcm9maWxlLlZhbHVlOyAvL+abtOaWsOaYteensFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNiT2spIGNiT2socmVzcCk7XHJcbiAgICAgICAgICAgICAgICB9LCBjYkVycik7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy/lop7liqDpu5HlkI3ljZVcclxuICAgICAgICB2YXIgcHJvdG9fYWRkQmxhY2tMaXN0ID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNiT2ssIGNiRXJyKSB7XHJcbiAgICAgICAgICAgIGlmICghY2hlY2tMb2dpbihjYkVyciwgdHJ1ZSkpIHJldHVybjtcclxuICAgICAgICAgICAgQ29ubk1hbmFnZXIuYXBpQ2FsbChTUlZfTkFNRS5GUklFTkQsIFwiYmxhY2tfbGlzdF9hZGRcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICdGcm9tX0FjY291bnQnOiBjdHguaWRlbnRpZmllcixcclxuICAgICAgICAgICAgICAgICAgICAnVG9fQWNjb3VudCc6IG9wdGlvbnMuVG9fQWNjb3VudFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChyZXNwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1Jlc3AgPSBjb252ZXJ0RXJyb3JFbjJaaEZyaWVuZChyZXNwKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobmV3UmVzcC5BY3Rpb25TdGF0dXMgPT0gQUNUSU9OX1NUQVRVUy5GQUlMKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYkVycikgY2JFcnIobmV3UmVzcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjYk9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNiT2sobmV3UmVzcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwgY2JFcnIpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8v5Yig6Zmk6buR5ZCN5Y2VXHJcbiAgICAgICAgdmFyIHByb3RvX2RlbGV0ZUJsYWNrTGlzdCA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYk9rLCBjYkVycikge1xyXG4gICAgICAgICAgICBpZiAoIWNoZWNrTG9naW4oY2JFcnIsIHRydWUpKSByZXR1cm47XHJcbiAgICAgICAgICAgIENvbm5NYW5hZ2VyLmFwaUNhbGwoU1JWX05BTUUuRlJJRU5ELCBcImJsYWNrX2xpc3RfZGVsZXRlXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAnRnJvbV9BY2NvdW50JzogY3R4LmlkZW50aWZpZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1RvX0FjY291bnQnOiBvcHRpb25zLlRvX0FjY291bnRcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAocmVzcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdSZXNwID0gY29udmVydEVycm9yRW4yWmhGcmllbmQocmVzcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1Jlc3AuQWN0aW9uU3RhdHVzID09IEFDVElPTl9TVEFUVVMuRkFJTCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2JFcnIpIGNiRXJyKG5ld1Jlc3ApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2JPaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYk9rKG5ld1Jlc3ApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIGNiRXJyKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL+aIkeeahOm7keWQjeWNlVxyXG4gICAgICAgIHZhciBwcm90b19nZXRCbGFja0xpc3QgPSBmdW5jdGlvbiAob3B0aW9ucywgY2JPaywgY2JFcnIpIHtcclxuICAgICAgICAgICAgaWYgKCFjaGVja0xvZ2luKGNiRXJyLCB0cnVlKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICBDb25uTWFuYWdlci5hcGlDYWxsKFNSVl9OQU1FLkZSSUVORCwgXCJibGFja19saXN0X2dldFwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0Zyb21fQWNjb3VudCc6IGN0eC5pZGVudGlmaWVyLFxyXG4gICAgICAgICAgICAgICAgICAgICdTdGFydEluZGV4Jzogb3B0aW9ucy5TdGFydEluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICdNYXhMaW1pdGVkJzogb3B0aW9ucy5NYXhMaW1pdGVkLFxyXG4gICAgICAgICAgICAgICAgICAgICdMYXN0U2VxdWVuY2UnOiBvcHRpb25zLkxhc3RTZXF1ZW5jZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNiT2ssIGNiRXJyKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL+iOt+WPluacgOi/keiBlOezu+S6ulxyXG4gICAgICAgIHZhciBwcm90b19nZXRSZWNlbnRDb250YWN0TGlzdCA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYk9rLCBjYkVycikge1xyXG4gICAgICAgICAgICBpZiAoIWNoZWNrTG9naW4oY2JFcnIsIHRydWUpKSByZXR1cm47XHJcbiAgICAgICAgICAgIENvbm5NYW5hZ2VyLmFwaUNhbGwoU1JWX05BTUUuUkVDRU5UX0NPTlRBQ1QsIFwiZ2V0XCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAnRnJvbV9BY2NvdW50JzogY3R4LmlkZW50aWZpZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvdW50Jzogb3B0aW9ucy5Db3VudFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNiT2ssIGNiRXJyKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL+S4iuS8oOWbvueJh+aIluaWh+S7tlxyXG4gICAgICAgIHZhciBwcm90b191cGxvYWRQaWMgPSBmdW5jdGlvbiAob3B0aW9ucywgY2JPaywgY2JFcnIpIHtcclxuICAgICAgICAgICAgaWYgKCFjaGVja0xvZ2luKGNiRXJyLCB0cnVlKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICB2YXIgY21kTmFtZTtcclxuICAgICAgICAgICAgaWYgKGlzQWNjZXNzRm9ybWFsRW52KCkpIHtcclxuICAgICAgICAgICAgICAgIGNtZE5hbWUgPSAncGljX3VwJztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNtZE5hbWUgPSAncGljX3VwX3Rlc3QnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIENvbm5NYW5hZ2VyLmFwaUNhbGwoU1JWX05BTUUuUElDLCBjbWROYW1lLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0FwcF9WZXJzaW9uJzogVkVSU0lPTl9JTkZPLkFQUF9WRVJTSU9OLFxyXG4gICAgICAgICAgICAgICAgICAgICdGcm9tX0FjY291bnQnOiBjdHguaWRlbnRpZmllcixcclxuICAgICAgICAgICAgICAgICAgICAnVG9fQWNjb3VudCc6IG9wdGlvbnMuVG9fQWNjb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAnU2VxJzogb3B0aW9ucy5TZXEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1RpbWVzdGFtcCc6IG9wdGlvbnMuVGltZXN0YW1wLFxyXG4gICAgICAgICAgICAgICAgICAgICdSYW5kb20nOiBvcHRpb25zLlJhbmRvbSxcclxuICAgICAgICAgICAgICAgICAgICAnRmlsZV9TdHJfTWQ1Jzogb3B0aW9ucy5GaWxlX1N0cl9NZDUsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0ZpbGVfU2l6ZSc6IG9wdGlvbnMuRmlsZV9TaXplLFxyXG4gICAgICAgICAgICAgICAgICAgICdGaWxlX1R5cGUnOiBvcHRpb25zLkZpbGVfVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAnU2VydmVyX1Zlcic6IFZFUlNJT05fSU5GTy5TRVJWRVJfVkVSU0lPTixcclxuICAgICAgICAgICAgICAgICAgICAnQXV0aF9LZXknOiBhdXRoa2V5LFxyXG4gICAgICAgICAgICAgICAgICAgICdCdXNpX0lkJzogb3B0aW9ucy5CdXNpX0lkLFxyXG4gICAgICAgICAgICAgICAgICAgICdQa2dGbGFnJzogb3B0aW9ucy5Qa2dGbGFnLFxyXG4gICAgICAgICAgICAgICAgICAgICdTbGljZV9PZmZzZXQnOiBvcHRpb25zLlNsaWNlX09mZnNldCxcclxuICAgICAgICAgICAgICAgICAgICAnU2xpY2VfU2l6ZSc6IG9wdGlvbnMuU2xpY2VfU2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICAnU2xpY2VfRGF0YSc6IG9wdGlvbnMuU2xpY2VfRGF0YVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNiT2ssIGNiRXJyKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL+iOt+WPluivremfs+WSjOaWh+S7tuS4i+i9vUlQ5ZKMYXV0aGtleVxyXG4gICAgICAgIHZhciBwcm90b19nZXRJcEFuZEF1dGhrZXkgPSBmdW5jdGlvbiAoY2JPaywgY2JFcnIpIHtcclxuICAgICAgICAgICAgaWYgKCFjaGVja0xvZ2luKGNiRXJyLCB0cnVlKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICBDb25uTWFuYWdlci5hcGlDYWxsKFNSVl9OQU1FLk9QRU5fSU0sIFwiYXV0aGtleVwiLCB7fSwgY2JPaywgY2JFcnIpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8v5o6l5Y+j6LSo6YeP5LiK5oqlXHJcbiAgICAgICAgdmFyIHByb3RvX3JlcG9ydEFwaVF1YWxpdHkgPSBmdW5jdGlvbiAob3B0aW9ucywgY2JPaywgY2JFcnIpIHtcclxuICAgICAgICAgICAgaWYgKCFjaGVja0xvZ2luKGNiRXJyLCB0cnVlKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICBDb25uTWFuYWdlci5hcGlDYWxsKFNSVl9OQU1FLklNX09QRU5fU1RBVCwgXCJ3ZWJfcmVwb3J0XCIsIG9wdGlvbnMsIGNiT2ssIGNiRXJyKTtcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgdmFyIHByb3RvX2dldExvbmdQb2xsaW5nSWQgPSBmdW5jdGlvbiAob3B0aW9ucywgY2JPaywgY2JFcnIpIHtcclxuICAgICAgICAgICAgaWYgKCFjaGVja0xvZ2luKGNiRXJyLCB0cnVlKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICBDb25uTWFuYWdlci5hcGlDYWxsKFNSVl9OQU1FLk9QRU5fSU0sIFwiZ2V0bG9uZ3BvbGxpbmdpZFwiLCB7fSxcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChyZXNwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2JPayAmJiBjYk9rKHJlc3ApO1xyXG4gICAgICAgICAgICAgICAgfSwgY2JFcnIpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHZhciBwcm90b19hcHBseURvd25sb2FkID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNiT2ssIGNiRXJyKSB7XHJcbiAgICAgICAgICAgIC8v5oqK5LiL6L295Zyw5Z2AcHVzaOWIsG1hcOS4rVxyXG4gICAgICAgICAgICBDb25uTWFuYWdlci5hcGlDYWxsKFNSVl9OQU1FLlBJQywgXCJhcHBseV9kb3dubG9hZFwiLCBvcHRpb25zLCBjYk9rLCBjYkVycik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL2VuZFxyXG4gICAgICAgIGluaXRCcm93c2VySW5mbygpO1xyXG4gICAgICAgIC8vIHNpbmdsZXRvbiBvYmplY3QgQ29ubk1hbmFnZXJcclxuICAgICAgICB2YXIgQ29ubk1hbmFnZXIgPSBuZXcgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgb25Db25uQ2FsbGJhY2sgPSBudWxsOyAvL+Wbnuiwg+WHveaVsFxyXG4gICAgICAgICAgICB0aGlzLmluaXQgPSBmdW5jdGlvbiAob25Db25uTm90aWZ5LCBjYk9rLCBjYkVycikge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9uQ29ubk5vdGlmeSkgb25Db25uQ2FsbGJhY2sgPSBvbkNvbm5Ob3RpZnk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMuY2FsbEJhY2sgPSBmdW5jdGlvbiAoaW5mbykge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9uQ29ubkNhbGxiYWNrKSBvbkNvbm5DYWxsYmFjayhpbmZvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5jbGVhciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIG9uQ29ubkNhbGxiYWNrID0gbnVsbDtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLy/or7fmsYLlkI7lj7DmnI3liqHmjqXlj6NcclxuICAgICAgICAgICAgdGhpcy5hcGlDYWxsID0gZnVuY3Rpb24gKHR5cGUsIGNtZCwgZGF0YSwgY2JPaywgY2JFcnIsIHRpbWVvdXQsIGlzTG9uZ1BvbGxpbmcpIHtcclxuICAgICAgICAgICAgICAgIC8v5bCB6KOF5ZCO5Y+w5pyN5Yqh5o6l5Y+j5Zyw5Z2AXHJcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gZ2V0QXBpVXJsKHR5cGUsIGNtZCwgY2JPaywgY2JFcnIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHVybCA9PSBmYWxzZSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgLy/lj5HotbdhamF46K+35rGCXHJcbiAgICAgICAgICAgICAgICBhamF4UmVxdWVzdEpzb24oXCJQT1NUXCIsIHVybCwgZGF0YSwgdGltZW91dCwgaXNMb25nUG9sbGluZywgZnVuY3Rpb24gKHJlc3ApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZXJyb3JDb2RlID0gbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcEVycm9ySW5mbyA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjbWQgPT0gJ3BpY191cCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5TbGljZV9EYXRhID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmZvID0gXCJcXG4gcmVxdWVzdCB1cmw6IFxcblwiICsgdXJsICsgXCJcXG4gcmVxdWVzdCBib2R5OiBcXG5cIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpICsgXCJcXG4gcmVzcG9uc2U6IFxcblwiICsgSlNPTi5zdHJpbmdpZnkocmVzcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/miJDlip9cclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcC5BY3Rpb25TdGF0dXMgPT0gQUNUSU9OX1NUQVRVUy5PSykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2cuaW5mbyhcIltcIiArIHR5cGUgKyBcIl1bXCIgKyBjbWQgKyBcIl1zdWNjZXNzOiBcIiArIGluZm8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2JPaykgY2JPayhyZXNwKTsgLy/lm57osINcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JDb2RlID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcEVycm9ySW5mbyA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yQ29kZSA9IHJlc3AuRXJyb3JDb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wRXJyb3JJbmZvID0gcmVzcC5FcnJvckluZm87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v5oql6ZSZXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYkVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcC5TcmNFcnJvckluZm8gPSByZXNwLkVycm9ySW5mbztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3AuRXJyb3JJbmZvID0gXCJbXCIgKyB0eXBlICsgXCJdW1wiICsgY21kICsgXCJdZmFpbGVkOiBcIiArIGluZm87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY21kICE9ICdsb25ncG9sbGluZycgfHwgcmVzcC5FcnJvckNvZGUgIT0gbG9uZ1BvbGxpbmdUaW1lT3V0RXJyb3JDb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nLmVycm9yKHJlc3AuRXJyb3JJbmZvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNiRXJyKHJlc3ApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlcG9ydEFwaVF1YWxpdHkoY21kLCBlcnJvckNvZGUsIHRlbXBFcnJvckluZm8pOyAvL+aOpeWPo+i0qOmHj+S4iuaKpVxyXG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNiRXJyICYmIGNiRXJyKGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVwb3J0QXBpUXVhbGl0eShjbWQsIGVyci5FcnJvckNvZGUsIGVyci5FcnJvckluZm8pOyAvL+aOpeWPo+i0qOmHj+S4iuaKpVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBjbGFzcyBTZXNzaW9uXHJcbiAgICAgICAgdmFyIFNlc3Npb24gPSBmdW5jdGlvbiAodHlwZSwgaWQsIG5hbWUsIGljb24sIHRpbWUsIHNlcSkge1xyXG4gICAgICAgICAgICB0aGlzLl9pbXBsID0ge1xyXG4gICAgICAgICAgICAgICAgc2tleTogU2Vzc2lvbi5za2V5KHR5cGUsIGlkKSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IHR5cGUsXHJcbiAgICAgICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogaWNvbixcclxuICAgICAgICAgICAgICAgIHVucmVhZDogMCwgLy/mnKror7vmtojmga/mlbBcclxuICAgICAgICAgICAgICAgIGlzQXV0b1JlYWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdGltZTogdGltZSA+PSAwID8gdGltZSA6IDAsXHJcbiAgICAgICAgICAgICAgICBjdXJNYXhNc2dTZXE6IHNlcSA+PSAwID8gc2VxIDogMCxcclxuICAgICAgICAgICAgICAgIG1zZ3M6IFtdLFxyXG4gICAgICAgICAgICAgICAgaXNGaW5pc2hlZDogMVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgU2Vzc2lvbi5za2V5ID0gZnVuY3Rpb24gKHR5cGUsIGlkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0eXBlICsgaWQ7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBTZXNzaW9uLnByb3RvdHlwZS50eXBlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW1wbC50eXBlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgU2Vzc2lvbi5wcm90b3R5cGUuaWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbXBsLmlkO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgU2Vzc2lvbi5wcm90b3R5cGUubmFtZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ltcGwubmFtZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFNlc3Npb24ucHJvdG90eXBlLmljb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbXBsLmljb247XHJcbiAgICAgICAgfTtcclxuICAgICAgICBTZXNzaW9uLnByb3RvdHlwZS51bnJlYWQgPSBmdW5jdGlvbiAodmFsKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faW1wbC51bnJlYWQgPSB2YWw7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5faW1wbC51bnJlYWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIFNlc3Npb24ucHJvdG90eXBlLmlzRmluaXNoZWQgPSBmdW5jdGlvbiAodmFsKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faW1wbC5pc0ZpbmlzaGVkID0gdmFsO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ltcGwuaXNGaW5pc2hlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgU2Vzc2lvbi5wcm90b3R5cGUudGltZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ltcGwudGltZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFNlc3Npb24ucHJvdG90eXBlLmN1ck1heE1zZ1NlcSA9IGZ1bmN0aW9uIChzZXEpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBzZXEgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pbXBsLmN1ck1heE1zZ1NlcSA9IHNlcTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbXBsLmN1ck1heE1zZ1NlcTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgU2Vzc2lvbi5wcm90b3R5cGUubXNnQ291bnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbXBsLm1zZ3MubGVuZ3RoO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgU2Vzc2lvbi5wcm90b3R5cGUubXNnID0gZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbXBsLm1zZ3NbaW5kZXhdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgU2Vzc2lvbi5wcm90b3R5cGUubXNncyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ltcGwubXNncztcclxuICAgICAgICB9O1xyXG4gICAgICAgIFNlc3Npb24ucHJvdG90eXBlLl9pbXBsX2FkZE1zZyA9IGZ1bmN0aW9uIChtc2csIHVucmVhZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9pbXBsLm1zZ3MucHVzaChtc2cpO1xyXG4gICAgICAgICAgICAvL2lmICghbXNnLmlzU2VuZCAmJiBtc2cudGltZSA+IHRoaXMuX2ltcGwudGltZSlcclxuICAgICAgICAgICAgaWYgKG1zZy50aW1lID4gdGhpcy5faW1wbC50aW1lKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5faW1wbC50aW1lID0gbXNnLnRpbWU7XHJcbiAgICAgICAgICAgIC8vaWYgKCFtc2cuaXNTZW5kICYmIG1zZy5zZXEgPiB0aGlzLl9pbXBsLmN1ck1heE1zZ1NlcSlcclxuICAgICAgICAgICAgaWYgKG1zZy5zZXEgPiB0aGlzLl9pbXBsLmN1ck1heE1zZ1NlcSlcclxuICAgICAgICAgICAgICAgIHRoaXMuX2ltcGwuY3VyTWF4TXNnU2VxID0gbXNnLnNlcTtcclxuICAgICAgICAgICAgLy/oh6rlt7Hlj5HpgIHnmoTmtojmga/kuI3orqHlhaXmnKror7vmlbBcclxuICAgICAgICAgICAgaWYgKCFtc2cuaXNTZW5kICYmICF0aGlzLl9pbXBsLmlzQXV0b1JlYWQgJiYgdW5yZWFkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pbXBsLnVucmVhZCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvL2NsYXNzIEMyQ01zZ1JlYWRlZEl0ZW1cclxuICAgICAgICB2YXIgQzJDTXNnUmVhZGVkSXRlbSA9IGZ1bmN0aW9uICh0b0FjY291bnQsIGxhc3RlZE1zZ1RpbWUpIHtcclxuICAgICAgICAgICAgdGhpcy50b0FjY291bnQgPSB0b0FjY291bnQ7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdGVkTXNnVGltZSA9IGxhc3RlZE1zZ1RpbWU7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy8gY2xhc3MgTXNnXHJcbiAgICAgICAgdmFyIE1zZyA9IGZ1bmN0aW9uIChzZXNzLCBpc1NlbmQsIHNlcSwgcmFuZG9tLCB0aW1lLCBmcm9tQWNjb3VudCwgc3ViVHlwZSwgZnJvbUFjY291bnROaWNrLCBmcm9tQWNjb3VudEhlYWR1cmwpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXNzID0gc2VzcztcclxuICAgICAgICAgICAgdGhpcy5zdWJUeXBlID0gc3ViVHlwZSA+PSAwID8gc3ViVHlwZSA6IDA7IC8v5raI5oGv57G75Z6LLGMyY+a2iOaBr+aXtu+8jHR5cGXlj5blgLzkuLow77ybZ3JvdXDmtojmga/ml7bvvIx0eXBl5Y+W5YC8MOWSjDHvvIwwLeaZrumAmue+pOa2iOaBr++8jDEt576k5o+Q56S65raI5oGvXHJcbiAgICAgICAgICAgIHRoaXMuZnJvbUFjY291bnQgPSBmcm9tQWNjb3VudDtcclxuICAgICAgICAgICAgdGhpcy5mcm9tQWNjb3VudE5pY2sgPSBmcm9tQWNjb3VudE5pY2sgPyBmcm9tQWNjb3VudE5pY2sgOiBmcm9tQWNjb3VudDtcclxuICAgICAgICAgICAgdGhpcy5mcm9tQWNjb3VudEhlYWR1cmwgPSBmcm9tQWNjb3VudEhlYWR1cmwgfHwgbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5pc1NlbmQgPSBCb29sZWFuKGlzU2VuZCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VxID0gc2VxID49IDAgPyBzZXEgOiBuZXh0U2VxKCk7XHJcbiAgICAgICAgICAgIHRoaXMucmFuZG9tID0gcmFuZG9tID49IDAgPyByYW5kb20gOiBjcmVhdGVSYW5kb20oKTtcclxuICAgICAgICAgICAgdGhpcy50aW1lID0gdGltZSA+PSAwID8gdGltZSA6IHVuaXh0aW1lKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbXMgPSBbXTtcclxuICAgICAgICAgICAgdmFyIHR5cGUgPSBzZXNzLnR5cGUoKTtcclxuICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFNFU1NJT05fVFlQRS5HUk9VUDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgU0VTU0lPTl9UWVBFLkMyQzpcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH07XHJcbiAgICAgICAgTXNnLnByb3RvdHlwZS5nZXRTZXNzaW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXNzO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgTXNnLnByb3RvdHlwZS5nZXRUeXBlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdWJUeXBlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgTXNnLnByb3RvdHlwZS5nZXRTdWJUeXBlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdWJUeXBlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgTXNnLnByb3RvdHlwZS5nZXRGcm9tQWNjb3VudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZnJvbUFjY291bnQ7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBNc2cucHJvdG90eXBlLmdldEZyb21BY2NvdW50TmljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZnJvbUFjY291bnROaWNrO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgTXNnLnByb3RvdHlwZS5nZXRJc1NlbmQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzU2VuZDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIE1zZy5wcm90b3R5cGUuZ2V0U2VxID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXE7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBNc2cucHJvdG90eXBlLmdldFRpbWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRpbWU7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBNc2cucHJvdG90eXBlLmdldFJhbmRvbSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmFuZG9tO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgTXNnLnByb3RvdHlwZS5nZXRFbGVtcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWxlbXM7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBNc2cucHJvdG90eXBlLmdldE1zZ1VuaXF1ZUlkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy51bmlxdWVJZDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8v5paH5pysXHJcbiAgICAgICAgTXNnLnByb3RvdHlwZS5hZGRUZXh0ID0gZnVuY3Rpb24gKHRleHQpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRFbGVtKG5ldyB3ZWJpbS5Nc2cuRWxlbShNU0dfRUxFTUVOVF9UWVBFLlRFWFQsIHRleHQpKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8v6KGo5oOFXHJcbiAgICAgICAgTXNnLnByb3RvdHlwZS5hZGRGYWNlID0gZnVuY3Rpb24gKGZhY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRFbGVtKG5ldyB3ZWJpbS5Nc2cuRWxlbShNU0dfRUxFTUVOVF9UWVBFLkZBQ0UsIGZhY2UpKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8v5Zu+54mHXHJcbiAgICAgICAgTXNnLnByb3RvdHlwZS5hZGRJbWFnZSA9IGZ1bmN0aW9uIChpbWFnZSkge1xyXG4gICAgICAgICAgICB0aGlzLmFkZEVsZW0obmV3IHdlYmltLk1zZy5FbGVtKE1TR19FTEVNRU5UX1RZUEUuSU1BR0UsIGltYWdlKSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvL+WcsOeQhuS9jee9rlxyXG4gICAgICAgIE1zZy5wcm90b3R5cGUuYWRkTG9jYXRpb24gPSBmdW5jdGlvbiAobG9jYXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRFbGVtKG5ldyB3ZWJpbS5Nc2cuRWxlbShNU0dfRUxFTUVOVF9UWVBFLkxPQ0FUSU9OLCBsb2NhdGlvbikpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy/mlofku7ZcclxuICAgICAgICBNc2cucHJvdG90eXBlLmFkZEZpbGUgPSBmdW5jdGlvbiAoZmlsZSkge1xyXG4gICAgICAgICAgICB0aGlzLmFkZEVsZW0obmV3IHdlYmltLk1zZy5FbGVtKE1TR19FTEVNRU5UX1RZUEUuRklMRSwgZmlsZSkpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy/oh6rlrprkuYlcclxuICAgICAgICBNc2cucHJvdG90eXBlLmFkZEN1c3RvbSA9IGZ1bmN0aW9uIChjdXN0b20pIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRFbGVtKG5ldyB3ZWJpbS5Nc2cuRWxlbShNU0dfRUxFTUVOVF9UWVBFLkNVU1RPTSwgY3VzdG9tKSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBNc2cucHJvdG90eXBlLmFkZEVsZW0gPSBmdW5jdGlvbiAoZWxlbSkge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1zLnB1c2goZWxlbSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBNc2cucHJvdG90eXBlLnRvSHRtbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGh0bWwgPSBcIlwiO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpIGluIHRoaXMuZWxlbXMpIHtcclxuICAgICAgICAgICAgICAgIHZhciBlbGVtID0gdGhpcy5lbGVtc1tpXTtcclxuICAgICAgICAgICAgICAgIGh0bWwgKz0gZWxlbS50b0h0bWwoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gaHRtbDtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBjbGFzcyBNc2cuRWxlbVxyXG4gICAgICAgIE1zZy5FbGVtID0gZnVuY3Rpb24gKHR5cGUsIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudCA9IHZhbHVlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgTXNnLkVsZW0ucHJvdG90eXBlLmdldFR5cGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnR5cGU7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBNc2cuRWxlbS5wcm90b3R5cGUuZ2V0Q29udGVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udGVudDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIE1zZy5FbGVtLnByb3RvdHlwZS50b0h0bWwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBodG1sO1xyXG4gICAgICAgICAgICBodG1sID0gdGhpcy5jb250ZW50LnRvSHRtbCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gaHRtbDtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBjbGFzcyBNc2cuRWxlbS5UZXh0XHJcbiAgICAgICAgTXNnLkVsZW0uVGV4dCA9IGZ1bmN0aW9uICh0ZXh0KSB7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dCA9IHRvb2wueHNzRmlsdGVyKHRleHQpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgTXNnLkVsZW0uVGV4dC5wcm90b3R5cGUuZ2V0VGV4dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGV4dDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIE1zZy5FbGVtLlRleHQucHJvdG90eXBlLnRvSHRtbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGV4dDtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBjbGFzcyBNc2cuRWxlbS5GYWNlXHJcbiAgICAgICAgTXNnLkVsZW0uRmFjZSA9IGZ1bmN0aW9uIChpbmRleCwgZGF0YSkge1xyXG4gICAgICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBNc2cuRWxlbS5GYWNlLnByb3RvdHlwZS5nZXRJbmRleCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5kZXg7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBNc2cuRWxlbS5GYWNlLnByb3RvdHlwZS5nZXREYXRhID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgTXNnLkVsZW0uRmFjZS5wcm90b3R5cGUudG9IdG1sID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgZmFjZVVybCA9IG51bGw7XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGVtb3Rpb25EYXRhSW5kZXhzW3RoaXMuZGF0YV07XHJcbiAgICAgICAgICAgIHZhciBlbW90aW9uID0gZW1vdGlvbnNbaW5kZXhdO1xyXG4gICAgICAgICAgICBpZiAoZW1vdGlvbiAmJiBlbW90aW9uWzFdKSB7XHJcbiAgICAgICAgICAgICAgICBmYWNlVXJsID0gZW1vdGlvblsxXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZmFjZVVybCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9J1wiICsgZmFjZVVybCArIFwiJy8+XCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8g5Zyw55CG5L2N572u5raI5oGvIGNsYXNzIE1zZy5FbGVtLkxvY2F0aW9uXHJcbiAgICAgICAgTXNnLkVsZW0uTG9jYXRpb24gPSBmdW5jdGlvbiAobG9uZ2l0dWRlLCBsYXRpdHVkZSwgZGVzYykge1xyXG4gICAgICAgICAgICB0aGlzLmxhdGl0dWRlID0gbGF0aXR1ZGU7IC8v57qs5bqmXHJcbiAgICAgICAgICAgIHRoaXMubG9uZ2l0dWRlID0gbG9uZ2l0dWRlOyAvL+e7j+W6plxyXG4gICAgICAgICAgICB0aGlzLmRlc2MgPSBkZXNjOyAvL+aPj+i/sFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgTXNnLkVsZW0uTG9jYXRpb24ucHJvdG90eXBlLmdldExhdGl0dWRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sYXRpdHVkZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIE1zZy5FbGVtLkxvY2F0aW9uLnByb3RvdHlwZS5nZXRMb25naXR1ZGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvbmdpdHVkZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIE1zZy5FbGVtLkxvY2F0aW9uLnByb3RvdHlwZS5nZXREZXNjID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZXNjO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgTXNnLkVsZW0uTG9jYXRpb24ucHJvdG90eXBlLnRvSHRtbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuICfnu4/luqY9JyArIHRoaXMubG9uZ2l0dWRlICsgJyznuqzluqY9JyArIHRoaXMubGF0aXR1ZGUgKyAnLOaPj+i/sD0nICsgdGhpcy5kZXNjO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8v5Zu+54mH5raI5oGvXHJcbiAgICAgICAgLy8gY2xhc3MgTXNnLkVsZW0uSW1hZ2VzXHJcbiAgICAgICAgTXNnLkVsZW0uSW1hZ2VzID0gZnVuY3Rpb24gKGltYWdlSWQsIGZvcm1hdCkge1xyXG4gICAgICAgICAgICB0aGlzLlVVSUQgPSBpbWFnZUlkO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGZvcm1hdCAhPT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgICAgIGZvcm1hdCA9IHBhcnNlSW50KElNQUdFX0ZPUk1BVFtmb3JtYXRdIHx8IElNQUdFX0ZPUk1BVFsnVU5LTk9XTiddLCAxMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5JbWFnZUZvcm1hdCA9IGZvcm1hdDtcclxuICAgICAgICAgICAgdGhpcy5JbWFnZUluZm9BcnJheSA9IFtdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgTXNnLkVsZW0uSW1hZ2VzLnByb3RvdHlwZS5hZGRJbWFnZSA9IGZ1bmN0aW9uIChpbWFnZSkge1xyXG4gICAgICAgICAgICB0aGlzLkltYWdlSW5mb0FycmF5LnB1c2goaW1hZ2UpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgTXNnLkVsZW0uSW1hZ2VzLnByb3RvdHlwZS50b0h0bWwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBzbWFsbEltYWdlID0gdGhpcy5nZXRJbWFnZShJTUFHRV9UWVBFLlNNQUxMKTtcclxuICAgICAgICAgICAgdmFyIGJpZ0ltYWdlID0gdGhpcy5nZXRJbWFnZShJTUFHRV9UWVBFLkxBUkdFKTtcclxuICAgICAgICAgICAgdmFyIG9yaUltYWdlID0gdGhpcy5nZXRJbWFnZShJTUFHRV9UWVBFLk9SSUdJTik7XHJcbiAgICAgICAgICAgIGlmICghYmlnSW1hZ2UpIHtcclxuICAgICAgICAgICAgICAgIGJpZ0ltYWdlID0gc21hbGxJbWFnZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIW9yaUltYWdlKSB7XHJcbiAgICAgICAgICAgICAgICBvcmlJbWFnZSA9IHNtYWxsSW1hZ2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9J1wiICsgc21hbGxJbWFnZS5nZXRVcmwoKSArIFwiI1wiICsgYmlnSW1hZ2UuZ2V0VXJsKCkgKyBcIiNcIiArIG9yaUltYWdlLmdldFVybCgpICsgXCInIHN0eWxlPSdDVVJTT1I6IGhhbmQnIGlkPSdcIiArIHRoaXMuZ2V0SW1hZ2VJZCgpICsgXCInIGJpZ0ltZ1VybD0nXCIgKyBiaWdJbWFnZS5nZXRVcmwoKSArIFwiJyBvbmNsaWNrPSdpbWFnZUNsaWNrKHRoaXMpJyAvPlwiO1xyXG5cclxuICAgICAgICB9O1xyXG4gICAgICAgIE1zZy5FbGVtLkltYWdlcy5wcm90b3R5cGUuZ2V0SW1hZ2VJZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuVVVJRDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIE1zZy5FbGVtLkltYWdlcy5wcm90b3R5cGUuZ2V0SW1hZ2VGb3JtYXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLkltYWdlRm9ybWF0O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgTXNnLkVsZW0uSW1hZ2VzLnByb3RvdHlwZS5nZXRJbWFnZSA9IGZ1bmN0aW9uICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5JbWFnZUluZm9BcnJheSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuSW1hZ2VJbmZvQXJyYXlbaV0uZ2V0VHlwZSgpID09IHR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5JbWFnZUluZm9BcnJheVtpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgaW1nID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5JbWFnZUluZm9BcnJheS5mb3JFYWNoKGZ1bmN0aW9uIChpbWFnZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGltYWdlLmdldFR5cGUoKSA9PSB0eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nID0gaW1hZ2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybiBpbWc7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBjbGFzcyBNc2cuRWxlbS5JbWFnZXMuSW1hZ2VcclxuICAgICAgICBNc2cuRWxlbS5JbWFnZXMuSW1hZ2UgPSBmdW5jdGlvbiAodHlwZSwgc2l6ZSwgd2lkdGgsIGhlaWdodCwgdXJsKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICAgICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XHJcbiAgICAgICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgICAgIHRoaXMudXJsID0gdXJsO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgTXNnLkVsZW0uSW1hZ2VzLkltYWdlLnByb3RvdHlwZS5nZXRUeXBlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50eXBlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgTXNnLkVsZW0uSW1hZ2VzLkltYWdlLnByb3RvdHlwZS5nZXRTaXplID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zaXplO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgTXNnLkVsZW0uSW1hZ2VzLkltYWdlLnByb3RvdHlwZS5nZXRXaWR0aCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMud2lkdGg7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBNc2cuRWxlbS5JbWFnZXMuSW1hZ2UucHJvdG90eXBlLmdldEhlaWdodCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGVpZ2h0O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgTXNnLkVsZW0uSW1hZ2VzLkltYWdlLnByb3RvdHlwZS5nZXRVcmwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVybDtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBjbGFzcyBNc2cuRWxlbS5Tb3VuZFxyXG4gICAgICAgIE1zZy5FbGVtLlNvdW5kID0gZnVuY3Rpb24gKHV1aWQsIHNlY29uZCwgc2l6ZSwgc2VuZGVySWQsIHJlY2VpdmVySWQsIGRvd25GbGFnLCBjaGF0VHlwZSkge1xyXG4gICAgICAgICAgICB0aGlzLnV1aWQgPSB1dWlkOyAvL+aWh+S7tmlkXHJcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kID0gc2Vjb25kOyAvL+aXtumVv++8jOWNleS9je+8muenklxyXG4gICAgICAgICAgICB0aGlzLnNpemUgPSBzaXplOyAvL+Wkp+Wwj++8jOWNleS9je+8muWtl+iKglxyXG4gICAgICAgICAgICB0aGlzLnNlbmRlcklkID0gc2VuZGVySWQ7IC8v5Y+R6YCB6ICFXHJcbiAgICAgICAgICAgIHRoaXMucmVjZWl2ZXJJZCA9IHJlY2VpdmVySWQ7IC8v5o6l5pS25pa5aWRcclxuICAgICAgICAgICAgdGhpcy5kb3duRmxhZyA9IGRvd25GbGFnOyAvL+S4i+i9veagh+W/l+S9jVxyXG4gICAgICAgICAgICB0aGlzLmJ1c2lJZCA9IGNoYXRUeXBlID09IFNFU1NJT05fVFlQRS5DMkMgPyAyIDogMTsgLy9idXNpX2lkICggMe+8mue+pCAgICAyOkMyQylcclxuXHJcbiAgICAgICAgICAgIC8v5qC55o2u5LiN5ZCM5oOF5Ya15ouJ5Y+W5pWw5o2uXHJcbiAgICAgICAgICAgIC8v5piv5ZCm6ZyA6KaB55Sz6K+35LiL6L295Zyw5Z2AICAwOuWIsOaetuW5s+eUs+ivtyAgMTrliLBjb3PnlLPor7cgIDI65LiN6ZyA6KaB55Sz6K+3LCDnm7TmjqXmi791cmzkuIvovb1cclxuICAgICAgICAgICAgaWYgKHRoaXMuZG93bkZsYWcgIT09IHVuZGVmaW5lZCAmJiB0aGlzLmJ1c2lJZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBnZXRGaWxlRG93blVybFYyKHV1aWQsIHNlbmRlcklkLCBzZWNvbmQsIGRvd25GbGFnLCByZWNlaXZlcklkLCB0aGlzLmJ1c2lJZCwgVVBMT0FEX1JFU19UWVBFLlNPVU5EKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZG93blVybCA9IGdldFNvdW5kRG93blVybCh1dWlkLCBzZW5kZXJJZCwgc2Vjb25kKTsgLy/kuIvovb3lnLDlnYBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgTXNnLkVsZW0uU291bmQucHJvdG90eXBlLmdldFVVSUQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnV1aWQ7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBNc2cuRWxlbS5Tb3VuZC5wcm90b3R5cGUuZ2V0U2Vjb25kID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZWNvbmQ7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBNc2cuRWxlbS5Tb3VuZC5wcm90b3R5cGUuZ2V0U2l6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2l6ZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIE1zZy5FbGVtLlNvdW5kLnByb3RvdHlwZS5nZXRTZW5kZXJJZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VuZGVySWQ7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBNc2cuRWxlbS5Tb3VuZC5wcm90b3R5cGUuZ2V0RG93blVybCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZG93blVybDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIE1zZy5FbGVtLlNvdW5kLnByb3RvdHlwZS50b0h0bWwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChCUk9XU0VSX0lORk8udHlwZSA9PSAnaWUnICYmIHBhcnNlSW50KEJST1dTRVJfSU5GTy52ZXIpIDw9IDgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnW+i/meaYr+S4gOadoeivremfs+a2iOaBr11kZW1v5pqC5LiN5pSv5oyBaWU4KOWQqynku6XkuIvmtY/op4jlmajmkq3mlL7or63pn7Ms6K+t6Z+zVVJMOicgKyB0aGlzLmRvd25Vcmw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuICc8YXVkaW8gaWQ9XCJ1dWlkXycgKyB0aGlzLnV1aWQgKyAnXCIgc3JjPVwiJyArIHRoaXMuZG93blVybCArICdcIiBjb250cm9scz1cImNvbnRyb2xzXCIgb25wbGF5PVwib25DaGFuZ2VQbGF5QXVkaW8odGhpcylcIiBwcmVsb2FkPVwibm9uZVwiPjwvYXVkaW8+JztcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBjbGFzcyBNc2cuRWxlbS5GaWxlXHJcbiAgICAgICAgTXNnLkVsZW0uRmlsZSA9IGZ1bmN0aW9uICh1dWlkLCBuYW1lLCBzaXplLCBzZW5kZXJJZCwgcmVjZWl2ZXJJZCwgZG93bkZsYWcsIGNoYXRUeXBlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXVpZCA9IHV1aWQ7IC8v5paH5Lu2aWRcclxuICAgICAgICAgICAgdGhpcy5uYW1lID0gbmFtZTsgLy/mlofku7blkI1cclxuICAgICAgICAgICAgdGhpcy5zaXplID0gc2l6ZTsgLy/lpKflsI/vvIzljZXkvY3vvJrlrZfoioJcclxuICAgICAgICAgICAgdGhpcy5zZW5kZXJJZCA9IHNlbmRlcklkOyAvL+WPkemAgeiAhVxyXG4gICAgICAgICAgICB0aGlzLnJlY2VpdmVySWQgPSByZWNlaXZlcklkOyAvL+aOpeaUtuaWuWlkXHJcbiAgICAgICAgICAgIHRoaXMuZG93bkZsYWcgPSBkb3duRmxhZzsgLy/kuIvovb3moIflv5fkvY1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuYnVzaUlkID0gY2hhdFR5cGUgPT0gU0VTU0lPTl9UWVBFLkMyQyA/IDIgOiAxOyAvL2J1c2lfaWQgKCAx77ya576kICAgIDI6QzJDKVxyXG4gICAgICAgICAgICAvL+agueaNruS4jeWQjOaDheWGteaLieWPluaVsOaNrlxyXG4gICAgICAgICAgICAvL+aYr+WQpumcgOimgeeUs+ivt+S4i+i9veWcsOWdgCAgMDrliLDmnrblubPnlLPor7cgIDE65YiwY29z55Sz6K+3ICAyOuS4jemcgOimgeeUs+ivtywg55u05o6l5ou/dXJs5LiL6L29XHJcbiAgICAgICAgICAgIGlmIChkb3duRmxhZyAhPT0gdW5kZWZpbmVkICYmIGJ1c2lJZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBnZXRGaWxlRG93blVybFYyKHV1aWQsIHNlbmRlcklkLCBuYW1lLCBkb3duRmxhZywgcmVjZWl2ZXJJZCwgdGhpcy5idXNpSWQsIFVQTE9BRF9SRVNfVFlQRS5GSUxFKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZG93blVybCA9IGdldEZpbGVEb3duVXJsKHV1aWQsIHNlbmRlcklkLCBuYW1lKTsgLy/kuIvovb3lnLDlnYBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgTXNnLkVsZW0uRmlsZS5wcm90b3R5cGUuZ2V0VVVJRCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudXVpZDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIE1zZy5FbGVtLkZpbGUucHJvdG90eXBlLmdldE5hbWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBNc2cuRWxlbS5GaWxlLnByb3RvdHlwZS5nZXRTaXplID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zaXplO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgTXNnLkVsZW0uRmlsZS5wcm90b3R5cGUuZ2V0U2VuZGVySWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbmRlcklkO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgTXNnLkVsZW0uRmlsZS5wcm90b3R5cGUuZ2V0RG93blVybCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZG93blVybDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIE1zZy5FbGVtLkZpbGUucHJvdG90eXBlLmdldERvd25GbGFnID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kb3duRmxhZztcclxuICAgICAgICB9O1xyXG4gICAgICAgIE1zZy5FbGVtLkZpbGUucHJvdG90eXBlLnRvSHRtbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGZpbGVTaXplLCB1bml0U3RyO1xyXG4gICAgICAgICAgICBmaWxlU2l6ZSA9IHRoaXMuc2l6ZTtcclxuICAgICAgICAgICAgdW5pdFN0ciA9IFwiQnl0ZVwiO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zaXplID49IDEwMjQpIHtcclxuICAgICAgICAgICAgICAgIGZpbGVTaXplID0gTWF0aC5yb3VuZCh0aGlzLnNpemUgLyAxMDI0KTtcclxuICAgICAgICAgICAgICAgIHVuaXRTdHIgPSBcIktCXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHV1aWQ6IHRoaXMudXVpZCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgICAgICAgICAgIHNpemU6IGZpbGVTaXplLFxyXG4gICAgICAgICAgICAgICAgdW5pdFN0cjogdW5pdFN0clxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIGNsYXNzIE1zZy5FbGVtLkdyb3VwVGlwIOe+pOaPkOekuua2iOaBr+WvueixoVxyXG4gICAgICAgIE1zZy5FbGVtLkdyb3VwVGlwID0gZnVuY3Rpb24gKG9wVHlwZSwgb3BVc2VySWQsIGdyb3VwSWQsIGdyb3VwTmFtZSwgdXNlcklkTGlzdCwgdXNlcmluZm8pIHtcclxuICAgICAgICAgICAgdGhpcy5vcFR5cGUgPSBvcFR5cGU7IC8v5pON5L2c57G75Z6LXHJcbiAgICAgICAgICAgIHRoaXMub3BVc2VySWQgPSBvcFVzZXJJZDsgLy/mk43kvZzogIVpZFxyXG4gICAgICAgICAgICB0aGlzLmdyb3VwSWQgPSBncm91cElkOyAvL+e+pGlkXHJcbiAgICAgICAgICAgIHRoaXMuZ3JvdXBOYW1lID0gZ3JvdXBOYW1lOyAvL+e+pOWQjeensFxyXG4gICAgICAgICAgICB0aGlzLnVzZXJJZExpc3QgPSB1c2VySWRMaXN0ID8gdXNlcklkTGlzdCA6IFtdOyAvL+iiq+aTjeS9nOeahOeUqOaIt2lk5YiX6KGoXHJcbiAgICAgICAgICAgIHRoaXMuZ3JvdXBJbmZvTGlzdCA9IFtdOyAvL+aWsOeahOe+pOi1hOaWmeS/oeaBr++8jOe+pOi1hOaWmeWPmOabtOaXtuaJjeacieWAvFxyXG4gICAgICAgICAgICB0aGlzLm1lbWJlckluZm9MaXN0ID0gW107IC8v5paw55qE576k5oiQ5ZGY6LWE5paZ5L+h5oGv77yM576k5oiQ5ZGY6LWE5paZ5Y+Y5pu05pe25omN5pyJ5YC8XHJcbiAgICAgICAgICAgIHRoaXMuZ3JvdXBNZW1iZXJOdW0gPSBudWxsOyAvL+e+pOaIkOWRmOaVsO+8jOaTjeS9nOexu+Wei+S4uuWKoOe+pOaIluiAhemAgOe+pOaXtuaJjeacieWAvFxyXG4gICAgICAgICAgICB0aGlzLnVzZXJpbmZvID0gdXNlcmluZm8gPyB1c2VyaW5mbyA6IFtdOyAvL+iiq+aTjeS9nOeahOeUqOaIt+S/oeaBr+WIl+ihqOWIl+ihqFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgTXNnLkVsZW0uR3JvdXBUaXAucHJvdG90eXBlLmFkZEdyb3VwSW5mbyA9IGZ1bmN0aW9uIChncm91cEluZm8pIHtcclxuICAgICAgICAgICAgdGhpcy5ncm91cEluZm9MaXN0LnB1c2goZ3JvdXBJbmZvKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIE1zZy5FbGVtLkdyb3VwVGlwLnByb3RvdHlwZS5hZGRNZW1iZXJJbmZvID0gZnVuY3Rpb24gKG1lbWJlckluZm8pIHtcclxuICAgICAgICAgICAgdGhpcy5tZW1iZXJJbmZvTGlzdC5wdXNoKG1lbWJlckluZm8pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgTXNnLkVsZW0uR3JvdXBUaXAucHJvdG90eXBlLmdldE9wVHlwZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3BUeXBlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgTXNnLkVsZW0uR3JvdXBUaXAucHJvdG90eXBlLmdldE9wVXNlcklkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcFVzZXJJZDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIE1zZy5FbGVtLkdyb3VwVGlwLnByb3RvdHlwZS5nZXRHcm91cElkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ncm91cElkO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgTXNnLkVsZW0uR3JvdXBUaXAucHJvdG90eXBlLmdldEdyb3VwTmFtZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ3JvdXBOYW1lO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgTXNnLkVsZW0uR3JvdXBUaXAucHJvdG90eXBlLmdldFVzZXJJZExpc3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVzZXJJZExpc3Q7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBNc2cuRWxlbS5Hcm91cFRpcC5wcm90b3R5cGUuZ2V0VXNlckluZm8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVzZXJpbmZvO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgTXNnLkVsZW0uR3JvdXBUaXAucHJvdG90eXBlLmdldEdyb3VwSW5mb0xpc3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdyb3VwSW5mb0xpc3Q7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBNc2cuRWxlbS5Hcm91cFRpcC5wcm90b3R5cGUuZ2V0TWVtYmVySW5mb0xpc3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1lbWJlckluZm9MaXN0O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgTXNnLkVsZW0uR3JvdXBUaXAucHJvdG90eXBlLmdldEdyb3VwTWVtYmVyTnVtID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ncm91cE1lbWJlck51bTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIE1zZy5FbGVtLkdyb3VwVGlwLnByb3RvdHlwZS5zZXRHcm91cE1lbWJlck51bSA9IGZ1bmN0aW9uIChncm91cE1lbWJlck51bSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ncm91cE1lbWJlck51bSA9IGdyb3VwTWVtYmVyTnVtO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgTXNnLkVsZW0uR3JvdXBUaXAucHJvdG90eXBlLnRvSHRtbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHRleHQgPSBcIlvnvqTmj5DnpLrmtojmga9dXCI7XHJcbiAgICAgICAgICAgIHZhciBtYXhJbmRleCA9IEdST1VQX1RJUF9NQVhfVVNFUl9DT1VOVCAtIDE7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5vcFR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgR1JPVVBfVElQX1RZUEUuSk9JTjogLy/liqDlhaXnvqRcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IHRoaXMub3BVc2VySWQgKyBcIumCgOivt+S6hlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG0gaW4gdGhpcy51c2VySWRMaXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gdGhpcy51c2VySWRMaXN0W21dICsgXCIsXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnVzZXJJZExpc3QubGVuZ3RoID4gR1JPVVBfVElQX01BWF9VU0VSX0NPVU5UICYmIG0gPT0gbWF4SW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gXCLnrYlcIiArIHRoaXMudXNlcklkTGlzdC5sZW5ndGggKyBcIuS6ulwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBcIuWKoOWFpeivpee+pFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBHUk9VUF9USVBfVFlQRS5RVUlUOiAvL+mAgOWHuue+pFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQgKz0gdGhpcy5vcFVzZXJJZCArIFwi5Li75Yqo6YCA5Ye66K+l576kXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdST1VQX1RJUF9UWVBFLktJQ0s6IC8v6Lii5Ye6576kXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dCArPSB0aGlzLm9wVXNlcklkICsgXCLlsIZcIjtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBtIGluIHRoaXMudXNlcklkTGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IHRoaXMudXNlcklkTGlzdFttXSArIFwiLFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy51c2VySWRMaXN0Lmxlbmd0aCA+IEdST1VQX1RJUF9NQVhfVVNFUl9DT1VOVCAmJiBtID09IG1heEluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IFwi562JXCIgKyB0aGlzLnVzZXJJZExpc3QubGVuZ3RoICsgXCLkurpcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQgKz0gXCLouKLlh7ror6XnvqRcIjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgR1JPVVBfVElQX1RZUEUuU0VUX0FETUlOOiAvL+iuvue9rueuoeeQhuWRmFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQgKz0gdGhpcy5vcFVzZXJJZCArIFwi5bCGXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbSBpbiB0aGlzLnVzZXJJZExpc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSB0aGlzLnVzZXJJZExpc3RbbV0gKyBcIixcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudXNlcklkTGlzdC5sZW5ndGggPiBHUk9VUF9USVBfTUFYX1VTRVJfQ09VTlQgJiYgbSA9PSBtYXhJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBcIuetiVwiICsgdGhpcy51c2VySWRMaXN0Lmxlbmd0aCArIFwi5Lq6XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IFwi6K6+5Li6566h55CG5ZGYXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdST1VQX1RJUF9UWVBFLkNBTkNFTF9BRE1JTjogLy/lj5bmtojnrqHnkIblkZhcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IHRoaXMub3BVc2VySWQgKyBcIuWPlua2iFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG0gaW4gdGhpcy51c2VySWRMaXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gdGhpcy51c2VySWRMaXN0W21dICsgXCIsXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnVzZXJJZExpc3QubGVuZ3RoID4gR1JPVVBfVElQX01BWF9VU0VSX0NPVU5UICYmIG0gPT0gbWF4SW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gXCLnrYlcIiArIHRoaXMudXNlcklkTGlzdC5sZW5ndGggKyBcIuS6ulwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBcIueahOeuoeeQhuWRmOi1hOagvFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIEdST1VQX1RJUF9UWVBFLk1PRElGWV9HUk9VUF9JTkZPOiAvL+e+pOi1hOaWmeWPmOabtFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQgKz0gdGhpcy5vcFVzZXJJZCArIFwi5L+u5pS55LqG576k6LWE5paZ77yaXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbSBpbiB0aGlzLmdyb3VwSW5mb0xpc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHR5cGUgPSB0aGlzLmdyb3VwSW5mb0xpc3RbbV0uZ2V0VHlwZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmdyb3VwSW5mb0xpc3RbbV0uZ2V0VmFsdWUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEdST1VQX1RJUF9NT0RJRllfR1JPVVBfSU5GT19UWVBFLkZBQ0VfVVJMOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gXCLnvqTlpLTlg4/kuLpcIiArIHZhbHVlICsgXCI7IFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBHUk9VUF9USVBfTU9ESUZZX0dST1VQX0lORk9fVFlQRS5OQU1FOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gXCLnvqTlkI3np7DkuLpcIiArIHZhbHVlICsgXCI7IFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBHUk9VUF9USVBfTU9ESUZZX0dST1VQX0lORk9fVFlQRS5PV05FUjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IFwi576k5Li75Li6XCIgKyB2YWx1ZSArIFwiOyBcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgR1JPVVBfVElQX01PRElGWV9HUk9VUF9JTkZPX1RZUEUuTk9USUZJQ0FUSU9OOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gXCLnvqTlhazlkYrkuLpcIiArIHZhbHVlICsgXCI7IFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBHUk9VUF9USVBfTU9ESUZZX0dST1VQX0lORk9fVFlQRS5JTlRST0RVQ1RJT046XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBcIue+pOeugOS7i+S4ulwiICsgdmFsdWUgKyBcIjsgXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gXCLmnKrnn6Xkv6Hmga/kuLo6dHlwZT1cIiArIHR5cGUgKyBcIix2YWx1ZT1cIiArIHZhbHVlICsgXCI7IFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgR1JPVVBfVElQX1RZUEUuTU9ESUZZX01FTUJFUl9JTkZPOiAvL+e+pOaIkOWRmOi1hOaWmeWPmOabtCjnpoHoqIDml7bpl7QpXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dCArPSB0aGlzLm9wVXNlcklkICsgXCLkv67mlLnkuobnvqTmiJDlkZjotYTmlpk6XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbSBpbiB0aGlzLm1lbWJlckluZm9MaXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1c2VySWQgPSB0aGlzLm1lbWJlckluZm9MaXN0W21dLmdldFVzZXJJZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2h1dHVwVGltZSA9IHRoaXMubWVtYmVySW5mb0xpc3RbbV0uZ2V0U2h1dHVwVGltZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IHVzZXJJZCArIFwiOiBcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNodXR1cFRpbWUgIT0gbnVsbCAmJiBzaHV0dXBUaW1lICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaHV0dXBUaW1lID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IFwi5Y+W5raI56aB6KiAOyBcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBcIuemgeiogFwiICsgc2h1dHVwVGltZSArIFwi56eSOyBcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gXCIgc2h1dHVwVGltZeS4uuepulwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1lbWJlckluZm9MaXN0Lmxlbmd0aCA+IEdST1VQX1RJUF9NQVhfVVNFUl9DT1VOVCAmJiBtID09IG1heEluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IFwi562JXCIgKyB0aGlzLm1lbWJlckluZm9MaXN0Lmxlbmd0aCArIFwi5Lq6XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIEdST1VQX1RJUF9UWVBFLlJFQURFRDogLy/mtojmga/lt7Lor7tcclxuICAgICAgICAgICAgICAgICAgICAvKiovXHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmluZm8oXCLmtojmga/lt7Lor7vlkIzmraVcIilcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBcIuacquefpee+pOaPkOekuua2iOaBr+exu+Wei++8mnR5cGU9XCIgKyB0aGlzLm9wVHlwZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGV4dDtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBjbGFzcyBNc2cuRWxlbS5Hcm91cFRpcC5Hcm91cEluZm/vvIzlj5jmm7TnmoTnvqTotYTmlpnkv6Hmga/lr7nosaFcclxuICAgICAgICBNc2cuRWxlbS5Hcm91cFRpcC5Hcm91cEluZm8gPSBmdW5jdGlvbiAodHlwZSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy50eXBlID0gdHlwZTsgLy/nvqTotYTmlpnkv6Hmga/nsbvlnotcclxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlOyAvL+WvueW6lOeahOWAvFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgTXNnLkVsZW0uR3JvdXBUaXAuR3JvdXBJbmZvLnByb3RvdHlwZS5nZXRUeXBlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50eXBlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgTXNnLkVsZW0uR3JvdXBUaXAuR3JvdXBJbmZvLnByb3RvdHlwZS5nZXRWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gY2xhc3MgTXNnLkVsZW0uR3JvdXBUaXAuTWVtYmVySW5mb++8jOWPmOabtOeahOe+pOaIkOWRmOi1hOaWmeS/oeaBr+WvueixoVxyXG4gICAgICAgIE1zZy5FbGVtLkdyb3VwVGlwLk1lbWJlckluZm8gPSBmdW5jdGlvbiAodXNlcklkLCBzaHV0dXBUaW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXNlcklkID0gdXNlcklkOyAvL+e+pOaIkOWRmGlkXHJcbiAgICAgICAgICAgIHRoaXMuc2h1dHVwVGltZSA9IHNodXR1cFRpbWU7IC8v576k5oiQ5ZGY6KKr56aB6KiA5pe26Ze077yMMOihqOekuuWPlua2iOemgeiogO+8jOWkp+S6jjDooajnpLrooqvnpoHoqIDml7bplb/vvIzljZXkvY3vvJrnp5JcclxuICAgICAgICB9O1xyXG4gICAgICAgIE1zZy5FbGVtLkdyb3VwVGlwLk1lbWJlckluZm8ucHJvdG90eXBlLmdldFVzZXJJZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudXNlcklkO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgTXNnLkVsZW0uR3JvdXBUaXAuTWVtYmVySW5mby5wcm90b3R5cGUuZ2V0U2h1dHVwVGltZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2h1dHVwVGltZTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyDoh6rlrprkuYnmtojmga/nsbvlnosgY2xhc3MgTXNnLkVsZW0uQ3VzdG9tXHJcbiAgICAgICAgTXNnLkVsZW0uQ3VzdG9tID0gZnVuY3Rpb24gKGRhdGEsIGRlc2MsIGV4dCkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEgPSBkYXRhOyAvL+aVsOaNrlxyXG4gICAgICAgICAgICB0aGlzLmRlc2MgPSBkZXNjOyAvL+aPj+i/sFxyXG4gICAgICAgICAgICB0aGlzLmV4dCA9IGV4dDsgLy/mianlsZXlrZfmrrVcclxuICAgICAgICB9O1xyXG4gICAgICAgIE1zZy5FbGVtLkN1c3RvbS5wcm90b3R5cGUuZ2V0RGF0YSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIE1zZy5FbGVtLkN1c3RvbS5wcm90b3R5cGUuZ2V0RGVzYyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVzYztcclxuICAgICAgICB9O1xyXG4gICAgICAgIE1zZy5FbGVtLkN1c3RvbS5wcm90b3R5cGUuZ2V0RXh0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5leHQ7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBNc2cuRWxlbS5DdXN0b20ucHJvdG90eXBlLnRvSHRtbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBzaW5nbGV0b24gb2JqZWN0IE1zZ1N0b3JlXHJcbiAgICAgICAgdmFyIE1zZ1N0b3JlID0gbmV3IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHNlc3NNYXAgPSB7fTsgLy/ot5/miYDmnInnlKjmiLfmiJbnvqTnmoTogYrlpKnorrDlvZVNQVBcclxuICAgICAgICAgICAgdmFyIHNlc3NUaW1lbGluZSA9IFtdOyAvL+aMieaXtumXtOmZjeW6j+aOkuWIl+eahOS8muivneWIl+ihqFxyXG4gICAgICAgICAgICBtc2dDYWNoZSA9IHt9OyAvL+a2iOaBr+e8k+WtmO+8jOeUqOS6juWIpOmHjVxyXG4gICAgICAgICAgICAvL0MyQ1xyXG4gICAgICAgICAgICB0aGlzLmNvb2tpZSA9IFwiXCI7IC8v5LiK5LiA5qyh5ouJ5Y+W5pawYzJj5raI5oGv55qEY29va2llXHJcbiAgICAgICAgICAgIHRoaXMuc3luY0ZsYWcgPSAwOyAvL+S4iuS4gOasoeaLieWPluaWsGMyY+a2iOaBr+eahOaYr+WQpue7p+e7reaLieWPluagh+iusFxyXG5cclxuICAgICAgICAgICAgdmFyIHZpc2l0U2VzcyA9IGZ1bmN0aW9uICh2aXNpdG9yKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpIGluIHNlc3NNYXApIHtcclxuICAgICAgICAgICAgICAgICAgICB2aXNpdG9yKHNlc3NNYXBbaV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvL+a2iOaBr+afpemHjVxyXG4gICAgICAgICAgICB2YXIgY2hlY2tEdXBNc2cgPSBmdW5jdGlvbiAobXNnKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZHVwID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB2YXIgZmlyc3Rfa2V5ID0gbXNnLnNlc3MuX2ltcGwuc2tleTtcclxuICAgICAgICAgICAgICAgIHZhciBzZWNvbmRfa2V5ID0gbXNnLmlzU2VuZCArIG1zZy5zZXEgKyBtc2cucmFuZG9tO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRlbXBNc2cgPSBtc2dDYWNoZVtmaXJzdF9rZXldICYmIG1zZ0NhY2hlW2ZpcnN0X2tleV1bc2Vjb25kX2tleV07XHJcbiAgICAgICAgICAgICAgICBpZiAodGVtcE1zZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGR1cCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobXNnQ2FjaGVbZmlyc3Rfa2V5XSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1zZ0NhY2hlW2ZpcnN0X2tleV1bc2Vjb25kX2tleV0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU6IG1zZy50aW1lXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbXNnQ2FjaGVbZmlyc3Rfa2V5XSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIG1zZ0NhY2hlW2ZpcnN0X2tleV1bc2Vjb25kX2tleV0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU6IG1zZy50aW1lXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBkdXA7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNlc3NNYXAgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2Vzc01hcDtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5zZXNzQ291bnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2Vzc1RpbWVsaW5lLmxlbmd0aDtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5zZXNzQnlUeXBlSWQgPSBmdW5jdGlvbiAodHlwZSwgaWQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBza2V5ID0gU2Vzc2lvbi5za2V5KHR5cGUsIGlkKTtcclxuICAgICAgICAgICAgICAgIGlmIChza2V5ID09PSB1bmRlZmluZWQgfHwgc2tleSA9PSBudWxsKSByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzZXNzTWFwW3NrZXldO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLmRlbFNlc3NCeVR5cGVJZCA9IGZ1bmN0aW9uICh0eXBlLCBpZCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNrZXkgPSBTZXNzaW9uLnNrZXkodHlwZSwgaWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNrZXkgPT09IHVuZGVmaW5lZCB8fCBza2V5ID09IG51bGwpIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmIChzZXNzTWFwW3NrZXldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHNlc3NNYXBbc2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG1zZ0NhY2hlW3NrZXldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRDb29raWVBbmRTeW5jRmxhZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29va2llID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3luY0ZsYWcgPSAwO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLy/liIfmjaLlsIblvZPliY3kvJror53nmoToh6rliqjor7vlj5bmtojmga/moIflv5fkuLppc09uLOmHjee9ruWFtuS7luS8muivneeahOiHquWKqOivu+WPlua2iOaBr+agh+W/l+S4umZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuc2V0QXV0b1JlYWQgPSBmdW5jdGlvbiAoc2VsU2VzcywgaXNPbiwgaXNSZXNldEFsbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzUmVzZXRBbGwpXHJcbiAgICAgICAgICAgICAgICAgICAgdmlzaXRTZXNzKGZ1bmN0aW9uIChzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuX2ltcGwuaXNBdXRvUmVhZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbFNlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxTZXNzLl9pbXBsLmlzQXV0b1JlYWQgPSBpc09uOyAvL1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc09uKSB7IC8v5piv5ZCm6LCD55So5bey6K+75LiK5oql5o6l5Y+jXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbFNlc3MuX2ltcGwudW5yZWFkID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxTZXNzLl9pbXBsLnR5cGUgPT0gU0VTU0lPTl9UWVBFLkMyQykgeyAvL+engeiBiua2iOaBr+W3suivu+S4iuaKpVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRtcEMyQ01zZ1JlYWRlZEl0ZW0gPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRtcEMyQ01zZ1JlYWRlZEl0ZW0ucHVzaChuZXcgQzJDTXNnUmVhZGVkSXRlbShzZWxTZXNzLl9pbXBsLmlkLCBzZWxTZXNzLl9pbXBsLnRpbWUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6LCD55SoQzJD5raI5oGv5bey6K+75LiK5oql5o6l5Y+jXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm90b19jMkNNc2dSZWFkZWQoTXNnU3RvcmUuY29va2llLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRtcEMyQ01zZ1JlYWRlZEl0ZW0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKHJlc3ApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nLmluZm8oXCJbc2V0QXV0b1JlYWRdOiBjMkNNc2dSZWFkZWQgc3VjY2Vzc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nLmVycm9yKFwiW3NldEF1dG9SZWFkfTogYzJDTXNnUmVhZGVkIGZhaWxlZDpcIiArIGVyci5FcnJvckluZm8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNlbFNlc3MuX2ltcGwudHlwZSA9PSBTRVNTSU9OX1RZUEUuR1JPVVApIHsgLy/nvqTogYrmtojmga/lt7Lor7vkuIrmiqVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0bXBPcHQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0dyb3VwSWQnOiBzZWxTZXNzLl9pbXBsLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdNc2dSZWFkZWRTZXEnOiBzZWxTZXNzLl9pbXBsLmN1ck1heE1zZ1NlcVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6LCD55SoZ3JvdXDmtojmga/lt7Lor7vkuIrmiqXmjqXlj6NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3RvX2dyb3VwTXNnUmVhZGVkKHRtcE9wdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAocmVzcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2cuaW5mbyhcImdyb3VwTXNnUmVhZGVkIHN1Y2Nlc3NcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2cuZXJyb3IoXCJncm91cE1zZ1JlYWRlZCBmYWlsZWQ6XCIgKyBlcnIuRXJyb3JJbmZvKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB0aGlzLmMyQ01zZ1JlYWRlZCA9IGZ1bmN0aW9uIChvcHRzLCBjYk9rLCBjYkVycikge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRtcEMyQ01zZ1JlYWRlZEl0ZW0gPSBbXTtcclxuICAgICAgICAgICAgICAgIHRtcEMyQ01zZ1JlYWRlZEl0ZW0ucHVzaChuZXcgQzJDTXNnUmVhZGVkSXRlbShvcHRzLlRvX0FjY291bnQsIG9wdHMuTGFzdGVkTXNnVGltZSkpO1xyXG4gICAgICAgICAgICAgICAgLy/osIPnlKhDMkPmtojmga/lt7Lor7vkuIrmiqXmjqXlj6NcclxuICAgICAgICAgICAgICAgIHByb3RvX2MyQ01zZ1JlYWRlZChNc2dTdG9yZS5jb29raWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdG1wQzJDTXNnUmVhZGVkSXRlbSxcclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAocmVzcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2JPaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nLmluZm8oXCJjMkNNc2dSZWFkZWQgc3VjY2Vzc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNiT2socmVzcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNiRXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2cuZXJyb3IoXCJjMkNNc2dSZWFkZWQgZmFpbGVkOlwiICsgZXJyLkVycm9ySW5mbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYkVycihlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFkZFNlc3Npb24gPSBmdW5jdGlvbiAoc2Vzcykge1xyXG4gICAgICAgICAgICAgICAgc2Vzc01hcFtzZXNzLl9pbXBsLnNrZXldID0gc2VzcztcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5kZWxTZXNzaW9uID0gZnVuY3Rpb24gKHNlc3MpIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBzZXNzTWFwW3Nlc3MuX2ltcGwuc2tleV07XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBzZXNzTWFwID0ge307IC8v6Lef5omA5pyJ55So5oi35oiW576k55qE6IGK5aSp6K6w5b2VTUFQXHJcbiAgICAgICAgICAgICAgICBzZXNzVGltZWxpbmUgPSBbXTsgLy/mjInml7bpl7TpmY3luo/mjpLliJfnmoTkvJror53liJfooahcclxuICAgICAgICAgICAgICAgIG1zZ0NhY2hlID0ge307IC8v5raI5oGv57yT5a2Y77yM55So5LqO5Yik6YeNXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvb2tpZSA9IFwiXCI7IC8v5LiK5LiA5qyh5ouJ5Y+W5pawYzJj5raI5oGv55qEY29va2llXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN5bmNGbGFnID0gMDsgLy/kuIrkuIDmrKHmi4nlj5bmlrBjMmPmtojmga/nmoTmmK/lkKbnu6fnu63mi4nlj5bmoIforrBcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5hZGRNc2cgPSBmdW5jdGlvbiAobXNnLCB1bnJlYWQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjaGVja0R1cE1zZyhtc2cpKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VzcyA9IG1zZy5zZXNzO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzZXNzTWFwW3Nlc3MuX2ltcGwuc2tleV0pIHRoaXMuYWRkU2Vzc2lvbihzZXNzKTtcclxuICAgICAgICAgICAgICAgIHNlc3MuX2ltcGxfYWRkTXNnKG1zZywgdW5yZWFkKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRpbWVsaW5lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGFyciA9IG5ldyBBcnJheTtcclxuICAgICAgICAgICAgICAgIHZpc2l0U2VzcyhmdW5jdGlvbiAoc2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKHNlc3MpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBhcnIuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiLnRpbWUgLSBhLnRpbWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHNlc3NUaW1lbGluZSA9IGFycjtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIHNpbmdsZXRvbiBvYmplY3QgTXNnTWFuYWdlclxyXG4gICAgICAgIHZhciBNc2dNYW5hZ2VyID0gbmV3IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBvbk1zZ0NhbGxiYWNrID0gbnVsbDsgLy/mlrDmtojmga8oYzJj5ZKMZ3JvdXAp5Zue6LCDXHJcblxyXG4gICAgICAgICAgICB2YXIgb25Hcm91cEluZm9DaGFuZ2VDYWxsYmFjayA9IG51bGw7IC8v576k6LWE5paZ5Y+Y5YyW5Zue6LCDXHJcbiAgICAgICAgICAgIC8v5pS25Yiw5paw576k57O757uf5raI5oGv5Zue6LCD5YiX6KGoXHJcbiAgICAgICAgICAgIHZhciBvbkdyb3VwU3lzdGVtTm90aWZ5Q2FsbGJhY2tzID0ge1xyXG4gICAgICAgICAgICAgICAgXCIxXCI6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBcIjJcIjogbnVsbCxcclxuICAgICAgICAgICAgICAgIFwiM1wiOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgXCI0XCI6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBcIjVcIjogbnVsbCxcclxuICAgICAgICAgICAgICAgIFwiNlwiOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgXCI3XCI6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBcIjhcIjogbnVsbCxcclxuICAgICAgICAgICAgICAgIFwiOVwiOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgXCIxMFwiOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgXCIxMVwiOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgXCIxNVwiOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgXCIyNTVcIjogbnVsbCxcclxuICAgICAgICAgICAgICAgIFwiMTJcIjogbnVsbCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLy/nm5HlkKzlpb3lj4vns7vnu5/pgJrnn6Xlh73mlbBcclxuICAgICAgICAgICAgdmFyIG9uRnJpZW5kU3lzdGVtTm90aWZ5Q2FsbGJhY2tzID0ge1xyXG4gICAgICAgICAgICAgICAgXCIxXCI6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBcIjJcIjogbnVsbCxcclxuICAgICAgICAgICAgICAgIFwiM1wiOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgXCI0XCI6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBcIjVcIjogbnVsbCxcclxuICAgICAgICAgICAgICAgIFwiNlwiOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgXCI3XCI6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBcIjhcIjogbnVsbFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdmFyIG9uUHJvZmlsZVN5c3RlbU5vdGlmeUNhbGxiYWNrcyA9IHtcclxuICAgICAgICAgICAgICAgIFwiMVwiOiBudWxsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB2YXIgb25LaWNrZWRFdmVudENhbGwgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgdmFyIG9uTXNnUmVhZENhbGxiYWNrID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIC8v5pmu6YCa6ZW/6L2u6K+iXHJcbiAgICAgICAgICAgIHZhciBsb25nUG9sbGluZ09uID0gZmFsc2U7IC8v5piv5ZCm5byA5ZCv5pmu6YCa6ZW/6L2u6K+iXHJcbiAgICAgICAgICAgIHZhciBpc0xvbmdQb2xsaW5nUmVxdWVzdGluZyA9IGZhbHNlOyAvL+aYr+WQpuWcqOmVv+i9ruivomluZ1xyXG4gICAgICAgICAgICB2YXIgbm90aWZ5U2VxID0gMDsgLy9jMmPpgJrnn6VzZXFcclxuICAgICAgICAgICAgdmFyIG5vdGljZVNlcSA9IDA7IC8v576k5raI5oGvc2VxXHJcblxyXG4gICAgICAgICAgICAvL+Wkp+e+pOmVv+i9ruivolxyXG4gICAgICAgICAgICB2YXIgb25CaWdHcm91cE1zZ0NhbGxiYWNrID0gbnVsbDsgLy/lpKfnvqTmtojmga/lm57osINcclxuICAgICAgICAgICAgdmFyIGJpZ0dyb3VwTG9uZ1BvbGxpbmdPbiA9IGZhbHNlOyAvL+aYr+WQpuW8gOWQr+mVv+i9ruivolxyXG4gICAgICAgICAgICB2YXIgYmlnR3JvdXBMb25nUG9sbGluZ1N0YXJ0U2VxID0gMDsgLy/or7fmsYLmi4nmtojmga/nmoTotbflp4tzZXEo5aSn576k6ZW/6L2u6K+iKVxyXG4gICAgICAgICAgICB2YXIgYmlnR3JvdXBMb25nUG9sbGluZ0hvbGRUaW1lID0gOTA7IC8v5a6i5oi356uv6ZW/6L2u6K+i55qE6LaF5pe25pe26Ze077yM5Y2V5L2N5piv56eSKOWkp+e+pOmVv+i9ruivoilcclxuICAgICAgICAgICAgdmFyIGJpZ0dyb3VwTG9uZ1BvbGxpbmdLZXkgPSBudWxsOyAvL+WuouaIt+err+WKoOWFpee+pOe7hOWQjuaUtuWIsOeahOeahEtleSjlpKfnvqTplb/ova7or6IpXHJcbiAgICAgICAgICAgIHZhciBiaWdHcm91cExvbmdQb2xsaW5nTXNnTWFwID0ge307IC8v6K6w5b2V5pS25Yiw55qE576k5raI5oGv5pWwXHJcbiAgICAgICAgICAgIHZhciBvbkMyY0V2ZW50Q2FsbGJhY2tzID0ge1xyXG4gICAgICAgICAgICAgICAgXCI5MlwiOiBudWxsLCAvL+a2iOaBr+W3suivu+mAmuefpSxcclxuICAgICAgICAgICAgICAgIFwiOTZcIjogbnVsbFxyXG4gICAgICAgICAgICB9OztcclxuICAgICAgICAgICAgdmFyIG9uQXBwbGllZERvd25sb2FkVXJsID0gbnVsbDtcclxuXHJcblxyXG4gICAgICAgICAgICB2YXIgZ2V0TG9zdEdyb3VwTXNnQ291bnQgPSAwOyAvL+ihpeaLieS4ouWkseeahOe+pOa2iOaBr+asoeaVsFxyXG4gICAgICAgICAgICAvL+aIkeeahOe+pOW9k+WJjeacgOWkp+eahHNlcVxyXG4gICAgICAgICAgICB2YXIgbXlHcm91cE1heFNlcXMgPSB7fTsgLy/nlKjkuo7ooaXmi4nkuKLlpLHnmoTnvqTmtojmga9cclxuXHJcbiAgICAgICAgICAgIHZhciBncm91cFN5c3RlbU1zZ3NDYWNoZSA9IHt9OyAvL+e+pOe7hOezu+e7n+a2iOaBr+e8k+WtmCznlKjkuo7liKTph41cclxuXHJcbiAgICAgICAgICAgIC8v6K6+572u6ZW/6L2u6K+i5byA5YWzXHJcbiAgICAgICAgICAgIC8vaXNPbj10cnVlIOW8gOWQr1xyXG4gICAgICAgICAgICAvL2lzT249ZmFsc2Ug5YGc5q2iXHJcbiAgICAgICAgICAgIHRoaXMuc2V0TG9uZ1BvbGxpbmdPbiA9IGZ1bmN0aW9uIChpc09uKSB7XHJcbiAgICAgICAgICAgICAgICBsb25nUG9sbGluZ09uID0gaXNPbjtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5nZXRMb25nUG9sbGluZ09uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxvbmdQb2xsaW5nT247XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvL+mHjee9rumVv+i9ruivouWPmOmHj1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0TG9uZ1BvbGxpbmdJbmZvID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgbG9uZ1BvbGxpbmdPbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgbm90aWZ5U2VxID0gMDtcclxuICAgICAgICAgICAgICAgIG5vdGljZVNlcSA9IDA7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvL+iuvue9ruWkp+e+pOmVv+i9ruivouW8gOWFs1xyXG4gICAgICAgICAgICAvL2lzT249dHJ1ZSDlvIDlkK9cclxuICAgICAgICAgICAgLy9pc09uPWZhbHNlIOWBnOatolxyXG4gICAgICAgICAgICB0aGlzLnNldEJpZ0dyb3VwTG9uZ1BvbGxpbmdPbiA9IGZ1bmN0aW9uIChpc09uKSB7XHJcbiAgICAgICAgICAgICAgICBiaWdHcm91cExvbmdQb2xsaW5nT24gPSBpc09uO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvL+iuvue9ruWkp+e+pOmVv+i9ruivomtleVxyXG4gICAgICAgICAgICB0aGlzLnNldEJpZ0dyb3VwTG9uZ1BvbGxpbmdLZXkgPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICAgICAgICBiaWdHcm91cExvbmdQb2xsaW5nS2V5ID0ga2V5O1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvL+mHjee9ruWkp+e+pOmVv+i9ruivouWPmOmHj1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0QmlnR3JvdXBMb25nUG9sbGluZ0luZm8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBiaWdHcm91cExvbmdQb2xsaW5nT24gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJpZ0dyb3VwTG9uZ1BvbGxpbmdTdGFydFNlcSA9IDA7XHJcbiAgICAgICAgICAgICAgICBiaWdHcm91cExvbmdQb2xsaW5nS2V5ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJpZ0dyb3VwTG9uZ1BvbGxpbmdNc2dNYXAgPSB7fTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8v6K6+572u576k5raI5oGv5pWw5o2u5p2h5pWwXHJcbiAgICAgICAgICAgIHRoaXMuc2V0QmlnR3JvdXBMb25nUG9sbGluZ01zZ01hcCA9IGZ1bmN0aW9uIChncm91cElkLCBjb3VudCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGJpZ0dyb3VwTG9uZ1BvbGxpbmdNc2dDb3VudCA9IGJpZ0dyb3VwTG9uZ1BvbGxpbmdNc2dNYXBbZ3JvdXBJZF07XHJcbiAgICAgICAgICAgICAgICBpZiAoYmlnR3JvdXBMb25nUG9sbGluZ01zZ0NvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmlnR3JvdXBMb25nUG9sbGluZ01zZ0NvdW50ID0gcGFyc2VJbnQoYmlnR3JvdXBMb25nUG9sbGluZ01zZ0NvdW50KSArIGNvdW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGJpZ0dyb3VwTG9uZ1BvbGxpbmdNc2dNYXBbZ3JvdXBJZF0gPSBiaWdHcm91cExvbmdQb2xsaW5nTXNnQ291bnQ7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGJpZ0dyb3VwTG9uZ1BvbGxpbmdNc2dNYXBbZ3JvdXBJZF0gPSBjb3VudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8v6YeN572uXHJcbiAgICAgICAgICAgIHRoaXMuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgb25Hcm91cEluZm9DaGFuZ2VDYWxsYmFjayA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBvbkdyb3VwU3lzdGVtTm90aWZ5Q2FsbGJhY2tzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiMVwiOiBudWxsLCAvL+eUs+ivt+WKoOe+pOivt+axgu+8iOWPquacieeuoeeQhuWRmOS8muaUtuWIsO+8iVxyXG4gICAgICAgICAgICAgICAgICAgIFwiMlwiOiBudWxsLCAvL+eUs+ivt+WKoOe+pOiiq+WQjOaEj++8iOWPquacieeUs+ivt+S6uuiDveWkn+aUtuWIsO+8iVxyXG4gICAgICAgICAgICAgICAgICAgIFwiM1wiOiBudWxsLCAvL+eUs+ivt+WKoOe+pOiiq+aLkue7ne+8iOWPquacieeUs+ivt+S6uuiDveWkn+aUtuWIsO+8iVxyXG4gICAgICAgICAgICAgICAgICAgIFwiNFwiOiBudWxsLCAvL+iiq+euoeeQhuWRmOi4ouWHuue+pCjlj6rmnInooqvouKLogIXmjqXmlLbliLApXHJcbiAgICAgICAgICAgICAgICAgICAgXCI1XCI6IG51bGwsIC8v576k6KKr6Kej5pWjKOWFqOWRmOaOpeaUtilcclxuICAgICAgICAgICAgICAgICAgICBcIjZcIjogbnVsbCwgLy/liJvlu7rnvqQo5Yib5bu66ICF5o6l5pS2KVxyXG4gICAgICAgICAgICAgICAgICAgIFwiN1wiOiBudWxsLCAvL+mCgOivt+WKoOe+pCjooqvpgoDor7fogIXmjqXmlLYpXHJcbiAgICAgICAgICAgICAgICAgICAgXCI4XCI6IG51bGwsIC8v5Li75Yqo6YCA576kKOS4u+WKqOmAgOWHuuiAheaOpeaUtilcclxuICAgICAgICAgICAgICAgICAgICBcIjlcIjogbnVsbCwgLy/orr7nva7nrqHnkIblkZgo6KKr6K6+572u6ICF5o6l5pS2KVxyXG4gICAgICAgICAgICAgICAgICAgIFwiMTBcIjogbnVsbCwgLy/lj5bmtojnrqHnkIblkZgo6KKr5Y+W5raI6ICF5o6l5pS2KVxyXG4gICAgICAgICAgICAgICAgICAgIFwiMTFcIjogbnVsbCwgLy/nvqTlt7Looqvlm57mlLYo5YWo5ZGY5o6l5pS2KVxyXG4gICAgICAgICAgICAgICAgICAgIFwiMTVcIjogbnVsbCwgLy/nvqTlt7Looqvlm57mlLYo5YWo5ZGY5o6l5pS2KVxyXG4gICAgICAgICAgICAgICAgICAgIFwiMjU1XCI6IG51bGwsIC8v55So5oi36Ieq5a6a5LmJ6YCa55+lKOm7mOiupOWFqOWRmOaOpeaUtilcclxuICAgICAgICAgICAgICAgICAgICBcIjEyXCI6IG51bGwsIC8v6YKA6K+35Yqg576kKOiiq+mCgOivt+iAhemcgOimgeWQjOaEjylcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBvbkZyaWVuZFN5c3RlbU5vdGlmeUNhbGxiYWNrcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBcIjFcIjogbnVsbCwgLy/lpb3lj4vooajlop7liqBcclxuICAgICAgICAgICAgICAgICAgICBcIjJcIjogbnVsbCwgLy/lpb3lj4vooajliKDpmaRcclxuICAgICAgICAgICAgICAgICAgICBcIjNcIjogbnVsbCwgLy/mnKrlhrPlop7liqBcclxuICAgICAgICAgICAgICAgICAgICBcIjRcIjogbnVsbCwgLy/mnKrlhrPliKDpmaRcclxuICAgICAgICAgICAgICAgICAgICBcIjVcIjogbnVsbCwgLy/pu5HlkI3ljZXlop7liqBcclxuICAgICAgICAgICAgICAgICAgICBcIjZcIjogbnVsbCwgLy/pu5HlkI3ljZXliKDpmaRcclxuICAgICAgICAgICAgICAgICAgICBcIjdcIjogbnVsbCwgLy/mnKrlhrPlt7Lor7vkuIrmiqVcclxuICAgICAgICAgICAgICAgICAgICBcIjhcIjogbnVsbCAvL+WlveWPi+S/oeaBryjlpIfms6jvvIzliIbnu4Qp5Y+Y5pu0XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgb25Qcm9maWxlU3lzdGVtTm90aWZ5Q2FsbGJhY2tzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiMVwiOiBudWxsIC8v6LWE5paZ5L+u5pS5XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgLy/ph43nva7mma7pgJrplb/ova7or6Llj4LmlbBcclxuICAgICAgICAgICAgICAgIG9uTXNnQ2FsbGJhY2sgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgbG9uZ1BvbGxpbmdPbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgbm90aWZ5U2VxID0gMDsgLy9jMmPmlrDmtojmga/pgJrnn6VzZXFcclxuICAgICAgICAgICAgICAgIG5vdGljZVNlcSA9IDA7IC8vZ3JvdXDmlrDmtojmga9zZXFcclxuXHJcbiAgICAgICAgICAgICAgICAvL+mHjee9ruWkp+e+pOmVv+i9ruivouWPguaVsFxyXG4gICAgICAgICAgICAgICAgb25CaWdHcm91cE1zZ0NhbGxiYWNrID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJpZ0dyb3VwTG9uZ1BvbGxpbmdPbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYmlnR3JvdXBMb25nUG9sbGluZ1N0YXJ0U2VxID0gMDtcclxuICAgICAgICAgICAgICAgIGJpZ0dyb3VwTG9uZ1BvbGxpbmdLZXkgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYmlnR3JvdXBMb25nUG9sbGluZ01zZ01hcCA9IHt9O1xyXG5cclxuICAgICAgICAgICAgICAgIGdyb3VwU3lzdGVtTXNnc0NhY2hlID0ge307XHJcblxyXG4gICAgICAgICAgICAgICAgaXBMaXN0ID0gW107IC8v5paH5Lu25LiL6L295Zyw5Z2AXHJcbiAgICAgICAgICAgICAgICBhdXRoa2V5ID0gbnVsbDsgLy/mlofku7bkuIvovb3npajmja5cclxuICAgICAgICAgICAgICAgIGV4cGlyZVRpbWUgPSBudWxsOyAvL+elqOaNrui2heaXtuaXtumXtFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLy/liJ3lp4vljJbmlofku7bkuIvovb1pcOWSjOelqOaNrlxyXG4gICAgICAgICAgICB2YXIgaW5pdElwQW5kQXV0aGtleSA9IGZ1bmN0aW9uIChjYk9rLCBjYkVycikge1xyXG4gICAgICAgICAgICAgICAgcHJvdG9fZ2V0SXBBbmRBdXRoa2V5KGZ1bmN0aW9uIChyZXNwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlwTGlzdCA9IHJlc3AuSXBMaXN0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRoa2V5ID0gcmVzcC5BdXRoS2V5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBpcmVUaW1lID0gcmVzcC5FeHBpcmVUaW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2JPaykgY2JPayhyZXNwKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nLmVycm9yKFwiaW5pdElwQW5kQXV0aGtleSBmYWlsZWQ6XCIgKyBlcnIuRXJyb3JJbmZvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNiRXJyKSBjYkVycihlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvL+WIneWni+WMluaIkeeahOe+pOW9k+WJjeacgOWkp+eahHNlce+8jOeUqOS6juihpeaLieS4ouWkseeahOe+pOa2iOaBr1xyXG4gICAgICAgICAgICB2YXIgaW5pdE15R3JvdXBNYXhTZXFzID0gZnVuY3Rpb24gKGNiT2ssIGNiRXJyKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb3B0cyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAnTWVtYmVyX0FjY291bnQnOiBjdHguaWRlbnRpZmllcixcclxuICAgICAgICAgICAgICAgICAgICAnTGltaXQnOiAxMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICdPZmZzZXQnOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICdHcm91cEJhc2VJbmZvRmlsdGVyJzogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnTmV4dE1zZ1NlcSdcclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgcHJvdG9fZ2V0Sm9pbmVkR3JvdXBMaXN0SGlnaChvcHRzLCBmdW5jdGlvbiAocmVzcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3AuR3JvdXBJZExpc3QgfHwgcmVzcC5Hcm91cElkTGlzdC5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nLmluZm8oXCJpbml0TXlHcm91cE1heFNlcXM6IOebruWJjei/mOayoeacieWKoOWFpeS7u+S9lee+pOe7hFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYk9rKSBjYk9rKHJlc3ApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzcC5Hcm91cElkTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGdyb3VwX2lkID0gcmVzcC5Hcm91cElkTGlzdFtpXS5Hcm91cElkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1ck1heFNlcSA9IHJlc3AuR3JvdXBJZExpc3RbaV0uTmV4dE1zZ1NlcSAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBteUdyb3VwTWF4U2Vxc1tncm91cF9pZF0gPSBjdXJNYXhTZXE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYk9rKSBjYk9rKHJlc3ApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nLmVycm9yKFwiaW5pdE15R3JvdXBNYXhTZXFzIGZhaWxlZDpcIiArIGVyci5FcnJvckluZm8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2JFcnIpIGNiRXJyKGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8v6KGl5ouJ576k5raI5oGvXHJcbiAgICAgICAgICAgIHZhciBnZXRMb3N0R3JvdXBNc2dzID0gZnVuY3Rpb24gKGdyb3VwSWQsIHJlcU1zZ1NlcSwgcmVxTXNnTnVtYmVyKSB7XHJcbiAgICAgICAgICAgICAgICBnZXRMb3N0R3JvdXBNc2dDb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgLy/lj5HotbfkuIDkuKrmi4nnvqTnvqTmtojmga/or7fmsYJcclxuICAgICAgICAgICAgICAgIHZhciB0ZW1wT3B0cyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAnR3JvdXBJZCc6IGdyb3VwSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1JlcU1zZ1NlcSc6IHJlcU1zZ1NlcSxcclxuICAgICAgICAgICAgICAgICAgICAnUmVxTXNnTnVtYmVyJzogcmVxTXNnTnVtYmVyXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgLy/lj5HotbfkuIDkuKrmi4nnvqTnvqTmtojmga/or7fmsYJcclxuICAgICAgICAgICAgICAgIGxvZy53YXJuKFwi56ysXCIgKyBnZXRMb3N0R3JvdXBNc2dDb3VudCArIFwi5qyh6KGl6b2Q576k5raI5oGvLOWPguaVsD1cIiArIEpTT04uc3RyaW5naWZ5KHRlbXBPcHRzKSk7XHJcbiAgICAgICAgICAgICAgICBNc2dNYW5hZ2VyLnN5bmNHcm91cE1zZ3ModGVtcE9wdHMpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLy/mm7TmlrDnvqTlvZPliY3mnIDlpKfmtojmga9zZXFcclxuICAgICAgICAgICAgdmFyIHVwZGF0ZU15R3JvdXBDdXJNYXhTZXEgPSBmdW5jdGlvbiAoZ3JvdXBJZCwgbXNnU2VxKSB7XHJcbiAgICAgICAgICAgICAgICAvL+abtOaWsG15R3JvdXBNYXhTZXFz5Lit55qE576k5pyA5aSnc2VxXHJcbiAgICAgICAgICAgICAgICB2YXIgY3VyTXNnU2VxID0gbXlHcm91cE1heFNlcXNbZ3JvdXBJZF1cclxuICAgICAgICAgICAgICAgIGlmIChjdXJNc2dTZXEpIHsgLy/lpoLmnpzlrZjlnKjvvIzmr5TovoPlpKflsI9cclxuICAgICAgICAgICAgICAgICAgICBpZiAobXNnU2VxID4gY3VyTXNnU2VxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG15R3JvdXBNYXhTZXFzW2dyb3VwSWRdID0gbXNnU2VxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7IC8v5LiN5a2Y5Zyo77yM5paw5aKeXHJcbiAgICAgICAgICAgICAgICAgICAgbXlHcm91cE1heFNlcXNbZ3JvdXBJZF0gPSBtc2dTZXE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvL+a3u+WKoOe+pOa2iOaBr+WIl+ihqFxyXG4gICAgICAgICAgICB2YXIgYWRkR3JvdXBNc2dMaXN0ID0gZnVuY3Rpb24gKG1zZ3MsIG5ld19ncm91cF9tc2dzKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBwIGluIG1zZ3MpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3R3JvdXBNc2cgPSBtc2dzW3BdO1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5Y+R576k5raI5oGv5pe277yM6ZW/6L2u6K+i5o6l5Y+j5Lya6L+U5Zue55So5oi36Ieq5bex5Y+R55qE576k5raI5oGvXHJcbiAgICAgICAgICAgICAgICAgICAgLy9pZihuZXdHcm91cE1zZy5Gcm9tX0FjY291bnQgJiYgbmV3R3JvdXBNc2cuRnJvbV9BY2NvdW50IT1jdHguaWRlbnRpZmllciApe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdHcm91cE1zZy5Gcm9tX0FjY291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9mYWxzZS3kuI3mmK/kuLvliqjmi4nlj5bnmoTljoblj7Lmtojmga9cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy90cnVlLemcgOimgeS/neWtmOWIsHNka+acrOWcsHNlc3Npb24s5bm25LiU6ZyA6KaB5Yik6YeNXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtc2cgPSBoYW5kbGVyR3JvdXBNc2cobmV3R3JvdXBNc2csIGZhbHNlLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1zZykgeyAvL+S4jeS4uuepuu+8jOWKoOWIsOaWsOa2iOaBr+mHjFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3X2dyb3VwX21zZ3MucHVzaChtc2cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v5pu05pawbXlHcm91cE1heFNlcXPkuK3nmoTnvqTmnIDlpKdzZXFcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlTXlHcm91cEN1ck1heFNlcShuZXdHcm91cE1zZy5Ub0dyb3VwSWQsIG5ld0dyb3VwTXNnLk1zZ1NlcSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld19ncm91cF9tc2dzO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLy/lpITnkIbmlLbliLDnmoTnvqTmma7pgJrlkozmj5DnpLrmtojmga9cclxuICAgICAgICAgICAgdmFyIGhhbmRsZXJPcmRpbmFyeUFuZFRpcEMyY01zZ3MgPSBmdW5jdGlvbiAoZXZlbnRUeXBlLCBncm91cE1zZ0FycmF5KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZ3JvdXBNc2dNYXAgPSB7fTsgLy/kv53lrZjmlLbliLDnmoRDMmPmtojmga/kv6Hmga/vvIjnvqTlj7fvvIzmnIDlsI/vvIzmnIDlpKfmtojmga9zZXHvvIzmtojmga/liJfooajvvIlcclxuICAgICAgICAgICAgICAgIHZhciBuZXdfZ3JvdXBfbXNncyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdmFyIG1pbkdyb3VwTXNnU2VxID0gOTk5OTk5OTk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWF4R3JvdXBNc2dTZXEgPSAtMTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogaW4gZ3JvdXBNc2dBcnJheSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZ3JvdXBNc2dzID0gZ3JvdXBNc2dNYXBbZ3JvdXBNc2dBcnJheVtqXS5Ub0dyb3VwSWRdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZ3JvdXBNc2dzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwTXNncyA9IGdyb3VwTXNnTWFwW2dyb3VwTXNnQXJyYXlbal0uVG9Hcm91cElkXSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWluXCI6IG1pbkdyb3VwTXNnU2VxLCAvL+aUtuWIsOaWsOa2iOaBr+acgOWwj3NlcVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXhcIjogbWF4R3JvdXBNc2dTZXEsIC8v5pS25Yiw5paw5raI5oGv5pyA5aSnc2VxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1zZ3NcIjogW10gLy/mlLbliLDnmoTmlrDmtojmga9cclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy/mm7TmlrDplb/ova7or6LnmoTnvqROb3RpY2VTZXFcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ3JvdXBNc2dBcnJheVtqXS5Ob3RpY2VTZXEgPiBub3RpY2VTZXEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nLndhcm4oXCJub3RpY2VTZXE9XCIgKyBub3RpY2VTZXEgKyBcIixtc2dOb3RpY2VTZXE9XCIgKyBncm91cE1zZ0FycmF5W2pdLk5vdGljZVNlcSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdGljZVNlcSA9IGdyb3VwTXNnQXJyYXlbal0uTm90aWNlU2VxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBncm91cE1zZ0FycmF5W2pdLkV2ZW50ID0gZXZlbnRUeXBlO1xyXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwTXNnTWFwW2dyb3VwTXNnQXJyYXlbal0uVG9Hcm91cElkXS5tc2dzLnB1c2goZ3JvdXBNc2dBcnJheVtqXSk7IC8v5paw5aKe5LiA5p2h5raI5oGvXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdyb3VwTXNnQXJyYXlbal0uTXNnU2VxIDwgZ3JvdXBNc2dzLm1pbikgeyAvL+iusOW9leacgOWwj+eahOa2iOaBr3NlcVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cE1zZ01hcFtncm91cE1zZ0FycmF5W2pdLlRvR3JvdXBJZF0ubWluID0gZ3JvdXBNc2dBcnJheVtqXS5Nc2dTZXE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChncm91cE1zZ0FycmF5W2pdLk1zZ1NlcSA+IGdyb3VwTXNncy5tYXgpIHsgLy/orrDlvZXmnIDlpKfnmoTmtojmga9zZXFcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBNc2dNYXBbZ3JvdXBNc2dBcnJheVtqXS5Ub0dyb3VwSWRdLm1heCA9IGdyb3VwTXNnQXJyYXlbal0uTXNnU2VxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBncm91cElkIGluIGdyb3VwTXNnTWFwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRlbXBDb3VudCA9IGdyb3VwTXNnTWFwW2dyb3VwSWRdLm1heCAtIGdyb3VwTXNnTWFwW2dyb3VwSWRdLm1pbiArIDE7IC8v5pS25Yiw55qE5paw55qE576k5raI5oGv5pWwXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1ck1heE1zZ1NlcSA9IG15R3JvdXBNYXhTZXFzW2dyb3VwSWRdOyAvL+iOt+WPluacrOWcsOS/neWtmOeahOe+pOacgOWkp+a2iOaBr3NlcVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJNYXhNc2dTZXEpIHsgLy/lrZjlnKjov5nkuKrnvqTnmoTmnIDlpKfmtojmga9zZXFcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy/pq5jlubblj5Hmg4XlhrXkuIvvvIzplb/ova7or6Llj6/og73lrZjlnKjkuKLmtojmga/vvIzov5nml7bpnIDopoHlrqLmiLfnq6/pgJrov4fmi4nlj5bnvqTmtojmga/mjqXlj6PooaXpvZDkuItcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8x44CB5aaC5p6c5pS25Yiw55qE5paw5raI5oGv5pyA5bCPc2Vx5q+U5b2T5YmN5pyA5aSn576k5raI5oGvc2Vx5aSn5LqOMe+8jOWImeihqOekuuaUtuWIsOeahOe+pOa2iOaBr+WPkeeUn+i3s+i3g++8jOmcgOimgeihpem9kFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLzLjgIHmlLbliLDnmoTmlrDnvqTmtojmga9zZXHlrZjlnKjkuI3ov57nu63mg4XlhrXvvIzkuZ/pnIDopoHooaXpvZBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdyb3VwTXNnTWFwW2dyb3VwSWRdLm1pbiAtIGN1ck1heE1zZ1NlcSA+IDEgfHwgZ3JvdXBNc2dNYXBbZ3JvdXBJZF0ubXNncy5sZW5ndGggPCB0ZW1wQ291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Y+R6LW35LiA5Liq5ouJ576k576k5raI5oGv6K+35rGCXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2cud2FybihcIuWPkei1t+S4gOasoeihpem9kOe+pOa2iOaBr+ivt+axgixjdXJNYXhNc2dTZXE9XCIgKyBjdXJNYXhNc2dTZXEgKyBcIiwgbWluTXNnU2VxPVwiICsgZ3JvdXBNc2dNYXBbZ3JvdXBJZF0ubWluICsgXCIsIG1heE1zZ1NlcT1cIiArIGdyb3VwTXNnTWFwW2dyb3VwSWRdLm1heCArIFwiLCBtc2dzLmxlbmd0aD1cIiArIGdyb3VwTXNnTWFwW2dyb3VwSWRdLm1zZ3MubGVuZ3RoICsgXCIsIHRlbXBDb3VudD1cIiArIHRlbXBDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRMb3N0R3JvdXBNc2dzKGdyb3VwSWQsIGdyb3VwTXNnTWFwW2dyb3VwSWRdLm1heCwgZ3JvdXBNc2dNYXBbZ3JvdXBJZF0ubWF4IC0gY3VyTWF4TXNnU2VxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5pu05pawbXlHcm91cE1heFNlcXPkuK3nmoTnvqTmnIDlpKdzZXFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZU15R3JvdXBDdXJNYXhTZXEoZ3JvdXBJZCwgZ3JvdXBNc2dNYXBbZ3JvdXBJZF0ubWF4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld19ncm91cF9tc2dzID0gYWRkR3JvdXBNc2dMaXN0KGdyb3VwTXNnTWFwW2dyb3VwSWRdLm1zZ3MsIG5ld19ncm91cF9tc2dzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7IC8v5LiN5a2Y5Zyo6K+l576k55qE5pyA5aSn5raI5oGvc2VxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZy53YXJuKFwi5LiN5a2Y5Zyo6K+l576k55qE5pyA5aSn5raI5oGvc2Vx77yM576kaWQ9XCIgKyBncm91cElkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy/pq5jlubblj5Hmg4XlhrXkuIvvvIzplb/ova7or6Llj6/og73lrZjlnKjkuKLmtojmga/vvIzov5nml7bpnIDopoHlrqLmiLfnq6/pgJrov4fmi4nlj5bnvqTmtojmga/mjqXlj6PooaXpvZDkuItcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8x44CB5pS25Yiw55qE5paw576k5raI5oGvc2Vx5a2Y5Zyo5LiN6L+e57ut5oOF5Ya177yM5Lmf6ZyA6KaB6KGl6b2QXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChncm91cE1zZ01hcFtncm91cElkXS5tc2dzLmxlbmd0aCA8IHRlbXBDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lj5HotbfkuIDkuKrmi4nnvqTnvqTmtojmga/or7fmsYJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZy53YXJuKFwi5Y+R6LW35LiA5qyh6KGl6b2Q576k5raI5oGv6K+35rGCLG1pbk1zZ1NlcT1cIiArIGdyb3VwTXNnTWFwW2dyb3VwSWRdLm1pbiArIFwiLCBtYXhNc2dTZXE9XCIgKyBncm91cE1zZ01hcFtncm91cElkXS5tYXggKyBcIiwgbXNncy5sZW5ndGg9XCIgKyBncm91cE1zZ01hcFtncm91cElkXS5tc2dzLmxlbmd0aCArIFwiLCB0ZW1wQ291bnQ9XCIgKyB0ZW1wQ291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0TG9zdEdyb3VwTXNncyhncm91cElkLCBncm91cE1zZ01hcFtncm91cElkXS5tYXgsIHRlbXBDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+abtOaWsG15R3JvdXBNYXhTZXFz5Lit55qE576k5pyA5aSnc2VxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVNeUdyb3VwQ3VyTWF4U2VxKGdyb3VwSWQsIGdyb3VwTXNnTWFwW2dyb3VwSWRdLm1heCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdfZ3JvdXBfbXNncyA9IGFkZEdyb3VwTXNnTGlzdChncm91cE1zZ01hcFtncm91cElkXS5tc2dzLCBuZXdfZ3JvdXBfbXNncyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobmV3X2dyb3VwX21zZ3MubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTXNnU3RvcmUudXBkYXRlVGltZWxpbmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChvbk1zZ0NhbGxiYWNrICYmIG5ld19ncm91cF9tc2dzLmxlbmd0aCkgb25Nc2dDYWxsYmFjayhuZXdfZ3JvdXBfbXNncyk7XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLy/lpITnkIbmlLbliLDnmoTnvqTmma7pgJrlkozmj5DnpLrmtojmga9cclxuICAgICAgICAgICAgdmFyIGhhbmRsZXJPcmRpbmFyeUFuZFRpcEdyb3VwTXNncyA9IGZ1bmN0aW9uIChldmVudFR5cGUsIGdyb3VwTXNnQXJyYXkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBncm91cE1zZ01hcCA9IHt9OyAvL+S/neWtmOaUtuWIsOeahOe+pOa2iOaBr+S/oeaBr++8iOe+pOWPt++8jOacgOWwj++8jOacgOWkp+a2iOaBr3Nlce+8jOa2iOaBr+WIl+ihqO+8iVxyXG4gICAgICAgICAgICAgICAgdmFyIG5ld19ncm91cF9tc2dzID0gW107XHJcbiAgICAgICAgICAgICAgICB2YXIgbWluR3JvdXBNc2dTZXEgPSA5OTk5OTk5OTtcclxuICAgICAgICAgICAgICAgIHZhciBtYXhHcm91cE1zZ1NlcSA9IC0xO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiBpbiBncm91cE1zZ0FycmF5KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBncm91cE1zZ3MgPSBncm91cE1zZ01hcFtncm91cE1zZ0FycmF5W2pdLlRvR3JvdXBJZF07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFncm91cE1zZ3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBNc2dzID0gZ3JvdXBNc2dNYXBbZ3JvdXBNc2dBcnJheVtqXS5Ub0dyb3VwSWRdID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtaW5cIjogbWluR3JvdXBNc2dTZXEsIC8v5pS25Yiw5paw5raI5oGv5pyA5bCPc2VxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1heFwiOiBtYXhHcm91cE1zZ1NlcSwgLy/mlLbliLDmlrDmtojmga/mnIDlpKdzZXFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibXNnc1wiOiBbXSAvL+aUtuWIsOeahOaWsOa2iOaBr1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvL+abtOaWsOmVv+i9ruivoueahOe+pE5vdGljZVNlcVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChncm91cE1zZ0FycmF5W2pdLk5vdGljZVNlcSA+IG5vdGljZVNlcSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2cud2FybihcIm5vdGljZVNlcT1cIiArIG5vdGljZVNlcSArIFwiLG1zZ05vdGljZVNlcT1cIiArIGdyb3VwTXNnQXJyYXlbal0uTm90aWNlU2VxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm90aWNlU2VxID0gZ3JvdXBNc2dBcnJheVtqXS5Ob3RpY2VTZXE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwTXNnQXJyYXlbal0uRXZlbnQgPSBldmVudFR5cGU7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBNc2dNYXBbZ3JvdXBNc2dBcnJheVtqXS5Ub0dyb3VwSWRdLm1zZ3MucHVzaChncm91cE1zZ0FycmF5W2pdKTsgLy/mlrDlop7kuIDmnaHmtojmga9cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ3JvdXBNc2dBcnJheVtqXS5Nc2dTZXEgPCBncm91cE1zZ3MubWluKSB7IC8v6K6w5b2V5pyA5bCP55qE5raI5oGvc2VxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwTXNnTWFwW2dyb3VwTXNnQXJyYXlbal0uVG9Hcm91cElkXS5taW4gPSBncm91cE1zZ0FycmF5W2pdLk1zZ1NlcTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdyb3VwTXNnQXJyYXlbal0uTXNnU2VxID4gZ3JvdXBNc2dzLm1heCkgeyAvL+iusOW9leacgOWkp+eahOa2iOaBr3NlcVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cE1zZ01hcFtncm91cE1zZ0FycmF5W2pdLlRvR3JvdXBJZF0ubWF4ID0gZ3JvdXBNc2dBcnJheVtqXS5Nc2dTZXE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGdyb3VwSWQgaW4gZ3JvdXBNc2dNYXApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcENvdW50ID0gZ3JvdXBNc2dNYXBbZ3JvdXBJZF0ubWF4IC0gZ3JvdXBNc2dNYXBbZ3JvdXBJZF0ubWluICsgMTsgLy/mlLbliLDnmoTmlrDnmoTnvqTmtojmga/mlbBcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY3VyTWF4TXNnU2VxID0gbXlHcm91cE1heFNlcXNbZ3JvdXBJZF07IC8v6I635Y+W5pys5Zyw5L+d5a2Y55qE576k5pyA5aSn5raI5oGvc2VxXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1ck1heE1zZ1NlcSkgeyAvL+WtmOWcqOi/meS4que+pOeahOacgOWkp+a2iOaBr3NlcVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+mrmOW5tuWPkeaDheWGteS4i++8jOmVv+i9ruivouWPr+iDveWtmOWcqOS4oua2iOaBr++8jOi/meaXtumcgOimgeWuouaIt+err+mAmui/h+aLieWPlue+pOa2iOaBr+aOpeWPo+ihpem9kOS4i1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLzHjgIHlpoLmnpzmlLbliLDnmoTmlrDmtojmga/mnIDlsI9zZXHmr5TlvZPliY3mnIDlpKfnvqTmtojmga9zZXHlpKfkuo4x77yM5YiZ6KGo56S65pS25Yiw55qE576k5raI5oGv5Y+R55Sf6Lez6LeD77yM6ZyA6KaB6KGl6b2QXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vMuOAgeaUtuWIsOeahOaWsOe+pOa2iOaBr3NlceWtmOWcqOS4jei/nue7reaDheWGte+8jOS5n+mcgOimgeihpem9kFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ3JvdXBNc2dNYXBbZ3JvdXBJZF0ubWluIC0gY3VyTWF4TXNnU2VxID4gMSB8fCBncm91cE1zZ01hcFtncm91cElkXS5tc2dzLmxlbmd0aCA8IHRlbXBDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lj5HotbfkuIDkuKrmi4nnvqTnvqTmtojmga/or7fmsYJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZy53YXJuKFwi5Y+R6LW35LiA5qyh6KGl6b2Q576k5raI5oGv6K+35rGCLGN1ck1heE1zZ1NlcT1cIiArIGN1ck1heE1zZ1NlcSArIFwiLCBtaW5Nc2dTZXE9XCIgKyBncm91cE1zZ01hcFtncm91cElkXS5taW4gKyBcIiwgbWF4TXNnU2VxPVwiICsgZ3JvdXBNc2dNYXBbZ3JvdXBJZF0ubWF4ICsgXCIsIG1zZ3MubGVuZ3RoPVwiICsgZ3JvdXBNc2dNYXBbZ3JvdXBJZF0ubXNncy5sZW5ndGggKyBcIiwgdGVtcENvdW50PVwiICsgdGVtcENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldExvc3RHcm91cE1zZ3MoZ3JvdXBJZCwgZ3JvdXBNc2dNYXBbZ3JvdXBJZF0ubWF4LCBncm91cE1zZ01hcFtncm91cElkXS5tYXggLSBjdXJNYXhNc2dTZXEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/mm7TmlrBteUdyb3VwTWF4U2Vxc+S4reeahOe+pOacgOWkp3NlcVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlTXlHcm91cEN1ck1heFNlcShncm91cElkLCBncm91cE1zZ01hcFtncm91cElkXS5tYXgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3X2dyb3VwX21zZ3MgPSBhZGRHcm91cE1zZ0xpc3QoZ3JvdXBNc2dNYXBbZ3JvdXBJZF0ubXNncywgbmV3X2dyb3VwX21zZ3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHsgLy/kuI3lrZjlnKjor6XnvqTnmoTmnIDlpKfmtojmga9zZXFcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nLndhcm4oXCLkuI3lrZjlnKjor6XnvqTnmoTmnIDlpKfmtojmga9zZXHvvIznvqRpZD1cIiArIGdyb3VwSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+mrmOW5tuWPkeaDheWGteS4i++8jOmVv+i9ruivouWPr+iDveWtmOWcqOS4oua2iOaBr++8jOi/meaXtumcgOimgeWuouaIt+err+mAmui/h+aLieWPlue+pOa2iOaBr+aOpeWPo+ihpem9kOS4i1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLzHjgIHmlLbliLDnmoTmlrDnvqTmtojmga9zZXHlrZjlnKjkuI3ov57nu63mg4XlhrXvvIzkuZ/pnIDopoHooaXpvZBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdyb3VwTXNnTWFwW2dyb3VwSWRdLm1zZ3MubGVuZ3RoIDwgdGVtcENvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WPkei1t+S4gOS4quaLiee+pOe+pOa2iOaBr+ivt+axglxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nLndhcm4oXCLlj5HotbfkuIDmrKHooaXpvZDnvqTmtojmga/or7fmsYIsbWluTXNnU2VxPVwiICsgZ3JvdXBNc2dNYXBbZ3JvdXBJZF0ubWluICsgXCIsIG1heE1zZ1NlcT1cIiArIGdyb3VwTXNnTWFwW2dyb3VwSWRdLm1heCArIFwiLCBtc2dzLmxlbmd0aD1cIiArIGdyb3VwTXNnTWFwW2dyb3VwSWRdLm1zZ3MubGVuZ3RoICsgXCIsIHRlbXBDb3VudD1cIiArIHRlbXBDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRMb3N0R3JvdXBNc2dzKGdyb3VwSWQsIGdyb3VwTXNnTWFwW2dyb3VwSWRdLm1heCwgdGVtcENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5pu05pawbXlHcm91cE1heFNlcXPkuK3nmoTnvqTmnIDlpKdzZXFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZU15R3JvdXBDdXJNYXhTZXEoZ3JvdXBJZCwgZ3JvdXBNc2dNYXBbZ3JvdXBJZF0ubWF4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld19ncm91cF9tc2dzID0gYWRkR3JvdXBNc2dMaXN0KGdyb3VwTXNnTWFwW2dyb3VwSWRdLm1zZ3MsIG5ld19ncm91cF9tc2dzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChuZXdfZ3JvdXBfbXNncy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBNc2dTdG9yZS51cGRhdGVUaW1lbGluZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG9uTXNnQ2FsbGJhY2sgJiYgbmV3X2dyb3VwX21zZ3MubGVuZ3RoKSBvbk1zZ0NhbGxiYWNrKG5ld19ncm91cF9tc2dzKTtcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvL+WkhOeQhuaWsOeahOe+pOaPkOekuua2iOaBr1xyXG4gICAgICAgICAgICB2YXIgaGFuZGxlckdyb3VwVGlwcyA9IGZ1bmN0aW9uIChncm91cFRpcHMpIHtcclxuICAgICAgICAgICAgICAgIHZhciBuZXdfZ3JvdXBfbXNncyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbyBpbiBncm91cFRpcHMpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZ3JvdXBUaXAgPSBncm91cFRpcHNbb107XHJcbiAgICAgICAgICAgICAgICAgICAgLy/mt7vliqBldmVudOWtl+autVxyXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwVGlwLkV2ZW50ID0gTE9OR19QT0xMSU5OR19FVkVOVF9UWVBFLkdST1VQX1RJUDtcclxuICAgICAgICAgICAgICAgICAgICAvL+abtOaWsOe+pOa2iOaBr+mAmuefpXNlcVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChncm91cFRpcC5Ob3RpY2VTZXEgPiBub3RpY2VTZXEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm90aWNlU2VxID0gZ3JvdXBUaXAuTm90aWNlU2VxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgbXNnID0gaGFuZGxlckdyb3VwTXNnKGdyb3VwVGlwLCBmYWxzZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1zZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdfZ3JvdXBfbXNncy5wdXNoKG1zZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG5ld19ncm91cF9tc2dzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIE1zZ1N0b3JlLnVwZGF0ZVRpbWVsaW5lKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAob25Nc2dDYWxsYmFjayAmJiBuZXdfZ3JvdXBfbXNncy5sZW5ndGgpIG9uTXNnQ2FsbGJhY2sobmV3X2dyb3VwX21zZ3MpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLy/lpITnkIbmlrDnmoTnvqTns7vnu5/mtojmga9cclxuICAgICAgICAgICAgLy9pc05lZWRWYWxpZFJlcGVhdE1zZyDmmK/lkKbpnIDopoHliKTph41cclxuICAgICAgICAgICAgdmFyIGhhbmRsZXJHcm91cFN5c3RlbU1zZ3MgPSBmdW5jdGlvbiAoZ3JvdXBTeXN0ZW1Nc2dzLCBpc05lZWRWYWxpZFJlcGVhdE1zZykge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgayBpbiBncm91cFN5c3RlbU1zZ3MpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZ3JvdXBUaXAgPSBncm91cFN5c3RlbU1zZ3Nba107XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGdyb3VwUmVwb3J0VHlwZU1zZyA9IGdyb3VwVGlwLk1zZ0JvZHk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcG9ydFR5cGUgPSBncm91cFJlcG9ydFR5cGVNc2cuUmVwb3J0VHlwZTtcclxuICAgICAgICAgICAgICAgICAgICAvL+W9k+mVv+i9ruivoui/lOWbnueahOe+pOezu+e7n+a2iOaBr++8jOaJjemcgOimgeabtOaWsOe+pOa2iOaBr+mAmuefpXNlcVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc05lZWRWYWxpZFJlcGVhdE1zZyA9PSBmYWxzZSAmJiBncm91cFRpcC5Ob3RpY2VTZXEgJiYgZ3JvdXBUaXAuTm90aWNlU2VxID4gbm90aWNlU2VxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdGljZVNlcSA9IGdyb3VwVGlwLk5vdGljZVNlcTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRvQWNjb3VudCA9IGdyb3VwVGlwLkdyb3VwSW5mby5Ub19BY2NvdW50O1xyXG4gICAgICAgICAgICAgICAgICAgIC8v6L+H5ruk5pys5LiN5bqU6K+l57uZ6Ieq5bex55qE57O757uf5raI5oGvXHJcbiAgICAgICAgICAgICAgICAgICAgLyppZiAoIXRvQWNjb3VudCB8fCB0b0FjY291bnQgIT0gY3R4LmlkZW50aWZpZXIpIHtcclxuICAgICAgICAgICAgICAgICBsb2cuZXJyb3IoXCLmlLbliLDmnKzkuI3lupTor6Xnu5noh6rlt7HnmoTns7vnu5/mtojmga86IFRvX0FjY291bnQ9XCIgKyB0b0FjY291bnQpO1xyXG4gICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgIH0qL1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc05lZWRWYWxpZFJlcGVhdE1zZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3ZhciBrZXk9Z3JvdXBUaXAuVG9Hcm91cElkK1wiX1wiK3JlcG9ydFR5cGUrXCJfXCIrZ3JvdXBUaXAuTXNnVGltZVN0YW1wK1wiX1wiK2dyb3VwUmVwb3J0VHlwZU1zZy5PcGVyYXRvcl9BY2NvdW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIga2V5ID0gZ3JvdXBUaXAuVG9Hcm91cElkICsgXCJfXCIgKyByZXBvcnRUeXBlICsgXCJfXCIgKyBncm91cFJlcG9ydFR5cGVNc2cuT3BlcmF0b3JfQWNjb3VudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzRXhpc3QgPSBncm91cFN5c3RlbU1zZ3NDYWNoZVtrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNFeGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nLndhcm4oXCLmlLbliLDph43lpI3nmoTnvqTns7vnu5/mtojmga/vvJprZXk9XCIgKyBrZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBTeXN0ZW1Nc2dzQ2FjaGVba2V5XSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgbm90aWZ5ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlNyY0ZsYWdcIjogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJSZXBvcnRUeXBlXCI6IHJlcG9ydFR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiR3JvdXBJZFwiOiBncm91cFRpcC5Ub0dyb3VwSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiR3JvdXBOYW1lXCI6IGdyb3VwVGlwLkdyb3VwSW5mby5Hcm91cE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiT3BlcmF0b3JfQWNjb3VudFwiOiBncm91cFJlcG9ydFR5cGVNc2cuT3BlcmF0b3JfQWNjb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJNc2dUaW1lXCI6IGdyb3VwVGlwLk1zZ1RpbWVTdGFtcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJncm91cFJlcG9ydFR5cGVNc2dcIjogZ3JvdXBSZXBvcnRUeXBlTXNnXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHJlcG9ydFR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBHUk9VUF9TWVNURU1fVFlQRS5KT0lOX0dST1VQX1JFUVVFU1Q6IC8v55Sz6K+35Yqg576kKOWPquacieeuoeeQhuWRmOS8muaOpeaUtuWIsClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmeVtcIlJlbWFya0luZm9cIl0gPSBncm91cFJlcG9ydFR5cGVNc2cuUmVtYXJrSW5mbztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmeVtcIk1zZ0tleVwiXSA9IGdyb3VwUmVwb3J0VHlwZU1zZy5Nc2dLZXk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZnlbXCJBdXRoZW50aWNhdGlvblwiXSA9IGdyb3VwUmVwb3J0VHlwZU1zZy5BdXRoZW50aWNhdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmeVtcIlVzZXJEZWZpbmVkRmllbGRcIl0gPSBncm91cFRpcC5Vc2VyRGVmaW5lZEZpZWxkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZ5W1wiRnJvbV9BY2NvdW50XCJdID0gZ3JvdXBUaXAuRnJvbV9BY2NvdW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZ5W1wiTXNnU2VxXCJdID0gZ3JvdXBUaXAuQ2xpZW50U2VxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZ5W1wiTXNnUmFuZG9tXCJdID0gZ3JvdXBUaXAuTXNnUmFuZG9tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgR1JPVVBfU1lTVEVNX1RZUEUuSk9JTl9HUk9VUF9BQ0NFUFQ6IC8v55Sz6K+35Yqg576k6KKr5ZCM5oSPKOWPquacieeUs+ivt+S6uuiHquW3seaOpeaUtuWIsClcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBHUk9VUF9TWVNURU1fVFlQRS5KT0lOX0dST1VQX1JFRlVTRTogLy/nlLPor7fliqDnvqTooqvmi5Lnu50o5Y+q5pyJ55Sz6K+35Lq66Ieq5bex5o6l5pS25YiwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZ5W1wiUmVtYXJrSW5mb1wiXSA9IGdyb3VwUmVwb3J0VHlwZU1zZy5SZW1hcmtJbmZvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgR1JPVVBfU1lTVEVNX1RZUEUuS0lDSzogLy/ooqvnrqHnkIblkZjouKLlh7rnvqQo5Y+q5pyJ6KKr6Lii6ICF5o6l5pS25YiwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEdST1VQX1NZU1RFTV9UWVBFLkRFU1RPUlk6IC8v576k6KKr6Kej5pWjKOWFqOWRmOaOpeaUtilcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBHUk9VUF9TWVNURU1fVFlQRS5DUkVBVEU6IC8v5Yib5bu6576kKOWIm+W7uuiAheaOpeaUtiwg5LiN5bGV56S6KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEdST1VQX1NZU1RFTV9UWVBFLklOVklURURfSk9JTl9HUk9VUF9SRVFVRVNUOiAvL+mCgOivt+WKoOe+pCjooqvpgoDor7fogIXmjqXmlLYpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgR1JPVVBfU1lTVEVNX1RZUEUuSU5WSVRFRF9KT0lOX0dST1VQX1JFUVVFU1RfQUdSRUU6IC8v6YKA6K+35Yqg576kKOiiq+mCgOivt+iAhemcgOWQjOaEjylcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBHUk9VUF9TWVNURU1fVFlQRS5RVUlUOiAvL+S4u+WKqOmAgOe+pCjkuLvliqjpgIDlh7rogIXmjqXmlLYsIOS4jeWxleekuilcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBHUk9VUF9TWVNURU1fVFlQRS5TRVRfQURNSU46IC8v576k6K6+572u566h55CG5ZGYKOiiq+iuvue9ruiAheaOpeaUtilcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBHUk9VUF9TWVNURU1fVFlQRS5DQU5DRUxfQURNSU46IC8v5Y+W5raI566h55CG5ZGYKOiiq+WPlua2iOiAheaOpeaUtilcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBHUk9VUF9TWVNURU1fVFlQRS5SRVZPS0U6IC8v576k5bey6KKr5Zue5pS2KOWFqOWRmOaOpeaUtiwg5LiN5bGV56S6KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgR1JPVVBfU1lTVEVNX1RZUEUuUkVBREVEOiAvL+e+pOa2iOaBr+W3suivu+WQjOatpVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgR1JPVVBfU1lTVEVNX1RZUEUuQ1VTVE9NOiAvL+eUqOaIt+iHquWumuS5iemAmuefpSjpu5jorqTlhajlkZjmjqXmlLYpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZnlbXCJNc2dTZXFcIl0gPSBncm91cFRpcC5Nc2dTZXE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZnlbXCJVc2VyRGVmaW5lZEZpZWxkXCJdID0gZ3JvdXBSZXBvcnRUeXBlTXNnLlVzZXJEZWZpbmVkRmllbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZy5lcnJvcihcIuacquefpee+pOezu+e7n+a2iOaBr+exu+Wei++8mnJlcG9ydFR5cGU9XCIgKyByZXBvcnRUeXBlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzTmVlZFZhbGlkUmVwZWF0TXNnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v5rOo6YeK5Y+q5pS25Y+W5LiA56eN6YCa55+lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIChyZXBvcnRUeXBlID09IEdST1VQX1NZU1RFTV9UWVBFLkpPSU5fR1JPVVBfUkVRVUVTVCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+Wbnuiwg1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob25Hcm91cFN5c3RlbU5vdGlmeUNhbGxiYWNrc1tyZXBvcnRUeXBlXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Hcm91cFN5c3RlbU5vdGlmeUNhbGxiYWNrc1tyZXBvcnRUeXBlXShub3RpZnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nLmVycm9yKFwi5pyq55+l576k57O757uf5raI5oGv57G75Z6L77yacmVwb3J0VHlwZT1cIiArIHJlcG9ydFR5cGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v5Zue6LCDXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvbkdyb3VwU3lzdGVtTm90aWZ5Q2FsbGJhY2tzW3JlcG9ydFR5cGVdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVwb3J0VHlwZSA9PSBHUk9VUF9TWVNURU1fVFlQRS5SRUFERUQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJyID0gbm90aWZ5Lmdyb3VwUmVwb3J0VHlwZU1zZy5Hcm91cFJlYWRJbmZvQXJyYXk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcnIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gYXJyW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkdyb3VwU3lzdGVtTm90aWZ5Q2FsbGJhY2tzW3JlcG9ydFR5cGVdKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Hcm91cFN5c3RlbU5vdGlmeUNhbGxiYWNrc1tyZXBvcnRUeXBlXShub3RpZnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSAvL2xvb3BcclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAvL+WkhOeQhuaWsOeahOWlveWPi+ezu+e7n+mAmuefpVxyXG4gICAgICAgICAgICAvL2lzTmVlZFZhbGlkUmVwZWF0TXNnIOaYr+WQpumcgOimgeWIpOmHjVxyXG4gICAgICAgICAgICB2YXIgaGFuZGxlckZyaWVuZFN5c3RlbU5vdGljZXMgPSBmdW5jdGlvbiAoZnJpZW5kU3lzdGVtTm90aWNlcywgaXNOZWVkVmFsaWRSZXBlYXRNc2cpIHtcclxuICAgICAgICAgICAgICAgIHZhciBmcmllbmROb3RpY2UsIHR5cGUsIG5vdGlmeTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGsgaW4gZnJpZW5kU3lzdGVtTm90aWNlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZyaWVuZE5vdGljZSA9IGZyaWVuZFN5c3RlbU5vdGljZXNba107XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9IGZyaWVuZE5vdGljZS5QdXNoVHlwZTtcclxuICAgICAgICAgICAgICAgICAgICAvL+W9k+mVv+i9ruivoui/lOWbnueahOe+pOezu+e7n+a2iOaBr++8jOaJjemcgOimgeabtOaWsOmAmuefpXNlcVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc05lZWRWYWxpZFJlcGVhdE1zZyA9PSBmYWxzZSAmJiBmcmllbmROb3RpY2UuTm90aWNlU2VxICYmIGZyaWVuZE5vdGljZS5Ob3RpY2VTZXEgPiBub3RpY2VTZXEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm90aWNlU2VxID0gZnJpZW5kTm90aWNlLk5vdGljZVNlcTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbm90aWZ5ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnVHlwZSc6IHR5cGVcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZSSUVORF9OT1RJQ0VfVFlQRS5GUklFTkRfQUREOiAvL+WlveWPi+ihqOWinuWKoFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZ5W1wiQWNjb3VudHNcIl0gPSBmcmllbmROb3RpY2UuRnJpZW5kQWRkX0FjY291bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGUklFTkRfTk9USUNFX1RZUEUuRlJJRU5EX0RFTEVURTogLy/lpb3lj4vooajliKDpmaRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmeVtcIkFjY291bnRzXCJdID0gZnJpZW5kTm90aWNlLkZyaWVuZERlbF9BY2NvdW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRlJJRU5EX05PVElDRV9UWVBFLlBFTkRFTkNZX0FERDogLy/mnKrlhrPlop7liqBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmeVtcIlBlbmRlbmN5TGlzdFwiXSA9IGZyaWVuZE5vdGljZS5QZW5kZW5jeUFkZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZSSUVORF9OT1RJQ0VfVFlQRS5QRU5ERU5DWV9ERUxFVEU6IC8v5pyq5Yaz5Yig6ZmkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZnlbXCJBY2NvdW50c1wiXSA9IGZyaWVuZE5vdGljZS5GcmllblBlbmN5ZERlbF9BY2NvdW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRlJJRU5EX05PVElDRV9UWVBFLkJMQUNLX0xJU1RfQUREOiAvL+m7keWQjeWNleWinuWKoFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZ5W1wiQWNjb3VudHNcIl0gPSBmcmllbmROb3RpY2UuQmxhY2tMaXN0QWRkX0FjY291bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGUklFTkRfTk9USUNFX1RZUEUuQkxBQ0tfTElTVF9ERUxFVEU6IC8v6buR5ZCN5Y2V5Yig6ZmkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZnlbXCJBY2NvdW50c1wiXSA9IGZyaWVuZE5vdGljZS5CbGFja0xpc3REZWxfQWNjb3VudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLypjYXNlIEZSSUVORF9OT1RJQ0VfVFlQRS5QRU5ERU5DWV9SRVBPUlQ6Ly/mnKrlhrPlt7Lor7vkuIrmiqVcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICBjYXNlIEZSSUVORF9OT1RJQ0VfVFlQRS5GUklFTkRfVVBEQVRFOi8v5aW95Y+L5pWw5o2u5pu05pawXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZy5lcnJvcihcIuacquefpeWlveWPi+ezu+e7n+mAmuefpeexu+Wei++8mmZyaWVuZE5vdGljZT1cIiArIEpTT04uc3RyaW5naWZ5KGZyaWVuZE5vdGljZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNOZWVkVmFsaWRSZXBlYXRNc2cpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT0gRlJJRU5EX05PVElDRV9UWVBFLlBFTkRFTkNZX0FERCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lm57osINcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvbkZyaWVuZFN5c3RlbU5vdGlmeUNhbGxiYWNrc1t0eXBlXSkgb25GcmllbmRTeXN0ZW1Ob3RpZnlDYWxsYmFja3NbdHlwZV0obm90aWZ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v5Zue6LCDXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvbkZyaWVuZFN5c3RlbU5vdGlmeUNhbGxiYWNrc1t0eXBlXSkgb25GcmllbmRTeXN0ZW1Ob3RpZnlDYWxsYmFja3NbdHlwZV0obm90aWZ5KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IC8vbG9vcFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLy/lpITnkIbmlrDnmoTotYTmlpnns7vnu5/pgJrnn6VcclxuICAgICAgICAgICAgLy9pc05lZWRWYWxpZFJlcGVhdE1zZyDmmK/lkKbpnIDopoHliKTph41cclxuICAgICAgICAgICAgdmFyIGhhbmRsZXJQcm9maWxlU3lzdGVtTm90aWNlcyA9IGZ1bmN0aW9uIChwcm9maWxlU3lzdGVtTm90aWNlcywgaXNOZWVkVmFsaWRSZXBlYXRNc2cpIHtcclxuICAgICAgICAgICAgICAgIHZhciBwcm9maWxlTm90aWNlLCB0eXBlLCBub3RpZnk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrIGluIHByb2ZpbGVTeXN0ZW1Ob3RpY2VzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZmlsZU5vdGljZSA9IHByb2ZpbGVTeXN0ZW1Ob3RpY2VzW2tdO1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSBwcm9maWxlTm90aWNlLlB1c2hUeXBlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5b2T6ZW/6L2u6K+i6L+U5Zue55qE576k57O757uf5raI5oGv77yM5omN6ZyA6KaB5pu05paw6YCa55+lc2VxXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzTmVlZFZhbGlkUmVwZWF0TXNnID09IGZhbHNlICYmIHByb2ZpbGVOb3RpY2UuTm90aWNlU2VxICYmIHByb2ZpbGVOb3RpY2UuTm90aWNlU2VxID4gbm90aWNlU2VxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdGljZVNlcSA9IHByb2ZpbGVOb3RpY2UuTm90aWNlU2VxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBub3RpZnkgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdUeXBlJzogdHlwZVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgUFJPRklMRV9OT1RJQ0VfVFlQRS5QUk9GSUxFX01PRElGWTogLy/otYTmlpnkv67mlLlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmeVtcIlByb2ZpbGVfQWNjb3VudFwiXSA9IHByb2ZpbGVOb3RpY2UuUHJvZmlsZV9BY2NvdW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZ5W1wiUHJvZmlsZUxpc3RcIl0gPSBwcm9maWxlTm90aWNlLlByb2ZpbGVMaXN0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2cuZXJyb3IoXCLmnKrnn6XotYTmlpnns7vnu5/pgJrnn6XnsbvlnovvvJpwcm9maWxlTm90aWNlPVwiICsgSlNPTi5zdHJpbmdpZnkocHJvZmlsZU5vdGljZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNOZWVkVmFsaWRSZXBlYXRNc2cpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT0gUFJPRklMRV9OT1RJQ0VfVFlQRS5QUk9GSUxFX01PRElGWSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lm57osINcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvblByb2ZpbGVTeXN0ZW1Ob3RpZnlDYWxsYmFja3NbdHlwZV0pIG9uUHJvZmlsZVN5c3RlbU5vdGlmeUNhbGxiYWNrc1t0eXBlXShub3RpZnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy/lm57osINcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9uUHJvZmlsZVN5c3RlbU5vdGlmeUNhbGxiYWNrc1t0eXBlXSkgb25Qcm9maWxlU3lzdGVtTm90aWZ5Q2FsbGJhY2tzW3R5cGVdKG5vdGlmeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSAvL2xvb3BcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8v5aSE55CG5paw55qE576k57O757uf5raI5oGvKOeUqOS6juebtOaSreWkp+e+pOmVv+i9ruivoilcclxuICAgICAgICAgICAgdmFyIGhhbmRsZXJHcm91cFN5c3RlbU1zZyA9IGZ1bmN0aW9uIChncm91cFRpcCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGdyb3VwUmVwb3J0VHlwZU1zZyA9IGdyb3VwVGlwLk1zZ0JvZHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVwb3J0VHlwZSA9IGdyb3VwUmVwb3J0VHlwZU1zZy5SZXBvcnRUeXBlO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRvQWNjb3VudCA9IGdyb3VwVGlwLkdyb3VwSW5mby5Ub19BY2NvdW50O1xyXG4gICAgICAgICAgICAgICAgLy/ov4fmu6TmnKzkuI3lupTor6Xnu5noh6rlt7HnmoTns7vnu5/mtojmga9cclxuICAgICAgICAgICAgICAgIC8vaWYoIXRvQWNjb3VudCB8fCB0b0FjY291bnQhPWN0eC5pZGVudGlmaWVyKXtcclxuICAgICAgICAgICAgICAgIC8vICAgIGxvZy5lcnJvcihcIuaUtuWIsOacrOS4jeW6lOivpee7meiHquW3seeahOezu+e7n+a2iOaBrzogVG9fQWNjb3VudD1cIit0b0FjY291bnQpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAvL31cclxuICAgICAgICAgICAgICAgIHZhciBub3RpZnkgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJTcmNGbGFnXCI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJSZXBvcnRUeXBlXCI6IHJlcG9ydFR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJHcm91cElkXCI6IGdyb3VwVGlwLlRvR3JvdXBJZCxcclxuICAgICAgICAgICAgICAgICAgICBcIkdyb3VwTmFtZVwiOiBncm91cFRpcC5Hcm91cEluZm8uR3JvdXBOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiT3BlcmF0b3JfQWNjb3VudFwiOiBncm91cFJlcG9ydFR5cGVNc2cuT3BlcmF0b3JfQWNjb3VudCxcclxuICAgICAgICAgICAgICAgICAgICBcIk1zZ1RpbWVcIjogZ3JvdXBUaXAuTXNnVGltZVN0YW1wXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChyZXBvcnRUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBHUk9VUF9TWVNURU1fVFlQRS5KT0lOX0dST1VQX1JFUVVFU1Q6IC8v55Sz6K+35Yqg576kKOWPquacieeuoeeQhuWRmOS8muaOpeaUtuWIsClcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZ5W1wiUmVtYXJrSW5mb1wiXSA9IGdyb3VwUmVwb3J0VHlwZU1zZy5SZW1hcmtJbmZvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub3RpZnlbXCJNc2dLZXlcIl0gPSBncm91cFJlcG9ydFR5cGVNc2cuTXNnS2V5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub3RpZnlbXCJBdXRoZW50aWNhdGlvblwiXSA9IGdyb3VwUmVwb3J0VHlwZU1zZy5BdXRoZW50aWNhdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZ5W1wiVXNlckRlZmluZWRGaWVsZFwiXSA9IGdyb3VwVGlwLlVzZXJEZWZpbmVkRmllbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmeVtcIkZyb21fQWNjb3VudFwiXSA9IGdyb3VwVGlwLkZyb21fQWNjb3VudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZ5W1wiTXNnU2VxXCJdID0gZ3JvdXBUaXAuQ2xpZW50U2VxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub3RpZnlbXCJNc2dSYW5kb21cIl0gPSBncm91cFRpcC5Nc2dSYW5kb207XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgR1JPVVBfU1lTVEVNX1RZUEUuSk9JTl9HUk9VUF9BQ0NFUFQ6IC8v55Sz6K+35Yqg576k6KKr5ZCM5oSPKOWPquacieeUs+ivt+S6uuiHquW3seaOpeaUtuWIsClcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIEdST1VQX1NZU1RFTV9UWVBFLkpPSU5fR1JPVVBfUkVGVVNFOiAvL+eUs+ivt+WKoOe+pOiiq+aLkue7nSjlj6rmnInnlLPor7fkurroh6rlt7HmjqXmlLbliLApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmeVtcIlJlbWFya0luZm9cIl0gPSBncm91cFJlcG9ydFR5cGVNc2cuUmVtYXJrSW5mbztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBHUk9VUF9TWVNURU1fVFlQRS5LSUNLOiAvL+iiq+euoeeQhuWRmOi4ouWHuue+pCjlj6rmnInooqvouKLogIXmjqXmlLbliLApXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBHUk9VUF9TWVNURU1fVFlQRS5ERVNUT1JZOiAvL+e+pOiiq+ino+aVoyjlhajlkZjmjqXmlLYpXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBHUk9VUF9TWVNURU1fVFlQRS5DUkVBVEU6IC8v5Yib5bu6576kKOWIm+W7uuiAheaOpeaUtiwg5LiN5bGV56S6KVxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgR1JPVVBfU1lTVEVNX1RZUEUuSU5WSVRFRF9KT0lOX0dST1VQX1JFUVVFU1Q6IC8v6YKA6K+35Yqg576kKOiiq+mCgOivt+iAheaOpeaUtilcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIEdST1VQX1NZU1RFTV9UWVBFLklOVklURURfSk9JTl9HUk9VUF9SRVFVRVNUX0FHUkVFOiAvL+mCgOivt+WKoOe+pCjooqvpgoDor7fogIXpnIDopoHlkIzmhI8pXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBHUk9VUF9TWVNURU1fVFlQRS5RVUlUOiAvL+S4u+WKqOmAgOe+pCjkuLvliqjpgIDlh7rogIXmjqXmlLYsIOS4jeWxleekuilcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIEdST1VQX1NZU1RFTV9UWVBFLlNFVF9BRE1JTjogLy/nvqTorr7nva7nrqHnkIblkZgo6KKr6K6+572u6ICF5o6l5pS2KVxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgR1JPVVBfU1lTVEVNX1RZUEUuQ0FOQ0VMX0FETUlOOiAvL+WPlua2iOeuoeeQhuWRmCjooqvlj5bmtojogIXmjqXmlLYpXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBHUk9VUF9TWVNURU1fVFlQRS5SRVZPS0U6IC8v576k5bey6KKr5Zue5pS2KOWFqOWRmOaOpeaUtiwg5LiN5bGV56S6KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIEdST1VQX1NZU1RFTV9UWVBFLkNVU1RPTTogLy/nlKjmiLfoh6rlrprkuYnpgJrnn6Uo6buY6K6k5YWo5ZGY5o6l5pS2KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub3RpZnlbXCJNc2dTZXFcIl0gPSBncm91cFRpcC5Nc2dTZXE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmeVtcIlVzZXJEZWZpbmVkRmllbGRcIl0gPSBncm91cFJlcG9ydFR5cGVNc2cuVXNlckRlZmluZWRGaWVsZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nLmVycm9yKFwi5pyq55+l576k57O757uf5raI5oGv57G75Z6L77yacmVwb3J0VHlwZT1cIiArIHJlcG9ydFR5cGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8v5Zue6LCDXHJcbiAgICAgICAgICAgICAgICBpZiAob25Hcm91cFN5c3RlbU5vdGlmeUNhbGxiYWNrc1tyZXBvcnRUeXBlXSkgb25Hcm91cFN5c3RlbU5vdGlmeUNhbGxiYWNrc1tyZXBvcnRUeXBlXShub3RpZnkpO1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8v5aSE55CGQzJDIEVWRU5UIOa2iOaBr+mAmumBk0FycmF5XHJcbiAgICAgICAgICAgIHZhciBoYW5kbGVyQzJjTm90aWZ5TXNnQXJyYXkgPSBmdW5jdGlvbiAoYXJyKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyQzJjRXZlbnRNc2coYXJyW2ldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy/lpITnkIZDMkMgRVZFTlQg5raI5oGv6YCa6YGTSXRlbVxyXG4gICAgICAgICAgICB2YXIgaGFuZGxlckMyY0V2ZW50TXNnID0gZnVuY3Rpb24gKG5vdGlmeSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvciggbm90aWZ5IClcclxuICAgICAgICAgICAgICAgIHZhciBzdWJUeXBlID0gbm90aWZ5LlN1Yk1zZ1R5cGU7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHN1YlR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIEMyQ19FVkVOVF9TVUJfVFlQRS5SRUFERUQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZy53YXJuKFwiQzJD5bey6K+75raI5oGv6YCa55+lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm90aWZ5LlJlYWRDMmNNc2dOb3RpZnkgJiYgbm90aWZ5LlJlYWRDMmNNc2dOb3RpZnkuVWluUGFpclJlYWRBcnJheSAmJiBvbkMyY0V2ZW50Q2FsbGJhY2tzW3N1YlR5cGVdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IG5vdGlmeS5SZWFkQzJjTXNnTm90aWZ5LlVpblBhaXJSZWFkQXJyYXkubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBub3RpZnkuUmVhZEMyY01zZ05vdGlmeS5VaW5QYWlyUmVhZEFycmF5W2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQzJjRXZlbnRDYWxsYmFja3Nbc3ViVHlwZV0oaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBDMkNfRVZFTlRfU1VCX1RZUEUuS0lDS0VET1VUOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2cud2FybihcIuWkmue7iOerr+S6kui4oumAmuefpVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdG9fbG9nb3V0KCdpbnN0YW5jZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob25DMmNFdmVudENhbGxiYWNrc1tzdWJUeXBlXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DMmNFdmVudENhbGxiYWNrc1tzdWJUeXBlXSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZy5lcnJvcihcIuacquefpUMyY+ezu+e7n+a2iOaBr++8mnN1YlR5cGU9XCIgKyBzdWJUeXBlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLy/plb/ova7or6JcclxuICAgICAgICAgICAgdGhpcy5sb25nUG9sbGluZyA9IGZ1bmN0aW9uIChjYk9rLCBjYkVycikge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgb3B0cyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAnVGltZW91dCc6IGxvbmdQb2xsaW5nRGVmYXVsdFRpbWVPdXQgLyAxMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb29raWUnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdOb3RpZnlTZXEnOiBub3RpZnlTZXEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdOb3RpY2VTZXEnOiBub3RpY2VTZXFcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgaWYgKExvbmdQb2xsaW5nSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRzLkNvb2tpZS5Mb25nUG9sbGluZ0lkID0gTG9uZ1BvbGxpbmdJZDtcclxuICAgICAgICAgICAgICAgICAgICBkb1BvbGxpbmcoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvdG9fZ2V0TG9uZ1BvbGxpbmdJZCh7fSwgZnVuY3Rpb24gKHJlc3ApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9uZ1BvbGxpbmdJZCA9IG9wdHMuQ29va2llLkxvbmdQb2xsaW5nSWQgPSByZXNwLkxvbmdQb2xsaW5nSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v5qC55o2u5Zue5YyF6K6+572u6LaF5pe25pe26Ze077yM6LaF5pe25pe26ZW/5LiN6IO9PjYw56eS77yM5Zug5Li6d2Via2l05omL5py656uv55qE5pyA6ZW/6LaF5pe25pe26Ze05LiN6IO95aSn5LqONjBzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvbmdQb2xsaW5nRGVmYXVsdFRpbWVPdXQgPSByZXNwLlRpbWVvdXQgPiA2MCA/IGxvbmdQb2xsaW5nRGVmYXVsdFRpbWVPdXQgOiByZXNwLlRpbWVvdXQgKiAxMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb1BvbGxpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBkb1BvbGxpbmcoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvdG9fbG9uZ1BvbGxpbmcob3B0cywgZnVuY3Rpb24gKHJlc3ApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSBpbiByZXNwLkV2ZW50QXJyYXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlID0gcmVzcC5FdmVudEFycmF5W2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChlLkV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBMT05HX1BPTExJTk5HX0VWRU5UX1RZUEUuQzJDOiAvL2MyY+a2iOaBr+mAmuefpVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+abtOaWsEMyQ+a2iOaBr+mAmuefpXNlcVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZnlTZXEgPSBlLk5vdGlmeVNlcTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nLndhcm4oXCJsb25ncG9sbGluZzogcmVjZWl2ZWQgbmV3IGMyYyBtc2dcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6I635Y+W5paw5raI5oGvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1zZ01hbmFnZXIuc3luY01zZ3MoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBMT05HX1BPTExJTk5HX0VWRU5UX1RZUEUuR1JPVVBfQ09NTU9OOiAvL+aZrumAmue+pOa2iOaBr+mAmuefpVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2cud2FybihcImxvbmdwb2xsaW5nOiByZWNlaXZlZCBuZXcgZ3JvdXAgbXNnc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlck9yZGluYXJ5QW5kVGlwR3JvdXBNc2dzKGUuRXZlbnQsIGUuR3JvdXBNc2dBcnJheSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgTE9OR19QT0xMSU5OR19FVkVOVF9UWVBFLkdST1VQX1RJUDogLy/vvIjlhajlkZjlub/mkq3vvInnvqTmj5DnpLrmtojmga9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nLndhcm4oXCJsb25ncG9sbGluZzogcmVjZWl2ZWQgbmV3IGdyb3VwIHRpcHNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXJPcmRpbmFyeUFuZFRpcEdyb3VwTXNncyhlLkV2ZW50LCBlLkdyb3VwVGlwcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgTE9OR19QT0xMSU5OR19FVkVOVF9UWVBFLkdST1VQX1RJUDI6IC8v576k5o+Q56S65raI5oGvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZy53YXJuKFwibG9uZ3BvbGxpbmc6IHJlY2VpdmVkIG5ldyBncm91cCB0aXBzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyT3JkaW5hcnlBbmRUaXBHcm91cE1zZ3MoZS5FdmVudCwgZS5Hcm91cFRpcHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIExPTkdfUE9MTElOTkdfRVZFTlRfVFlQRS5HUk9VUF9TWVNURU06IC8v77yI5aSa57uI56uv5ZCM5q2l77yJ576k57O757uf5raI5oGvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZy53YXJuKFwibG9uZ3BvbGxpbmc6IHJlY2VpdmVkIG5ldyBncm91cCBzeXN0ZW0gbXNnc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9mYWxzZSDooajnpLog6YCa6L+H6ZW/6L2u6K+i5pS25Yiw55qE576k57O757uf5raI5oGv77yM5Y+v5Lul5LiN5Yik6YeNXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXJHcm91cFN5c3RlbU1zZ3MoZS5Hcm91cFRpcHMsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBMT05HX1BPTExJTk5HX0VWRU5UX1RZUEUuRlJJRU5EX05PVElDRTogLy/lpb3lj4vns7vnu5/pgJrnn6VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nLndhcm4oXCJsb25ncG9sbGluZzogcmVjZWl2ZWQgbmV3IGZyaWVuZCBzeXN0ZW0gbm90aWNlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2ZhbHNlIOihqOekuiDpgJrov4fplb/ova7or6LmlLbliLDnmoTlpb3lj4vns7vnu5/pgJrnn6XvvIzlj6/ku6XkuI3liKTph41cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlckZyaWVuZFN5c3RlbU5vdGljZXMoZS5GcmllbmRMaXN0TW9kLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgTE9OR19QT0xMSU5OR19FVkVOVF9UWVBFLlBST0ZJTEVfTk9USUNFOiAvL+i1hOaWmeezu+e7n+mAmuefpVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2cud2FybihcImxvbmdwb2xsaW5nOiByZWNlaXZlZCBuZXcgcHJvZmlsZSBzeXN0ZW0gbm90aWNlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2ZhbHNlIOihqOekuiDpgJrov4fplb/ova7or6LmlLbliLDnmoTotYTmlpnns7vnu5/pgJrnn6XvvIzlj6/ku6XkuI3liKTph41cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlclByb2ZpbGVTeXN0ZW1Ob3RpY2VzKGUuUHJvZmlsZURhdGFNb2QsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBMT05HX1BPTExJTk5HX0VWRU5UX1RZUEUuQzJDX0NPTU1PTjogLy9jMmPmtojmga/pgJrnn6VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWNlU2VxID0gZS5DMmNNc2dBcnJheVswXS5Ob3RpY2VTZXE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5pu05pawQzJD5raI5oGv6YCa55+lc2VxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZy53YXJuKFwibG9uZ3BvbGxpbmc6IHJlY2VpdmVkIG5ldyBjMmNfY29tbW9uIG1zZ1wiLCBub3RpY2VTZXEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyT3JkaW5hcnlBbmRUaXBDMmNNc2dzKGUuRXZlbnQsIGUuQzJjTXNnQXJyYXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIExPTkdfUE9MTElOTkdfRVZFTlRfVFlQRS5DMkNfRVZFTlQ6IC8vYzJj5bey6K+75raI5oGv6YCa55+lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGljZVNlcSA9IGUuQzJjTm90aWZ5TXNnQXJyYXlbMF0uTm90aWNlU2VxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2cud2FybihcImxvbmdwb2xsaW5nOiByZWNlaXZlZCBuZXcgYzJjX2V2ZW50IG1zZ1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlckMyY05vdGlmeU1zZ0FycmF5KGUuQzJjTm90aWZ5TXNnQXJyYXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2cuZXJyb3IoXCJsb25ncG9sbGluZ+aUtuWIsOacquefpeaWsOa2iOaBr+exu+WeizogRXZlbnQ9XCIgKyBlLkV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN1Y2Nlc3NJbmZvID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0FjdGlvblN0YXR1cyc6IEFDVElPTl9TVEFUVVMuT0ssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnRXJyb3JDb2RlJzogMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVjTG9uZ1BvbGxpbmdTdGF0dXMoc3VjY2Vzc0luZm8pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9sb2cuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlY0xvbmdQb2xsaW5nU3RhdHVzKGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYkVycikgY2JFcnIoZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAvL+Wkp+e+pCDplb/ova7or6JcclxuICAgICAgICAgICAgdGhpcy5iaWdHcm91cExvbmdQb2xsaW5nID0gZnVuY3Rpb24gKGNiT2ssIGNiRXJyKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIEdyb3VwSWQgPSBCaWdHcm91cElkO1xyXG4gICAgICAgICAgICAgICAgdmFyIG9wdHMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ1VTUCc6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1N0YXJ0U2VxJzogYmlnR3JvdXBMb25nUG9sbGluZ1N0YXJ0U2VxLCAvL+ivt+axguaLiea2iOaBr+eahOi1t+Wni3NlcVxyXG4gICAgICAgICAgICAgICAgICAgICdIb2xkVGltZSc6IGJpZ0dyb3VwTG9uZ1BvbGxpbmdIb2xkVGltZSwgLy/lrqLmiLfnq6/plb/ova7or6LnmoTotoXml7bml7bpl7TvvIzljZXkvY3mmK/np5JcclxuICAgICAgICAgICAgICAgICAgICAnS2V5JzogYmlnR3JvdXBMb25nUG9sbGluZ0tleSAvL+WuouaIt+err+WKoOWFpee+pOe7hOWQjuaUtuWIsOeahOeahEtleVxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBwcm90b19iaWdHcm91cExvbmdQb2xsaW5nKG9wdHMsIGZ1bmN0aW9uIChyZXNwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEdyb3VwSWQgIT0gQmlnR3JvdXBJZCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtc2dPYmpMaXN0ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgYmlnR3JvdXBMb25nUG9sbGluZ1N0YXJ0U2VxID0gcmVzcC5OZXh0U2VxO1xyXG4gICAgICAgICAgICAgICAgICAgIGJpZ0dyb3VwTG9uZ1BvbGxpbmdIb2xkVGltZSA9IHJlc3AuSG9sZFRpbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmlnR3JvdXBMb25nUG9sbGluZ0tleSA9IHJlc3AuS2V5O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcC5Sc3BNc2dMaXN0ICYmIHJlc3AuUnNwTXNnTGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtc2dDb3VudCA9IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dJbmZvLCBldmVudCwgbXNnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gcmVzcC5Sc3BNc2dMaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dJbmZvID0gcmVzcC5Sc3BNc2dMaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lkI7lj7Dov5nph4zlgZrkuobosIPmlbTvvIznvKnnn63lrZfmrrXlkI3vvIzku6XkuIvmmK/lhbzlrrnku6PnoIFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBrZXlNYXAgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJGX0FjY291bnRcIjogXCJGcm9tX0FjY291bnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlRfQWNjb3VudFwiOiBcIlRvX0FjY291bnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZBVHlwZVwiOiBcIkVudW1Gcm9tX0FjY291bnRUeXBlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJUQVR5cGVcIjogXCJFbnVtVG9fQWNjb3VudFR5cGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkdDb2RlXCI6IFwiR3JvdXBDb2RlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJHTmFtZVwiOiBcIkdyb3VwTmFtZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiR0lkXCI6IFwiR3JvdXBJZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTUZsZ1wiOiBcIk1zZ0ZsYWdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZBRUluZm9cIjogXCJNc2dGcm9tX0FjY291bnRFeHRyYUluZm9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkV2dFwiOiBcIkV2ZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJHSW5mb1wiOiBcIkdyb3VwSW5mb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQlBsY1wiOiBcIklzUGxhY2VNc2dcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk1Cb2R5XCI6IFwiTXNnQm9keVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUHJpXCI6IFwiTXNnUHJpb3JpdHlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlJkbVwiOiBcIk1zZ1JhbmRvbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTVNlcVwiOiBcIk1zZ1NlcVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVFN0cFwiOiBcIk1zZ1RpbWVTdGFtcFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVEdJZFwiOiBcIlRvR3JvdXBJZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVUVJbmZvXCI6IFwiVWluRXh0SW5mb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVUlkXCI6IFwiVXNlcklkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJCU3lzXCI6IFwiSXNTeXN0ZW1Nc2dcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZBSFVybFwiOiBcIkZyb21fQWNjb3VudEhlYWR1cmxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZBTmlja1wiOiBcIkZyb21fQWNjb3VudE5pY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0luZm8gPSB0b29sLnJlcGxhY2VPYmplY3Qoa2V5TWFwLCBtc2dJbmZvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5aaC5p6c5piv5bey57uP5Yig6Zmk55qE5raI5oGv5oiW6ICF5Y+R6YCB6ICF5biQ5Y+35Li656m65oiW6ICF5raI5oGv5YaF5a655Li656m6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0lzUGxhY2VNc2c9MVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1zZ0luZm8uSXNQbGFjZU1zZyB8fCAhbXNnSW5mby5Gcm9tX0FjY291bnQgfHwgIW1zZ0luZm8uTXNnQm9keSB8fCBtc2dJbmZvLk1zZ0JvZHkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudCA9IG1zZ0luZm8uRXZlbnQ7IC8v576k5raI5oGv57G75Z6LXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBMT05HX1BPTExJTk5HX0VWRU5UX1RZUEUuR1JPVVBfQ09NTU9OOiAvL+e+pOaZrumAmua2iOaBr1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2cuaW5mbyhcImJpZ0dyb3VwTG9uZ1BvbGxpbmc6IHJldHVybiBuZXcgZ3JvdXAgbXNnXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2cgPSBoYW5kbGVyR3JvdXBNc2cobXNnSW5mbywgZmFsc2UsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnICYmIG1zZ09iakxpc3QucHVzaChtc2cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dDb3VudCA9IG1zZ0NvdW50ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBMT05HX1BPTExJTk5HX0VWRU5UX1RZUEUuR1JPVVBfVElQOiAvL+e+pOaPkOekuua2iOaBr1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgTE9OR19QT0xMSU5OR19FVkVOVF9UWVBFLkdST1VQX1RJUDI6IC8v576k5o+Q56S65raI5oGvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZy5pbmZvKFwiYmlnR3JvdXBMb25nUG9sbGluZzogcmV0dXJuIG5ldyBncm91cCB0aXBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZyA9IGhhbmRsZXJHcm91cE1zZyhtc2dJbmZvLCBmYWxzZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2cgJiYgbXNnT2JqTGlzdC5wdXNoKG1zZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vbXNnQ291bnQ9bXNnQ291bnQrMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBMT05HX1BPTExJTk5HX0VWRU5UX1RZUEUuR1JPVVBfU1lTVEVNOiAvL+e+pOezu+e7n+a2iOaBr1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2cuaW5mbyhcImJpZ0dyb3VwTG9uZ1BvbGxpbmc6IG5ldyBncm91cCBzeXN0ZW0gbXNnXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyR3JvdXBTeXN0ZW1Nc2cobXNnSW5mbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZy5lcnJvcihcImJpZ0dyb3VwTG9uZ1BvbGxpbmfmlLbliLDmnKrnn6XmlrDmtojmga/nsbvlnos6IEV2ZW50PVwiICsgZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAvLyBmb3IgbG9vcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobXNnQ291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNc2dNYW5hZ2VyLnNldEJpZ0dyb3VwTG9uZ1BvbGxpbmdNc2dNYXAobXNnSW5mby5Ub0dyb3VwSWQsIG1zZ0NvdW50KTsgLy9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZy53YXJuKFwiY3VycmVudCBiaWdHcm91cExvbmdQb2xsaW5nTXNnTWFwOiBcIiArIEpTT04uc3RyaW5naWZ5KGJpZ0dyb3VwTG9uZ1BvbGxpbmdNc2dNYXApKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjdXJCaWdHcm91cExvbmdQb2xsaW5nUmV0RXJyb3JDb3VudCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/ov5Tlm57ov57mjqXnirbmgIFcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3VjY2Vzc0luZm8gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdBY3Rpb25TdGF0dXMnOiBBQ1RJT05fU1RBVFVTLk9LLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnRXJyb3JDb2RlJzogQ09OTkVDVElPTl9TVEFUVVMuT04sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdFcnJvckluZm8nOiAnY29ubmVjdGlvbiBpcyBvay4uLidcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIENvbm5NYW5hZ2VyLmNhbGxCYWNrKHN1Y2Nlc3NJbmZvKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNiT2spIGNiT2sobXNnT2JqTGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAob25CaWdHcm91cE1zZ0NhbGxiYWNrKSBvbkJpZ0dyb3VwTXNnQ2FsbGJhY2sobXNnT2JqTGlzdCk7IC8v6L+U5Zue5paw5raI5oGvXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8v6YeN5paw5ZCv5Yqo6ZW/6L2u6K+iXHJcbiAgICAgICAgICAgICAgICAgICAgYmlnR3JvdXBMb25nUG9sbGluZ09uICYmIE1zZ01hbmFnZXIuYmlnR3JvdXBMb25nUG9sbGluZygpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyLkVycm9yQ29kZSA9PSBsb25nUG9sbGluZ1BhY2thZ2VUb29MYXJnZUVycm9yQ29kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiaWdHcm91cExvbmdQb2xsaW5nU3RhcnRTZXEgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXJyLkVycm9yQ29kZSAhPSBsb25nUG9sbGluZ1RpbWVPdXRFcnJvckNvZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nLmVycm9yKGVyci5FcnJvckluZm8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+iusOW9lemVv+i9ruivoui/lOWbnumUmeivr+asoeaVsFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJCaWdHcm91cExvbmdQb2xsaW5nUmV0RXJyb3JDb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyLkVycm9yQ29kZSA9PSBsb25nUG9sbGluZ0tpY2tlZEVycm9yQ29kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+eZu+WHulxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2cuZXJyb3IoXCLlpJrlrp7kvovnmbvlvZXvvIzooqtraWNrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob25LaWNrZWRFdmVudENhbGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2lja2VkRXZlbnRDYWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy/ntK/orqHotoXov4fkuIDlrprmrKHmlbDvvIzkuI3lho3lj5Hotbfplb/ova7or6Lor7fmsYJcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VyQmlnR3JvdXBMb25nUG9sbGluZ1JldEVycm9yQ291bnQgPCBMT05HX1BPTExJTkdfTUFYX1JFVF9FUlJPUl9DT1VOVCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiaWdHcm91cExvbmdQb2xsaW5nT24gJiYgTXNnTWFuYWdlci5iaWdHcm91cExvbmdQb2xsaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVyckluZm8gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQWN0aW9uU3RhdHVzJzogQUNUSU9OX1NUQVRVUy5GQUlMLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0Vycm9yQ29kZSc6IENPTk5FQ1RJT05fU1RBVFVTLk9GRixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdFcnJvckluZm8nOiAnY29ubmVjdGlvbiBpcyBvZmYnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbm5NYW5hZ2VyLmNhbGxCYWNrKGVyckluZm8pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2JFcnIpIGNiRXJyKGVycik7XHJcblxyXG4gICAgICAgICAgICAgICAgfSwgYmlnR3JvdXBMb25nUG9sbGluZ0hvbGRUaW1lICogMTAwMCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvL+abtOaWsOi/nuaOpeeKtuaAgVxyXG4gICAgICAgICAgICB2YXIgdXBkYXRlY0xvbmdQb2xsaW5nU3RhdHVzID0gZnVuY3Rpb24gKGVyck9iaikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVyck9iai5FcnJvckNvZGUgPT0gMCB8fCBlcnJPYmouRXJyb3JDb2RlID09IGxvbmdQb2xsaW5nVGltZU91dEVycm9yQ29kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1ckxvbmdQb2xsaW5nUmV0RXJyb3JDb3VudCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9uZ1BvbGxpbmdPZmZDYWxsYmFja0ZsYWcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZXJyb3JJbmZvO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpc05lZWRDYWxsYmFjayA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoY3VyTG9uZ1BvbGxpbmdTdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBDT05ORUNUSU9OX1NUQVRVUy5JTklUOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNOZWVkQ2FsbGJhY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VyTG9uZ1BvbGxpbmdTdGF0dXMgPSBDT05ORUNUSU9OX1NUQVRVUy5PTjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ySW5mbyA9IFwiY3JlYXRlIGNvbm5lY3Rpb24gc3VjY2Vzc2Z1bGx5KElOSVQtPk9OKVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQ09OTkVDVElPTl9TVEFUVVMuT046XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvckluZm8gPSBcImNvbm5lY3Rpb24gaXMgb24uLi4oT04tPk9OKVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQ09OTkVDVElPTl9TVEFUVVMuUkVDT05ORUNUOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VyTG9uZ1BvbGxpbmdTdGF0dXMgPSBDT05ORUNUSU9OX1NUQVRVUy5PTjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ySW5mbyA9IFwiY29ubmVjdGlvbiBpcyBvbi4uLihSRUNPTk5FQ1QtPk9OKVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQ09OTkVDVElPTl9TVEFUVVMuT0ZGOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNOZWVkQ2FsbGJhY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VyTG9uZ1BvbGxpbmdTdGF0dXMgPSBDT05ORUNUSU9OX1NUQVRVUy5SRUNPTk5FQ1Q7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvckluZm8gPSBcInJlY29ubmVjdCBzdWNjZXNzZnVsbHkoT0ZGLT5SRUNPTk5FQ1QpXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN1Y2Nlc3NJbmZvID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQWN0aW9uU3RhdHVzJzogQUNUSU9OX1NUQVRVUy5PSyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0Vycm9yQ29kZSc6IGN1ckxvbmdQb2xsaW5nU3RhdHVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnRXJyb3JJbmZvJzogZXJyb3JJbmZvXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBpc05lZWRDYWxsYmFjayAmJiBDb25uTWFuYWdlci5jYWxsQmFjayhzdWNjZXNzSW5mbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9uZ1BvbGxpbmdPbiAmJiBNc2dNYW5hZ2VyLmxvbmdQb2xsaW5nKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVyck9iai5FcnJvckNvZGUgPT0gbG9uZ1BvbGxpbmdLaWNrZWRFcnJvckNvZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+eZu+WHulxyXG4gICAgICAgICAgICAgICAgICAgIGxvZy5lcnJvcihcIuWkmuWunuS+i+eZu+W9le+8jOiiq2tpY2tcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9uS2lja2VkRXZlbnRDYWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uS2lja2VkRXZlbnRDYWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+iusOW9lemVv+i9ruivoui/lOWbnuino+aekGpzb27plJnor6/mrKHmlbBcclxuICAgICAgICAgICAgICAgICAgICBjdXJMb25nUG9sbGluZ1JldEVycm9yQ291bnQrKztcclxuICAgICAgICAgICAgICAgICAgICBsb2cud2FybihcImxvbmdQb2xsaW5n5o6l5Y+j56ysXCIgKyBjdXJMb25nUG9sbGluZ1JldEVycm9yQ291bnQgKyBcIuasoeaKpemUmTogXCIgKyBlcnJPYmouRXJyb3JJbmZvKTtcclxuICAgICAgICAgICAgICAgICAgICAvL+e0r+iuoei2hei/h+S4gOWumuasoeaVsFxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJMb25nUG9sbGluZ1JldEVycm9yQ291bnQgPD0gTE9OR19QT0xMSU5HX01BWF9SRVRfRVJST1JfQ09VTlQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChzdGFydE5leHRMb25nUG9sbGluZywgMTAwKTsgLy9cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJMb25nUG9sbGluZ1N0YXR1cyA9IENPTk5FQ1RJT05fU1RBVFVTLk9GRjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVyckluZm8gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQWN0aW9uU3RhdHVzJzogQUNUSU9OX1NUQVRVUy5GQUlMLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0Vycm9yQ29kZSc6IENPTk5FQ1RJT05fU1RBVFVTLk9GRixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdFcnJvckluZm8nOiAnY29ubmVjdGlvbiBpcyBvZmYnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvbmdQb2xsaW5nT2ZmQ2FsbGJhY2tGbGFnID09IGZhbHNlICYmIENvbm5NYW5hZ2VyLmNhbGxCYWNrKGVyckluZm8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb25nUG9sbGluZ09mZkNhbGxiYWNrRmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZy53YXJuKGxvbmdQb2xsaW5nSW50ZXJ2YWxUaW1lICsgXCLmr6vnp5LkuYvlkI4sU0RL5Lya5Y+R6LW35paw55qEbG9uZ1BvbGxpbmfor7fmsYIuLi5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoc3RhcnROZXh0TG9uZ1BvbGxpbmcsIGxvbmdQb2xsaW5nSW50ZXJ2YWxUaW1lKTsgLy/plb/ova7or6LmjqXlj6PmiqXplJnmrKHmlbDovr7liLDkuIDlrprlgLzvvIzmr4/pl7TpmpQ1c+WPkei1t+aWsOeahOmVv+i9ruivolxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8v5aSE55CG5pS25Yiw55qE5pmu6YCaQzJD5raI5oGvXHJcbiAgICAgICAgICAgIHZhciBoYW5kbGVyT3JkaW5hcnlBbmRUaXBDMmNNc2dzID0gZnVuY3Rpb24gKGV2ZW50VHlwZSwgQzJjTXNnQXJyYXkpIHtcclxuICAgICAgICAgICAgICAgIC8v5aSE55CGYzJj5raI5oGvXHJcbiAgICAgICAgICAgICAgICB2YXIgbm90aWZ5SW5mbyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdmFyIG1zZ0luZm9zID0gW107XHJcbiAgICAgICAgICAgICAgICBtc2dJbmZvcyA9IEMyY01zZ0FycmF5OyAvL+i/lOWbnueahOa2iOaBr+WIl+ihqFxyXG4gICAgICAgICAgICAgICAgLy8gTXNnU3RvcmUuY29va2llID0gcmVzcC5Db29raWU7Ly9jb29raWVz77yM6K6w5b2V5b2T5YmN6K+75Yiw55qE5pyA5paw5raI5oGv5L2N572uXHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBtc2dJbmZvcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtc2dJbmZvID0gbXNnSW5mb3NbaV07XHJcbiAgICAgICAgICAgICAgICB2YXIgaXNTZW5kTXNnLCBpZDtcclxuICAgICAgICAgICAgICAgIHZhciBoZWFkVXJsID0gIG1zZ0luZm8uRnJvbV9BY2NvdW50SGVhZHVybCB8fCAnJztcclxuICAgICAgICAgICAgICAgICAgICBpZiAobXNnSW5mby5Gcm9tX0FjY291bnQgPT0gY3R4LmlkZW50aWZpZXIpIHsgLy/lvZPliY3nlKjmiLflj5HpgIHnmoTmtojmga9cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNTZW5kTXNnID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQgPSBtc2dJbmZvLlRvX0FjY291bnQ7IC8v6K+75Y+W5o6l5pS26ICF5L+h5oGvXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHsgLy/lvZPliY3nlKjmiLfmlLbliLDnmoTmtojmga9cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNTZW5kTXNnID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkID0gbXNnSW5mby5Gcm9tX0FjY291bnQ7IC8v6K+75Y+W5Y+R6YCB6ICF5L+h5oGvXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzZXNzID0gTXNnU3RvcmUuc2Vzc0J5VHlwZUlkKFNFU1NJT05fVFlQRS5DMkMsIGlkKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXNlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VzcyA9IG5ldyBTZXNzaW9uKFNFU1NJT05fVFlQRS5DMkMsIGlkLCBpZCwgaGVhZFVybCwgMCwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHR2YXIgbXNnID0gbmV3IE1zZyhzZXNzLCBpc1NlbmRNc2csIG1zZ0luZm8uTXNnU2VxLCBtc2dJbmZvLk1zZ1JhbmRvbSwgbXNnSW5mby5Nc2dUaW1lU3RhbXAsIG1zZ0luZm8uRnJvbV9BY2NvdW50LCBDMkNfTVNHX1NVQl9UWVBFLkNPTU1PTiwgbXNnSW5mby5Gcm9tX0FjY291bnROaWNrLCBoZWFkVXJsKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbXNnQm9keSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1zZ0NvbnRlbnQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtc2dUeXBlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBtaSBpbiBtc2dJbmZvLk1zZ0JvZHkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXNnQm9keSA9IG1zZ0luZm8uTXNnQm9keVttaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1zZ1R5cGUgPSBtc2dCb2R5Lk1zZ1R5cGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAobXNnVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBNU0dfRUxFTUVOVF9UWVBFLlRFWFQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnQ29udGVudCA9IG5ldyBNc2cuRWxlbS5UZXh0KG1zZ0JvZHkuTXNnQ29udGVudC5UZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgTVNHX0VMRU1FTlRfVFlQRS5GQUNFOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0NvbnRlbnQgPSBuZXcgTXNnLkVsZW0uRmFjZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnQm9keS5Nc2dDb250ZW50LkluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dCb2R5Lk1zZ0NvbnRlbnQuRGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIE1TR19FTEVNRU5UX1RZUEUuSU1BR0U6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnQ29udGVudCA9IG5ldyBNc2cuRWxlbS5JbWFnZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0JvZHkuTXNnQ29udGVudC5VVUlELFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dCb2R5Lk1zZ0NvbnRlbnQuSW1hZ2VGb3JtYXQgfHwgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiBpbiBtc2dCb2R5Lk1zZ0NvbnRlbnQuSW1hZ2VJbmZvQXJyYXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRlbXBJbWcgPSBtc2dCb2R5Lk1zZ0NvbnRlbnQuSW1hZ2VJbmZvQXJyYXlbal07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0NvbnRlbnQuYWRkSW1hZ2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgTXNnLkVsZW0uSW1hZ2VzLkltYWdlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBJbWcuVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wSW1nLlNpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcEltZy5XaWR0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wSW1nLkhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wSW1nLlVSTFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgTVNHX0VMRU1FTlRfVFlQRS5TT1VORDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobXNnQm9keS5Nc2dDb250ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0NvbnRlbnQgPSBuZXcgTXNnLkVsZW0uU291bmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dCb2R5Lk1zZ0NvbnRlbnQuVVVJRCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0JvZHkuTXNnQ29udGVudC5TZWNvbmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dCb2R5Lk1zZ0NvbnRlbnQuU2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0luZm8uRnJvbV9BY2NvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnSW5mby5Ub19BY2NvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnQm9keS5Nc2dDb250ZW50LkRvd25sb2FkX0ZsYWcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTRVNTSU9OX1RZUEUuQzJDXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnVHlwZSA9IE1TR19FTEVNRU5UX1RZUEUuVEVYVDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnQ29udGVudCA9IG5ldyBNc2cuRWxlbS5UZXh0KCdb6K+t6Z+z5raI5oGvXeS4i+i9veWcsOWdgOino+aekOWHuumUmScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgTVNHX0VMRU1FTlRfVFlQRS5MT0NBVElPTjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dDb250ZW50ID0gbmV3IE1zZy5FbGVtLkxvY2F0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dCb2R5Lk1zZ0NvbnRlbnQuTG9uZ2l0dWRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dCb2R5Lk1zZ0NvbnRlbnQuTGF0aXR1ZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0JvZHkuTXNnQ29udGVudC5EZXNjXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgTVNHX0VMRU1FTlRfVFlQRS5GSUxFOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBNU0dfRUxFTUVOVF9UWVBFLkZJTEUgKyBcIiBcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dUeXBlID0gTVNHX0VMRU1FTlRfVFlQRS5GSUxFO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtc2dCb2R5Lk1zZ0NvbnRlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnQ29udGVudCA9IG5ldyBNc2cuRWxlbS5GaWxlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnQm9keS5Nc2dDb250ZW50LlVVSUQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dCb2R5Lk1zZ0NvbnRlbnQuRmlsZU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dCb2R5Lk1zZ0NvbnRlbnQuRmlsZVNpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dJbmZvLkZyb21fQWNjb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0luZm8uVG9fQWNjb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0JvZHkuTXNnQ29udGVudC5Eb3dubG9hZF9GbGFnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU0VTU0lPTl9UWVBFLkMyQ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ1R5cGUgPSBNU0dfRUxFTUVOVF9UWVBFLlRFWFQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0NvbnRlbnQgPSBuZXcgTXNnLkVsZW0uVGV4dCgnW+aWh+S7tua2iOaBr+S4i+i9veWcsOWdgOino+aekOWHuumUmV0nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIE1TR19FTEVNRU5UX1RZUEUuQ1VTVE9NOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShtc2dCb2R5Lk1zZ0NvbnRlbnQuRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhICYmIGRhdGEudXNlckFjdGlvbiAmJiBkYXRhLnVzZXJBY3Rpb24gPT0gRlJJRU5EX1dSSVRFX01TR19BQ1RJT04uSU5HKSB7IC8v6L+H5ruk5a6J5Y2T5oiWaW9z55qE5q2j5Zyo6L6T5YWl6Ieq5a6a5LmJ5raI5oGvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ1R5cGUgPSBNU0dfRUxFTUVOVF9UWVBFLkNVU1RPTTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dDb250ZW50ID0gbmV3IE1zZy5FbGVtLkN1c3RvbShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnQm9keS5Nc2dDb250ZW50LkRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0JvZHkuTXNnQ29udGVudC5EZXNjLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dCb2R5Lk1zZ0NvbnRlbnQuRXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnVHlwZSA9IE1TR19FTEVNRU5UX1RZUEUuVEVYVDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dDb250ZW50ID0gbmV3IE1zZy5FbGVtLlRleHQoJ3dlYuerr+aaguS4jeaUr+aMgScgKyBtc2dCb2R5Lk1zZ1R5cGUgKyAn5raI5oGvJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbXNnLmVsZW1zLnB1c2gobmV3IE1zZy5FbGVtKG1zZ1R5cGUsIG1zZ0NvbnRlbnQpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtc2cuZWxlbXMubGVuZ3RoID4gMCAmJiBNc2dTdG9yZS5hZGRNc2cobXNnLCB0cnVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub3RpZnlJbmZvLnB1c2gobXNnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IC8vIGZvciBsb29wXHJcbiAgICAgICAgICAgICAgICBpZiAobm90aWZ5SW5mby5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICAgICAgICAgIE1zZ1N0b3JlLnVwZGF0ZVRpbWVsaW5lKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAobm90aWZ5SW5mby5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9uTXNnQ2FsbGJhY2spIG9uTXNnQ2FsbGJhY2sobm90aWZ5SW5mbyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvL+WPkei1t+aWsOeahOmVv+i9ruivouivt+axglxyXG4gICAgICAgICAgICB2YXIgc3RhcnROZXh0TG9uZ1BvbGxpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBsb25nUG9sbGluZ09uICYmIE1zZ01hbmFnZXIubG9uZ1BvbGxpbmcoKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8v5aSE55CG5pyq5Yaz55qE5Yqg576k55Sz6K+35raI5oGv5YiX6KGoXHJcbiAgICAgICAgICAgIHZhciBoYW5kbGVyQXBwbHlKb2luR3JvdXBTeXN0ZW1Nc2dzID0gZnVuY3Rpb24gKGV2ZW50QXJyYXkpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgaW4gZXZlbnRBcnJheSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBlID0gZXZlbnRBcnJheVtpXTtcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyR3JvdXBTeXN0ZW1Nc2dzKGUuR3JvdXBUaXBzLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGUuRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBMT05HX1BPTExJTk5HX0VWRU5UX1RZUEUuR1JPVVBfU1lTVEVNOiAvL++8iOWkmue7iOerr+WQjOatpe+8iee+pOezu+e7n+a2iOaBr1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nLndhcm4oXCJoYW5kbGVyQXBwbHlKb2luR3JvdXBTeXN0ZW1Nc2dz77yaIGhhbmRsZXIgbmV3IGdyb3VwIHN5c3RlbSBtc2dcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3RydWUg6KGo56S6IOino+WGs+WKoOe+pOeUs+ivt+mAmuefpeWtmOWcqOmHjeWkjeeahOmXrumimO+8iOW3suWkhOeQhueahOmAmuefpe+8jOS4i+asoeeZu+W9lei/mOS8muaLieWIsO+8ie+8jOmcgOimgeWIpOmHjVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlckdyb3VwU3lzdGVtTXNncyhlLkdyb3VwVGlwcywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZy5lcnJvcihcInN5bmNNc2dz5pS25Yiw5pyq55+l55qE576k57O757uf5raI5oGv57G75Z6LOiBFdmVudD1cIiArIGUuRXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLy/mi4nlj5ZjMmPmtojmga8o5YyF5ZCr5Yqg576k5pyq5Yaz5raI5oGv77yM6ZyA6KaB5aSE55CGKVxyXG4gICAgICAgICAgICB0aGlzLnN5bmNNc2dzID0gZnVuY3Rpb24gKGNiT2ssIGNiRXJyKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbm90aWZ5SW5mbyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdmFyIG1zZ0luZm9zID0gW107XHJcbiAgICAgICAgICAgICAgICAvL+ivu+WPlkMyQ+a2iOaBr1xyXG4gICAgICAgICAgICAgICAgcHJvdG9fZ2V0TXNncyhNc2dTdG9yZS5jb29raWUsIE1zZ1N0b3JlLnN5bmNGbGFnLCBmdW5jdGlvbiAocmVzcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5ouJ5Y+W5a6M5q+VXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3AuU3luY0ZsYWcgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBNc2dTdG9yZS5zeW5jRmxhZyA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8v5aSE55CGYzJj5raI5oGvXHJcbiAgICAgICAgICAgICAgICAgICAgbXNnSW5mb3MgPSByZXNwLk1zZ0xpc3Q7IC8v6L+U5Zue55qE5raI5oGv5YiX6KGoXHJcbiAgICAgICAgICAgICAgICAgICAgTXNnU3RvcmUuY29va2llID0gcmVzcC5Db29raWU7IC8vY29va2llc++8jOiusOW9leW9k+WJjeivu+WIsOeahOacgOaWsOa2iOaBr+S9jee9rlxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpIGluIG1zZ0luZm9zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtc2dJbmZvID0gbXNnSW5mb3NbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc1NlbmRNc2csIGlkLCBoZWFkVXJsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobXNnSW5mby5Gcm9tX0FjY291bnQgPT0gY3R4LmlkZW50aWZpZXIpIHsgLy/lvZPliY3nlKjmiLflj5HpgIHnmoTmtojmga9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU2VuZE1zZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZCA9IG1zZ0luZm8uVG9fQWNjb3VudDsgLy/or7vlj5bmjqXmlLbogIXkv6Hmga9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRVcmwgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHsgLy/lvZPliY3nlKjmiLfmlLbliLDnmoTmtojmga9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU2VuZE1zZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQgPSBtc2dJbmZvLkZyb21fQWNjb3VudDsgLy/or7vlj5blj5HpgIHogIXkv6Hmga9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRVcmwgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2VzcyA9IE1zZ1N0b3JlLnNlc3NCeVR5cGVJZChTRVNTSU9OX1RZUEUuQzJDLCBpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VzcyA9IG5ldyBTZXNzaW9uKFNFU1NJT05fVFlQRS5DMkMsIGlkLCBpZCwgaGVhZFVybCwgMCwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgbXNnID0gbmV3IE1zZyhzZXNzLCBpc1NlbmRNc2csIG1zZ0luZm8uTXNnU2VxLCBtc2dJbmZvLk1zZ1JhbmRvbSwgbXNnSW5mby5Nc2dUaW1lU3RhbXAsIG1zZ0luZm8uRnJvbV9BY2NvdW50LCBDMkNfTVNHX1NVQl9UWVBFLkNPTU1PTiwgbXNnSW5mby5Gcm9tX0FjY291bnROaWNrLCBtc2dJbmZvLkZyb21fQWNjb3VudEhlYWR1cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbXNnQm9keSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtc2dDb250ZW50ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1zZ1R5cGUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBtaSBpbiBtc2dJbmZvLk1zZ0JvZHkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0JvZHkgPSBtc2dJbmZvLk1zZ0JvZHlbbWldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnVHlwZSA9IG1zZ0JvZHkuTXNnVHlwZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAobXNnVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgTVNHX0VMRU1FTlRfVFlQRS5URVhUOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dDb250ZW50ID0gbmV3IE1zZy5FbGVtLlRleHQobXNnQm9keS5Nc2dDb250ZW50LlRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIE1TR19FTEVNRU5UX1RZUEUuRkFDRTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnQ29udGVudCA9IG5ldyBNc2cuRWxlbS5GYWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnQm9keS5Nc2dDb250ZW50LkluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnQm9keS5Nc2dDb250ZW50LkRhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBNU0dfRUxFTUVOVF9UWVBFLklNQUdFOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dDb250ZW50ID0gbmV3IE1zZy5FbGVtLkltYWdlcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0JvZHkuTXNnQ29udGVudC5VVUlELFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnQm9keS5Nc2dDb250ZW50LkltYWdlRm9ybWF0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogaW4gbXNnQm9keS5Nc2dDb250ZW50LkltYWdlSW5mb0FycmF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcEltZyA9IG1zZ0JvZHkuTXNnQ29udGVudC5JbWFnZUluZm9BcnJheVtqXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0NvbnRlbnQuYWRkSW1hZ2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IE1zZy5FbGVtLkltYWdlcy5JbWFnZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcEltZy5UeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wSW1nLlNpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBJbWcuV2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBJbWcuSGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wSW1nLlVSTFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBNU0dfRUxFTUVOVF9UWVBFLlNPVU5EOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB2YXIgc291bmRVcmwgPSBnZXRTb3VuZERvd25VcmwobXNnQm9keS5Nc2dDb250ZW50LlVVSUQsIG1zZ0luZm8uRnJvbV9BY2NvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1zZ0JvZHkuTXNnQ29udGVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnQ29udGVudCA9IG5ldyBNc2cuRWxlbS5Tb3VuZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dCb2R5Lk1zZ0NvbnRlbnQuVVVJRCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dCb2R5Lk1zZ0NvbnRlbnQuU2Vjb25kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0JvZHkuTXNnQ29udGVudC5TaXplLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0luZm8uRnJvbV9BY2NvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0luZm8uVG9fQWNjb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dCb2R5Lk1zZ0NvbnRlbnQuRG93bmxvYWRfRmxhZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTRVNTSU9OX1RZUEUuQzJDXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnVHlwZSA9IE1TR19FTEVNRU5UX1RZUEUuVEVYVDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0NvbnRlbnQgPSBuZXcgTXNnLkVsZW0uVGV4dCgnW+ivremfs+a2iOaBr13kuIvovb3lnLDlnYDop6PmnpDlh7rplJknKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIE1TR19FTEVNRU5UX1RZUEUuTE9DQVRJT046XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0NvbnRlbnQgPSBuZXcgTXNnLkVsZW0uTG9jYXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dCb2R5Lk1zZ0NvbnRlbnQuTG9uZ2l0dWRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnQm9keS5Nc2dDb250ZW50LkxhdGl0dWRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnQm9keS5Nc2dDb250ZW50LkRlc2NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBNU0dfRUxFTUVOVF9UWVBFLkZJTEU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBNU0dfRUxFTUVOVF9UWVBFLkZJTEUgKyBcIiBcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnVHlwZSA9IE1TR19FTEVNRU5UX1RZUEUuRklMRTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdmFyIGZpbGVVcmwgPSBnZXRGaWxlRG93blVybChtc2dCb2R5Lk1zZ0NvbnRlbnQuVVVJRCwgbXNnSW5mby5Gcm9tX0FjY291bnQsIG1zZ0JvZHkuTXNnQ29udGVudC5GaWxlTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtc2dCb2R5Lk1zZ0NvbnRlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0NvbnRlbnQgPSBuZXcgTXNnLkVsZW0uRmlsZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dCb2R5Lk1zZ0NvbnRlbnQuVVVJRCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dCb2R5Lk1zZ0NvbnRlbnQuRmlsZU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnQm9keS5Nc2dDb250ZW50LkZpbGVTaXplLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0luZm8uRnJvbV9BY2NvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0luZm8uVG9fQWNjb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dCb2R5Lk1zZ0NvbnRlbnQuRG93bmxvYWRfRmxhZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTRVNTSU9OX1RZUEUuQzJDXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnVHlwZSA9IE1TR19FTEVNRU5UX1RZUEUuVEVYVDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0NvbnRlbnQgPSBuZXcgTXNnLkVsZW0uVGV4dCgnW+aWh+S7tua2iOaBr+S4i+i9veWcsOWdgOino+aekOWHuumUmV0nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIE1TR19FTEVNRU5UX1RZUEUuQ1VTVE9NOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKG1zZ0JvZHkuTXNnQ29udGVudC5EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhICYmIGRhdGEudXNlckFjdGlvbiAmJiBkYXRhLnVzZXJBY3Rpb24gPT0gRlJJRU5EX1dSSVRFX01TR19BQ1RJT04uSU5HKSB7IC8v6L+H5ruk5a6J5Y2T5oiWaW9z55qE5q2j5Zyo6L6T5YWl6Ieq5a6a5LmJ5raI5oGvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dUeXBlID0gTVNHX0VMRU1FTlRfVFlQRS5DVVNUT007XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0NvbnRlbnQgPSBuZXcgTXNnLkVsZW0uQ3VzdG9tKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnQm9keS5Nc2dDb250ZW50LkRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dCb2R5Lk1zZ0NvbnRlbnQuRGVzYyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0JvZHkuTXNnQ29udGVudC5FeHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnVHlwZSA9IE1TR19FTEVNRU5UX1RZUEUuVEVYVDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnQ29udGVudCA9IG5ldyBNc2cuRWxlbS5UZXh0KCd3ZWLnq6/mmoLkuI3mlK/mjIEnICsgbXNnQm9keS5Nc2dUeXBlICsgJ+a2iOaBrycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZy5lbGVtcy5wdXNoKG5ldyBNc2cuRWxlbShtc2dUeXBlLCBtc2dDb250ZW50KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtc2cuZWxlbXMubGVuZ3RoID4gMCAmJiBNc2dTdG9yZS5hZGRNc2cobXNnLCB0cnVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZ5SW5mby5wdXNoKG1zZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IC8vIGZvciBsb29wXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8v5aSE55CG5Yqg576k5pyq5Yaz55Sz6K+35raI5oGvXHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlckFwcGx5Sm9pbkdyb3VwU3lzdGVtTXNncyhyZXNwLkV2ZW50QXJyYXkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAobm90aWZ5SW5mby5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBNc2dTdG9yZS51cGRhdGVUaW1lbGluZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYk9rKSBjYk9rKG5vdGlmeUluZm8pO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5vdGlmeUluZm8ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob25Nc2dDYWxsYmFjaykgb25Nc2dDYWxsYmFjayhub3RpZnlJbmZvKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvZy5lcnJvcihcImdldE1zZ3MgZmFpbGVkOlwiICsgZXJyLkVycm9ySW5mbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNiRXJyKSBjYkVycihlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgLy/mi4nlj5ZDMkPmvKvmuLjmtojmga9cclxuICAgICAgICAgICAgdGhpcy5nZXRDMkNIaXN0b3J5TXNncyA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYk9rLCBjYkVycikge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghb3B0aW9ucy5QZWVyX0FjY291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2JFcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2JFcnIodG9vbC5nZXRSZXR1cm5FcnJvcihcIlBlZXJfQWNjb3VudCBpcyBlbXB0eVwiLCAtMTMpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghb3B0aW9ucy5NYXhDbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLk1heENudCA9IDE1O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuTWF4Q250IDw9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2JFcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2JFcnIodG9vbC5nZXRSZXR1cm5FcnJvcihcIk1heENudCBzaG91bGQgYmUgZ3JlYXRlciB0aGFuIDBcIiwgLTE0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5NYXhDbnQgPiAxNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYkVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYkVycih0b29sLmdldFJldHVybkVycm9yKFwiTWF4Q250IGNhbiBub3QgYmUgZ3JlYXRlciB0aGFuIDE1XCIsIC0xNSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLk1zZ0tleSA9PSBudWxsIHx8IG9wdGlvbnMuTXNnS2V5ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLk1zZ0tleSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIG9wdHMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ1BlZXJfQWNjb3VudCc6IG9wdGlvbnMuUGVlcl9BY2NvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICdNYXhDbnQnOiBvcHRpb25zLk1heENudCxcclxuICAgICAgICAgICAgICAgICAgICAnTGFzdE1zZ1RpbWUnOiBvcHRpb25zLkxhc3RNc2dUaW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICdNc2dLZXknOiBvcHRpb25zLk1zZ0tleVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIC8v6K+75Y+WYzJj5ryr5ri45raI5oGvXHJcbiAgICAgICAgICAgICAgICBwcm90b19nZXRDMkNIaXN0b3J5TXNncyhvcHRzLCBmdW5jdGlvbiAocmVzcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtc2dPYmpMaXN0ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1zZ0luZm9zID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgLy/lpITnkIZjMmPmtojmga9cclxuICAgICAgICAgICAgICAgICAgICBtc2dJbmZvcyA9IHJlc3AuTXNnTGlzdDsgLy/ov5Tlm57nmoTmtojmga/liJfooahcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2VzcyA9IE1zZ1N0b3JlLnNlc3NCeVR5cGVJZChTRVNTSU9OX1RZUEUuQzJDLCBvcHRpb25zLlBlZXJfQWNjb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlc3MgPSBuZXcgU2Vzc2lvbihTRVNTSU9OX1RZUEUuQzJDLCBvcHRpb25zLlBlZXJfQWNjb3VudCwgb3B0aW9ucy5QZWVyX0FjY291bnQsICcnLCAwLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBtc2dJbmZvcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbXNnSW5mbyA9IG1zZ0luZm9zW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpc1NlbmRNc2csIGlkO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBoZWFkVXJsID0gbXNnSW5mby5Gcm9tX0FjY291bnRIZWFkdXJsIHx8ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobXNnSW5mby5Gcm9tX0FjY291bnQgPT0gY3R4LmlkZW50aWZpZXIpIHsgLy/lvZPliY3nlKjmiLflj5HpgIHnmoTmtojmga9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU2VuZE1zZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZCA9IG1zZ0luZm8uVG9fQWNjb3VudDsgLy/or7vlj5bmjqXmlLbogIXkv6Hmga9cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHsgLy/lvZPliY3nlKjmiLfmlLbliLDnmoTmtojmga9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU2VuZE1zZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQgPSBtc2dJbmZvLkZyb21fQWNjb3VudDsgLy/or7vlj5blj5HpgIHogIXkv6Hmga9cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtc2cgPSBuZXcgTXNnKHNlc3MsIGlzU2VuZE1zZywgbXNnSW5mby5Nc2dTZXEsIG1zZ0luZm8uTXNnUmFuZG9tLCBtc2dJbmZvLk1zZ1RpbWVTdGFtcCwgbXNnSW5mby5Gcm9tX0FjY291bnQsIEMyQ19NU0dfU1VCX1RZUEUuQ09NTU9OLCBtc2dJbmZvLkZyb21fQWNjb3VudE5pY2ssIGhlYWRVcmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbXNnQm9keSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtc2dDb250ZW50ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1zZ1R5cGUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBtaSBpbiBtc2dJbmZvLk1zZ0JvZHkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0JvZHkgPSBtc2dJbmZvLk1zZ0JvZHlbbWldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnVHlwZSA9IG1zZ0JvZHkuTXNnVHlwZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAobXNnVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgTVNHX0VMRU1FTlRfVFlQRS5URVhUOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dDb250ZW50ID0gbmV3IE1zZy5FbGVtLlRleHQobXNnQm9keS5Nc2dDb250ZW50LlRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIE1TR19FTEVNRU5UX1RZUEUuRkFDRTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnQ29udGVudCA9IG5ldyBNc2cuRWxlbS5GYWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnQm9keS5Nc2dDb250ZW50LkluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnQm9keS5Nc2dDb250ZW50LkRhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBNU0dfRUxFTUVOVF9UWVBFLklNQUdFOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dDb250ZW50ID0gbmV3IE1zZy5FbGVtLkltYWdlcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0JvZHkuTXNnQ29udGVudC5VVUlELFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnQm9keS5Nc2dDb250ZW50LkltYWdlRm9ybWF0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogaW4gbXNnQm9keS5Nc2dDb250ZW50LkltYWdlSW5mb0FycmF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcEltZyA9IG1zZ0JvZHkuTXNnQ29udGVudC5JbWFnZUluZm9BcnJheVtqXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0NvbnRlbnQuYWRkSW1hZ2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IE1zZy5FbGVtLkltYWdlcy5JbWFnZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcEltZy5UeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wSW1nLlNpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBJbWcuV2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBJbWcuSGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wSW1nLlVSTFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBNU0dfRUxFTUVOVF9UWVBFLlNPVU5EOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdmFyIHNvdW5kVXJsID0gZ2V0U291bmREb3duVXJsKG1zZ0JvZHkuTXNnQ29udGVudC5VVUlELCBtc2dJbmZvLkZyb21fQWNjb3VudCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobXNnQm9keS5Nc2dDb250ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dDb250ZW50ID0gbmV3IE1zZy5FbGVtLlNvdW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0JvZHkuTXNnQ29udGVudC5VVUlELFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0JvZHkuTXNnQ29udGVudC5TZWNvbmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnQm9keS5Nc2dDb250ZW50LlNpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnSW5mby5Gcm9tX0FjY291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnSW5mby5Ub19BY2NvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0JvZHkuTXNnQ29udGVudC5Eb3dubG9hZF9GbGFnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNFU1NJT05fVFlQRS5DMkNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dUeXBlID0gTVNHX0VMRU1FTlRfVFlQRS5URVhUO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnQ29udGVudCA9IG5ldyBNc2cuRWxlbS5UZXh0KCdb6K+t6Z+z5raI5oGvXeS4i+i9veWcsOWdgOino+aekOWHuumUmScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgTVNHX0VMRU1FTlRfVFlQRS5MT0NBVElPTjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnQ29udGVudCA9IG5ldyBNc2cuRWxlbS5Mb2NhdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0JvZHkuTXNnQ29udGVudC5Mb25naXR1ZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dCb2R5Lk1zZ0NvbnRlbnQuTGF0aXR1ZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dCb2R5Lk1zZ0NvbnRlbnQuRGVzY1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIE1TR19FTEVNRU5UX1RZUEUuRklMRTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIE1TR19FTEVNRU5UX1RZUEUuRklMRSArIFwiIFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dUeXBlID0gTVNHX0VMRU1FTlRfVFlQRS5GSUxFO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB2YXIgZmlsZVVybCA9IGdldEZpbGVEb3duVXJsKG1zZ0JvZHkuTXNnQ29udGVudC5VVUlELCBtc2dJbmZvLkZyb21fQWNjb3VudCwgbXNnQm9keS5Nc2dDb250ZW50LkZpbGVOYW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtc2dCb2R5Lk1zZ0NvbnRlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0NvbnRlbnQgPSBuZXcgTXNnLkVsZW0uRmlsZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dCb2R5Lk1zZ0NvbnRlbnQuVVVJRCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dCb2R5Lk1zZ0NvbnRlbnQuRmlsZU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnQm9keS5Nc2dDb250ZW50LkZpbGVTaXplLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0luZm8uRnJvbV9BY2NvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0luZm8uVG9fQWNjb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dCb2R5Lk1zZ0NvbnRlbnQuRG93bmxvYWRfRmxhZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTRVNTSU9OX1RZUEUuQzJDXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnVHlwZSA9IE1TR19FTEVNRU5UX1RZUEUuVEVYVDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0NvbnRlbnQgPSBuZXcgTXNnLkVsZW0uVGV4dCgnW+aWh+S7tua2iOaBr+S4i+i9veWcsOWdgOino+aekOWHuumUmV0nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIE1TR19FTEVNRU5UX1RZUEUuQ1VTVE9NOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dUeXBlID0gTVNHX0VMRU1FTlRfVFlQRS5DVVNUT007XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0NvbnRlbnQgPSBuZXcgTXNnLkVsZW0uQ3VzdG9tKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnQm9keS5Nc2dDb250ZW50LkRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dCb2R5Lk1zZ0NvbnRlbnQuRGVzYyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0JvZHkuTXNnQ29udGVudC5FeHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ1R5cGUgPSBNU0dfRUxFTUVOVF9UWVBFLlRFWFQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0NvbnRlbnQgPSBuZXcgTXNnLkVsZW0uVGV4dCgnd2Vi56uv5pqC5LiN5pSv5oyBJyArIG1zZ0JvZHkuTXNnVHlwZSArICfmtojmga8nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2cuZWxlbXMucHVzaChuZXcgTXNnLkVsZW0obXNnVHlwZSwgbXNnQ29udGVudCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE1zZ1N0b3JlLmFkZE1zZyhtc2cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtc2dPYmpMaXN0LnB1c2gobXNnKTtcclxuICAgICAgICAgICAgICAgICAgICB9IC8vIGZvciBsb29wXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIE1zZ1N0b3JlLnVwZGF0ZVRpbWVsaW5lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNiT2spIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdSZXNwID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbXBsZXRlJzogcmVzcC5Db21wbGV0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdNc2dDb3VudCc6IG1zZ09iakxpc3QubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0xhc3RNc2dUaW1lJzogcmVzcC5MYXN0TXNnVGltZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdNc2dLZXknOiByZXNwLk1zZ0tleSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdNc2dMaXN0JzogbXNnT2JqTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXNzLmlzRmluaXNoZWQocmVzcC5Db21wbGV0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNiT2sobmV3UmVzcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2cuZXJyb3IoXCJnZXRDMkNIaXN0b3J5TXNncyBmYWlsZWQ6XCIgKyBlcnIuRXJyb3JJbmZvKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2JFcnIpIGNiRXJyKGVycik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8v5ouJ576k5Y6G5Y+y5raI5oGvXHJcbiAgICAgICAgICAgIC8v5LiN5LygY2JPayDlkowgY2JFcnLvvIzliJnkvJrosIPnlKjmlrDmtojmga/lm57osIPlh73mlbBcclxuICAgICAgICAgICAgdGhpcy5zeW5jR3JvdXBNc2dzID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNiT2ssIGNiRXJyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5SZXFNc2dTZXEgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYkVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJySW5mbyA9IFwiUmVxTXNnU2VxIG11c3QgYmUgZ3JlYXRlciB0aGFuIDBcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVycm9yID0gdG9vbC5nZXRSZXR1cm5FcnJvcihlcnJJbmZvLCAtMTYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYkVycihlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBvcHRzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICdHcm91cElkJzogb3B0aW9ucy5Hcm91cElkLFxyXG4gICAgICAgICAgICAgICAgICAgICdSZXFNc2dTZXEnOiBvcHRpb25zLlJlcU1zZ1NlcSxcclxuICAgICAgICAgICAgICAgICAgICAnUmVxTXNnTnVtYmVyJzogb3B0aW9ucy5SZXFNc2dOdW1iZXJcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAvL+ivu+e+pOa8q+a4uOa2iOaBr1xyXG4gICAgICAgICAgICAgICAgcHJvdG9fZ2V0R3JvdXBNc2dzKG9wdHMsIGZ1bmN0aW9uIChyZXNwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5vdGlmeUluZm8gPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZ3JvdXBfaWQgPSByZXNwLkdyb3VwSWQ7IC8v6L+U5Zue55qE576kaWRcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbXNnSW5mb3MgPSByZXNwLlJzcE1zZ0xpc3Q7IC8v6L+U5Zue55qE5raI5oGv5YiX6KGoXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlzRmluaXNoZWQgPSByZXNwLklzRmluaXNoZWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtc2dJbmZvcyA9PSBudWxsIHx8IG1zZ0luZm9zID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNiT2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNiT2soW10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IG1zZ0luZm9zLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtc2dJbmZvID0gbXNnSW5mb3NbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v5aaC5p6c5piv5bey57uP5Yig6Zmk55qE5raI5oGv5oiW6ICF5Y+R6YCB6ICF5biQ5Y+35Li656m65oiW6ICF5raI5oGv5YaF5a655Li656m6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vSXNQbGFjZU1zZz0xXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtc2dJbmZvLklzUGxhY2VNc2cgfHwgIW1zZ0luZm8uRnJvbV9BY2NvdW50IHx8ICFtc2dJbmZvLk1zZ0JvZHkgfHwgbXNnSW5mby5Nc2dCb2R5Lmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbXNnID0gaGFuZGxlckdyb3VwTXNnKG1zZ0luZm8sIHRydWUsIHRydWUsIGlzRmluaXNoZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobXNnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZnlJbmZvLnB1c2gobXNnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gLy8gZm9yIGxvb3BcclxuICAgICAgICAgICAgICAgICAgICBpZiAobm90aWZ5SW5mby5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBNc2dTdG9yZS51cGRhdGVUaW1lbGluZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYk9rKSBjYk9rKG5vdGlmeUluZm8pO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5vdGlmeUluZm8ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob25Nc2dDYWxsYmFjaykgb25Nc2dDYWxsYmFjayhub3RpZnlJbmZvKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvZy5lcnJvcihcImdldEdyb3VwTXNncyBmYWlsZWQ6XCIgKyBlcnIuRXJyb3JJbmZvKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2JFcnIpIGNiRXJyKGVycik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8v5aSE55CG576k5raI5oGvKOaZrumAmua2iOaBryvmj5DnpLrmtojmga8pXHJcbiAgICAgICAgICAgIC8vaXNTeW5jR3JvdXBNc2dzIOaYr+WQpuS4u+WKqOaLieWPlue+pOa2iOaBr+agh+W/l1xyXG4gICAgICAgICAgICAvL2lzQWRkTXNnRmxhZyDmmK/lkKbpnIDopoHkv53lrZjliLBNc2dTdG9yZe+8jOWmguaenOmcgOimge+8jOi/memHjOS8muWtmOWcqOWIpOmHjemAu+i+kVxyXG4gICAgICAgICAgICB2YXIgaGFuZGxlckdyb3VwTXNnID0gZnVuY3Rpb24gKG1zZ0luZm8sIGlzU3luY0dyb3VwTXNncywgaXNBZGRNc2dGbGFnLCBpc0ZpbmlzaGVkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobXNnSW5mby5Jc1BsYWNlTXNnIHx8ICFtc2dJbmZvLkZyb21fQWNjb3VudCB8fCAhbXNnSW5mby5Nc2dCb2R5IHx8IG1zZ0luZm8uTXNnQm9keS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIGlzU2VuZE1zZywgaWQsIGhlYWRVcmwsIGZyb21BY2NvdW50TmljaywgZnJvbUFjY291bnRIZWFkdXJsO1xyXG4gICAgICAgICAgICAgICAgdmFyIGdyb3VwX2lkID0gbXNnSW5mby5Ub0dyb3VwSWQ7XHJcbiAgICAgICAgICAgICAgICB2YXIgZ3JvdXBfbmFtZSA9IGdyb3VwX2lkO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1zZ0luZm8uR3JvdXBJbmZvKSB7IC8v5Y+W5Ye6576k5ZCN56ewXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1zZ0luZm8uR3JvdXBJbmZvLkdyb3VwTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cF9uYW1lID0gbXNnSW5mby5Hcm91cEluZm8uR3JvdXBOYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8v5Y+W5Ye65oiQ5ZGY5pi156ewXHJcbiAgICAgICAgICAgICAgICBmcm9tQWNjb3VudE5pY2sgPSBtc2dJbmZvLkZyb21fQWNjb3VudDtcclxuICAgICAgICAgICAgICAgIC8vZnJvbUFjY291bnRIZWFkdXJsID0gbXNnSW5mby5Hcm91cEluZm8uRnJvbV9BY2NvdW50SGVhZHVybDtcclxuICAgICAgICAgICAgICAgIGlmIChtc2dJbmZvLkdyb3VwSW5mbykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtc2dJbmZvLkdyb3VwSW5mby5Gcm9tX0FjY291bnROaWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb21BY2NvdW50TmljayA9IG1zZ0luZm8uR3JvdXBJbmZvLkZyb21fQWNjb3VudE5pY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtc2dJbmZvLkdyb3VwSW5mby5Gcm9tX0FjY291bnRIZWFkdXJsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb21BY2NvdW50SGVhZHVybCA9IG1zZ0luZm8uR3JvdXBJbmZvLkZyb21fQWNjb3VudEhlYWR1cmw7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbUFjY291bnRIZWFkdXJsID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobXNnSW5mby5Gcm9tX0FjY291bnQgPT0gY3R4LmlkZW50aWZpZXIpIHsgLy/lvZPliY3nlKjmiLflj5HpgIHnmoTmtojmga9cclxuICAgICAgICAgICAgICAgICAgICBpc1NlbmRNc2cgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlkID0gbXNnSW5mby5Gcm9tX0FjY291bnQ7IC8v6K+75Y+W5o6l5pS26ICF5L+h5oGvXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZFVybCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHsgLy/lvZPliY3nlKjmiLfmlLbliLDnmoTmtojmga9cclxuICAgICAgICAgICAgICAgICAgICBpc1NlbmRNc2cgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBpZCA9IG1zZ0luZm8uRnJvbV9BY2NvdW50OyAvL+ivu+WPluWPkemAgeiAheS/oeaBr1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRVcmwgPSAnJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBzZXNzID0gTXNnU3RvcmUuc2Vzc0J5VHlwZUlkKFNFU1NJT05fVFlQRS5HUk9VUCwgZ3JvdXBfaWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VzcyA9IG5ldyBTZXNzaW9uKFNFU1NJT05fVFlQRS5HUk9VUCwgZ3JvdXBfaWQsIGdyb3VwX25hbWUsIGhlYWRVcmwsIDAsIDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBpc0ZpbmlzaGVkICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Vzcy5pc0ZpbmlzaGVkKGlzRmluaXNoZWQgfHwgMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgc3ViVHlwZSA9IEdST1VQX01TR19TVUJfVFlQRS5DT01NT047IC8v5raI5oGv57G75Z6LXHJcbiAgICAgICAgICAgICAgICAvL+e+pOaPkOekuua2iOaBryzph43mlrDlsIHoo4XkuItcclxuICAgICAgICAgICAgICAgIGlmIChMT05HX1BPTExJTk5HX0VWRU5UX1RZUEUuR1JPVVBfVElQID09IG1zZ0luZm8uRXZlbnQgfHwgTE9OR19QT0xMSU5OR19FVkVOVF9UWVBFLkdST1VQX1RJUDIgPT0gbXNnSW5mby5FdmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1YlR5cGUgPSBHUk9VUF9NU0dfU1VCX1RZUEUuVElQO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBncm91cFRpcCA9IG1zZ0luZm8uTXNnQm9keTtcclxuICAgICAgICAgICAgICAgICAgICBtc2dJbmZvLk1zZ0JvZHkgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBtc2dJbmZvLk1zZ0JvZHkucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiTXNnVHlwZVwiOiBNU0dfRUxFTUVOVF9UWVBFLkdST1VQX1RJUCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJNc2dDb250ZW50XCI6IGdyb3VwVGlwXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1zZ0luZm8uTXNnUHJpb3JpdHkpIHsgLy/nvqTngrnotZ7mtojmga9cclxuICAgICAgICAgICAgICAgICAgICBpZiAobXNnSW5mby5Nc2dQcmlvcml0eSA9PSBHUk9VUF9NU0dfUFJJT1JJVFlfVFlQRS5SRURQQUNLRVQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViVHlwZSA9IEdST1VQX01TR19TVUJfVFlQRS5SRURQQUNLRVQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtc2dJbmZvLk1zZ1ByaW9yaXR5ID09IEdST1VQX01TR19QUklPUklUWV9UWVBFLkxPVkVNU0cpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViVHlwZSA9IEdST1VQX01TR19TVUJfVFlQRS5MT1ZFTVNHO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgbXNnID0gbmV3IE1zZyhzZXNzLCBpc1NlbmRNc2csIG1zZ0luZm8uTXNnU2VxLCBtc2dJbmZvLk1zZ1JhbmRvbSwgbXNnSW5mby5Nc2dUaW1lU3RhbXAsIG1zZ0luZm8uRnJvbV9BY2NvdW50LCBzdWJUeXBlLCBmcm9tQWNjb3VudE5pY2ssIGZyb21BY2NvdW50SGVhZHVybCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbXNnQm9keSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB2YXIgbXNnQ29udGVudCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB2YXIgbXNnVHlwZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBtaSBpbiBtc2dJbmZvLk1zZ0JvZHkpIHtcclxuICAgICAgICAgICAgICAgICAgICBtc2dCb2R5ID0gbXNnSW5mby5Nc2dCb2R5W21pXTtcclxuICAgICAgICAgICAgICAgICAgICBtc2dUeXBlID0gbXNnQm9keS5Nc2dUeXBlO1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAobXNnVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIE1TR19FTEVNRU5UX1RZUEUuVEVYVDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0NvbnRlbnQgPSBuZXcgTXNnLkVsZW0uVGV4dChtc2dCb2R5Lk1zZ0NvbnRlbnQuVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBNU0dfRUxFTUVOVF9UWVBFLkZBQ0U6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dDb250ZW50ID0gbmV3IE1zZy5FbGVtLkZhY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnQm9keS5Nc2dDb250ZW50LkluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0JvZHkuTXNnQ29udGVudC5EYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgTVNHX0VMRU1FTlRfVFlQRS5JTUFHRTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0NvbnRlbnQgPSBuZXcgTXNnLkVsZW0uSW1hZ2VzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0JvZHkuTXNnQ29udGVudC5VVUlELFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0JvZHkuTXNnQ29udGVudC5JbWFnZUZvcm1hdCB8fCBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiBpbiBtc2dCb2R5Lk1zZ0NvbnRlbnQuSW1hZ2VJbmZvQXJyYXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dDb250ZW50LmFkZEltYWdlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgTXNnLkVsZW0uSW1hZ2VzLkltYWdlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnQm9keS5Nc2dDb250ZW50LkltYWdlSW5mb0FycmF5W2pdLlR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dCb2R5Lk1zZ0NvbnRlbnQuSW1hZ2VJbmZvQXJyYXlbal0uU2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0JvZHkuTXNnQ29udGVudC5JbWFnZUluZm9BcnJheVtqXS5XaWR0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0JvZHkuTXNnQ29udGVudC5JbWFnZUluZm9BcnJheVtqXS5IZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dCb2R5Lk1zZ0NvbnRlbnQuSW1hZ2VJbmZvQXJyYXlbal0uVVJMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgTVNHX0VMRU1FTlRfVFlQRS5TT1VORDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtc2dCb2R5Lk1zZ0NvbnRlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dDb250ZW50ID0gbmV3IE1zZy5FbGVtLlNvdW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dCb2R5Lk1zZ0NvbnRlbnQuVVVJRCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnQm9keS5Nc2dDb250ZW50LlNlY29uZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnQm9keS5Nc2dDb250ZW50LlNpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0luZm8uRnJvbV9BY2NvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dJbmZvLlRvX0FjY291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0JvZHkuTXNnQ29udGVudC5Eb3dubG9hZF9GbGFnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTRVNTSU9OX1RZUEUuR1JPVVBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dUeXBlID0gTVNHX0VMRU1FTlRfVFlQRS5URVhUO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0NvbnRlbnQgPSBuZXcgTXNnLkVsZW0uVGV4dCgnW+ivremfs+a2iOaBr13kuIvovb3lnLDlnYDop6PmnpDlh7rplJknKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIE1TR19FTEVNRU5UX1RZUEUuTE9DQVRJT046XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dDb250ZW50ID0gbmV3IE1zZy5FbGVtLkxvY2F0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0JvZHkuTXNnQ29udGVudC5Mb25naXR1ZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnQm9keS5Nc2dDb250ZW50LkxhdGl0dWRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0JvZHkuTXNnQ29udGVudC5EZXNjXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgTVNHX0VMRU1FTlRfVFlQRS5GSUxFOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIE1TR19FTEVNRU5UX1RZUEUuRklMRSArIFwiIFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnVHlwZSA9IE1TR19FTEVNRU5UX1RZUEUuRklMRTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmaWxlVXJsID0gZ2V0RmlsZURvd25VcmwobXNnQm9keS5Nc2dDb250ZW50LlVVSUQsIG1zZ0luZm8uRnJvbV9BY2NvdW50LCBtc2dCb2R5Lk1zZ0NvbnRlbnQuRmlsZU5hbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtc2dCb2R5Lk1zZ0NvbnRlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dDb250ZW50ID0gbmV3IE1zZy5FbGVtLkZpbGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0JvZHkuTXNnQ29udGVudC5VVUlELFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dCb2R5Lk1zZ0NvbnRlbnQuRmlsZU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0JvZHkuTXNnQ29udGVudC5GaWxlU2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnSW5mby5Gcm9tX0FjY291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0luZm8uVG9fQWNjb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnQm9keS5Nc2dDb250ZW50LkRvd25sb2FkX0ZsYWcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNFU1NJT05fVFlQRS5HUk9VUFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ1R5cGUgPSBNU0dfRUxFTUVOVF9UWVBFLlRFWFQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnQ29udGVudCA9IG5ldyBNc2cuRWxlbS5UZXh0KCdb5paH5Lu25raI5oGvXeWcsOWdgOino+aekOWHuumUmScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgTVNHX0VMRU1FTlRfVFlQRS5HUk9VUF9USVA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3BUeXBlID0gbXNnQm9keS5Nc2dDb250ZW50Lk9wVHlwZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0NvbnRlbnQgPSBuZXcgTXNnLkVsZW0uR3JvdXBUaXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0JvZHkuTXNnQ29udGVudC5PcGVyYXRvcl9BY2NvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0luZm8uR3JvdXBJbmZvLkdyb3VwTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dCb2R5Lk1zZ0NvbnRlbnQuTGlzdF9BY2NvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0JvZHkuTXNnQ29udGVudC5Nc2dNZW1iZXJFeHRyYUluZm9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoR1JPVVBfVElQX1RZUEUuSk9JTiA9PSBvcFR5cGUgfHwgR1JPVVBfVElQX1RZUEUuUVVJVCA9PSBvcFR5cGUpIHsgLy/liqDnvqTmiJbpgIDnvqTml7bvvIzorr7nva7mnIDmlrDnvqTmiJDlkZjmlbBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dDb250ZW50LnNldEdyb3VwTWVtYmVyTnVtKG1zZ0JvZHkuTXNnQ29udGVudC5NZW1iZXJOdW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChHUk9VUF9USVBfVFlQRS5NT0RJRllfR1JPVVBfSU5GTyA9PSBvcFR5cGUpIHsgLy/nvqTotYTmlpnlj5jmm7RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcElzQ2FsbGJhY2tGbGFnID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRlbXBOZXdHcm91cEluZm8gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiR3JvdXBJZFwiOiBncm91cF9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJHcm91cEZhY2VVcmxcIjogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJHcm91cE5hbWVcIjogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJPd25lckFjY291bnRcIjogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJHcm91cE5vdGlmaWNhdGlvblwiOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkdyb3VwSW50cm9kdWN0aW9uXCI6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtc2dHcm91cE5ld0luZm8gPSBtc2dCb2R5Lk1zZ0NvbnRlbnQuTXNnR3JvdXBOZXdJbmZvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtc2dHcm91cE5ld0luZm8uR3JvdXBGYWNlVXJsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0bXBOR0lGYWNlVXJsID0gbmV3IE1zZy5FbGVtLkdyb3VwVGlwLkdyb3VwSW5mbyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdST1VQX1RJUF9NT0RJRllfR1JPVVBfSU5GT19UWVBFLkZBQ0VfVVJMLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnR3JvdXBOZXdJbmZvLkdyb3VwRmFjZVVybFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dDb250ZW50LmFkZEdyb3VwSW5mbyh0bXBOR0lGYWNlVXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcElzQ2FsbGJhY2tGbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcE5ld0dyb3VwSW5mby5Hcm91cEZhY2VVcmwgPSBtc2dHcm91cE5ld0luZm8uR3JvdXBGYWNlVXJsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobXNnR3JvdXBOZXdJbmZvLkdyb3VwTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdG1wTkdJTmFtZSA9IG5ldyBNc2cuRWxlbS5Hcm91cFRpcC5Hcm91cEluZm8oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHUk9VUF9USVBfTU9ESUZZX0dST1VQX0lORk9fVFlQRS5OQU1FLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnR3JvdXBOZXdJbmZvLkdyb3VwTmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dDb250ZW50LmFkZEdyb3VwSW5mbyh0bXBOR0lOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcElzQ2FsbGJhY2tGbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcE5ld0dyb3VwSW5mby5Hcm91cE5hbWUgPSBtc2dHcm91cE5ld0luZm8uR3JvdXBOYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobXNnR3JvdXBOZXdJbmZvLk93bmVyX0FjY291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRtcE5HSU93bmVyID0gbmV3IE1zZy5FbGVtLkdyb3VwVGlwLkdyb3VwSW5mbyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdST1VQX1RJUF9NT0RJRllfR1JPVVBfSU5GT19UWVBFLk9XTkVSLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnR3JvdXBOZXdJbmZvLk93bmVyX0FjY291bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnQ29udGVudC5hZGRHcm91cEluZm8odG1wTkdJT3duZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wSXNDYWxsYmFja0ZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wTmV3R3JvdXBJbmZvLk93bmVyQWNjb3VudCA9IG1zZ0dyb3VwTmV3SW5mby5Pd25lcl9BY2NvdW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobXNnR3JvdXBOZXdJbmZvLkdyb3VwTm90aWZpY2F0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0bXBOR0lOb3RpZmljYXRpb24gPSBuZXcgTXNnLkVsZW0uR3JvdXBUaXAuR3JvdXBJbmZvKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR1JPVVBfVElQX01PRElGWV9HUk9VUF9JTkZPX1RZUEUuTk9USUZJQ0FUSU9OLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnR3JvdXBOZXdJbmZvLkdyb3VwTm90aWZpY2F0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0NvbnRlbnQuYWRkR3JvdXBJbmZvKHRtcE5HSU5vdGlmaWNhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBJc0NhbGxiYWNrRmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBOZXdHcm91cEluZm8uR3JvdXBOb3RpZmljYXRpb24gPSBtc2dHcm91cE5ld0luZm8uR3JvdXBOb3RpZmljYXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtc2dHcm91cE5ld0luZm8uR3JvdXBJbnRyb2R1Y3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRtcE5HSUludHJvZHVjdGlvbiA9IG5ldyBNc2cuRWxlbS5Hcm91cFRpcC5Hcm91cEluZm8oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHUk9VUF9USVBfTU9ESUZZX0dST1VQX0lORk9fVFlQRS5JTlRST0RVQ1RJT04sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dHcm91cE5ld0luZm8uR3JvdXBJbnRyb2R1Y3Rpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnQ29udGVudC5hZGRHcm91cEluZm8odG1wTkdJSW50cm9kdWN0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcElzQ2FsbGJhY2tGbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcE5ld0dyb3VwSW5mby5Hcm91cEludHJvZHVjdGlvbiA9IG1zZ0dyb3VwTmV3SW5mby5Hcm91cEludHJvZHVjdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Zue6LCD576k6LWE5paZ5Y+Y5YyW6YCa55+l5pa55rOVXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzU3luY0dyb3VwTXNncyA9PSBmYWxzZSAmJiB0ZW1wSXNDYWxsYmFja0ZsYWcgJiYgb25Hcm91cEluZm9DaGFuZ2VDYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkdyb3VwSW5mb0NoYW5nZUNhbGxiYWNrKHRlbXBOZXdHcm91cEluZm8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKEdST1VQX1RJUF9UWVBFLk1PRElGWV9NRU1CRVJfSU5GTyA9PSBvcFR5cGUpIHsgLy/nvqTmiJDlkZjlj5jmm7RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWVtYmVySW5mb3MgPSBtc2dCb2R5Lk1zZ0NvbnRlbnQuTXNnTWVtYmVySW5mbztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBuIGluIG1lbWJlckluZm9zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtZW1iZXJJbmZvID0gbWVtYmVySW5mb3Nbbl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0NvbnRlbnQuYWRkTWVtYmVySW5mbyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBNc2cuRWxlbS5Hcm91cFRpcC5NZW1iZXJJbmZvKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbWJlckluZm8uVXNlcl9BY2NvdW50LCBtZW1iZXJJbmZvLlNodXR1cFRpbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBNU0dfRUxFTUVOVF9UWVBFLkNVU1RPTTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ1R5cGUgPSBNU0dfRUxFTUVOVF9UWVBFLkNVU1RPTTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0NvbnRlbnQgPSBuZXcgTXNnLkVsZW0uQ3VzdG9tKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0JvZHkuTXNnQ29udGVudC5EYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0JvZHkuTXNnQ29udGVudC5EZXNjLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0JvZHkuTXNnQ29udGVudC5FeHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ1R5cGUgPSBNU0dfRUxFTUVOVF9UWVBFLlRFWFQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dDb250ZW50ID0gbmV3IE1zZy5FbGVtLlRleHQoJ3dlYuerr+aaguS4jeaUr+aMgScgKyBtc2dCb2R5Lk1zZ1R5cGUgKyAn5raI5oGvJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbXNnLmVsZW1zLnB1c2gobmV3IE1zZy5FbGVtKG1zZ1R5cGUsIG1zZ0NvbnRlbnQpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaXNBZGRNc2dGbGFnID09IGZhbHNlKSB7IC8v5LiN6ZyA6KaB5L+d5a2Y5raI5oGvXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1zZztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoTXNnU3RvcmUuYWRkTXNnKG1zZywgdHJ1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBtc2cuZXh0cmFJbmZvID0gbXNnSW5mby5Hcm91cEluZm8uTXNnRnJvbV9BY2NvdW50RXh0cmFJbmZvXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1zZztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvL+WIneWni+WMllxyXG4gICAgICAgICAgICB0aGlzLmluaXQgPSBmdW5jdGlvbiAobGlzdGVuZXJzLCBjYk9rLCBjYkVycikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFsaXN0ZW5lcnMub25Nc2dOb3RpZnkpIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2cud2FybignbGlzdGVuZXJzLm9uTXNnTm90aWZ5IGlzIGVtcHR5Jyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBvbk1zZ0NhbGxiYWNrID0gbGlzdGVuZXJzLm9uTXNnTm90aWZ5O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChsaXN0ZW5lcnMub25CaWdHcm91cE1zZ05vdGlmeSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9uQmlnR3JvdXBNc2dDYWxsYmFjayA9IGxpc3RlbmVycy5vbkJpZ0dyb3VwTXNnTm90aWZ5O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2cud2FybignbGlzdGVuZXJzLm9uQmlnR3JvdXBNc2dOb3RpZnkgaXMgZW1wdHknKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobGlzdGVuZXJzLm9uQzJjRXZlbnROb3RpZnlzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb25DMmNFdmVudENhbGxiYWNrcyA9IGxpc3RlbmVycy5vbkMyY0V2ZW50Tm90aWZ5cztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9nLndhcm4oJ2xpc3RlbmVycy5vbkMyY0V2ZW50Tm90aWZ5cyBpcyBlbXB0eScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGxpc3RlbmVycy5vbkdyb3VwU3lzdGVtTm90aWZ5cykge1xyXG4gICAgICAgICAgICAgICAgICAgIG9uR3JvdXBTeXN0ZW1Ob3RpZnlDYWxsYmFja3MgPSBsaXN0ZW5lcnMub25Hcm91cFN5c3RlbU5vdGlmeXM7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvZy53YXJuKCdsaXN0ZW5lcnMub25Hcm91cFN5c3RlbU5vdGlmeXMgaXMgZW1wdHknKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChsaXN0ZW5lcnMub25Hcm91cEluZm9DaGFuZ2VOb3RpZnkpIHtcclxuICAgICAgICAgICAgICAgICAgICBvbkdyb3VwSW5mb0NoYW5nZUNhbGxiYWNrID0gbGlzdGVuZXJzLm9uR3JvdXBJbmZvQ2hhbmdlTm90aWZ5O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2cud2FybignbGlzdGVuZXJzLm9uR3JvdXBJbmZvQ2hhbmdlTm90aWZ5IGlzIGVtcHR5Jyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobGlzdGVuZXJzLm9uRnJpZW5kU3lzdGVtTm90aWZ5cykge1xyXG4gICAgICAgICAgICAgICAgICAgIG9uRnJpZW5kU3lzdGVtTm90aWZ5Q2FsbGJhY2tzID0gbGlzdGVuZXJzLm9uRnJpZW5kU3lzdGVtTm90aWZ5cztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9nLndhcm4oJ2xpc3RlbmVycy5vbkZyaWVuZFN5c3RlbU5vdGlmeXMgaXMgZW1wdHknKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChsaXN0ZW5lcnMub25Qcm9maWxlU3lzdGVtTm90aWZ5cykge1xyXG4gICAgICAgICAgICAgICAgICAgIG9uUHJvZmlsZVN5c3RlbU5vdGlmeUNhbGxiYWNrcyA9IGxpc3RlbmVycy5vblByb2ZpbGVTeXN0ZW1Ob3RpZnlzO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2cud2FybignbGlzdGVuZXJzLm9uUHJvZmlsZVN5c3RlbU5vdGlmeXMgaXMgZW1wdHknKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChsaXN0ZW5lcnMub25LaWNrZWRFdmVudENhbGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBvbktpY2tlZEV2ZW50Q2FsbCA9IGxpc3RlbmVycy5vbktpY2tlZEV2ZW50Q2FsbDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9nLndhcm4oJ2xpc3RlbmVycy5vbktpY2tlZEV2ZW50Q2FsbCBpcyBlbXB0eScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cdCAgICBpZiAobGlzdGVuZXJzLm9uTG9uZ1B1bGxpbmdOb3RpZnkpIHtcclxuXHQgICAgICAgIG9uTG9uZ1B1bGxpbmdOb3RpZnkgPSBsaXN0ZW5lcnMub25Mb25nUHVsbGluZ05vdGlmeTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxvZy53YXJuKCdsaXN0ZW5lcnMub25LaWNrZWRFdmVudENhbGwgaXMgZW1wdHknKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChsaXN0ZW5lcnMub25BcHBsaWVkRG93bmxvYWRVcmwpIHtcclxuICAgICAgICAgICAgICAgICAgICBvbkFwcGxpZWREb3dubG9hZFVybCA9IGxpc3RlbmVycy5vbkFwcGxpZWREb3dubG9hZFVybDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9nLndhcm4oJ2xpc3RlbmVycy5vbkFwcGxpZWREb3dubG9hZFVybCBpcyBlbXB0eScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghY3R4LmlkZW50aWZpZXIgfHwgIWN0eC51c2VyU2lnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNiT2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN1Y2Nlc3MgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQWN0aW9uU3RhdHVzJzogQUNUSU9OX1NUQVRVUy5PSyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdFcnJvckNvZGUnOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0Vycm9ySW5mbyc6IFwibG9naW4gc3VjY2VzcyhubyBsb2dpbiBzdGF0ZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYk9rKHN1Y2Nlc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy/liJ3lp4vljJZcclxuICAgICAgICAgICAgICAgIGluaXRNeUdyb3VwTWF4U2VxcyhcclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAocmVzcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2cuaW5mbygnaW5pdE15R3JvdXBNYXhTZXFzIHN1Y2Nlc3MnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy/liJ3lp4vljJbmlofku7ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdElwQW5kQXV0aGtleShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChpbml0SXBBbmRBdXRoa2V5UmVzcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZy5pbmZvKCdpbml0SXBBbmRBdXRoa2V5IHN1Y2Nlc3MnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2JPaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2cuaW5mbygnbG9naW4gc3VjY2VzcyhoYXZlIGxvZ2luIHN0YXRlKSknKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN1Y2Nlc3MgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQWN0aW9uU3RhdHVzJzogQUNUSU9OX1NUQVRVUy5PSyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdFcnJvckNvZGUnOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0Vycm9ySW5mbyc6IFwibG9naW4gc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNiT2soc3VjY2Vzcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1zZ01hbmFnZXIuc2V0TG9uZ1BvbGxpbmdPbih0cnVlKTsgLy/lvIDlkK/plb/ova7or6JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb25nUG9sbGluZ09uICYmIE1zZ01hbmFnZXIubG9uZ1BvbGxpbmcoY2JPayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBjYkVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgY2JFcnIpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLy/lj5Hmtojmga/vvIjnp4HogYrmiJbnvqTogYrvvIlcclxuICAgICAgICAgICAgdGhpcy5zZW5kTXNnID0gZnVuY3Rpb24gKG1zZywgY2JPaywgY2JFcnIpIHtcclxuICAgICAgICAgICAgICAgIHByb3RvX3NlbmRNc2cobXNnLCBmdW5jdGlvbiAocmVzcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v56eB6IGK5pe277yM5Yqg5YWl6Ieq5bex55qE5Y+R55qE5raI5oGv77yM576k6IGK5pe277yM55Sx5LqOc2Vx5ZKM5pyN5Yqh5Zmo55qEc2Vx5LiN5LiA5qC377yM5omA5Lul5LiN5L2c5aSE55CGXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1zZy5zZXNzLnR5cGUoKSA9PSBTRVNTSU9OX1RZUEUuQzJDKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghTXNnU3RvcmUuYWRkTXNnKG1zZykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnJJbmZvID0gXCJzZW5kTXNnOiBhZGRNc2cgZmFpbGVkIVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVycm9yID0gdG9vbC5nZXRSZXR1cm5FcnJvcihlcnJJbmZvLCAtMTcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nLmVycm9yKGVyckluZm8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNiRXJyKSBjYkVycihlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy/mm7TmlrDkv6Hmga/mtYHml7bpl7RcclxuICAgICAgICAgICAgICAgICAgICAgICAgTXNnU3RvcmUudXBkYXRlVGltZWxpbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNiT2spIGNiT2socmVzcCk7XHJcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNiRXJyKSBjYkVycihlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy/kuIrkvKDmlofku7ZcclxuICAgICAgICB2YXIgRmlsZVVwbG9hZGVyID0gbmV3IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5maWxlTWQ1ID0gbnVsbDtcclxuICAgICAgICAgICAgLy/ojrflj5bmlofku7ZNRDVcclxuICAgICAgICAgICAgdmFyIGdldEZpbGVNRDUgPSBmdW5jdGlvbiAoZmlsZSwgY2JPaywgY2JFcnIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvL0ZpbGVSZWFkZXIgcGPmtY/op4jlmajlhbzlrrnmgKdcclxuICAgICAgICAgICAgICAgIC8vRmVhdHVyZSAgIEZpcmVmb3ggKEdlY2tvKSBDaHJvbWUgIEludGVybmV0IEV4cGxvcmVyICAgT3BlcmEgICBTYWZhcmlcclxuICAgICAgICAgICAgICAgIC8vQmFzaWMgc3VwcG9ydCAzLjYgNyAgIDEwICAgICAgICAgICAgICAgICAgICAgIDEyLjAyICAgNi4wLjJcclxuICAgICAgICAgICAgICAgIHZhciBmaWxlUmVhZGVyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7IC8v5YiG5Z2X6K+75Y+W5paH5Lu25a+56LGhXHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNiRXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNiRXJyKHRvb2wuZ2V0UmV0dXJuRXJyb3IoJ+W9k+WJjea1j+iniOWZqOS4jeaUr+aMgUZpbGVSZWFkZXInLCAtMTgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vZmlsZeeahHNsaWNl5pa55rOV77yM5rOo5oSP5a6D55qE5YW85a655oCn77yM5Zyo5LiN5ZCM5rWP6KeI5Zmo55qE5YaZ5rOV5LiN5ZCMXHJcbiAgICAgICAgICAgICAgICB2YXIgYmxvYlNsaWNlID0gRmlsZS5wcm90b3R5cGUubW96U2xpY2UgfHwgRmlsZS5wcm90b3R5cGUud2Via2l0U2xpY2UgfHwgRmlsZS5wcm90b3R5cGUuc2xpY2U7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWJsb2JTbGljZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYkVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYkVycih0b29sLmdldFJldHVybkVycm9yKCflvZPliY3mtY/op4jlmajkuI3mlK/mjIFGaWxlQVBJJywgLTE5KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGNodW5rU2l6ZSA9IDIgKiAxMDI0ICogMTAyNDsgLy/liIblnZflpKflsI/vvIwyTVxyXG4gICAgICAgICAgICAgICAgdmFyIGNodW5rcyA9IE1hdGguY2VpbChmaWxlLnNpemUgLyBjaHVua1NpemUpOyAvL+aAu+Wdl+aVsFxyXG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRDaHVuayA9IDA7IC8v5b2T5YmN5Z2X5pWwXHJcbiAgICAgICAgICAgICAgICB2YXIgc3BhcmsgPSBuZXcgU3BhcmtNRDUoKTsgLy/ojrflj5ZNRDXlr7nosaFcclxuXHJcbiAgICAgICAgICAgICAgICBmaWxlUmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7IC8v5pWw5o2u5Yqg6L295a6M5q+V5LqL5Lu2XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBiaW5hcnlTdHIgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBieXRlcyA9IG5ldyBVaW50OEFycmF5KGUudGFyZ2V0LnJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxlbmd0aCA9IGJ5dGVzLmJ5dGVMZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiaW5hcnlTdHIgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlc1tpXSk7IC8v5LqM6L+b5Yi26L2s5o2i5a2X56ym5LiyXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHNwYXJrLmFwcGVuZEJpbmFyeShiaW5hcnlTdHIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRDaHVuaysrO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50Q2h1bmsgPCBjaHVua3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZE5leHQoKTsgLy/or7vlj5bkuIvkuIDlnZfmlbDmja5cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGVNZDUgPSBzcGFyay5lbmQoKTsgLy/lvpfliLDmlofku7ZNRDXlgLxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNiT2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNiT2sodGhpcy5maWxlTWQ1KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAvL+WIhueJh+ivu+WPluaWh+S7tlxyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGxvYWROZXh0KCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzdGFydCA9IGN1cnJlbnRDaHVuayAqIGNodW5rU2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kID0gc3RhcnQgKyBjaHVua1NpemUgPj0gZmlsZS5zaXplID8gZmlsZS5zaXplIDogc3RhcnQgKyBjaHVua1NpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/moLnmja7lvIDlp4vlkoznu5PmnZ/kvY3nva7vvIzliIflibLmlofku7ZcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYiA9IGJsb2JTbGljZS5jYWxsKGZpbGUsIHN0YXJ0LCBlbmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vcmVhZEFzQmluYXJ5U3RyaW5nIGll5rWP6KeI5Zmo5LiN5YW85a655q2k5pa55rOVXHJcbiAgICAgICAgICAgICAgICAgICAgLy9maWxlUmVhZGVyLnJlYWRBc0JpbmFyeVN0cmluZyhibG9iU2xpY2UuY2FsbChmaWxlLCBzdGFydCwgZW5kKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsZVJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihiKTsgLy9pZe+8jGNocm9tZe+8jGZpcmVmb3jnrYnkuLvmtYHmtY/op4jlmajlhbzlrrnmraTmlrnms5VcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbG9hZE5leHQoKTsgLy/lvIDlp4vor7vlj5ZcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLy/kuIrkvKDlm77niYfmiJbmlofku7Yo55So5LqO6auY54mI5pys5rWP6KeI5Zmo77yM5pSv5oyBRmlsZUFQSSlcclxuICAgICAgICAgICAgdGhpcy51cGxvYWRGaWxlID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNiT2ssIGNiRXJyKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGZpbGVfdXBsb2FkID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5Yid5aeL5YyWXHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKG9wdGlvbnMsIGNiT2ssIGNiRXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtZSA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLmZpbGUgPSBvcHRpb25zLmZpbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v5YiG54mH5LiK5Lyg6L+b5bqm5Zue6LCD5LqL5Lu2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLm9uUHJvZ3Jlc3NDYWxsQmFjayA9IG9wdGlvbnMub25Qcm9ncmVzc0NhbGxCYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+WBnOatouS4iuS8oOWbvueJh+aMiemSrlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5hYm9ydEJ1dHRvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5hYm9ydEJ1dHRvbi5vbmNsaWNrID0gbWUuYWJvcnRIYW5kbGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLnRvdGFsID0gbWUuZmlsZS5zaXplOyAvL+aWh+S7tuaAu+Wkp+Wwj1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5sb2FkZWQgPSAwOyAvL+W3suivu+WPluWtl+iKguaVsFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5zdGVwID0gMTA4MCAqIDEwMjQ7IC8v5YiG5Z2X5aSn5bCP77yMMTA4MEtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWUuc2xpY2VTaXplID0gMDsgLy/liIbniYflpKflsI9cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWUuc2xpY2VPZmZzZXQgPSAwOyAvL+W9k+WJjeWIhueJh+S9jee9rlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZS50aW1lc3RhbXAgPSB1bml4dGltZSgpOyAvL+W9k+WJjeaXtumXtOaIs1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5zZXEgPSBuZXh0U2VxKCk7IC8v6K+35rGCc2VxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLnJhbmRvbSA9IGNyZWF0ZVJhbmRvbSgpOyAvL+ivt+axgumaj+acuuaVsFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5mcm9tQWNjb3VudCA9IGN0eC5pZGVudGlmaWVyOyAvL+WPkemAgeiAhVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZS50b0FjY291bnQgPSBvcHRpb25zLlRvX0FjY291bnQ7IC8v5o6l5pS26ICFXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLmZpbGVNZDUgPSBvcHRpb25zLmZpbGVNZDU7IC8v5paH5Lu2TUQ1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLmJ1c2luZXNzVHlwZSA9IG9wdGlvbnMuYnVzaW5lc3NUeXBlOyAvL+WbvueJh+aIluaWh+S7tueahOS4muWKoeexu+Wei++8jOe+pOa2iOaBrzoxOyBjMmPmtojmga86Mjsg5Liq5Lq65aS05YOP77yaMzsg576k5aS05YOP77yaNDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWUuZmlsZVR5cGUgPSBvcHRpb25zLmZpbGVUeXBlOyAvL+aWh+S7tuexu+Wei++8jOS4jeWhq+S4uum7mOiupOiupOS4uuS4iuS8oOeahOaYr+WbvueJh++8mzHvvJrlm77niYfvvJsy77ya5paH5Lu277ybM++8muefreinhumike+8mzTvvJpQVFRcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLmNiT2sgPSBjYk9rOyAvL+S4iuS8oOaIkOWKn+Wbnuiwg+S6i+S7tlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5jYkVyciA9IGNiRXJyOyAvL+S4iuS8oOWksei0peWbnuiwg+S6i+S7tlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWUucmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTsgLy/or7vlj5bmlofku7blr7nosaFcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWUuYmxvYlNsaWNlID0gRmlsZS5wcm90b3R5cGUubW96U2xpY2UgfHwgRmlsZS5wcm90b3R5cGUud2Via2l0U2xpY2UgfHwgRmlsZS5wcm90b3R5cGUuc2xpY2U7IC8vZmlsZeeahHNsaWNl5pa55rOVLOS4jeWQjOa1j+iniOWZqOS4jeS4gOagt1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWUucmVhZGVyLm9ubG9hZHN0YXJ0ID0gbWUub25Mb2FkU3RhcnQ7IC8v5byA5aeL6K+75Y+W5Zue6LCD5LqL5Lu2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLnJlYWRlci5vbnByb2dyZXNzID0gbWUub25Qcm9ncmVzczsgLy/or7vlj5bmlofku7bov5vluqblm57osIPkuovku7ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWUucmVhZGVyLm9uYWJvcnQgPSBtZS5vbkFib3J0OyAvL+WBnOatouivu+WPluWbnuiwg+S6i+S7tlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5yZWFkZXIub25lcnJvciA9IG1lLm9uZXJyb3I7IC8v6K+75Y+W5Y+R55Sf6ZSZ6K+v5Zue6LCD5LqL5Lu2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLnJlYWRlci5vbmxvYWQgPSBtZS5vbkxvYWQ7IC8v5YiG54mH5Yqg6L295a6M5q+V5Zue6LCD5LqL5Lu2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLnJlYWRlci5vbmxvYWRlbmQgPSBtZS5vbkxvYWRFbmQ7IC8v6K+75Y+W5paH5Lu25a6M5q+V5Zue6LCD5LqL5Lu2XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAvL+S4iuS8oOaWueazlVxyXG4gICAgICAgICAgICAgICAgICAgIHVwbG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWUgPSBmaWxlX3VwbG9hZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy/or7vlj5bnrKzkuIDlnZdcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWUucmVhZEJsb2IoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBvbkxvYWRTdGFydDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWUgPSBmaWxlX3VwbG9hZDtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG9uUHJvZ3Jlc3M6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtZSA9IGZpbGVfdXBsb2FkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5sb2FkZWQgKz0gZS5sb2FkZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZS5vblByb2dyZXNzQ2FsbEJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lLm9uUHJvZ3Jlc3NDYWxsQmFjayhtZS5sb2FkZWQsIG1lLnRvdGFsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgb25BYm9ydDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWUgPSBmaWxlX3VwbG9hZDtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG9uRXJyb3I6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1lID0gZmlsZV91cGxvYWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBvbkxvYWQ6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtZSA9IGZpbGVfdXBsb2FkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQucmVhZHlTdGF0ZSA9PSBGaWxlUmVhZGVyLkRPTkUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzbGljZV9kYXRhX2Jhc2U2NCA9IGUudGFyZ2V0LnJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5rOo5oSP77yM5LiA5a6a6KaB5Y676ZmkYmFzZTY057yW56CB5aS06YOoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zID0gc2xpY2VfZGF0YV9iYXNlNjQuaW5kZXhPZihcIixcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9zICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpY2VfZGF0YV9iYXNlNjQgPSBzbGljZV9kYXRhX2Jhc2U2NC5zdWJzdHIocG9zICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WwgeijheS4iuS8oOWbvueJh+aOpeWPo+eahOivt+axguWPguaVsFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9wdCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnRnJvbV9BY2NvdW50JzogbWUuZnJvbUFjY291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1RvX0FjY291bnQnOiBtZS50b0FjY291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0J1c2lfSWQnOiBtZS5idXNpbmVzc1R5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0ZpbGVfVHlwZSc6IG1lLmZpbGVUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdGaWxlX1N0cl9NZDUnOiBtZS5maWxlTWQ1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdQa2dGbGFnJzogVVBMT0FEX1JFU19QS0dfRkxBRy5CQVNFNjRfREFUQSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnRmlsZV9TaXplJzogbWUudG90YWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1NsaWNlX09mZnNldCc6IG1lLnNsaWNlT2Zmc2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdTbGljZV9TaXplJzogbWUuc2xpY2VTaXplLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdTbGljZV9EYXRhJzogc2xpY2VfZGF0YV9iYXNlNjQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1NlcSc6IG1lLnNlcSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnVGltZXN0YW1wJzogbWUudGltZXN0YW1wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdSYW5kb20nOiBtZS5yYW5kb21cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/kuIrkvKDmiJDlip/nmoTmiJDlip/lm57osINcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdWNjQ2FsbGJhY2sgPSBmdW5jdGlvbiAocmVzcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwLklzRmluaXNoID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWUubG9hZGVkID0gcmVzcC5OZXh0X09mZnNldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1lLmxvYWRlZCA8IG1lLnRvdGFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZS5yZWFkQmxvYihtZS5sb2FkZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWUubG9hZGVkID0gbWUudG90YWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1lLmNiT2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wUmVzcCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQWN0aW9uU3RhdHVzJzogcmVzcC5BY3Rpb25TdGF0dXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0Vycm9yQ29kZSc6IHJlc3AuRXJyb3JDb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdFcnJvckluZm8nOiByZXNwLkVycm9ySW5mbyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnRmlsZV9VVUlEJzogcmVzcC5GaWxlX1VVSUQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0ZpbGVfU2l6ZSc6IHJlc3AuTmV4dF9PZmZzZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1VSTF9JTkZPJzogcmVzcC5VUkxfSU5GTyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnRG93bmxvYWRfRmxhZyc6IHJlc3AuRG93bmxvYWRfRmxhZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZS5maWxlVHlwZSA9PSBVUExPQURfUkVTX1RZUEUuRklMRSkgeyAvL+WmguaenOS4iuS8oOeahOaYr+aWh+S7tu+8jOS4i+i9veWcsOWdgOmcgOimgXNka+WGhemDqOaLvOaOpVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBSZXNwLlVSTF9JTkZPID0gZ2V0RmlsZURvd25VcmwocmVzcC5GaWxlX1VVSUQsIGN0eC5pZGVudGlmaWVyLCBtZS5maWxlLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWUuY2JPayh0ZW1wUmVzcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXBsb2FkX1JldHJ5X1RpbWVzID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+S4iuS8oOWksei0peeahOWbnuiwg1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVycm9yQ2FsbGJhY2sgPSBmdW5jdGlvbiAocmVzcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChVcGxvYWRfUmV0cnlfVGltZXMgPCBVcGxvYWRfUmV0cnlfTWF4X1RpbWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVwbG9hZF9SZXRyeV9UaW1lcysrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3RvX3VwbG9hZFBpYyhvcHQsIHN1Y2NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lLmNiRXJyKHJlc3ApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL21lLmNiRXJyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/liIbniYfkuIrkvKDlm77niYfmjqXlj6NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3RvX3VwbG9hZFBpYyhvcHQsIHN1Y2NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG9uTG9hZEVuZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWUgPSBmaWxlX3VwbG9hZDtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIC8v5YiG54mH6K+75Y+W5paH5Lu25pa55rOVXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhZEJsb2I6IGZ1bmN0aW9uIChzdGFydCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWUgPSBmaWxlX3VwbG9hZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJsb2IsIGZpbGUgPSBtZS5maWxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZW5kID0gc3RhcnQgKyBtZS5zdGVwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW5kID4gbWUudG90YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZCA9IG1lLnRvdGFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWUuc2xpY2VTaXplID0gZW5kIC0gc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZS5zbGljZVNpemUgPSBtZS5zdGVwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLnNsaWNlT2Zmc2V0ID0gc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v5qC55o2u6LW35aeL5ZKM57uT5p2f5L2N572u77yM5YiG54mH6K+75Y+W5paH5Lu2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2IgPSBtZS5ibG9iU2xpY2UuY2FsbChmaWxlLCBzdGFydCwgZW5kKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy/lsIbliIbniYfnmoTkuozov5vliLbmlbDmja7ovazmjaLkuLpiYXNlNjTnvJbnoIFcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWUucmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBhYm9ydEhhbmRsZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1lID0gZmlsZV91cGxvYWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZS5yZWFkZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lLnJlYWRlci5hYm9ydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL+ivu+WPluaWh+S7tk1ENVxyXG4gICAgICAgICAgICAgICAgZ2V0RmlsZU1ENShvcHRpb25zLmZpbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGZpbGVNZDUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nLmluZm8oJ2ZpbGVNZDU6ICcgKyBmaWxlTWQ1KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5maWxlTWQ1ID0gZmlsZU1kNTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy/liJ3lp4vljJbkuIrkvKDlj4LmlbBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZV91cGxvYWQuaW5pdChvcHRpb25zLCBjYk9rLCBjYkVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v5byA5aeL5LiK5Lyg5paH5Lu2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVfdXBsb2FkLnVwbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY2JFcnJcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIC8vd2ViIGltIOWfuuehgOWvueixoVxyXG5cclxuICAgICAgICAvL+W4uOmHj+WvueixoVxyXG5cclxuICAgICAgICAvL+S8muivneexu+Wei1xyXG4gICAgICAgIHdlYmltLlNFU1NJT05fVFlQRSA9IFNFU1NJT05fVFlQRTtcclxuXHJcbiAgICAgICAgd2ViaW0uTVNHX01BWF9MRU5HVEggPSBNU0dfTUFYX0xFTkdUSDtcclxuXHJcbiAgICAgICAgLy9jMmPmtojmga/lrZDnsbvlnotcclxuICAgICAgICB3ZWJpbS5DMkNfTVNHX1NVQl9UWVBFID0gQzJDX01TR19TVUJfVFlQRTtcclxuXHJcbiAgICAgICAgLy/nvqTmtojmga/lrZDnsbvlnotcclxuICAgICAgICB3ZWJpbS5HUk9VUF9NU0dfU1VCX1RZUEUgPSBHUk9VUF9NU0dfU1VCX1RZUEU7XHJcblxyXG4gICAgICAgIC8v5raI5oGv5YWD57Sg57G75Z6LXHJcbiAgICAgICAgd2ViaW0uTVNHX0VMRU1FTlRfVFlQRSA9IE1TR19FTEVNRU5UX1RZUEU7XHJcblxyXG4gICAgICAgIC8v576k5o+Q56S65raI5oGv57G75Z6LXHJcbiAgICAgICAgd2ViaW0uR1JPVVBfVElQX1RZUEUgPSBHUk9VUF9USVBfVFlQRTtcclxuXHJcbiAgICAgICAgLy/lm77niYfnsbvlnotcclxuICAgICAgICB3ZWJpbS5JTUFHRV9UWVBFID0gSU1BR0VfVFlQRTtcclxuXHJcbiAgICAgICAgLy/nvqTns7vnu5/mtojmga/nsbvlnotcclxuICAgICAgICB3ZWJpbS5HUk9VUF9TWVNURU1fVFlQRSA9IEdST1VQX1NZU1RFTV9UWVBFO1xyXG5cclxuICAgICAgICAvL+WlveWPi+ezu+e7n+mAmuefpeWtkOexu+Wei1xyXG4gICAgICAgIHdlYmltLkZSSUVORF9OT1RJQ0VfVFlQRSA9IEZSSUVORF9OT1RJQ0VfVFlQRTtcclxuXHJcbiAgICAgICAgLy/nvqTmj5DnpLrmtojmga8t576k6LWE5paZ5Y+Y5pu057G75Z6LXHJcbiAgICAgICAgd2ViaW0uR1JPVVBfVElQX01PRElGWV9HUk9VUF9JTkZPX1RZUEUgPSBHUk9VUF9USVBfTU9ESUZZX0dST1VQX0lORk9fVFlQRTtcclxuXHJcbiAgICAgICAgLy/mtY/op4jlmajkv6Hmga9cclxuICAgICAgICB3ZWJpbS5CUk9XU0VSX0lORk8gPSBCUk9XU0VSX0lORk87XHJcblxyXG4gICAgICAgIC8v6KGo5oOF5a+56LGhXHJcbiAgICAgICAgd2ViaW0uRW1vdGlvbnMgPSB3ZWJpbS5FbW90aW9uUGljRGF0YSA9IGVtb3Rpb25zO1xyXG4gICAgICAgIC8v6KGo5oOF5qCH6K+G56ym5ZKMaW5kZXggTWFwXHJcbiAgICAgICAgd2ViaW0uRW1vdGlvbkRhdGFJbmRleHMgPSB3ZWJpbS5FbW90aW9uUGljRGF0YUluZGV4ID0gZW1vdGlvbkRhdGFJbmRleHM7XHJcblxyXG4gICAgICAgIC8v6IW+6K6v55m75b2V5pyN5Yqh6ZSZ6K+v56CBKOaJmOeuoeaooeW8jylcclxuICAgICAgICB3ZWJpbS5UTFNfRVJST1JfQ09ERSA9IFRMU19FUlJPUl9DT0RFO1xyXG5cclxuICAgICAgICAvL+i/nuaOpeeKtuaAgVxyXG4gICAgICAgIHdlYmltLkNPTk5FQ1RJT05fU1RBVFVTID0gQ09OTkVDVElPTl9TVEFUVVM7XHJcblxyXG4gICAgICAgIC8v5LiK5Lyg5Zu+54mH5Lia5Yqh57G75Z6LXHJcbiAgICAgICAgd2ViaW0uVVBMT0FEX1BJQ19CVVNTSU5FU1NfVFlQRSA9IFVQTE9BRF9QSUNfQlVTU0lORVNTX1RZUEU7XHJcblxyXG4gICAgICAgIC8v5pyA6L+R6IGU57O75Lq657G75Z6LXHJcbiAgICAgICAgd2ViaW0uUkVDRU5UX0NPTlRBQ1RfVFlQRSA9IFJFQ0VOVF9DT05UQUNUX1RZUEU7XHJcblxyXG4gICAgICAgIC8v5LiK5Lyg6LWE5rqQ57G75Z6LXHJcbiAgICAgICAgd2ViaW0uVVBMT0FEX1JFU19UWVBFID0gVVBMT0FEX1JFU19UWVBFO1xyXG5cclxuXHJcbiAgICAgICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuICAgICAgICAvL+exu+WvueixoVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy/lt6Xlhbflr7nosaFcclxuICAgICAgICB3ZWJpbS5Ub29sID0gdG9vbDtcclxuICAgICAgICAvL+aOp+WItuWPsOaJk+WNsOaXpeW/l+WvueixoVxyXG4gICAgICAgIHdlYmltLkxvZyA9IGxvZztcclxuXHJcbiAgICAgICAgLy/mtojmga/lr7nosaFcclxuICAgICAgICB3ZWJpbS5Nc2cgPSBNc2c7XHJcbiAgICAgICAgLy/kvJror53lr7nosaFcclxuICAgICAgICB3ZWJpbS5TZXNzaW9uID0gU2Vzc2lvbjtcclxuICAgICAgICAvL+S8muivneWtmOWCqOWvueixoVxyXG4gICAgICAgIHdlYmltLk1zZ1N0b3JlID0ge1xyXG4gICAgICAgICAgICBzZXNzTWFwOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTXNnU3RvcmUuc2Vzc01hcCgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXNzQ291bnQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBNc2dTdG9yZS5zZXNzQ291bnQoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2Vzc0J5VHlwZUlkOiBmdW5jdGlvbiAodHlwZSwgaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBNc2dTdG9yZS5zZXNzQnlUeXBlSWQodHlwZSwgaWQpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkZWxTZXNzQnlUeXBlSWQ6IGZ1bmN0aW9uICh0eXBlLCBpZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE1zZ1N0b3JlLmRlbFNlc3NCeVR5cGVJZCh0eXBlLCBpZCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJlc2V0Q29va2llQW5kU3luY0ZsYWc6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBNc2dTdG9yZS5yZXNldENvb2tpZUFuZFN5bmNGbGFnKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB3ZWJpbS5SZXNvdXJjZXMgPSBSZXNvdXJjZXM7XHJcblxyXG4gICAgICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbiAgICAgICAgLy8gd2ViaW0gQVBJIGltcGxcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8v5Z+65pys5o6l5Y+jXHJcbiAgICAgICAgLy/nmbvlvZVcclxuICAgICAgICB3ZWJpbS5sb2dpbiA9IHdlYmltLmluaXQgPSBmdW5jdGlvbiAobG9naW5JbmZvLCBsaXN0ZW5lcnMsIG9wdHMsIGNiT2ssIGNiRXJyKSB7XHJcblxyXG4gICAgICAgICAgICAvL+WIneWni+WMlui/nuaOpeeKtuaAgeWbnuiwg+WHveaVsFxyXG4gICAgICAgICAgICBDb25uTWFuYWdlci5pbml0KGxpc3RlbmVycy5vbkNvbm5Ob3RpZnksIGNiT2ssIGNiRXJyKTtcclxuXHJcbiAgICAgICAgICAgIC8v55m75b2VXHJcbiAgICAgICAgICAgIF9sb2dpbihsb2dpbkluZm8sIGxpc3RlbmVycywgb3B0cywgY2JPaywgY2JFcnIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy/nmbvlh7pcclxuICAgICAgICAvL+mcgOimgeS8oOmVv+i9ruivomlkXHJcbiAgICAgICAgLy/ov5nmoLfnmbvlh7rkuYvlkI7lhbbku5bnmoTnmbvlvZXlrp7kvovov5jlj6/ku6Xnu6fnu63mlLblj5bmtojmga9cclxuICAgICAgICB3ZWJpbS5sb2dvdXQgPSB3ZWJpbS5vZmZsaW5lID0gZnVuY3Rpb24gKGNiT2ssIGNiRXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm90b19sb2dvdXQoJ2luc3RhbmNlJywgY2JPaywgY2JFcnIpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8v55m75Ye6XHJcbiAgICAgICAgLy/ov5nnp43nmbvlh7rmlrnlvI/vvIzmiYDmnInnmoTlrp7kvovpg73lsIbkuI3kvJrmlLbliLDmtojmga/mjqjpgIHvvIznm7TliLDph43mlrDnmbvlvZVcclxuICAgICAgICB3ZWJpbS5sb2dvdXRBbGwgPSBmdW5jdGlvbiAoY2JPaywgY2JFcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb3RvX2xvZ291dCgnYWxsJywgY2JPaywgY2JFcnIpO1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAvL+a2iOaBr+euoeeQhuaOpeWPo1xyXG4gICAgICAgIC8v5Y+R5raI5oGv5o6l5Y+j77yI56eB6IGK5ZKM576k6IGK77yJXHJcbiAgICAgICAgd2ViaW0uc2VuZE1zZyA9IGZ1bmN0aW9uIChtc2csIGNiT2ssIGNiRXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNc2dNYW5hZ2VyLnNlbmRNc2cobXNnLCBjYk9rLCBjYkVycik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvL+aLieWPluacquivu2MyY+a2iOaBr1xyXG4gICAgICAgIHdlYmltLnN5bmNNc2dzID0gZnVuY3Rpb24gKGNiT2ssIGNiRXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNc2dNYW5hZ2VyLnN5bmNNc2dzKGNiT2ssIGNiRXJyKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8v5ouJ5Y+WQzJD5ryr5ri45raI5oGvXHJcbiAgICAgICAgd2ViaW0uZ2V0QzJDSGlzdG9yeU1zZ3MgPSBmdW5jdGlvbiAob3B0aW9ucywgY2JPaywgY2JFcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1zZ01hbmFnZXIuZ2V0QzJDSGlzdG9yeU1zZ3Mob3B0aW9ucywgY2JPaywgY2JFcnIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy/mi4nlj5bnvqTmvKvmuLjmtojmga9cclxuICAgICAgICB3ZWJpbS5zeW5jR3JvdXBNc2dzID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNiT2ssIGNiRXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNc2dNYW5hZ2VyLnN5bmNHcm91cE1zZ3Mob3B0aW9ucywgY2JPaywgY2JFcnIpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8v5LiK5oqlYzJj5raI5oGv5bey6K+7XHJcbiAgICAgICAgd2ViaW0uYzJDTXNnUmVhZGVkID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNiT2ssIGNiRXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNc2dTdG9yZS5jMkNNc2dSZWFkZWQob3B0aW9ucywgY2JPaywgY2JFcnIpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8v5LiK5oql576k5raI5oGv5bey6K+7XHJcbiAgICAgICAgd2ViaW0uZ3JvdXBNc2dSZWFkZWQgPSBmdW5jdGlvbiAob3B0aW9ucywgY2JPaywgY2JFcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb3RvX2dyb3VwTXNnUmVhZGVkKG9wdGlvbnMsIGNiT2ssIGNiRXJyKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL+iuvue9ruiBiuWkqeS8muivneiHquWKqOagh+iusOW3suivu1xyXG4gICAgICAgIHdlYmltLnNldEF1dG9SZWFkID0gZnVuY3Rpb24gKHNlbFNlc3MsIGlzT24sIGlzUmVzZXRBbGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1zZ1N0b3JlLnNldEF1dG9SZWFkKHNlbFNlc3MsIGlzT24sIGlzUmVzZXRBbGwpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8v576k57uE566h55CG5o6l5Y+jXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvL+WIm+W7uue+pFxyXG4gICAgICAgIHdlYmltLmNyZWF0ZUdyb3VwID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNiT2ssIGNiRXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm90b19jcmVhdGVHcm91cChvcHRpb25zLCBjYk9rLCBjYkVycik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvL+WIm+W7uue+pC3pq5jnuqfmjqXlj6NcclxuICAgICAgICB3ZWJpbS5jcmVhdGVHcm91cEhpZ2ggPSBmdW5jdGlvbiAob3B0aW9ucywgY2JPaywgY2JFcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb3RvX2NyZWF0ZUdyb3VwSGlnaChvcHRpb25zLCBjYk9rLCBjYkVycik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvL+eUs+ivt+WKoOe+pFxyXG4gICAgICAgIHdlYmltLmFwcGx5Sm9pbkdyb3VwID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNiT2ssIGNiRXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm90b19hcHBseUpvaW5Hcm91cChvcHRpb25zLCBjYk9rLCBjYkVycik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvL+WkhOeQhuWKoOe+pOeUs+ivtyjlkIzmhI/miJbmi5Lnu50pXHJcbiAgICAgICAgd2ViaW0uaGFuZGxlQXBwbHlKb2luR3JvdXBQZW5kZW5jeSA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYk9rLCBjYkVycikge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvdG9faGFuZGxlQXBwbHlKb2luR3JvdXBQZW5kZW5jeShvcHRpb25zLCBjYk9rLCBjYkVycik7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy/ojrflj5bnvqTnu4TmnKrlhrPliJfooahcclxuICAgICAgICB3ZWJpbS5nZXRQZW5kZW5jeUdyb3VwID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNiT2ssIGNiRXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm90b19nZXRQZW5kZW5jeUdyb3VwKG9wdGlvbnMsIGNiT2ssIGNiRXJyKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL+e+pOacquWGs+W3suivu+S4iuaKpVxyXG4gICAgICAgIHdlYmltLmdldFBlbmRlbmN5R3JvdXBSZWFkID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNiT2ssIGNiRXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm90b19nZXRQZW5kZW5jeUdyb3VwUmVhZChvcHRpb25zLCBjYk9rLCBjYkVycik7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy/lpITnkIbpgoDor7fov5vnvqTnlLPor7co5ZCM5oSP5oiW5ouS57udKVxyXG4gICAgICAgIHdlYmltLmhhbmRsZUludml0ZUpvaW5Hcm91cFJlcXVlc3QgPSBmdW5jdGlvbiAob3B0aW9ucywgY2JPaywgY2JFcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb3RvX2hhbmRsZUludml0ZUpvaW5Hcm91cFJlcXVlc3Qob3B0aW9ucywgY2JPaywgY2JFcnIpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8v5Yig6Zmk5Yqg576k55Sz6K+3XHJcbiAgICAgICAgd2ViaW0uZGVsZXRlQXBwbHlKb2luR3JvdXBQZW5kZW5jeSA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYk9rLCBjYkVycikge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvdG9fZGVsZXRlQzJDTXNnKG9wdGlvbnMsIGNiT2ssIGNiRXJyKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL+S4u+WKqOmAgOe+pFxyXG4gICAgICAgIHdlYmltLnF1aXRHcm91cCA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYk9rLCBjYkVycikge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvdG9fcXVpdEdyb3VwKG9wdGlvbnMsIGNiT2ssIGNiRXJyKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8v5pCc57Si576k57uEKOagueaNruWQjeensClcclxuICAgICAgICB3ZWJpbS5zZWFyY2hHcm91cEJ5TmFtZSA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYk9rLCBjYkVycikge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvdG9fc2VhcmNoR3JvdXBCeU5hbWUob3B0aW9ucywgY2JPaywgY2JFcnIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy/ojrflj5bnvqTnu4TlhazlvIDotYTmlpko5qC55o2u576kaWTmkJzntKIpXHJcbiAgICAgICAgd2ViaW0uZ2V0R3JvdXBQdWJsaWNJbmZvID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNiT2ssIGNiRXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm90b19nZXRHcm91cFB1YmxpY0luZm8ob3B0aW9ucywgY2JPaywgY2JFcnIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy/ojrflj5bnvqTnu4Tor6bnu4botYTmlpkt6auY57qn5o6l5Y+jXHJcbiAgICAgICAgd2ViaW0uZ2V0R3JvdXBJbmZvID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNiT2ssIGNiRXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm90b19nZXRHcm91cEluZm8ob3B0aW9ucywgY2JPaywgY2JFcnIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy/kv67mlLnnvqTln7rmnKzotYTmlplcclxuICAgICAgICB3ZWJpbS5tb2RpZnlHcm91cEJhc2VJbmZvID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNiT2ssIGNiRXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm90b19tb2RpZnlHcm91cEJhc2VJbmZvKG9wdGlvbnMsIGNiT2ssIGNiRXJyKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8v6I635Y+W576k5oiQ5ZGY5YiX6KGoXHJcbiAgICAgICAgd2ViaW0uZ2V0R3JvdXBNZW1iZXJJbmZvID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNiT2ssIGNiRXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm90b19nZXRHcm91cE1lbWJlckluZm8ob3B0aW9ucywgY2JPaywgY2JFcnIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy/pgoDor7flpb3lj4vliqDnvqRcclxuICAgICAgICB3ZWJpbS5hZGRHcm91cE1lbWJlciA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYk9rLCBjYkVycikge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvdG9fYWRkR3JvdXBNZW1iZXIob3B0aW9ucywgY2JPaywgY2JFcnIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy/kv67mlLnnvqTmiJDlkZjotYTmlplcclxuICAgICAgICB3ZWJpbS5tb2RpZnlHcm91cE1lbWJlciA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYk9rLCBjYkVycikge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvdG9fbW9kaWZ5R3JvdXBNZW1iZXIob3B0aW9ucywgY2JPaywgY2JFcnIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy/liKDpmaTnvqTmiJDlkZhcclxuICAgICAgICB3ZWJpbS5kZWxldGVHcm91cE1lbWJlciA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYk9rLCBjYkVycikge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvdG9fZGVsZXRlR3JvdXBNZW1iZXIob3B0aW9ucywgY2JPaywgY2JFcnIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy/op6PmlaPnvqRcclxuICAgICAgICB3ZWJpbS5kZXN0cm95R3JvdXAgPSBmdW5jdGlvbiAob3B0aW9ucywgY2JPaywgY2JFcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb3RvX2Rlc3Ryb3lHcm91cChvcHRpb25zLCBjYk9rLCBjYkVycik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvL+i9rOiuqee+pOe7hFxyXG4gICAgICAgIHdlYmltLmNoYW5nZUdyb3VwT3duZXIgPSBmdW5jdGlvbiAob3B0aW9ucywgY2JPaywgY2JFcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb3RvX2NoYW5nZUdyb3VwT3duZXIob3B0aW9ucywgY2JPaywgY2JFcnIpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8v6I635Y+W5oiR55qE576k57uE5YiX6KGoLemrmOe6p+aOpeWPo1xyXG4gICAgICAgIHdlYmltLmdldEpvaW5lZEdyb3VwTGlzdEhpZ2ggPSBmdW5jdGlvbiAob3B0aW9ucywgY2JPaywgY2JFcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb3RvX2dldEpvaW5lZEdyb3VwTGlzdEhpZ2gob3B0aW9ucywgY2JPaywgY2JFcnIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy/ojrflj5bnvqTmiJDlkZjop5LoibJcclxuICAgICAgICB3ZWJpbS5nZXRSb2xlSW5Hcm91cCA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYk9rLCBjYkVycikge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvdG9fZ2V0Um9sZUluR3JvdXAob3B0aW9ucywgY2JPaywgY2JFcnIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy/orr7nva7nvqTmiJDlkZjnpoHoqIDml7bpl7RcclxuICAgICAgICB3ZWJpbS5mb3JiaWRTZW5kTXNnID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNiT2ssIGNiRXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm90b19mb3JiaWRTZW5kTXNnKG9wdGlvbnMsIGNiT2ssIGNiRXJyKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8v5Y+R6YCB6Ieq5a6a5LmJ576k57O757uf6YCa55+lXHJcbiAgICAgICAgd2ViaW0uc2VuZEN1c3RvbUdyb3VwTm90aWZ5ID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNiT2ssIGNiRXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm90b19zZW5kQ3VzdG9tR3JvdXBOb3RpZnkob3B0aW9ucywgY2JPaywgY2JFcnIpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8v6L+b5YWl5aSn576kXHJcbiAgICAgICAgd2ViaW0uYXBwbHlKb2luQmlnR3JvdXAgPSBmdW5jdGlvbiAob3B0aW9ucywgY2JPaywgY2JFcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb3RvX2FwcGx5Sm9pbkJpZ0dyb3VwKG9wdGlvbnMsIGNiT2ssIGNiRXJyKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8v6YCA5Ye65aSn576kXHJcbiAgICAgICAgd2ViaW0ucXVpdEJpZ0dyb3VwID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNiT2ssIGNiRXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm90b19xdWl0QmlnR3JvdXAob3B0aW9ucywgY2JPaywgY2JFcnIpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8v6LWE5paZ5YWz57O76ZO+566h55CG5o6l5Y+jXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvL+iOt+WPluS4quS6uui1hOaWmeaOpeWPo++8jOWPr+eUqOS6juaQnOe0oueUqOaIt1xyXG4gICAgICAgIHdlYmltLmdldFByb2ZpbGVQb3J0cmFpdCA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYk9rLCBjYkVycikge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvdG9fZ2V0UHJvZmlsZVBvcnRyYWl0KG9wdGlvbnMsIGNiT2ssIGNiRXJyKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8v6K6+572u5Liq5Lq66LWE5paZXHJcbiAgICAgICAgd2ViaW0uc2V0UHJvZmlsZVBvcnRyYWl0ID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNiT2ssIGNiRXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm90b19zZXRQcm9maWxlUG9ydHJhaXQob3B0aW9ucywgY2JPaywgY2JFcnIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy/nlLPor7fliqDlpb3lj4tcclxuICAgICAgICB3ZWJpbS5hcHBseUFkZEZyaWVuZCA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYk9rLCBjYkVycikge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvdG9fYXBwbHlBZGRGcmllbmQob3B0aW9ucywgY2JPaywgY2JFcnIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy/ojrflj5blpb3lj4vnlLPor7fliJfooahcclxuICAgICAgICB3ZWJpbS5nZXRQZW5kZW5jeSA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYk9rLCBjYkVycikge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvdG9fZ2V0UGVuZGVuY3kob3B0aW9ucywgY2JPaywgY2JFcnIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy/lpb3lj4vnlLPor7fliJfooajlt7Lor7vkuIrmiqVcclxuICAgICAgICB3ZWJpbS5nZXRQZW5kZW5jeVJlcG9ydCA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYk9rLCBjYkVycikge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvdG9fZ2V0UGVuZGVuY3lSZXBvcnQob3B0aW9ucywgY2JPaywgY2JFcnIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy/liKDpmaTlpb3lj4vnlLPor7dcclxuICAgICAgICB3ZWJpbS5kZWxldGVQZW5kZW5jeSA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYk9rLCBjYkVycikge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvdG9fZGVsZXRlUGVuZGVuY3kob3B0aW9ucywgY2JPaywgY2JFcnIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy/lpITnkIblpb3lj4vnlLPor7dcclxuICAgICAgICB3ZWJpbS5yZXNwb25zZUZyaWVuZCA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYk9rLCBjYkVycikge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvdG9fcmVzcG9uc2VGcmllbmQob3B0aW9ucywgY2JPaywgY2JFcnIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy/ojrflj5bmiJHnmoTlpb3lj4tcclxuICAgICAgICB3ZWJpbS5nZXRBbGxGcmllbmQgPSBmdW5jdGlvbiAob3B0aW9ucywgY2JPaywgY2JFcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb3RvX2dldEFsbEZyaWVuZChvcHRpb25zLCBjYk9rLCBjYkVycik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvL+WIoOmZpOS8muivnVxyXG4gICAgICAgIHdlYmltLmRlbGV0ZUNoYXQgPSBmdW5jdGlvbiAob3B0aW9ucywgY2JPaywgY2JFcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb3RvX2RlbGV0ZUNoYXQob3B0aW9ucywgY2JPaywgY2JFcnIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy/liKDpmaTlpb3lj4tcclxuICAgICAgICB3ZWJpbS5kZWxldGVGcmllbmQgPSBmdW5jdGlvbiAob3B0aW9ucywgY2JPaywgY2JFcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb3RvX2RlbGV0ZUZyaWVuZChvcHRpb25zLCBjYk9rLCBjYkVycik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvL+aLiem7kVxyXG4gICAgICAgIHdlYmltLmFkZEJsYWNrTGlzdCA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYk9rLCBjYkVycikge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvdG9fYWRkQmxhY2tMaXN0KG9wdGlvbnMsIGNiT2ssIGNiRXJyKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8v5Yig6Zmk6buR5ZCN5Y2VXHJcbiAgICAgICAgd2ViaW0uZGVsZXRlQmxhY2tMaXN0ID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNiT2ssIGNiRXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm90b19kZWxldGVCbGFja0xpc3Qob3B0aW9ucywgY2JPaywgY2JFcnIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy/ojrflj5bmiJHnmoTpu5HlkI3ljZVcclxuICAgICAgICB3ZWJpbS5nZXRCbGFja0xpc3QgPSBmdW5jdGlvbiAob3B0aW9ucywgY2JPaywgY2JFcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb3RvX2dldEJsYWNrTGlzdChvcHRpb25zLCBjYk9rLCBjYkVycik7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy/ojrflj5bmnIDov5HkvJror51cclxuICAgICAgICB3ZWJpbS5nZXRSZWNlbnRDb250YWN0TGlzdCA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYk9rLCBjYkVycikge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvdG9fZ2V0UmVjZW50Q29udGFjdExpc3Qob3B0aW9ucywgY2JPaywgY2JFcnIpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8v5Zu+54mH5oiW5paH5Lu25pyN5Yqh5o6l5Y+jXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvL+S4iuS8oOaWh+S7tuaOpeWPo++8iOmrmOeJiOacrOa1j+iniOWZqO+8iVxyXG4gICAgICAgIHdlYmltLnVwbG9hZEZpbGUgPSB3ZWJpbS51cGxvYWRQaWMgPSBmdW5jdGlvbiAob3B0aW9ucywgY2JPaywgY2JFcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIEZpbGVVcGxvYWRlci51cGxvYWRGaWxlKG9wdGlvbnMsIGNiT2ssIGNiRXJyKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8v5o+Q5Lqk5LiK5Lyg5Zu+54mH6KGo5Y2V5o6l5Y+j77yI55So5LqO5L2O54mI5pysaWXvvIlcclxuICAgICAgICB3ZWJpbS5zdWJtaXRVcGxvYWRGaWxlRm9ybSA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYk9rLCBjYkVycikge1xyXG4gICAgICAgICAgICByZXR1cm4gRmlsZVVwbG9hZGVyLnN1Ym1pdFVwbG9hZEZpbGVGb3JtKG9wdGlvbnMsIGNiT2ssIGNiRXJyKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8v5LiK5Lyg5Zu+54mH5oiW5paH5Lu2KEJhc2U2NCnmjqXlj6NcclxuICAgICAgICB3ZWJpbS51cGxvYWRGaWxlQnlCYXNlNjQgPSB3ZWJpbS51cGxvYWRQaWNCeUJhc2U2NCA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYk9rLCBjYkVycikge1xyXG4gICAgICAgICAgICAvL+ivt+axguWPguaVsFxyXG4gICAgICAgICAgICB2YXIgb3B0ID0ge1xyXG4gICAgICAgICAgICAgICAgJ1RvX0FjY291bnQnOiBvcHRpb25zLnRvQWNjb3VudCxcclxuICAgICAgICAgICAgICAgICdCdXNpX0lkJzogb3B0aW9ucy5idXNpbmVzc1R5cGUsXHJcbiAgICAgICAgICAgICAgICAnRmlsZV9UeXBlJzogb3B0aW9ucy5GaWxlX1R5cGUsXHJcbiAgICAgICAgICAgICAgICAnRmlsZV9TdHJfTWQ1Jzogb3B0aW9ucy5maWxlTWQ1LFxyXG4gICAgICAgICAgICAgICAgJ1BrZ0ZsYWcnOiBVUExPQURfUkVTX1BLR19GTEFHLkJBU0U2NF9EQVRBLFxyXG4gICAgICAgICAgICAgICAgJ0ZpbGVfU2l6ZSc6IG9wdGlvbnMudG90YWxTaXplLFxyXG4gICAgICAgICAgICAgICAgJ1NsaWNlX09mZnNldCc6IDAsXHJcbiAgICAgICAgICAgICAgICAnU2xpY2VfU2l6ZSc6IG9wdGlvbnMudG90YWxTaXplLFxyXG4gICAgICAgICAgICAgICAgJ1NsaWNlX0RhdGEnOiBvcHRpb25zLmJhc2U2NFN0cixcclxuICAgICAgICAgICAgICAgICdTZXEnOiBuZXh0U2VxKCksXHJcbiAgICAgICAgICAgICAgICAnVGltZXN0YW1wJzogdW5peHRpbWUoKSxcclxuICAgICAgICAgICAgICAgICdSYW5kb20nOiBjcmVhdGVSYW5kb20oKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvdG9fdXBsb2FkUGljKG9wdCwgY2JPaywgY2JFcnIpO1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAvL+iOt+WPlumVv+i9ruivoklEXHJcbiAgICAgICAgd2ViaW0uZ2V0TG9uZ1BvbGxpbmdJZCA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYk9rLCBjYkVycikge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvdG9fZ2V0TG9uZ1BvbGxpbmdJZChvcHRpb25zLCBjYk9rLCBjYkVycik7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy/ojrflj5bkuIvovb3lnLDlnYBcclxuICAgICAgICB3ZWJpbS5hcHBseURvd25sb2FkID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNiT2ssIGNiRXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm90b19hcHBseURvd25sb2FkKG9wdGlvbnMsIGNiT2ssIGNiRXJyKTtcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgLy/mo4Dmn6XmmK/lkKbnmbvlvZVcclxuICAgICAgICB3ZWJpbS5jaGVja0xvZ2luID0gZnVuY3Rpb24gKGNiRXJyLCBpc05lZWRDYWxsQmFjaykge1xyXG4gICAgICAgICAgICByZXR1cm4gY2hlY2tMb2dpbihjYkVyciwgaXNOZWVkQ2FsbEJhY2spO1xyXG4gICAgICAgIH07XHJcbiAgICB9KSh3ZWJpbSk7XHJcbiAgICByZXR1cm4gd2ViaW07XHJcbn0oKTsiXX0=