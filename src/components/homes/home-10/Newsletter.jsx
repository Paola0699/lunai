import { t } from "i18next";
import { useState } from "react";
const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [resultMessage, setResultMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResultMessage("");

    try {
      const formData = new URLSearchParams();
      formData.append("email", email);

      const response = await fetch(scriptUrl, {
        method: "POST",
        body: formData,
      });

      const text = await response.text();
      setResultMessage(text);
      setEmail("");
    } catch (error) {
      setResultMessage("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container position-relative">
      <div className="row">
        <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 wow fadeInUp">
          <h3 className="section-title text-center mb-40">
            {t("contactHeading")}
          </h3>
          <form
            onSubmit={handleSubmit}
            id="mailchimp"
            className="form newsletter-strong"
          >
            <div className="d-sm-flex justify-content-between mb-20">
              <label htmlFor="newsletter-email" className="visually-hidden">
                Your email
              </label>
              <input
                placeholder={t("contactInputPlaceholder")}
                className="newsletter-field input-lg round"
                id="newsletter-email"
                name="newsletter-email"
                type="email"
                pattern=".{5,100}"
                required
                aria-required="true"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                aria-controls="subscribe-result"
                className="newsletter-button btn btn-mod btn-w btn-large btn-round btn-hover-anim"
                disabled={loading}
              >
                <span>{loading ? "Sending..." : t("contactButtonText")}</span>
              </button>
            </div>
            <div className="form-tip">
              <i className="icon-info size-16" /> {t("contactFooter")}
            </div>
            <div
              id="subscribe-result"
              role="region"
              aria-live="polite"
              aria-atomic="true"
              className="mt-2"
            >
              {resultMessage && (
                <div
                  className={
                    resultMessage.toLowerCase().includes("error")
                      ? "text-danger"
                      : "text-success"
                  }
                >
                  {resultMessage}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
