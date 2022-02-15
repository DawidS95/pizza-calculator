const diameter1 = document.getElementById("diameter1");
const diameter2 = document.getElementById("diameter2");
const qty1 = document.getElementById("qty1");
const qty2 = document.getElementById("qty2");
const price1 = document.getElementById("price1");
const price2 = document.getElementById("price2");
const area1val = document.getElementById("area1val");
const area2val = document.getElementById("area2val");
const pricepercm1val = document.getElementById("pricepercm1val");
const pricepercm2val = document.getElementById("pricepercm2val");
const pizza1box = document.getElementById("pizza1box");
const pizza2box = document.getElementById("pizza2box");
const verdict1 = document.getElementById("verdict1");
const verdict2 = document.getElementById("verdict2");
const anim = document.getElementById("anim");
const wrap = document.getElementById("wrap");
const smallStep = [diameter1, diameter2, price1, price2];
const smallStepLength = smallStep.length;
const bigStep = [qty1, qty2];
const bigStepLength = bigStep.length;
window.onkeyup = function (e) {
  const key = e.keyCode ? e.keyCode : e.which;
  if (key == 13) {
    check();
  }
};
for (let i = 0; i < smallStepLength; i++) {
  smallStep[i].addEventListener("change", function () {
    if (this.value < 0.01) {
      this.value = 0.01;
    }
  });
}

for (let i = 0; i < bigStepLength; i++) {
  bigStep[i].addEventListener("change", function () {
    if (this.value < 1) {
      this.value = 1;
    }
  });
}
function check() {
  if ((diameter1.value == "") || (diameter2.value == "")) {
    swal(
      "Błąd",
      "Podaj średnicę pizzy oraz opcjonalnie ilość i cenę za sztukę.",
      "error",
    );
    reset();
  } else {
    bounce();
    if (qty1.value == "") {
      qty1.value = 1;
    }
    if (qty2.value == "") {
      qty2.value = 1;
    }
    const r1 = Number(diameter1.value) / 2;
    const area1 = (Math.PI * r1 * r1) * Number(qty1.value);
    const r2 = Number(diameter2.value) / 2;
    const area2 = (Math.PI * r2 * r2) * Number(qty2.value);
    let pricepercm1 = Number((price1.value) * Number(qty1.value)) / area1;
    let pricepercm2 = Number((price2.value) * Number(qty2.value)) / area2;
    pricepercm1 = pricepercm1.toFixed(12);
    pricepercm2 = pricepercm2.toFixed(12);
    area1val.innerHTML = area1.toFixed(2);
    area2val.innerHTML = area2.toFixed(2);
    if ((price1.value == "") || (price1.value == 0)) {
      pricepercm1val.innerHTML = "-";
    } else {
      pricepercm1val.innerHTML = Number(pricepercm1 * 100).toFixed(2) + " gr.";
    }
    if ((price2.value == "") || (price2.value == 0)) {
      pricepercm2val.innerHTML = "-";
    } else {
      pricepercm2val.innerHTML = Number(pricepercm2 * 100).toFixed(2) + " gr.";
    }

    wrap.style.height = "520px";
    pizza1box.style.height = "250px";
    pizza2box.style.height = "250px";

    if (
      (price1.value == "") || (price2.value == "") || (price1.value == 0) ||
      (price2.value == 0)
    ) {
      if (area2 > area1) {
        pizza1box.style.background = "#f10b0b1a";
        pizza2box.style.background = "#37ff3717";
        anim.style.margin = "-120px -220px -100px auto";
        verdict1.innerHTML = "TA NIE!";
        verdict2.innerHTML = "TA!";
        verdict1.style.color = "red";
        verdict2.style.color = "green";
      } else if (area1 > area2) {
        pizza2box.style.background = "#f10b0b1a";
        pizza1box.style.background = "#37ff3717";
        anim.style.margin = "-120px 320px -100px auto";
        verdict2.innerHTML = "TA NIE!";
        verdict1.innerHTML = "TA!";
        verdict2.style.color = "red";
        verdict1.style.color = "green";
      } else {
        pizza2box.style.background = "#37ff3717";
        pizza1box.style.background = "#37ff3717";
        anim.style.margin = "-120px 0px -100px 0px";
        verdict2.innerHTML = "SĄ RÓWNE!";
        verdict1.innerHTML = "SĄ RÓWNE!";
        verdict1.style.color = "#0d4aa4";
        verdict2.style.color = "#0d4aa4";
      }
    } else {
      pricepercm1val.innerHTML = Number(pricepercm1 * 100).toFixed(2) + " gr.";
      pricepercm2val.innerHTML = Number(pricepercm2 * 100).toFixed(2) + " gr.";
      if (pricepercm1 > pricepercm2) {
        pizza1box.style.background = "#f10b0b1a";
        pizza2box.style.background = "#37ff3717";
        anim.style.margin = "-120px -220px -100px auto";
        verdict1.innerHTML = "TA NIE!";
        verdict2.innerHTML = "TA!";
        verdict1.style.color = "red";
        verdict2.style.color = "green";
      } else if (pricepercm2 > pricepercm1) {
        pizza2box.style.background = "#f10b0b1a";
        pizza1box.style.background = "#37ff3717";
        anim.style.margin = "-120px 320px -100px auto";
        verdict2.innerHTML = "TA NIE!";
        verdict1.innerHTML = "TA!";
        verdict2.style.color = "red";
        verdict1.style.color = "green";
      } else {
        if (area2 > area1) {
          pizza1box.style.background = "#f10b0b1a";
          pizza2box.style.background = "#37ff3717";
          anim.style.margin = "-120px -220px -100px auto";
          verdict1.innerHTML = "TA NIE!";
          verdict2.innerHTML = "TA!";
          verdict1.style.color = "red";
          verdict2.style.color = "green";
        } else if (area1 > area2) {
          pizza2box.style.background = "#f10b0b1a";
          pizza1box.style.background = "#37ff3717";
          anim.style.margin = "-120px 320px -100px auto";
          verdict2.innerHTML = "TA NIE!";
          verdict1.innerHTML = "TA!";
          verdict2.style.color = "red";
          verdict1.style.color = "green";
        } else {
          pizza2box.style.background = "#37ff3717";
          pizza1box.style.background = "#37ff3717";
          anim.style.margin = "-120px 0px -100px 0px";
          verdict2.innerHTML = "SĄ RÓWNE!";
          verdict1.innerHTML = "SĄ RÓWNE!";
          verdict1.style.color = "#0d4aa4";
          verdict2.style.color = "#0d4aa4";
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
  wrap.style.height = "420px";
  pizza1box.style.height = "140px";
  pizza2box.style.height = "140px";
  pizza1box.style.background = "rgba(255, 255, 255, 0.32)";
  pizza2box.style.background = "rgba(255, 255, 255, 0.32)";
  anim.style.margin = "-120px 0px -100px 0px";
  verdict1.style.color = "#0d4aa4";
  verdict2.style.color = "#0d4aa4";
}

function bounce() {
  anim.style.transform = "scale(.55,.55)";
  setTimeout(function () {
    anim.style.transform = "scale(.3,.3)";
  }, 1200);
}
