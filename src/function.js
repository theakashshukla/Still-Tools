

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