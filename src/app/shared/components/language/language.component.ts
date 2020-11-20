import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {

  selectedLanguage: string | null = null;

  languages = [
    {
      key: 'English',
      value: 'en',
    },
    {
      key: 'Chinese',
      value: 'es',
    },
    {
      key: 'Vietnamese',
      value: 'vn'
    }
  ];

  constructor(private translate: TranslateService) { }

  ngOnInit() {
  }

}
