if ("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js").then( registration => {
        console.log("SW registered");
        console.log(registration);
    }).catch ( error => {
        consoole.error("SW registration failed");
        console.error(error);
    })
}