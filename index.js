let menu_bar=document.getElementById('menu-bar');
let banner=document.getElementById('banner');
let menu_toggle=document.getElementById('menu-toggle');
let cross=document.getElementById('cross')
let drop_box=document.getElementById('drop-boxes');

function myFunction(){
	menu_toggle.style.display='flex';
	banner.style.display='none';
	cross.style.display='block';
	drop_box.style.display='block'
}

function myFunction1(){
	menu_toggle.style.display='none';
	banner.style.display='flex';
	cross.style.display='none'
}
