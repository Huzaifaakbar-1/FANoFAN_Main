let product_kitchen = [
    {
        img_light: "../../assets/img/ICT2100WTopView.webp",
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
        link: "../../index.html",

    }, 
    {
        img_light: "../../assets/img/CromptonSandwichMakerLinesPlateOpenA_1.webp",
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
        link: "../../index.html",

    }, 
    {
        img_light: "../../assets/img/Untitled-1_5049b778-fb68-4f5c-8fa4-ee7f34b1659e.png",
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
        link: "../../index.html",

    }, 
    {
        img_light: "../../assets/img/AmeoNeo750Frontview.webp",
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
        link: "../../index.html",

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

                        
                    </div>
                </div>
            </div>`

}