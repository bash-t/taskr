function(doc) {
  if (doc.type == "task" && doc.nr) {
    emit(doc.nr, doc);
  }
}
