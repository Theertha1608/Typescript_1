import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Typescript';

  ngOnInit(): void {
    
    this.example();
  }
  
  example() {
    var variable1 = 'var Variable';
    let variable2 = 'let Variable';
    const variable3 = 'const Variable';
    let variable4 = 'Typescript';

    if(true) {
      var variable1 = 'var';
      let variable2 = 'let';
      let variable4 = 'name';
      
      console.log('1', variable1)
      console.log('2', variable2)
      console.log('3', variable3)
      console.log('4', variable4)
    }
    
    console.log('5', variable1)
    console.log('6', variable2)
    console.log('7', variable3)
    console.log('8', variable4)
  }
}