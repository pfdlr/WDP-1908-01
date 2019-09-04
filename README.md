# WDP Projekt Zespołowy

## Opis projektu

Projekt grupowy w ramach kursu KODILLA Web Developer.

Celem jest zaprojektowanie sklepu internetowego na podstawie szablonów .psd oraz uwag i wskazówek klienta.

Jest to projekt szkoleniowy mający na celu naukę pracy zespołowej z wykorzystaniem repozytoriów git, oraz rozwój umiejetności programowania wykorzystujący technologie HTML, CSS i JS.

## [Demo](https://suspicious-mccarthy-ad0c34.netlify.com/)

## Zawartość

- [Inicjacja projektu](#inicjacja-projektu)
- [NPM Scripts](#npm-scripts)
- [Git Hooks](#git-hooks)
- [Konwencje i dobre praktyki](#konwencje-i-dobre-praktyki)

## Inicjacja projektu

Po sklonowaniu projektu, zainstaluj wymagane paczki komendą `npm install`.

Teraz możesz zacząć pracę, korzystając z przygotowanych zadania `npm run watch`.

Wszystkie potrzebne do pracy pliki źródłowe znajdują się w folderze `src/`.

## NPM Scripts

Dostępne są 3 główne skrypty przyspieszające pracę:

- `build`: na bazie plików z folderu `src` buduje project w folderze `dist`
- `watch`: odpala `browser-sync`, obserwuje zmiany w folderze `src` i przebudowuje projekt
- `code-quality`: skrypt dokonuje automatycznego formatowania plików w folderze `src/`
  zgodnie z przyjętą konwencją formatowania kodu i sprawdza błędy w JS.

## Git Hooks

Projekt korzysta z Git Hooks - możliwości uruchamiania skryptów w reakcji na wybrane zdarzenia programu Git.

Za każdym razem gdy wykonasz komendę `git commit` zostanie uruchomiony skrypt `code-quality`
dla plików, które zostały wybrane do za-commit'owania.

Dokumentacja [Git Hooks](https://githooks.com/)

## Konwencje i dobre praktyki

#### Praca na kodzie projektu:

- Wykorzystanie środowiska NODE i managera pakietów NPM do automatyzacji pracy za pomocą tasków/skryptów [NPM Scripts](#npm-scripts)
- Dzielenie zadań na mniejsze- poszczególne sekcje i komponenty w osobnych plikach html i css
- Odpowiednie formatowanie kodu - wcięcia 2 spacje
- Czytelne i krótkie komentarze
- Czytelne nazewnictwo klas, funkcji i zmiennych zgodne z funkcją elementu np:
  `class="product-box"` , `let getAllTabs;`, `function classToggle { };`
- Korzystanie z preprocesora [SASS](https://sass-lang.com)
- Oddzielenie języków - osobne katalogi na pliki html, scss i js
- Optymalizacja kodu: unikanie powtórzeń, używanie rozwiązań istniejących już w projekcie
- Wykorzystanie frameworka [Bootstrap](https://getbootstrap.com/)
- Wykorzystanie pluginów JS jak [Tiny-slider](https://github.com/ganlanyuan/tiny-slider)
- Stosowanie camelCase np: `getAllTabs.forEach(showTab);`
- Responsywnośc projektu - sostosowanie do róznych urzadzeń - brake points na szerokościach: 576px, 768px, 992px, 1200px

#### Praca na repozytorium GIT

- Praca na repozytorium lokalnym i zdalnym
- Opisy commitów jezyku angielskim
- Krótkie nazwy wprowadzanych zmian rozpoczynające się od: add, change, remove, fix - np: "Add footer responsive styles"
- Kolejne nazwy branchy zgodne ze schematem WDP190801-
- Automatyzacja sprawdzania kodu z wykorzystaniem [Git Hooks](#git-hooks)
