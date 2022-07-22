import { Component, OnInit } from '@angular/core';
import {Ailments} from './ailments.model';

@Component({
  selector: 'app-ailments',
  templateUrl: './ailments.page.html',
  styleUrls: ['./ailments.page.scss'],
})
export class AilmentsPage implements OnInit {
  ailments: Ailments[] = [
    {
      id: 'id1',
      title: 'Asthma',
      image:'assets/images/asthma.jpg'
    },
    {
      id: 'id2',
      title: 'Bee and Wasp Stings',
      image:'assets/images/bee.jpg'
    },
    {
      id: 'id3',
      title: 'Bleeding Wound',
      image:'assets/images/bleeding wound.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
