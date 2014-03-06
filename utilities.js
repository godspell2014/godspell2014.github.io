var flash_count = 0;
var NUM_FLASHES = 1;
var to_flash;
function flash(){
	
	if(flash_count == 2*NUM_FLASHES){
		flash_count = 0;
		clearTimeout(to_flash);
		return;
	}

	//document.getElementById("menu").style.background = 'black';
	if(flash_count % 2 == 0){
		document.body.style.background = 'grey';
		flash_count++;
	}
	else if(flash_count % 2 == 1){
		document.body.style.background = 'black';
		flash_count++;
	}
	
	to_flash = setTimeout(flash, 500);
}

function converttoclock(seconds, clock){

	var minstr;
	var secstr;
	var hrstr;
		
	clock.hours = Math.floor(seconds/3600);
	if(clock.hours < 10) hrstr = "0" + clock.hours;
	else hrstr = clock.hours;
	
	clock.minutes = Math.floor((seconds - clock.hours*3600)/60);
	if(clock.minutes < 10) minstr = "0" + clock.minutes;
	else minstr = clock.minutes;
	
	clock.seconds = seconds%60;
	if(clock.seconds < 10) secstr = "0" + clock.seconds;
	else secstr = clock.seconds;

	return (hrstr + ":" + minstr + ":" + secstr);
}