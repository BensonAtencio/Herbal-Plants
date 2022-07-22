import { Component, OnInit } from '@angular/core';
import {Herbal} from './herbal.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-herbal',
  templateUrl: './herbal.page.html',
  styleUrls: ['./herbal.page.scss'],
})
export class HerbalPage implements OnInit {

  herbal: Herbal[]= [

    {
      id:'sambong',
      title:'Sambong',
      image: 'assets/Herbal Plants/Sambong.jpg'
    },
    {
      id:'akapulko',
      title:'Akapulko',
      image: 'assets/Herbal Plants/Akapulko.jpg'
    },
    {
      id:'niyug-niyugan',
      title:'Niyug-Niyugan',
      image: 'assets/Herbal Plants/Niyug-niyugan.jpg'
    },
    {
      id:'tsaang_gubat',
      title:'Tsaang Gubat',
      image: 'assets/Herbal Plants/Tsaang Gubat.jpg'
    },
    {
      id:'ampalaya',
      title:'Ampalaya',
      image: 'assets/Herbal Plants/Ampalaya.jpg'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
