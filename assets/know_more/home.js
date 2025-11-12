let product_home = [
    {
        img_light: "../../assets/img/Untitled-1_d08cd36c-0424-41df-a79c-51353fd6cfd7.png",
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
        link: "../../index.html",

    }, 
    {
        img_light: "../../assets/img/Untitled-1_57a709e2-625b-4842-b3b5-6510bb758b56.png",
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
        link: "../../index.html",

    }, 
    {
        img_light: "../../assets/img/Untitled-1_dd0e0f5a-cbc7-4212-b2f4-a84355b26e6d.png",
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
        link: "../../index.html",

    }, 
    {
        img_light: "../../assets/img/SingleRodInstaRedLit.png",
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
        link: "../../index.html",

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

                        
                    </div>
                </div>
            </div>`

}