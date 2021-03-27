const UIContent = document.querySelector("#content");

axios
  .get("asd.html")
  .then((res) => {
    UIContent.innerHTML = res.data;

    const UIChangeText = document.querySelector("#change-text");

    if (window.location.pathname === "/changed.html") {
      UIChangeText.textContent = "Title Changed";
    }
  })
  .catch((err) => console.log(err));
