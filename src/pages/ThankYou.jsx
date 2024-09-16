import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ThankYou() {
  const location = useLocation();

  useEffect(() => {
    const isThankYouPage = location.pathname === "/thank-you";

    if (isThankYouPage) {
      const script = document.createElement("script");
      script.innerHTML = `
        gtag('event', 'conversion', {'send_to': 'AW-11110423570/dX6fCKzt648ZEJK47rEp'});
      `;
      document.head.appendChild(script);
      return () => {
        document.head.removeChild(script);
      };
    }
  }, [location.pathname]);

  return (
    <>
      <div className="thanku-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-11 col-sm-12">
              <div className="thanku-content text-center">
                <h2>
                  If your project meets our licensing criteria, we will get in
                  touch with you shortly.
                </h2>
                <h2>
                  Or you can even contact us at&nbsp;
                  <a
                    href="tel: +918655675630"
                    aria-label="link"
                    title="Call us to know more"
                  >
                    +91 8655675630
                  </a>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
