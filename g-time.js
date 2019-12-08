// responsiveness of the page was intentionally ommitted
// it is only set to desktop type


const exploreBtn = document.querySelector('.explore-btn')
exploreBtn.addEventListener('click', function(evt){
    const rest = evt.target.remove()
    return rest
    //code block on what the button should do
    window.prompt(`refresh the page`)
})
const firstBtn = document.querySelector('#firstArrow')
firstBtn.addEventListener('click', function(evt){
    //code block on what the button should do
    window.prompt(`you click the previous button`)
})
const secondBtn = document.querySelector('#secondArrow')
secondBtn.addEventListener('click', function(evt){
    //code block on what the button should do
    window.prompt(`you click the nect button \n
     hit Enter to close this window`)
})

