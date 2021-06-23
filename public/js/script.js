if ('serviceWorker' in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker.register('../public/sw.js')
            .then(function(registration) {
                return registration.update();
            })
    });
}