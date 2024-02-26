import {afterNextRender, Component, ElementRef, ViewChild} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  @ViewChild('content') contentRef: ElementRef;

  constructor(private router: Router){
    afterNextRender(() => {
      // Safe to check `scrollHeight` because this will only run in the browser, not the server.
      console.log('content height: ' + this.contentRef.nativeElement.scrollHeight);
    });
  }

  comprovar(): void {

    this.router.navigate(['/principal']);
  }
}
