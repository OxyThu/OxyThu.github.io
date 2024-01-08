
$(document).ready(function(){
    console.log("hello");
       $(document).scroll(function(){
            closeNav();
            toTopArrow();
       });
  });

$("#skillChange").change((e) => {
  let type = e.target.value;
  changeSkill(type);
})

$("#projectChange").change((e) => {
  let type = e.target.value;
  changePj(type);
})



    
function openNav(){
    $("#mySidenav").css("width","60%");
    $(".sidenav a ").css("font-size","20px");
    $(".myDropDown").css("font-size","15px");
     
      
};
function closeNav(){
    $('#mySidenav').css("width","0px");
    $(".sidenav a ").css("font-size","0");
    $(".myDropDown").css("font-size","0");
};
  
  
function toTopArrow(){
    var screenHeight=$(window).scrollTop();
    if(screenHeight>500){
      $(".fixed").css("display","block");
      $(".fixed").show(1000);
    }else{
      $(".fixed").css("display","none");
      $(".fixed").hide(1000);
    }
}
   

function changeSkill(skill){
    let fe=$("#fe");
    let be=$("#be");
    let db=$("#db");
    let tls=$("#others");
    switch(skill){
        case 'fe': fe.removeClass("d-none");
                    be.addClass("d-none");
                    db.addClass("d-none");
                    tls.addClass("d-none");
                    break;
        case 'be': fe.addClass("d-none");
                    be.removeClass("d-none");
                    db.addClass("d-none");
                    tls.addClass("d-none");
                    break;
        case 'db': fe.addClass("d-none");
                    be.addClass("d-none");
                    db.removeClass("d-none"); 
                    tls.addClass("d-none");
                    break;
        case 'ots': fe.addClass("d-none");
                    be.addClass("d-none");
                    db.addClass("d-none");
                    tls.removeClass("d-none");
                    break;
        default :break;
    }
}

function changePj(pj){
    let webdev=  $("#WebDev");
    let others= $("#others_pj");
    switch(pj){
        case 'webdev' : webdev.removeClass('d-none');
                        others.addClass('d-none'); break;
        case 'others_pj' : webdev.addClass('d-none'); 
                        others.removeClass('d-none'); break;
        default:break;

    }
}

//Biography
var words = ['I am Aung Si Thu', 'CS Student', ' Jr Backend Developer'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 70;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('.word').text(part);
  },speed);
};

$(document).ready(function () {
  wordflick();
});
//end Biography