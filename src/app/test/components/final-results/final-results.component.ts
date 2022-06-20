import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-final-results',
  templateUrl: './final-results.component.html',
  styleUrls: ['./final-results.component.scss']
})
export class FinalResultsComponent implements OnInit {

  @Input() introvertScore: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
