document.addEventListener("DOMContentLoaded", () => {
    const mainContent = document.getElementById("main-content");
    const navLinks = document.querySelectorAll(".nav-link");

    // Keep track of pages in order
    const pages = ["bienvenue", "chien", "services", "temoignages", "moi", "faq", "contact"];
    let currentPageIndex = 0; // Start with the first page (welcome)

    // Function to load content dynamically
    const loadContent = (page) => {
        fetch(`pages/${page}.html`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Page not found");
                }
                return response.text();
            })
            .then((data) => {
                // Inject new content
                mainContent.innerHTML = data;
            })
            .catch((error) => {
                mainContent.innerHTML = `<h1>Error 404</h1><p>Page not found.</p>`;
            });
    };

    // Handle navigation clicks
    navLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();

            // Get the target page
            const page = link.getAttribute("data-page");
            const targetPageIndex = pages.indexOf(page);

            // Load the corresponding page
            loadContent(page);

            // Update the current page index
            currentPageIndex = targetPageIndex;

            // Update active class in navbar
            navLinks.forEach((nav) => nav.classList.remove("active"));
            link.classList.add("active");
        });
    });

    // Default page load
    loadContent("bienvenue");
});