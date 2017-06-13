"use strict";

var fixedTop = false;

var navbar_initialized = false;

$(document).ready(function () {
    window_width = $(window).width();

    // Init navigation toggle for small screens
    if (window_width <= 991) {
        lbd.initRightMenu();
    }

    //  Activate the tooltips
    $('[rel="tooltip"]').tooltip();

    var hash = window.location.hash;
    var offset = 7.5;

    var ui = {
        indicator: document.getElementById("indicator"),
        list: document.querySelector("ul.ululul"),
        listItems: document.querySelectorAll("ul li.ululul"),
        firstItem: document.querySelector("ul.ululul > li")
    };

    var state = {
        position: ui.firstItem.getBoundingClientRect().top - offset
    };
    [].forEach.call(ui.listItems, function (item) {
        item.addEventListener("mouseout", function (e) {
            requestAnimationFrame(function () {
                translate(ui.indicator, state.position);
            });
        });

        item.addEventListener("mouseover", function (e) {
            var listTop = e.target.getBoundingClientRect().top;
            requestAnimationFrame(function () {
                translate(ui.indicator, listTop - offset);
            });
        });

        if (item.textContent === hash) {
            var listTop = item.getBoundingClientRect().top;
            requestAnimationFrame(function () {
                translate(ui.indicator, listTop - offset);
                state.position = listTop - offset;
            });
        }
    });

    function translate(e, px) {
        e.style["-webkit-transform"] = "translate(-20px, " + px + "px)";
        e.style["-moz-transform"] = "translate(-20px, " + px + "px)";
        e.style["-ms-transform"] = "translate(-20px, " + px + "px)";
        e.style["-o-transform"] = "translate(-20px, " + px + "px)";
        e.style["transform"] = "translate(-20px, " + px + "px)";
    }
});

// activate collapse right menu when the windows is resized
$(window).resize(function () {
    if ($(window).width() <= 991) {
        lbd.initRightMenu();
    }
});

lbd = {
    misc: {
        navbar_menu_visible: 0
    },

    initRightMenu: function () {
        if (!navbar_initialized) {
            $off_canvas_sidebar = $('nav').find('.navbar-collapse').first().clone(true);

            $sidebar = $('.sidebar');
            sidebar_bg_color = $sidebar.data('background-color');
            sidebar_active_color = $sidebar.data('active-color');

            $logo = $sidebar.find('.logo').first();
            logo_content = $logo[0].outerHTML;

            ul_content = '';

            // set the bg color and active color from the default sidebar to the off canvas sidebar;
            $off_canvas_sidebar.attr('data-background-color', sidebar_bg_color);
            $off_canvas_sidebar.attr('data-active-color', sidebar_active_color);

            $off_canvas_sidebar.addClass('off-canvas-sidebar');

            //add the content from the regular header to the right menu
            $off_canvas_sidebar.children('ul').each(function () {
                content_buff = $(this).html();
                ul_content = ul_content + content_buff;
            });

            // add the content from the sidebar to the right menu
            content_buff = $sidebar.find('.nav').html();
            ul_content = ul_content + '<li class="divider"></li>' + content_buff;

            ul_content = '<ul class="nav navbar-nav">' + ul_content + '</ul>';

            navbar_content = logo_content + ul_content;
            navbar_content = '<div class="sidebar-wrapper">' + navbar_content + '</div>';

            $off_canvas_sidebar.html(navbar_content);

            $('body').append($off_canvas_sidebar);

            $toggle = $('.navbar-toggle');

            $off_canvas_sidebar.find('a').removeClass('btn btn-round btn-default');
            $off_canvas_sidebar.find('button').removeClass('btn-round btn-fill btn-info btn-primary btn-success btn-danger btn-warning btn-neutral');
            $off_canvas_sidebar.find('button').addClass('btn-simple btn-block');

            $toggle.click(function () {
                if (lbd.misc.navbar_menu_visible == 1) {
                    $('html').removeClass('nav-open');
                    lbd.misc.navbar_menu_visible = 0;
                    $('#bodyClick').remove();
                    setTimeout(function () {
                        $toggle.removeClass('toggled');
                    }, 400);

                } else {
                    setTimeout(function () {
                        $toggle.addClass('toggled');
                    }, 430);

                    div = '<div id="bodyClick"></div>';
                    $(div).appendTo("body").click(function () {
                        $('html').removeClass('nav-open');
                        lbd.misc.navbar_menu_visible = 0;
                        $('#bodyClick').remove();
                        setTimeout(function () {
                            $toggle.removeClass('toggled');
                        }, 400);
                    });

                    $('html').addClass('nav-open');
                    lbd.misc.navbar_menu_visible = 1;

                }
            });
            navbar_initialized = true;
        }

    }
}


// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            timeout = null;
            if (!immediate)
                func.apply(context, args);
        }, wait);
        if (immediate && !timeout)
            func.apply(context, args);
    };
};
 /*

$(function () {
    var hash = window.location.pathname;
    var offset = 50;
   
    var listEle = document.querySelectorAll('.sidebar .nav li');
    var activeEle = 
    
    [].forEach.call(listEle, function (e) {
        //działamy na elementach
        e.style.color = "red";
    });
   
    var ui = {
        indicator: document.getElementById('indicator'),
        list: document.querySelector('ul.nav'),
        listItems: document.querySelectorAll('.sidebar-wrapper li'),
        firstItem: document.querySelector('.sidebar .nav > li')
    }

    var state = {
        position: ui.firstItem.getBoundingClientRect().top - offset
    };

    [].forEach.call(ui.listItems, function (item) {
        item.addEventListener('mouseover', function (e) {
            requestAnimationFrame(function () {
                translate(ui.indicator, state.position)
            })
        })

        item.addEventListener('mouseover', function (e) {
            var listTop = e.target.getBoundingClientRect().top
            requestAnimationFrame(function () {
                translate(ui.indicator, listTop - offset)
            })
        })

        if (item.textContent === hash) {
            var listTop = item.getBoundingClientRect().top
            requestAnimationFrame(function () {
                translate(ui.indicator, listTop - offset)
                state.position = listTop - offset
            })
        }
    })

    function translate(e, px) {
        e.style["-webkit-transform"] = "translate(150px, " + 300 + "px)";
        e.style["-moz-transform"] = "translate(150px, " + 300 + "px)";
        e.style["-ms-transform"] = "translate(150px, " + 300 + "px)";
        e.style["-o-transform"] = "translate(150px, " + 300 + "px)";
        e.style["transform"] = "translate(150px, " + 300 + "px)";
    }

});

     */

 