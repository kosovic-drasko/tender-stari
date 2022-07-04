import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

import { IPomoc } from '../pomoc.model';
import { PomocService } from '../service/pomoc.service';

@Component({
  selector: 'jhi-pomoc',
  templateUrl: './pomoc.component.html',
})
export class PomocComponent {
  @ViewChild('videoPlayer', { static: false })
  videoplayer!: ElementRef;
  isPlay: boolean = false;
  toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
  }
  playPause() {
    const myVideo: any = document.getElementById('my_video_1');
    if (myVideo.paused) myVideo.play();
    else myVideo.pause();
  }

  makeBig() {
    const myVideo: any = document.getElementById('my_video_1');
    myVideo.width = 560;
  }

  makeSmall() {
    const myVideo: any = document.getElementById('my_video_1');
    myVideo.width = 320;
  }

  makeNormal() {
    const myVideo: any = document.getElementById('my_video_1');
    myVideo.width = 420;
  }

  skip(value: any) {
    let video: any = document.getElementById('my_video_1');
    video.currentTime += value;
  }

  restart() {
    let video: any = document.getElementById('my_video_1');
    video.currentTime = 0;
  }
}
