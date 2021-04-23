
var dropdown = document.querySelectorAll('.search-room__filter-convenience-additional__dropdown');
var dropdownArray = Array.prototype.slice.call(dropdown,0);
dropdownArray.forEach(function(el){
	var button = el.querySelector('a[data-toggle="dropdown"]'),
			menu = el.querySelector('.search-room__filter-convenience-additional__dropdown-menu');

	button.onclick = function(event) {
		if(!menu.hasClass('show')) {
			$('.search-room__filter-convenience-additional__arrow-down').css('transform', 'rotate(0.5turn)');
			event.preventDefault();
			menu.classList.add('show');
			menu.classList.remove('hide');
			event.preventDefault();
		}
		else {
			$('.search-room__filter-convenience-additional__arrow-down').css('transform', '');
			event.preventDefault();
			menu.classList.remove('show');
			menu.classList.add('hide');
			event.preventDefault();
		}
	};
});

Element.prototype.hasClass = function(className) {
    return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
};