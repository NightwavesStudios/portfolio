/** Find All Elements With A Class of 'page' **/
var page = document.getElementsByClassName('page');

/** Change Page Function **/
function changePage(index) {

    /** Hide All Elements Inside An Element With A Class of 'page' **/
    for (var i = 0; i < page.length; i++) {
        page[i].style.display = 'none';
    }

    /** Show Page That Is Selected **/
    page[index - 1].style.display = 'block';
    smoothScroll(window.scrollY);

    /** Change Header Title Based On Page **/
    if (index === 1) {
        updateHeader("[Name Here]", "Subtitle");
    } else if (index === 2) {
        updateHeader("About", "Subtitle");
    } else if (index === 3) {
        updateHeader("Skills", "Subtitle");
    } else if (index === 4) {
        updateHeader("Projects", "Subtitle");
    }
}

/** Initially Change Page To One **/
changePage(1);