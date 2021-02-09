window.addEventListener("DOMContentLoaded", function() {

    // Variables
    let checkbox = document.querySelector(".checkbox--input")
    let header = document.querySelector("header")



    // Change to white mode and revert 
    // Next time use colors only in a class and call them up to css
    // I'm giving random names to variables in every ForEach, so don't mind
    checkbox.addEventListener("change", function() {
        if (this.checked) {
            header.classList.add("white_bg_header")
            document.querySelector(".header_container .left h1").style.color = "hsl(230, 17%, 14%)"
            document.querySelector(".header_container .left p").style.color = "hsl(228, 12%, 44%)"
            document.querySelector(".header_container .right h2").style.color = "hsl(228, 12%, 44%)"
            document.querySelector(".social_medias").style.background = "hsl(0, 0%, 100%)"
            document.querySelectorAll(".medias_box").forEach(box => {
                box.style.background = "hsl(227, 47%, 96%)"
            })
            document.querySelectorAll(".medias_box .top span").forEach(e => {
                e.style.color = "hsl(228, 12%, 44%)"
            })
            document.querySelectorAll(".medias_box .middle h2").forEach(x => {
                x.style.color = "hsl(230, 17%, 14%)"
            })
            document.querySelectorAll(".medias_box .middle span").forEach(m => {
                m.style.color = "hsl(228, 12%, 44%)"
            })
            document.querySelectorAll(".overviews").forEach(overviews => {
                overviews.style.background = "hsl(227, 47%, 96%)"
            })
            document.querySelectorAll(".overviews .top p").forEach(p => {
                p.style.color = "hsl(228, 12%, 44%)"
            })
            document.querySelectorAll(".overviews .bottom p").forEach(bp => {
                bp.style.color = "hsl(230, 17%, 14%)"
            })
        }
        else {
            header.classList.remove("white_bg_header")
            document.querySelector(".header_container .left h1").style.color = "white"
            document.querySelector(".header_container .left p").style.color = "hsl(228, 34%, 66%)"
            document.querySelector(".header_container .right h2").style.color = "hsl(228, 34%, 66%)"
            document.querySelector(".social_medias").style.background = "hsl(230, 17%, 14%)"
            document.querySelectorAll(".medias_box").forEach(box => {
                box.style.background = "hsl(228, 28%, 20%)"
            })
            document.querySelectorAll(".medias_box .top span").forEach(e => {
                e.style.color = "hsl(228, 34%, 66%)"
            })
            document.querySelectorAll(".medias_box .middle h2").forEach(x => {
                x.style.color = "white"
            })
            document.querySelectorAll(".medias_box .middle span").forEach(m => {
                m.style.color = "hsl(228, 34%, 66%)"
            })
            document.querySelectorAll(".overviews").forEach(overviews => {
                overviews.style.background = "hsl(228, 28%, 20%)"
            })
            document.querySelectorAll(".overviews .top p").forEach(p => {
                p.style.color = "hsl(228, 34%, 66%)"
            })
            document.querySelectorAll(".overviews .bottom p").forEach(bp => {
                bp.style.color = "white"
            })
        }
    })




})