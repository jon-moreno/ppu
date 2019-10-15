var units = JSON.parse(units);

function init() {
    loadUnits();
}

function calculateUnitPrice() {
    var price = document.getElementById("price").value;
    var amount = document.getElementById("amount").value;
    var unit;
    var unitPrice;
    unitPrice = price / amount;

    document.getElementById("unitPrice").setAttribute("value", unitPrice);
};

function test() {
    document.getElementById("testParagraph").append(units.pounds.abbreviation);
};

function loadUnits() {
    for (const key in units) {
        if (units.hasOwnProperty(key)) {
            document.getElementById("unit").innerHTML += "<option value=" + key + ">" + units[key].abbreviation + "</option>"

        }
    }
};