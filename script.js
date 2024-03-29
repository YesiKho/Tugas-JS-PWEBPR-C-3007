let header = document.getElementById('header');
let cardBG = document.getElementById('card-bg');
let cardTitle = document.getElementById('card-title');
let cardButtton = document.getElementById('card-button');
let image = document.getElementById('image');

function handleIya() {
  header.innerText = 'Anda Bohong!';
  image.src = './assets/image-2.png';
  cardBG.style.backgroundColor = '#E12E2E';
  cardTitle.innerText = 'Anda adalah seorang Teknisi';
  cardButtton.style.visibility = 'hidden';
}

function handleTidak() {
  header.innerText = 'Anda Benar!';
  image.src = './assets/image-3.png';
  cardBG.style.backgroundColor = '#6FD240';
  cardTitle.innerText = 'Anda adalah seorang Mahasiswa';
  cardButtton.style.visibility = 'hidden';
}
