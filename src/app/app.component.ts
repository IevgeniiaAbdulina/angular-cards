import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    { title: 'Neat Tree',
      imageUrl: 'assets/tree.jpeg',
      username: 'nature',
      content: 'I saw thie neat tree today'
    },
    { title: 'Snowy Mountain',
      imageUrl: 'assets/mountain.jpeg',
      username: 'mountainlover',
      content: 'Beautiful view of some mountains I saw during my hike'
    },
    { title: 'Mountain Biking',
      imageUrl: 'assets/biking.jpeg',
      username: 'biking12222',
      content: 'Action shot of me riding my bike'
    },
    { title: 'Ocean waves',
      imageUrl: 'assets/ocean.jpg',
      username: 'journeyS',
      content: 'Great ocean waves'
    },
    { title: 'Clouds with sunlight',
      imageUrl: 'assets/clouds.JPG',
      username: 'flyinglover123',
      content: 'My favorite time of traveling'
    },
    { title: 'Boats on the lake',
      imageUrl: 'assets/boats.jpg',
      username: 'hobbyever',
      content: 'Weekend plans'
    },
    { title: 'Retro car',
      imageUrl: 'assets/car.jpg',
      username: 'autoY__Y',
      content: 'Lovely retro'
    }
  ]
}
