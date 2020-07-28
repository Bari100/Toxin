var guestsTextBaby = document.getElementsByClassName('guests__text-baby');
var iBaby = -1;
var objectBaby = [", 1 младенец", ", 2 младенца", ", 3 младенца", ", 4 младенца", ", 5 младенцев", ", 6 младенцев", ", 7 младенцев"];
function getMessageBaby() {
	return objectBaby[iBaby];
}
var tt = ["1 гость", "2 гостя", "3 гостя", "4 гостя", "5 гостей", "6 гостей", "7 гостей"];
var guestsText = document.getElementById('guests__text');
$('.guests__minus').attr("disabled", true);

$(document).ready(function func() {
    $('.guests__minus-adults').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
		count = count < 1 ? 0 : count;
        $input.val(count);
		$input.change();
		if(count < 1) {
			$(guestsText).text('0 гостей');
			$(this).attr("disabled", true);
		}
		return false;
	});
	$('.guests__minus-kids').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
		count = count < 1 ? 0 : count;
        $input.val(count);
		$input.change();
		if(count < 1) {
			$(guestsText).text('0 гостей');
			$(this).attr("disabled", true);
		}
		return false;
	});
	$('.guests__click-baby-minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
		count = count < 1 ? 0 : count;
        $input.val(count);
		$input.change();
		if(count < 1) {
			$(this).attr("disabled", true);
		}
		return false;
    });
    $('.guests__plus-adults').click(function () {
        var $inputAdults = $(this).parent().find('input');
        $inputAdults.val(parseInt($inputAdults.val()) + 1);
		$inputAdults.change();
		var countAdults = parseInt($inputAdults.val()) - 1;
		if(countAdults >= 0) {
			$('.guests__minus-adults').removeAttr("disabled");
		}
        return false;
	});
	$('.guests__plus-kids').click(function () {
        var $inputKids = $(this).parent().find('input');
        $inputKids.val(parseInt($inputKids.val()) + 1);
		$inputKids.change();
		var countKids = parseInt($inputKids.val()) - 1;
		if(countKids >= 0) {
			$('.guests__minus-kids').removeAttr("disabled");
		}
        return false;
	});
	$('.guests__click-baby').click(function () {
        var $inputBaby = $(this).parent().find('input');
        $inputBaby.val(parseInt($inputBaby.val()) + 1);
		$inputBaby.change();
		var countBaby = parseInt($inputBaby.val()) - 1;
		if(countBaby >= 0) {
			$('.guests__click-baby-minus').removeAttr("disabled");
		}
        return false;
    });
});


$(document).ready(function() {
	$('.guests__minus-adults').click(function () {
        var $input = $(this).parent().find('input');
		var count = parseInt($input.val());
		if(count < 1) {
			$('.guests__circle-minus-adults').css("border-color", "rgba(31, 32, 65, 0.15)");
			$('.guests__minus-adults').css("color", "rgba(31, 32, 65, 0.25)");
		}
    });
    $('.guests__plus-adults').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val());
		if (count > 0) {
			$('.guests__circle-minus-adults').css("border-color", "rgba(31, 32, 65, 0.25)");
			$('.guests__minus-adults').css("color", "rgba(31, 32, 65, 0.5)");
		}
	});
	$('.guests__minus-kids').click(function () {
        var $input = $(this).parent().find('input');
		var count = parseInt($input.val());
		if(count < 1) {
			$('.guests__circle-minus-kids').css("border-color", "rgba(31, 32, 65, 0.15)");
			$('.guests__minus-kids').css("color", "rgba(31, 32, 65, 0.25)");
		}
    });
    $('.guests__plus-kids').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val());
		if (count > 0) {
			$('.guests__circle-minus-kids').css("border-color", "rgba(31, 32, 65, 0.25)");
			$('.guests__minus-kids').css("color", "rgba(31, 32, 65, 0.5)");
		}
    });
    $('.guests__click-baby-minus').click(function () {
        var $input = $(this).parent().find('input');
		var count = parseInt($input.val());
		if(count < 1) {
			$(guestsTextBaby).hide(getMessageBaby());
			$('.guests__circle-minus-baby').css("border-color", "rgba(31, 32, 65, 0.15)");
			$('.guests__click-baby-minus').css("color", "rgba(31, 32, 65, 0.25)");
		}
    });
    $('.guests__click-baby').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val());
		if (count > 0) {
			$(guestsTextBaby).show(getMessageBaby());
			$('.guests__circle-minus-baby').css("border-color", "rgba(31, 32, 65, 0.25)");
			$('.guests__click-baby-minus').css("color", "rgba(31, 32, 65, 0.5)");
		}
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

// BUTTONS APPLY
	$('.guests__button[data-action="apply"]').click(function(){
		if(menu.hasClass('show')){
			menu.classList.remove('show');
			menu.classList.add('hide');
			event.preventDefault();
		}
	});
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
	var a = $('a');
	var guestsTextSpan = a.find('span');
	
	var iBaby = -1;
	var objectBaby = [", 1 младенец", ", 2 младенца", ", 3 младенца", ", 4 младенца", ", 5 младенцев", ", 6 младенцев", ", 7 младенцев"];
	function getMessageBaby() {
		return objectBaby[iBaby];
	}
	var guestsTextBaby = document.getElementsByClassName('guests__text-baby');
	 
	$(".guests__click").click(function () {
		++i;
		$(guestsText).text(getMessage());
		$(guestsText).append(guestsTextSpan);
	});
	$(".guests__click-minus").click(function () {
		i--;
		$(guestsText).text(getMessage());
		$(guestsText).append(guestsTextSpan);
	});
 
	$(".guests__click-baby").click(function () {
		++iBaby;
		$(guestsTextBaby).text(getMessageBaby());
	});
	$(".guests__click-baby-minus").click(function () {
		iBaby--;
		$(guestsTextBaby).text(getMessageBaby());
	});

// BUTTON CLEAR
	$('.guests__button[data-action="clear"]').click(function(){
		$('.guests__plus-adults').parent().find('input').val(0);
		$('.guests__plus-kids').parent().find('input').val(0);
		$('.guests__click-baby').parent().find('input').val(0);
		iBaby = -1;
		i = -1;
		$(guestsText).text('0 гостей');
		$(guestsTextSpan).text('');
		$(guestsText).append(guestsTextSpan);
		$('.guests__minus').attr("disabled", true);
		$('.guests__circle-minus-adults').css("border-color", "rgba(31, 32, 65, 0.15)");
		$('.guests__minus-adults').css("color", "rgba(31, 32, 65, 0.25)");
		$('.guests__circle-minus-kids').css("border-color", "rgba(31, 32, 65, 0.15)");
		$('.guests__minus-kids').css("color", "rgba(31, 32, 65, 0.25)");
		$('.guests__circle-minus-baby').css("border-color", "rgba(31, 32, 65, 0.15)");
		$('.guests__click-baby-minus').css("color", "rgba(31, 32, 65, 0.25)");
	}); 
});