function onlyNumbers(evt) {
    var e = evt;
    var charCode = e.keyCode;
    if (charCode > 41 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

function NumToWord(inputNumber, outputControl) {
    var str = new String(inputNumber)
    var splt = str.split("");
    var rev = splt.reverse();
    var once = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    var twos = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    var tens = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

    numLength = rev.length;
    var word = new Array();
    var j = 0;
    for (i = 0; i < numLength; i++) {

        switch (i) {
            case 0:
                if ((rev[i] == 0) || (rev[i + 1] == 1)) {
                    word[j] = "";
                }
                else {
                    word[j] = once[rev[i]];
                }
                word[j] = " " + word[j];
                break;

            case 1:
                aboveTens();
                break;

            case 2:
                if (rev[i] == 0) {
                    word[j] = "";
                }
                else if ((rev[i - 1] == 0) || (rev[i - 1] == 0)) {
                    word[j] = once[rev[i]] + " Hundred";
                }
                else {
                    word[j] = once[rev[i]] + " Hundred and ";
                }
                break;
            case 3:
                document.write("Number Out of Range");
                break;

            default:
                break;

        }
        j++;
    }
    function aboveTens() {
        if (rev[i] == 0) { word[j] = ""; }
        else if (rev[i] == 1) { word[j] = twos[rev[i - 1]]; }
        else { word[j] = tens[rev[i]]; }
    }
    word.reverse();
    var finalOutput = " ";
    for (i = 0; i < numLength; i++) {
        finalOutput = finalOutput + word[i];
    }
    document.getElementById(outputControl).innerHTML = finalOutput;
}