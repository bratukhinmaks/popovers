import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.css']
})
export class PopoverComponent implements OnInit {
  @Input() position;
  @Input() title;
  constructor() { }

  ngOnInit() {
  }

}
