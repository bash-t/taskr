function(e) {
  var params = e.data.args[1];
  return {
    view : "categories",
    limit : 25,
    startkey : [params.cat, {}],
    endkey : [params.cat],
    descending : true,
    type : "newRows"
  }
}
