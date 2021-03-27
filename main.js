const UIContent = document.querySelector("#content");

axios
  .get("asd.html")
  .then((res) => {
    UIContent.innerHTML = res.data;

    const UIChangeText = document.querySelector("#change-text");

    if (window.location.pathname === "/changed.html") {
      UIChangeText.textContent = "Title Changed";
    } else if (window.location.pathname === "/page2.html") {
      UIChangeText.textContent = "This is page 2";
    } else if (window.location.pathname === "/index.html") {
      UIChangeText.textContent = "This is the index page";
    }
  })
  .catch((err) => console.log(err));
