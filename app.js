const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
const SpeechRecognition = window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();


recognition.continuous = true;
recognition.lang = 'english';

recognition.onstart = () => {
  console.log('yayy voice is activated!');
}

btn.addEventListener('blur', () => recognition.start());

btn.addEventListener('focus', () => {
  recognition.onresult = (event1) => {
    const current = event1;
    const newContent = current.results[0][0].transcript;
    content.textContent = "\"" + newContent + "\"";
    readOutLoud(newContent);
  }
  recognition.stop();
});

const readOutLoud = message => {
  const speech = new SpeechSynthesisUtterance();
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = .6;
  speech.text = message;

  window.speechSynthesis.speak(speech);
}


document.addEventListener('click', () => {
  btn.focus() ? btn.blur() : btn.focus();
});


