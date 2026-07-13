// =========================================================================
// 1. FUNGSI UNIVERSAL PERPINDAHAN HALAMAN (Mencatat Riwayat ke Google Chrome)
// =========================================================================
function pindahKeHalaman(idTujuan) {
    // Sembunyikan Dashboard Utama jika ada
    let judul = document.getElementById('judul-utama');
    let menu = document.getElementById('menu-utama');
    if (judul) judul.style.display = 'none';
    if (menu) menu.style.display = 'none';

    // Sembunyikan semua laci halaman (Fasilitas, Merk, dan SOP)
    let semuaTab = document.querySelectorAll('.tab-alat, [id^="fasilitas-"]');
    semuaTab.forEach(tab => {
        tab.style.display = 'none';
    });
    
    // Tampilkan halaman target
    let elemenTujuan = document.getElementById(idTujuan);
    if (elemenTujuan) {
        elemenTujuan.style.display = 'block';
        
        // KUNCI EMAS: Catat halaman ini ke riwayat browser
        history.pushState({ halamanId: idTujuan }, "");
    } else {
        console.error("Error: ID Halaman '" + idTujuan + "' tidak ditemukan di HTML.");
    }
}

// =========================================================================
// 2. FUNGSI TOMBOL KEMBALI (Dipicu oleh tombol Merah & Back Browser)
// =========================================================================
function kembaliKeHalaman(idSekarang, idTujuan) {
    // Cukup perintahkan browser mundur 1 langkah. 
    // Event 'onpopstate' di bawah yang akan bekerja memindahkan layarnya.
    window.history.back();
}

// Singkatan/Alias fungsi lama agar kodingan HTML lamamu tidak error
function kembaliKeFasilitas(idMerk, idFasilitas) { window.history.back(); }
function kembaliKeAwal() { window.history.back(); }

// =========================================================================
// 3. DETEKTOR OTOMATIS TOMBOL BACK (Google Chrome & Mouse Back)
// =========================================================================
window.onpopstate = function(event) {
    // Sembunyikan semua halaman terlebih dahulu
    let semuaTab = document.querySelectorAll('.tab-alat, [id^="fasilitas-"]');
    semuaTab.forEach(tab => tab.style.display = 'none');

    if (event.state && event.state.halamanId) {
        // Jika ada jejak riwayat ke belakang, tampilkan halaman tersebut
        let elemen = document.getElementById(event.state.halamanId);
        if (elemen) elemen.style.display = 'block';
    } else {
        // JIKA RIWAYAT HABIS: Kembalikan otomatis ke Dashboard Utama (Level 1)
        let judul = document.getElementById('judul-utama');
        let menu = document.getElementById('menu-utama');
        if (judul) judul.style.display = 'block';
        if (menu) menu.style.display = 'grid'; // sesuaikan flex/grid tampilanmu
    }
};

// =========================================================================
// 4. REGISTRASI UTAMA: Catat Halaman Awal saat Web Pertama Kali Dibuka
// =========================================================================
window.onload = function() {
    let judul = document.getElementById('judul-utama');
    let menu = document.getElementById('menu-utama');
    
    if (judul && judul.style.display !== 'none') {
        // Jika web dibuka di dashboard utama, catat status dashboard
        history.replaceState({ halamanId: null }, "");
    } else {
        // Jika dibuka langsung di halaman tertentu
        let awal = document.querySelector('.tab-alat[style*="display: block"]') || document.querySelector('[id^="fasilitas-"][style*="display: block"]');
        if (awal) history.replaceState({ halamanId: awal.id }, "");
    }
};