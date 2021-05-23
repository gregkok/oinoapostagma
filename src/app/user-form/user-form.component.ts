import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user-service.service';
import { User } from '../user';
import { AboutUs } from '../about-us';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {

  user: User;
  aboutUs: AboutUs

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { 
          this.user = new User();
          this.aboutUs = new AboutUs();
  }

  onSubmit() {
    this.userService.saveAboutUs(this.aboutUs).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/about']);
  }

}
