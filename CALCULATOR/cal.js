let str = "";
let button = document.querySelectorAll('.btn');
Array.from(button).forEach((but) => {
  but.addEventListener('click', (e) => {
    console.log(e.target.innerHTML);
    if(e.target.innerHTML==="ans"){
      if(str[0]==='√'){
        str=Math.sqrt(str.substring(1,str.length))
      }
      else{
      str=eval(str);
      }

      document.querySelector('input').value = "="+str;
    }
    else if(e.target.innerHTML==="del"){
       str=str.toString().slice(0,-1);
       document.querySelector('input').value =str;
    }
    else if(e.target.innerHTML==="ENTER"){
       if(str[0]==='√'){
        str=Math.sqrt(str.substring(1,str.length))
      }
      else{
      str=eval(str);
      }
      document.querySelector('input').value = "="+ str;
     }
    else if(e.target.innerHTML==="clear"){
        str="";
        document.querySelector('input').value = str;
    }
    else{
    console.log(e.target);
    str = str + e.target.innerHTML;
    console.log(str);
    document.querySelector('input').value = str;
    }
  });
});
