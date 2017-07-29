Template.questionNationality.events({
  "click #btnNext": function (e) {
    e.preventDefault();
    Session.set("questionNationality",false);
    Session.set("questionDifferentAgreement",true);
  }
})