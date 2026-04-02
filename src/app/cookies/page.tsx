import { Metadata } from "next";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

export const metadata: Metadata = {
  title: "Cookie Policy — HORIZON",
  description:
    "Learn how Horizon uses cookies to improve your experience and how you can manage your cookie preferences.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <Navbar />
      <main className="policy-page">
        <div className="policy-page__hero">
          <p className="features__label">LEGAL</p>
          <h1 className="policy-page__title">
            Cookie <span className="text-gradient">Policy</span>
          </h1>
          <p className="policy-page__meta">
            Last updated: 1 April 2026 &nbsp;·&nbsp; Effective immediately
          </p>
        </div>

        <div className="policy-page__body">
          <section className="policy-section">
            <h2 className="policy-section__heading">1. What Are Cookies</h2>
            <p className="policy-section__text">
              Cookies are small text files placed on your device by websites you
              visit. They are widely used to make websites work, or work more
              efficiently, as well as to provide information to the owners of the
              site. When you visit Horizon, cookies allow us to recognize your
              device, remember your preferences, and understand how you interact
              with our platform.
            </p>
          </section>

          <section className="policy-section">
            <h2 className="policy-section__heading">2. How We Use Cookies</h2>
            <p className="policy-section__text">
              We use cookies for the following purposes:
            </p>
            <div className="policy-table-wrap">
              <table className="policy-table">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Purpose</th>
                    <th>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span className="policy-tag policy-tag--essential">
                        Essential
                      </span>
                    </td>
                    <td>
                      Enable core functionality such as security, account
                      authentication, and network management.
                    </td>
                    <td>Session</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="policy-tag policy-tag--perf">
                        Performance
                      </span>
                    </td>
                    <td>
                      Collect anonymised statistics on how visitors use the
                      site so we can improve its performance.
                    </td>
                    <td>1 year</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="policy-tag policy-tag--func">
                        Functional
                      </span>
                    </td>
                    <td>
                      Remember your preferences (e.g., language, region, theme)
                      to provide a personalised experience.
                    </td>
                    <td>1 year</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="policy-tag policy-tag--marketing">
                        Marketing
                      </span>
                    </td>
                    <td>
                      Track visitors across websites to display relevant
                      advertisements, with your explicit consent.
                    </td>
                    <td>2 years</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="policy-section">
            <h2 className="policy-section__heading">3. Third-Party Cookies</h2>
            <p className="policy-section__text">
              In addition to our own cookies, some third-party services embedded
              in our platform may also set cookies on your device. These
              third-party services include analytics providers (e.g., Google
              Analytics), social media platforms when you interact with embedded
              content, and video players. We do not control these cookies; please
              review the respective third-party privacy policies for more
              information.
            </p>
          </section>

          <section className="policy-section">
            <h2 className="policy-section__heading">
              4. Managing Your Preferences
            </h2>
            <p className="policy-section__text">
              You have the right to decide whether to accept or reject cookies
              (other than strictly necessary cookies). You can exercise your
              cookie preferences by clicking the &ldquo;Cookie Settings&rdquo;
              button in the cookie banner displayed when you first visit the
              site, or by updating your browser settings. Most browsers allow
              you to:
            </p>
            <ul className="policy-list">
              <li>View and delete cookies stored on your device</li>
              <li>Block all cookies from all or specific websites</li>
              <li>
                Configure your browser to notify you when a website attempts to
                set a cookie
              </li>
            </ul>
            <p className="policy-section__text">
              Please note that restricting cookies may impact the functionality
              of our services.
            </p>
          </section>

          <section className="policy-section">
            <h2 className="policy-section__heading">5. Cookie Retention</h2>
            <p className="policy-section__text">
              Session cookies expire when you close your browser. Persistent
              cookies remain on your device for a set period (as outlined in the
              table above) or until you manually delete them. We regularly review
              the cookies we use and the purposes for which we use them to ensure
              our cookie practices remain current and appropriate.
            </p>
          </section>

          <section className="policy-section">
            <h2 className="policy-section__heading">
              6. Changes to This Policy
            </h2>
            <p className="policy-section__text">
              We may update this Cookie Policy from time to time to reflect
              changes in technology, legislation, or our data practices. When we
              make changes, we will update the &ldquo;Last updated&rdquo; date
              at the top of this page. We encourage you to review this policy
              periodically.
            </p>
          </section>

          <section className="policy-section">
            <h2 className="policy-section__heading">7. Contact Us</h2>
            <p className="policy-section__text">
              If you have any questions about our use of cookies, you can contact
              us at:
            </p>
            <div className="policy-contact-card">
              <span className="policy-contact-label">Email</span>
              <span className="policy-contact-value">
                privacy@horizon.design
              </span>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
