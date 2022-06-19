function copyEmail(id) {
    let cText  = document.getElementById(id);

    navigator.clipboard.writeText(cText.innerHTML);

    alert("Copied the text: " + cText.innerHTML);
}
