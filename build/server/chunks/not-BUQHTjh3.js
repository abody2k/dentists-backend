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
  const { default: Loading } = await import('./Loading-D93chH2Y.js');
  new Loading({ target: document.getElementById("nots") });
  try {
    const response = await fetch("http://3.28.252.173:3000/api/" + url, {
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
    console.log("we are here");
    if (!response.ok) {
      const { default: NotificationBubble } = await import('./NotificationBubble-C0RorCj4.js');
      new NotificationBubble({ props: {
        duration: 10,
        msg: "حدثت مشكلة اثناء الاتصال بالسيرفر الرجاء اعادة تحميل الصفحة"
      }, target: document.getElementById("nots") });
      document.getElementById("loadingWindow").remove();
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    let data = "";
    try {
      data = await response.json();
    } catch (error) {
    }
    if (res)
      res();
    document.getElementById("loadingWindow").remove();
    return data;
  } catch (error) {
    console.log(error);
    document.getElementById("loadingWindow").remove();
    const { default: NotificationBubble } = await import('./NotificationBubble-C0RorCj4.js');
    new NotificationBubble({ props: {
      duration: 10,
      msg: "حدثت مشكلة اثناء الاتصال بالسيرفر الرجاء اعادة تحميل الصفحة"
    }, target: document.getElementById("nots") });
    throw new Error("you messed up");
  }
}

export { fetchData as f, notification as n };
//# sourceMappingURL=not-BUQHTjh3.js.map
