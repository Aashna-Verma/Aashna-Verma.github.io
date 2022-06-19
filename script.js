function sendMail() {
	//getting values from input fields

	var email = Form.email.value;

	var name = Form.name.value;

	var receiver = 'aashv.800@gmail.com';

	var message = Form.message.value;

    console.log(email);
    console.log(name);
    console.log(receiver);
    console.log(message);

	//Sending email

	Email.send({
		Host: "smtp.gmail.com",

		Username: name,

        Password: "*******",

		To: receiver,

		From: email,

		Subject: "Check Email Sending",

		Body: message,
	}).then(function (m) {
		alert("Email sent successfully");
	});
}
