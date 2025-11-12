let product = [
    {
        img: "../../assets/img/1_9352ed6d-106c-4141-a638-5c20b05e74c4.png",
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
        link: "../../index.html",
    },
    {
        img: "../../assets/img/SnowWhite_451d1758-607b-4c05-8f5b-88d53e85d76d.png",
        click_img: "assets/img/hvr_img_1.png",
        para: "Crompton Silent Pro Fluido Wave 1200mm",
        span: "₹10,399.00",
        button: "Know More",
        img_add: "white",
        img_rem: "orange",
        img_add_1: "img-add-1",
        img_add_2: "img-add-2",
         color: "[#e4e5e9]",
        color_1: "[#fadacc]",
        link: "../../index.html",
    },
    {
        img: "../../assets/img/BlingGrey_4eaac296-f32d-460e-bba9-5896af119089.png",
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
        link: "../../index.html",
    },
    {
        img: "../../assets/img/Energioncookie_Brown__1angle_0baab2d2-b376-4fb5-91cc-a5783f2.png",
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
        link: "../../index.html",
    },
     {
        img: "../../assets/img/Energioncookie_Brown__1angle_0baab2d2-b376-4fb5-91cc-a5783f2.png",
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
        link: "../../index.html",
    },
  
    {
        img: "../../assets/img/BlingGrey_4eaac296-f32d-460e-bba9-5896af119089.png",
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
        link: "../../index.html",
    },
      {
        img: "../../assets/img/SnowWhite_451d1758-607b-4c05-8f5b-88d53e85d76d.png",
        click_img: "assets/img/hvr_img_1.png",
        para: "Crompton Silent Pro Fluido Wave 1200mm",
        span: "₹10,399.00",
        button: "Know More",
        img_add: "white",
        img_rem: "orange",
        img_add_1: "img-add-1",
        img_add_2: "img-add-2",
         color: "[#e4e5e9]",
        color_1: "[#fadacc]",
        link: "../../index.html",
    },
       {
        img: "../../assets/img/1_9352ed6d-106c-4141-a638-5c20b05e74c4.png",
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
        link: "../../index.html",
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
                       <a href="${product[i].link}">
                        <button class=" bg-white py-2 px-1  text-center rounded-4xl btn-custom-shadow mb-4 mt-3 bg-clr cursor-pointer">
                           ${product[i].button}
                      </button>
                           </a>


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