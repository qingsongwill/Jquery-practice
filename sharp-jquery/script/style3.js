$(function () {
	// 1、查找元素节点
	// var $li = $("ul li:eq(1)");
	// var li_txt = $li.text();
	// alert(li_txt);

	// 2、查找属性节点
	// var $para = $("p");
	// var p_txt = $para.attr("title");
	// alert(p_txt);

	// 3、创建节点
	// var $li_1 = $("<li></li>");
	// var $li_2 = $("<li></li>");
	//  $("ul").append($li_1).append($li_2);

	// 4、创建文本节点
	// var $li_1 = $("<li>橙子</li>");
	// var $li_2 = $("<li>柚子</li>");
	// $("ul").append($li_1).append($li_2);

	// // 5创建属性节点
 //     var $li_1 = $("<li title='橙子'>橙子</li>");
 //     var $li_2 = $("<li title='柚子'>柚子</li>");
 //     $("ul").append($li_1).append($li_2);

// 6、插入节点

// 向每个匹配元素内部追加元素：append（）
// 将所有匹配的元素追加到指定的元素中$(a).appendTo(b) a追加到b中
// prepend() 相匹配元素内部前置内容
// prependTo()将匹配的元素前置带指定元素中
// after() 在每个匹配的元素后插入内容
// insertAfter() 将所有匹配元素插入到指定元素后
// before() 在指定元素前插入内容
// insertBefore() 将所有匹配元素插入到指定元素前

// 7、删除节点
// remove() 删除所有匹配元素，当某个节点用remove删除后，该节点所包含的后代节点同时被清除。方法返回值
// 是指向被删除节点的引用，可以在以后继续使用。
// detach() 区别remove的是不会吧匹配的元素从jquery中删除，绑定的事件、附加数据都会留下来
// empty() 清空节点

// 8、复制节点
// clone()

// 9、替换节点
// $(a).replaceWith(b);

// 10、包裹节点
// wrap()
// wrapAll() 将所有匹配节点用一个节点包裹，背包裹元素有其他元素会被放在包裹元素之后
// wrapInner() 将匹配元素子内容（包括文本节点）用其他结构化标记起来

// 11、属性操作
// 设置属性
// attr("title","123")
// 删除属性
// removeAttr("title")

// 12、样式操作
// 获取样式和设置样式
// var p_class = $("p").attr("class");
// $("p").attr("class","high");

// 追加样式
// addClass();

// 移除样式
// removeClass()

// 切换样式
// toggleClass()

// 判断样式
// hasClass()

// 13、设置和获取html、文本和值
// html()
// text()
// val()

// 14、遍历节点

// children() 获取子元素集合
// next() 获取匹配元素后面紧邻的同辈元素
// prev() 获取紧邻元素签名匹配的同辈元素
// sublings() 获取匹配元素前后所有的同辈元素
// closest() 获取最近的匹配元素，从自身向上查找
// parent() 获取集合中每个匹配元素的父级元素
// parents()获取集合中每个匹配元素的祖先元素

// 15、css-dom操作

// .css()可设置多和属性，逗号分隔、
// offset() 可见元素偏移
// position()
// scrollTop() scrollLeft()







































})