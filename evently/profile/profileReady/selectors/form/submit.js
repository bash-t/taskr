function() {
  var form = $(this);
  var profile = $$("#profile").profile;
  var app = $$(this).app;
  var texta = $("textarea[name=body]", this);
  var cat = $("select[name=category]", this);
  var severity = $("select[name=severity]", this);
  var ddocname = app.ddoc._id.split('/')[1];
  
  //determine the incremental number for the task
  app.db.view(ddocname + "/max-task-id", {
    success : function(result) {
        var newTask = {
          nr : result.rows[0].value + 1,
          body : texta.val(),
          category : cat.val(),
          severity : severity.val(),
          state : "new",
          type : "task",
          created_at : new Date(),
          authorProfile : profile
        };
        // works because app is attached all the way down
        // maybe we need a better way to support shared state?
        app.db.saveDoc(newTask, {
          success : function() {
            form[0].reset();
          }
        });
    }
  });
  return false;
}