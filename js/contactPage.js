function sendEmail() {
		
	var mail = document.getElementById("mail").value;
	var writeHere = document.getElementById("writeHere").value;
		
    Email.send({
        Host : "smtp-mail.outlook.com",
        Username: "newdragonboat@outlook.com", 
        Password: "Groupm1234", 
        To : "newdragonboat@outlook.com",
        From: "newdragonboat@outlook.com", 
        Subject: mail, 
        Body: writeHere, 
        }).then(
          message => alert(message)
        );
}