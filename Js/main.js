
window.onscroll = function () {
    if ($(window).scrollTop() == 0) {
        console.log(1);
        $(".header").addClass("trans")
    }
    else {
        console.log(0);
        $(".header").removeClass("trans")
    }
}; // <=== Syntax Error: Closing Parenthese around an if block
var cuFrame=1;
function go(id){
    if(id=='2'&&cuFrame>1){cuFrame--;}else{if(id=='2')cuFrame=9;}

    if(id=='1'&&cuFrame<9){cuFrame++;}else{if(id=='1')cuFrame=1;}

    window.location.href = '#slide' + cuFrame;

}
var cuFrame2=1;
function goMem(id){
    if(id=='2'&&cuFrame2>1){cuFrame2--;}else{if(id=='2')cuFrame2=6;}

    if(id=='1'&&cuFrame2<6){cuFrame2++;}else{if(id=='1')cuFrame2=1;}

    window.location.href = '#mem' + cuFrame2;
}
