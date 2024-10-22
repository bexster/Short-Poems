function generatingPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 30,
    cursor: null,
  });
}

function createPoem(event) {
  event.preventDefault();

  let userInput = document.querySelector("#user-examples");
  let apiKey = "9bd863ec182238324380bc9t7f8b14ao";
  let context = `You are a creative AI poet and can write short and sweet poems about ${userInput.value}. Please sign the end of the poem with 'AI Poet' in a <strong> element`;
  let prompt =
    "Show me a short poem about 4 lines.  Please provide the poem and separate each line. Example: <p>poem</p>";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(generatingPoem);

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class= "blink">creating your unique poem about ${userInput.value}</div>`;
}

let createForm = document.querySelector("#create-poem-form");
createForm.addEventListener("submit", createPoem);
