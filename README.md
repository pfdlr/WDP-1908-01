# WDP Projekt Zespołowy

## Opis projektu

Projekt grupowy w ramach kursu KODILLA Web Developer.
Celem jest zaprojektowanie sklepu internetowego na podstawie szablonów .psd oraz uwag i wskazówek klienta.
Jest to projekt szkoleniowy mający na celu naukę pracy zespołowej z wykorzystaniem repozytoriów git i oprogramowania do zarządzania projektami JIRA, oraz rozwój umiejetności programowania wykorzystujący technologie HTML, CSS i JS.

## Demo

https://suspicious-mccarthy-ad0c34.netlify.com/

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

## Konwencje i dobre praktyki

- Korzystanie z narzędzia JIRA do zarządzania projektem
- Dzielenie zadań na mniejsze- poszczególne sekcje i komponenty w osobnych plikach html i css
- Odpowiednie formatowanie kodu - wcięcia
- Czytelne i krótkie komentarze
- Czytelne nazewnictwo klas zgodne z funkcją elementu
- Korzystanie z preprocesora SASS
- Oddzielenie języków
- Optymalizacja kodu: unikanie powtórzeń, używanie rozwiązań istniejących już w projekcie
- GIT Praca na repozytorium lokalnym i zdalnym
- Opisy commitów jezyku angielskim
- Krótkie nazwy wprowadzanych zmian rozpoczynające się od: add, change, remove, fix
- Nazwy branchy zgodne z nazwami tasków z JIRA
- Automatyzacja sprawdzania kodu z wykorzystaniem Git Hoocks
- Wykorzystanie frameworka Bootstrap
- Wykorzystanie pluginów JS jak Tiny-slider
- Wykorzystanie środowiska NODE i managera pakietów NPM do automatyzacji pracy
- Stosowanie camelCase
- Responsywnośc projektu - sostosowanie do róznych urzadzeń
