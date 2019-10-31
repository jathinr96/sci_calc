var dotcheck = opcheck=para=0;
var first=second=M="";

function dot(){
    if(dotcheck==""){
        first+='.';
        dotcheck=".";
    }
    return first;
}

function digit(n){
    opcheck=0;
    first+=n;
    if(n=='('){
        para++;
    }
    else if(n==')'){
        para--;
    }
    return first;
}

function operators(n){
    if(opcheck==0){
        opcheck=1;
        first+=n;
    }
    
    dotcheck = "";
    return first;
}

function mp() {
    M = eval(first);
    first = M;
    return first ;
}
function mr() {
    first = M;
    return first ;
}

function equal(){
    if(para==1){
        first+=')';
    }
    else if(para>1){
        return "Math error";
    }
    return eval(first);
}

function dlt(){
    first=first.substring(0,first.length-1);
    return first;
}

function c(){
    document.getElementById('display1').innerHTML="";
    document.getElementById('h1').innerHTML="";
    first = "";
    dotcheck = para= opcheck =0;
    
    return "";
}

function maths(o){
    first = equal();
    if(o=="+"){
        
    }
}
