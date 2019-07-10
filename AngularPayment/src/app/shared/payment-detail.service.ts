import { PaymentDetail } from './payment-detail.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  formData:PaymentDetail;
  readonly rootURL='http://localhost:3599/api';

  constructor(private http:HttpClient) { }

  postPayementDetail(formData:PaymentDetail){
    return this.http.post(this.rootURL +'/PaymentDetail',formData);

  }
}
