let timerAbout
let timerNav
let timerSupport

$(".footer__dropdown-about").on("mouseover", function() {
    clearTimeout(timerAbout)
        openSubmenuAbout()})
    .on("mouseleave", function() {
    timerAbout = setTimeout(
        closeSubmenuAbout, 100)
})
function openSubmenuAbout() {
    $(".footer__dropdown-menu-about").addClass("footer__dropdown-menu-open")
}
function closeSubmenuAbout() {
    $(".footer__dropdown-menu-about").removeClass("footer__dropdown-menu-open")
}


$(".footer__dropdown-nav").on("mouseover", function() {
    clearTimeout(timerNav)
        openSubmenuNav()})
    .on("mouseleave", function() {
    timerNav = setTimeout(
        closeSubmenuNav, 100)
})
function openSubmenuNav() {
    $(".footer__dropdown-menu-nav").addClass("footer__dropdown-menu-open")
}
function closeSubmenuNav() {
    $(".footer__dropdown-menu-nav").removeClass("footer__dropdown-menu-open")
}


$(".footer__dropdown-support").on("mouseover", function() {
    clearTimeout(timerSupport)
        openSubmenuSupport()})
    .on("mouseleave", function() {
    timerSupport = setTimeout(
        closeSubmenuSupport, 100)
})
function openSubmenuSupport() {
    $(".footer__dropdown-menu-support").addClass("footer__dropdown-menu-open")
}
function closeSubmenuSupport() {
    $(".footer__dropdown-menu-support").removeClass("footer__dropdown-menu-open")
}