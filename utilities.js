var flash_count = 0;
var NUM_FLASHES = 1;
var to_flash;
var flash_active = 0;
function activate_flash(){
	
	if(flash_active) return;
	flash_active = 1;
	
	flash();
}
function deactivate_flash(){
	if(!flash_active) return;
	clearTimeout(to_flash);
	document.body.style.background = 'black';
	flash_count=0;
	flash_active=0;
}
function flash(){

	to_flash = setTimeout(flash, 500);

	flash_count++;
	if(flash_count % 2 == 0){
		document.body.style.background = 'grey';
	}
	else{
		document.body.style.background = 'black';
	}
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