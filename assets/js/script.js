let footerLinks = document.querySelector(".footerLinks")

const LinksArray = [
    "About Us",
    "Menu",
    "Blog",
    "FAQ",
    "Services",
    "Gallery",
    "Contact Us",
]

const linksloop = LinksArray.forEach((ele)=>{
    footerLinks.innerHTML+=`<P class="mb-2">${ele}</p>`
})