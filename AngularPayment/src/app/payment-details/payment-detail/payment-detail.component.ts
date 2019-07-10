import { PaymentDetailService } from './../../shared/payment-detail.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styles: []
})
export class PaymentDetailComponent implements OnInit {

  constructor(private PayDeService:PaymentDetailService,
              private toastr:ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?:NgForm){
    if(form != null)
       form.resetForm();
    this.PayDeService.formData={
      PMID:0,
      CardOwnerName:'',
      CardNumber:'',
      ExpiarationDate:'',
      CVV:''
    }

  }

  onSubmit(form:NgForm){
    this.PayDeService.postPayementDetail(form.value).subscribe(
      res=>{
        this.resetForm(form);
        this.toastr.success('Submited Successfully','Payment Detail Register');
      },
      err=>{
        console.log(err);
      }
      
    )

  }

}
