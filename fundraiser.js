var likeBtn = document.querySelector('.likeBtn')
state = 'notClicked'

function like(){
    if (state = 'notClicked'){
        likeBtn.innerHTML = '<i class="fa-solid fa-heart"></i> liked'
        state = 'Clicked'
    }else if (state = 'Clicked'){
        likeBtn.innerHTML = '<i class="fa-regular fa-heart"></i> like'
        state = 'notClicked'
    }
}

function pay(){
    var hover = document.getElementById('hover')
    hover.style.display = ("block")
}


function share(){
    var hover = document.querySelector('.hovershare')
    hover.style.display = ("flex")
}

function unshare(){
    var hover = document.querySelector('.hovershare')
    hover.style.display = ("none")
}
