$(function() {
    $(".form__phone-prefix__prefix").on("click", function() { $(this).prev().toggle() }), $(".code_country__item").on("click", function() {
        var e = $(this).attr("id");
        $(this).parent().toggle();
        var a = $(this).parent().parent(),
            n = "url('../images/country_icons/" + function(e) {
                for (var a = 0; a < code_countries.length; a++)
                    if (e == code_countries[a].code) return code_countries[a].name
            }(e) + ".png')";
        $(".form__phone-prefix__prefix").css({ "background-image": n }), a.children(".form__phone-prefix__prefix").html("+" + e), a.children(".form__phone-prefix__prefix").css({ "background-image": n })
    }), $(".checkbox__toggle label").on("click", function() { $(this).parent().parent().parent().next().slideToggle() }), $(".checkbox__green label").on("click", function() { $(this).parent().toggleClass("checkbox__green--selected") }), $(document).on("click", ".message__title-wrap", function() {
        var e = $(this).next();
        e.is(":hidden") ? ($(".message__text-wrap").slideUp("fast"), $(".message__item").removeClass("message--show"), e.slideDown("fast"), $(this).parent().addClass("message--show")) : ($(".message__text-wrap").slideUp("fast"), $(".message__item").removeClass("message--show"))
    }), $("#side-menu").metisMenu(), $(document).on("click", ".table__arrow", function() { $(this).parent().next().toggle() }), $("*").is(".input-daterange") && $(".input-daterange").datepicker({ language: "ru", autoclose: !0, todayHighlight: !0, toggleActive: !0 }), $(window).scroll(function() {
        var e = $(window).height() - $("#page-wrapper").height();
        $(this).scrollTop() > 85 && e < 50 ? $(".sidebar").addClass("sidebar--fixed") : $(".sidebar").removeClass("sidebar--fixed")
    }), jQuery("img.svg").each(function() {
        var e = jQuery(this),
            a = e.attr("id"),
            n = e.attr("class"),
            m = e.attr("src");
        jQuery.get(m, function(m) {
            var t = jQuery(m).find("svg");
            void 0 !== a && (t = t.attr("id", a)), void 0 !== n && (t = t.attr("class", n + " replaced-svg")), !(t = t.removeAttr("xmlns:a")).attr("viewBox") && t.attr("height") && t.attr("width") && t.attr("viewBox", "0 0 " + t.attr("height") + " " + t.attr("width")), e.replaceWith(t)
        }, "xml")
    })
}), $(function() {
    $(window).bind("load resize", function() {
        var e = 50;
        (this.window.innerWidth > 0 ? this.window.innerWidth : this.screen.width) < 768 ? ($("div.navbar-collapse").addClass("collapse"), e = 100) : $("div.navbar-collapse").removeClass("collapse");
        var a = (this.window.innerHeight > 0 ? this.window.innerHeight : this.screen.height) - 1;
        (a -= e) < 1 && (a = 1), a > e && $("#page-wrapper").css("min-height", a + "px")
    });
    for (var e = window.location, a = $("ul.nav a").filter(function() { return this.href == e }).addClass("active").parent(); a.is("li");) a = a.parent().addClass("in").parent();
    $(".dropdown-toggle").dropdown()
});
var showTrafficChart = function(e, a) {
    var n = $("#" + e + "-chart");
    n.remove(), $("#" + e + "-content").html('<canvas id="' + e + '-chart"></canvas>'), n = $("#" + e + "-chart");
    var m = [],
        t = [],
        s = [];
    a.sort(function(e, a) { return e.date > a.date ? 1 : e.date < a.date ? -1 : 0 });
    for (var r in a) m.push(moment(a[r].date).format("DD.MM")), t.push(a[r].income.toFixed(2)), s.push(a[r].outcome.toFixed(2));
    new Chart(n, { type: "bar", data: { labels: m, datasets: [{ label: "Принято", backgroundColor: "rgba(255, 69, 0, 0.5)", data: t }, { label: "Отправлено", backgroundColor: "rgba(69, 0, 255, 0.5)", data: s }] }, options: { legend: { position: "bottom" }, scales: { xAxes: [{ stacked: !1 }], yAxes: [{ ticks: { beginAtZero: !0 } }] } } })
};
$(".confirmchange").on("click", function() {
    swal({
        title: "",
        text: "Если продолжить, то произойдет смена тарифа",
        type: "info",
        icon: "info",
        showCancelButton: true,
        cancelButtonText: "Отменить",
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Продолжить',
        closeOnConfirm: true,
        closeOnCancel: true,
    })
});
$(".confirmservice").on("click", function() {
    swal({
        title: "",
        text: "Вы действительно хотите подключить услугу?",
        type: "info",
        icon: "info",
        showCancelButton: true,
        cancelButtonText: "Нет",
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Да',
        closeOnConfirm: true,
        closeOnCancel: true,

    })
});
$(".success").on("click", function() {
    swal({
        title: "Сообщение успешно отправлено",
        text: "",
        type: "success",
        icon: "success",
        showCancelButton: false,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Ok',
        closeOnConfirm: true,

    })
});

$(".confirmblock").on("click", function() {
    swal({
        title: "Будут заблокированы все услуги",
        text: "для счета №6300009999",
        type: "warning",
        icon: "warning",
        showCancelButton: true,
        cancelButtonText: "Отменить",
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Заблокировать',
        closeOnConfirm: true,
        closeOnCancel: true,

    })
});
$(".blockinet").on("click", function() {
    swal({
        title: "Блокировка Интернет",
        text: "Будет заблокирована передача данных по указанной услуге. Вы сможете снять блокировку в любой момент",
        type: "warning",
        icon: "warning",
        showCancelButton: true,
        cancelButtonText: "Отменить",
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Заблокировать',
        closeOnConfirm: true,
        closeOnCancel: true,

    })
});