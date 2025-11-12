navigation = [
  {
    index: "../../index.html",
    about: "../../about.html",
    blog: "../../blog.html",
    customer: "../../customer.html",
    gallery: "../../gallery.html",
    contact: "../../contact.html",
    ceilling_fan: "../../assets/fan/celling_fan.html",
    table_fan: "../../assets/fan/table_fan.html",
    wall_mounted: "../../assets/fan/wall_mounted_fan.html",
    pedastal_fan: "../../assets/fan/padestal_fan.html ",
    exhaust_fan: "../../assets/fan/exhaust_fan.html",
    batten: "../../assets/light/battens.html",
    immersion: "../../assets/geyser/immersion_rod.html",
    desert_cooler: "../../assets/air/desert_coolers.html",
    fabric: "../../assets/home/fabric.html",
    brewing: "../../assets/kitchen/brewings.html",
  }
]

for (navi = 0; navi < navigation.length; navi++) {
  main = document.getElementById("nav");
  main.innerHTML += `
<div class="w-full lg:border-b lg:fixed navig z-1000 bg-white top-0">
    <div class="w-full px-4">
      <nav class="flex flex-wrap items-center justify-between py-3">
        <div id="navbar-menu" class="hidden w-full lg:flex lg:items-center lg:justify-center justify-between">
          <div class="flex items-center justify-between w-full lg:w-auto">
            <a href="#" class="flex items-center space-x-2">
              <h1 class="text-3xl font-bold text-[#005995]"><a href="${navigation[navi].index}">FANoFAN</a></h1>
            </a>
            <button class="text-gray-700 text-2xl focus:outline-none lg:hidden" id="navbar-toggle">
              <i class="fas fa-bars"></i>
            </button>
          </div>
          <ul class="flex flex-col md:flex-row md:space-x-12 lg:space-x-6 text-center mb-0 lg:text-left">
          <li>
              <a href="${navigation[navi].index}" class="block py-2 text-black font-medium custon-under md:text-[14px]">HOME</a>
            </li>  
          <li class="flex items-center py-2 custon-under justify-center font-medium text-black  md:text-[14px] down cursor-pointer">
                CATEGORIES
                <img src="../../assets/img/arrow-down.png" alt="" class="h-5 ml-1 caret-down" />
                <img src="../../assets/img/caret-up-thin-svgrepo-com (4).svg" class="h-5 ml-1 hidden caret-up" alt="">
              </a>
            </li>
            
            <li>
              <a href="${navigation[navi].about}" class="block py-2 text-black font-medium custon-under md:text-[14px]">ABOUT US</a>
            </li>
            <li>
              <a href="${navigation[navi].blog}" class="block py-2 text-black font-medium custon-under md:text-[14px]">BLOG</a>
            </li>
            <li>
              <a href="${navigation[navi].gallery}" class="block py-2 text-black font-medium custon-under md:text-[14px]">GALLERY</a>
            </li>
            <li>
              <a href="${navigation[navi].customer}" class="block py-2 text-black font-medium custon-under md:text-[14px]">CUSTOMER CARE</a>
            </li>
            <li>
              <a href="${navigation[navi].contact}" class="block py-2 text-black font-medium custon-under md:text-[14px]">CONTACT US</a>
            </li>
          </ul>
          <div class="flex items-center space-x-6">
            <a href="https://api.whatsapp.com/send/?phone=03122248228&text=Hi&type=phone_number&app_absent=0" class="text-black text-xl bef">
              <i class="fa-brands fa-whatsapp"></i>
            </a>
              <i class="fa-solid fa-magnifying-glass serch-btn cursor-pointer"></i>
          </div>
        </div>
      </nav>
    </div>
  </div>
  <!-- end -->

    <div class="w-fill border-b p-4 lg:hidden">
    <div class="flex justify-between relative">
    <div class="">
      <a href="${navigation[navi].index}">
        <h1 class="text-3xl font-bold text-[#005995]">FANoFAN</h1>
      </a>
    </div>
    <div class="ham flex items-center " id="mid_ham">
      <img src="../../assets/img/burger-menu-svgrepo-com.svg" class="h-7" alt="">
    </div>
    </div>
    <div class="w-full bg-white z-100 hidden h-screen" id="mid_nav">
       <ul class="flex flex-col mb-0 lg:text-left absolute right-0 top-[74px] z-100 bg-white w-full pl-5">
       <li>
              <a href="${navigation[navi].index}" class="block py-2 text-black font-medium custon-under md:text-[14px]">HOME</a>
            </li>    
            <div class="relative"> 
       <li class="">
              <a href="#" id="cat_mob"  class="flex items-center py-2 custon-under  font-medium text-black transition md:text-[14px]">
                CATEGORIES 
                <div class="" id="rtd"><i class="fa-solid fa-arrow-right" ></i></div>
                <div class="hidden" id="dtr"><i class="fa-solid fa-arrow-down " ></i></div>
              </a>
            </li>
                    <div class="absolute drop_cat bg-white z-9999 hidden">
                    <ul>
                <li class="">
              <a href="${navigation[navi].ceilling_fan}"  class="flex  py-2 custon-under  font-medium text-black transition md:text-[14px]">
                FAN
              </a>
            </li>
                <li class="${navigation[navi].batten}">
              <a href="#"  class="flex  py-2 custon-under  font-medium text-black transition md:text-[14px]">
                LIGHT
              </a>
            </li>
                <li class="">
              <a href="${navigation[navi].immersion}"  class="flex  py-2 custon-under  font-medium text-black transition md:text-[14px]">
                Geyser/Water
              </a>
            </li>
                <li class="">
              <a href="${navigation[navi].desert_cooler}"  class="flex  py-2 custon-under  font-medium text-black transition md:text-[14px]">
                AIR COOLERS
              </a>
            </li>
                <li class="">
              <a href="${navigation[navi].fabric}"  class="flex  py-2 custon-under  font-medium text-black transition md:text-[14px]">
                HOME APPLIANCES
              </a>
            </li>
                <li class="">
              <a href="${navigation[navi].brewing}"  class="flex  py-2 custon-under  font-medium text-black transition md:text-[14px]">
              KITCHEN APPLIANCES
              </a>
            </li>
            </ul>
            </div>
            </div>
    
            
            <li>
              <a href="${navigation[navi].about}" class="block py-2 text-black font-medium custon-under md:text-[14px]">ABOUT US</a>
            </li>
               <li>
              <a href="${navigation[navi].blog}" class="block py-2 text-black font-medium custon-under md:text-[14px]">BLOG</a>
            </li>
            <li>
              <a href="${navigation[navi].gallery}" class="block py-2 text-black font-medium custon-under md:text-[14px]">GALLERY</a>
            </li>
            <li>
              <a href="${navigation[navi].customer}" class="block py-2 text-black font-medium custon-under md:text-[14px]">CUSTOMER CARE</a>
            </li>
            <li>
            <a href="${navigation[navi].contact}" class="block py-2 text-black font-medium custon-under md:text-[14px]">CONTACT US</a>
            </li>

            <div class="flex items-center space-x-6">
              <a href="https://api.whatsapp.com/send/?phone=03122248228&text=Hi&type=phone_number&app_absent=0" class="text-black text-xl bef">
                <i class="fa-brands fa-whatsapp"></i>
              </a>
              <a href="" class="text-black text-xl">
                <i class="fa-solid fa-magnifying-glass"></i>
              </a>
            </div>
          </ul>
    <!-- </div> -->
    </div>
  </div>

<!-- search -->
  <div class="w-full bg-white p-4 md:fixed hidden lg:top-[7%]  click-srch-btn_1 md:top-[7%] z-1000" >
    <div class="relative   p-7 z-1000">
  <input type="text" class="lg:w-4/12 md:w-6/12 bg-transparent border-0 border-b-2 rounded-b-2xl " placeholder="What are you looking for.."  name="" id="">
  <i class="fas fa-search text-black absolute lg:left-[32%] md:left-[45%] lg:bottom-8 cursor-pointer"></i>
  </div>
</div>
<!-- end -->
  <!-- Dropdown Categories -->
  <div id="" class="w-full hidden border-b p-0 m-0 top-[62px] fixed z-100 bg-white drop">
    <div class="container mx-auto px-4">
      <div class="flex flex-6 justify-around text-center relative">
        <div class="cursor-pointer p-3  fan nav-hvr nav-hvr" id="">
          <img src="../../assets/img/fan.svg" class="mx-auto h-12 fil hvr-nav hvr-nav" alt="" />
          <p class="font-medium mt-2">Fans</p>
        <div class="hidden f_c z-1000 absolute bottom-[-15px] left-[5.9%]"><i class="fa-solid fa-caret-down  " style="color: rgb(148, 148, 148);"></i></div>
        </div>
        <div class="cursor-pointer p-3 light nav-hvr pt-[27px]" id="">
          <img src="../../assets/img/lights.svg" class="mx-auto h-12 fil hvr-nav hover:fill-amber-100" alt="" />
          <p class="font-medium mt-2">Lights</p>
          <div class="z-1000 absolute bottom-[-15px] left-[19%]  hidden l_c"><i class="fa-solid fa-caret-down" style="color: rgb(148, 148, 148);"></i></div>
        </div>
        <div class="cursor-pointer p-3 geyser nav-hvr" id="">
          <img src="../../assets/img/water-heater.svg" class="mx-auto h-12 fil hvr-nav" alt="" />
          <p class="font-medium mt-2">Geysers/Water Heaters</p>
          <div class="z-1000 absolute bottom-[-15px] left-[36%]  hidden g_c"><i class="fa-solid fa-caret-down" style="color: rgb(148, 148, 148);"></i></div>
        </div>
        <div class="cursor-pointer p-3 air nav-hvr" id="">
          <img src="../../assets/img/air-coolers.svg" class="mx-auto h-12 fil hvr-nav" alt="" />
          <p class="font-medium mt-2">Air Coolers</p>
          <div class="z-1000 absolute bottom-[-15px] right-[44.5%]  hidden a_c"><i class="fa-solid fa-caret-down" style="color: rgb(148, 148, 148);"></i></div>
        </div>
        <div class="cursor-pointer p-3 home nav-hvr" id="">
          <img src="../../assets/img/home-appliances.svg" class="mx-auto h-12 fil hvr-nav" alt="" />
          <p class="font-medium mt-2">Home Appliances</p>
          <div class="z-1000 absolute bottom-[-15px] right-[28%]  hidden h_c"><i class="fa-solid fa-caret-down" style="color: rgb(148, 148, 148);"></i></div>
        </div>
        <div class="cursor-pointer p-3 kitchen_one nav-hvr" id="">
          <img src="../../assets/img/kitchen-appliances.svg" class="mx-auto h-12 fil hvr-nav" alt="" />
          <p class="font-medium mt-2">Kitchen Appliances</p>
          <div class="z-1000 absolute bottom-[-15px] right-[8.5%]  hidden k_c"><i class="fa-solid fa-caret-down" style="color: rgb(148, 148, 148);"></i></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Dropdown Fans -->
  <div id="" class="w-full fan-down hidden border-b py-4 mb-0 fixed top-[167px] z-40 bg-white">
    <div class="container mx-auto px-4">
      <div class="flex flex-5 justify-around gap-4 text-center">
        <div class="nav-hvr">
          <a href="${navigation[navi].ceilling_fan}"><img src="../../assets/img/NITEO_Fan_2x_afff928f-3b1d-4264-b52f-e0425b341c6c.png"  class="mx-auto h-28 object-contain hvr-nav" alt="" />
          <p class="font-medium mt-2">Ceiling Fans</p></a>
        </div>
        <div class="nav-hvr">
          <a href= "${navigation[navi].table_fan}">  
          <img src="../../assets/img/TABLE_FAN_400_GALE_PLUS__BLACK_RED__5_angle.png" class="mx-auto h-28 object-contain hvr-nav"
          alt="" />
          <p class="font-medium mt-2">Table Fans</p></a>
        </div>
        <div class="nav-hvr">
           <a href=" ${navigation[navi].wall_mounted}"> <img src="../../assets/img/Gale_Plus_wall_Fan_400_MM_Black_Red__1st_angle.png" class="mx-auto h-28 object-contain hvr-nav"
          alt="" />
          <p class="font-medium mt-2">Wall Mounted Fans</p></a>
        </div>
        <div class="nav-hvr">
           <a href="${navigation[navi].pedastal_fan}">
          <img src="../../assets/img/Brizstar_farrata_500mm_pedestal_fan_1st_angle.png" class="mx-auto h-28 object-contain hvr-nav"
           alt="" />
          <p class="font-medium mt-2">Pedestal Fans</p></a>
        </div>
        <div class="nav-hvr">
          <a href=" ${navigation[navi].exhaust_fan}"><img src="../../assets/img/Brisk_air_neo_150mm_White__1_angle.png" class="mx-auto h-28 object-contain hvr-nav" alt="" />
          <p class="font-medium mt-2">Exhaust Fans</p></a>
        </div>
      </div>
    </div>
  </div>
 <!-- Dropdown Lights -->
  <div id="" class="w-full light-down hidden border-b py-4 mb-0 fixed top-[167px] z-40  bg-white">
    <div class="container mx-auto px-4">
      <div class="flex flex-6 justify-between text-center">
        <div class="nav-hvr">
          <a href=" ${navigation[navi].batten}"><img src="../../assets/img/ceiling-lights.png" class="mx-auto h-28 object-contain hvr-nav" alt="" />
          <p class="font-medium mt-2">Ceiling Lights</p></a>
        </div>
        <div class="nav-hvr">
          <a href=" ${navigation[navi].batten}"><img src="../../assets/img/Batten.png" class="mx-auto h-28 object-contain hvr-nav" alt="" />
          <p class="font-medium mt-2"> Battens</p></a>
        </div>
        <div class="nav-hvr">
          <a href=" ${navigation[navi].batten}"><img src="../../assets/img/bulb.webp" class="mx-auto h-28 object-contain hvr-nav" alt="" />
          <p class="font-medium mt-2"> Bulb</p></a>
        </div>
        <div class="nav-hvr">
          <a href=" ${navigation[navi].batten}"><img src="../../assets/img/RovelloTableLamp.png" class="mx-auto h-28 object-contain hvr-nav" alt="" />
          <p class="font-medium mt-2"> Table Lamp</p></a>
        </div>
        <div class="nav-hvr">
          <a href=" ${navigation[navi].batten}"><img src="../../assets/img/LED_Flood_Light.png" class="mx-auto h-28 object-contain hvr-nav" alt="" />
          <p class="font-medium mt-2"> Outdoor Light</p></a>
        </div>
        <div class="nav-hvr">
          <a href=" ${navigation[navi].batten}"><img src="../../assets/img/png.png" class="mx-auto h-28 object-contain hvr-nav" alt="" />
          <p class="font-medium mt-2"> Professional Light</p></a>
        </div>
      </div>
    </div>
  </div>
  <!-- geyser -->
  <div id="" class="w-full geyser-down hidden border-b py-4 mb-0 fixed top-[167px] z-40  bg-white">
    <div class="container mx-auto px-4">
      <div class="flex flex-6 justify-around text-center">
        <div class="nav-hvr">
             <a href="${navigation[navi].immersion}"> 
          <img src="../../assets/img/Storage_Water_Heater_07057b7d-8839-409e-87dd-336b1e7ef16c.png" class="mx-auto h-28 object-contain hvr-nav" alt="" />
          <p class="font-medium mt-2">Storage Water Heater</p></a>
        </div>
        <div class="nav-hvr">
          <a href="${navigation[navi].immersion}"> 
          <img src="../../assets/img/Rapidjet_Dlx_3-Litre_2x_8d849f72-a790-4f45-83eb-7aba9b3388cf.png" class="mx-auto h-28 object-contain hvr-nav" alt="" />
          <p class="font-medium mt-2">Instant Water</p></a>
        </div>
        <div class="nav-hvr">
          <a href="${navigation[navi].immersion}"></a>
          <img src="../../assets/img/Immersion_rod_SPAS15A_2x_3e099bfa-b516-442c-9340-787c2215ad9.png"  class="mx-auto h-28 object-contain hvr-nav" alt="" />
          <p class="font-medium mt-2">Immersion Rod</p></a>
        </div>
      </div>
    </div>
  </div>

  <div id="" class="w-full air-down hidden border-b py-4 mb-0 fixed top-[167px] z-40  bg-white">
    <div class="container mx-auto px-4">
      <div class="flex flex-6 justify-around text-center">
        <div class="nav-hvr">
          <a href="${navigation[navi].desert_cooler}"><img src="../../assets/img/Optimus65_FrontView_Black.png" class="mx-auto h-28 object-contain hvr-nav" alt="" />
          <p class="font-medium mt-2">Desert Coolers</p></a>
        </div>
        <div class="nav-hvr">
          <a href="${navigation[navi].desert_cooler}"><img src="../../assets/img/Optimus_Neo_35_front.png" class="mx-auto h-28 object-contain hvr-nav" alt="" />
          <p class="font-medium mt-2">Tower Coolers</p></a>
        </div>
        <div class="nav-hvr">
          <a href="${navigation[navi].desert_cooler}">  
          <img src="../../assets/img/ZelusDAC43FrontView_27f5e453-9790-4640-94bf-f8268e405102.png"
          class="mx-auto h-28 object-contain hvr-nav" alt="" />
          <p class="font-medium mt-2">Personal Air Coolers</p></a>
        </div>
        <div class="nav-hvr">
          <a href=" ${navigation[navi].desert_cooler}"><img src="../../assets/img/Zelus-WAC-54-Front-View-2021-300x300.png" class="mx-auto h-28 object-contain hvr-nav" alt="" />
          <p class="font-medium mt-2">Window Coolers</p></a>
        </div>
      </div>
    </div>
  </div>

  <div id="" class="w-full home-down hidden border-b py-4 mb-0 fixed top-[167px] z-40  bg-white">
    <div class="container mx-auto px-4">
      <div class="flex flex-6 gap-6 text-center">
        <div class="nav-hvr">
          <a href="${navigation[navi].fabric}"><img src="../../assets/img/2200w_iron_wiht_crompton_branding.png" class="mx-auto h-28 object-contain hvr-nav" alt="" />
          <p class="font-medium mt-2">Fabric Care</p></a>
        </div>
        <div class="nav-hvr">
         <a href="${navigation[navi].fabric}"> <img src="../../assets/img/Insta_Fervor_Packaging_view_1_1ae47916-d7c5-419a-bcc2-a1e7b7e9f4c8.png"class="mx-auto h-28 object-contain hvr-nav" alt="" />
          <p class="font-medium mt-2">Room Heaters</p></a>
        </div>
      </div>
    </div>
  </div>

  <div id="" class="w-full kitchen-down hidden border-b py-4 mb-0 fixed top-[167px] z-40  bg-white">
    <div class="container mx-auto px-4">
      <div class="flex flex-6 justify-around text-center">
        <div class="nav-hvr">
          <a href="${navigation[navi].brewing}"><img src="../../assets/img/180.png" class="mx-auto h-28 object-contain hvr-nav" alt="" />
          <p class="font-medium mt-2">Mixer Grinder and Blender</p></a>
        </div>
        <div class="nav-hvr">
          <a href="${navigation[navi].brewing}"><img src="../../assets/img/1200w_ICT_top_viewww.png" class="mx-auto h-28 object-contain hvr-nav" alt="" />
          <p class="font-medium mt-2">Cooking</p></a>
        </div>
        <div class="nav-hvr">
          <a href="${navigation[navi].brewing}"><img src="../../assets/img/180_x_222.png" class="mx-auto h-28 object-contain hvr-nav" alt="" />
          <p class="font-medium mt-2">Brewings</p></a>
        </div>
        <div class="nav-hvr">
              <a href="${navigation[navi].brewing}">
          <img src="../../assets/img/Oresa_4Br_2x_400fd989-7f0a-4732-9d95-6457440578ef.png"
        class="mx-auto h-28 object-contain hvr-nav" alt="" />
          <p class="font-medium mt-2">Cooktop</p></a>
        </div>
      </div>
    </div>
  </div>
    `
}

$(".serch-btn").click(function () {
  $(".click-srch-btn_1").toggleClass("hidden")
})
$("#mid_ham").click(function () {
  $("#mid_nav").toggleClass("hidden")
})
$("#cat_mob").click(function(){
  $(".drop_cat").toggleClass("hidden")
  $("#rtd").toggleClass("hidden")
  $("#dtr").toggleClass("hidden")
})