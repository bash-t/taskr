function(doc) {
  if (doc.type == "task") {
    emit([doc.state, doc.created_at], doc);
  }
}
