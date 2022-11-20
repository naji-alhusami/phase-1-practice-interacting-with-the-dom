window.onload = function () {
  let plusButton = document.getElementById("plus");
  let minusButton = document.getElementById("minus");
  let counter = 0;

  let interval;
  function startInterval() {
    interval = setInterval(function () {
      counter++;
      const countDisplay = document.getElementById("counter");
      countDisplay.innerHTML = counter;
    }, 1000);
  }
  startInterval();
  plusButton.addEventListener("click", () => {
    counter++;
    const countDisplay = document.getElementById("counter");
    countDisplay.innerHTML = counter;
  });

  minusButton.addEventListener("click", () => {
    counter--;
    const countDisplay = document.getElementById("counter");
    countDisplay.innerHTML = counter;
  });

  const heartButton = document.getElementById("heart");
  let clickedButton = {};
  heartButton.addEventListener("click", () => {
    if (clickedButton[counter]) {
      clickedButton[counter] = clickedButton[counter] + 1;
    } else {
      clickedButton[counter] = 1;
    }

    const list = document.querySelector("ul");
    const element = document.getElementById(counter);
    if (element) {
      element.textContent = `${counter} has ${clickedButton[counter]} likes `;
    } else {
      const newList = document.createElement("li");
      newList.setAttribute("id", counter);
      newList.textContent = `${counter} has been liked ${clickedButton[counter]} time `;
      list.appendChild(newList);
    }
  });

  //const button;
  const pauseButton = document.getElementById("pause");
  const submitButton = document.getElementById("submit");
  pauseButton.addEventListener("click", () => {
    console.log(pauseButton.innerText);
    console.log(pauseButton.textContent);
    if (pauseButton.innerText === "pause") {
      pauseButton.textContent = "resume";
      plusButton.disabled = true;
      minusButton.disabled = true;
      submitButton.disabled = true;
      heartButton.disabled = true;
      clearInterval(interval);
    } else {
      pauseButton.textContent = "pause";
      plusButton.removeAttribute("disabled");
      minusButton.disabled = false;
      submitButton.disabled = false;
      heartButton.disabled = false;
      startInterval();
    }
  });

  const commentInput = document.getElementById("comment-input");
  const comments = document.getElementById("list");
  const form = document.querySelector("form");
  const listOfComments = document.createElement("ul");
  comments.appendChild(listOfComments);
  listOfComments.setAttribute("id", "li-lists");
  const liLists = document.getElementById("li-lists");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      liLists.innerHTML += `<li>${commentInput.value}</li>`;
      commentInput.value = "";
    });

};
