let equal=document.getElementById('equal');
 
 function displayval(val){
    document.getElementById('inp').value = document.getElementById('inp').value + val;
 }
 function removeinput(){
    document.getElementById('inp').value='';
 }
 function calculate(){
    let userinput=document.getElementById('inp').value ;
    let answer=eval(userinput);
    document.getElementById('inp').value =document.getElementById('inp').value +'='+answer;
 }