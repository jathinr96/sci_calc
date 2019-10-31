var dotcheck = opcheck=para=0;
var first=second=M="";
var pi=Math.PI;

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
    if (o == "sqr") {
        first = first * first;
    } else if (o == "cube") {
        result = firstI * firstI * firstI;
    } else if (o == "Sqrt") {
        result = Math.sqrt(firstI);
    } else if (o == "cubert") {
        result = Math.cbrt(firstI);
    } else if (o == "negpos") {
        result = firstI * -1;
    } else if (o == "sine") {
        result = Math.sin(firstI);
    } else if (o == "cosine") {
        result = Math.cos(firstI);
    } else if (o == "tangent") {
        result = Math.tan(firstI);
    } else if (o == "ln") {
        result = Math.log(firstI);
    } else if (o == "logTen") {
        result = Math.log10(firstI);
    } else if (o == "rand") {
        result = Math.round(firstI);
    }else if (o == "res") {
        result = 1 / firstI;
    } else if (o == "fact") {
        n = firstI;
        firstI = 1;
        while (n > 1){
            firstI *= n;
            n -= 1;
        }
        result = firstI;
    }
    return first;
}

function PI(){
    if(dotcheck==''){
        first+=pi;
        dotcheck='.';
    }
}

function base(n){
    var first2=0;
    first2=eval(first);
    if(n=='bin'){
        first2 = first2.toString(2);
    }
    else if(n=='oct'){
        first2 = first2.toString(8);
    }else if(n=='hex'){
        first2 = first2.toString(16);
    }
    return first2;
}
