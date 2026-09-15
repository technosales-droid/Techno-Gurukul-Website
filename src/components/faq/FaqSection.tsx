"use client";
import { faqData } from "@/data";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const FaqSection = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleAccordion = (id: number) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  useEffect(() => {
    refs.current.forEach((el, index) => {
      if (el) {
        if (activeAccordion === index) {
          const scrollHeight = el.scrollHeight;
          el.style.height = `${scrollHeight}px`;
        } else {
          el.style.height = "0px";
        }
      }
    });
  }, [activeAccordion]);

  return (
    <div className="h4_faq-area pt-140 pb-90">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="h4_faq-img w_img mb-50">
              <Image
                width={660}
                height={642}
                src="/assets/img/faq/4/1.png"
                alt="FAQ Illustration"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="h4_faq-wrap mb-50">
              <div className="section-area-4 mb-30">
                <h2 className="section-title mb-10">
                  Experience World Best e-Learning System
                </h2>
                <p className="section-text">
                  Maecenas Felis Tellus, dictum sed fermentum vel, various
                  condiment dolour denim ut auctor molestee elite pharetra masa.
                </p>
              </div>
              <div className="h4_faq-content">
                <div className="accordion">
                  {faqData.map((faq, index) => (
                    <div className="accordion-item" key={faq.id}>
                      <h2 className="accordion-header">
                        <button
                          className={`accordion-button ${
                            activeAccordion === index ? "active" : "collapsed"
                          }`}
                          onClick={() => toggleAccordion(index)}
                        >
                          {faq.question}
                        </button>
                      </h2>
                      <div
                        className={`ar-accordion-content ${
                          activeAccordion === index ? "show" : ""
                        }`}
                        ref={(el) => {
                          refs.current[index] = el;
                        }}
                      >
                        <div className="accordion-body">
                          <p>{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
