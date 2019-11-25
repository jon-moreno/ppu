var units = JSON.parse(units);
var unitOptions;

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

function test(testParameter) {
    // var test = document.getElementById("unit1").value;
    var test = testParameter
    document.getElementById("testParagraph").append(test);
};

function loadUnits() {
    for (const key in units) {
        if (units.hasOwnProperty(key)) {
            unitOptions += "<option value=" + key + ">" + units[key].abbreviation + "</option>";
            document.getElementById("unit1").innerHTML += unitOptions;

        }
    }
};

function clearRow(rowNumber){
    document.getElementById("price"+rowNumber).setAttribute("value", "");
    document.getElementById("amount"+rowNumber).setAttribute("value", "");
    document.getElementById("unitPrice1").setAttribute("value", "");
    document.getElementById("pricePerPound"+rowNumber).setAttribute("value", "");
}

function addRow(rowCount) {
    rowCount++;
    console.log(rowCount);
    var newRow = `    <tr>
    <td><input id="price`+rowCount+`" type="number" oninput="calculateUnitPrice(`+rowCount+`)"></td>
    <td><input id="amount`+rowCount+`" type="number" oninput="calculateUnitPrice(`+rowCount+`)"></td>
    <td><select id="unit`+rowCount+`" onchange="calculateUnitPrice(`+rowCount+`)">`+unitOptions+`</select></td>
    <td><input id="unitPrice`+rowCount+`" disabled="true" type="number"></td>
    <td><input id="pricePerPound`+rowCount+`" disabled="true" type="number"></td>
    <td><button id="clearRowButton`+rowCount+`" onclick="clearRow(`+rowCount+`)">Clear</button></td>
  </tr>
    `;

    document.getElementById("calculatorBody").innerHTML += newRow;

    //Count of rows exlcuding addRowButton row
    //Create a row whose data id
    //Store count for use in other functions
    //getAttribute to find the unique id's
}

// 1. grab all the data and calulate all at once (d/n work with live calc)
// 2. calc the rows individually, but we need to pass/grab the values programmatically.