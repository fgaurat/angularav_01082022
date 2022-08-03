import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-test-change-detector',
  templateUrl: './test-change-detector.component.html',
  styleUrls: ['./test-change-detector.component.css'],
})
export class TestChangeDetectorComponent implements OnInit {

  cpt=0
  constructor(private ref:ChangeDetectorRef) { }

  ngOnInit(): void {
  }
  click1s(){
    interval(1000).pipe(take(10)).subscribe(() => this.cpt++)
  }


  click5s(){
    this.ref.detach()
    interval(1000).pipe(take(10)).subscribe(() => {
      console.log("click5s")
      this.cpt++
      if(this.cpt %5 ==0){
        this.ref.detectChanges()
      }
    })
  }
}
