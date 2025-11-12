let product_water = [
    {
        img_light: "../../assets/img/water-1.png",
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
        link: "../../index.html",

    }, 
       {
        img_light: "../../assets/img/RapidJetDLX3LIWHFrontView.png",
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
        link: "../../index.html",

    }, 
  
    
 
       {
        img_light: "../../assets/img/InstaBlissIWHWhiteFrontView.png",
        click_img_light: "../../assets/img/sec_img.png",
        para_light: "Crompton Solairum Qube, 3000W Storage Water Heater",
        span_light: "MRP 4,000.00",
        button_light: "Know More",
        img_add: "white_clr",
        img_rem: "yellow_clr",
        img_add_1_light: "img-add-7",
        img_add_2_light: "img-add-8",
        color: "[#c9c3a3]",
        color_1: "[#4a2523]",
        link: "../../index.html",

    }, 
        {
        img_light: "../../assets/img/SolariumQubeSWH2022FrontView.png",
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
        link: "../../index.html",

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

                         <ul class="p-1 bg-white rounded-3xl flex flex-col justify-center align-middle gap-2 mb-4 ${product_water[iw].hidden_class}">
                            <li class="p-[10px] bg-${product_water[iw].color}  rounded-full bg-change cursor-pointer" id="${product_water[iw].img_add}"></li>
                            <li class="p-[10px] bg-${product_water[iw].color_1} rounded-full cursor-pointer" id="${product_water[iw].img_rem}"></li>
                        </ul>
                        
                    </div>
                </div>
            </div>`

}
