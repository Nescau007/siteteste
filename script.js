
  const track = document.querySelector('.carrossel-track');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  let scrollAmount = 0;

  nextBtn.addEventListener('click', () => {
    track.scrollBy({ left: 200, behavior: 'smooth' });
  });

  prevBtn.addEventListener('click', () => {
    track.scrollBy({ left: -200, behavior: 'smooth' });
  });
