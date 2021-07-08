// select first header fuction
function ddlselect() {
  var d = document.getElementById("ddselect");
  var displaytext = d.options[d.selectedIndex].text;
  document.getElementById("txtvalue").value = displaytext;
}
// select first header fuction
