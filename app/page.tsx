import styles from "./page.module.css";

// Where the APK is served from: the latest GitHub Release of the app, built and
// signed by the app repo's workflow on every version tag. "latest" always points
// to the newest release, so this site never needs a redeploy for a new APK.
// NEXT_PUBLIC_APK_URL overrides it.
const APK_URL =
  process.env.NEXT_PUBLIC_APK_URL ??
  "https://github.com/BilalAulakh/asianfx-app/releases/latest/download/FXAsian.apk";
const APK_VERSION = process.env.NEXT_PUBLIC_APK_VERSION ?? "1.0.1";
// Optional link to the Flutter web build, for iPhone and desktop users.
const WEB_APP_URL = process.env.NEXT_PUBLIC_WEB_APP_URL;

const features = [
  { icon: "Au", title: "Live gold & silver", text: "Spot prices updated every few seconds." },
  { icon: "$", title: "USDT deposits", text: "Deposit via TRC-20, reviewed by our finance team." },
  { icon: "%", title: "One-tap orders", text: "Market, limit and stop orders with SL / TP." },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.brand}>
        <div className={styles.logo} aria-hidden="true">
          FX
        </div>
        <span className={styles.brandName}>FXAsian</span>
      </header>

      <h1 className={styles.title}>Trade gold, forex and crypto from your phone</h1>
      <p className={styles.lead}>Live prices, one-tap orders and USDT deposits - in one app.</p>

      <section className={styles.card}>
        <a className={styles.download} href={APK_URL} download="FXAsian.apk">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 4v12" />
            <path d="m6 11 6 6 6-6" />
            <path d="M5 20h14" />
          </svg>
          Download for Android
        </a>
        <p className={styles.meta}>Version {APK_VERSION} &middot; Android 6.0 or newer</p>
      </section>

      <section className={styles.features}>
        {features.map((f) => (
          <div key={f.title} className={styles.feature}>
            <div className={styles.featureIcon} aria-hidden="true">
              {f.icon}
            </div>
            <div className={styles.featureTitle}>{f.title}</div>
            <div className={styles.featureText}>{f.text}</div>
          </div>
        ))}
      </section>

      <section className={styles.card}>
        <h2 className={styles.h2}>How to install</h2>
        <ol className={styles.steps}>
          <li>
            Tap <b>Download for Android</b> and wait for the file to finish.
          </li>
          <li>
            Open <b>FXAsian.apk</b> from your notifications or the Downloads folder.
          </li>
          <li>
            If Android asks, allow <b>Install unknown apps</b> for your browser, then go back.
          </li>
          <li>
            Tap <b>Install</b>, then <b>Open</b>, and sign up.
          </li>
        </ol>
        <p className={styles.note}>
          Android may show a warning because the app is not from the Play Store. Only install the file
          downloaded from this website.
        </p>
      </section>

      <section className={styles.card}>
        <h2 className={styles.h2}>iPhone or computer?</h2>
        <p>
          iPhones cannot install apps from a website.{" "}
          {WEB_APP_URL ? (
            <>
              Use the web version in your browser instead:{" "}
              <a className={styles.link} href={WEB_APP_URL}>
                Open FXAsian Web
              </a>
            </>
          ) : (
            "A web version is coming soon."
          )}
        </p>
      </section>

      <footer className={styles.footer}>
        Trading leveraged products carries a high level of risk and may not be suitable for all investors.
        You can lose more than your deposit. &copy; {new Date().getFullYear()} FXAsian.
      </footer>
    </main>
  );
}
