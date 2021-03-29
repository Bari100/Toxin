$(document).ready(function(){

    $(".btn-menu").click(function(){
        $(".header__modal").show();
    });
    $(document).mouseup(function (e){
		var div = $(".header__modal");
		if (!div.is(e.target) && div.has(e.target).length === 0) {
			div.hide();
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

    $(".sign-up-form__button-act").focus(function(){
        $(".sign-in-form-2").show(),
        $(".sign-up-form-2").hide();
    });
    $(".sign-in-form__button-act").focus(function(){
        $(".sign-in-form-2").hide(),
        $(".sign-up-form-2").show();
    });

});