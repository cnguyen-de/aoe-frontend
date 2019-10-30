import { Component, OnInit } from '@angular/core';
import {Player} from '../../models/player';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.scss']
})
export class PlayerInfoComponent implements OnInit {

  players: Player[];
  selectedPlayer: Player = {
    realName: '',
    playerName: '',
    asset: ''
  };
  submitButtonClicked = false;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getData().subscribe(data => {
      // console.log(data);
      this.players = data;
    });
  }

  selectPlayer(player) {
    this.selectedPlayer = player;
  }

  sortAsc() {
    this.players.sort((a, b) => (a.realName > b.realName) ? 1 : ((b.realName > a.realName) ? -1 : 0));
  }

  sortDesc() {
    this.players.sort((a, b) => (a.realName < b.realName) ? 1 : ((b.realName < a.realName) ? -1 : 0));
  }

  submit() {
    this.submitButtonClicked = true;
    this.apiService.submit(this.selectedPlayer).subscribe(
      success => {
        this.apiService.displaySnackbar('Data successfully submitted');
        this.submitButtonClicked = false;
      },
      error => {
        console.log(error);
        this.apiService.displaySnackbar(error.message);
        this.submitButtonClicked = false;
      }
    );
  }


}
