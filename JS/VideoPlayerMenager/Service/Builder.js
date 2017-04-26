import {VideoObject} from '../domainApplication/VideoObject.js';

export class Builder {
constructor(nodes){
  this.nodes = nodes;
  this.component = new VideoObject();
  this.list = new Array();
}

build(){
this.nodes.forEach(
  (node)=>{
    this.constructObject(node);
  }
);
}

constructObject(node){
  this.constructImageSrc(node);
  this.constructVideoSrc(node);
  this.pushToList(this.component);
}

constructImageSrc(node){
  this.component.setImageSrc(node.firstElementChild.src);
}
constructVideoSrc(node){
  this.component.setVideoSrc(node.getAttribute("data-video"));
}
pushToList(item){
  this.list.push(item);
}



}
