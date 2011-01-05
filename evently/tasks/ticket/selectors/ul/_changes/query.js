function(e) {
  var params = e.data.args[1];
  return {
    view : "ticket-by-nr",
    key : parseInt(params.nr),
    type : "newRows"
  }
}
