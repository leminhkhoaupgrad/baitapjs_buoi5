function manageAdmission() {
  let e = document.getElementById("inputScore1").value,
    n = Number(document.getElementById("selLocation").value),
    t = Number(document.getElementById("selUser").value),
    u = Number(document.getElementById("inputScore2").value),
    c = Number(document.getElementById("inputScore3").value),
    l = Number(document.getElementById("inputScore4").value),
    m = true;

  if ((m &= checkScore(u) && checkScore(c) && checkScore(l))) {
    let o = u + c + l + (n + t);
    document.getElementById("txtResult").innerHTML =
      o >= e ? "Bạn đã đậu. Tổng điểm: " + o : "Bạn đã rớt. Tổng điểm: " + o;
  } else {
    document.getElementById("txtResult").innerHTML =
      "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0";
  }
}

function checkScore(e) {
  return !(e <= 0);
}

function calcElecBill() {
  let e = document.getElementById("inputName").value,
    n = Number(document.getElementById("inputKW").value),
    t = 0;

  if (0 < n && n <= 50) {
    t = n * kw_1;
  } else if (n > 50 && n <= 100) {
    t = 50 * kw_1 + (n - 50) * kw_2;
  } else if (n > 100 && n <= 200) {
    t = 50 * kw_1 + 50 * kw_2 + (n - 100) * kw_3;
  } else if (n > 200 && n <= 350) {
    t = 50 * kw_1 + 50 * kw_2 + 100 * kw_3 + (n - 200) * kw_4;
  } else if (n > 350) {
    t = 50 * kw_1 + 50 * kw_2 + 100 * kw_3 + 150 * kw_4 + (n - 350) * kw_5;
  } else {
    alert("Số kw không hợp lệ! Vui lòng nhập lại");
  }

  t = new Intl.NumberFormat("vn-VN").format(t);
  document.getElementById("txtElecBill").innerHTML =
    "Họ tên: " + e + "; Tiền điện: " + t;
}

function calcTax() {
  let e = document.getElementById("inputName2").value,
    n =
      document.getElementById("inputSalary").value -
      4e6 -
      16e5 * document.getElementById("inputUser").value,
    t = 0;

  if (n > 0 && n <= 6e7) {
    t = 0.05 * n;
  } else if (n > 6e7 && n <= 12e7) {
    t = 0.1 * n;
  } else if (n > 12e7 && n <= 21e7) {
    t = 0.15 * n;
  } else if (n > 21e7 && n <= 384e6) {
    t = 0.2 * n;
  } else if (n > 384e6 && n <= 624e6) {
    t = 0.25 * n;
  } else if (n > 624e6 && n <= 96e7) {
    t = 0.3 * n;
  } else if (n > 96e7) {
    t = 0.35 * n;
  } else {
    alert("Số tiền thu nhập không hợp lệ");
  }

  t = new Intl.NumberFormat("vn-VN").format(t);
  document.getElementById("txtTax").innerHTML =
    "Họ tên: " + e + "; Tiền thuế thu nhập cá nhân: " + t + " VND";
}

function disableInput() {
  let e = document.getElementById("selCustomer").value;
  document.getElementById("inputConnect").style.display =
    "company" == e ? "block" : "none";
}

function tinhTienCap() {
  let e = document.getElementById("selCustomer").value,
    n = document.getElementById("inputID").value,
    t = document.getElementById("inputChanel").value,
    u = document.getElementById("inputConnect").value,
    c = 0;

  if ("company" == e) {
    c = tinhTong(15, 75, 50, t, u, 5);
  } else if ("user" == e) {
    c = tinhTong(4.5, 20.5, 7.5, t, 0, 0);
  } else {
    alert("Hãy chọn loại khách hàng");
  }

  document.getElementById("txtNet").innerHTML =
    "Mã khách hàng: " +
    n +
    "; Tiền cáp: " +
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(c);
}

function tinhTong(e, n, t, u, c, l) {
  let m = e + n + t * u;
  if (c > 10) m += (c - 10) * l;
  return m;
}

document.getElementById("btnResult").onclick = manageAdmission;
const kw_1 = 500,
  kw_2 = 650,
  kw_3 = 850,
  kw_4 = 1100,
  kw_5 = 1300;
document.getElementById("btnElecBill").onclick = calcElecBill;
document.getElementById("btnTax").onclick = calcTax;
document.getElementById("btnNet").onclick = tinhTienCap;
