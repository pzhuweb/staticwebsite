!function (e) {
    "use strict";
    e(window).on("load", function () {
        e("#loading-area").delay("500").fadeOut(2e3)
    }), e(document).ready(function () {
        e(document).on("click", ".side-menu-wrap .side-menu-ul .sidenav__item .menu-plus-icon", function () {
            return e(this).closest(".sidenav__item").siblings().removeClass("active").find(".side-sub-menu").slideUp(200), e(this).closest(".sidenav__item").toggleClass("active").find(".side-sub-menu").slideToggle(200), !1
        }), e(window).on("scroll", function () {
            0 < e(window).scrollTop() ? e(".header-menu-area").addClass("header-fixed") : e(".header-menu-area").removeClass("header-fixed"), 300 < e(window).scrollTop() ? e("#scroll-top").addClass("back-btn-shown") : e("#scroll-top").removeClass("back-btn-shown")
        }), e(document).on("click", "#scroll-top", function () {
            e("html, body").animate({scrollTop: 0}, 1e3)
        }), e(document).on("click", ".logo-right-button .side-menu-open", function () {
            e(".side-nav-container").toggleClass("active")
        }), e(document).on("click", ".humburger-menu .side-menu-close", function () {
            e(".side-nav-container").removeClass("active")
        }), e(".homepage-slide1").owlCarousel({
            items: 1,
            nav: !1,
            dots: !0,
            autoplay: !0,
            loop: !0,
            smartSpeed: 1e3,
            autoHeight: !0,
            animateOut: "slideOutDown",
            animateIn: "fadeIn",
            active: !0
        }), e(".homepage-slide1").on("translate.owl.carousel", function () {
            e(".single-slide-item .section__title, .single-slide-item .section-description").removeClass("animated pulse").css("opacity", "0"), e(".single-slide-item .section__meta").removeClass("animated fadeInUp").css("opacity", "0"), e(".single-slide-item .hero-btn-box").removeClass("animated fadeInDown").css("opacity", "0")
        }), e(".homepage-slide1").on("translated.owl.carousel", function () {
            e(".single-slide-item .section__title, .single-slide-item .section-description").addClass("animated pulse").css("opacity", "1"), e(".single-slide-item .section__meta").addClass("animated fadeInUp").css("opacity", "1"), e(".single-slide-item .hero-btn-box").addClass("animated fadeInDown").css("opacity", "1")
        }), e(".video-play-btn").magnificPopup({type: "video"}), e("#map").length && initMap("map", 40.717499, -74.044113, "images/map-marker.png")
    })
}(jQuery);