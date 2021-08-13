import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent implements OnInit {
  user:any;

  constructor() { }
  

  ngOnInit(): void {
  }
  submituser()
  {
    alert(this.user);
  }

}
