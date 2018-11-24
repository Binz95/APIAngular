import { Component, OnInit } from '@angular/core';
import { BatchService } from '../batch.service';
import { Batch } from '../batch';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css']
})
export class BatchComponent implements OnInit {

  constructor(private batchService: BatchService) { }
  batches: Batch[];
  batch : Batch;
  ngOnInit() {
    this.newBatchData();
    this.getbatches();
  }
  newBatchData(): void{
    this.batch= {
      BatchId: 0,
      BatchName :'',
      HoursTaken: 0,
      NoOfHours: 0,
      Remarks: '',
      StartDate: '2018-02-02',
      TentativeEndData:'2018-02-02'
    };
    }
  getbatches(): void{
   // this.batches=this.batchService.getBatchesMockData();
   this.batchService.getBatches()
   .subscribe(b=> this.batches=b);
    }
    saveBatchData():void{
      this.batchService.saveBatch(this.batch)
      .subscribe(b=>this.batches.push(b));
    }
}
