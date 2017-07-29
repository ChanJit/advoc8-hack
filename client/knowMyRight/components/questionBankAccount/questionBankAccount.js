Template.questionBankAccount.events({
  "click #btnNext": function (e) {
    e.preventDefault();
    Session.set("questionBankAccount",false);
    Session.set("questionFreedom",true);
  }
})