function showScreen(screenId) {
  var screens = document.querySelectorAll(".screen");
  for (var i = 0; i < screens.length; i++) {
    screens[i].classList.remove("active");
  }
  document.getElementById(screenId).classList.add("active");
}

$("#ask-btn").click(function () {
  showScreen('screen-loading');
});

$("#info-b").click(function () {
  $("#info-popup").show();
});


// getting API response help gotten from AI
async function getRandomResponse() {
  const response = await fetch("https://www.eightballapi.com/api");
  const data = await response.json();

  console.log("Got Response:", data);

  return data.reading;
}

async function showAnswer() {
  showScreen('screen-answer');

  const response = await getRandomResponse();

  $("#get-response").text(response);
}
