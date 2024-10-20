let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY
        let offset = sec.offsetTop -75
        let height = sec.offsetHeight
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    })
}

const div = document.querySelectorAll('.sekolah')

window.addEventListener('scroll', checkDiv)

checkDiv()

function checkDiv(){
    const triggerBottomDiv = window.innerHeight / 8 * 6

    div.forEach(d =>{
        const divTop = d.getBoundingClientRect().top
        if(divTop < triggerBottomDiv){
            d.classList.add('show')
        }
        else{
            d.classList.remove('show')
        }
    })
}

const project = document.querySelectorAll('.p')

window.addEventListener('scroll', checkP)

checkP()

function checkP(){
    const triggerBottomP = window.innerHeight / 8 * 6

    project.forEach(pro =>{
        const PTop = pro.getBoundingClientRect().top
        if(PTop < triggerBottomP){
            pro.classList.add('show')
        }
        else{
            pro.classList.remove('show')
        }
    })
}