const DOM = {
    newcard: document.getElementById("newcard"),
    Restart: document.getElementById("restartgame"),
    
};
DOM.Restart.addEventListener("click", function () {
    DOM.menupage.innerHTML = "";
    screwvegan();
  });
  
  function card() {
    let remove = document.querySelectorAll(".remove")
    console.log(remove);
    remove.forEach((el) => {el.addEventListener("click" , function (el) {
        this.parentElement.remove();    });
    });
};
 