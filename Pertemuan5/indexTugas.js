// List Tugas 1
var name = 'Komarudin';
function tombolPesan() {
  alert(`Selamat datang ${name} \n di Horion University Indonesia`);
}

// List Tugas 2
// Operasi Matimatika
function operasiMath() {
  let a = parseFloat(prompt('Masukkan nilai a:'));
  let b = parseFloat(prompt('Masukkan nilai b:'));
  let c = parseFloat(prompt('Masukkan nilai c:'));

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    document.getElementById('hasil').innerText = 'Masukkan angka valid!';
  } else {
    let hasil = (a + b) * c;
    document.getElementById('hasil').innerText = hasil;
  }
}

// Mengambil value dari inoput
function tampilkanPesan() {
  let inputSesuatu = document.getElementById('sesuatu');
  let sesuatu = inputSesuatu.value;
  alert(sesuatu);
}

// Validasi Formulir
function periksa() {
  let npm = document.formku.npm.value;
  let nama = document.formku.nama.value;
  if (npm == '') {
    alert('NPM Jangan Kosong');
  } else if (nama == '') {
    alert('Nama Jangan Kosong');
  } else {
    alert(`Data Berhasil Dikirim dengan NIM ${npm} dan nama ${nama}`);
  }
}

// Hitung Diskon Otomatis
const inputHarga = document.getElementById('harga');
const inputDiskon = document.getElementById('diskon');
const totalBayarText = document.getElementById('jumlahTotalBayar');

// Fungsi untuk menghitung dan memperbarui total pembayaran
function hitungDiskon() {
  const harga = parseFloat(inputHarga.value) || 0;
  const diskonPersen = parseFloat(inputDiskon.value) || 0;

  // Hitung jumlah diskon
  const jumlahDiskon = harga * (diskonPersen / 100);

  // Hitung total bayar
  const totalBayar = harga - jumlahDiskon;

  totalBayarText.textContent = `Rp ${totalBayar.toLocaleString('id-ID')}`;
}

inputHarga.addEventListener('input', hitungDiskon);
inputDiskon.addEventListener('input', hitungDiskon);

// Redirect Halaman
function redirect_halaman() {
  window.location = 'https://www.google.com';
}
