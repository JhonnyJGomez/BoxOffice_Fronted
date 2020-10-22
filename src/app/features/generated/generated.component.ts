import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SecoreLabedGeneratedItem } from '@interfaces/azure';
import { ScoreService } from '@services/score/score.service';

@Component({
  selector: 'app-generated',
  templateUrl: './generated.component.html',
  styleUrls: ['./generated.component.scss']
})
export class GeneratedComponent implements OnInit {
  premieres = [
    {
      id: 0,
      name: '1010 AVENGERS INFINITY WAR',
      checked: true
    },
    {
      id: 1,
      name: '1002 DEADPOOL 2',
      checked: true
    },
    {
      id: 2,
      name: '1050 HAN SOLO',
      checked: true
    },
    {
      id: 3,
      name: '1011 LOS INCREIBLES 2',
      checked: false
    },
    {
      id: 4,
      name: '0143 SOLTERA CODICIA',
      checked: false
    },
    {
      id: 5,
      name: '4578 AMOR DE MEDIA NOCHE',
      checked: true
    },
    {
      id: 6,
      name: '1245 AMOR A LA DERIVA',
      checked: true
    },
    {
      id: 7,
      name: '9864 LAS ESTAFADORAS',
      checked: true
    },
    {
      id: 8,
      name: '8765 JURASSIC WORLD',
      checked: false
    }
  ];

  dataSource: SecoreLabedGeneratedItem[] = [];
  displayedColumns: string[] = ['Rank', 'Title', 'Rating', 'Dist', 'Genre', 'ReleaseDate', 'Scored Labels'];
  codeForecast: number;

  constructor(
    private scoreService: ScoreService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.codeForecast = params.codeForecast;
      this.getScore();
    });

  }

  /** Gets Score */
  getScore() {
    this.scoreService.getScore(this.codeForecast).subscribe(response => {
      this.dataSource = response.Results.output1;
    }, error => {
      console.log('Error:', error);
    });
  }

  /** Gets the total */
  getTotal() {
    return this.dataSource.map(t => Number(t['Scored Labels'])).reduce((acc, value) => acc + value, 0);
  }
}
