function(e) {
  var params = e.data.args[1];
  return {
    view : "state-cloud",
    limit : 25,
    startkey : [params.name, {}],
    endkey : [params.name],
    descending : true,
    reduce : false,
    type : "newRows"
  }
}
