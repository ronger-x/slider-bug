//获取应用实例
const app = getApp();


Page({
    data: {
        defaultValue: 100,
        min: 0,
        max: 200,
        pointX: 100,
        pointY: 100,
        padA: 0,
        padB: 0,
        padC: 0,
        padD: 0,
        step: 20,
        barHeight: '40rpx',
        color: 'aqua',
        central: false,
        peripheral: false,
        devices: [],
        visible: false,
        device: {},
        connected: false,
        client: "",
        blueConnectNum: 0,
        isChecksum: true,
        isEncrypt: true,
        flagEnd: false,
        defaultData: 1,
        _deviceId: "",
        _serviceId: "",
        _characteristicId: "",
        sendDataInterval: "",
        sendDataDuration: 2000
    },
    handlePointXChange(e) {
        this.setData({
            pointX: e.detail.value
        })
    },
    handlePointYChange(e) {
        this.setData({
            pointY: e.detail.value
        })
    },
    handlePointXChangeEnd() {
        // console.log('------------------handlePointXChangeEnd------------------');
        let _ts = this;
        setTimeout(function (){
            _ts.setData({
                pointX: _ts.data.defaultValue
            })
        }, 2);
    },
    handlePointYChangeEnd() {
        // console.log('------------------handlePointYChangeEnd------------------');
        let _ts = this;
        setTimeout(function (){
            _ts.setData({
                pointY: _ts.data.defaultValue
            })
        }, 2);
    },
    clickButtonA() {
        this.setData({
            padA: 1
        });
    },
    clickButtonB() {
        this.setData({
            padB: 1
        });
    },
    clickButtonC() {
        this.setData({
            padC: 1
        });
    },
    clickButtonD() {
        this.setData({
            padD: 1
        });
    },
    initPadData() {
        // 初始化数据
        this.setData({
            padA: 0,
            padB: 0,
            padC: 0,
            padD: 0
        })
    }
});
