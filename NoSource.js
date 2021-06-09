window.addEventListener("keydown", NoSource, false);
window.addEventListener("keyup", KeyReleased, false);

var keys = [];

function NoSource(e) {
	
	keys[e.keyCode] = true;
    
	// CTRL + U
	if (keys[17] && keys[85]) {
    	alert("View-Page-Source is Inactive");
        e.preventDefault();
        keys=[];
	}
}

function KeyReleased(e) {
	keys[e.keyCode] = false;
}
