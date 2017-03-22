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
  
  public defaultLang: string;
  public langValue: string;
  
  constructor(public translate: TranslateService) {  
        //translate.setDefaultLang('lang-en');
        //translate.use('lang-en');
  }
    
  ngOnInit() {
    
    this.languageList = [
      { text: 'English',  value: 'lang-en' },
      { text: 'Français', value: 'lang-fr' },
      { text: 'Deutsche', value: 'lang-gr' }
    ];
    
    this.defaultLang = 'lang-en';
    this.langValue = localStorage.getItem('langValue');
    
    console.log(this.langValue);
    if(!this.langValue)
      this.setLang(this.defaultLang);
    else
      this.setLang(this.langValue);
  }
    
  isCurrentLang(lang: string) {
    return lang === this.translate.currentLang;
  }
    
  setLang(lang: string) {
    localStorage.setItem('langValue', lang);
    this.translate.setDefaultLang(lang);
    //set default;
    this.translate.use(lang);
  }
  
}
