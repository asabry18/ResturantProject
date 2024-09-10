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
let main = document.getElementById('main')
let menu = [
    {
        backgroundImage:"assets/images/blogimgs/1.png" , 
        title:'New Restaurant Town Our Ple Award Contract' , 
        paragraph: 'Drive your business and manage risks with a global industry leader.' , 
        date:'Aug 1,2023'
    },

    {
        backgroundImage:"assets/images/blogimgs/2.png" , 
        title:'Greek Yogurt Breakfast Bowls Ple Award Contract' , 
        paragraph: 'Start your day right with healthy and nutritious meals' , 
        date:'Jun 14, 2023'
    },

    {
        backgroundImage:"assets/images/blogimgs/3.png" , 
        title:'Make Authentic Italian Margherita Pizza at Home' , 
        paragraph: 'Learn how to craft authentic Italian dishes right at home.' , 
        date:'Sep 5, 2023'
    },

    {
        backgroundImage:"assets/images/blogimgs/2.png" , 
        title:'Exploring New Food Trends in 2023' , 
        paragraph: 'Discover the latest food trends shaping the culinary world.' , 
        date:'Jan 15, 2023'
    },

    {
        backgroundImage:"assets/images/blogimgs/1.png" , 
        title:'Healthy Breakfast Recipes for a Great Start' , 
        paragraph: 'Explore delicious and nutritious breakfast options.' , 
        date:'Mar 22, 2023'
    },

    {
        backgroundImage:"assets/images/blogimgs/2.png" , 
        title:'The Art of Crafting Homemade Pasta' , 
        paragraph: 'Learn how to make authentic Italian pasta from scratch.' , 
        date:'May 9, 2023'
    },
]

for(let i = 0 ; i<menu.length ; i++) {

    const mainElement = 
    `
    <div class="card" style="width: 23rem;">
            <img src= ${menu[i].backgroundImage} class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${menu[i].title}</h5>
              <p class="card-text">${menu[i].paragraph}</p>
              <hr>
              <div class="date-blog">
                <p>${menu[i].date}</p>
                <a href="###">Read More</a>
              </div>
            </div>
        </div>
    `

    main.innerHTML += mainElement
}
let extramenu = [
    {
        backgroundImage:"assets/images/blogimgs/1.png" , 
        title:'New Restaurant Town Our Ple Award Contract' , 
        paragraph: 'Drive your business and manage risks with a global industry leader.' , 
        date:'Aug 1,2023'
    },

    {
        backgroundImage:"assets/images/blogimgs/2.png" , 
        title:'Greek Yogurt Breakfast Bowls Ple Award Contract' , 
        paragraph: 'Start your day right with healthy and nutritious meals' , 
        date:'Jun 14, 2023'
    },

    {
        backgroundImage:"assets/images/blogimgs/3.png" , 
        title:'Make Authentic Italian Margherita Pizza at Home' , 
        paragraph: 'Learn how to craft authentic Italian dishes right at home.' , 
        date:'Sep 5, 2023'
    },

]
let showbtn = document.getElementById("showbtn")
showbtn.onclick=function(){
    if (showbtn.innerHTML=='Show More') {
        for(let i = 0 ; i<extramenu.length ; i++) {

            const mainElement = 
            `
            <div class="card" style="width: 23rem;">
                    <img src= ${menu[i].backgroundImage} class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${menu[i].title}</h5>
                      <p class="card-text">${menu[i].paragraph}</p>
                      <hr>
                      <div class="date-blog">
                        <p>${menu[i].date}</p>
                        <a href="###">Read More</a>
                      </div>
                    </div>
                </div>
            `
        
            main.innerHTML += mainElement
        }
        showbtn.style.display='none' 
    }
}
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


let showbtnmenu = document.querySelector('.show-more-btn').addEventListener('click', function () {
  const hiddenItems = document.querySelectorAll('.menu-item.hidden');

  // Show 4 hidden items at a time
  let count = 0;
  hiddenItems.forEach(function (item) {
      if (count < 4) {
          item.classList.remove('hidden');
          count++;
      }
  });


  // If there are no more hidden items, hide the button
  if (document.querySelectorAll('.menu-item.hidden').length === 0) {
      // Uncomment the following line if you want to keep the button visible
      this.style.display = 'none';
  }

});
document.addEventListener('DOMContentLoaded', function () {
  // Get all icon items and menu items
  const iconItems = document.querySelectorAll('.icon-item');
  const menuItems = document.querySelectorAll('.menu-item');

  // Add click event listener to each icon item
  iconItems.forEach(icon => {
    icon.addEventListener('click', function () {
      // Get the selected category from the clicked icon
      const category = this.querySelector('span').textContent.toLowerCase();

      // Update active class
      iconItems.forEach(icon => icon.classList.remove('active'));
      this.classList.add('active');

      // Show or hide menu items based on category
      menuItems.forEach(item => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });
});


  