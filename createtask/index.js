const DOMSelectors = {
  button: document.getElementById("btn"),
name:document.getElementById("name"),
job:document.getElementById("job"),
rate:document.getElementById("rate"),
  form: document.getElementById("form"),
  display: document.getElementById("display"),
  twobutton: document.getElementById("bro"),
  box: document.getElementById("big-black-box"),
  text: document.getElementById("#text"),
};
DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  input();
});
function input() {
  DOMSelectors.display.insertAdjacentHTML(
    "beforeend",
    `<div class="display-card" id="card">
  <h2 class="display-name">${DOMSelectors.name.value}</h2> 
  <h3 class="display-job">${DOMSelectors.job.value}</h3>
  <h4 class="display-rate">${DOMSelectors.rate.value}</h4>  
  </div>`
  );

}
function card() {
  let remove = document.querySelectorAll(".remove");
  remove.forEach((el) => {
    el.addEventListener("click", function (el) {
      this.parentElement.remove();
    });
  });
} 

function backgroundAndText(background,text) {
  background.style.backgroundColor ="red";
  text.textContent = "This is now a big bigger red box";
  text.style.fontSize = "40px";
}

DOMSelectors.twobutton.addEventListener("click", function(){

backgroundAndText(DOMselectors.box, DOMSelectors.text);});