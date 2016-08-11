# 对官方Echarts做了如下修改：
1. 修改Ripple特效，具体请参考`/test/effectScatterCenterPoint.html`
```javascript
rippleEffect: {
    brushType: 'stroke',
    scale: 25,
    period: 2,
    
    // 新增
    rippleNum: 1, // 波纹数量
    rippleWidth: 2, // 波纹宽度
    centerEffect: { // 中心圆点扩散特效
        show: true,
        scale: 4
    }
}
```
2. 修改Echart动画频率，降低CPU使用率，风扇狂转的问题，特别是在Retina屏上。注意，这里目前实际上是修改了zrender的代码。详情参考：[优化Echarts动画性能-解决CPU 100%、风扇狂转的问题](http://blog.debugfuture.com/2016/06/28/improve-echarts-animation-performance/)
3. 添加bower支持
4. 添加mmTrix主题

# 其他
1. 临时修改package.json中zrender地址，否则下载下来的zrender与echart并不匹配，真是个坑。（等npm更新后，再改回来）Â