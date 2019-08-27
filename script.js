window.onkeyup = function (e) {
    var key = e.keyCode ? e.keyCode : e.which;
    if (key == 13)
        check();
}

function check() {
    if ((document.getElementById("diameter1").value == "") || (document.getElementById("diameter2").value == "")) {
        swal('Błąd', 'Podaj średnicę pizzy oraz opcjonalnie ilość i cenę za sztukę.', 'error');
        reset();
    } else {
        bounce();
        if (document.getElementById("qty1").value == "")
            document.getElementById("qty1").value = 1;
        if (document.getElementById("qty2").value == "")
            document.getElementById("qty2").value = 1;
        var r1 = Number(document.getElementById("diameter1").value) / 2;
        var area1 = (Math.PI * r1 * r1) * Number(document.getElementById("qty1").value);
        var r2 = Number(document.getElementById("diameter2").value) / 2;
        var area2 = (Math.PI * r2 * r2) * Number(document.getElementById("qty2").value);
        var pricepercm1 = Number((document.getElementById("price1").value) * Number(document.getElementById("qty1").value)) / area1;
        var pricepercm2 = Number((document.getElementById("price2").value) * Number(document.getElementById("qty2").value)) / area2;
        pricepercm1 = pricepercm1.toFixed(12);
        pricepercm2 = pricepercm2.toFixed(12);
        document.getElementById("area1val").innerHTML = area1.toFixed(2);
        document.getElementById("area2val").innerHTML = area2.toFixed(2);
        if ((document.getElementById("price1").value == "") || (document.getElementById("price1").value == 0))
            document.getElementById("pricepercm1val").innerHTML = "-";
        else
            document.getElementById("pricepercm1val").innerHTML = Number(pricepercm1 * 100).toFixed(2) + " gr.";
        if ((document.getElementById("price2").value == "") || (document.getElementById("price2").value == 0))
            document.getElementById("pricepercm2val").innerHTML = "-";
        else
            document.getElementById("pricepercm2val").innerHTML = Number(pricepercm2 * 100).toFixed(2) + " gr.";

        document.getElementById("wrap").style.height = '520px';
        document.getElementById("pizza1box").style.height = '250px';
        document.getElementById("pizza2box").style.height = '250px';

        if ((document.getElementById("price1").value == "") || (document.getElementById("price2").value == "") || (document.getElementById("price1").value == 0) || (document.getElementById("price2").value == 0)) {
            if (area2 > area1) {
                document.getElementById("pizza1box").style.background = '#f10b0b1a';
                document.getElementById("pizza2box").style.background = '#37ff3717';
                document.getElementById("anim").style.margin = '-120px -220px -100px auto';
                document.getElementById("verdict1").innerHTML = "TA NIE!";
                document.getElementById("verdict2").innerHTML = "TA!";
                document.getElementById("verdict1").style.color = "red";
                document.getElementById("verdict2").style.color = "green";
            } else if (area1 > area2) {
                document.getElementById("pizza2box").style.background = '#f10b0b1a';
                document.getElementById("pizza1box").style.background = '#37ff3717';
                document.getElementById("anim").style.margin = '-120px 320px -100px auto';
                document.getElementById("verdict2").innerHTML = "TA NIE!";
                document.getElementById("verdict1").innerHTML = "TA!";
                document.getElementById("verdict2").style.color = "red";
                document.getElementById("verdict1").style.color = "green";
            } else {
                document.getElementById("pizza2box").style.background = '#37ff3717';
                document.getElementById("pizza1box").style.background = '#37ff3717';
                document.getElementById("anim").style.margin = '-120px 0px -100px 0px';
                document.getElementById("verdict2").innerHTML = "SĄ RÓWNE!";
                document.getElementById("verdict1").innerHTML = "SĄ RÓWNE!";
                document.getElementById("verdict1").style.color = "#0d4aa4";
                document.getElementById("verdict2").style.color = "#0d4aa4";
            }
        } else {
            document.getElementById("pricepercm1val").innerHTML = Number(pricepercm1 * 100).toFixed(2) + " gr.";
            document.getElementById("pricepercm2val").innerHTML = Number(pricepercm2 * 100).toFixed(2) + " gr.";
            if (pricepercm1 > pricepercm2) {
                document.getElementById("pizza1box").style.background = '#f10b0b1a';
                document.getElementById("pizza2box").style.background = '#37ff3717';
                document.getElementById("anim").style.margin = '-120px -220px -100px auto';
                document.getElementById("verdict1").innerHTML = "TA NIE!";
                document.getElementById("verdict2").innerHTML = "TA!";
                document.getElementById("verdict1").style.color = "red";
                document.getElementById("verdict2").style.color = "green";
            } else if (pricepercm2 > pricepercm1) {
                document.getElementById("pizza2box").style.background = '#f10b0b1a';
                document.getElementById("pizza1box").style.background = '#37ff3717';
                document.getElementById("anim").style.margin = '-120px 320px -100px auto';
                document.getElementById("verdict2").innerHTML = "TA NIE!";
                document.getElementById("verdict1").innerHTML = "TA!";
                document.getElementById("verdict2").style.color = "red";
                document.getElementById("verdict1").style.color = "green";
            } else {
                if (area2 > area1) {
                    document.getElementById("pizza1box").style.background = '#f10b0b1a';
                    document.getElementById("pizza2box").style.background = '#37ff3717';
                    document.getElementById("anim").style.margin = '-120px -220px -100px auto';
                    document.getElementById("verdict1").innerHTML = "TA NIE!";
                    document.getElementById("verdict2").innerHTML = "TA!";
                    document.getElementById("verdict1").style.color = "red";
                    document.getElementById("verdict2").style.color = "green";
                } else if (area1 > area2) {
                    document.getElementById("pizza2box").style.background = '#f10b0b1a';
                    document.getElementById("pizza1box").style.background = '#37ff3717';
                    document.getElementById("anim").style.margin = '-120px 320px -100px auto';
                    document.getElementById("verdict2").innerHTML = "TA NIE!";
                    document.getElementById("verdict1").innerHTML = "TA!";
                    document.getElementById("verdict2").style.color = "red";
                    document.getElementById("verdict1").style.color = "green";
                } else {
                    document.getElementById("pizza2box").style.background = '#37ff3717';
                    document.getElementById("pizza1box").style.background = '#37ff3717';
                    document.getElementById("anim").style.margin = '-120px 0px -100px 0px';
                    document.getElementById("verdict2").innerHTML = "SĄ RÓWNE!";
                    document.getElementById("verdict1").innerHTML = "SĄ RÓWNE!";
                    document.getElementById("verdict1").style.color = "#0d4aa4";
                    document.getElementById("verdict2").style.color = "#0d4aa4";
                }
            }
        }
        show("verdict1");
        show("verdict2");
        show("area1");
        show("area2");
        show("pricepercm1");
        show("pricepercm2");
    }
}

function show(id) {
    document.getElementById(id).style.visibility = "visible";
    document.getElementById(id).style.display = "block";
}

function hide(id) {
    document.getElementById(id).style.visibility = "hidden";
    document.getElementById(id).style.display = "none";
}

function reset() {
    hide("verdict1");
    hide("verdict2");
    hide("area1");
    hide("area2");
    hide("pricepercm1");
    hide("pricepercm2");
    document.getElementById("wrap").style.height = '420px';
    document.getElementById("pizza1box").style.height = '140px';
    document.getElementById("pizza2box").style.height = '140px';
    document.getElementById("pizza1box").style.background = 'rgba(255, 255, 255, 0.32)';
    document.getElementById("pizza2box").style.background = 'rgba(255, 255, 255, 0.32)';
    document.getElementById("anim").style.margin = '-120px 0px -100px 0px';
    document.getElementById("verdict1").style.color = "#0d4aa4";
    document.getElementById("verdict2").style.color = "#0d4aa4";
}

function bounce() {
    document.getElementById("anim").style.transform = "scale(.55,.55)";
    setTimeout(function () {
        document.getElementById("anim").style.transform = "scale(.3,.3)";
    }, 1200);
}