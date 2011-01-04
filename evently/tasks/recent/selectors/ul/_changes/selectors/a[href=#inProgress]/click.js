function() {
  var li = $(this).parents("li");
  var task_id = li.attr("data-id");
  var app = $$(this).app;
  app.db.openDoc(task_id, {
    success : function(doc) {
      doc.state = "inProgress";
      doc.progressed_by = $("#account").attr("data-name");
      doc.progressed_at = new Date();
      app.db.saveDoc(doc, {
        success : function() {
          li.addClass("inprogress");
        }
      });
    }
  });
  return false;
}