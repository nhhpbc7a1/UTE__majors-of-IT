
window.onscroll = function () {
    if ($(window).scrollTop() == 0) {
        console.log(1);
        $(".header").addClass("trans")
    }
    else {
        console.log(0);
        $(".header").removeClass("trans")
    }

    // if ($(window).scrollTop() == -1) {
        // console.log(3);
        // $("#part3").addClass("trans")
    // }
    // else {
        // console.log(4);
        // $("#part3").removeClass("trans")
    // }
 }; 
// <=== Syntax Error: Closing Parenthese around an if block
var cuFrame=1;
function header_go(id){
    console.log(cuFrame);

    if(id=='2'&&cuFrame>1){cuFrame--;}else{if(id=='2')cuFrame=9;}

    if(id=='1'&&cuFrame<9){cuFrame++;}else{if(id=='1')cuFrame=1;}

    window.location.href = '#header_slide' + cuFrame;
}

var cuFrame_reader=1;
function reader_go(id){
    console.log(cuFrame_reader);

    if(id=='2'&&cuFrame_reader>1){cuFrame_reader--;}else{if(id=='2')cuFrame_reader=3;}

    if(id=='1'&&cuFrame_reader<3){cuFrame_reader++;}else{if(id=='1')cuFrame_reader=1;}

    window.location.href = '#reader_slide' + cuFrame_reader;
}
var cuFrame_mem=1;
function mem_go(id){
    if(id=='2'&&cuFrame_mem>1){cuFrame_mem--;}else{if(id=='2')cuFrame_mem=6;}

    if(id=='1'&&cuFrame_mem<6){cuFrame_mem++;}else{if(id=='1')cuFrame_mem=1;}

    window.location.href = '#mem_slide' + cuFrame_mem;
}
