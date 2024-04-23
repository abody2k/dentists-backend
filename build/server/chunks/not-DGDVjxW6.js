function notification(msg, time = 5) {
  const popout = document.getElementById("popout");
  popout.style.display = "box";
  popout.innerText = msg;
  popout.className = "";
  setTimeout(function() {
    popout.className = "hidden";
  }, time * 1e3);
}
async function fetchData(url, body, res) {
  const response = await fetch("http://18.207.0.24:3000/api/" + url, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
      //  "Access-Control-Allow-Credentials":true
      // Add any additional headers as needed
    },
    // Replace with your actual JSON payload
    body: JSON.stringify(body)
  });
  if (!response.ok) {
    notification("حدثت مشكلة اثناء الاتصال بالسيرفر الرجاء اعادة تحميل الصفحة");
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  let data = "";
  try {
    data = await response.json();
  } catch (error) {
  }
  if (res)
    res();
  return data;
}

export { fetchData as f, notification as n };
//# sourceMappingURL=not-DGDVjxW6.js.map
