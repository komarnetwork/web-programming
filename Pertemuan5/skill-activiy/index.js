// Function
var a = 7;
var b = 8;

if (a == b) {
  alert('sama');
  console.log('sama');
} else if (a != b) {
  console.log('beda');
}

function pesan() {
  alert('Selamat datang \n di Horion University Indonesia');
}

// Value Element HTML
function konfirmasi() {
  var p = document.getElementById('kotak-ku').value;
  var x = confirm('Yakin mau melanjutkan proses??');

  if (x) {
    document.writeln(p);
  } else {
    document.writeln('Pesan ini bukan value dari kotak-ku');
  }
}

// Validasi Formulir
function periksa() {
  if (document.formku.txtnpm.value == '') {
    alert('NPM Jangan Kosong');
    document.formku.txtnpm.focus();
    return false;
  }
}

// Redirect Halaman
function buka_halaman() {
  var x = confirm('Pilih OK atau Cancel');

  if (x) {
    window.location = 'halaman_A.html';
  } else {
    window.location = 'halaman_B.html';
  }
}
