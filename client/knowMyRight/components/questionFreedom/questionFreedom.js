Template.questionFreedom.events({
  "click #btnNext": function (e) {
    e.preventDefault();
    Session.set("questionFreedom",false);
    Session.set("conclusion",true);
  }
})