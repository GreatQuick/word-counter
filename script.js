let inputTextArea = document.getElementById("input-textarea");
let characCount = document.getElementById("charac-count");
let wordCount = document.getElementById("word-count");

inputTextArea.addEventListener("input", () => {
    //Counts number of characters
    characCount.textContent = inputTextArea.value.length;
    //Removes whitespaces from string
    let txt = inputTextArea.value.trim();
    //Split text at spaces into array of substrings
    //Filter empty string
    //Counts length of this array
    wordCount.textContent = txt.split(/\s+/).filter((item) => item).length;
});