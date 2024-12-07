document.addEventListener("DOMContentLoaded", load_content);

function load_content() {
    let source = ["about", "competitions"];
    for (let i = 0; i < source.length; i++) {
        fetch(`./content/${source[i]}.html`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Fehler beim Laden von ${source[i]}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(content => {
            document.getElementById(`${source[i]}_content`).innerHTML = content;
        })
    }
}