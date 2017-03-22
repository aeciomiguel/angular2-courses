import { Component, OnChanges, Input,
          Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ai-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    starWidth: number;
    @Input() rating: number;
    @Input() name: string;
    @Output() ratingClicked: EventEmitter<Map<string,number>> = new EventEmitter<Map<string,number>>();
    @Output() notify: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = (this.rating * 86 / 5) ;
    }

    onClick(): void {
        this.notify.emit('clicked');
        console.log(this.rating);
        console.log(new Map().set(this.name,this.rating));
        this.ratingClicked.emit(new Map().set(this.name,this.rating));
    }    


    getRoudedRating() {
        return Math.round(this.rating);
    }

}
