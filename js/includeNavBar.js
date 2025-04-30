document.addEventListener("DOMContentLoaded", function () {
    fetch("components/navBar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navBar-placeholder").innerHTML = data;

            // 💡 Attach navOpen function here since HTML is now loaded
            window.navOpen = function () {

                const icon = document.getElementById("hamburger-icon");
                const isOpen = icon.getAttribute("data-open") === "true";

                if (isOpen) {
                    icon.src = "public/icons/hamburger-icon-png.png";
                    icon.setAttribute("data-open", "false");
                } else {
                    icon.src = "public/icons/hamburger-close-icon-png.png"; // Replace with your close icon path
                    icon.setAttribute("data-open", "true");
                }


                const menu = document.querySelector('.menu-container');
                menu.classList.toggle('active');
                if (window.innerWidth < 1025) {
                    document.documentElement.classList.toggle('overflow-y-hidden');
                }
            };
            function updateLogoSrc() {

                const logoPng = document.getElementById("responsive-logo-png");
                if (logoPng) {
                    const width = window.innerWidth;
                    if (width >= 1024) {
                        logoPng.src = "public/icons/tdt-logo-large-png.png";
                    } else if (width >= 768) {
                        logoPng.src = "public/icons/tdt-logo-medium-png.png";
                    } else {
                        logoPng.src = "public/icons/tdt-logo-small-png.png";
                    }
                }

                // 💡 Responsive logo based on screen width
                const logo = document.getElementById("responsive-logo");
                if (logo) {
                    const width = window.innerWidth;
                    if (width >= 1024) {
                        logo.src = "/public/icons/tdt-logo-large.svg";
                    } else if (width >= 768) {
                        logo.src = "/public/icons/tdt-logo-medium.svg";
                    } else {
                        logo.src = "/public/icons/tdt-logo-small.svg";
                    }
                }
                const navOpenLogo = document.getElementById("responsive-logo-2");
                if (navOpenLogo) {
                    const width = window.innerWidth;
                    if (width >= 1024) {
                        navOpenLogo.src = "/public/icons/tdt-logo-large.svg";
                    } else if (width >= 768) {
                        navOpenLogo.src = "/public/icons/tdt-logo-medium.svg";
                    } else {
                        navOpenLogo.src = "/public/icons/tdt-logo-small.svg";
                    }
                }

            }
            // Call on initial load
            window.addEventListener('load', updateLogoSrc);

            // Call on window resize
            window.addEventListener('resize', updateLogoSrc);
        });
});



window.addEventListener('scroll', () => {
    const navbar = document.getElementById('nav-bar');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const menuContainer = document.getElementById('menu-container');

    // Check if screen width is >= 1025px
    if (window.innerWidth >= 1025) {
        if (window.scrollY > 80) { // Adjust scroll threshold as needed
            navbar.classList.add('scrolled');

        } else {
            navbar.classList.remove('scrolled');
            hamburgerIcon.classList.remove('active');
            menuContainer.classList.remove('active');

            const icon = document.getElementById("hamburger-icon");
                const isOpen = icon.getAttribute("data-open") === "true";
            icon.src = "public/icons/hamburger-icon-png.png";
            icon.setAttribute("data-open", "false");
        }
    }
});