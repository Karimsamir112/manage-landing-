//burger 


function showburger() {
	
	document.querySelector(".inside-burger").style.display="block";
	
}

function hideInsideBurger() {
	document.querySelector(".inside-burger2").style.display="none";
}

function closeburger() {
	document.querySelector(".inside-burger").style.display="none";
	document.querySelector(".inside-burger2").style.display="block";
	setTimeout(hideInsideBurger , 200);
}



//people 

function showperson1() {
	
	document.querySelector(".person1").style.display="block";
	
	document.querySelector(".person2").style.display="none";
	document.querySelector(".person3").style.display="none";
	document.querySelector(".person4").style.display="none";  
/*	document.querySelector(".person1").style.WebkitAnimationPlayState= "running";
	//document.querySelector(".person2").style.position= "absolute";
	document.querySelector(".person2").style.marginLeft= "50%";
	document.querySelector(".person1").style.marginLeft= "50%"; */
	
	
	document.querySelector(".button1").style.backgroundColor="hsl(12, 88%, 59%)";
	document.querySelector(".button2").style.backgroundColor="white";
	document.querySelector(".button3").style.backgroundColor="white";
	document.querySelector(".button4").style.backgroundColor="white";
}


function showperson2() {
	
	document.querySelector(".person1").style.display="none";
	document.querySelector(".person2").style.display="block";
	document.querySelector(".person3").style.display="none";
	document.querySelector(".person4").style.display="none"; 
	
	document.querySelector(".button1").style.backgroundColor="white";
	document.querySelector(".button2").style.backgroundColor="hsl(12, 88%, 59%)";
	document.querySelector(".button3").style.backgroundColor="white";
	document.querySelector(".button4").style.backgroundColor="white";
}



function showperson3() {
	
	
	 document.querySelector(".person1").style.display="none";
	document.querySelector(".person2").style.display="none";
	document.querySelector(".person3").style.display="block";
	document.querySelector(".person4").style.display="none"; 
	
	document.querySelector(".button1").style.backgroundColor="white";
	document.querySelector(".button2").style.backgroundColor="white";
	document.querySelector(".button3").style.backgroundColor="hsl(12, 88%, 59%)";
	document.querySelector(".button4").style.backgroundColor="white";
}


function showperson4() {
	
	
	 document.querySelector(".person1").style.display="none";
	document.querySelector(".person2").style.display="none";
	document.querySelector(".person3").style.display="none";
	document.querySelector(".person4").style.display="block"; 
	
	document.querySelector(".button1").style.backgroundColor="white";
	document.querySelector(".button2").style.backgroundColor="white";
	document.querySelector(".button3").style.backgroundColor="white";
	document.querySelector(".button4").style.backgroundColor="hsl(12, 88%, 59%)";
}








function allpeople() {
	/*if(document.querySelector(".button1").style.display==="none"){
		
		document.querySelector(".person1").style.display="block";
	document.querySelector(".person2").style.display="block";
	document.querySelector(".person3").style.display="block";
	document.querySelector(".person4").style.display="block";
	} */
	//document.body.style.backgroundColor="red";
	
	if(document.body.style.backgroundColor=="white"){
		document.body.style.backgroundColor="red";
			document.querySelector(".person1").style.display="block";
	document.querySelector(".person2").style.display="block";
	document.querySelector(".person3").style.display="block";
	document.querySelector(".person4").style.display="block";
	} 
	
	
}


setInterval(allpeople , 0);















































 



function checkemail() {
	
		
	var text = window.inp.value;
        
       
        var batt;
        
        batt=/^\w+\s?\w{5,20}[@]{1}[gy][ma][ah][io][lo]{1}[.][c][o][m]{1}$/;
        var s = batt.test(text);
	
	
	
	if(s){
		document.querySelector(".check").innerHTML="Valid email";
		document.querySelector(".check").style.color="green";
		document.getElementById("inp").style.border="2px solid green";
	}
	
	else if(text ==''){
		
		document.querySelector(".check").innerHTML="Please enter your email address";
		document.querySelector(".check").style.color="hsl(12, 88%, 59%)";
		document.getElementById("inp").style.border="2px solid hsl(12, 88%, 59%)";
		
	} 
	
	else {
		document.querySelector(".check").innerHTML="Invalid email";
	    document.querySelector(".check").style.color="hsl(12, 88%, 59%)";
		document.getElementById("inp").style.border="2px solid hsl(12, 88%, 59%)";
	}
	
	

	
	
}