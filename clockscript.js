$(document).ready(function() {
	var isPast30 = false;
	var coeff = 1000 * 60 * 5;
	var date = new Date();
	var date = new Date(Math.round(date.getTime() / coeff) * coeff);
	var hours = date.getHours() % 12 || 12;
	var mins = date.getMinutes();
  isPast30 = mins > 30;

	console.log('hrs: ' + hours + '\nmins: ' + mins);
	
  $('#word-it').addClass('selected');
	$('#word-is').addClass('selected');
  
  styleMinutes(mins);

  // if hour is 12
  //  if > half past style '1', else '12'
  // else 
  //  if > half past style hour++, else current hour 
  (hours === 12) ? 
    (isPast30) ? styleHours(1) : styleHours(12) : 
    (isPast30) ? styleHours(hours + 1) : styleHours(hours);

});

function clear() {
	$('.word').removeClass('selected');
}

function styleHours(hours) {
  switch (hours) {
    case 1:
      $('#word-hourOne').addClass('selected');
      break;
    case 2:
      $('#word-hourTwo').addClass('selected');
      break;
    case 3:
      $('#word-hourThree').addClass('selected');
      break;
    case 4:
      $('#word-hourFour').addClass('selected');
      break;
    case 5:
      $('#word-hourFive').addClass('selected');
      break;
    case 6:
      $('#word-hourSix').addClass('selected');
      break;
    case 7:
      $('#word-hourSeven').addClass('selected');
      break;
    case 8:
      $('#word-hourEight').addClass('selected');
      break;
    case 9:
      $('#word-hourNine').addClass('selected');
      break;
    case 10:
      $('#word-hourTen').addClass('selected');
      break;
    case 11:
      $('#word-hourEleven').addClass('selected');
      break;
    default:
      $('#word-hourTwelve').addClass('selected');
      break;
  }
}

function styleMinutes(mins) {
  if (mins === 15) {
    $('#word-quarter').addClass('selected');
    $('#word-past').addClass('selected');
  }
  if (mins < 30 && mins !== 15 && mins !== 0) {
    // 00 & 05 may cause issue, may just be 0 & 5
    if (mins === 00) { $('#word-oclock').addClass('selected'); }
    if (mins === 05) { $('#word-five').addClass('selected'); }
    if (mins === 10) { $('#word-ten').addClass('selected'); }
    if (mins === 20) { $('#word-twenty').addClass('selected'); }
    if (mins === 25) { 
      $('#word-twenty').addClass('selected'); 
      $('#word-five').addClass('selected'); 
    }
    $('#word-minutes').addClass('selected'); 
    $('#word-past').addClass('selected'); 
  }
  if (mins === 30) {
    $('#word-half').addClass('selected');
    $('#word-past').addClass('selected');
  }
  if (mins > 30 && mins !== 45) {
    if (mins === 35) { 
      $('#word-twenty').addClass('selected');
      $('#word-five').addClass('selected');
    }
    if (mins === 40) { $('#word-twenty').addClass('selected'); }
    if (mins === 50) { $('#word-ten').addClass('selected'); }
    if (mins === 55) { $('#word-five').addClass('selected'); }
    $('#word-minutes').addClass('selected');
    $('#word-to').addClass('selected');
  }
  if (mins === 45) {
    $('#word-quarter').addClass('selected');
    $('#word-to').addClass('selected');
  }
  if (mins === 00) { $('#word-oclock').addClass('selected'); }
}