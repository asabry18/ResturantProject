
let footerLinks = document.querySelector(".footerLinks");
const LinksArray = [
  "About Us",
  "Menu",
  "Blog",
  "FAQ",
  "Services",
  "Gallery",
  "Contact Us",
];

const linksloop = LinksArray.forEach((ele) => {
  footerLinks.innerHTML += `<P class="mb-2">${ele}</p>`;
});
let scrollbtn = document.querySelector('.scroll')
onscroll = function(){
    if(scrollY >= 200){
      scrollbtn .style.display='block'
    }
    else{
      scrollbtn.style.display='none'
    }
    scrollbtn.onclick = function(){
        window.scrollTo(0,0)
    }
}
