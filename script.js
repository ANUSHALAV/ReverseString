
let reverse=()=>{
    let str=document.getElementById('mainString').value;
    let newstr="";
    for(let i=(str.length-1);i>=0;i--){
        newstr=newstr+str[i];
    }
    document.getElementById('reverseString').value=newstr;
}