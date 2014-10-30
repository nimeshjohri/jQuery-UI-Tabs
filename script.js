  $(document).ready(function(){
  $(function() {
    $( "#tabs" ).tabs();
  });

  function ab() {
 var r = $("<tr><td><input type='checkbox' class='dynamic'></td><td>"+$('#fname').val()+"</td><td>"+$('#lname').val()+"</td><td>"+$('#add').val()+"</td><td>"+$('#pno').val()+"</td></tr>")
$(".tab").append(r);	
};	

$('#submit').click(function (e){
ab();
e.preventDefault();
 $(".hi").val("");
  });
  
$(".main").click(function(){
	if($(".main").is(":checked"))
{
$(".dynamic").prop("checked",true);
}
   else
{
$(".dynamic").prop("checked",false);
}
});

$(".deletedata").click(function()
{
	if($(".dynamic").is(":checked"))
{
$(".main").prop("checked",false);
var arr=[];
arr=$(".tab tr .dynamic:checked").parent().parent();
$(".table1").append(arr);
$(".tab tr .dynamic:checked").parent().parent().hide();
$(".table1 tr .dynamic:checked").parent().html('');
}
});
});