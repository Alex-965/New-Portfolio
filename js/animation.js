let anims = document.querySelectorAll('.anim');

window.addEventListener('load', animOnScroll);
window.addEventListener('scroll', animOnScroll);
function animOnScroll(){
    for(let index = 0; index < anims.length; index++){

        const anim = anims[index];
        const animHeight = anim.offsetHeight;
        const animOffset = offset(anim).top 
        const animStart = 6;

        let animPoint = window.innerHeight - animHeight / animStart;
        if(animHeight > window.innerHeight){
            animPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if((pageYOffset> animOffset - animPoint) && pageYOffset < (animOffset + animHeight)) {
            anim.classList.add('active');
        }else{
            anim.classList.remove('active');
        }
    }
}
animOnScroll();
function offset(el) {
    const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
}