const buttonSubmit = document.querySelector('.btn_submit');
const rating = document.getElementById('rating');
const rates = document.querySelectorAll('.item_number');

buttonSubmit.addEventListener('click', ()=> {
    if(rating.innerHTML === ''){
        showModal();
    }else{
        showNewContent();
    }
})

rates.forEach((rate)=> {
    rate.addEventListener('click', ()=> {
        rate.classList.toggle('active_itemNumber')
        if(rate.classList.contains('active_itemNumber')){
            rating.innerHTML = rate.innerHTML;
        }else{
            rating.innerHTML = null;
        }
    })
});

function showNewContent(){
    const content = document.querySelector('.content');
    const newContent = document.querySelector('.content_submit')
    content.setAttribute('style', 'display: none');
    newContent.setAttribute('style', 'display: flex');
}

function showModal(){
    const modal = document.getElementById('container-modal')
    const body = document.getElementById('body');
    modal.setAttribute('style', 'display: flex');
    body.setAttribute('style', 'display: block');
    const btnReturn = document.querySelector('.modal #return');
    btnReturn.addEventListener('click',() => {
        modal.setAttribute('style', 'display: none');
        body.setAttribute('style', 'display: none');
    })
}

