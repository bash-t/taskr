function() {
  var profile = $$("#profile").profile;
  //$.log("profile", profile, this);
  var db = $$(this).app.db;
  //determine the incremental number for the task
  db.view(db.name+"/max-task-id", {
    success : function(result) {
      var form = $(this);
        var texta = $("textarea[name=body]", this);
        var cat = $("select[name=category]", this);
        var severity = $("select[name=severity]", this);
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
        db.saveDoc(newTask, {
          success : function() {
            form[0].reset();
          }
        });
    }
  });
  return false;
}