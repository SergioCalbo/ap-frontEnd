let btn = document.querySelector('#scroll-up');

btn.addEventListener('click',() => {
document.body.scrollTo({
    top:0
})

})
document.documentElement.scrollTo({
    top: 0
})