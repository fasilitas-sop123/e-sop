// ==========================================
// LEVEL 1 -> LEVEL 2 (Menu Utama ke List Alat Fasilitas)
// ==========================================
function bukaFasilitas(idFasilitas) {
    document.getElementById('judul-utama').style.display = 'none';
    document.getElementById('menu-utama').style.display = 'none';

    let semuaTab = document.querySelectorAll('.tab-alat');
    semuaTab.forEach(tab => {
        tab.style.display = 'none';
    });

    document.getElementById('fasilitas-' + idFasilitas).style.display = 'block';
}

// ==========================================
// LEVEL 2 -> LEVEL 3 (List Alat ke Menu Merk)
// ==========================================

// --- FASILITAS: COMMUNICATION ---
function bukaMerkVhf() {
    document.getElementById('fasilitas-communication').style.display = 'none';
    document.getElementById('halaman-merk-vhf').style.display = 'block';
}

function bukaMerkVscs() {
    document.getElementById('fasilitas-communication').style.display = 'none';
    document.getElementById('halaman-merk-vscs').style.display = 'block';
}

function bukaMerkDTIS() { 
    document.getElementById('fasilitas-communication').style.display = 'none';
    document.getElementById('halaman-merk-DTIS').style.display = 'block';
}

function bukaMerkHF() { 
    document.getElementById('fasilitas-communication').style.display = 'none';
    document.getElementById('halaman-merk-HF').style.display = 'block';
}

function bukaMerkRecorder() { 
    document.getElementById('fasilitas-communication').style.display = 'none';
    document.getElementById('halaman-merk-Recorder').style.display = 'block';
}

function bukaMerkTrunking() { 
    document.getElementById('fasilitas-communication').style.display = 'none';
    document.getElementById('halaman-merk-trunking').style.display = 'block';
}

// --- FASILITAS: NAVIGATION ---
function bukaMerkVOR() { 
    document.getElementById('fasilitas-navigation').style.display = 'none';
    document.getElementById('halaman-merk-VOR').style.display = 'block';
}

function bukaMerkDME() { 
    document.getElementById('fasilitas-navigation').style.display = 'none';
    document.getElementById('halaman-merk-DME').style.display = 'block';
}

function bukaMerkILS() { 
    document.getElementById('fasilitas-navigation').style.display = 'none';
    document.getElementById('halaman-merk-ILS').style.display = 'block';
}

function bukaMerkLOCALIZER() { 
    // 1. Sembunyikan bapaknya (Fasilitas Navigation)
    document.getElementById('fasilitas-navigation').style.display = 'none';
    // 2. Sembunyikan juga halaman komponen ILS-nya agar tidak menumpuk ke bawah
    document.getElementById('halaman-merk-ILS').style.display = 'none';
    // 3. Baru tampilkan halaman Merk Localizer (Level 4)
    document.getElementById('halaman-merk-LOCALIZER').style.display = 'block';
}

function bukaMerkGP() { 
    document.getElementById('fasilitas-navigation').style.display = 'none';
    document.getElementById('halaman-merk-ILS').style.display = 'none';
    document.getElementById('halaman-merk-GP').style.display = 'block';
}

function bukaMerkTDME() { 
    document.getElementById('fasilitas-navigation').style.display = 'none';
    document.getElementById('halaman-merk-ILS').style.display = 'none';
    document.getElementById('halaman-merk-TDME').style.display = 'block';
}

function bukaMerkMM() { 
    document.getElementById('fasilitas-navigation').style.display = 'none';
    document.getElementById('halaman-merk-ILS').style.display = 'none';
    document.getElementById('halaman-merk-MM').style.display = 'block';
}

// --- FASILITAS: SURVEILLANCE ---
function bukaMerkMSSR() { 
    document.getElementById('fasilitas-surveillance').style.display = 'none';
    document.getElementById('halaman-merk-MSSR').style.display = 'block';
}

function bukaMerkADSB() { 
    document.getElementById('fasilitas-surveillance').style.display = 'none';
    document.getElementById('halaman-merk-ADSB').style.display = 'block';
}

// --- FASILITAS: DATA PROCESSING---
function bukaMerkATMAS() { 
    document.getElementById('fasilitas-dataprocessing').style.display = 'none';
    document.getElementById('halaman-merk-ATMAS').style.display = 'block';
}

function bukaMerkAMSC() { 
    document.getElementById('fasilitas-dataprocessing').style.display = 'none';
    document.getElementById('halaman-merk-AMSC').style.display = 'block';
}



// ==========================================
// LEVEL 3 -> LEVEL 4 (Pilihan Merk ke Menu SOP)
// ==========================================
function bukaSop(idMerk) {
    let semuaTab = document.querySelectorAll('.tab-alat');
    semuaTab.forEach(tab => {
        tab.style.display = 'none';
    });
    document.getElementById('halaman-sop-' + idMerk).style.display = 'block';
}

// ==========================================
// LEVEL 4 -> LEVEL 5 (Menu SOP ke Rincian Teks)
// ==========================================
function bukaRinciSop(idRinci) {
    let semuaTab = document.querySelectorAll('.tab-alat');
    semuaTab.forEach(tab => {
        tab.style.display = 'none';
    });

    document.getElementById('rinci-' + idRinci).style.display = 'block';
}

// ==========================================
// FUNGSI UNIVERSAL TOMBOL KEMBALI
// ==========================================

// Kembali dari Level 5 ke 4, atau Level 4 ke 3
function kembaliKeHalaman(idHalamanSekarang, idHalamanTujuan) {
    document.getElementById(idHalamanSekarang).style.display = 'none';
    document.getElementById(idHalamanTujuan).style.display = 'block';
}

// Kembali khusus dari Level 3 (Daftar Merk) ke Level 2 (Daftar 10 Alat)
function kembaliKeFasilitas(idMerkYangAktif, idFasilitasTujuan) {
    document.getElementById('halaman-' + idMerkYangAktif).style.display = 'none';
    document.getElementById('fasilitas-' + idFasilitasTujuan).style.display = 'block';
}

// Kembali total ke Halaman Utama Depan (Level 1)
function kembaliKeAwal() {
    let semuaTab = document.querySelectorAll('.tab-alat');
    semuaTab.forEach(tab => {
        tab.style.display = 'none';
    });

    document.getElementById('judul-utama').style.display = 'block';
    document.getElementById('menu-utama').style.display = 'grid';
}