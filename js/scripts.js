var list = document.getElementById('list'),
	add = document.getElementById('addElem');

add.addEventListener('click', function addElements() {
	var element = document.createElement('li');	
	var allElementsSoFar = document.getElementsByTagName('li');
	element.innerHTML = 'item ' + allElementsSoFar.length;
	list.appendChild(element);
});
// czemu jesli zdefiniowalem funkcje wczesniej, i chce ja wykonac jak sie kliknie button to nie dziala ?