import { Component } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {
  title = 'my_first_project';
  name = "";
  showResources = "block";

  myFunction() {
    return "ola mundo";
  }

  myEvHandler() {
    this.showResources = 'none';
  }

  onChange(event: Event) {
    this.name = (event.target as HTMLInputElement).value;
  }
}
