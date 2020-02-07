import { Component } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
} // Описали интерфейс

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [ // определили и интерфейс, сделали моки
    {title: 'Привет, мир!', text: 'Я роняю западу у, я роняю запад у!', id: 1},
    // {title: 'Пока, мир....', text: 'У меня не получилось уронить запад...', id: 2}
  ];
  updatePosts(post: Post) {
    this.posts.unshift(post);
  }
  removePost(id: number) {
    this.posts = this.posts.filter((item) => item.id !== id);
  }
}
