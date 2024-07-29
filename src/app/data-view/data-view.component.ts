import { Component, OnInit } from '@angular/core';
import { DataTransfer } from '../data.service'

@Component({
  selector: 'app-data-view',
  standalone: true,
  imports: [],
  templateUrl: './data-view.component.html',
  styleUrl: './data-view.component.css'
})
export class DataViewComponent implements OnInit {
  data: string = '';

  constructor(private dataTransfer: DataTransfer) {} //Private variable 'dataTransfer' is of type 'DataTransfer'

  ngOnInit() {
      this.data = this.dataTransfer.getData();
      console.log(this.data);
  }
}
