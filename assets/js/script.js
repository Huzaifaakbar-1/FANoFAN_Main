function feed() {
    let feede = document.getElementById("feedback").value.trim(); // trim spaces
    let fedshow = document.getElementById("feed-show");

    if (feede === "") {
        alert("Please enter your feedback before submitting!"); 
        return; 
    }

    fedshow.innerHTML = feede;
    $("#feed_block").removeClass("hidden");
}

$("#cross").click(function () {
    $("#feed_block").addClass("hidden");
});

$(document).ready(function () {
    $(".down , .fan-down , .kitchen-down , .home-down , .geyser-down , .air-down , .light-down , .drop").hover(
        function () {
            $(".drop").stop(true, true).fadeIn(150);
        },
        function () {
            $(".drop").stop(true, true).fadeOut(150);
        }
    );
    $('.down, .drop').hover(
        function () {
            $('.drop').addClass('flex transition duration-[3s]').removeClass('hidden');
        },
        function () {
            $('.drop').removeClass('flex').addClass('hidden');
        }
    );
    $(".down , .fan-down , .kitchen-down , .home-down , .geyser-down , .air-down , .light-down , .drop ").hover(
        function () {
            $(".caret-down").addClass("hidden");
            $(".caret-up").removeClass("hidden")
        },
        function () {
            $(".caret-down").removeClass("hidden");
            $(".caret-up").addClass("hidden")
        }

    )

    $(".fan-down , .fan").hover(
        function () {
            $('.fan-down').stop(true, true).fadeIn().addClass('flex transition duration-[2s] ease-in-out ').removeClass('hidden');
            $(".f_c").stop(true, true).addClass("block").removeClass("hidden");


        },
        function () {
            $('.fan-down').stop(true, true).fadeOut().removeClass('flex duration-[.5s]').addClass('hidden');
            $('.f_c').stop(true, true).removeClass('block').addClass('hidden');


        }
    );

    $(".light-down , .light").hover(
        function () {
            $('.light-down').stop(true, true).fadeIn().addClass('flex transition duration-[2s] ease-in-out ').removeClass('hidden');
            $(".l_c").stop(true, true).addClass("block").removeClass("hidden")


        },
        function () {
            $('.light-down').stop(true, true).fadeOut().removeClass('flex duration-[.5s]').addClass('hidden');
            $('.l_c').stop(true, true).removeClass('block').addClass('hidden');


        }
    );

    $(".geyser-down , .geyser").hover(
        function () {
            $('.geyser-down').stop(true, true).fadeIn().addClass('flex transition duration-[2s] ease-in-out ').removeClass('hidden');
            $(".g_c").stop(true, true).addClass("block").removeClass("hidden")


        },
        function () {
            $('.geyser-down').stop(true, true).fadeOut().removeClass('flex duration-[.5s]').addClass('hidden');
            $('.g_c').stop(true, true).removeClass('block').addClass('hidden');


        }
    );

    $(".air-down , .air").hover(
        function () {
            $('.air-down').stop(true, true).fadeIn().addClass('flex transition duration-[2s] ease-in-out ').removeClass('hidden');
            $(".a_c").stop(true, true).addClass("block").removeClass("hidden")


        },
        function () {
            $('.air-down').stop(true, true).fadeOut().removeClass('flex duration-[.5s]').addClass('hidden');
            $('.a_c').stop(true, true).removeClass('block').addClass('hidden');


        }
    );

    $(".home-down , .home").hover(
        function () {
            $('.home-down').stop(true, true).fadeIn().addClass('flex transition duration-[2s] ease-in-out ').removeClass('hidden');
            $(".h_c").stop(true, true).addClass("block").removeClass("hidden")


        },
        function () {
            $('.home-down').stop(true, true).fadeOut().removeClass('flex duration-[.5s]').addClass('hidden');
            $('.h_c').stop(true, true).removeClass('block').addClass('hidden');


        }
    );

    $(".kitchen-down , .kitchen_one").hover(
        function () {
            $('.kitchen-down').stop(true, true).fadeIn().addClass('flex transition duration-[2s] ease-in-out ').removeClass('hidden');
            $(".k_c").stop(true, true).addClass("block").removeClass("hidden")


        },
        function () {
            $('.kitchen-down').stop(true, true).fadeOut().removeClass('flex duration-[.5s]').addClass('hidden');
            $('.k_c').stop(true, true).removeClass('block').addClass('hidden');

        }
    );


    //    // 
    // // // // //  
    //    //
    // 
    $(".for_fil").click(
        function () {
            $(".bg-active").addClass("explore_custom");
            $(".bg-active-svg").removeClass(" bgfill");
            $(".for_fil ").removeClass(" bg-active");
            $(".fan-rev").addClass("bg-active");
            $(".fan-new").addClass("bgfill");

        }
    )
    $(".light-rev").click(
        function () {
            $(".fan-rev").removeClass("bg-active");
            $(".fan-new").removeClass("bgfill");
            $(".light-rev").addClass("bg-active");
            $(".light-new").addClass("bgfill");
        })
    $(".bag-rev").click(
        function () {
            $(".fan-rev").removeClass("bg-active");
            $(".fan-new").removeClass("bgfill");
            $(".light-rev").removeClass("bg-active");
            $(".light-new").removeClass("bgfill");
            $(".bag-rev").addClass("bg-active");
            $(".bag").addClass("bgfill");
        })
    $(".machine-rev").click(
        function () {
            $(".fan-rev").removeClass("bg-active");
            $(".fan-new").removeClass("bgfill");
            $(".light-rev").removeClass("bg-active");
            $(".light-new").removeClass("bgfill");
            $(".machine-rev").addClass("bg-active");
            $(".machine").addClass("bgfill");
        })
    $(".iron-rev").click(
        function () {
            $(".fan-rev").removeClass("bg-active");
            $(".fan-new").removeClass("bgfill");
            $(".light-rev").removeClass("bg-active");
            $(".light-new").removeClass("bgfill");
            $(".iron-rev").addClass("bg-active");
            $(".iron").addClass("bgfill");
        })
    $(".jug-rev").click(
        function () {
            $(".fan-rev").removeClass("bg-active");
            $(".fan-new").removeClass("bgfill");
            $(".light-rev").removeClass("bg-active");
            $(".light-new").removeClass("bgfill");
            $(".jug-rev").addClass("bg-active");
            $(".jug").addClass("bgfill");
        })

});


// dynamic content












$("#black").click(function () {
    $("#img").removeClass("hidden")
    $("#img-add").addClass("hidden")
})
$("#brown").click(function () {
    $("#img-add").removeClass("hidden")
    $("#img").addClass("hidden")
})

$("#white").click(function () {
    $("#img-add-1").removeClass("hidden")
    $("#img-add-2").addClass("hidden")
})
$("#orange").click(function () {
    $("#img-add-2").removeClass("hidden")
    $("#img-add-1").addClass("hidden")
});

$("#brown_1").click(function () {
    $("#img-add-3").removeClass("hidden")
    $("#img-add-4").addClass("hidden")
})
$("#grayBlack").click(function () {
    $("#img-add-4").removeClass("hidden")
    $("#img-add-3").addClass("hidden")
})

$("#dark").click(function () {
    $("#img-add-5").removeClass("hidden")
    $("#img-add-6").addClass("hidden")
})
$("#brown-2").click(function () {
    $("#img-add-6").removeClass("hidden")
    $("#img-add-5").addClass("hidden")
})
$("#white_clr").click(function () {
    $("#img-add-7").removeClass("hidden")
    $("#img-add-8").addClass("hidden")
})
$("#yellow_clr").click(function () {
    $("#img-add-8").removeClass("hidden")
    $("#img-add-7 ").addClass("hidden")
})

$('.for_fil').click(function () {
    $('.tab_content').addClass('hidden');
    let to_show = $(this).data('content');

    $(to_show).removeClass("hidden");

});

$(".same-cls").click(function () {
    $(".same-cls").removeClass("bg-[#005995] text-white").addClass("text-[#005995]");
    $(this).addClass("bg-[#005995] text-white").removeClass("text-[#005995]");
});



/////// / // / / // / / / / 
/// / / // / / / / / // 
// // / / / / //
// / / / //  





$("#on_click_experiance ").click(function () {
    $("#hide_experiance ").toggleClass("hidden");
    $("#add_rotate").toggleClass("rotate-[45deg]");
})
$(" #on_click_experiance_fan").click(function () {
    $("#hide_experiance_fan").toggleClass("hidden");
    $("#add_rotate_fan").toggleClass("rotate-[45deg]");
})
$(" #on_click_experiance_lamp").click(function () {
    $("#hide_experiance_lamp").toggleClass("hidden");
    $("#add_rotate_lamp").toggleClass("rotate-[45deg]");
})
$(" #on_click_experiance_geyser").click(function () {
    $("#hide_experiance_geyser").toggleClass("hidden");
    $("#add_rotate_geyser").toggleClass("rotate-[45deg]");
})
$(" #on_click_experiance_cilling_light").click(function () {
    $("#hide_experiance_cilling_light").toggleClass("hidden");
    $("#add_rotate_cilling_light").toggleClass("rotate-[45deg]");
})
$(" #on_click_experiance_cilling_lamp").click(function () {
    $("#hide_experiance_cilling_lamp").toggleClass("hidden");
    $("#add_rotate_cilling_lamp").toggleClass("rotate-[45deg]");
})
$(" #on_click_experiance_air_fry").click(function () {
    $("#hide_experiance_air_fry").toggleClass("hidden");
    $("#add_rotate_cilling_air_fry").toggleClass("rotate-[45deg]");
})
$(" #on_click_experiance_oven").click(function () {
    $("#hide_experiance_oven").toggleClass("hidden");
    $("#add_rotate_cilling_oven").toggleClass("rotate-[45deg]");
})

$(" #on_click_experiance_juicer").click(function () {
    $("#hide_experiance_juicer").toggleClass("hidden");
    $("#add_rotate_cilling_juicer").toggleClass("rotate-[45deg]");
})

$(document).ready(function () {
    $(document).click(function (event) {
        if (
            !$(event.target).closest("[id^='hide_'], [id^='on_click_experiance']").length
        ) {
            $("[id^='hide_']").addClass("hidden");
            $("[id^='add_rotate']").removeClass("rotate-[45deg]");
        }
    });
});




//   //   //


$("#click_living").click(function () {
    $("#img_hide_living").removeClass("hidden");
    $("#img_hide_bathroom").addClass("hidden");
    $("#img_hide_kitchen").addClass("hidden");
})
$("#click_bathroom").click(function () {
    $("#img_hide_bathroom").removeClass("hidden");
    $("#img_hide_living").addClass("hidden");
    $("#img_hide_kitchen").addClass("hidden");

})

$("#click_kitchen").click(function () {
    $("#img_hide_kitchen").removeClass("hidden");
    $("#img_hide_bathroom").addClass("hidden");
    $("#img_hide_living").addClass("hidden");
})
$("#service").click(function () {
    $("#warranty-down").addClass("hidden")
    $("#track-down").addClass("hidden")
    $("#service-down").removeClass("hidden")
    $("#serv-rght").removeClass("fa-arrow-right")
    $("#serv-rght").addClass("fa-arrow-down")
    $("#trck-rght").addClass("fa-arrow-right")
    $("#trck-rght").removeClass("fa-arrow-down")
    $("#war-rght").addClass("fa-arrow-right")
    $("#war-rght").removeClass("fa-arrow-down")
})
$("#track").click(function () {
    $("#warranty-down").addClass("hidden")
    $("#service-down").addClass("hidden")
    $("#track-down").removeClass("hidden")
    $("#trck-rght").removeClass("fa-arrow-right")
    $("#trck-rght").addClass("fa-arrow-down")
    $("#war-rght").addClass("fa-arrow-right")
    $("#war-rght").removeClass("fa-arrow-down")
    $("#serv-rght").addClass("fa-arrow-right")
    $("#serv-rght").removeClass("fa-arrow-down")

})
$("#warranty").click(function () {
    $("#track-down").addClass("hidden")
    $("#service-down").addClass("hidden")
    $("#warranty-down").removeClass("hidden")
    $("#war-rght").removeClass("fa-arrow-right")
    $("#war-rght").addClass("fa-arrow-down")
    $("#trck-rght").addClass("fa-arrow-right")
    $("#trck-rght").removeClass("fa-arrow-down")
    $("#serv-rght").addClass("fa-arrow-right")
    $("#serv-rght").removeClass("fa-arrow-down")
})

$(".btn-om").click(function () {
    $(".our-mission").removeClass("hidden");
    $(".what-we-offer").addClass("hidden");
    $(".our-goal").addClass("hidden");
    $(".img-om").removeClass("hidden");
    $(".img-wwd").addClass("hidden");
    $(".img-og").addClass("hidden");
    $(".btn-om").removeClass("hover:text-white hover:bg-[#376D9B] bg-transparent").addClass("bg-[#376D9B] text-white ")
    $(".btn-wwd").removeClass("bg-[#376D9B] text-white").addClass(" hover:text-white hover:bg-[#376D9B] bg-transparent text-[#376D9B]")
    $(".btn-og").removeClass("bg-[#376D9B] text-white").addClass(" hover:text-white hover:bg-[#376D9B] bg-transparent text-[#376D9B]")
})
$(".btn-og").click(function () {
    $(".our-goal").removeClass("hidden");
    $(".what-we-offer").addClass("hidden");
    $(".our-mission").addClass("hidden");
    $(".img-og").removeClass("hidden");
    $(".img-wwd").addClass("hidden");
    $(".img-om").addClass("hidden");
    $(".btn-og").removeClass("hover:text-white hover:bg-[#376D9B] bg-transparent").addClass("bg-[#376D9B] text-white ")
    $(".btn-wwd").removeClass("bg-[#376D9B] text-white").addClass(" hover:text-white hover:bg-[#376D9B] bg-transparent text-[#376D9B]")
    $(".btn-om").removeClass("bg-[#376D9B] text-white").addClass(" hover:text-white hover:bg-[#376D9B] bg-transparent text-[#376D9B]")
})
$(".btn-wwd").click(function () {
    $(".what-we-offer").removeClass("hidden");
    $(".our-goal").addClass("hidden");
    $(".our-mission").addClass("hidden");
    $(".img-wwd").removeClass("hidden");
    $(".img-og").addClass("hidden");
    $(".img-om").addClass("hidden");
    $(".btn-wwd").removeClass("hover:text-white hover:bg-[#376D9B] bg-transparent").addClass("bg-[#376D9B] text-white ")
    $(".btn-og").removeClass("bg-[#376D9B] text-white").addClass(" hover:text-white hover:bg-[#376D9B] bg-transparent text-[#376D9B]")
    $(".btn-om").removeClass("bg-[#376D9B] text-white").addClass(" hover:text-white hover:bg-[#376D9B] bg-transparent text-[#376D9B]")
})
