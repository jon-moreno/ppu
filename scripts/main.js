var units = JSON.parse(units);
var rowCount = 1;

function init() {
    loadUnits();
}

function calculateUnitPrice(rowNumber) {

    var price = document.getElementById("price"+rowNumber).value;
    var amount = document.getElementById("amount"+rowNumber).value;
    var unit = document.getElementById("unit"+rowNumber).value;
    var unitPrice;
    
    unitPrice = price / amount;
    var pricePerPound = unitPrice * units[unit].conversionFactor;

    document.getElementById("unitPrice"+rowNumber).setAttribute("value", unitPrice);
    document.getElementById("pricePerPound"+rowNumber).setAttribute("value", pricePerPound);
};

function test() {
    var test = document.getElementById("unit1").value;
    document.getElementById("testParagraph").append(test);
};

function loadUnits() {
    for (const key in units) {
        if (units.hasOwnProperty(key)) {
            document.getElementById("unit1").innerHTML += "<option value=" + key + ">" + units[key].abbreviation + "</option>"

        }
    }
};

function addRow(params) {
    //Count of rows exlcuding addRowButton row
    //Create a row whose data id
    //Store count for use in other functions
    //getAttribute to find the unique id's
}

// 1. grab all the data and calulate all at once (d/n work with live calc)
// 2. calc the rows individually, but we need to pass/grab the values programmatically.