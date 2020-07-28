var convenienceTextBathroom = document.getElementsByClassName('convenience__text-bathroom');
var iBathroom = -1;
var objectBathroom = [", 1 ванная комната", ", 2 ванные комнаты", ", 3 ванные комнаты"];
function getMessageBathroom() {
	return objectBathroom[iBathroom];
}
var objectBedroom = ["1 спальня", "2 спальни", "3 спальни"];
var convenienceText = document.getElementById('convenience__text');
$('.convenience__minus').attr("disabled", true);
var objectBed = [", 1 кровать", ", 2 кровати", ", 3 кровати", ", 4 кровати", ", 5 кроватей", ", 6 кроватей", ", 7 кроватей", ", 8 кроватей", ", 9 кроватей"];

$(document).ready(function func() {
    $('.convenience__minus-bedroom').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
		count = count < 1 ? 0 : count;
        $input.val(count);
		$input.change();
		if(count < 1) {
			$(convenienceText).text('0 спален');
			$(this).attr("disabled", true);
		}
		return false;
	});
	$('.convenience__minus-bed').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
		count = count < 1 ? 0 : count;
        $input.val(count);
		$input.change();
		if(count < 1) {
			$(convenienceText).text('0 кроватей');
			$(this).attr("disabled", true);
		}
		return false;
	});
	$('.convenience__minus-bathroom').click(function () {
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
    $('.convenience__plus-bedroom').click(function () {
        var $inputBedroom = $(this).parent().find('input');
        $inputBedroom.val(parseInt($inputBedroom.val()) + 1);
		$inputBedroom.change();
		var countBedroom = parseInt($inputBedroom.val()) - 1;
		if(countBedroom >= 0) {
			$('.convenience__minus-bedroom').removeAttr("disabled");
		}
        return false;
	});
	$('.convenience__plus-bed').click(function () {
        var $inputBed = $(this).parent().find('input');
        $inputBed.val(parseInt($inputBed.val()) + 1);
		$inputBed.change();
		var countBed = parseInt($inputBed.val()) - 1;
		if(countBed >= 0) {
			$('.convenience__minus-bed').removeAttr("disabled");
		}
        return false;
	});
	$('.convenience__plus-bathroom').click(function () {
        var $inputBathroom = $(this).parent().find('input');
        $inputBathroom.val(parseInt($inputBathroom.val()) + 1);
		$inputBathroom.change();
		var countBathroom = parseInt($inputBathroom.val()) - 1;
		if(countBathroom >= 0) {
			$('.convenience__minus-bathroom').removeAttr("disabled");
		}
        return false;
    });
});


$(document).ready(function() {
	$('.convenience__minus-bedroom').click(function () {
        var $input = $(this).parent().find('input');
		var count = parseInt($input.val());
		if(count < 1) {
			$('.convenience__circle-minus-bedroom').css("border-color", "rgba(31, 32, 65, 0.15)");
			$('.convenience__minus-bedroom').css("color", "rgba(31, 32, 65, 0.25)");
		}
    });
    $('.convenience__plus-bedroom').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val());
		if (count > 0) {
			$('.convenience__circle-minus-bedroom').css("border-color", "rgba(31, 32, 65, 0.25)");
			$('.convenience__minus-bedroom').css("color", "rgba(31, 32, 65, 0.5)");
		}
	});
	$('.convenience__minus-bed').click(function () {
        var $input = $(this).parent().find('input');
		var count = parseInt($input.val());
		if(count < 1) {
			$('.convenience__circle-minus-bed').css("border-color", "rgba(31, 32, 65, 0.15)");
			$('.convenience__minus-bed').css("color", "rgba(31, 32, 65, 0.25)");
		}
    });
    $('.convenience__plus-bed').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val());
		if (count > 0) {
			$('.convenience__circle-minus-bed').css("border-color", "rgba(31, 32, 65, 0.25)");
			$('.convenience__minus-bed').css("color", "rgba(31, 32, 65, 0.5)");
		}
    });
    $('.convenience__minus-bathroom').click(function () {
        var $input = $(this).parent().find('input');
		var count = parseInt($input.val());
		if(count < 1) {
			$(guestsTextBaby).hide(getMessageBaby());
			$('.convenience__circle-minus-bathroom').css("border-color", "rgba(31, 32, 65, 0.15)");
			$('.convenience__minus-bathroom').css("color", "rgba(31, 32, 65, 0.25)");
		}
    });
    $('.convenience__plus-bathroom').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val());
		if (count > 0) {
			$(guestsTextBaby).show(getMessageBaby());
			$('.convenience__circle-minus-bathroom').css("border-color", "rgba(31, 32, 65, 0.25)");
			$('.convenience__minus-bathroom').css("color", "rgba(31, 32, 65, 0.5)");
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
	var iBedroom = -1;
	var objectBedroom = ["1 спальня", "2 спальни", "3 спальни"];
	function getMessage() {
		return objectBedroom[iBedroom];
	}
	var convenienceText = document.getElementById('guests__text');
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
		$(convenienceText).text(getMessage());
		$(convenienceText).append(guestsTextSpan);
	});
	$(".guests__click-minus").click(function () {
		i--;
		$(convenienceText).text(getMessage());
		$(convenienceText).append(guestsTextSpan);
	});
 
	$(".convenience__plus-bathroom").click(function () {
		++iBaby;
		$(guestsTextBaby).text(getMessageBaby());
	});
	$(".convenience__minus-bathroom").click(function () {
		iBaby--;
		$(guestsTextBaby).text(getMessageBaby());
	});
});