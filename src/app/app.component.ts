import { Component } from '@angular/core';

@Component({
  // locate custom html tag element and apply component to
  // there are 2 options 
  //1. template: '<h1>My App</h1>'  Note -  ES2015 we can use backtick `  ` for readablility
  //2. templateUrl (allow us to inject html markup to template)
  selector: 'app-root', 
  templateUrl: './app.component.html',
  //styles or styleURLs property  works the same as template. it take an array []
  styleUrls: ['./app.component.css']
  // styles: [`
  // h1{ color: #ffffff }
  // `,
  //`
  //.div {
  // font-style: italic;
  //  color: green; 
  // }
  // `]
})
export class AppComponent {
  
}

