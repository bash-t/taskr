function() {
  var ticketnr = $("input[name=ticket]", this);
  window.location.hash = "#/ticket/" + ticketnr.val();
  return false;
}