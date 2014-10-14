var timeout;
var isHidden = false;

document.addEventListener("mousemove", shareFade);

function shareFade() {
    if (timeout) {
        clearTimeout(timeout);
    }
    timeout = setTimeout(function() {
        if (!isHidden) {
            $("#share-btns").animate({top:'-36px'},400);
            isHidden = true;
        }
    }, 5000);
    if (isHidden) {
        $("#share-btns").animate({top:'0px'},400);
        isHidden = false;
    }
};