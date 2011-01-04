function(doc) {
  if (doc.type == "task" && doc.state != "done") {
    emit([doc.severity, doc.created_at], doc);
  }
}
