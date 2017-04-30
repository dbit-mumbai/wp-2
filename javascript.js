 function validateForm()
 {
	var x = document.forms["form"]["name"].value;
   	if (x=="") 
   	{
       	 alert("Name must be filled out");
         return false;
   	 }

   	 if(document.getElementById("exam").value=="no"){
      	  alert("Please select a semester");
      	  return false;
  	 }

  	   	 if(document.getElementById("year").value=="no"){
     	   alert("Please select a year and month");
      	   return false;
   	 }


	var val = seatno.value
	if (/^\d{7}$/.test(val)) {
	}
	else {
    	  alert("Invalid seat number")
    	  return false;
	}



	var val = register.value
	if (/^\d{11}$/.test(val)) {
	}
	else {
    	  alert("Invalid register number")
    	  return false;
	}


 }