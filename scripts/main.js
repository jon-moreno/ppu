function testHeader () {
    document.getElementById("main-header").innerHTML = "Hello JavaScript!";
};

function calculateUnitPrice () {
    var price = document.getElementById("price").value;
    var amount = document.getElementById("amount").value;
    var unit;
    var unitPrice;
    unitPrice = price/amount;
    
    document.getElementById("unitPrice").setAttribute("value", unitPrice);
};