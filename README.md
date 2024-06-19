# Welcome to Gamebuddy 👋

## Introduction

Game Buddy is een app waarmee je andere gamers kan vinden waarmee je samen kan spelen. Tijdens de onboarding geef je aan wat je voorkeuren zijn.

## Getting started

1. Installeer dependencies

   ```bash
   npm install
   ```

2. Start de app

   ```bash
    npx expo start
   ```

De expo terminal biedt je een aantal opties aan:

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

Deze sample app is volledig gebouwd binnen de Expo Go omgeving.

## Bronnen

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).

## Project structuur

## Imports

Met behulp van configuratie in `tsconfig.json` is er gebruik gemaakt van import aliases. Dit voorkomt lange import paden in componenten en houdt de code leesbaarder.

### Components

De `components` folder is voor alle componenten die over de gehele applicatie, meerdere keren gebruikt worden. Alle componenten binnen deze folder houden zelf geen state vast. En zijn volledig configureerbaar door slim gebruik te maken van props. Met deze gedachtegang maakt het niet uit waar je een component plaatst.

### Features

Deze folder bevat een eigen folder per `use case`. In het geval van gamebuddy is het invoeren van een gebruikersnaam een use case. Het fijne hiervan is dat het mogelijk is om code die bij elkaar hoort, binnen een folder te hebben. In het geval van `gamesGenreForm` zijn de formulier opties daar ook te vinden.

### Hooks

Hier worden hooks geplaatst die op meerdere plekken in de applicatie gebruikt kunnen worden. In dit geval wordt er alleen user data opgehaald met behulp van een hook. Het is een bewuste keuze om de `querie` apart te houden van de hook.

### Queries

Per entity, in dit geval `user`, worden hier de queries geplaatst. In dit geval is de local storage onze database.
