const DOM = {
    newcard: document.getElementById("newcard"),
    Restart: document.getElementById("restartgame"),
    form: document.getElementById
    ("form"),
    display: document.getElementById("display"),
    btn: document.getElementById
  ("btn"),//submit
};
DOMselectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    input();
  });

function input() {
    DOMselectors.display.insertAdjacentHTML(
      "beforeend",
  
      `
          <button class="remove btn">remove</button>
        </div>`
    );
    card();
  }
  function card() {
    let remove = document.querySelectorAll(".remove")
    console.log(remove);
    remove.forEach((el) => {el.addEventListener("click" , function (el) {
        this.parentElement.remove();    });
    });
};
