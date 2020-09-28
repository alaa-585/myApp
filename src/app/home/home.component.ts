import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  onSale: boolean = false;
  name: string = "Alaa";
  age: number = 25;
  imgSrc: string = "assets/images/portfolio-1.jpg";
  constructor() { }

  ngOnInit(): void {
  }
  welcome() {
    alert(`Welcome ${name}`)
  }
  changeSale() {
    this.onSale = !this.onSale;
  }
  eventOnK(e) {
    alert("You Press K ..!")
  }
}
