import { Injectable } from '@angular/core';
import {Player} from '../models/player';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  server = 'https://usersubmit.free.beeceptor.com/my/api/path';
  data: Player[];

  constructor(private httpClient: HttpClient, private snackBar: MatSnackBar) {
    this.generateData();
  }

  generateData() {
    this.data = [
      {
        realName: 'Brianna Forbes',
        playerName: 'Dreamlurk The Unstoppable',
        asset: 'Foghammer Lead'
      },
      {
        realName: 'Darcy Candice Ball',
        playerName: 'Crystaldash',
        asset: 'Secret Glowquake Gold'
      },
      {
        realName: 'Hillary Gibbs',
        playerName: 'Speedsoul',
        asset: 'Shifting Rainshadow Iron'
      },
      {
        realName: 'Elva Becky Hammond',
        playerName: 'Seekvenom The Mystic',
        asset: 'Valkyries\' Opal Adamant'
      },
      {
        realName: 'Enid Rose',
        playerName: 'Coincurse The Ghoul',
        asset: 'Jewelevil Bronze Of Goddesses'
      },
      {
        realName: 'Esmeralda Carrillo',
        playerName: 'Skulldart',
        asset: 'Yellow Orichalcum Of Paladins'
      }
    ];
  }

  getData() {
    return this.data;
  }

  submit(player: Player) {
    return this.httpClient.post(this.server, {data: player}).pipe(
      map((res) => {
        return res;
      })
    );
  }

  displaySnackbar(message) {
    this.snackBar.open(message, 'OK', {
      duration: 3000,
    });
  }
}
