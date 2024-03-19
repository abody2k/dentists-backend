function notification(msg, time = 5) {
  const popout = document.getElementById("popout");
  popout.style.display = "box";
  popout.innerText = msg;
  popout.className = "";
  setTimeout(function() {
    popout.className = "hidden";
  }, time * 1e3);
}

export { notification as n };
//# sourceMappingURL=not-B8uSJZrX.js.map
