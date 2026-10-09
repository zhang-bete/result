const introduction=document.getElementById("introduction");
const count=document.getElementById("count");
const submission=document.getElementById("submission");
const name=document.getElementById("name");
const nameError=document.getElementById("nameError");
const direction=document.getElementById("direction");
const directionError=document.getElementById("directionError");
const introductionError=document.getElementById("introductionError");
const agreement=document.getElementById("agreement");
const agreementError=document.getElementById("agreementError");
const reset=document.getElementById("reset");
introduction.addEventListener("input",function()
{const text=introduction.value;
count.textContent=text.length;
if(introduction.value.trim()!==""){
    introductionError.textContent="";
}});
submission.addEventListener("click",function(){
if(name.value.trim()==="")
{nameError.textContent="请输入姓名";}
else{nameError.textContent="";}
if(direction.value==="")
{directionError.textContent="请选择报名方向";}
else{directionError.textContent="";}
if(introduction.value.trim()==="")
{introductionError.textContent="请输入自我介绍";}
else{introductionError.textContent="";}
if(agreement.checked===false){
    agreementError.textContent="请先同意报名须知";
}else{agreementError.textContent="";}
if (name.value.trim()!==""&&
direction.value!==""&&
introduction.value.trim()!==""&&
agreement.checked)
{alert("报名成功!")};
});
direction.addEventListener("change",function(){
if(direction.value!==""){directionError.textContent="";}
});
name.addEventListener("input",function(){if(name.value.trim()!=="")
{nameError.textContent="";}});
reset.addEventListener("click",function(){
    name.value="";
    direction.value="";
    count.textContent="0";
    introduction.value="";
    agreement.checked=false;
    nameError.textContent="";
    directionError.textContent="";
    introductionError.textContent="";
    agreementError.textContent="";
});