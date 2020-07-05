import { Component } from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tic-tac-toe';

  winMessage: string = '';
  isCross = false;
  itemArr: string[] = new Array(9).fill('empty');

  constructor(private toastr: ToastrService) {}

  handleClick = (itemNumber: number) => {

    if (this.winMessage) {
      return this.toastr.success(this.winMessage);
    }

    if (this.itemArr[itemNumber] !== 'empty') {
      return this.toastr.warning('Already Filled');
    }

    this.itemArr[itemNumber] = this.isCross ? 'cross': 'circle';
    this.isCross = !this.isCross;
    this.checkIsWinner();
  };

  checkIsWinner = () => {
    if(
      this.itemArr[0] !== 'empty' &&
      this.itemArr[0] === this.itemArr[1] &&
      this.itemArr[1] === this.itemArr[2]
    ) {
      this.winMessage = `${this.itemArr[0]} won`;
    } else if(
      this.itemArr[3] !== 'empty' &&
      this.itemArr[3] === this.itemArr[4] &&
      this.itemArr[4] === this.itemArr[5]
    ) {
      this.winMessage = `${this.itemArr[3]} won`;
    } else if(
      this.itemArr[6] !== 'empty' &&
      this.itemArr[6] === this.itemArr[7] &&
      this.itemArr[7] === this.itemArr[8]
    ) {
      this.winMessage = `${this.itemArr[6]} won`;
    }  else if(
      this.itemArr[0] !== 'empty' &&
      this.itemArr[0] === this.itemArr[3] &&
      this.itemArr[3] === this.itemArr[6]
    ) {
      this.winMessage = `${this.itemArr[0]} won`;
    }  else if(
      this.itemArr[1] !== 'empty' &&
      this.itemArr[1] === this.itemArr[4] &&
      this.itemArr[4] === this.itemArr[7]
    ) {
      this.winMessage = `${this.itemArr[1]} won`;
    }  else if(
      this.itemArr[2] !== 'empty' &&
      this.itemArr[2] === this.itemArr[5] &&
      this.itemArr[5] === this.itemArr[8]
    ) {
      this.winMessage = `${this.itemArr[2]} won`;
    }  else if(
      this.itemArr[0] !== 'empty' &&
      this.itemArr[0] === this.itemArr[4] &&
      this.itemArr[4] === this.itemArr[8]
    ) {
      this.winMessage = `${this.itemArr[0]} won`;
    }  else if(
      this.itemArr[2] !== 'empty' &&
      this.itemArr[2] === this.itemArr[4] &&
      this.itemArr[4] === this.itemArr[6]
    ) {
      this.winMessage = `${this.itemArr[2]} won`;
    } else {
      this.winMessage = '';
    }
  };

  reloadGame = () => {
    this.winMessage = '';
    this.isCross = false;
    this.itemArr = new Array(9).fill('empty');
  };
}
