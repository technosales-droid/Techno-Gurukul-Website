import Link from "next/link";
import { events } from "@/data";
import Image from "next/image";

const MainEventSection = () => {
  return (
    <section className="innerPage_event-area pt-120 pb-90">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="section-area mb-50 section-area-top text-center">
              <span className="section-subtitle">Conference on Education</span>
              <h2 className="section-title mb-20">Upcoming Events</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {events.map((event) => (
            <div className="col-xl-4 col-lg-4 col-md-6" key={event.id}>
              <div className="event-item mb-30">
                <div className="event-img">
                  <Image width={410} height={270} src={event.img} alt="img" />
                </div>
                <div className="event-content">
                  <div className="event-content-meta">
                    <span>
                      <i className="fa-thin fa-location-dot"></i>
                      {event.location}
                    </span>
                    <span>
                      <i className="fa-thin fa-clock"></i>
                      {event.time}
                    </span>
                  </div>
                  <h5 className="event-content-title">
                    <Link href={`/event/${event.slug}`}>{event.title}</Link>
                  </h5>
                  <Link
                    href="/sign-up"
                    className="t-theme-btn theme-btn event-btn"
                  >
                    Get Ticket
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainEventSection;
