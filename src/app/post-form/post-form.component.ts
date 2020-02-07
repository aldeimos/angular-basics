import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Post} from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  @Output() Add: EventEmitter<Post> = new EventEmitter<Post>();

  @ViewChild('titleInput', {static: false}) inputRef: ElementRef; // Обращаемся к декоратору ViewChild, задаем ему первым параметром ссылку на нашу дом ноду. >inputRef - название переменной внутри компонента. ElementRef - конструтор, который вернет объект, в котором будет nativeElement

  title = '';
  text = '';

  constructor() { }

  ngOnInit() {
    // Если здесь хотим обратиться к этому вью-чайлду, то static: true, в другом случае false
  }

  addPost() {
    if (this.text.trim().length > 0 && this.title.trim().length > 0) {}
    const post: Post = {
      title: this.title,
      text: this.text
    };
    this.Add.emit(post);
    console.log('new post', post);
    this.title = this.text = '';
  }
  focusTitle() {
    this.inputRef.nativeElement.focus();
  }
}
