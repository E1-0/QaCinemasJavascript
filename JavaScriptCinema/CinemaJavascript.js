var wednesdayButton = document.getElementById("wed");


function calculate() {	
	if (wednesdayButton.checked) {
	var standardPrice=6;  
	var studentPrice=4;
	var oapPrice=4;
	var childPrice=2;
}

else {
	//prices of tickets
	var standardPrice=8;
	var studentPrice=6;
	var oapPrice=6;
	var childPrice=4;
	}
	

	var studentAmount	= prompt("How many student Tickets?: ");
	var standardAmount 	= prompt("How many standard Tickets?: ");
	var OAPmount 		= prompt("How many OAP Tickets?: ");
	var childAmount 	= prompt("How many child Tickets?: ");

	var total_amount = (studentAmount*studentPrice) + (standardAmount*standardPrice) + (OAPmount*oapPrice) + (childAmount*childPrice);

if (isNaN(total_amount)){
	
var myWindow = window.open("", "MsgWindow", "width=400, height=70");
myWindow.document.write("<p id=popUptext >INPUT ERROR! <br /> Refresh the page and enter only numbers! </p>");
	}
	
	else {
// 		document.write("Total amount due: £" +total_amount);
document.getElementById("demo").innerHTML = "Total amount due: £" +total_amount;

	}


function purchaseTicket()
{
			document.write("Proceed to payment via PayPal");
	
}
}