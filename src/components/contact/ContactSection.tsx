
import ContactForm from "../form/ContactForm";
import Image from "next/image";

const ContactSection = () => {
  return (
    <section className="h10_contact-area position-relative fix pt-155 pb-110">
      <div className="h10_contact-text-wrap">
        <div className="campus-text-ticker">
          <h1 className="h10_contact-title" data-text="Get In Touch">
            Get In Touch
          </h1>
        </div>
      </div>
      <div className="container position-relative">
        <div className="h10_contact-img d-none d-md-block">
          <div className="row">
            <div className="col-xl-6 col-lg-7 col-md-8">
              <div className="inner-img w_img">
                <Image
                  width={630}
                  height={613}
                  src="/assets/img/bg/contact-bg.jpg"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-end pt-110 pt-xs-60">
          <div className="col-xl-8 col-lg-8 col-md-9">
            <div className="h10_contact-content">
              <h3 className="contact-title mb-25">Send Me Message</h3>
              <ContactForm btnStyle="theme-btn-10 h10_contact-btn" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;