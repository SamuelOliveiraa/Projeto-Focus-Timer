import state from "./state.js";
import * as timer from "./timer.js";
const body = document.querySelector("body");
import * as el from "./elements.js";
import { bgAudio } from "./audio.js";

export function toggleRuning() {
  body.classList.toggle("runing");
  state.isRunning = !state.isRunning;

  timer.countdown();
}

export function set() {
  el.minutes.setAttribute("contenteditable", true);
  el.minutes.focus();
}
export function reset() {
  body.classList.remove("runing");
  state.isRunning = false;
  timer.updateDisplay();
}

export function toggleMusic() {
  body.classList.toggle("music-on");
  state.isMute = !state.isMute;

  if (!state.isMute) {
    bgAudio.play();
    return;
  }

  bgAudio.pause();
}
