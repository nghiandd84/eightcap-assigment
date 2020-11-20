import { Component, OnInit } from '@angular/core';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { TranslateService } from '@ngx-translate/core';
import { Language, LANGUAGES } from '@shared/index';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {

  selectedLanguage: Language | undefined | null = null;
  langagues: Language[] = LANGUAGES

  constructor(
    private translate: TranslateService,
    private localize: LocalizeRouterService
  ) { }

  ngOnInit() {
    const currentLanguageKey = this.localize.parser.currentLang;
    this.translate.use(currentLanguageKey);
    this.selectedLanguage = LANGUAGES.find(item => item.key === currentLanguageKey);
  }

  onChangeLanauge(languageKey: string) {
    this.translate.use(languageKey);
    this.localize.changeLanguage(languageKey);
    this.selectedLanguage = LANGUAGES.find(item => item.key === languageKey);

  }

}
