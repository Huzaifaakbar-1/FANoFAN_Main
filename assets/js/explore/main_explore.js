let product_air = [
    {
        img_light: "assets/img/AuraPAC38_04.png",
        click_img_light: "",
        para_light: "Crompton Aura Personal Air Cooler",
        span_light: "RS 9,000.00",
        button_light: "Know More",
        img_add_light: "",
        img_rem_light: "",
        img_add_1_light: "",
        img_add_2_light: "",
        color_light: "[#8f614a]",
        color_1_light: "[#4a2523]",
        link: "assets/know_more/air.html",
        download: "docs/FanOFan2.docx",

    }, 
    {
        img_light: "assets/img/Artboard1_cb209136-a8c5-4059-af50-a45ffb8d30f6.png",
        click_img_light: "",
        para_light: "Crompton Avancer DAC",
        span_light: "RS 18,000.00",
        button_light: "Know More",
        img_add_light: "",
        img_rem_light: "",
        img_add_1_light: "",
        img_add_2_light: "",
        color_light: "[#8f614a]",
        color_1_light: "[#4a2523]",
        link: "assets/know_more/air.html",
        download: "docs/FanOFan2.docx",

    }, 
    {
        img_light: "assets/img/JEDIaircooler70LPL0.png",
        click_img_light: "",
        para_light: "Crompton Jedi DAC",
        span_light: "RS 17,200.00",
        button_light: "Know More",
        img_add_light: "",
        img_rem_light: "",
        img_add_1_light: "",
        img_add_2_light: "",
        color_light: "[#8f614a]",
        color_1_light: "[#4a2523]",
        link: "assets/know_more/air.html",
        download: "docs/FanOFan2.docx",

    }, 
    {
        img_light: "assets/img/OzoneClassicH55FrontView.png",
        click_img_light: "",
        para_light: "Crompton Ozone Classic H 55",
        span_light: "RS 15,300.00",
        button_light: "Know More",
        img_add_light: "",
        img_rem_light: "",
        img_add_1_light: "",
        img_add_2_light: "",
        color_light: "[#8f614a]",
        color_1_light: "[#4a2523]",
        link: "assets/know_more/air.html",
        download: "docs/FanOFan2.docx",

    }, 
     
]
for (air = 0; air <product_air.length; air++) {
                document.getElementById("product_air").innerHTML += 
                `  <div class=" rounded-3xl  gap-5 p-2 bg-custom-img-card hvr-custom-card flex flex-col  justify-center">
                  <img src="${product_air[air].img_light}" class="cstm-img" id="${product_air[air].img_add_1_light}" alt="" />
                <img src="${product_air[air].click_img_light}" class="hidden cstm-img ${product_air[air].cstm_height}" id="${product_air[air].img_add_2_light}" alt="" />
                <p class="text-gray-500 hover:text-[#08558c] font-semibold pl-3">
                 ${product_air[air].para_light}
                </p>
                <div class="flex flex-col pr-3 pl-3">
                    <span class="text-[18px] text-[#08558c] font-bold">${product_air[air].span_light}</span>
                    <div class="flex justify-between">
                    <a href="${product_air[air].link}">
                        <button class=" bg-white py-2 px-1  text-center rounded-4xl btn-custom-shadow mb-4 mt-3 bg-clr cursor-pointer">
                           ${product_air[air].button_light}
                      </button>
                           </a>
                                      <a href="${product_air[air].download}" download > 
                      <div class=" bg-white p-2  text-center rounded-4xl btn-custom-shadow_download mb-4 mt-3 bg-clr cursor-pointer">
                      <i class="fa-solid fa-download"></i>
                      </div>
                           </a>

                        
                    </div>
                </div>
            </div>`

}
let product = [
    {
        img: "assets/img/1_9352ed6d-106c-4141-a638-5c20b05e74c4.png",
        click_img: "assets/img/hover_img.png",
        para: "Crompton Energion Hyperjet smart BLDC Ceiling Fan",
        span: "RS 5,699.00",
        button: "Know More",
        img_add: "brown",
        img_rem: "black",
        img_add_1: "img-add",
        img_add_2: "img",
        color: "[#c9c3a3]",
        color_1: "black",
        link: "assets/know_more/fan.html",
        download: "docs/FanOFan_CeilingFan_Content.docx",
    },
    {
        img: "assets/img/SnowWhite_451d1758-607b-4c05-8f5b-88d53e85d76d.png",
        click_img: "assets/img/hvr_img_1.png",
        para: "Crompton Silent Pro Fluido Wave 1200mm",
        span: "RS 10,399.00",
        button: "Know More",
        img_add: "white",
        img_rem: "orange",
        img_add_1: "img-add-1",
        img_add_2: "img-add-2",
         color: "[#e4e5e9]",
        color_1: "[#fadacc]",
        link: "assets/know_more/fan.html",
        download: "docs/FanOFan.docx",
    },
    {
        img: "assets/img/BlingGrey_4eaac296-f32d-460e-bba9-5896af119089.png",
        click_img: "assets/img/hvr-brown.png",
        para: "Crompton HS Superflo 1270mm",
        span: "RS 4,999.00",
        button: "Know More",
        img_add: "brown_1",
        img_rem: "grayBlack",
        img_add_1: "img-add-3",
        img_add_2: "img-add-4",
           color: "[#8c8390]",
        color_1: "[#462921]",
        link: "assets/know_more/fan.html",
        download: "docs/FanOFan1.docx",
    },
    {
        img: "assets/img/Energioncookie_Brown__1angle_0baab2d2-b376-4fb5-91cc-a5783f2.png",
        click_img: "assets/img/click_img.png",
        para: "Crompton Energion Hyperjet smart BLDC Ceiling Fan",
        span: "RS 5,699.00",
        button: "Know More",
        img_add: "dark",
        img_rem: "brown-2",
        img_add_1: "img-add-5",
        img_add_2: "img-add-6",
           color: "[#8f614a]",
        color_1: "[#4a2523]",
        link: "assets/know_more/fan.html",
        download: "docs/FanOFan2.docx",
    },
]

for (i = 0; i< product.length; i++) {
    document.getElementById("product").innerHTML +=
         `  <div class=" rounded-3xl  gap-5 p-2 bg-custom-img-card hvr-custom-card flex flex-col  justify-center">
                  <img src="${product[i].img}" class="cstm-img" id="${product[i].img_add_1}" alt="" />
                <img src="${product[i].click_img}" class="hidden cstm-img" id="${product[i].img_add_2}" alt="" />
                <p class="text-gray-500 hover:text-[#08558c] font-semibold pl-3">
                 ${product[i].para}
                </p>
                <div class="flex flex-col pr-3 pl-3">
                    <span class="text-[18px] text-[#08558c] font-bold">${product[i].span}</span>
                    <div class="flex justify-between">
                    <div class="flex gap-5 items-center">
                       <a href="${product[i].link}">
                        <button class=" bg-white py-2 px-1  text-center rounded-4xl btn-custom-shadow mb-4 mt-3 bg-clr cursor-pointer">
                           ${product[i].button}
                      </button>
                           </a>
                       <a href="${product[i].download}" download > 
                      <div class=" bg-white p-2  text-center rounded-4xl btn-custom-shadow_download mb-4 mt-3 bg-clr cursor-pointer">
                      <i class="fa-solid fa-download"></i>
                      </div>
                           </a>
                        </div>

                          <ul class="p-1 bg-white rounded-3xl flex flex-col justify-center align-middle gap-2 mb-4">
                            <li class="p-[10px] bg-${product[i].color} rounded-full bg-change cursor-pointer" id="${product[i].img_add}"></li>
                            <li class="p-[10px] bg-${product[i].color_1} rounded-full cursor-pointer" id="${product[i].img_rem}"></li>
                        </ul>
                    </div>
                </div>
            </div>`;

  
}

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
let product_home = [
    {
        img_light: "assets/img/Untitled-1_d08cd36c-0424-41df-a79c-51353fd6cfd7.png",
        click_img_light: "",
        para_light: "Crompton InstaGlide 1000 W Dry Iron",
        span_light: "RS 1,250.00",
        button_light: "Know More",
        img_add_light: "",
        img_rem_light: "",
        img_add_1_light: "",
        img_add_2_light: "",
        color_light: "[#8f614a]",
        color_1_light: "[#4a2523]",
        link: "assets/know_more/home.html",
        download: "docs/FanOFan2.docx",

    }, 
    {
        img_light: "assets/img/Untitled-1_57a709e2-625b-4842-b3b5-6510bb758b56.png",
        click_img_light: "",
        para_light: "Crompton Insta Fervor 13 Fins 2900W Oil Filled Room Heater",
        span_light: "RS 18,200.00",
        button_light: "Know More",
        img_add_light: "",
        img_rem_light: "",
        img_add_1_light: "",
        img_add_2_light: "",
        color_light: "[#8f614a]",
        color_1_light: "[#4a2523]",
        link: "assets/know_more/home.html",
        download: "docs/FanOFan2.docx",

    }, 
    {
        img_light: "assets/img/Untitled-1_dd0e0f5a-cbc7-4212-b2f4-a84355b26e6d.png",
        click_img_light: "",
        para_light: "Crompton Insta Airohot 2000W Heat convector Room Heater with Blower",
        span_light: "RS 4,800.00",
        button_light: "Know More",
        img_add_light: "",
        img_rem_light: "",
        img_add_1_light: "",
        img_add_2_light: "",
        color_light: "[#8f614a]",
        color_1_light: "[#4a2523]",
        link: "assets/know_more/home.html",
        download: "docs/FanOFan2.docx",

    }, 
    {
        img_light: "assets/img/SingleRodInstaRedLit.png",
        click_img_light: "",
        para_light: "Crompton Insta Red 1000 W Room Heater",
        span_light: "RS 1,300.00",
        button_light: "Know More",
        img_add_light: "",
        img_rem_light: "",
        img_add_1_light: "",
        img_add_2_light: "",
        color_light: "[#8f614a]",
        color_1_light: "[#4a2523]",
        link: "assets/know_more/home.html",
        download: "docs/FanOFan2.docx",

    }, 
]
for (home = 0; home <product_home.length; home++) {
                document.getElementById("product_home").innerHTML += 
                `  <div class=" rounded-3xl  gap-5 p-2 bg-custom-img-card hvr-custom-card flex flex-col  justify-center">
                  <img src="${product_home[home].img_light}" class="cstm-img" id="${product_home[home].img_add_1_light}" alt="" />
                <img src="${product_home[home].click_img_light}" class="hidden cstm-img ${product_home[home].cstm_height}" id="${product_home[home].img_add_2_light}" alt="" />
                <p class="text-gray-500 hover:text-[#08558c] font-semibold pl-3">
                 ${product_home[home].para_light}
                </p>
                <div class="flex flex-col pr-3 pl-3">
                    <span class="text-[18px] text-[#08558c] font-bold">${product_home[home].span_light}</span>
                    <div class="flex justify-between">
                        <a href="${product_home[home].link}">
                        <button class=" bg-white py-2 px-1  text-center rounded-4xl btn-custom-shadow mb-4 mt-3 bg-clr cursor-pointer">
                           ${product_home[home].button_light}
                      </button>
                           </a>
           <a href="${product_home[home].download}" download > 
                      <div class=" bg-white p-2  text-center rounded-4xl btn-custom-shadow_download mb-4 mt-3 bg-clr cursor-pointer">
                      <i class="fa-solid fa-download"></i>
                      </div>
                           </a>
                        
                    </div>
                </div>
            </div>`

}


let product_hot_pick = [
    {
        img: "assets/img/ICT2100WTopView.webp",
        click_img: "",
        para: "Crompton Instaserve Slim 2100 W",
        span: "RS 5,400.00",
        button: "Know More",
        img_add: "",
        img_rem: "",
        img_add_1: "",
        img_add_2: "",
        color: "[#8f614a]",
        color_1: "[#4a2523]",
        hidden_class: "hidden",
        link: "assets/know_more/kitchen.html",
        download: "docs/FanOFan2.docx",


    },
    {
        img: "assets/img/BlingGrey_4eaac296-f32d-460e-bba9-5896af119089.png",
        click_img: "assets/img/hvr-brown.png",
        para: "Crompton HS Superflo 1270mm",
        span: "RS 4,999.00",
        button: "Know More",
        img_add: "brown_1_hot",
        img_rem: "grayBlack_hot",
        img_add_1: "img-add-3",
        img_add_2: "img-add-4",
           color: "[#8c8390]",
        color_1: "[#462921]",
        link: "assets/know_more/fan.html",
        download: "docs/FanOFan2.docx",

    },
    {
        img: "assets/img/RapidJetDLX3LIWHFrontView.png",
        click_img: "",
        para: "Crompton Rapidjet Plus, 2000W Storage",
        span: "RS 8,500.00",
        button: "Know More",
        img_add: "",
        img_rem: "",
        img_add_1: "",
        img_add_2: "",
        color: "[#8f614a]",
        color_1: "[#4a2523]",
        hidden_class: "hidden",
        link: "assets/know_more/water.html",
        download: "docs/FanOFan2.docx",
        download: "docs/FanOFan2.docx",

    }, 
     {
        img: "assets/img/Energioncookie_Brown__1angle_0baab2d2-b376-4fb5-91cc-a5783f2.png",
        click_img: "assets/img/click_img.png",
        para: "Crompton Energion Hyperjet smart BLDC Ceiling Fan",
        span: "RS 5,699.00",
        button: "Know More",
        img_add: "dark",
        img_rem: "brown-2",
        img_add_1: "img-add-5",
        img_add_2: "img-add-6",
           color: "[#8f614a]",
        color_1: "[#4a2523]",
        link: "assets/know_more/fan.html",
        download: "docs/FanOFan2.docx",

    },
  
    
]

for (ht = 0; ht < product_hot_pick.length; ht++) {
    document.getElementById("product_hot_pick").innerHTML +=
        `  <div class=" rounded-3xl  gap-5 p-2 bg-custom-img-card hvr-custom-card flex flex-col ${product_hot_pick[ht].hide_only_one} justify-center">
                  <img src="${product_hot_pick[ht].img}" class="cstm-img" id="${product_hot_pick[ht].img_add_1}" alt="" />
                <img src="${product_hot_pick[ht].click_img}" class="hidden cstm-img" id="${product_hot_pick[ht].img_add_2}" alt="" />
                <p class="text-gray-500 hover:text-[#08558c] font-semibold pl-3">
                 ${product_hot_pick[ht].para}
                </p>
                <div class="flex flex-col pr-3 pl-3">
                    <span class="text-[18px] text-[#08558c] font-bold">${product_hot_pick[ht].span}</span>
                    <div class="flex justify-between">
                    <a href="${product_hot_pick[ht].link}">
                        <button class=" bg-white py-2 px-1  text-center rounded-4xl btn-custom-shadow mb-4 mt-3 bg-clr cursor-pointer">
                           ${product_hot_pick[ht].button}
                      </button>
                           </a>
                                      <a href="${product_hot_pick[ht].download}" download > 
                      <div class=" bg-white p-2  text-center rounded-4xl btn-custom-shadow_download mb-4 mt-3 bg-clr cursor-pointer">
                      <i class="fa-solid fa-download"></i>
                      </div>
                           </a>
                    </div>
                </div>
            </div>`;


}

let product_kitchen = [
    {
        img_light: "assets/img/ICT2100WTopView.webp",
        click_img_light: "",
        para_light: "Crompton Instaserve Slim 2100 W Induction Cooktop | 8 One Touch Cook Menus",
        span_light: "RS 5,400.00",
        button_light: "Know More",
        img_add_light: "",
        img_rem_light: "",
        img_add_1_light: "",
        img_add_2_light: "",
        color_light: "[#8f614a]",
        color_1_light: "[#4a2523]",
        link: "assets/know_more/kitchen.html",
        download: "docs/FanOFan2.docx",

    }, 
    {
        img_light: "assets/img/CromptonSandwichMakerLinesPlateOpenA_1.webp",
        click_img_light: "",
        para_light: "Crompton Instaserve Grill Sandwich Maker",
        span_light: "RS 2,100.00",
        button_light: "Know More",
        img_add_light: "",
        img_rem_light: "",
        img_add_1_light: "",
        img_add_2_light: "",
        color_light: "[#8f614a]",
        color_1_light: "[#4a2523]",
        link: "assets/know_more/kitchen.html",
        download: "docs/FanOFan2.docx",

    }, 
    {
        img_light: "assets/img/Untitled-1_5049b778-fb68-4f5c-8fa4-ee7f34b1659e.png",
        click_img_light: "",
        para_light: "Crompton InstaHot Stainless Steel 1.8 Litre Electric Kettle",
        span_light: "RS 1,500.00",
        button_light: "Know More",
        img_add_light: "",
        img_rem_light: "",
        img_add_1_light: "",
        img_add_2_light: "",
        color_light: "[#8f614a]",
        color_1_light: "[#4a2523]",
        link: "assets/know_more/kitchen.html",
        download: "docs/FanOFan2.docx",

    }, 
    {
        img_light: "assets/img/AmeoNeo750Frontview.webp",
        click_img_light: "",
        para_light: "Crompton Ameo Neo 750-Watt, Mixer Grinder, 3 Stainless Steel JarsCrompton Insta Red 1000 W Room Heater",
        span_light: "RS 6,100.00",
        button_light: "Know More",
        img_add_light: "",
        img_rem_light: "",
        img_add_1_light: "",
        img_add_2_light: "",
        color_light: "[#8f614a]",
        color_1_light: "[#4a2523]",
        link: "assets/know_more/kitchen.html",
        download: "docs/FanOFan2.docx",

    }, 
]

for (kitchen = 0; kitchen <product_kitchen.length; kitchen++) {
                document.getElementById("kitchen").innerHTML += 
                `  <div class=" rounded-3xl  gap-5 p-2 bg-custom-img-card hvr-custom-card flex flex-col  justify-center">
                  <img src="${product_kitchen[kitchen].img_light}" class="cstm-img" id="${product_kitchen[kitchen].img_add_1_light}" alt="" />
                <img src="${product_kitchen[kitchen].click_img_light}" class="hidden cstm-img ${product_kitchen[kitchen].cstm_height}" id="${product_kitchen[kitchen].img_add_2_light}" alt="" />
                <p class="text-gray-500 hover:text-[#08558c] font-semibold pl-3">
                 ${product_kitchen[kitchen].para_light}
                </p>
                <div class="flex flex-col pr-3 pl-3">
                    <span class="text-[18px] text-[#08558c] font-bold">${product_kitchen[kitchen].span_light}</span>
                    <div class="flex justify-between">
                       <a href="${product_kitchen[kitchen].link}">
                        <button class=" bg-white py-2 px-1  text-center rounded-4xl btn-custom-shadow mb-4 mt-3 bg-clr cursor-pointer">
                           ${product_kitchen[kitchen].button_light}
                      </button>
                           </a>
                                      <a href="${product_kitchen[kitchen].download}" download > 
                      <div class=" bg-white p-2  text-center rounded-4xl btn-custom-shadow_download mb-4 mt-3 bg-clr cursor-pointer">
                      <i class="fa-solid fa-download"></i>
                      </div>
                           </a>

                        
                    </div>
                </div>
            </div>`

}


let product_light = [ 
    {
        img_light: "assets/img/Untitled-1_1090ed5d-e583-40eb-b2b0-695b80a5276f.png",
        click_img_light: "",
        para_light: "20W Laser Ray Neo 3 in 1 Led Batten",
        span_light: "RS 750.00",
        button_light: "Know More",
        img_add_light: "",
        img_rem_light: "",
        img_add_1_light: "",
        img_add_2_light: "",
        color_light: "[#8f614a]",
        color_1_light: "[#4a2523]",
        link: "assets/know_more/light.html",
        download: "docs/FanOFan2.docx",


    },
    {
        img_light: "assets/img/ImmensaE27_2df92a79-1a43-459d-ba62-2d8f7b5d4165.png",
        click_img_light: "",
        para_light: "9W Immensa Smart Bulb with Music Mode (E27 Base)",
        span_light: "RS 999.00",
        button_light: "Know More",
        img_add_light: "",
        img_rem_light: "",
        img_add_1_light: "",
        img_add_2_light: "",
        color_light: "[#8f614a]",
        color_1_light: "[#4a2523]",
        link: "assets/know_more/light.html",
        download: "docs/FanOFan2.docx",


    },
    {
        img_light: "assets/img/SL3in1-SQ_Pkof1-removebg-preview_a93e860d-198f-41de-8bb2-cf7.png",
        click_img_light: "",
        para_light: "15W Star Lord 3-in-1 Square Led Recess Panel",
        span_light: "RS 1,500.00",
        button_light: "Know More",
        img_add_light: "",
        img_rem_light: "",
        img_add_1_light: "",
        img_add_2_light: "",
        color_light: "[#8f614a]",
        color_1_light: "[#4a2523]",
        link: "assets/know_more/light.html",
        download: "docs/FanOFan2.docx",


    },
    {
        img_light: "assets/img/String_Light-removebg-preview.png",
        click_img_light: "",
        para_light: "3W Galaxy Led Copper Light",
        span_light: "RS 700.00",
        button_light: "Know More",
        img_add_light: "",
        img_rem_light: "",
        img_add_1_light: "",
        img_add_2_light: "",
        color_light: "[#8f614a]",
        color_1_light: "[#4a2523]",
        link: "assets/know_more/light.html",
        download: "docs/FanOFan2.docx",


    },
]

for (ia = 0; ia< product_light.length; ia++) {
                document.getElementById("product_light").innerHTML += 
                `  <div class=" rounded-3xl  gap-5 p-2 bg-custom-img-card hvr-custom-card flex flex-col  justify-center">
                  <img src="${product_light[ia].img_light}" class="cstm-img" id="${product_light[ia].img_add_1_light}" alt="" />
                <img src="${product_light[ia].click_img_light}" class="hidden cstm-img ${product_light[ia].cstm_height}" id="${product_light[ia].img_add_2_light}" alt="" />
                <p class="text-gray-500 hover:text-[#08558c] font-semibold pl-3">
                 ${product_light[ia].para_light}
                </p>
                <div class="flex flex-col pr-3 pl-3">
                    <span class="text-[18px] text-[#08558c] font-bold">${product_light[ia].span_light}</span>
                    <div class="flex justify-between">
                        <a href="${product_light[ia].link}">
                        <button class=" bg-white py-2 px-1  text-center rounded-4xl btn-custom-shadow mb-4 mt-3 bg-clr cursor-pointer">
                           ${product_light[ia].button_light}
                      </button>
                           </a>
           <a href="${product_light[ia].download}" download > 
                      <div class=" bg-white p-2  text-center rounded-4xl btn-custom-shadow_download mb-4 mt-3 bg-clr cursor-pointer">
                      <i class="fa-solid fa-download"></i>
                      </div>
                           </a>

                        
                    </div>
                </div>
            </div>`

}

let product_water = [
    {
        img_light: "assets/img/water-1.png",
        click_img_light: "",
        para_light: "Crompton Rapidjet Plus Turbo , 3000W Storage Water Heater - 6-L",
        span_light: "RS 9,500.00",
        button_light: "Know More",
        img_add_light: "",
        img_rem_light: "",
        img_add_1_light: "",
        img_add_2_light: "",
        color_light: "[#8f614a]",
        color_1_light: "[#4a2523]",
        hidden_class: "hidden",
        link: "assets/know_more/water.html",
        download: "docs/FanOFan2.docx",

    }, 
       {
        img_light: "assets/img/RapidJetDLX3LIWHFrontView.png",
        click_img_light: "",
        para_light: "Crompton Rapidjet Plus, 2000W Storage Water Heater - 6-L",
        span_light: "RS 8,500.00",
        button_light: "Know More",
        img_add_light: "",
        img_rem_light: "",
        img_add_1_light: "",
        img_add_2_light: "",
        color_light: "[#8f614a]",
        color_1_light: "[#4a2523]",
        hidden_class: "hidden",
        link: "assets/know_more/water.html",
        download: "docs/FanOFan2.docx",

    }, 
  
    
 
       {
        img_light: "assets/img/InstaBlissIWHWhiteFrontView.png",
        click_img_light: "assets/img/sec_img.png",
        para_light: "Crompton Solairum Qube, 3000W Storage Water Heater",
        span_light: "RS 4,000.00",
        button_light: "Know More",
        img_add: "white_clr",
        img_rem: "yellow_clr",
        img_add_1_light: "img-add-7",
        img_add_2_light: "img-add-8",
        color: "[#c9c3a3]",
        color_1: "[#4a2523]",
        link: "assets/know_more/water.html",
        download: "docs/FanOFan2.docx",

    }, 
        {
        img_light: "assets/img/SolariumQubeSWH2022FrontView.png",
        click_img_light: "",
        para_light: "Crompton Rapidjet Plus Turbo , 3000W Storage Water Heater - 6-L",
        span_light: "RS 9,500.00",
        button_light: "Know More",
        img_add_light: "",
        img_rem_light: "",
        img_add_1_light: "",
        img_add_2_light: "",
        color_light: "[#8f614a]",
        color_1_light: "[#4a2523]",
        hidden_class: "hidden",
        link: "assets/know_more/water.html",
        download: "docs/FanOFan2.docx",

    }, 
    
    
  
]

for (iw = 0; iw <product_water.length; iw++) {
                document.getElementById("product_water").innerHTML += 
                `  <div class=" rounded-3xl  gap-5 p-2 bg-custom-img-card hvr-custom-card flex flex-col  justify-center">
                  <img src="${product_water[iw].img_light}" class="cstm-img" id="${product_water[iw].img_add_1_light}" alt="" />
                <img src="${product_water[iw].click_img_light}" class="hidden cstm-img ${product_water[iw].cstm_height}" id="${product_water[iw].img_add_2_light}" alt="" />
                <p class="text-gray-500 hover:text-[#08558c] font-semibold pl-3">
                 ${product_water[iw].para_light}
                </p>
                <div class="flex flex-col pr-3 pl-3">
                    <span class="text-[18px] text-[#08558c] font-bold">${product_water[iw].span_light}</span>
                    <div class="flex justify-between">
                     <a href="${product_water[iw].link}">
                        <button class=" bg-white py-2 px-1  text-center rounded-4xl btn-custom-shadow mb-4 mt-3 bg-clr cursor-pointer">
                           ${product_water[iw].button_light}
                      </button>
                           </a>
                                      <a href="${product_water[iw].download}" download > 
                      <div class=" bg-white p-2  text-center rounded-4xl btn-custom-shadow_download mb-4 mt-3 bg-clr cursor-pointer">
                      <i class="fa-solid fa-download"></i>
                      </div>
                           </a>

                         <ul class="p-1 bg-white rounded-3xl flex flex-col justify-center align-middle gap-2 mb-4 ${product_water[iw].hidden_class}">
                            <li class="p-[10px] bg-${product_water[iw].color}  rounded-full bg-change cursor-pointer" id="${product_water[iw].img_add}"></li>
                            <li class="p-[10px] bg-${product_water[iw].color_1} rounded-full cursor-pointer" id="${product_water[iw].img_rem}"></li>
                        </ul>
                        
                    </div>
                </div>
            </div>`

}
