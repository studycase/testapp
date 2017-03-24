"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
/**
 * The App Component
 *
 */
var AppComponent = (function () {
    function AppComponent(translate) {
        this.translate = translate;
        //translate.setDefaultLang('lang-en');
        //translate.use('lang-en');
    }
    AppComponent.prototype.ngOnInit = function () {
        this.languageList = [
            { text: 'English', value: 'lang-en' },
            { text: 'Français', value: 'lang-fr' },
            { text: 'Deutsche', value: 'lang-gr' }
        ];
        this.defaultLang = 'lang-en';
        this.langValue = localStorage.getItem('langValue');
        console.log(this.langValue);
        if (!this.langValue)
            this.setLang(this.defaultLang);
        else
            this.setLang(this.langValue);
    };
    AppComponent.prototype.isCurrentLang = function (lang) {
        return lang === this.translate.currentLang;
    };
    AppComponent.prototype.setLang = function (lang) {
        localStorage.setItem('langValue', lang);
        this.translate.setDefaultLang(lang);
        //set default;
        this.translate.use(lang);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
