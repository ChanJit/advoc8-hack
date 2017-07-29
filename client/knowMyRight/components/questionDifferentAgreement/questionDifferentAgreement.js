Template.questionDifferentAgreement.events({
  "click #btnNext": function (e) {
    e.preventDefault();
    Session.set("questionDifferentAgreement",false);
    Session.set("questionWorkingDays",true);
  }
})