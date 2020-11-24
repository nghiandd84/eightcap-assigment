export interface Language {
  key: string;
  name: string;
}

export const DEFAULT_LANGUAGE: Language = {
  key: 'en',
  name: 'English',
};

export const LANGUAGES: Language[] = [
  DEFAULT_LANGUAGE,
  {
    key: 'de',
    name: 'Deutsch',
  },
  {
    key: 'fr',
    name: 'François',
  },
];
