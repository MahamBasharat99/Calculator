function getNumber(num){
    //console.log(num);
    var result= document.getElementById("result");
    
    result.value+=num;

}


function clearResult(){
    var result=document.getElementById("result");
    result.value="";
}
 
function del(){
    var result=document.getElementById("result");
    result.value= result.value.slice(0, -1);
}

function getResult(){
    try{
    var result=document.getElementById("result");
    // console.log(result.value);
    result.value=eval(result.value);
}
catch(err){
    result.value="Math Error";
}}


function doMath(){
    var result=document.getElementById("result");
 result.value=Math.sqrt(result.value);
}

function cubeRoot(){
    var result=document.getElementById("result");
 result.value=Math.cbrt(result.value);
}
function logFunc(){
    var result=document.getElementById("result");
 result.value= Math.log(result.value) ;
}

function sinFunc(){
    var result=document.getElementById("result");
    result.value=Math.sin(result.value);
}
function tanFunc() {
    var result=document.getElementById("result");
    result.value=Math.tan(result.value);
}
function cosFunc() {
    var result=document.getElementById("result");
    result.value=Math.cos(result.value);
}
function Func() {
    var result=document.getElementById("result");
    result.value=Math.E();
}