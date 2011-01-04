function() {
  var profile = $$("#profile").profile;
   $.log("profile", profile, this);
  var form = $(this);
  var texta = $("textarea[name=body]", this);
  var cat = $("select[name=category]", this);
  var severity = $("select[name=severity]", this);
  var newTask = {
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
  $$(this).app.db.saveDoc(newTask, {
    success : function() {
      form[0].reset();
    }
  });
  return false;
}