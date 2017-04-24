"use strict";
import {Builder} from './Service/Builder.js';

export class VideoPlayerMenager{

constructor (parentNode){
  this.builder = new Builder(parentNode);
}

run(){
  this.builder.build();
}
start(){
  console.log("TEST");
}

}
