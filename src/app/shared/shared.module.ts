import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { LoginNameComponent } from './login-name/login-name.component';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [LoginNameComponent],
  exports: [MaterialModule]
})
export class SharedModule {}
