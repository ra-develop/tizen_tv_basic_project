var checkTime;

//Initialize function
var init = function () {
    // TODO:: Do your initialization job
    console.log('init() called');
    
    document.addEventListener('visibilitychange', function() {
        if(document.hidden){
            // Something you want to do when hide or exit.
        } else {
            // Something you want to do when resume.
        }
    });
 
    // add eventListener for keydown
    document.addEventListener('keydown', function(e) {
    	switch(e.keyCode){
    	case 37: //LEFT arrow
    		break;
    	case 38: //UP arrow
    		break;
    	case 39: //RIGHT arrow
    		break;
    	case 40: //DOWN arrow
    		break;
    	case 13: //OK button
    		break;
    	case 10009: //RETURN button
		tizen.application.getCurrentApplication().exit();
    		break;
    	default:
    		console.log('Key code : ' + e.keyCode);
    		break;
    	}
    });
};
// window.onload can work without <body onload="">
window.onload = init;

function startTime24H() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('divbutton1').innerHTML='Current time in 24H format: ' + h + ':' + m + ':' + s;
    setTimeout(startTime24H, 10);
}

function checkTime(i) {
    if (i < 10) {
        i='0' + i;
    }
    return i;
}

function startTime12H() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    console.log(h);
    if ( (h  / 12) >= 1 ) {
        meri = ' PM';
    }
    else {
        meri = ' AM';
    }

    h = h % 12;
    if ( h === 0 ) {
        h = 12;
    }
    m = checkTime(m);
    s = checkTime(s);

    document.getElementById('divbutton2').innerHTML='Current time in 12H format: ' + h + ':' + m + ':' + s + ' ' + meri;
    setTimeout(startTime12H, 10);
}