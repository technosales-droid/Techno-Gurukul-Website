import ContactForm from "../form/ContactForm";

const ContactSection2 = () => {
  return (
    <section className="contact-area pt-120 pb-120">
      <div className="container">
        <div className="contact-wrap">
          <div className="row">
            <div className="col-xl-8 col-md-8">
              <div className="contact-content pr-80 mb-20">
                <h3 className="contact-title mb-25">Send Me Message</h3>
                <ContactForm />
              </div>
            </div>
            <div className="col-xl-4 col-md-4">
              <div className="contact-info ml-50 mb-20">
                <h3 className="contact-title mb-40">Get In Touch</h3>
                <div className="contact-info-item">
                  <span>
                    <i className="fa-thin fa-location-dot"></i>Address
                  </span>
                  <p>Hilton Conference Centre</p>
                </div>
                <div className="contact-info-item">
                  <span>
                    <i className="fa-thin fa-mobile-notch"></i>Phone
                  </span>
                  <a href="tel:+123548645850">+123 548 6458 50</a>
                </div>
                <div className="contact-info-item">
                  <span>
                    <i className="fa-thin fa-envelope"></i>Email
                  </span>
                  <a href="mailto:example@gmail.com">Example@gmail.com</a>
                </div>
                <div className="contact-social">
                  <span>Social Media</span>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d147120.012062842!2d13.706000467398074!3d51.075159941942076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1senveto!5e0!3m2!1sen!2sbd!4v1680961754336!5m2!1sen!2sbd"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactSection2;
