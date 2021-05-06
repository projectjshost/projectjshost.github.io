// Read File
function readFile(input) {
    var file = input.files[0];
    var reader = new FileReader();
    reader.readAsText(file);
  
    reader.onload = function() {
      content = reader.result;
      $("#importFile").remove();
      document.getElementById("mainFrame").contentWindow.document.write(content);
    };
  
    reader.onerror = function() {
      alert(reader.error);
    };
  
  }
