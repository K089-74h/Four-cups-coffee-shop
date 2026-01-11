document.getElementById("form").addEventListener("submit", function(e){
  e.preventDefault();
  let name = document.getElementById("name").value;
  document.getElementById("msg").innerText =
    "Thank you " + name + " ☕ We will contact you soon!";
});
