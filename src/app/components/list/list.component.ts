import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  selectedId: number;
  heroes$: Observable<ParamMap>;
  constructor(    private route: ActivatedRoute) { }

  ngOnInit() {
    this.heroes$ = this.route.paramMap;
  }

}
