function(resp) {
  var severities = resp.rows.map(function(r) {
    return {
      severity : r.key,
      count : (r.value * 4) + 10
    }
  });
  return {severities:severities};
}