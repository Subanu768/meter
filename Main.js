function Calculate_feet(number)
{
    let a=document.getElementById("input_box2");
    let result=(number/30).toFixed(2);
    a.value=result; 
}
function Calculate_meter(number)
{
    let a=document.getElementById("input_box3");
    let result=(number/100).toFixed(2);
    a.value=result;
}
function Calculate()
{
    let a=document.getElementById("input_box1");
    let val=a.value;
    Calculate_meter(val);
    Calculate_feet(val);
}