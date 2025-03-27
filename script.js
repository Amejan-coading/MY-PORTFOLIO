let a = document.getElementsByClassName("tab-links")
let b = document.getElementsByClassName("tab-contents")

function opentab(tabname) {
    for (tablink of a) {
        tablink.classList.remove("active-link")
    }
    for (tabcontent of b) {
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}