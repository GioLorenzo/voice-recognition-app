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
