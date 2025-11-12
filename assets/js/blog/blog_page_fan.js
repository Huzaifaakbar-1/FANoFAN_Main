let product = [
    {
        img: "assets/img/ma-2.8.pngtyps-of-exhaust-fan-v1723112814304.png",
        para: "Crompton Energion Hyperjet smart BLDC Ceiling Fan",
        span: "RS 5,699.00",
        button: "Know More",
        img_add: "brown",
        img_rem: "black",
        img_add_1: "img-add",
        img_add_2: "img",
      
        link: "assets/know_more/fan.html",
    },
    {
        img: "assets/img/Exhaust-Fan-Size-Chart-v1723111571418.png",
        para: "Crompton Silent Pro Fluido Wave 1200mm",
        span: "₹10,399.00",
        button: "Know More",
        img_add: "white",
        img_rem: "orange",
        img_add_1: "img-add-1",
        img_add_2: "img-add-2",
      
        link: "assets/know_more/fan.html",
    },
    {
        img: "assets/img/energy-consmpsn-mob-v1730901396447.png",
        para: "Crompton HS Superflo 1270mm",
        span: "RS 4,999.00",
        button: "Know More",
        img_add: "brown_1",
        img_rem: "grayBlack",
        img_add_1: "img-add-3",
        img_add_2: "img-add-4",
        link: "assets/know_more/fan.html",
    },
    {
        img: "assets/img/How-Exhaust-Fan-Works-v1723111298936.png",
        para: "Crompton Energion Hyperjet smart BLDC Ceiling Fan",
        span: "RS 5,699.00",
        button: "Know More",
        img_add: "dark",
        img_rem: "brown-2",
        img_add_1: "img-add-5",
        img_add_2: "img-add-6",
        link: "assets/know_more/fan.html",
    },
     {
        img: "assets/img/fan-1-v1698311940090-compressed-v1725970164043.webp",
        para: "Crompton Energion Hyperjet smart BLDC Ceiling Fan",
        span: "RS 5,699.00",
        button: "Know More",
        img_add: "brown",
        img_rem: "black",
        img_add_1: "img-add",
        img_add_2: "img",
      
        link: "assets/know_more/fan.html",
    },
    {
        img: "assets/img/how-to-clean-a-table-fan--ma-v1714477106410.png",
        para: "Crompton Silent Pro Fluido Wave 1200mm",
        span: "₹10,399.00",
        button: "Know More",
        img_add: "white",
        img_rem: "orange",
        img_add_1: "img-add-1",
        img_add_2: "img-add-2",
      
        link: "assets/know_more/fan.html",
    },

]

for (i = 0; i< product.length; i++) {
    document.getElementById("product_blog").innerHTML +=
        

            `<div class="relative  res_mr_blog">
                    <img src="${product[i].img}"
                        class="rounded-4xl mt-5" alt="">
                    <div class="img-shade absolute bottom-0 left-0 w-full h-[50%] rounded-4xl"></div>

                    <div class="pos_inner_img absolute bottom-10 md:p-5 pl-5">
                        <div class="flex items-center gap-2">
                            <img src="assets/img/fans.svg" class="w-[26px]" alt=""><span
                                class="text-[#ffb645] text-[16px] font-semibold">Fan Guide</span>
                        </div>
                        <div class="">
                            <p class="md:text-[22px] text-[18px] text-white font-semibold mt-3 z-10 md:block hidden">
                                 ${product[i].para}
                            </p>
                            <a href="../../read_more/fan_read.html">
                            <div class="flex items-center btn_cromp z-10">
                                <button class="text-white font-semibold mt-3 cursor-pointer z-10">Read More</button>
                                <img src="../../assets/img/icon_rm_right.svg" class="mt-3 ml-2 img_cromp z-10" alt="">
                                </div>
                            </a>

                        </div>
                    </div>
                </div>`

  
}

let product_light = [ 
    {
        img_light: "assets/img/xsmall-dinning-room-light-v1723799670067.png",
        click_img_light: "",
        para_light: "20W Laser Ray Neo 3 in 1 Led Batten",
        span_light: "MRP ₹750.00",
        button_light: "Know More",
        img_add_light: "",
        img_rem_light: "",
        img_add_1_light: "",
        img_add_2_light: "",
        color_light: "[#8f614a]",
        color_1_light: "[#4a2523]",
        link: "assets/know_more/light.html",

    },
    {
        img_light: "assets/img/7-Easy-False-Ceiling-Light-Ideas-v1723799795046.png",
        click_img_light: "",
        para_light: "9W Immensa Smart Bulb with Music Mode (E27 Base)",
        span_light: "MRP ₹999.00",
        button_light: "Know More",
        img_add_light: "",
        img_rem_light: "",
        img_add_1_light: "",
        img_add_2_light: "",
        color_light: "[#8f614a]",
        color_1_light: "[#4a2523]",
        link: "assets/know_more/light.html",

    },
    {
        img_light: "assets/img/study-room-light-v1723783370968.png",
        click_img_light: "",
        para_light: "15W Star Lord 3-in-1 Square Led Recess Panel",
        span_light: "MRP ₹1,500.00",
        button_light: "Know More",
        img_add_light: "",
        img_rem_light: "",
        img_add_1_light: "",
        img_add_2_light: "",
        color_light: "[#8f614a]",
        color_1_light: "[#4a2523]",
        link: "assets/know_more/light.html",

    },
    {
        img_light: "assets/img/terrace-light-v1723629529754.png",
        click_img_light: "",
        para_light: "3W Galaxy Led Copper Light",
        span_light: "MRP ₹700.00",
        button_light: "Know More",
        img_add_light: "",
        img_rem_light: "",
        img_add_1_light: "",
        img_add_2_light: "",
        color_light: "[#8f614a]",
        color_1_light: "[#4a2523]",
        link: "assets/know_more/light.html",

    },
    {
        img_light: "assets/img/diffrnt-typs-of-light-v1723543595472.png",
        click_img_light: "",
        para_light: "15W Star Lord 3-in-1 Square Led Recess Panel",
        span_light: "MRP ₹1,500.00",
        button_light: "Know More",
        img_add_light: "",
        img_rem_light: "",
        img_add_1_light: "",
        img_add_2_light: "",
        color_light: "[#8f614a]",
        color_1_light: "[#4a2523]",
        link: "assets/know_more/light.html",

    },
    {
        img_light: "assets/img/how-led-light-works-v1723452368220.png",
        click_img_light: "",
        para_light: "3W Galaxy Led Copper Light",
        span_light: "MRP ₹700.00",
        button_light: "Know More",
        img_add_light: "",
        img_rem_light: "",
        img_add_1_light: "",
        img_add_2_light: "",
        color_light: "[#8f614a]",
        color_1_light: "[#4a2523]",
        link: "assets/know_more/light.html",

    },
]

for (ia = 0; ia< product_light.length; ia++) {
                document.getElementById("product_light_blog").innerHTML += 
              
            `<div class="relative  res_mr_blog">
                    <img src="${product_light[ia].img_light}"
                        class="rounded-4xl mt-5" alt="">
                    <div class="img-shade absolute bottom-0 left-0 w-full h-[50%] rounded-4xl"></div>

                    <div class="pos_inner_img absolute bottom-10 md:p-5 pl-5">
                        <div class="flex items-center gap-2">
                            <img src="assets/img/fans.svg" class="w-[26px]" alt=""><span
                                class="text-[#ffb645] text-[16px] font-semibold">Fan Guide</span>
                        </div>
                        <div class="">
                            <p class="md:text-[22px] text-[18px] text-white font-semibold mt-3 z-10 md:block hidden">
                                 ${product_light[ia].para_light}
                            </p>
                            <div class="flex items-center btn_cromp z-10">
                                <button class="text-white font-semibold mt-3 cursor-pointer z-10">Read More</button>
                                <img src="../../assets/img/icon_rm_right.svg" class="mt-3 ml-2 img_cromp z-10" alt="">
                            </div>
                        </div>
                    </div>
                </div>`
}

let product_home = [
    {
        img_light: "assets/img/5-v1695038121474-compressed-v1725970304382.webp",
        click_img_light: "",
        para_light: "Crompton InstaGlide 1000 W Dry Iron",
        span_light: "MRP ₹1,250.00",
        button_light: "Know More",
        img_add_light: "",
        img_rem_light: "",
        img_add_1_light: "",
        img_add_2_light: "",
        color_light: "[#8f614a]",
        color_1_light: "[#4a2523]",
        link: "assets/know_more/home.html",

    }, 
    {
        img_light: "assets/img/wtr-htr-wttge-v1717060291769.jpg",
        click_img_light: "",
        para_light: "Crompton Insta Fervor 13 Fins 2900W Oil Filled Room Heater",
        span_light: "MRP ₹18,200.00",
        button_light: "Know More",
        img_add_light: "",
        img_rem_light: "",
        img_add_1_light: "",
        img_add_2_light: "",
        color_light: "[#8f614a]",
        color_1_light: "[#4a2523]",
        link: "assets/know_more/home.html",

    }, 
    {
        img_light: "assets/img/How-to-use-Geyser-in-bathroom-v1717069034997.jpg",
        click_img_light: "",
        para_light: "Crompton Insta Airohot 2000W Heat convector Room Heater with Blower",
        span_light: "MRP ₹4,800.00",
        button_light: "Know More",
        img_add_light: "",
        img_rem_light: "",
        img_add_1_light: "",
        img_add_2_light: "",
        color_light: "[#8f614a]",
        color_1_light: "[#4a2523]",
        link: "assets/know_more/home.html",

    }, 
    {
        img_light: "assets/img/wtr-heater-components-v1717130978737.jpg",
        click_img_light: "",
        para_light: "Crompton Insta Red 1000 W Room Heater",
        span_light: "MRP ₹1,300.00",
        button_light: "Know More",
        img_add_light: "",
        img_rem_light: "",
        img_add_1_light: "",
        img_add_2_light: "",
        color_light: "[#8f614a]",
        color_1_light: "[#4a2523]",
        link: "assets/know_more/home.html",

    }, 
    {
        img_light: "assets/img/Solarium-MA-(4)-(1)-v1758272419763.jpg",
        click_img_light: "",
        para_light: "Crompton Insta Red 1000 W Room Heater",
        span_light: "MRP ₹1,300.00",
        button_light: "Know More",
        img_add_light: "",
        img_rem_light: "",
        img_add_1_light: "",
        img_add_2_light: "",
        color_light: "[#8f614a]",
        color_1_light: "[#4a2523]",
        link: "assets/know_more/home.html",

    }, 
    {
        img_light: "assets/img/wtr-htr-wttge-v1717060291769.jpg",
        click_img_light: "",
        para_light: "Crompton Insta Red 1000 W Room Heater",
        span_light: "MRP ₹1,300.00",
        button_light: "Know More",
        img_add_light: "",
        img_rem_light: "",
        img_add_1_light: "",
        img_add_2_light: "",
        color_light: "[#8f614a]",
        color_1_light: "[#4a2523]",
        link: "assets/know_more/home.html",

    }, 
]
for (home = 0; home <product_home.length; home++) {
                document.getElementById("product_home_blog").innerHTML += 
                 `<div class="relative  res_mr_blog">
                    <img src="${product_home[home].img_light}"
                        class="rounded-4xl mt-5" alt="">
                    <div class="img-shade absolute bottom-0 left-0 w-full h-[50%] rounded-4xl"></div>

                    <div class="pos_inner_img absolute bottom-10 md:p-5 pl-5">
                        <div class="flex items-center gap-2">
                            <img src="assets/img/fans.svg" class="w-[26px]" alt=""><span
                                class="text-[#ffb645] text-[16px] font-semibold">Fan Guide</span>
                        </div>
                        <div class="">
                            <p class="md:text-[22px] text-[18px] text-white font-semibold mt-3 z-10 md:block hidden">
                                 ${product_home[home].para_light}
                            </p>
                            <div class="flex items-center btn_cromp z-10">
                                <button class="text-white font-semibold mt-3 cursor-pointer z-10">Read More</button>
                                <img src="../../assets/img/icon_rm_right.svg" class="mt-3 ml-2 img_cromp z-10" alt="">
                            </div>
                        </div>
                    </div>
                </div>`

}