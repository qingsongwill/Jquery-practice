$(function() {
    /*基本选择器*/
    /*1、改变id为one的元素背景色*/
    // $("#one").css("background","#bbffaa");
    /*2、改变class为mini的所有元素背景色*/
    // $(".mini").css("background","#bbffaa");
    /*3、改变元素为div的所有元素背景色*/
    // $("div").css("background","red");
    /*4、改变所有元素背景色*/
    // $("*").css("background","#bbaaff");
    /*5、改变所有的<span>元素和id为two的元素背景色*/
    // $("span,#two").css("background","#bbaaff");
    // 层次选择器
    // 1、改变body内所有div背景色
    // $("body div").css("background","#bbffaa");
    // 2、改变body内子div元素的背景色
    // $("body > div").css("background","#bbffaa");
    // 3、改变class为one的下一个div同辈元素的背景色 可以使用next代替
    // $(".one + div").css("background","red")
    // $(".one").next("div").css("background","red");
    // 4、改变id为two的元素后面所有div同辈元素的背景色
    // $("#two~div").css("background","red");
    // $("#two").nextAll("div");
    // 过滤选择器
    // 基本过滤选择器
    // 1、改变第一个div元素的背景色
    // $("div:first").css("background","red");
    // 2、改变最后一个div元素的背景色
    // $("div:last").css("background","red");
    // 3、改变class不为one的div元素背景色
    // $("div:not(.one)").css("background","red");
    // 4、改变索引值为偶数div元素的背景色
    // $("div:even").css("background","red");
    // 5、改变索引值为奇数的div元素的背景色
    // $("div:odd").css("background","red");
    // 6、改变div元素等于3的div元素的背景色
    // $("div:eq(3)").css("background","red");
    // 7、改变索引值大于3的div元素的背景色
    // $("div:gt(3)").css("background","red");
    // 8、改变索引值小于3的div元素的背景色
    // $("div:lt(3)").css("background","red");
    // 9、改变所有的标题元素，例如h1 h2 h3.....这些元素的背景色
    // $(":header").css("background","red");
    // 10、改变当前正在执行动画的元素背景色
    // $(":animated").css("background","red");
    // 11、改变当前获取焦点元素的背景色
    // $(":focus").css("background","red");
    // 6内容过滤选择器
    // 1、改变含有文本di的div元素背景色
    // $("div:contains(di)").css("background","red");
    // 2、改变不包含子元素（包括文本元素）的div空元素的子元素
    // $("div:empty").css("background","red");
    // 3、改变含有class为mini元素的div元素的背景色
    // $("div:has('.mini')").css("background","red");
    // 4、改变含有子元素（包含文本元素）的div元素的背景色
    // $("div:parent").css("background","red");
    // 7可见性过滤器
    // 1、改变所有可见div元素背景色
    // $("div:visible").css("background","red");
    // 2、显示隐藏的div元素
    // $("div:hidden").show(3000);
    // 8属性过滤选择器
    // 1、改变含有属性title的div元素的背景色
    // $("div[title]").css("background","red");
    // 2、改变属性title值等于test的div元素的背景色
    // $("div[title=test]").css("background","red");
    // 3、改变属性title值不等于test的div元素背景色
    // $("div[title!=test").css("background","red");
    // 4、改变属性title值以te开始的div元素的背景色
    // $("div[title^=te").css("background","red");
    // 5、改变属性title值以est结束的div元素背景色
    // $("div[title$=est]").css("background","red");
    // 6、改变属性值含有es的div元素的背景色
    // $("div[title*=es]").css("background","red");
    // 7、改变含有属性id，并且属性title值含有es的div元素的背景色
    // $("div[id][title*=es]").css("background","red");
    // 9子元素过滤选择器 （集合元素）
    // 1、选取每个父元素下的第index元素或者奇偶元素（index从1开始）
    //:nth:child(index/even/odd/equation)
    // 2、选取每个父元素的第一个子元素
    // ：first-child
    // 3、选取每个父元素的最后一个子元素
    // :last-child
    // 4、如果某个元素是他父元素的唯一子元素，将会被匹配
    // :only-child
    // 10表单对象属性过滤器
    // 1、选取所有可用元素
    // :enabled
    // 2、选取所有不可用元素
    // ：disabled
    // 3、园区所有选中元素（单选框、复选框）
    // ：checked
    // 4、选中所有被选中的选项元素（下拉框）
    // ：selected

    // 表单选择器

    // 1、选取所有input、textarea、selecte 、button
    // ：input
    // 2、选取所有的单行文本
    // ：text
    // 3、密码框 
     // ：password  
//     4、单选、多选、提交、图像、重置、按钮、上传域、不可见元素  
//  ：radio、：checkbox、：submit、：image、：reset、：button、：file、：hidden
// 5、获取表单元素个数
// $("#form:input").length
// 6、表单内单行文本个数
// $("#form1:text").length;

 
})