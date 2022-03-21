import { Component } from '@angular/core';
import * as moment from 'moment';
import { Moment } from 'moment';
import { getMatch, IPMatch, IPSubnetwork, IPRange, matches } from 'ip-matching';
import {Netmask} from 'netmask';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
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
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
}
