import { Component, OnInit } from '@angular/core';
import districtsData from './districts';
import { MyserviceService } from '../myservice.service';
import { DatePipe } from '@angular/common'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:MyserviceService,public datepipe: DatePipe) { }
  date;
  district;
  dataSource=[];
  displayedColumns: string[] = ['date', 'available_capacity', 'vaccine', 'min_age_limit','pincode','name','state_name','district_name','block_name','fee'];
  // Date	Available Capacity	Vaccine	Minimum Age Limit	Pincode	Hospital Name	State	District	Block Name	Fees
  ngOnInit(): void {
  }
  districts = districtsData;
  handleChange(){
    if(this.date&&this.district){
      let d = this.datepipe.transform(this.date, 'dd-MM-yyyy');
      console.log(d)
      this.service.getData(d,this.district).subscribe(data=>{
        this.dataSource = data['sessions']
        console.log(this.dataSource)
      },
      error=>{
        console.log(error)
      })
    }
  }
}


// address: "Bheempur"
// available_capacity: 96
// block_name: "Bheempur"
// center_id: 526836
// date: "05-05-2021"
// district_name: "Adilabad"
// fee: "0"
// fee_type: "Free"
// from: "09:00:00"
// lat: 19
// long: 78
// min_age_limit: 45
// name: "Bheempur PHC"
// pincode: 504312
// session_id: "3736d8cd-57e2-4834-a71e-f36cb4ff4a84"
// slots: Array(4)
// 0: "09:00AM-11:00AM"
// 1: "11:00AM-01:00PM"
// 2: "01:00PM-03:00PM"
// 3: "03:00PM-04:00PM"

// state_name: "Telangana"
// to: "16:00:00"
// vaccine: "COVISHIELD"