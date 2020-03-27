import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

interface OptionType {
  label: String;
  value: any;
}

@Component({
  selector: 'lib-dropdown',
  templateUrl: 'dropdown.component.html',
  styleUrls: ['dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input() options: OptionType[];
  @Input() placeholder: String;
  @Output() selection: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  onChangeHandler($event) {
    this.selection.emit($event);
  }

}
