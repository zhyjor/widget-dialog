## dialog
js dialog弹窗

## 用法
### demo运行
运行文件
```
./dist/example/test-dialog.html
```


## 扩展方法
添加imgad：首页的弹窗广告，toast,prompt：带输入框的confirm,declare，使用帮助以及用户协议

```
$.alert('支付成功', true, function () {
    console.log(11);
})

$.alert('支付成功')
$.imgad('http://oankigr4l.bkt.clouddn.com/8192dd88gy1fkekqy1wj6j20q10ecjsz.jpg', function () {
    this.hide();
})
// 不传时间，默认3000ms
$.toast('控制超时', 3000, function () {
    console.log('xxx')
})

$.toast('这是一个控制', 300000, function () {
    console.log(11)
})

$.prompt({bar: "新建价格分组", content: '珠海分组', placeholder: '新建价格分组'}, null, function (type, input, c) {
    if (type == 'yes') {
        $.toast(input, 3000, function () {
            console.log(c)
        })
        this.hide();
    } else {
        $.toast(input, 3000, function () {

            console.log(c)
        })
        this.hide();
    }

})

$.declare({bar: "使用帮助", content: txt}, [{'yes':'确认'}], function(type, input, c) {
    if(type == 'yes') {
        $.toast('完成', 3000, function() {
            console.log(c)
        })
        this.hide();
    } else {

    }

})

```

