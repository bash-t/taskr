function(doc) {
  if (doc.type == "task" && doc.state != "done") {
    emit([doc.category, doc.created_at], doc);
  }
}
