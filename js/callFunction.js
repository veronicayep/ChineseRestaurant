var goodValue1= true;
var goodValue2= true;
var goodValue3= true;


function sendRes(){
	
	//taken from the form in reservation.html
	var time = document.getElementById("time");
	var date = document.getElementById("datepicker");
	var people = document.getElementById("quantity");
	var phone = document.getElementById("phone");
	var name = document.getElementById("name");
	
	
	 /*These three methods are called initially on change in the form. They are called again here on submit to ensure changes were made. 
	 They work with the three Booleans outside of both functions and act as the gateway to sending the mail with an if statement using them. */
	checkNum();
	checkPhone();
	checkDate();
	if(goodValue1==true && goodValue2==true &&  goodValue3 == true){
	 
		  Email.send({ 
		   Host : "smtp-mail.outlook.com",
			Username: "newdragonboat@outlook.com", 
			Password: "Groupm1234", 
			To: 'newdragonboat@outlook.com', 
			From: "newdragonboat@outlook.com", 
			Subject: "Reservation", 
			Body: time.value + " for " +people.value +" people on the "  +date.value +" contact "  +name.value +" on phone number  "  +phone.value, 
		  }) 
			.then(function (message) { 
			  alert("Sent successfully") 
			}); 
    
	}
		 
}

function  checkNum() {
	var qtyIn; 
	qtyIn = document.getElementById("quantity").value; 
	goodValue1=true;

		if (isNaN(qtyIn) || qtyIn < 1 ) {
			alert("You havent entered a number over zero");
			goodValue1 = false;
		} else if(qtyIn > 35){
			alert("Capacity is 35");
			goodValue1 = false;
		}
}


function  checkPhone() {
	var phoneIn,  len;
	phoneIn = document.getElementById("phone").value; 
	len = phoneIn.length,
	goodValue2=true;

		if (isNaN(phoneIn) ) {
			alert("You havent entered a number");
			goodValue2 = false;
		} else if(phoneIn.length > 10){
			alert("Too long to be a phone number, eg 0862626837, please enter without spaces");
			goodValue2 = false;
		} else if(phoneIn.length <6 ){
			alert("Too short to be a phone number, eg 363636, please enter without spaces");
			goodValue2 = false;
		}
}

function  checkDate() {
	var dateIn; 
	dateIn = document.getElementById("datepicker").value; 
	goodValue3=true;
	
	
	/*moment Moment is a library but couldn’t work out how to reference it from html. So I had to save the file as a JS file on the server. 
	Its used for date validation. I work with datepicker to ensure past dates aren’t allowed and this ensures  dates entered in the form follow the required format  */
	
	if (moment(dateIn, 'DD-MM-YYYY',true).isValid()){         
             
        goodValue3=true;
    }  else {
			
			goodValue3 = false;
			alert("Check the date entered is a date in the format DD-MM-YYYY");
	}
		
}




function  aboutSee() {
	var x = document.getElementById("about");
	  if (x.style.display == "none") {
		x.style.display = "none";
	  } else {
		x.style.display = "block";
	  }

}


function sendMenu(){
	
	
	var mail = document.getElementById("mail");


	Email.send({
    Host : "smtp-mail.outlook.com",
    Username: "newdragonboat@outlook.com", 
	Password: "Groupm1234", 
    To : mail.value,
    From: "newdragonboat@outlook.com", 
	Subject: "Menu", 
	Body: "Here is the menu you asked for ", 
	Attachments : [
	{
		name : "menu.jpg",
			path : "https://student-new-dragon-boat.web.app/images/menu.jpg"  
	}]
	}).then(
	  alert("Menu sent to " +mail.value)
	);
}

 