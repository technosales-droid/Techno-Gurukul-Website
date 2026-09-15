import { events } from "@/data";

import Image from "next/image";
import Link from "next/link";

const EventSection3 = () => {
  return (
    <section className="h10_event-area pt-110 pb-90">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12">
            <div className="section-area-10 mb-50 text-center">
              <h2 className="section-title mb-0">Upcoming Events</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {events.slice(0, 3).map((event) => (
            <div className="col-xl-4 col-lg-4 col-md-6" key={event.id}>
              <div className="h10_event-item mb-30">
                <div className="h10_event-img">
                  <Link href={`/event/${event.slug}`}>
                    <Image width={410} height={270} src={event.img} alt="img" />
                  </Link>
                  <span className="h10_event-date">{event.date}</span>
                </div>
                <div className="h10_event-content">
                  <span className="h10_event-content-meta">
                    <i className="fa-light fa-location-dot"></i>
                    {event.location}
                  </span>
                  <h5 className="h10_event-content-title">
                    <Link href={`/event/${event.slug}`}>{event.title}</Link>
                  </h5>
                  <Link
                    href="/contact"
                    className="theme-btn theme-btn-10 theme-btn-medium h10_event-btn"
                  >
                    Get Ticket<i className="fa-light fa-arrow-right"></i>
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

export default EventSection3;
