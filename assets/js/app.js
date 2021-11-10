
$(document).ready(function(){
    console.log("hello");
       $(document).scroll(function(){
            closeNav();
            toTopArrow();
       });
  });
    
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
    let fe=document.querySelector("#fe");
    let be=document.querySelector("#be");
    let db=document.querySelector("#db");
    let tls=document.querySelector("#tools");
    switch(skill){
        case 'fe': fe.style.display="block";
                    be.style.display="none";
                    db.style.display="none";
                    tls.style.display="none";
                    break;
        case 'be': fe.style.display="none";
                    be.style.display="block";
                    db.style.display="none";
                    tls.style.display="none";
                    break;
        case 'db': fe.style.display="none";
                    be.style.display="none";
                    db.style.display="block"; 
                    tls.style.display="none";
                    break;
        case 'tls': fe.style.display="none";
                    be.style.display="none";
                    db.style.display="none";
                    tls.style.display="block";
                    break;
        default :break;
    }
}

function changePj(pj){
    let webdev=document.querySelector("#WebDev");
    let others=document.querySelector("#others");
    switch(pj){
        case 'webdev' : webdev.style.display="block";
                        others.style.display="none"; break;
        case 'others' : webdev.style.display="none";
                        others.style.display="block"; break;
        default:break;

    }
}