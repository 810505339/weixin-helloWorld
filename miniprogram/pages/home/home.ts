//home
Page({
    data: {},
    /*页面初次加载类似created*/
    onLoad(): void {
        console.log('我是onLoad')
    },
    onReady(): void {
        console.log('我是onReady')
    },
    /*页面元素加载类似mounted*/
    onShow(): void {
        console.log('我是onShow')
    },
    onHide(): void {
        console.log('我是onHide')
    },
    onUnload(): void {
        console.log('我是onUnload')
    }
})