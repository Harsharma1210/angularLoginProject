import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-component',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'app-compnent';
  //dataInput: string

  /* ------------------------------------------------------------------------------------

  constructor(private router: Router) {}
  
  onSubmit() {
    console.log("The navigation line of code should be activated!!!");
    this.router.navigate(['/data-view']);
  }

  ------------------------------------------------------------------------------------- */
}