import { Component } from '@angular/core';
import { ServerService } from 'app/server.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Response} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router, private serverService: ServerService, private route: ActivatedRoute) { }

  ngOnInit() {


    this.serverService.checkPing()
      .subscribe(
        (response: Response) => {
          console.log(response.text());
        },
        (error) => console.log(error)
      );
  }
}
