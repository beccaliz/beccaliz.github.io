function askQuestions() {

	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');
	var fullName = firstName + ' ' + lastName

	console.log(fullName);

	var age = prompt('How old are you?');
	age = parseInt(age);

	if (age>= 18){
		console.log('User is an adult');
	} else if (age>=13) {
		console.log('User is a teenager');
	} else {
		console.log('User is a child');
	}

	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');

	var fullName = firstName + ' ' + lastName

	if (fullName == 'General Assembly'){
		console.log('GA Rocks!')
	} 
	else if (firstName == 'General' && lastName !== 'Assembly'){
		alert('Greetings, General!')
	} 
	else if (firstName !== 'General'){
		alert('Use the force Luke')
	} 


	var faveColour = prompt('What is your fave colour?').toLowerCase().trim();
	
	if (faveColour === 'red' ||
		faveColour === 'blue' ||
		faveColour === 'pink' ||
		faveColour === 'purple') {

		$('h1').css('color', faveColour);
	}

}



// ASK QUESTIONS ON IMG CLICK
	$(function(){		
		$('img').on('click', askQuestions);
		}); 


// SHOW HIDE
	$(function(){
		
		$('h3').on('click', function() {
		$(this).next().slideToggle(1000);
		}); 


// TIME ZONE GREETING
$(function(){
  	var now = new Date();
  	var hours = now.getHours();
      var msg;
      if(hours<12)
           msg = "Good Morning";
      else if(hours<18)
           msg = "Good Afternoon";
      else
          msg = "Good Evening";
  $('#greeting h2').text(msg);
});
});








