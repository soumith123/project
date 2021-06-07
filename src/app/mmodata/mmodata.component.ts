import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../games.service';
import { Games } from '../models/game.model';

@Component({
  selector: 'app-mmodata',
  templateUrl: './mmodata.component.html',
  styleUrls: ['./mmodata.component.css']
})
export class MmodataComponent implements OnInit {

  mmo:Games;

  //injecting gamesService object
  constructor(private ar:ActivatedRoute, private fs:GamesService) { }

  ngOnInit(): void 
  {

    //getting id from url
    let id=this.ar.snapshot.params.id;
    
    //get data of MMO game with current id
    this.fs.getMMOGamesById(id).subscribe(
      obj=>
      {
        //assigning MMO game
        this.mmo=obj;
      },
      err=>
      {
        console.log("error in getting details of mmo games is:", err);
      }
    )
  } 


}