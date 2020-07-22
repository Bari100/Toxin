$(document).ready(function() {
    $('.guests__minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 0 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.guests__plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});


// Dropdown Menu
var dropdown = document.querySelectorAll('.guests__dropdown');
var dropdownArray = Array.prototype.slice.call(dropdown,0);
dropdownArray.forEach(function(el){
	var button = el.querySelector('a[data-toggle="dropdown"]'),
			menu = el.querySelector('.guests__dropdown-menu'),
			arrow = button.querySelector('i.icon-arrow');

	button.onclick = function(event) {
		if(!menu.hasClass('show')) {
			menu.classList.add('show');
			menu.classList.remove('hide');
			arrow.classList.add('open');
			arrow.classList.remove('close');
			event.preventDefault();
		}
		else {
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

$(function(){
	var i = -1;
	var tt = ["1 гость", "2 гостя", "3 гостя", "4 гостя", "5 гостей", "6 гостей", "7 гостей"];
	function getMessage() {
		return tt[i];
	}
	var guestsText = document.getElementById('guests__text'); 
	$(".guests__click").click(function () {
		++i;
		$(guestsText).text(getMessage());
		// if (i>=tt.length) {
		// 	i=-1;
		// }
	});
	$(".guests__click-minus").click(function () {
		i--;
		$(guestsText).text(getMessage());
		// if (i<=tt.length) {
		// 	i=-1;
		// }
	});
});

$(function(){
	var iBaby = -1;
	var objectBaby = [", 1 младенец", ", 2 младенца", ", 3 младенца", ", 4 младенца", ", 5 младенцев", ", 6 младенцев", ", 7 младенцев"];
	function getMessageBaby() {
		return objectBaby[iBaby];
	}
	var guestsTextBaby = document.getElementsByClassName('guests__text-baby'); 
	$(".guests__click-baby").click(function () {
		++iBaby;
		$(guestsTextBaby).text(getMessageBaby());
		// if (i>=tt.length) {
		// 	i=-1;
		// }
	});
	$(".guests__click-baby-minus").click(function () {
		iBaby--;
		$(guestsTextBaby).text(getMessageBaby());
		// if (i<=tt.length) {
		// 	i=-1;
		// }
	});
});