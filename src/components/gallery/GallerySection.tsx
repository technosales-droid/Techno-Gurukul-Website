"use client";
import { useState } from "react";
import GalleryTabContent from "./GalleryTabContent";
import Image from "next/image";

const GallerySection = () => {
  const [activeTab, setActiveTab] = useState<string>("all");

  const toggleTab = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <section className="innerPage_gallery-area overflow-hidden pt-110 pb-90">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-xl-5 col-lg-6">
            <div className="section-area-2">
              <h2 className="section-title mb-50">
                Browse Our
                <br /> Exclusive{" "}
                <span>
                  Gallery{" "}
                  <Image
                    width={152}
                    height={8}
                    src="/assets/img/banner/2/line.png"
                    alt="img"
                  />
                </span>
              </h2>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6">
            <div className="innerPage_gallery-tab mb-40">
              <ul className="nav nav-pills">
                <li className="nav-item">
                  <button
                    className={`nav-link ${activeTab === "all" ? "active" : ""
                      }`}
                    onClick={() => toggleTab("all")}
                  >
                    See All <span>New</span>
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${activeTab === "courses" ? "active" : ""
                      }`}
                    onClick={() => toggleTab("courses")}
                  >
                    Courses
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${activeTab === "events" ? "active" : ""
                      }`}
                    onClick={() => toggleTab("events")}
                  >
                    Events
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${activeTab === "students" ? "active" : ""
                      }`}
                    onClick={() => toggleTab("students")}
                  >
                    Students
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${activeTab === "teachers" ? "active" : ""
                      }`}
                    onClick={() => toggleTab("teachers")}
                  >
                    Teachers
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="innerPage_gallery-wrap">
          <div className="tab-content">
            <div
              className={`ar-tab-pane ${activeTab === "all" ? "active" : ""}`}
            >
              <GalleryTabContent />
            </div>
            <div
              className={`ar-tab-pane ${activeTab === "courses" ? "active" : ""
                }`}
            >
              <GalleryTabContent />
            </div>
            <div
              className={`ar-tab-pane ${activeTab === "events" ? "active" : ""
                }`}
            >
              <GalleryTabContent />
            </div>
            <div
              className={`ar-tab-pane ${activeTab === "students" ? "active" : ""
                }`}
            >
              <GalleryTabContent />
            </div>
            <div
              className={`ar-tab-pane ${activeTab === "teachers" ? "active" : ""
                }`}
            >
              <GalleryTabContent />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
