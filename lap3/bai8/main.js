function giaiHePhuongTrinh(a, b, c, d, e, f) {
    var detMain = a * d - b * c;
    var detX = e * d - b * f;
    var detY = a * f - e * c;

    if (detMain === 0) {
        if (detX === 0 && detY === 0) {
            console.log("Hệ phương trình có vô số nghiệm");
        } else {
            console.log("Hệ phương trình vô nghiệm");
        }
    } else {
        var x = detX / detMain;
        var y = detY / detMain;
        console.log("Nghiệm của hệ phương trình là:");
        console.log("x = " + x);
        console.log("y = " + y);
    }
}
giaiHePhuongTrinh(3, 2, 7, 2, 4, 8);