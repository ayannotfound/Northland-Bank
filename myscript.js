function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}


function sendMoney() {
    var enterName = document.getElementById("enterName").value;
    var enterAmount = parseInt(document.getElementById("enterAmount").value);
    var enterSName = document.getElementById("enterSName").value;

    var findSenderBankAccount = enterSName + "BankBalance";
    var enterSAmount = parseInt(document.getElementById(findSenderBankAccount).innerHTML);


    if (enterAmount > enterSAmount) {
        alert("Insufficient balance.");
    } else {
        var findUserBankAccount = enterName + "BankBalance";
        var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
        var myAccountBalance = enterSAmount - enterAmount;

        document.getElementById(findSenderBankAccount).innerHTML = myAccountBalance;
        document.getElementById(findUserBankAccount).innerHTML = finalAmount;

        alert(`Successful transaction!!\n$${enterAmount} sent to ${enterName}`);

        var createPTag = document.createElement("li");
        var textNode = document.createTextNode(`Rs ${enterAmount} sent from sender with Email-id ${enterSName}@email.com
  to recipient with Email-id ${enterName}@email.com on ${Date()}.`);
        createPTag.appendChild(textNode);
        var element = document.getElementById("transaction-history-body");
        element.insertBefore(createPTag, element.firstChild);
    }
}
