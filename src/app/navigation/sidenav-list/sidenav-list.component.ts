import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit,OnDestroy {

  @Output() sideNavToggle = new EventEmitter<void>();
  isAuth : boolean = false;
  authSubscription = new Subscription();
  
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
    this.onToggleSideNav();
    this.authService.logout();
  }
  ngOnDestroy(){
    this.authSubscription.unsubscribe();
  }
}

