const DOMSelectors = {
  button: document.getElementById("btn"),
  name:document.getElementById("name"),
  job:document.getElementById("job"),
  rate:document.getElementById("rate"),
  form: document.getElementById("form"),
  display: document.getElementById("display"),
 remove: document.querySelectorAll(".remove"),
};

function input() {
  DOMSelectors.display.insertAdjacentHTML(
    "beforeend",
    `<div class="display-card" id="card">
  <h2 class="display-name">${DOMSelectors.name.value}</h2> 
  <h3 class="display-job">${DOMSelectors.job.value}</h3>
  <h4 class="display-rate">${DOMSelectors.rate.value}</h4>  
  <button class="remove btn">remove</button>
  </div>`
  );
card();
}

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  input();
});


function card() {
  let remove = document.querySelectorAll(".remove");
  remove.forEach((el) => {
    el.addEventListener("click", function (el) {
      this.parentElement.remove();
      removed();
   
    });
  });
} 
function removed() {
  document.getElementById("History").innerHTML = `Removed Answers: ${history}`;
};