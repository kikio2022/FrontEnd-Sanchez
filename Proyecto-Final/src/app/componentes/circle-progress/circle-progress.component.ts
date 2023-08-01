import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-circle-progress',
  templateUrl: './circle-progress.component.html',
  styleUrls: ['./circle-progress.component.css']
})
export class CircleProgressComponent implements OnInit{
 circles:any;
  
  
  constructor(){}

  ngOnInit(): void {
   this.circles = [
    {
      percent: 80,
      radius: 100,
      imageSrc: './assets/IMG/pngwing.com.png',
      showImage: true,
      imageWidth: 100,
      imageHeight: 90,
      outerStrokeWidth: 14,
      innerStrokeWidth: 4,
      outerStrokeColor: 'rgba(233,164,225,1)',
      innerStrokeColor: 'black',
      animation: true,
      animationDuration: 600
    },
    {
      percent: 80,
      radius: 100,
      imageSrc: './assets/IMG/pngwing.com (1).png',
      showImage: true,
      imageWidth: 100,
      imageHeight: 100,
      outerStrokeWidth: 14,
      innerStrokeWidth: 4,
      outerStrokeColor: 'rgba(233,164,225,1)',
      innerStrokeColor: 'black',
      animation: true,
      animationDuration: 600
    },
    {
      percent: 50,
      radius: 100,
      imageSrc: './assets/IMG/pngwing.com (2).png',
      showImage: true,
      imageWidth: 100,
      imageHeight: 90,
      outerStrokeWidth: 14,
      innerStrokeWidth: 4,
      outerStrokeColor: 'rgba(233,164,225,1)',
      innerStrokeColor: 'black',
      animation: true,
      animationDuration: 600
    },
    {
      percent: 60,
      radius: 100,
      imageSrc: './assets/IMG/pngwing.com (3).png',
      showImage: true,
      imageWidth: 170,
      imageHeight: 150,
      outerStrokeWidth: 14,
      innerStrokeWidth: 4,
      outerStrokeColor: 'rgba(233,164,225,1)',
      innerStrokeColor: 'black',
      animation: true,
      animationDuration: 600
    },
    {
      percent: 70,
      radius: 100,
      imageSrc: './assets/IMG/pngwing.com (4).png',
      showImage: true,
      imageWidth: 80,
      imageHeight: 100,
      outerStrokeWidth: 14,
      innerStrokeWidth: 4,
      outerStrokeColor: 'rgba(233,164,225,1)',
      innerStrokeColor: 'black',
      animation: true,
      animationDuration: 600
    },
    {
      percent: 50,
      radius: 100,
      imageSrc: './assets/IMG/pngwing.com (5).png',
      showImage: true,
      imageWidth: 130,
      imageHeight: 120,
      outerStrokeWidth: 14,
      innerStrokeWidth: 4,
      outerStrokeColor: 'rgba(233,164,225,1)',
      innerStrokeColor: 'black',
      animation: true,
      animationDuration: 600
    },
    {
      percent: 60,
      radius: 100,
      imageSrc: './assets/IMG/pngwing.com (9).png',
      showImage: true,
      imageWidth: 100,
      imageHeight: 100,
      outerStrokeWidth: 14,
      innerStrokeWidth: 4,
      outerStrokeColor: 'rgba(233,164,225,1)',
      innerStrokeColor: 'black',
      animation: true,
      animationDuration: 600
    },
    {
      percent: 100,
      radius: 100,
      imageSrc: './assets/IMG/pngwing.com (6).png',
      showImage: true,
      imageWidth: 100,
      imageHeight: 100,
      outerStrokeWidth: 14,
      innerStrokeWidth: 4,
      outerStrokeColor: 'rgba(233,164,225,1)',
      innerStrokeColor: 'black',
      animation: true,
      animationDuration: 600
    },
    {
      percent: 70,
      radius: 100,
      imageSrc: './assets/IMG/pngwing.com (8).png',
      showImage: true,
      imageWidth: 100,
      imageHeight: 140,
      outerStrokeWidth: 14,
      innerStrokeWidth: 4,
      outerStrokeColor: 'rgba(233,164,225,1)',
      innerStrokeColor: 'black',
      animation: true,
      animationDuration: 600
    }
   ];
    
  }
}
