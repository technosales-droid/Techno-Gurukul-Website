import type { EventDataType } from "@/types";
import Image from "next/image";
import EventSidebar from "./EventSidebar";
interface Props {
  eventInfo: EventDataType;
}
const EventDetailSection = ({ eventInfo }: Props) => {
  return (
    <section className="event_details-area pt-120 pb-60">
      <div className="container">
        <div className="event_details-img">
          <Image width={1290} height={570} src={eventInfo.detailImg} alt="img" />
        </div>
        <div className="row">
          <div className="col-xl-8 col-lg-8">
            <div className="event_details-wrap mb-55">
              <div className="event_details-content">
                <h3 className="event_details-content-title">
                  {eventInfo.title}
                </h3>
                <p className="mb-25">
                  Curabitur tempus tincidunt tellus ac placerat. Nullam non
                  libero nisi. Fusce congue est eget nisl tristique ornare.
                  Vestibulum id massa felis. Nullam vehicula bibendum nulla eu
                  vulputate. Aenean fringilla tortor ut laoreet congue magna, a
                  viverra turpis consectetur porta.
                </p>
                <p className="mb-45">
                  Curabitur tempus tincidunt tellus ac placerat. Nullam non
                  libero nisi. Fusce congue est eget nisl tristique ornare.
                  Vestibulum id massa felis. Nullam vehicula bibendum nulla eu
                  vulputate. Aenean fringilla tortor ut laoreet congue magna, a
                  viverra turpis consectetur porta.
                </p>
              </div>
              <div className="event_details-inner-img">
                <Image
                  width={410}
                  height={470}
                  src="/assets/img/event/details/2.jpg"
                  alt="img"
                />
                <Image
                  width={410}
                  height={470}
                  src="/assets/img/event/details/3.jpg"
                  alt="img"
                />
              </div>
              <div className="event_details-content">
                <h3 className="event_details-content-title">
                  The Whole Child Fostering Social and Emotional Development.
                </h3>
                <div className="event_details-content-list">
                  <ul>
                    <li>
                      Etyma protium et olio gravida cur abitur est dui viverrid
                      non mi egret
                    </li>
                    <li>
                      Dictum Bibendum sapiens internum malasada fames ac ante
                      ipsum primes
                    </li>
                    <li>
                      Fauci bus cur abitur pulvinar rut rum masa sed so dales
                      sapiens utricles
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <EventSidebar />
        </div>
      </div>
    </section>
  );
};

export default EventDetailSection;
