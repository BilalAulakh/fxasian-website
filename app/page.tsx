import styles from "./page.module.css";

// Where the APK is served from: the latest GitHub Release of the app, built and
// signed by the app repo's workflow on every version tag. "latest" always points
// to the newest release, so this site never needs a redeploy for a new APK.
// NEXT_PUBLIC_APK_URL overrides it.
const APK_URL =
  process.env.NEXT_PUBLIC_APK_URL ??
  "https://github.com/BilalAulakh/asianfx-app/releases/latest/download/FXAsian.apk";
// Shown under the button only when set; the link always serves the newest APK.
const APK_VERSION = process.env.NEXT_PUBLIC_APK_VERSION;
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
        <p className={styles.meta}>
          {APK_VERSION ? `Version ${APK_VERSION}` : "Latest version"} &middot; Android 6.0 or newer
        </p>
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
          Android may show a warning because the app is not from the Play Store - see the next step. Only
          install the file downloaded from this website.
        </p>
      </section>

      <section className={styles.card} id="app-blocked">
        <h2 className={styles.h2}>Seeing &ldquo;App blocked to protect your device&rdquo;?</h2>
        <p className={styles.muted}>
          This is a normal Android check for apps installed from a website instead of the Play Store. Follow
          these two taps to continue.
          <br />
          <span lang="ur-Latn">
            Yeh Android ka aam check hai jo website se install hone wali apps par aata hai. Bas yeh 2 tap karein.
          </span>
        </p>

        <div className={styles.mockRow}>
          <figure className={styles.mockStep}>
            <figcaption className={styles.mockCaption}>
              <span className={styles.stepNo}>1</span>
              Tap <b>More details</b>
              <span className={styles.ur} lang="ur-Latn">&ldquo;More details&rdquo; dabayein</span>
            </figcaption>
            <div className={styles.mockPhone} aria-hidden="true">
              <div className={styles.mockTitle}>App blocked to protect your device</div>
              <div className={styles.mockApp}>
                <span className={styles.mockIcon}>FX</span> FXAsian
              </div>
              <div className={styles.mockText}>This developer is not known yet. It may be unsafe.</div>
              <div className={`${styles.mockLink} ${styles.highlight}`}>More details &#8964;</div>
              <div className={styles.mockButton}>Got it</div>
            </div>
          </figure>

          <figure className={styles.mockStep}>
            <figcaption className={styles.mockCaption}>
              <span className={styles.stepNo}>2</span>
              Tap <b>Install anyway</b>
              <span className={styles.ur} lang="ur-Latn">&ldquo;Install anyway&rdquo; dabayein</span>
            </figcaption>
            <div className={styles.mockPhone} aria-hidden="true">
              <div className={styles.mockTitle}>App blocked to protect your device</div>
              <div className={styles.mockApp}>
                <span className={styles.mockIcon}>FX</span> FXAsian
              </div>
              <div className={styles.mockText}>More details &#8963;</div>
              <div className={`${styles.mockLink} ${styles.highlight}`}>Install anyway</div>
              <div className={styles.mockButton}>Got it</div>
            </div>
          </figure>
        </div>

        <p className={styles.muted}>
          On some phones the link is called <b>Install without scanning</b>. Do <b>not</b> tap &ldquo;Got
          it&rdquo; - that cancels the install.
          <br />
          <span lang="ur-Latn">
            Kuch phones par &ldquo;Install without scanning&rdquo; likha hota hai. &ldquo;Got it&rdquo; na
            dabayein, us se install ruk jata hai.
          </span>
        </p>
        <p className={styles.note}>
          You only need to do this once. Later updates install from inside the app.
          <br />
          <span lang="ur-Latn">Yeh sirf pehli dafa karna hai. Agli updates app ke andar se aati hain.</span>
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
