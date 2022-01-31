import { Component, EventEmitter, OnInit, Output,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit,OnDestroy {
  @Output() sideNavToggle = new EventEmitter<void>();
  isAuth : boolean = false;
  authSubscription! : Subscription;

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
    this.authSubscription = this.authService.authChange.subscribe(authStatus=>{
      this.isAuth = authStatus;
    });
  }

  onToggleSideNav(){
    this.sideNavToggle.emit();
  }

  onLogout(){
    this.authService.logout();
  }
  ngOnDestroy(){
    this.authSubscription.unsubscribe();
  }
}
