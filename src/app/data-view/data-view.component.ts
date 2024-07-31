import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTransfer } from '../data.service'

@Component({
  selector: 'app-data-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-view.component.html',
  styleUrl: './data-view.component.css'
})
export class DataViewComponent implements OnInit {
  data:any;

  constructor(private dataTransfer: DataTransfer) {} //Private variable 'dataTransfer' is of type 'DataTransfer'

  ngOnInit() {
      this.data = this.dataTransfer.getData(); //The data from loginPageComponent should be contained within the 'data' variable now
  }
}
