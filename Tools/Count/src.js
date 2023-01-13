
function countWords(str) {
    var count = 0;
    words = str.split(" ");
    for (i = 0; i < words.length; i++) {

        if (words[i] != "")
            count += 1;
    }
    document.theForm.results.value = "There are " + count + " words in the text string you entered!";
}
function countLines() {
    var area = document.getElementById("texta");
    var text = area.value.replace(/\s+$/g, "");
    var split = text.split("\n");
    return split.length;
}
function countit(what) {
    formcontent = what.form.inStr.value
    what.form.displaycount.value = formcontent.length
}
