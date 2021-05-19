function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
} 
$( document ).ready(function() {
  
//$('#quiz_modal').modal('show');
//refresh_quiz();
});
function checkempty(str){
	if (str === undefined || str==="") {
		return false;
	}
	return true;
}
var quizdata = new Array();
$(document).on('submit','.quiz_form',function(e){
	e.preventDefault();
	var formprop = $(this);
	//var formdata = new FormData(formprop[0]);
	var formdata = new FormData();
	
	console.log(formprop.attr('quizstep'));
	
	var result = [];
	$.each(formprop.serializeArray(), function() {
		result[this.name] = this.value;
	});
	
	if(formprop.attr('quizstep')=="1"){
		if (checkempty(result['name']) && checkempty(result['email'])) { 
			localStorage.setItem('username',result['name']);
			localStorage.setItem('useremail',result['email']);
			localStorage.setItem('quizstep',1);
			refresh_quiz();
		}else{
			$.growl.error({location: 'tr',title:'Error', message: "Fill required fields.",size:'large',duration:6000});
		}
	}else if(formprop.attr('quizstep')=="2"){
		console.log(result);
		var score = 0;
		if(result['que1']==='2'){
			score = score+1;
		} if(result['que2']==='1'){
			score = score+1;
		} if(result['que3']==='3'){
			score = score+1;
		}
		localStorage.setItem('score',score);
				
		localStorage.setItem('quizstep',2);
		refresh_quiz();
	}
});
function refresh_quiz(){
	var quizstep = localStorage.getItem('quizstep');
	var modalhtml = "";
	if(quizstep==='1'){
		 modalhtml = '<form id="quiz_form" class="quiz_form" quizstep="2"><div class="question_section"><h3>1. Name of the president of Canada?</h3><input id="r1_1" type="radio" value="1" name="que1" checked /><label for="r1_1">Jagmeet Singh</label><input id="r1_2" type="radio" value="2" name="que1"/><label for="r1_2">Justin Trudeao</label><input id="r1_3" type="radio" value="3" name="que1"/><label for="r1_3">Martin Trudeao</label></div><div class="question_section"><h3>2. Which letters are vowels in English?</h3><input id="r2_1" type="radio" value="1" name="que2" checked /><label for="r2_1">A,E,I,O,U</label><input id="r2_2" type="radio" value="2" name="que2"/><label for="r2_2">M,L,R,I,O</label><input id="r2_3" type="radio" value="3" name="que2"/><label for="r2_3">E,O,I,K,U</label></div><div class="question_section"><h3>3. Who invented the Light Bulb?</h3><input id="r3_1" type="radio" value="1" name="que3" checked /><label for="r2_1">John vik</label><input id="r3_2" type="radio" value="2" name="que3"/><label for="r3_2">Alison</label><input id="r3_3" type="radio" value="3" name="que3"/><label for="r3_3">Thomas Alva Edison</label></div></div>';
		$('.quiznextbtn').text('Submit');
	}else if(quizstep==='0'){
		window.localStorage.clear();
		location.reload(); 
	}else if(quizstep==='2'){
		var uname = localStorage.getItem('username');
		var score = localStorage.getItem('score');
		modalhtml = '<div class="success_area">Hello <b class="myname">'+uname+'</b>,</br> you got <b class="myscore">'+score+'</b> score out of 3.</div>';
		$('#quiz_modal .modal-footer').html('<button type="button" class="button_filled btn reset_quiz">Reset</button>');
	}
	if(quizstep){
	$('.content_section').html(modalhtml);
	}
}
$(document).on('click','.reset_quiz',function(e){
	e.preventDefault();
	localStorage.setItem('quizstep',0);
	refresh_quiz();
})
$(document).on('click','.start_quiz',function(e){
	e.preventDefault();
	refresh_quiz();
	$('#quiz_modal').modal('show');
	
})

/*  game code  */

function tiktak_func() {
	var btn1, btn1, btn3, btn4, btn5, btn6, btn7, btn8, btn9;
	btn1 = document.getElementById("btn1").value;
	btn2 = document.getElementById("btn2").value;
	btn3 = document.getElementById("btn3").value;
	btn4 = document.getElementById("btn4").value;
	btn5 = document.getElementById("btn5").value;
	btn6 = document.getElementById("btn6").value;
	btn7 = document.getElementById("btn7").value;
	btn8 = document.getElementById("btn8").value;
	btn9 = document.getElementById("btn9").value;

	if ((btn1 == 'x' || btn1 == 'X') && (btn2 == 'x' ||
		btn2 == 'X') && (btn3 == 'x' || btn3 == 'X')) {
		document.getElementById('turn_msg')
			.innerHTML = "User X won";
		document.getElementById("btn4").disabled = true;
		document.getElementById("btn5").disabled = true;
		document.getElementById("btn6").disabled = true;
		document.getElementById("btn7").disabled = true;
		document.getElementById("btn8").disabled = true;
		document.getElementById("btn9").disabled = true;
		
	}
	else if ((btn1 == 'x' || btn1 == 'X') && (btn4 == 'x' ||
		btn4 == 'X') && (btn7 == 'x' || btn7 == 'X')) {
		document.getElementById('turn_msg')
			.innerHTML = "User X won";
		document.getElementById("btn2").disabled = true;
		document.getElementById("btn3").disabled = true;
		document.getElementById("btn5").disabled = true;
		document.getElementById("btn6").disabled = true;
		document.getElementById("btn8").disabled = true;
		document.getElementById("btn9").disabled = true;
	}
	else if ((btn7 == 'x' || btn7 == 'X') && (btn8 == 'x' ||
		btn8 == 'X') && (btn9 == 'x' || btn9 == 'X')) {
		document.getElementById('turn_msg')
			.innerHTML = "User X won";
		document.getElementById("btn1").disabled = true;
		document.getElementById("btn2").disabled = true;
		document.getElementById("btn3").disabled = true;
		document.getElementById("btn4").disabled = true;
		document.getElementById("btn5").disabled = true;
		document.getElementById("btn6").disabled = true;
	}
	else if ((btn3 == 'x' || btn3 == 'X') && (btn6 == 'x' ||
		btn6 == 'X') && (btn9 == 'x' || btn9 == 'X')) {
		document.getElementById('turn_msg')
			.innerHTML = "User X won";
		document.getElementById("btn1").disabled = true;
		document.getElementById("btn2").disabled = true;
		document.getElementById("btn4").disabled = true;
		document.getElementById("btn5").disabled = true;
		document.getElementById("btn7").disabled = true;
		document.getElementById("btn8").disabled = true;
	}
	else if ((btn1 == 'x' || btn1 == 'X') && (btn5 == 'x' ||
		btn5 == 'X') && (btn9 == 'x' || btn9 == 'X')) {
		document.getElementById('turn_msg')
			.innerHTML = "User X won";
		document.getElementById("btn2").disabled = true;
		document.getElementById("btn3").disabled = true;
		document.getElementById("btn4").disabled = true;
		document.getElementById("btn6").disabled = true;
		document.getElementById("btn7").disabled = true;
		document.getElementById("btn8").disabled = true;
	}
	else if ((btn3 == 'x' || btn3 == 'X') && (btn5 == 'x' ||
		btn5 == 'X') && (btn7 == 'x' || btn7 == 'X')) {
		document.getElementById('turn_msg')
			.innerHTML = "User X won";
		document.getElementById("btn1").disabled = true;
		document.getElementById("btn2").disabled = true;
		document.getElementById("btn4").disabled = true;
		document.getElementById("btn6").disabled = true;
		document.getElementById("btn8").disabled = true;
		document.getElementById("btn9").disabled = true;
	}
	else if ((btn2 == 'x' || btn2 == 'X') && (btn5 == 'x' ||
		btn5 == 'X') && (btn8 == 'x' || btn8 == 'X')) {
		document.getElementById('turn_msg')
			.innerHTML = "User X won";
		document.getElementById("btn1").disabled = true;
		document.getElementById("btn3").disabled = true;
		document.getElementById("btn4").disabled = true;
		document.getElementById("btn6").disabled = true;
		document.getElementById("btn7").disabled = true;
		document.getElementById("btn9").disabled = true;
	}
	else if ((btn4 == 'x' || btn4 == 'X') && (btn5 == 'x' ||
		btn5 == 'X') && (btn6 == 'x' || btn6 == 'X')) {
		document.getElementById('turn_msg')
			.innerHTML = "User X won";
		document.getElementById("btn1").disabled = true;
		document.getElementById("btn2").disabled = true;
		document.getElementById("btn3").disabled = true;
		document.getElementById("btn7").disabled = true;
		document.getElementById("btn8").disabled = true;
		document.getElementById("btn9").disabled = true;
	}

	else if ((btn1 == '0' || btn1 == '0') && (btn2 == '0' ||
		btn2 == '0') && (btn3 == '0' || btn3 == '0')) {
		document.getElementById('turn_msg')
			.innerHTML = "User 0 won";
		document.getElementById("btn4").disabled = true;
		document.getElementById("btn5").disabled = true;
		document.getElementById("btn6").disabled = true;
		document.getElementById("btn7").disabled = true;
		document.getElementById("btn8").disabled = true;
		document.getElementById("btn9").disabled = true;
	}
	else if ((btn1 == '0' || btn1 == '0') && (btn4 == '0' ||
		btn4 == '0') && (btn7 == '0' || btn7 == '0')) {
		document.getElementById('turn_msg')
			.innerHTML = "User 0 won";
		document.getElementById("btn2").disabled = true;
		document.getElementById("btn3").disabled = true;
		document.getElementById("btn5").disabled = true;
		document.getElementById("btn6").disabled = true;
		document.getElementById("btn8").disabled = true;
		document.getElementById("btn9").disabled = true;
	}
	else if ((btn7 == '0' || btn7 == '0') && (btn8 == '0' ||
		btn8 == '0') && (btn9 == '0' || btn9 == '0')) {
		document.getElementById('turn_msg')
			.innerHTML = "User 0 won";
		document.getElementById("btn1").disabled = true;
		document.getElementById("btn2").disabled = true;
		document.getElementById("btn3").disabled = true;
		document.getElementById("btn4").disabled = true;
		document.getElementById("btn5").disabled = true;
		document.getElementById("btn6").disabled = true;
	}
	else if ((btn3 == '0' || btn3 == '0') && (btn6 == '0' ||
		btn6 == '0') && (btn9 == '0' || btn9 == '0')) {
		document.getElementById('turn_msg')
			.innerHTML = "User 0 won";
		document.getElementById("btn1").disabled = true;
		document.getElementById("btn2").disabled = true;
		document.getElementById("btn4").disabled = true;
		document.getElementById("btn5").disabled = true;
		document.getElementById("btn7").disabled = true;
		document.getElementById("btn8").disabled = true;
	}
	else if ((btn1 == '0' || btn1 == '0') && (btn5 == '0' ||
		btn5 == '0') && (btn9 == '0' || btn9 == '0')) {
		document.getElementById('turn_msg')
			.innerHTML = "User 0 won";
		document.getElementById("btn2").disabled = true;
		document.getElementById("btn3").disabled = true;
		document.getElementById("btn4").disabled = true;
		document.getElementById("btn6").disabled = true;
		document.getElementById("btn7").disabled = true;
		document.getElementById("btn8").disabled = true;
	}
	else if ((btn3 == '0' || btn3 == '0') && (btn5 == '0' ||
		btn5 == '0') && (btn7 == '0' || btn7 == '0')) {
		document.getElementById('turn_msg')
			.innerHTML = "User 0 won";
		document.getElementById("btn1").disabled = true;
		document.getElementById("btn2").disabled = true;
		document.getElementById("btn4").disabled = true;
		document.getElementById("btn6").disabled = true;
		document.getElementById("btn8").disabled = true;
		document.getElementById("btn9").disabled = true;
	}
	else if ((btn2 == '0' || btn2 == '0') && (btn5 == '0' ||
		btn5 == '0') && (btn8 == '0' || btn8 == '0')) {
		document.getElementById('turn_msg')
			.innerHTML = "User 0 won";
		document.getElementById("btn1").disabled = true;
		document.getElementById("btn3").disabled = true;
		document.getElementById("btn4").disabled = true;
		document.getElementById("btn6").disabled = true;
		document.getElementById("btn7").disabled = true;
		document.getElementById("btn9").disabled = true;
	}
	else if ((btn4 == '0' || btn4 == '0') && (btn5 == '0' ||
		btn5 == '0') && (btn6 == '0' || btn6 == '0')) {
		document.getElementById('turn_msg')
			.innerHTML = "User 0 won";
		document.getElementById("btn1").disabled = true;
		document.getElementById("btn2").disabled = true;
		document.getElementById("btn3").disabled = true;
		document.getElementById("btn7").disabled = true;
		document.getElementById("btn8").disabled = true;
		document.getElementById("btn9").disabled = true;
	}

	else if ((btn1 == 'X' || btn1 == '0') && (btn2 == 'X'
		|| btn2 == '0') && (btn3 == 'X' || btn3 == '0') &&
		(btn4 == 'X' || btn4 == '0') && (btn5 == 'X' ||
		btn5 == '0') && (btn6 == 'X' || btn6 == '0') &&
		(btn7 == 'X' || btn7 == '0') && (btn8 == 'X' ||
		btn8 == '0') && (btn9 == 'X' || btn9 == '0')) {
			document.getElementById('turn_msg')
				.innerHTML = "Match Tie";
	}
	else {

		if (flag == 1) {
			document.getElementById('turn_msg')
				.innerHTML = "User X Turn";
		}
		else {
			document.getElementById('turn_msg')
				.innerHTML = "User 0 Turn";
		}
	}
}

function tiktak_func_2() {
	location.reload();
	document.getElementById('btn1').value = '';
	document.getElementById("btn2").value = '';
	document.getElementById("btn3").value = '';
	document.getElementById("btn4").value = '';
	document.getElementById("btn5").value = '';
	document.getElementById("btn6").value = '';
	document.getElementById("btn7").value = '';
	document.getElementById("btn8").value = '';
	document.getElementById("btn9").value = '';

}

flag = 1;
function tiktak_func_3() {
	if (flag == 1) {
		document.getElementById("btn1").value = "X";
		document.getElementById("btn1").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("btn1").value = "0";
		document.getElementById("btn1").disabled = true;
		flag = 1;
	}
}

function tiktak_func_4() {
	if (flag == 1) {
		document.getElementById("btn2").value = "X";
		document.getElementById("btn2").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("btn2").value = "0";
		document.getElementById("btn2").disabled = true;
		flag = 1;
	}
}

function tiktak_func_5() {
	if (flag == 1) {
		document.getElementById("btn3").value = "X";
		document.getElementById("btn3").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("btn3").value = "0";
		document.getElementById("btn3").disabled = true;
		flag = 1;
	}
}

function tiktak_func_6() {
	if (flag == 1) {
		document.getElementById("btn4").value = "X";
		document.getElementById("btn4").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("btn4").value = "0";
		document.getElementById("btn4").disabled = true;
		flag = 1;
	}
}

function tiktak_func_7() {
	if (flag == 1) {
		document.getElementById("btn5").value = "X";
		document.getElementById("btn5").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("btn5").value = "0";
		document.getElementById("btn5").disabled = true;
		flag = 1;
	}
}

function tiktak_func_8() {
	if (flag == 1) {
		document.getElementById("btn6").value = "X";
		document.getElementById("btn6").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("btn6").value = "0";
		document.getElementById("btn6").disabled = true;
		flag = 1;
	}
}

function tiktak_func_9() {
	if (flag == 1) {
		document.getElementById("btn7").value = "X";
		document.getElementById("btn7").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("btn7").value = "0";
		document.getElementById("btn7").disabled = true;
		flag = 1;
	}
}

function tiktak_func_10() {
	if (flag == 1) {
		document.getElementById("btn8").value = "X";
		document.getElementById("btn8").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("btn8").value = "0";
		document.getElementById("btn8").disabled = true;
		flag = 1;
	}
}

function tiktak_func_11() {
	if (flag == 1) {
		document.getElementById("btn9").value = "X";
		document.getElementById("btn9").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("btn9").value = "0";
		document.getElementById("btn9").disabled = true;
		flag = 1;
	}
}
