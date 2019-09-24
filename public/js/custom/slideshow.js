function transition(i){
    console.log("rodie "+i)
    setTimeout(() => {
        document.getElementById("mainSlideShow").style.backgroundImage = "url(../assets/images/slideshow"+i+".jpg)";
        if(i>=3) i=1;
        else i++;
        transition(i);
    }, 3000);
}
transition(1);