window.onload = () => {
  const omikujiBody = document.querySelector('.omikuji-body');

  omikujiBody.onclick = () => {
    omikujiBody.classList.add('animated');
  };
  
  omikujiBody.onanimationend = () => {
    omikujiBody.classList.remove('animated');
  };
}