/*
	WEB 303 Assignment 1 - jQuery
	{Varinder Kaur}
*/
/*$(document).ready(function()
{
$("input").change(function()
{
 let salary= $("#yearly-salary").val();
 let percent= $("#percent").val();


 let result=((salary*percent)/100).toFixed(2);
 $("#amount").text("$" +result);

});
});*/

$(document).ready(function()
{
$("input").change(function() //changing the required fields(salary/percent)
{
 let mysalary= $("#yearly-salary").val();
 let percent= $("#percent").val();


 let result=((mysalary*percent)/100).toFixed(2); // to round of the numbers to remove extra decimals
 $("#amount").text("$" +result);

});
});

