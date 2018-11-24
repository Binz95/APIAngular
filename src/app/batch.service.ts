import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Batch } from './batch';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BatchService {
  batches: Batch[];
  constructor(private httpClient: HttpClient) { 

  }
  getBatches(): Observable<Batch[]>{
    return this.httpClient.get<Batch[]>("http://localhost:61263/api/Batches");
  }
  getBatchesMockData(): Batch[]{
    this.batches=[{
      BatchId:1,
      BatchName: 'CCS',
      HoursTaken:45,
      NoOfHours:120,
      Remarks:'NA',
      StartDate:'02-02-2018',
      TentativeEndData:''
    },
    {
        BatchId:1,
        BatchName: 'CCS',
        HoursTaken:45,
        NoOfHours:120,
        Remarks:'NA',
        StartDate:'02-02-2018',
        TentativeEndData:''
    }
  ];
  return this.batches;
  }
  saveBatch(batch:Batch): Observable<Batch>{
    const header =new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.httpClient.post<Batch>("http://localhost:61263/api/Batches", batch, { headers: header });
  }
}