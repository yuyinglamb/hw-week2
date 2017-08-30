function max(a,b){
//console.log(a>b);
    if(a>b){
        return a;
    }
    else{
        return b;        
    }
}

function square(a,b){
    return Math.pow(a,2)+Math.pow(b,2);
}

function leapyear(y){
    //console.log(y%4===0);
    //console.log(y%100!=0);
    //console.log(y%4===0);
    //console.log(y%100!=0 || y%4===0);
    var LY= y%100!=0 || y%4===0;
    //LY takes result from y%100!=0 || y%4===0       
    if(y%4===0 && LY){
       return "yes"; 
    }
    else{
        retrun "no";

    }
}