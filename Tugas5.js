let produkList = [
    { id: 1, nama: "Laptop", harga: 12000000 },
    { id: 2, nama: "Smartphone", harga: 5000000 },
    { id: 3, nama: "Tablet", harga: 7000000 },
    { id: 4, nama: "Keyboard", harga: 300000 },
    { id: 5, nama: "Mouse", harga: 200000 }
];

// Tambah Produk
function tambahProduk(id, nama, harga) {
    const produkBaru = { id, nama, harga };
    produkList = [...produkList, produkBaru];

    console.log(`\n Produk berhasil ditambahkan:`);
    console.log(`→ ${nama} (Rp${harga})`);
}

// Hapus Produk 
function hapusProduk(...ids) {
    const sebelum = produkList.length;

    produkList = produkList.filter(produk => !ids.includes(produk.id));

    const terhapus = sebelum - produkList.length;

    console.log(`\n ${terhapus} produk berhasil dihapus.`);
    console.log(`→ID ${ids.join(", ")} Sudah Dihapus`);
}

// Tampilkan Produk
function tampilkanProduk() {
    console.log("\n DAFTAR PRODUK");

    produkList.forEach(({ id, nama, harga }, index) => {
        console.log(`${index + 1}. [ID: ${id}] ${nama} - Rp${harga.toLocaleString()}`);
    });
}

// =======================
// Simulasi Program
// =======================

tampilkanProduk();

tambahProduk(6, "Monitor", 2500000);
tampilkanProduk();

hapusProduk(2);
tampilkanProduk();