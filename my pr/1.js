var a,b,result;
a=document.getElementById('a-val').value;
a=parseInt(a);
b=document.getElementById('b-val').value;
b=parseInt(b);
c=document.getElementById('c-val').value;
c=parseInt(c);


function sum (){
    var a,b,result;
    a=document.getElementById('a-val').value;
    a=parseInt(a);
    b=document.getElementById('b-val').value;
    b=parseInt(b);
    c=document.getElementById('c-val').value;
    c=parseInt(c);


    result=a+b;
    document.getElementById('out').innerHTML=result;
}

function multiplicator() {
    var a,b,result;
    a=document.getElementById('a-val').value;
    a=parseInt(a);
    b=document.getElementById('b-val').value;
    b=parseInt(b);
    c=document.getElementById('c-val').value;
    c=parseInt(c);


    result=a*b;
    document.getElementById('out').innerHTML=result;
}
function squa() {
    var a,b,result;
    a=document.getElementById('a-val').value;
    a=parseInt(a);
    b=document.getElementById('b-val').value;
    b=parseInt(b);
    c=document.getElementById('c-val').value;
    c=parseInt(c);


    result=((b**2-4*a*c)**0.5-b)/2/a;
    document.getElementById('out').innerHTML=result;
    result1=-((b**2-4*a*c)**0.5-b)/2/a;
    document.getElementById('out-s').innerHTML=result;
}


