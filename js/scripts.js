// User Interface Logic
window.onload = function() {
  // let h1 = document.querySelector("h1");
  // h1.onmouseover = function() {
  //   window.alert("I am a heading element.");
  // };

  let p = document.querySelector("p");
  p.onmouseover = function() {
    document.querySelector("p>em").innerText = "Don't be surprised";
    document.querySelector("p>em").style.color = "red";
  };

  let img = document.querySelector("img");
  img.onclick = function() {
    img.style.height = "700px";
  };

  let darkModeButton = document.querySelector("button.dark-mode");
  let lightModeButton = document.querySelector("button.light-mode");
  let increaseFontButton = document.querySelector("button.font-increase");
  let body = document.body;

  darkModeButton.onclick = function () {
    body.style.backgroundColor = "black";
    body.style.color = "white";
    darkModeButton.innerText = "Dark Mode: On"
    lightModeButton.innerText = "Light Mode: Off"
  }

  lightModeButton.onclick = function () {
    body.style.backgroundColor = "white";
    body.style.color = "black";
    darkModeButton.innerText = "Dark Mode: Off"
    lightModeButton.innerText = "Light Mode: On"
  }

  increaseFontButton.onclick = function () {
    body.style.fontSize = "X-large";
    increaseFontButton.innerText = "Text Size: Large"
  }

  let fNameInput = querySelector("input.fname");
  let lNameInput = querySelector("input.lname");
  let nameSubmitButton = document.querySelector("input.submit");

  nameSubmitButton.onclick = function() {
    window.alert("You submitted " + fNameInput + " " + lNameInput);
  }

};



