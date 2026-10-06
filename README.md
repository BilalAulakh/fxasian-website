# FXAsian download website

A one-page Next.js site with a **Download for Android** button for the FXAsian app.

## Run locally

```bash
npm install
npm run dev          # http://localhost:3000
```

## Where the APK comes from

The button links to `NEXT_PUBLIC_APK_URL`, or `/FXAsian.apk` if that is not set.

- **Simple:** build the app (`flutter build apk --release` in the Flutter project) and copy
  `build/app/outputs/flutter-apk/app-release.apk` to `public/FXAsian.apk`.
  `public/*.apk` is git-ignored.
- **Recommended for a ~60 MB file:** upload the APK to a GitHub Release (or any file host) and set
  `NEXT_PUBLIC_APK_URL` to its download link.

Other settings (all optional, read at build time):

| Variable | Example | Purpose |
|---|---|---|
| `NEXT_PUBLIC_APK_URL` | `https://github.com/<you>/<repo>/releases/latest/download/FXAsian.apk` | Download link |
| `NEXT_PUBLIC_APK_VERSION` | `1.0.0` | Version shown under the button |
| `NEXT_PUBLIC_WEB_APP_URL` | `https://app.example.com` | "Open FXAsian Web" link for iPhone / desktop |

## Deploy (Vercel)

1. Push this folder to a GitHub repository.
2. On vercel.com: **Add New > Project**, import the repository.
3. Under **Environment Variables** add `NEXT_PUBLIC_APK_URL` (and the others if needed).
4. Deploy. Changing a variable needs a redeploy, because the values are built into the page.

## Releasing a new app version

Installed apps (version 1.0.1 and newer) update themselves from inside the app, so users do not
need to come back to this site.

1. In the Flutter project, raise `version:` in `pubspec.yaml` (for example `1.0.1+2` -> `1.0.2+3`;
   the number after `+` must go up every time).
2. Run `powershell -ExecutionPolicy Bypass -File .\RELEASE_APK.ps1` in the Flutter project. It builds
   the APK with the release key (`android/key.properties`), copies it to `public/FXAsian.apk` and
   prints the version, build number and SHA-256.
3. Deploy this site (update `NEXT_PUBLIC_APK_VERSION` too).
4. In the app: **Admin > App Update**, enter the printed values and the APK link, then **Publish**.
   Turn on **Required update** only when old versions must stop working.
