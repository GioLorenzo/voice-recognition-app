const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
const SpeechRecognition = window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();


recognition.continuous = true;
recognition.lang = 'english';

