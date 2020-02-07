import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostComponent } from './post/post.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [ // Регистрируем компоненты тут
    AppComponent, PostFormComponent, PostComponent
  ],
  imports: [ // Сюда импортируются модули
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] // Здесь мы указываем, какой компонент является главным
})
export class AppModule { }
