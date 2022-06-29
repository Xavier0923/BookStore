import { StorageService } from './../services/storage.service';
import { Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.less'
  ]
})
export class AppComponent {
  title = 'App';

  constructor(private storageService: StorageService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('asdasdasd');

    this.storageService.localset('serverUrl', 'http://localhost:9788')
  }

}
