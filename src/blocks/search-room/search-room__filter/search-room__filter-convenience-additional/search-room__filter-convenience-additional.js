// Dropdown Menu
var dropdown = document.querySelectorAll('.search-room__filter-convenience-additional__dropdown');
var dropdownArray = Array.prototype.slice.call(dropdown,0);
dropdownArray.forEach(function(el){
	var button = el.querySelector('a[data-toggle="dropdown"]'),
			menu = el.querySelector('.search-room__filter-convenience-additional__dropdown-menu'),
			arrow = button.querySelector('i.icon-arrow');

	button.onclick = function(event) {
		if(!menu.hasClass('show')) {
			$('.search-room__filter-convenience-additional__arrow-down').css('transform', 'rotate(0.5turn)');
			event.preventDefault(); // ЗАПРЕЩАЕТ СКРОЛЛ СТРАНИЦЫ ПРИ НАЖАТИИ НА ССЫЛКУ
			menu.classList.add('show');
			menu.classList.remove('hide');
			arrow.classList.add('open');
			arrow.classList.remove('close');
			event.preventDefault();
		}
		else {
			$('.search-room__filter-convenience-additional__arrow-down').css('transform', '');
			event.preventDefault(); // ЗАПРЕЩАЕТ СКРОЛЛ СТРАНИЦЫ ПРИ НАЖАТИИ НА ССЫЛКУ
			menu.classList.remove('show');
			menu.classList.add('hide');
			arrow.classList.remove('open');
			arrow.classList.add('close');
			event.preventDefault();
		}
	};
});

Element.prototype.hasClass = function(className) {
    return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
};