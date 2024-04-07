$(document).ready(function() {
    $('#menu-btn').click(function() {
        $('nav .navigation ul').addClass('active');
    });
    $('#menu-close').click(function() {
        $('nav .navigation ul').removeClass('active');
    });

    // Mendapatkan tombol checkout jika ada di halaman checkout.html
    const checkoutButton = document.getElementById('checkoutButton');

    // Menambahkan event listener untuk klik pada tombol checkout jika ada
    if (checkoutButton) {
        checkoutButton.addEventListener('click', function() {
            // Mengarahkan ke halaman index.html
            window.location.href = 'index.html';
            
            // Menampilkan notifikasi
            alert('Pesanan diajukan');
        });
    }
});
