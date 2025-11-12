
footer = [
    {
        index: "../../index.html",
        about: "../../about.html",
        customer: "../../customer.html",
        blog: "../../blog.html ",
        gallery: "../../gallery.html ",
        contact: "../../contact.html",
        ceilling_fan: "../../assets/fan/celling_fan.html",
        table_fan: "../../assets/fan/table_fan.html" ,
        wall_mounted: "../../assets/fan/wall_mounted_fan.html" ,
        pedastal_fan: "../../assets/fan/padestal_fan.html " ,
        exhaust_fan: "../../assets/fan/exhaust_fan.html",
        batten: "../../assets/light/battens.html",
        immersion: "../../assets/geyser/immersion_rod.html",
        desert_cooler: "../../assets/air/desert_coolers.html",
        fabric: "../../assets/home/fabric.html",
        brewing: "../../assets/kitchen/brewings.html",
        privacy: "../../footer/privacy.html",
        cookie: "../../footer/cookie.html",
        term: "../../footer/term_services.html ",
        sitemap: "../../footer/site.html ",
    }
]

for (fot = 0; fot<footer.length; fot++){
    document.getElementById("footer").innerHTML +=`
    <footer class="bg-[#08558c] ">
    <div class="container m-auto">
    <div class="grid lg:grid-cols-4 md:grid-cols-2  ">
        <div class="p-5 mt-12 lg:text-start text-center  ">
          <h1 class="text-white text-[20px] font-semibold lg:text-start">Our Categories</h1>
          <ul class="text-gray-400 mt-2 lg:text-start">
            <li class="pt-2"><a href="${footer[fot].ceilling_fan}">Fans</a></li>
            <li class="pt-2"><a href="${footer[fot].ceilling_light}">Lights</a></li>
            <li class="pt-2"><a href="${footer[fot].immersion}">Water Heater</a></li>
            <li class="pt-2"><a href="${footer[fot].desert_cooler}">Air Cooler</a></li>
            <li class="pt-2"><a href="${footer[fot].fabric}">Home Appliances</a></li>
            <li class="pt-2"><a href="${footer[fot].brewing}">Kitchen Appliances</a></li>
            <li class="pt-2"><a href="${footer[fot].brewing}">Built-in Kitchen Appliances</a></li>
            <li class="pt-2"><a href="${footer[fot].desert_cooler}">Pumps</a></li>
          </ul>
        </div>
        <div class="p-5 mt-12 text-center lg:text-start">
          <h1 class="text-white text-[20px] font-semibold lg:text-start">Need Help</h1>
          <ul class="text-gray-400 mt-2 lg:text-start">
            <li class="pt-2"><a href="${footer[fot].privacy}">Privacy Notice</a></li>
            <li class="pt-2"><a href="${footer[fot].cookie}">Cookie Policy</a></li>
            <li class="pt-2"><a href="${footer[fot].contact}">Warranty & Support</a></li>
            <li class="pt-2"><a href="${footer[fot].contact}">Contact US</a></li>
          </ul>
        </div>
        <div class="p-5 mt-12 text-center lg:text-start">
        <h1 class="text-white text-[20px] font-semibold lg:text-start">FanOFan</h1>
        <ul class="text-gray-400 mt-2 lg:text-start">
          <li class="pt-2"><a href="${footer[fot].index}">Home</a></li>
          <li class="pt-2"><a href="${footer[fot].about}">About Us</a></li>
          <li class="pt-2"><a href="${footer[fot].customer}">Customer Care</a></li>
          <li class="pt-2"><a href="${footer[fot].contact}">Contact Us</a></li>
          <li class="pt-2"><a href="${footer[fot].term}">Terms of Service</a></li>
          <li class="pt-2"><a href="${footer[fot].sitemap}">Sitemap</a></li>
          <li class="pt-2"><a href="${footer[fot].blog}">Blog</a></li>
          <li class="pt-2"><a href="${footer[fot].gallery}">Gallery</a></li>
        </ul>
      </div>
    
  <div class="p-5 mt-12 md:text-center sm:text-center lg:text-start">
    <div class="flex gap-2 items-center lg:justify-start md:justify-center  ">
        <h1 class="text-white text-[20px] font-semibold ">Customer Care |</h1>
        <img src="assets/img/Crompton_Assist_Plus_Logo-F_3.png" alt="">
        </div>
        <ul class="text-gray-400 mt-2 lg:text-start">
          <li class="pt-2">For any issues related to any products give us a call or connect with us here </li>
          <div class="flex gap-2 mt-2 md:justify-center  lg:justify-start">
          <li class="pt-2 flex gap-2 items-center"><i class="fa-solid fa-phone" style="color: #ffffff;"></i>03213314353</li>
          <li class="pt-2 flex gap-2 items-center"><a href=""><i class="fa-brands fa-whatsapp" style="color: #ffffff;"></i>Whatsapp</a></li>
          </div>
  
          <li class="pt-2 mt-2"><h3 class="text-2xl font-semibold text-white">Sign up for FANoFAN updates</h3></li>
          <li class="pt-2">Subscribe to our newsletter for latest updates, products and insights</li>
        </ul>
        <div class="">
       <form action="" class="inp mt-5 flex flex-col  gap-4">
          <input type="email" required name="" class="bg-transparent border border-white rounded-4xl placeholder:text-white" placeholder="Enter your email" id="">
          <button class="px-3 py-2 rounded-4xl bg-white font-semibold text-[14px] cursor-pointer">Submit</button>
        </form>
        </div>
      </div>
      
        
        </div>
    </div>
    <div class="bg-white p-3 text-center">© 2025 FanOfan Consumer Electricals Limited. All Rights Reserved Developed By <b>Huzaifa Akbar</b></div>
  </footer>
    `
}