document.addEventListener("DOMContentLoaded", load_content);

function load_content() {
    source = ["about", "competitions", "news"];
    for (let i = 0; i < source.length; i++) {
        fetch(`./content/${source[i]}.txt`)
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