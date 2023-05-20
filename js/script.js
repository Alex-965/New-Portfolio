let loader = document.querySelector('.loading');
window.addEventListener('load', function(){
    loader.style.display = 'none';
});

new FinisherHeader({
  "count": 500,
  "size": {
    "min": 2,
    "max": 10,
    "pulse": 0
  },
  "speed": {
    "x": {
      "min": 0,
      "max": 0.4
    },
    "y": {
      "min": 0,
      "max": 0.6
    }
  },
  "colors": {
    "background": "#201e30",
    "particles": [
      "#fbfcca",
      "#d7f3fe",
      "#ffd0a7"
    ]
  },
  "blending": "overlay",
  "opacity": {
    "center": 1,
    "edge": 0
  },
  "skew": 0,
  "shapes": [
    "c"
  ]
});

let skills = document.querySelectorAll('.skill-info span');
for(let skill of skills){
  skill.style.marginLeft = skill.dataset.nam;
}

let navs = document.querySelectorAll('.header-list-item-text');

for(let nav of navs){
  nav.addEventListener('click', function(){
    nav.scroll(0, -50+'px')
  })
}
  /* setTimeout(() => {
    window.location.reload(true);
  }, 200); */
let section = document.querySelectorAll('.section');
let navLinks = document.querySelectorAll('.header-list-item-text');

  window.onscroll = () =>{

    section.forEach(sec =>{
         
        let top = window.scrollY;
        let offset = sec.offsetTop -200;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('.header-list-item-text[href*=' + id +']').classList.add('active');
            });
        };

    });
  };
