import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Language, DEFAULT_LANGUAGE, LANGUAGES } from '@shared/index';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {

  selectedLanguage: Language = DEFAULT_LANGUAGE;
  langagues: Language[] = LANGUAGES

  constructor(
    private translate: TranslateService
  ) { }

  ngOnInit() {
    console.log(this);
    // setTimeout(()=> {
    //   this.translate.use('de');
    // }, 2000)
  }

}
