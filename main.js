// js part left
// exit for exit
let profile = document.querySelector('.profile')
let exit = document.querySelector('.exit')
let prof = document.querySelector('.prof')

profile.addEventListener('click', ()=>{
    if(prof.classList.contains('profA')){
        prof.classList.remove('profA')
    }else{
        prof.classList.add('profA')
    }


})
exit.addEventListener('click', ()=>{
    prof.classList.remove('profA')
})









