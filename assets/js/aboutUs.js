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

let teams = document.querySelector(".teams")
const teamsinner = [
    {name: "Cathy Anderson",title: "Chief executive",Image:"assets/images/aboutUsimages/chieff.jpg"},
    {name: "Mike Dooley",title: "Executive",Image:"assets/images/aboutUsimages/chieff2new.jpg"},
    {name: "Alextina Jimiey",title: "Food Inspector",Image:"assets/images/aboutUsimages/chieff3new.jpg"}
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