function createPoem(event) {
  event.preventDefault();
  let displayPoem = document.querySelector("#poem");
  new Typewriter("#poem", {
    strings: "creating your unique poem",
    autoStart: true,
    delay: 30,
  });
}

let createForm = document.querySelector("#create-poem-form");
createForm.addEventListener("submit", createPoem);
