import { Component, OnInit } from '@angular/core';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { DataService } from '../data.service';


@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {
  ColumnMode = ColumnMode;
  SelectionType = SelectionType;
  rows:any[]=[];
  selected:any[]=[];
  constructor(
    public dataService:DataService
  ) { }

  ngOnInit(): void {
    this.rows = this.dataService.getRows();
  }
  onActivate(event:any){
    console.log('onActivate event',event);
    
  }
  onSelect(event:any){
    console.log('onSelect event',event);
    
  }
}
