import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate';

/**
 * The App Component
 *
 */
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
  public translatedText: string;
  public supportedLanguages: any[];
  public languageList: any;
  
  constructor(public translate: TranslateService) {  
        //translate.setDefaultLang('lang-en');
        //translate.use('lang-en');
  }
    
  ngOnInit() {
    
    this.languageList = [
      { text: 'English', value: 'lang-en' },
      { text: 'français', value: 'lang-fr' }
    ];
    
    this.setLang('lang-en');
  }
    
  isCurrentLang(lang: string) {
    return lang === this.translate.currentLang;
  }
    
  setLang(lang: string) {
    this.translate.setDefaultLang(lang);
    // set default;
    this.translate.use(lang);
  }
  
}
