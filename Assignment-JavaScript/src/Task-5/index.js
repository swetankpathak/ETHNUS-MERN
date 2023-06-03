function reverse(x){
    var num = Number(x);
    console.log(num);
    let revnum = 0;
    while(num>0){
        let n = num%10;
        revnum = revnum*10 + n;
        num = num/10|0;
        console.log(num);
    }

    document.getElementById("renum").innerHTML=revnum;
}