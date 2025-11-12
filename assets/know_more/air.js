let product_air = [
    {
        img_light: "../../assets/img/AuraPAC38_04.png",
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
        link: "../../index.html",

    }, 
    {
        img_light: "../../assets/img/Artboard1_cb209136-a8c5-4059-af50-a45ffb8d30f6.png",
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
        link: "../../index.html",

    }, 
    {
        img_light: "../../assets/img/JEDIaircooler70LPL0.png",
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
        link: "../../index.html",

    }, 
    {
        img_light: "../../assets/img/OzoneClassicH55FrontView.png",
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
        link: "../../index.html",

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

                        
                    </div>
                </div>
            </div>`

}