Template.questionPayment.events({
  "click #btnNext": function (e) {
    e.preventDefault();
    Session.set("questionPayment",false);
    Session.set("questionBankAccount",true);
  }
})