import { Component, ElementRef, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { Moment } from 'moment';
import { getMatch, IPMatch, IPSubnetwork, IPRange, matches } from 'ip-matching';
import {Netmask} from 'netmask';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';

import {DataService, Employee} from './data.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent {
  @ViewChild(DatatableComponent) table!: DatatableComponent;
  @ViewChild('columnRef') columnRef: any;
  rows :Employee[] = [];
  pageSize:number = 20;
  headerHeight = 50;
  rowHeight = 50;
  footerHeight = 50;
  temp = [...this.rows];
  columns = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Company' }];
  selected1:any[] = [];
  ColumnMode = ColumnMode;
  SelectionType = SelectionType;
  isLoading = false;

  constructor(private dataService: DataService, private el: ElementRef){
    console.log('el: ElementRef', el);
    console.dir(el);
    
  }
  
  ngOnInit(){
    this.loadPage();
    
  }
  getPageNumber(): number {
    return Math.floor(this.rows.length / this.pageSize);
  }
  selectedRow:{name:string}|null = null;
  onSelect({selected}:any) {
    if(this.selected1.length>0){
      this.selectedRow = this.selected1[this.selected1.length-1];
    }else{
      this.selectedRow = null;
    }
    console.log('Current row: ', this.selectedRow);
    if (this.selected1.length===2){
      this.selected1 = [] ;
      this.selected1.push(this.selectedRow);
    }
    console.log('Select Event', selected, this.selected1);
  }

  updateFilter(event:any) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }



  displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol'];
  // dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }
  selectionToggle(row: PeriodicElement){
    this.selection
    console.log('this.selection',this.selection);
    console.log('this.selection.selected',this.selection.selected);
    console.log('row',row);
    this.selection.clear();
    this.selection.select(row);
    // this.selection.toggle(row)
  }
  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  title = 'test';
  ip:string = "";
  ipmask:string = "";
  selectedCar: number = 1;
  selectedCars: number[] = [1];
  selected: {startDate: Moment, endDate: Moment}={startDate:moment(),endDate:moment()};
  cars = [
      { id: 1, name: 'Volvo' },
      { id: 2, name: 'Saab' },
      { id: 3, name: 'Opel' },
      { id: 4, name: 'Audi' },
  ];
  onSelectChange(e:any){
    console.log(e);
  }
  onDatePickerChange(e:any){
    console.log(e);
    console.log(this.selected.startDate.toDate());
    console.log(this.selected.startDate.toDate().getTime());
  }
  onChangeIp(){
    console.log(matches(this.ip, "192.168.0.1/32"));
  }
  validateIp(){
    try{
      console.log(matches(this.ip, this.ipmask));
    }catch(e){
      console.log('incorrect IP');
    }
  }  
  validateIpMask(){
    try{
      let block = new Netmask(this.ipmask);
      console.log(block);
    }catch(e){
      console.log('incorrect IP mask');
    }
    try{
      let block = getMatch(this.ipmask)      
      console.log(block);
    }catch(e){
      console.log('incorrect IP mask');
    }
  }  


  onScroll(event:any) {
    const offsetY = event.offsetY;
    console.log('event', event);
    console.log('offsetY', offsetY);
    
    // total height of all rows in the viewport
    const viewHeight = this.rows.length * this.rowHeight;
    console.log(viewHeight);
    
    // check if we scrolled to the end of the viewport
    // if (!this.isLoading && offsetY>200 ) {
    //   this.isLoading = true;
    //     this.loadPage();
    //   }
  }

  private loadPage() {
    this.isLoading = true;
    
    let results:Employee[] = this.dataService.getData( this.getPageNumber(), this.pageSize );
    if (results.length!==0){
      const rows = [...this.rows, ...results];
      this.rows = rows;
    }
    this.isLoading = false;
  }
  // onScroll(offsetY: number) {
  //   // total height of all rows in the viewport
  //   const viewHeight = this.el.nativeElement.getBoundingClientRect().height - this.headerHeight;

  //   // check if we scrolled to the end of the viewport
  //   if (!this.isLoading && offsetY + viewHeight >= this.rows.length * this.rowHeight) {
  //     // total number of results to load
  //     let limit = this.pageLimit;

  //     // check if we haven't fetched any results yet
  //     if (this.rows.length === 0) {
  //       // calculate the number of rows that fit within viewport
  //       const pageSize = Math.ceil(viewHeight / this.rowHeight);

  //       // change the limit to pageSize such that we fill the first page entirely
  //       // (otherwise, we won't be able to scroll past it)
  //       limit = Math.max(pageSize, this.pageLimit);
  //     }
  //     this.loadPage(limit);
  //   }
  // }
}
