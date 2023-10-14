function fun()
{ 
  var val=document.getElementById("sname").value;
  var text=document.getElementById("quote").value;
  
  if(val=="" && text=="")
  {
    document.getElementById("error").style.display="block";
    document.getElementById("error1").style.display="block";
    document.getElementById("p1").innerHTML="Fields can not be blank!";
    document.getElementById("p2").innerHTML="Fields can not be blank!";
    document.getElementById("sname").style.border="solid 1px red";        
    document.getElementById("quote").style.border="solid 1px red";        
    document.getElementById("success").style.display="none";
    document.getElementById("success1").style.display="none";
    document.getElementById("p2").style.display="block";
    document.getElementById("p1").style.display="block";
    document.getElementById("p2").style.color="red";
  }
}