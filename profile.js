document.addEventListener("DOMContentLoaded", function(){
    console.log("DOM loaded");
    function btn_click(){
        console.log("click");
        window.location.replace("chats.html");
        
    }
    const btn = document.getElementById("backToChat");
    // прикрепляем обработчик события "click"
    btn.addEventListener("click", btn_click);
    console.log("event added");
    });
