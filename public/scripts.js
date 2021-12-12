if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./service-worker.js");
  console.log("i am installed...");
}
