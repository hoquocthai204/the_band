var header = document.getElementById("header")
var menuBar = document.getElementById("bar")
var headerheight = header.clientHeight

menuBar.onclick = function(){
    var isClosed = header.clientHeight === headerheight
    if (isClosed) {
        header.style.height = "auto"
    } else {
        header.style.height = "46px"
    }
}
