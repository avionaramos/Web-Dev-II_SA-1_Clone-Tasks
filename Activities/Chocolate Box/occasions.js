window.onload = function () {
    // Sticky Header on Scroll
    window.addEventListener("scroll", function () {
        const header = document.querySelector("header");
        if (header) {
            if (window.pageYOffset > 100) {
                header.classList.add("is-scrolling");
            } else {
                header.classList.remove("is-scrolling");
            }
        }
    });

    // Mobile Menu Toggle
    const menuBtn = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".mobile-nav");

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener("click", function () {
            menuBtn.classList.toggle("is-active");
            mobileMenu.classList.toggle("is-active");
        });
    }

    // Content Data
    const contentData = {
        birthday: {
            heading: "BIRTHDAY",
            paragraph:
                "Delight in a birthday treat with a special box of chocolates, inspired by the sweetness of a cake topped with rich chocolate. Perfect for celebrating with indulgent flavors that make the day even more memorable.",
            imgSrc: "images/bday.png",
            circleColor: "#8b4311",
        },
        anniversary: {
            heading: "ANNIVERSARY",
            paragraph:
                "Mark your milestone with a luxurious selection of chocolates, perfect for sharing sweet moments and expressing love on your anniversary.",
            imgSrc: "images/anniv.png",
            circleColor: "#6F4E37",
        },
        holiday: {
            heading: "HOLIDAY",
            paragraph:
                "Spread the festive cheer with a holiday-themed box of chocolates, combining seasonal flavors and decorative packaging to brighten any celebration.",
            imgSrc: "images/holiday.png",
            circleColor: "#AF8F6F",
        },
        graduation: {
            heading: "GRADUATION",
            paragraph:
                "Celebrate success with an elegant chocolate box, perfect for marking this special achievement with indulgent flavors.",
            imgSrc: "images/grad.png",
            circleColor: "#A67B5B",
        },
    };

    // Update Content Dynamically
    function updateContent(type) {
        const data = contentData[type];
        if (data) {
            const imgElement = document.querySelector(".wcb");
            const headingElement = document.getElementById("dynamic-heading");
            const paragraphElement = document.getElementById("dynamic-paragraph");
            const circleElement = document.querySelector(".circle");

            if (imgElement) imgElement.src = data.imgSrc; // Update image
            if (headingElement) headingElement.textContent = data.heading; // Update heading
            if (paragraphElement) paragraphElement.textContent = data.paragraph; // Update paragraph
            if (circleElement) changeCircleColor(data.circleColor); // Update circle color
        } else {
            console.error("Content type not found:", type);
        }
    }

    function changeCircleColor(color) {
        const circle = document.querySelector(".circle");
        if (circle) {
            circle.style.background = color;
        } else {
            console.error("Circle element not found.");
        }
    }

    // Example usage: Set initial content
    updateContent("birthday");
};
