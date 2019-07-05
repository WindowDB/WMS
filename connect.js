requestMap = {};
function changeType(a)
{
	if(1 == a.value)
		doc("say").placeholder="请在此留下您宝贵的意见，有您的支持，我们会做的更好。";
	if(2 == a.value)
		doc("say").placeholder="请务必留下您的联系方式，我们在合适的时间主动联系到您，真诚希望我们合作愉快！";
	if(3 == a.value)
		doc("say").placeholder="请留下站点地址以及站点名称，以及微信或者QQ，我们会尽快联系技术人员受理。";
	if(4 == a.value)
		doc("say").placeholder="请务必留下您的联系方式，我们在合适的时间主动联系到您，真诚希望我们合作愉快！";
	if(5 == a.value)
		doc("say").placeholder="请务必留下您的联系方式，我们会接受您的中肯之言。";
}
function checkForm(f)
{
	var token = "A5D2F4684A7C743CFE583970F2BCD6FB";
	doc("token").value = token; 
	if("" == doc("token").value)
	{
		alert("抱歉，该网页没有加载完，请尝试重新加载页面。")
		return false;
	}
	if("" == doc("truename").value)
	{
		alert("请问如何称呼？");
		doc("truename").focus();
		return false;
	}
	if("" == doc("phone").value)
	{
		alert("留给电话呗！");
		doc("phone").focus();
		return false;
	}
	if("" == doc("say").value)
	{
		alert("说点啥呗！");
		doc("say").focus();
		return false;
	}
	submit(f);
	return false;
}
function doc(id)
{
	return document.getElementById(id);
}
function submit(f)
{
	f.action="http://wms.windowdb.com:70/getResource/4294967285/html";
	$.ajax({ 
		type		: f.method, 
		async		: false, 
		url		: f.action, 
		data		: $(f).serializeArray() ,
		dataType	:"json",
		success:function(msg){ 
			if(msg.success)
			{
				alert(msg.msg);
				window.location.href="./index.html"
			}	
		} 
	}); 

} 
