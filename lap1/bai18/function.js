function calculate() {
    var input1 = parseInt(document.getElementById("input1").value);
    var input2 = parseInt(document.getElementById("input2").value);
    var input3 = parseInt(document.getElementById("input3").value);

    var numbers = [input1, input2, input3];
    numbers.sort(function(a, b) {
        return a - b;
    });

    var sum = input1 + input2 + input3;
    var product = input1 * input2 * input3;

    var output = "Thứ tự: " + numbers.join(", ") + "<br>";
    output += "Tổng: " + sum + "<br>";
    output += "Tích: " + product;

    document.getElementById("output").innerHTML = output;
}