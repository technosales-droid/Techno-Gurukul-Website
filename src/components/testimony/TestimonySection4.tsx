
import Image from "next/image";
import { homeEightTestimonialData } from "@/data";

const TestimonySection4 = () => {
  return (
    <section className="h8_testimonial-area pt-110 pb-120">
      <div className="container container-custom-2">
        <div className="section-area-8 text-center mb-60">
          <span className="section-subtitle">EDUCATION FOR EVERYONE</span>
          <h2 className="section-title mb-0">Our Student's Feedback</h2>
        </div>
        <div className="h8_testimonial-content">
          {homeEightTestimonialData.map((item) => (
            <div className="h8_testimonial-item" key={item.id}>
              <Image
                width={40}
                height={30}
                src="/assets/img/testimonial/8/quote.png"
                alt="img"
                className="h8_testimonial-quote"
              />
              <p dangerouslySetInnerHTML={{ __html: item.quote }}></p>
              <div className="h8_testimonial-item-admin">
                <div className="h8_testimonial-item-img">
                  <Image width={65} height={65} src={item.imageSrc} alt="img" />
                </div>
                <div className="h8_testimonial-item-info">
                  <h4>
                    <a href="#">{item.name}</a>
                  </h4>
                  <span>{item.role}</span>
                </div>
              </div>
              <div className="h8_testimonial-item-rating">
                <ul>
                  <li>
                    <i className="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i className="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i className="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i className="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i className="fa-solid fa-star"></i>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonySection4;
