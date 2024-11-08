function notification(msg, time = 5) {
  const popout = document.getElementById("popout");
  popout.style.display = "box";
  popout.innerText = msg;
  popout.className = "";
  setTimeout(function() {
    popout.className = "hidden";
  }, time * 1e3);
}
async function showConfirmation(msg, action, func) {
  const { default: GeneralConfrimation } = await import('./GeneralConfrimation-BeGDq7AI.js');
  new GeneralConfrimation({ props: {
    msg,
    action,
    func
  }, target: document.getElementById("nots") });
}
async function fetchData(url, body, res, disableNotification = false) {
  const { default: Loading } = await import('./Loading-BaRzwiws.js');
  new Loading({ target: document.getElementById("nots") });
  try {
    const response = await fetch("https://echo-dent.net/api/" + url, {
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
      const { default: NotificationBubble } = await import('./NotificationBubble-9y2HSf0k.js');
      if (!disableNotification) {
        new NotificationBubble({ props: {
          duration: 10,
          msg: "حدثت مشكلة اثناء الاتصال بالسيرفر الرجاء اعادة تحميل الصفحة"
        }, target: document.getElementById("nots") });
      }
      document.getElementById("loadingWindow").remove();
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    let data = "";
    try {
      data = await response.json();
    } catch (error) {
    }
    if (res)
      ;
    document.getElementById("loadingWindow").remove();
    return data;
  } catch (error) {
    console.log(error);
    document.getElementById("loadingWindow").remove();
    const { default: NotificationBubble } = await import('./NotificationBubble-9y2HSf0k.js');
    new NotificationBubble({ props: {
      duration: 10,
      msg: "حدثت مشكلة اثناء الاتصال بالسيرفر الرجاء اعادة تحميل الصفحة"
    }, target: document.getElementById("nots") });
    throw new Error("you messed up");
  }
}
async function showNotification(msg, color) {
  const { default: NotificationBubble } = await import('./NotificationBubble-9y2HSf0k.js');
  new NotificationBubble({ props: {
    duration: 10,
    msg,
    backgroundColor: color
  }, target: document.getElementById("nots") });
}

export { showConfirmation as a, fetchData as f, notification as n, showNotification as s };
//# sourceMappingURL=not-p3GTnzPW.js.map
