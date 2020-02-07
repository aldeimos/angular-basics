import {ChangeDetectionStrategy, Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush // Если стави OnPush, то Ангуляр будет реагировать только на те изменения, которые пришли из вне (@Input)
})
export class PostComponent implements OnInit {
  @Output() Remove = new EventEmitter<number>();
  @Input() post: Post; // Input внутри может принимать название параметра i.e myPost
  @ContentChild('info', {static: true}) infoRef: ElementRef;
  constructor() {
    console.log('constructor'); // вызывается раньше, чем ngOnInit, но логику тут писать не рекомендуется - лучше в ngOnInit.
  }

  ngOnInit(): void {

  }

  removePost() {
    this.Remove.emit(this.post.id);
  }

}
