import { Component } from '@angular/core';
import * as moment from 'moment';
import { Moment } from 'moment';
import { getMatch, IPMatch, IPSubnetwork, IPRange, matches } from 'ip-matching';
import {Netmask} from 'netmask';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
