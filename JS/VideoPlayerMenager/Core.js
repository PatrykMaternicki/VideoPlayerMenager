"use strict";
import {Builder} from './Service/Builder.js';
export class VideoMenager{

constructor (parentNode,eventHandler){
  this.builder = new Builder(parentNode);
  this.eventHandler = eventHandler;
  this.activeObject;
  this.isActiveEvent = false;

}

run(){
  this.runStartVideoEvent();
}

runStartVideoEvent(){
  this.eventHandler.forEach(
(eventTarget) => {
  this.createEvent(eventTarget);
});
}
createEvent(eventTarget){
  eventTarget.addEventListener("click", ()=>{this.moveVideo(eventTarget);});
}
moveVideo(eventTarget){
  this.activeObject = document.getElementById(eventTarget.getAttribute("data-eventHandler"));
  this.startMovie();

}

startMovie(){
  this.displayImage();
  this.removeDisplayVideoFrame();
  let videoSrc = this.activeObject.getAttribute("data-video");
  this.activeObject.querySelector("iframe").classList.add("video-player");
  this.activeObject.querySelector("iframe").src =  videoSrc;
}

displayImage(){
  this.activeObject.firstElementChild.classList.add("video-player-image--display");
}
removeDisplayVideoFrame(){
  this.activeObject.querySelector("iframe").classList.remove("video-player--display");
}
removeEvent(){
  this.removeDisplayImage();
  this.displayVideo();
}
removeDisplayImage(){
  this.activeObject.firstElementChild.classList.remove("video-player-image--display");
}
displayVideo(){
  this.activeObject.querySelector("iframe").classList.add("video-player--display");
  this.activeObject.querySelector("iframe").src="";
}



}
