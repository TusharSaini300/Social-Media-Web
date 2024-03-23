function likeButton1(){
    let heart1 = document.querySelector('.heart');
    let likes1 = document.querySelector('.likes');
    if(heart1.src.match("heart.jpg")){
        heart1.src = "heart_red.jpg";
        likes1.innerHTML = "5,490 likes";
    } else {
        heart1.src = "heart.jpg";
        likes1.innerHTML = "5,489 likes"
    }
}