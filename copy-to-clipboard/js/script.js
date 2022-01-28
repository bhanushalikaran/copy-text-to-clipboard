function copyTxt() {
    let textArea = document.querySelector("#textArea"); //getting textArea from Index page

    textArea.select(); //to select all text from textArea

    document.execCommand("copy"); //command to Copy Text (ctrl + C)
}