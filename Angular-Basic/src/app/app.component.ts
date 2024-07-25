import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Basic';
  isParagraphVisible: boolean = false;
  isHeedButtonVisible: boolean = false;
  list: string[] = [
    'List one',
    'List two'
  ];
  roles: any[]=[
    {
      role:'admin',
      text:'admin'
    },
    {
      role:'user',
      text:'user'
    },
    {
      role:'customer',
      text:'Ivan'
    },
    {
      role:'user',
      text:'user2'
    }
  ];
  
  
  show(){
    console.log('isParagraphVisible', this.isParagraphVisible);
    
  }
  changeIsHeedButtonVisible(){
    this.isHeedButtonVisible=!this.isHeedButtonVisible
  }
}
