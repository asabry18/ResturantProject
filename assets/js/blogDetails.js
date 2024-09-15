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