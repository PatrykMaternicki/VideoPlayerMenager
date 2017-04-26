
import {VideoMenager} from './VideoPlayerMenager/Core.js';
document.addEventListener("DOMContentLoaded", startAPI);


function startAPI(){
var App = new VideoMenager(document.querySelectorAll(".video-player-menager-imageContainer")
,document.querySelectorAll("[data-eventHandler]"));
App.run();
document.querySelectorAll("[data-button]").forEach((node)=>{
  node.addEventListener("click", ()=>{App.removeEvent();});
});

}
