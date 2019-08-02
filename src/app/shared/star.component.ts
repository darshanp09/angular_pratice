import {Component,OnChanges,Input,Output,EventEmitter} from "@angular/core"

@Component({
  selector:'start-app',
  templateUrl:'./star.component.html',
  styleUrls:['./star.component.css']
})

export class StarComponent implements OnChanges{

  @Input() rating:number;
  starWidth:number;
  @Output() ratingClicked:EventEmitter<String>= new EventEmitter<string>();


  ngOnChanges(): void {
    this.starWidth=this.rating*86/5;
  }

  onStar():void{
    this.ratingClicked.emit(` This rating is clicked ${this.rating}`)
  }

}
