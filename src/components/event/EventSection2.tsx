import { events } from "@/data";
import Image from "next/image";
import Link from "next/link";

interface Props {
  variant?: boolean;
}

const EventSection2 = ({ variant }: Props) => {
  return (
    <section
      className={`h5_event-area ${variant ? "h6_event-area pt-115 pb-120" : "pt-135 pb-140"
        }`}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div
              className={`${variant ? "section-area-6" : "section-area-5"
                } text-center mb-60`}
            >
              <span className="section-subtitle">Our Events</span>
              <h2 className="section-title mb-0">Upcoming Events</h2>
            </div>
          </div>
        </div>
        <div className="row g-0">
          <div className="col-xl-7">
            <div className="h5_event-wrap">
              {events.slice(0, 3).map((event) => (
                <div className="h5_event-item" key={event.id}>
                  <div className="h5_event-item-date">
                    <h1>{event.day}</h1>
                    <p>{event.date}</p>
                  </div>
                  <div className="h5_event-item-content">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa-light fa-location-dot"></i>
                          {event.location}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-light fa-clock"></i>
                          {event.time}
                        </a>
                      </li>
                    </ul>
                    <h5>
                      <Link href={`/event/${event.slug}`}>{event.title}</Link>
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-xl-5">
            <div className="h5_event-img w_img">
              <Image
                width={520}
                height={480}
                src={
                  variant
                    ? "/assets/img/event/6/1.jpg"
                    : "/assets/img/event/5/1.jpg"
                }
                alt="img"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSection2;
