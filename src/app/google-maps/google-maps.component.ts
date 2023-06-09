import { Component,OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';


@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css']
})

export class GoogleMapsComponent implements OnInit {

  ngOnInit(): void {
    
    let loader = new Loader({
      apiKey:'AIzaSyA8wFnheQyJ6KB__u5Qh7XoAHBj2AGBoHE'
    });

    loader.load().then(() => {
      console.log("loaded map");

      //give location coordinates
      const location = {
        lat:43.45011,
        lng:-79.68292
      };

      this.map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
        center:location,
        zoom:15,
      });
    });
  }

  title="google-maps";
  private map!: google.maps.Map;
}
