var dotcheck = opcheck=para=sign=0;
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
    sign++;
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
    sign=0;
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
        first = first * first * first;
    } else if (o == "Sqrt") {
        first = Math.sqrt(first);
    } else if (o == "cubert") {
        first = Math.cbrt(first);
    } else if (o == "negpos") {
        first = first * -1;
    } else if (o == "sine") {
        first = Math.sin(first);
    } else if (o == "cosine") {
        first = Math.cos(first);
    } else if (o == "tangent") {
        first = Math.tan(first);
    } else if (o == "ln") {
        first = Math.log(first);
    } else if (o == "logTen") {
        first = Math.log10(first);
    } else if (o == "rand") {
        first = Math.round(first);
    }else if (o == "res") {
        first = 1 / first;
    } else if (o == "fact") {
        n = first;
        first = 1;
        while (n > 1){
            first *= n;
            n -= 1;
        }
    }
    dotcheck = (Math.round(first) == first) ? "": ".";
    return first;
}

function PI(){
    if(dotcheck==''){
        first+=pi;
        dotcheck='.';
    }
    return first;
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
function power(n){
   first =equal();
   return 'pow('+first+',';
}
function roots(n){
    first =equal();
   return 'root('+first+',';
}
function pow(a,b) {
     return Math.pow(a, b);
}
function root(a,b) {
     return Math.pow(a, 1 / b).toPrecision(12);
}
