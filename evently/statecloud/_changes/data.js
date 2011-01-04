function(resp) {
  var states = resp.rows.map(function(r) {
    return {
      state : (r.key == 'done') ? "[" + r.key + "]" : r.key ,
      state_uri : r.key,
      count : (r.value * 4) + 10
    }
  });
  return {states:states};
}