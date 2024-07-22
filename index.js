/** Function To Smoothly Scroll Down **/
function smoothScroll(y) {
    window.scroll({
        top: y,
        behavior: "smooth",
    });
}

/** Function To Update Header **/
function updateHeader(title, subtitle) {
    document.getElementById("title").innerHTML = title;
    document.getElementById("subtitle").innerHTML = subtitle;
}