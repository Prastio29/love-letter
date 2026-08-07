const body = document.body
const konten = document.getElementById('konten')
const isiSurat = document.getElementById('isi-surat')
const btn = document.getElementById('tombol')
const atas = document.getElementById('top')
const cover = document.getElementById('cover')
const btn2 = document.getElementById('tombol2')

btn.addEventListener('click', () => {
    konten.classList.toggle('active')
    isiSurat.classList.toggle('active')
    atas.classList.toggle('active'); 
    cover.classList.toggle('active');
})
