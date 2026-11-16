# Dentist Bot

Dentist Bot is a mobile app built to make dental patient intake and oral health tracking easier, more organized, and more user-friendly. The app helps patients store their personal details, medical history, dental history, and lifestyle factors that may affect oral health.

## App vision

Dentists and clinics often rely on paper forms and repetitive onboarding steps. Dentist Bot aims to digitalize that process by giving patients a simple way to register, update details, and share important health information before a visit.

The app is designed as a modern healthcare workflow tool that can support:

- quick patient registration
- secure authentication
- personal profile management
- medical and dental history collection
- future AI-driven dental assistance and decision support

## Features

- User sign-up and login using Supabase Auth
- Patient profile storage with personal and health-related information
- Capture of key health data such as:
  - thyroid condition
  - diabetes
  - hypertension
  - dental fillings
  - extractions
  - root canal treatment
  - removable dentures
  - smoking, vaping, tobacco, and alcohol habits
- Clean mobile UI built with React Native and Expo
- Backend data management with Supabase

## Tech stack

- React Native
- Expo Router
- TypeScript
- Supabase
- AsyncStorage
- Expo Secure Store

## Project structure

- `app/` — app screens and navigation
- `auth/` — authentication logic and auth context
- `db/` — database schema and CRUD helpers
- `utils/` — Supabase client setup
- `components/` — reusable UI components
- `constants/` — app constants and theme values

## Getting started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the Expo app

   ```bash
   npx expo start
   ```

3. Run it on Android, iOS, or web using the Expo developer tools.

## Demo video

Project demo: https://youtu.be/CFbcFyvSOuo?si=jAcsxJB2LH4An8t7

## Notes

This project is currently in development and is focused on the core patient onboarding and health-record workflow. It lays the foundation for future enhancements such as appointment tracking, AI recommendations, and a more complete dental clinic management experience.
