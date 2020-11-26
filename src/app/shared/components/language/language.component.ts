import { Component, OnInit } from '@angular/core';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { TranslateService } from '@ngx-translate/core';
import { Language, LANGUAGES, DEFAULT_LANGUAGE } from '@shared/index';

@Component({
  selector: 'app-language',
  templateUrl: 'language.component.html',
  styleUrls: ['language.component.scss'],
})
export class LanguageComponent implements OnInit {
  selectedLanguage: Language | null = null;
  langagues: Language[] = LANGUAGES;

  constructor(
    private translate: TranslateService,
    private localize: LocalizeRouterService
  ) {}

  ngOnInit() {
    const currentLanguage =
      this.localize.parser.currentLang || DEFAULT_LANGUAGE.key;
    this.translate.use(currentLanguage);
    this.selectedLanguage =
      this.langagues.find((item) => item.key === currentLanguage) ||
      DEFAULT_LANGUAGE;
      console.log(this.translate);
  }

  onChangeLanguage(languageKey: string) {
    this.translate.use(languageKey);
    this.localize.changeLanguage(languageKey);
    this.selectedLanguage =
      this.langagues.find((item) => item.key === languageKey) ||
      DEFAULT_LANGUAGE;
      console.log(this.translate);
  }
}
