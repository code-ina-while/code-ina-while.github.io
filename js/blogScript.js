// aside ads handling
let aside = document.querySelector("aside");

let ticking = false;
function asideHandler(){
    if((window.scrollY >= window.innerHeight * 1)){
        aside.style.position = 'fixed';
        aside.style.top = 'auto';
        aside.style.bottom = '0';
    }else{
        aside.style.position = 'absolute';
        aside.style.top = '80px';
    }
    ticking = false;
};

window.addEventListener('scroll', function(){
    if(!ticking){
        window.requestAnimationFrame(asideHandler);
        ticking = true;
    }
})

// handle copy event
let copyDivs = document.querySelectorAll('.copy');
copyDivs.forEach(copyDiv => {
    copyDiv.addEventListener('click', async function(){
        let code = copyDiv.nextElementSibling;
        try{
            await navigator.clipboard.writeText(code.innerText);
        }catch(err){
            console.log(err);
        }
    })
})