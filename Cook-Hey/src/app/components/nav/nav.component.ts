import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  previousElement;

  constructor() { }

  ngOnInit(): void {
  }


  selectLink($event: MouseEvent) {

    if (this.previousElement){
      this.previousElement.classList.remove("active");
    }
    this.previousElement = ($event.target as HTMLLinkElement);

    ($event.target as HTMLLinkElement).classList.add("active");
  }
}
