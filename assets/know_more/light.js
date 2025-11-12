let product_light = [ 
    {
        img_light: "../../assets/img/Untitled-1_1090ed5d-e583-40eb-b2b0-695b80a5276f.png",
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
        link: "../../index.html",

    },
    {
        img_light: "../../assets/img/ImmensaE27_2df92a79-1a43-459d-ba62-2d8f7b5d4165.png",
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
        link: "../../index.html",

    },
    {
        img_light: "../../assets/img/SL3in1-SQ_Pkof1-removebg-preview_a93e860d-198f-41de-8bb2-cf7.png",
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
        link: "../../index.html",

    },
    {
        img_light: "../../assets/img/String_Light-removebg-preview.png",
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
        link: "../../index.html",

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


                        
                    </div>
                </div>
            </div>`

}