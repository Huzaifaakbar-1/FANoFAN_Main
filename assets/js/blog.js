Blog = [
    {
        title_blog: "FanOFan Blog ",
        paragraph_blog: "Presenting the ultimate guide to finding the perfect fans for your space. Not sure about which fan type would be best suited to your needs? Read our blog to get valuable insights, expert tips, and guidance to help you choose the right fan for your home. Learn about efficient usage, easy maintenance",
        first_img: "../../assets/img/light-4-v1695038502079-compressed-v1725970341736.webp",
        first_img_text: "Light Guide",
        first_img_text_img: "../../assets/img/lights-guide.svg",
        first_img_heding: "Ultimate Guide to Choosing Ceiling Lights for Your Home",
        // second
        second_img: "../../assets/img/fan-1-v1698311940090-compressed-v1725970164043.webp",
        second_img_text: "Fans Guide ",
        second_img_text_img: "../../assets/img/fans-guide.svg",
        second_img_heding: "Difference Between BLDC Fans vs Normal Fans",
        // third
        third_img: "../../assets/img/imgs.webp",
        third_img_text: "Water heaters guide ",
        third_img_text_img: "../../assets/img/water-heaters-guide.svg",
        third_img_heding: "An Easy Guide to Smart Water Geysers",
        // forth
        forth_img: "../../assets/img/1-v1695035727878-compressed-v1725970044445.png",
        forth_img_text: "Air coolers guide ",
        forth_img_text_img: "../../assets/img/air-coolers-guide.svg",
        forth_img_heding: "Air Cooler Power Consumption: Calculate Your Air Cooler’s Wattage",
        
    }
]

for (blog_cromp = 0; blog_cromp<Blog.length; blog_cromp++){
    document.getElementById("blog_crompton").innerHTML  += `
    <div class="container m-auto p-5 ">
   <h1 class="text-[30px] font-semibold block md:hidden mt-12 text-center">${Blog[blog_cromp].title_blog}</h1>
    <p class="mt-6 leading-[36px] pr-18 text-[18px]  text-[#121212] res_para_blog block md:hidden">${Blog[blog_cromp].paragraph_blog}</p>
<div class="grid md:grid-cols-2 gap-5">
  <div class="md:mt-12 mt-5">
    <h1 class="text-[30px] font-semibold hidden md:block">${Blog[blog_cromp].title_blog}</h1>
    <p class="mt-6 leading-[36px] pr-18 text-[18px]  text-[#121212] res_para_blog hidden md:block">${Blog[blog_cromp].paragraph_blog}</p>
    <div class="relative lg:mt-[90px] res_mr_blog">
      <img src="${Blog[blog_cromp].first_img}" class="rounded-4xl mt-5" alt="">
  <div class="img-shade absolute bottom-0 left-0 w-full h-[50%] rounded-4xl"></div>

    <div class="pos_inner_img absolute bottom-10 md:p-5 pl-5">
      <div class="flex items-center gap-2">
      <img src="${Blog[blog_cromp].first_img_text_img}" class="w-[26px]"  alt=""><span class="text-[#ffb645] text-[16px] font-semibold">${Blog[blog_cromp].first_img_text}</span> 
    </div>
    <div class="">
      <p class="md:text-[22px] text-[18px] text-white font-semibold mt-3 z-10 md:block hidden">${Blog[blog_cromp].first_img_heding}</p>
   <a href="../../read_more/fan_read.html">
      <div class="flex items-center btn_cromp z-10">

      <button class="text-white font-semibold mt-3 cursor-pointer z-10">Read More</button>
      <img src="../../assets/img/icon_rm_right.svg" class="mt-3 ml-2 img_cromp z-10" alt="">
      </div>
      </a>
    </div>
    </div>
    <div class="absolute top-0">
      <img src="../../assets/img/c_part_new2.png" class="md:block hidden" alt="">
    </div>
    </div>
    <div class="mt-5 relative">
      <img src=" ${Blog[blog_cromp].second_img}" class="rounded-4xl" alt="">
  <div class="img-shade absolute bottom-0 left-0 w-full h-[50%] rounded-4xl"></div>

    <div class="pos_inner_img absolute bottom-10 md:p-5 pl-5">
      <div class="flex items-center gap-2 mt-5">
      <img src="${Blog[blog_cromp].second_img_text_img}" class="w-[26px] z-10"  alt=""><span class="text-[#ffb645] text-[16px] font-semibold z-10">${Blog[blog_cromp].second_img_text}</span> 
    </div>
    <div class="">
      <p class="md:text-[22px] text-[18px]  text-white font-semibold mt-3 z-10 md:block hidden">${Blog[blog_cromp].second_img_heding}</p>
      <a href="../../read_more/fan_read.html">
      <div class="flex items-center btn_cromp z-10">

      <button class="text-white font-semibold mt-3 cursor-pointer z-10">Read More</button>
      <img src="../../assets/img/icon_rm_right.svg" class="mt-3 ml-2 img_cromp z-10" alt="">
      </div>
      </a>
    </div>
  </div>
  <div class="absolute top-0">
  <img src="../../assets/img/c_part_new3.png" class="md:block hidden" alt="">
</div>
  </div>
  </div>

  <div class="lg:mt-27 md:mt-[290px] mt-4 flex flex-col gap-5 mar_gin">
<div class="mt-5 relative rounded-4xl overflow-hidden">
  <img src="${Blog[blog_cromp].third_img}" class="rounded-4xl w-full" alt="">
  <div class="img-shade absolute bottom-0 left-0 w-full h-[50%] rounded-4xl"></div>

  <div class="pos_inner_img absolute bottom-10 md:p-5 pl-5">
    <div class="flex items-center gap-2">
      <img src="${Blog[blog_cromp].third_img_text_img}" class="w-[26px] z-10" alt="">
      <span class="text-[#ffb645] text-[16px] font-semibold z-10"> ${Blog[blog_cromp].third_img_text}</span> 
    </div>
    <div>
      <p class="md:text-[22px] text-[18px] text-white font-semibold mt-3 z-10 md:block hidden">${Blog[blog_cromp].third_img_heding}</p>
        <a href="../../read_more/fan_read.html">
      <div class="flex items-center btn_cromp z-10">

      <button class="text-white font-semibold mt-3 cursor-pointer z-10">Read More</button>
      <img src="../../assets/img/icon_rm_right.svg" class="mt-3 ml-2 img_cromp z-10" alt="">
      </div>
      </a>
    </div>
  </div>
  <div class="absolute top-2">
  <img src="../../assets/img/c_part_new1.png" class="md:block hidden" alt="">
</div>
</div>

       <div class=" relative">
      <img src=" ${Blog[blog_cromp].forth_img}" class="rounded-4xl" alt="">
  <div class="img-shade absolute bottom-0 left-0 w-full h-[50%] rounded-4xl"></div>

    <div class="pos_inner_img absolute bottom-10 md:p-5 pl-5">
      <div class="flex items-center gap-2">
      <img src=" ${Blog[blog_cromp].forth_img_text_img}" class="w-[26px] z-10"  alt=""><span class="text-[#ffb645] text-[16px] font-semibold z-10">${Blog[blog_cromp].forth_img_text}</span> 
    </div>
    <div class="">
      <p class="md:text-[22px] text-[18px] text-white font-semibold mt-3 z-10 md:block hidden">${Blog[blog_cromp].forth_img_heding}</p>
    <a href="../../read_more/fan_read.html">
      <div class="flex items-center btn_cromp z-10">

      <button class="text-white font-semibold mt-3 cursor-pointer z-10">Read More</button>
      <img src="../../assets/img/icon_rm_right.svg" class="mt-3 ml-2 img_cromp z-10" alt="">
      </div>
      </a>
    </div>
    </div>
    <div class="absolute top-2 z-0">
  <img src="../../assets/img/c_part_new4.png" class="md:block hidden" alt="">
</div>
  </div>
  </div>
  
</div>
</div>
    `
}
