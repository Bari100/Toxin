var convenienceTextBathroom = document.getElementsByClassName('convenience__text-bathroom');
var iBathroom = -1;
var objectBathroom = [", 1 младенец", ", 2 младенца", ", 3 младенца", ", 4 младенца", ", 5 младенцев", ", 6 младенцев", ", 7 младенцев"];
function getMessageBathroom() {
	return objectBathroom[iBathroom];
}

$(document).ready(function() {
    $('.convenience__minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.convenience__plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});


$(document).ready(function() {
    $('.convenience__minus-bathroom').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
		if(count < 0) {
			$(convenienceTextBathroom).hide(getMessageBaby());
		}
    });
    $('.convenience__plus-bathroom').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		if (count >= 0) {
			$(convenienceTextBathroom).show(getMessageBaby());
		}
    });
});


// Dropdown Menu
var dropdown = document.querySelectorAll('.convenience__dropdown');
var dropdownArray = Array.prototype.slice.call(dropdown,0);
dropdownArray.forEach(function(el){
	var button = el.querySelector('a[data-toggle="dropdown"]'),
			menu = el.querySelector('.convenience__dropdown-menu'),
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
	var convenienceText = document.getElementById('convenience__text'); 
	$(".convenience__plus-bedroom").click(function () {
		++i;
		$(convenienceText).text(getMessage());
		// if (i>=tt.length) {
		// 	i=-1;
		// }
	});
	$(".convenience__minus-bedroom").click(function () {
		i--;
		$(convenienceText).text(getMessage());
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
	var convenienceTextBathroom = document.getElementsByClassName('convenience__text-bathroom'); 
	$(".convenience__plus-bathroom").click(function () {
		++iBaby;
		$(convenienceTextBathroom).text(getMessageBaby());
		// if (i>=tt.length) {
		// 	i=-1;
		// }
	});
	$(".convenience__minus-bathroom").click(function () {
		iBaby--;
		$(convenienceTextBathroom).text(getMessageBaby());
		// if (i<=tt.length) {
		// 	i=-1;
		// }
	});
	// var objectBabyZero = [""];
	// if(count < 0) {
	// 	$(guestsTextBaby).remove(getMessageBaby());
	// }
});