$(document).ready(function(){
    $(".btn-menu").click(function(){
        $(".header__modal").show();
    });
    $(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".header__modal"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			div.hide(); // скрываем его
		}
    });
    $(".sign-up-form__button-act").focus(function(){
        $(".sign-in-form").show(),
        $(".sign-up-form").hide();
    });
    $(".sign-in-form__button-act").focus(function(){
        $(".sign-in-form").hide(),
        $(".sign-up-form").show();
    });
});