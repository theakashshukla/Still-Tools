// Base64
function encode() {
  var input = document.getElementById("input").value;
  var output = btoa(input);
  document.getElementById("output").value = output;
}

function decode() {
  var input = document.getElementById("input").value;
  var output = atob(input);
  document.getElementById("output").value = output;
}

// Bionic
function simplifyText() {
  var input = document.getElementById("input").value;
  var words = input.split(" ");
  var simplifiedWords = [];
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    if (word.length <= 3) {
      simplifiedWords.push(word);
    } else {
      var simplifiedWord = word[0] + (word.length - 2) + word[word.length - 1];
      simplifiedWords.push(simplifiedWord);
    }
  }
  var simplifiedText = simplifiedWords.join(" ");
  document.getElementById("output").value = simplifiedText;
}


// word count
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

// -----------Count Words---------
// This function still in count.html

// Css
// Hash
function generateHash() {
  var input = document.getElementById("input").value;
  var type = document.getElementById("type").value;
  var hash = "";
  if (type === "md5") {
    hash = CryptoJS.MD5(input).toString();
  } else if (type === "sha1") {
    hash = CryptoJS.SHA1(input).toString();
  } else if (type === "sha256") {
    hash = CryptoJS.SHA256(input).toString();
  } else if (type === "sha512") {
    hash = CryptoJS.SHA512(input).toString();
  }
  document.getElementById("output").value = hash;
}

function copyOutput() {
  var output = document.getElementById("output");
  output.select();
  document.execCommand("copy");
  alert("Output copied to clipboard.");
}
// -------------Markdown--------------
// This function still in markdown.html

// Password

// -------------------------------Srtring 1------------------------------
function removeEmptyLines() {
  var input = document.getElementById("input").value;
  var inputLines = input.split("\n");
  var outputLines = inputLines.filter(function (line) {
    return line.trim() !== "";
  });
  var output = outputLines.join("\n");
  document.getElementById("output").value = output;
  var removedLines = inputLines.length - outputLines.length;
  document.getElementById("removed-lines").innerHTML = removedLines;
  var removedChars = (input.length - output.length) - removedLines;
  document.getElementById("removed-chars").innerHTML = removedChars;
}

// --------------------------Srtring 2-------------------------
function removeExtraSpaces() {
  var input = document.getElementById("input").value;
  var output = input.replace(/ +/g, " ");
  document.getElementById("output").value = output;
}



// Url
function encodeUrl() {
  var input = document.getElementById("input").value;
  var output = encodeURIComponent(input);
  document.getElementById("output").value = output;
}

function decodeUrl() {
  var input = document.getElementById("input").value;
  var output = decodeURIComponent(input);
  document.getElementById("output").value = output;
}

function copyOutput() {
  var output = document.getElementById("output");
  output.select();
  document.execCommand("copy");
  alert("Output copied to clipboard.");
}