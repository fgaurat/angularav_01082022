import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { InputUserNameComponent } from './input-user-name/input-user-name.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    InputUserNameComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
