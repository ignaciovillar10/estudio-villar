const userLang = navigator.language || navigator.userLanguage;
if (userLang.startsWith('en')) {
  setLanguage('en');
} else {
  setLanguage('es');
}
