// jQuery表单、表格操作及更多应用
// 1、单行文本框应用
$(function(){
	$(":input").focus(function(){
		$(this).addClass("focus");
	}).blur(function(){
		$(this).removeClass("focus");
	})
})

// 2、多行文本框应用
// 高度变化
$(function(){
var $comment = $("#comment");
$(".bigger").click(function(){
	if($comment.height()<500){
		$comment.height($comment.height() + 50);
	}
});
$(".smaller").click(function(){
	if($comment.height() >50){
      $comment.height($comment.height()-50);
      // $comment.animate(height:"-=50",400)
	}
});
});
// 3、滚动条高度变化
$(function(){
	vat $comment = $("#comment");
	$(".up").click(function(){
		if(!$comment.is(":animated")){
			$comment.animate({scrollTop:"-=50"},400);
		}
	});
	$(".down").click(function(){
		if(!$comment.is(":animated")){
           $comment.animate({scrollTop:"+=50"},400);
		}
	});
});

// 4、复选框应用
// 全选
$("#checkAll").click(function(){
  $('[name=item]:checkbox').attr('checked',true);
});
// 全不选
$("#checkedNo").click(function(){
	$('[name=items:checkbox').attr('checked',false);
});
// 反选
$("#checkRev").click(function(){
	$('[name=items]:checkbox').each(function(){
		$(this).attr("checked",!$(this).attr("checked"));
		// 简写 this.checked = !this.checked;
	});
});
// 提交
$("#send").click(function(){
	var str = "你选中的是：\r\n";
	$('[name = items]:checkbox:checked').each(function(){
		str += $(this).val()+"\r\n";
	});
	alert(str);
});
// 5、下拉框应用

// 6、表单验证

$("form:input").blur(function(){
	var $parent = $(this).parent();
	$parent.find(".formtips").remove();
	//验证用户
	if($(this).is("#username")){
       if(this.value == "" || this.value.length < 6){
       	var errorMsg = "请输入至少6位的用户名。"；
       	$parent.append("<span class='formtips onError'>'+error Msg+'</span>");
       }else{
       	var okMsg = "输入正确"；
       	$parent.append("<span class= 'formtips onSuccess'>'+ ok Msg+'</span>");
       }
	}
	// 验证邮箱
	if($(this).is("#email")){
 

	}
});

// 表格应用
// 1、表格变色
$(function(){
	$("tr:odd").addClass("odd");
	$("tr:even").addClass("even");
	$("tr:contains('王五')").addClass("selected");
})

// 2、单选框控制表格行高度
$("tbody>tr").click(function(){
	$(this).addClass("selected")
	       .siblings().removeClass("selected")
	       .end()//end() 方法结束当前链条中的最近的筛选操作，并将匹配元素集还原为之前的状态。
	       .find(":radio").attr("checked",true);
});

// 3、复选框控制表格行高度
$("tbody>tr").click(function(){
	if($(this).hasClass("selected")){
      $(this).removeClass("selected")
             .find(":checkbox").attr("checked",false);
	}else {
		$(this).addClass("selected")
		       .find(":checkbox").attr("checkbox",true);
	}
});

// 简写
$("tbody>tr").click(function(){
	var hasSelected = $(this).hasClass("selected");
	$(this)[hasSelected?"removeClass":"addClass"]("selected");
	.find(":checkbox").attr("check",!hasSelected);
});

// 表格展开关闭
$(function(){
	$("tr.parent").click(function(){
		$(this)
		.toggleClass("selected")
		.siblings(".child"+this.id).toggle();
	});
})

// 表格内容筛选
$("tr:contains('王五')").addClass("selected");

$(function(){
	$("#filterName").keyup(function(){
		$("table tbody tr").hide()
		.filter(":contains('"+($(this).var())+"')");
	});
});
