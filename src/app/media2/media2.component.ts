import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-media2',
  templateUrl: './media2.component.html',
  styleUrls: ['./media2.component.css']
})
export class Media2Component implements OnInit {
  allRowsSelected:boolean=false;
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
  selectFn(allRowsSelected: any){
    console.log(allRowsSelected);

  }
}

