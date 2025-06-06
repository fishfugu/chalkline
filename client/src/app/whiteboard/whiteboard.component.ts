// client/src/app/whiteboard/whiteboard.component.ts

import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-whiteboard',
  templateUrl: './whiteboard.component.html',
  styleUrls: ['./whiteboard.component.scss']
})
export class WhiteboardComponent implements OnInit {
  @ViewChild('whiteboardCanvas', { static: true }) whiteboardCanvas: ElementRef<HTMLCanvasElement>;
  private context: CanvasRenderingContext2D;

  drawing = false;

  constructor() { }

  ngOnInit(): void {
    this.context = this.whiteboardCanvas.nativeElement.getContext('2d');
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent): void {
    this.drawing = true;
    this.context.beginPath();
    this.context.moveTo(event.offsetX, event.offsetY);
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (this.drawing) {
      this.context.lineTo(event.offsetX, event.offsetY);
      this.context.stroke();
    }
  }

  @HostListener('mouseup')
  onMouseUp(): void {
    this.drawing = false;
  }
}
