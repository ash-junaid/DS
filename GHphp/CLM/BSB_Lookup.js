var myCSV = "Bank,BSB\r\n";
myCSV += "Commonwealth Bank,320439\r\n";
myCSV += "ANZ Bank,494507\r\n";
myCSV += "Westpac Bank,53435904\r\n";
myCSV += "Macquarie Bank,920440\r\n";
myCSV += "National Australia Bank,649451\r\n";
console.log(myCSV);

// Begin jQuery Code
$(function() {
  function processData(allText) {
    var record_num = 2; // or however many elements there are in each row
    var allTextLines = allText.split(/\r\n|\n/);
    var lines = [];
    var headings = allTextLines.shift().split(',');
    while (allTextLines.length > 0) {
      var tobj = {},
        entry;
      entry = allTextLines.shift().split(',');
      /*
      Normally we'd read the headers into the object.
      Since we will be using Autocomplete, it's looking for an array of objects with 'label' and 'value' properties.
      tobj[headings[0]] = entry[0];
      tobj[headings[1]] = entry[1];
      */
      tobj['label'] = entry[0];
      tobj['value'] = entry[1];
      lines.push(tobj);
    }
    return lines;
  }
  var lists = [];
  /*
  In your script you will get this content from the CSV File
  // Get the CSV Content
  $.get("reference.csv", function(data) {
    lists = processData(data);
  });
  */
  // For working example 
  lists = processData(myCSV);

  $("#Bank").autocomplete({
    minLength: 3,
    source: lists,
    focus: function(event, ui) {
      $("#Bank").val(ui.item.label);
      return false;
    },
    select: function(event, ui) {
      $("#Bank").val(ui.item.label);
      $("#BSB").val(ui.item.value);
      return false;
    }
  });
});