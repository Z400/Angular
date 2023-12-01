import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy{

  

  @Input() public title:string = 'segundo-teste'
 

  ngOnInit(): void {}


 //exemplo do onChanges
  ngOnChanges(): void {
    console.log("Foi alterado com sucesso!")
  }
 
  ngOnDestroy(): void {
    console.log ("Foi destruido!")
  }

}
