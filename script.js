function toggleTheme() {
    let theme = document.querySelector("html")

    if (theme.dataset.theme === "dark") {
        theme.dataset.theme = "light";
    } else {
        theme.dataset.theme = "dark";
    }
}
