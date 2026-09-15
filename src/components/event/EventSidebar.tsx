import Link from "next/link";

const EventSidebar = () => {
  return (
    <div className="col-xl-4 col-lg-4">
      <div className="event_details-sidebar mb-60">
        <div className="event_details-sidebar-content mb-40">
          <h4 className="event_details-sidebar-content-title">Buy Ticket</h4>
          <ul>
            <li>
              <span>Total Slots</span>
              <span>354</span>
            </li>
            <li>
              <span>Booked Slots</span>
              <span>03</span>
            </li>
            <li>
              <span>Cost</span>
              <span>Free</span>
            </li>
            <li>
              <span>Quantity</span>
              <span>1</span>
            </li>
          </ul>
          <div className="event_details-sidebar-btn">
            <Link
              href="/sign-up"
              className="theme-btn theme-btn-big theme-btn-full"
            >
              Buy Ticket
            </Link>
          </div>
        </div>
        <div className="event_details-sidebar-map">
          <h4 className="event_details-sidebar-content-title">Map</h4>
          <div className="inner-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d147120.012062842!2d13.706000467398074!3d51.075159941942076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1senveto!5e0!3m2!1sen!2sbd!4v1680961754336!5m2!1sen!2sbd"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSidebar;
