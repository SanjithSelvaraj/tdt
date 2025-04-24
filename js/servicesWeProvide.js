document.addEventListener("DOMContentLoaded", function () {
    fetch("components/serviceWeProvide.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("services-we-provide-placeholder").innerHTML = data;
        });
});
