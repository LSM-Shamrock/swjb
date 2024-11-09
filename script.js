
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const header = document.getElementById("header");
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - header.offsetHeight;
            window.scrollTo({
                top: targetPosition
            });
        }
    });
});

window.addEventListener("scroll", function () {
    const header = document.getElementById("header");

    if (window.scrollY > 0) {
        header.classList.add("scrolled");
    }
    else {
        header.classList.remove("scrolled");
    }
});

