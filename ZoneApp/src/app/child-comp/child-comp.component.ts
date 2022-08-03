import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush

})
export class ChildCompComponent implements OnInit {

  @Input('cpt')
  parentCpt!:{value:number}

  constructor(private ref:ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  refresh(){
    // this.ref.markForCheck()
    this.ref.detectChanges()

  }

}
