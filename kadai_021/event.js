const btn = document.getElementById("btn");
const text = document.getElementById("text");

btn.addEventListener("click", () => {
  setTimeout(() => {
    text.textContent = "2秒経ちました";
  }, 2000);
});
