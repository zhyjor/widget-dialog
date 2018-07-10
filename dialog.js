/*! jq-dialog  v2.1.1
* author:tianxiangbing email:55342775@qq.com
* demo:http://www.lovewebgames.com/jsmodule/dialog.html 
* git:https://github.com/tianxiangbing/dialog  2018-07-09 */
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],b):"object"==typeof exports?module.exports=b():a.Dialog=b(jQuery)}(this,function(a){a.fn.Dialog=function(c){var d=[];return a(this).each(function(){var e=new b,f=a.extend({trigger:a(this)},c);e.init(f),d.push(e)}),d},a.Dialog=function(c){if("alert"===c.type){var d=new b,e='<div class="ui-alert-title">'+c.content+"</div>",f="",g="ui-alert";c.button?("boolean"==typeof c.button&&(c.button="确定"),f='<p class="ui-dialog-action"><button class="ui-alert-submit  js-dialog-close">'+c.button+"</button></p>"):c.timer||(g+=" ui-alert-tip"),e+=f;var h=a.extend({target:e,animate:!0,show:!0,mask:!0,className:g,afterHide:function(a){this.dispose(),c.callback&&c.callback()}},c);d.init(h),c.timer&&setTimeout(function(){d.dispose(),c.callback&&c.callback()},c.timer),d.touch(d.mask,function(){void 0===c.button&&(d.hide(),c.callback&&c.callback())})}if("confirm"===c.type){var i=new b,e='<div class="ui-confirm-title">'+c.content+"</div>",f="";c.buttons||(c.buttons=[{yes:"确定"},{no:"取消"}]);for(var j="",k=0,l=c.buttons.length;k<l;k++){var m=c.buttons[k];m.yes&&(j+='<td><button class="ui-confirm-submit " data-type="yes">'+m.yes+"</button></td>"),m.no&&(j+='<td><button class="ui-confirm-no" data-type="no">'+m.no+"</button></td>"),m.close&&(j+='<td><button class="ui-confirm-close js-dialog-close" data-type="close">'+m.close+"</button></td>")}f='<table class="ui-dialog-action"><tr>'+j+"</tr></table>","bottom"==c.position?e=f+e:e+=f;var n=a.extend({target:e,animate:!0,show:!0,fixed:!0,mask:!0,className:"ui-alert",afterHide:function(a){this.dispose()},beforeShow:function(b){i.touch(a(".ui-confirm-submit",b),function(){c.callback&&c.callback.call(i,"yes",b)}),i.touch(a(".ui-confirm-no",b),function(){c.callback&&c.callback.call(i,"no",b)}),i.touch(a(".ui-confirm-close",b),function(){c.callback&&c.callback.call(i,"close",b)})}},c);i.init(n)}if("declare"===c.type){var i=new b,e=' <div class="ui-declare-head">'+c.bar+'</div><div class="ui-declare-title">'+c.content+"</div>",f="";c.buttons||(c.buttons=[{yes:"同意"},{no:"取消"}]);for(var j="",k=0,l=c.buttons.length;k<l;k++){var m=c.buttons[k];m.yes&&(j+='<td><button class="ui-declare-submit " data-type="yes">'+m.yes+"</button></td>"),m.no&&(j+='<td><button class="ui-declare-no" data-type="no">'+m.no+"</button></td>"),m.close&&(j+='<td><button class="ui-declare-close js-dialog-close" data-type="close">'+m.close+"</button></td>")}f='<table class="ui-dialog-action"><tr>'+j+"</tr></table>","bottom"==c.position?e=f+e:e+=f;var n=a.extend({target:e,animate:!0,show:!0,fixed:!0,mask:!0,className:"ui-alert",afterHide:function(a){this.dispose()},beforeShow:function(b){i.touch(a(".ui-declare-submit",b),function(){c.callback&&c.callback.call(i,"yes",b)}),i.touch(a(".ui-declare-no",b),function(){c.callback&&c.callback.call(i,"no",b)}),i.touch(a(".ui-declare-close",b),function(){c.callback&&c.callback.call(i,"close",b)})}},c);i.init(n)}if("prompt"===c.type){var i=new b,e=' <div class="ui-prompt-head">'+c.bar+'</div><div class="ui-prompt-title"><input type="text" class="ui-prompt-input" placeholder="'+c.placeholder+'" value='+c.content+'><span class="ui-prompt-input-alert"></span></div>',f="";c.buttons||(c.buttons=[{yes:"确定"},{no:"取消"}]);for(var j="",k=0,l=c.buttons.length;k<l;k++){var m=c.buttons[k];m.yes&&(j+='<td><button class="ui-prompt-submit " data-type="yes">'+m.yes+"</button></td>"),m.no&&(j+='<td><button class="ui-prompt-no" data-type="no">'+m.no+"</button></td>"),m.close&&(j+='<td><button class="ui-prompt-close js-dialog-close" data-type="close">'+m.close+"</button></td>")}f='<table class="ui-dialog-action"><tr>'+j+"</tr></table>","bottom"==c.position?e=f+e:e+=f;var n=a.extend({target:e,animate:!0,show:!0,fixed:!0,mask:!0,className:"ui-alert",afterHide:function(a){this.dispose()},beforeShow:function(b){i.inputCheck(a(".ui-prompt-input"),!1),i.touch(a(".ui-prompt-submit",b),function(){i.inputCheck(a(".ui-prompt-input"),!0)&&c.callback&&c.callback.call(i,"yes",a(".ui-prompt-input").val(),b)}),i.touch(a(".ui-prompt-no",b),function(){c.callback&&c.callback.call(i,"no",a(".ui-prompt-input").val(),b)}),i.touch(a(".ui-prompt-close",b),function(){c.callback&&c.callback.call(i,"close",a(".ui-prompt-input").val(),b)})}},c);i.init(n)}if("toast"===c.type){var d=new b,e='<div class="ui-toast-title">'+c.content+"</div>",f="",g="ui-toast";e+=f;var h=a.extend({target:e,animate:!0,show:!0,mask:!0,className:g,afterHide:function(a){this.dispose(),c.callback&&c.callback()}},c);d.init(h),c.timer&&setTimeout(function(){d.dispose(),c.callback&&c.callback()},c.timer)}if("imgad"===c.type){var i=new b,o=new Image;o.src=c.content,o.onerror=function(){console.log("图片加载失败不会显示")},o.onload=function(){var b='<div class="ui-imgad-title"><img src='+o.src+"></div>",d="ui-imgad";b+=' <div class="ui-dialog-action" style="margin-top: 30px;border: none;"><span class="ui-imgad-no" data-type="no">X</span></div>';var e=a.extend({target:b,animate:!0,show:!0,mask:!0,className:d,afterHide:function(a){this.dispose()},beforeShow:function(b){i.touch(a(".ui-imgad-no",b),function(){c.callback&&c.callback.call(i,"no",b)})}},c);i.init(e)},a(".ui-imgad-title img").load(function(){i.setPosition()})}},a.alert=function(b,c,d,e,f){var g={},h={zIndex:100,type:"alert"};g="object"==typeof b?a.extend(h,b):a.extend(h,{content:b,button:c,timer:e,callback:d,width:283,height:"auto"}),a.Dialog(a.extend(g,f))},a.confirm=function(b,c,d,e){var f={},g={zIndex:100,type:"confirm"};f="object"==typeof b?a.extend(g,b):a.extend(g,{content:b,buttons:c,width:283,callback:d}),a.Dialog(a.extend(f,e))},a.prompt=function(b,c,d,e){var f={},g={zIndex:100,type:"prompt"};if(!b)throw new Error('You need to set the param "content"');b.bar||(b.bar="标题"),b.content||(b.content=""),b.placeholder||(b.placeholder="请输入价格分组名称"),f=a.extend(g,b,{buttons:c,width:283,callback:d}),a.Dialog(a.extend(f,e))},a.toast=function(b,c,d,e){var f={},g=c||3e3,h={zIndex:100,type:"toast",timer:3e3};f="object"==typeof b?a.extend(h,b):a.extend(h,{content:b,timer:g,callback:d,mask:!1,width:"none",height:"auto"}),a.Dialog(a.extend(f,e))},a.declare=function(b,c,d,e){var f={},g={zIndex:100,type:"declare"};f=a.extend(g,b,{buttons:c,width:283,callback:d}),a.Dialog(a.extend(f,e))},a.imgad=function(b,c,d){var e={},f={zIndex:100,type:"imgad"};e="object"==typeof b?a.extend(f,b):a.extend(f,{content:b,callback:c,width:283,mask:!0,height:"auto"}),a.Dialog(a.extend(e,d))};var b=function(){var b=Math.random().toString().replace(".","");this.id="dialog_"+b,this.settings={},this.settings.closeTpl=a('<span class="ui-dialog-close js-dialog-close">x</span>'),this.settings.titleTpl=a('<div class="ui-dialog-title"></div>'),this.timer=null,this.showed=!1,this.mask=a()};return b.prototype={init:function(b){this.settings=a.extend({fixed:!1},this.settings,b),this.settings.mask&&(this.mask=a('<div class="ui-dialog-mask"/>'),a("body").append(this.mask)),a("body").append('<div class="ui-dialog" id="'+this.id+'"></div>'),this.dialogContainer=a("#"+this.id);var c=this.settings.zIndex||10;this.dialogContainer.css({zIndex:c}),this.settings.className&&this.dialogContainer.addClass(this.settings.className),this.mask.css({zIndex:c-1}),this.settings.closeTpl&&this.dialogContainer.append(this.settings.closeTpl),this.settings.title&&(this.dialogContainer.append(this.settings.titleTpl),this.settings.titleTpl.html(this.settings.title)),this.bindEvent(),this.settings.show&&this.show()},touch:function(b,c){var d;a(b).on("touchmove",function(a){d=!0}).on("touchend",function(a){if(a.preventDefault(),!d){c.call(this,a,"touch")||(a.preventDefault(),a.stopPropagation())}d=!1})},inputCheck:function(b,c){function d(c){var d=a(b).val(),g=a(".ui-prompt-input-alert");if(!e.test(d)&&0!=d.length)return g.html("输入了限制字符"),a(".ui-prompt-input-alert").show(),void(f=!1);if(g.html(""),a(".ui-prompt-input-alert").show(),f=!0,d.length>10)return g.html("输入长度达到上限"),a(".ui-prompt-input-alert").show(),void(f=!1);if(d.length<=0){if(c)return g.html("输入不能为空"),a(".ui-prompt-input-alert").show(),void(f=!1)}else g.html(""),a(".ui-prompt-input-alert").show(),f=!0}var e=/^[\u4e00-\u9fa5_a-zA-Z0-9_]+$/,f=!0;return a(b).on("input",function(){d(!0)}),d(c),f},bindEvent:function(){var b=this;this.settings.trigger&&(a(this.settings.trigger).click(function(){b.show()}),b.touch(a(this.settings.trigger),function(){b.show()})),a(this.dialogContainer).on("click",".js-dialog-close",function(){return b.hide(),!1}),a(window).resize(function(){b.setPosition()}),a(window).scroll(function(){b.setPosition()}),a(document).keydown(function(a){27===a.keyCode&&b.showed&&b.hide()}),a(this.dialogContainer).on("hide",function(){b.hide()})},dispose:function(){this.dialogContainer.remove(),this.mask.remove(),this.timer&&clearInterval(this.timer)},hide:function(){var b=this;b.settings.beforeHide&&b.settings.beforeHide.call(b,b.dialogContainer),this.showed=!1,this.mask.hide(),this.timer&&clearInterval(this.timer),this.settings.animate?(this.dialogContainer.removeClass("zoomIn").addClass("zoomOut"),setTimeout(function(){b.dialogContainer.hide(),"object"==typeof b.settings.target&&a("body").append(b.dialogContainer.hide()),b.settings.afterHide&&b.settings.afterHide.call(b,b.dialogContainer)},500)):(this.dialogContainer.hide(),"object"==typeof this.settings.target&&a("body").append(this.dialogContainer),this.settings.afterHide&&this.settings.afterHide.call(this,this.dialogContainer))},show:function(){"string"==typeof this.settings.target?/^(\.|\#\w+)/gi.test(this.settings.target)?this.dailogContent=a(this.settings.target):this.dailogContent=a("<div>"+this.settings.target+"</div>"):this.dailogContent=this.settings.target,this.mask.show(),this.dailogContent.show(),this.height=this.settings.height||"auto",this.width=this.settings.width||"auto",this.dialogContainer.append(this.dailogContent).show().css({height:this.height,width:this.width}),this.settings.beforeShow&&this.settings.beforeShow.call(this,this.dialogContainer),this.showed=!0,a(this.settings.trigger).blur(),this.setPosition();var b=this;this.timer&&clearInterval(this.timer),this.settings.fixed&&(this.timer=setInterval(function(){b.setPosition()},1e3)),this.settings.animate&&this.dialogContainer.addClass("zoomIn").removeClass("zoomOut").addClass("animated")},setPosition:function(){if(this.showed){var b=this;this.dialogContainer.show(),this.height=this.settings.height,this.width=this.settings.width,isNaN(this.height)&&(this.height=this.dialogContainer.outerHeight&&this.dialogContainer.outerHeight()||this.dialogContainer.height()),isNaN(this.width)&&(this.width=this.dialogContainer.outerWidth&&this.dialogContainer.outerWidth()||this.dialogContainer.width());var c=a(window).height(),d=a(window).width(),e=this.width/2,f=this.height/2,g=d/2-e,h=c/2-f;g=Math.floor(Math.max(20,g)),h=Math.floor(Math.max(0,h)),console.log("ch:"+c,"cw:"+d,"left:"+g,"top:"+h,"w:"+this.width,"h:"+this.height);var i="absolute";b.settings.fixed?i="fixed":h+=a(window).scrollTop();var j="auto";"bottom"==b.settings.position&&(h="auto",j=0),b.dialogContainer.css({position:i,top:h,left:g,right:g,bottom:j})}}},b});