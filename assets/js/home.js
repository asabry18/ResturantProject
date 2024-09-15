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
 // Show more functionality
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
  let teams = document.querySelector(".teams")
const teamsinner = [
    {name: "Cathy Anderson",title: "Chief executive",Image:"../assets/images/aboutUsimages/chieff.jpg"},
    {name: "Mike Dooley",title: "Executive",Image:"../assets/images/aboutUsimages/chieff2new.jpg"},
    {name: "Alextina Jimiey",title: "Food Inspector",Image:"../assets/images/aboutUsimages/chieff3new.jpg"}
]

const teamsecloop = teamsinner.map((ele)=>{
    teams.innerHTML+=`
                <div class="col-lg-4 col-md-6 col-12 FullCard">
                    <div class="card teamCard">
                        <img src="${ele.Image}" class="card-img-top" alt="team-img">
                        <div class="card-body text-center overflow-hidden">
                            <h4 class="card-title">${ele.name}</h4>
                            <p class="text-capitalize opacity-75">${ele.title}</p>
                            <hr class="opacity-100 w-75">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat facere libero ad blanditiis sunt sint.</p>
                        </div>
                    </div>
                </div>`
})
  
let main = document.getElementById('main')
let menu = [
    {
        backgroundImage:"../assets/images/homeImages/latestNewsImages/chicken.png"   , 
        title:'New Restaurant Town Our Ple Award Contract' , 
        paragraph: 'Drive your business and manage risks with a global industry leader.' , 
        date:'Aug 1,2023'
    },

    {
        backgroundImage:"../assets/images/homeImages/latestNewsImages/grands.png" , 
        title:'Greek Yogurt Breakfast Bowls Ple Award Contract' , 
        paragraph: 'Start your day right with healthy and nutritious meals' , 
        date:'Jun 14, 2023'
    },

    {
        backgroundImage:"../assets/images/homeImages/latestNewsImages/salad.png" , 
        title:'Make Authentic Italian Margherita Pizza at Home' , 
        paragraph: 'Learn how to craft authentic Italian dishes right at home.' , 
        date:'Sep 5, 2023'
    },

    {
        backgroundImage:"../assets/images/homeImages/latestNewsImages/grands.png" , 
        title:'Exploring New Food Trends in 2023' , 
        paragraph: 'Discover the latest food trends shaping the culinary world.' , 
        date:'Jan 15, 2023'
    },

    {
        backgroundImage:"../assets/images/homeImages/latestNewsImages/chicken.png" , 
        title:'Healthy Breakfast Recipes for a Great Start' , 
        paragraph: 'Explore delicious and nutritious breakfast options.' , 
        date:'Mar 22, 2023'
    },

    {
        backgroundImage:"../assets/images/homeImages/latestNewsImages/grands.png" , 
        title:'The Art of Crafting Homemade Pasta' , 
        paragraph: 'Learn how to make authentic Italian pasta from scratch.' , 
        date:'May 9, 2023'
    },
]

for(let i = 0 ; i<menu.length ; i++) {

    const mainElement = 
    `
    <div class="card col-12 col-md-6 col-lg-4 latestNewsCard">
        <img src= ${menu[i].backgroundImage} class="card-img-top" alt="Restraunt-Latest-News">
        <div class="card-body">
            <h5 class="card-title">${menu[i].title}</h5>
            <p class="card-text opacity-75">${menu[i].paragraph}</p>
            <hr>
            <div class="date-blog opacity-75">
            <p>${menu[i].date}</p>
            <a href="###" class="opacity-75">Read More</a>
            </div>
        </div>
    </div>
    `

    main.innerHTML += mainElement
}



let extramenu = [
    {
        backgroundImage:"../assets/images/homeImages/latestNewsImages/chicken.png" , 
        title:'New Restaurant Town Our Ple Award Contract' , 
        paragraph: 'Drive your business and manage risks with a global industry leader.' , 
        date:'Aug 1,2023'
    },

    {
        backgroundImage:"../assets/images/homeImages/latestNewsImages/grands.png" , 
        title:'Greek Yogurt Breakfast Bowls Ple Award Contract' , 
        paragraph: 'Start your day right with healthy and nutritious meals' , 
        date:'Jun 14, 2023'
    },

    {
        backgroundImage:"../assets/images/homeImages/latestNewsImages/salad.png" , 
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
            <div class="card latestNewsCard">
                    <img src= ${menu[i].backgroundImage} class="card-img-top" alt="Restraunt-Latest-News">
                    <div class="card-body">
                      <h5 class="card-title">${menu[i].title}</h5>
                      <p class="card-text opacity-75">${menu[i].paragraph}</p>
                      <hr>
                      <div class="date-blog opacity-75">
                        <p>${menu[i].date}</p>
                        <a href="###" class="opacity-75">Read More</a>
                      </div>
                    </div>
                </div>
            `
        
            main.innerHTML += mainElement
        }
        showbtn.style.display='none' 
    }
}