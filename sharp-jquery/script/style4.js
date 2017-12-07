// jquery中的事件
// 传统JavaScript 为DOM元素添加事件：window.onload;
// jQuery:$(document).ready;
// 区别：
// 1、执行时机
// 传统：所有元素及关联文件加载完毕才执行；
// jQuery:在DOM完全就绪事就会被调用；注意事项：由于DOM就绪就会被执行，此时关联文件未下载，例如无法获取
// 图片宽高，解决办法使用load()方法；此方法会在所有内容加载完毕后触发，如果处理函数绑定在元素上，则会在
// 元素加载完毕后触发。
// $(window).load(function(){

// })
// 等价于：
// window.load = function() {

// }
// 2、多次使用
// 传统方法会被覆盖，jQuery会追加；

// 3、简写方式
// $(document).ready(function(){

// })
// $(function(){

// })
// $().ready(function(){

// })

// 事件绑定：bind(type,[data],fn);
// 参数1:事件类型
// 参数2：可选参数，作为event.data属性值传递
// 参数3：处理函数
// 基本效果：
$(function(){
	$("#panel h5.head").bind("click",function(){
		$(this).next().show();
	})
})
// 加强效果
$(function(){
	$("#panel h5.head").bind("click",function(){
		var $content = $(this).next();
		if($content.is(":visible")){
			$content.hide();
		}else {
			$contett.show();
		}
	})
})
// 改变事件绑定类型
$(function(){
	$("#panel h5.head").bind("mousover",function(){
		$(this).next().show();
	}).bind("mouseout",function(){
		$(this).next.hide();
	})
})
// 简写绑定事件
$(function(){
	$("#panel h5.head").mousover(function(){
		$(this).next().show();
	}).mousover(function(){
		$(this).next().hide();
	})
})

// 合成事件 hover(enter,leave)
$(function(){
	$("#panel h2.head").hover(function(){
		$(this).next().show();
	},function(){
		$(this).next().hide();
	});
})
// toggle(fn1,fn2,...) 可多个，顺序执行；
$(function(){
	$("#panel h2.head").toggle(function(){
		$(this).addClass("highlight");
		$(this).next().show();
	},function(){
		$(this).removeClass("highlight");
		$(this).next().hide();
	})
})
// 切换元素显示状态
$(function(){
	$("#panel h2.head").toggle(){
		function(){
			$(this).next().toggle();
		},function(){
			$(this).next.toggle();
		}
	}
})
// 事件冒泡 从dom数低端往顶端响应事件
// 停止事件冒泡 stopPropagation()
$('span').bind("click",function(event){
	var txt = $('#msg').html()+"<p>内存span元素被单击。</p>"
	$('#msg').html(txt);
  event.stopPropagation(); //停止事件冒泡;
});
// 组织默认行为 event.preventDefault();简写：return false；

// jquery不支持捕获事件

// 事件对象属性
// 1、event.type 获取时间类型
// 2、event.preventDefault() 组织时间默认行为
// 3、event.stopPropagation() 组织时间的冒泡
// 4、event.target() 获取到触发事件的元素
// 5、event.relatedTarget()
// 6、event.pageX event.pageY 获取相对于页面x y坐标
// 7、event.which 获取鼠标单击时获取左中右时间
// 8、event.metaKey 获取键盘ctrl按键

// 移除时间unbind(type,data)
// 触发一次后立即解除 one

// 模拟操作
// 模拟单击
$('#btn').trigger("click");

// jQuery中的动画
// 1、show() hide() 可以添加一个时间参数，让元素动起来
$("element").show("slow");  //"slow" :0.6s  ;"normal":0.4s ;"fast" :0.2s
$("element").show(600);
// 2、fadeIn()、fadeOut()改变元素透明度；
$("#panel h2.head").toggle(function(){
	$(this).next().fadeOut();
},function(){
	$(this).next().fadeIn();
});
// 3、slideUp()、slieDown() 改变元素高度
$("panel h2.head").toggle(function(){
	$(this).next().slideDown();
},function(){
	$(this).next().slideIn();
});

// 自定义动画 animate(params,speed,callback)
// 参数1：包含样式属性及值得映射，{property1:"value1",property2:"vakue2",...}
// 参数2：速度参数，可选
// 参数3：动画执行完回调函数
// 简单自定义动画
$(function(){
	$("#panel").click(function(){
		$(this).animate({left:"500px"},3000);
	});
});
// 累加、累减动画
$(function(){
	$("#panel").click(function(){
		$(this).animate({left:"+=500px"},3000);
	});
});
// 多重动画
// 同事执行
$("#myImage").click(function(){
	$(this).animate({left:"+=500px",height:"200px"},3000);
})
// 顺序执行
$("#myImage").click(function(){
	$(this).animate({left:"+=500px"},3000)
	.animate({height:"200px"},3000);
})
// 回调函数 可以在动画执行完毕执行回调函数

// 停止动画 stop(clearQueue,gotoEnd),为可选参数（boolean值）
// 参数1：是否清空未执行完的动画队列
// 参数2：是否将正在执行的动画跳转到末状态

// 判断元素是否处于动画状态

if(!$(element).is(":animated")){

}

// 延迟动画 delay()
// toggle() 切换元素可见状态
$("#panel h5.head").click(function(){
	$(this).next().toggle();
});
// slideToggle()通过高度变化来切换匹配你元素的可见性；
$("#panel h2.head").click(function(){
	$(this).next().slideToggle();
})
// fadeTo() 把元素的不透明度也已渐进的方式调整到指定值
$("#panel h5.head").click(function(){
	$(this).next().fadeTo(600,0.2);
});
// fadeToggle() 通过不透明度变化来切换元素的可见性
$("#panel h2.head").click(function(){
	$(this).next().fadeToggle();
});
