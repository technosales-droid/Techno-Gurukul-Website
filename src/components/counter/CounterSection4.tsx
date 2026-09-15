
import CountUp from "../utils/CountUp";

const CounterSection4 = () => {
  return (
    <div className="h10_counter-area pb-115">
      <div className="container">
        <div className="h10_counter-wrap">
          <div className="h10_counter-item">
            <div className="h10_counter-icon">
              <i className="fa-thin fa-globe"></i>
            </div>
            <div className="h10_counter-info">
              <CountUp
                className="h10_counter-info-title"
                spanClassName="odometer count_one"
                value={34}
                suffix="k"
              />
              <span className="h10_counter-info-text">Foreign Followers</span>
            </div>
          </div>
          <div className="h10_counter-item">
            <div className="h10_counter-icon">
              <i className="fa-thin fa-book-open"></i>
            </div>
            <div className="h10_counter-info">
              <CountUp
                className="h10_counter-info-title"
                spanClassName="odometer count_one"
                value={12}
                suffix="k"
              />
              <span className="h10_counter-info-text">Classes complete</span>
            </div>
          </div>
          <div className="h10_counter-item">
            <div className="h10_counter-icon">
              <i className="fa-thin fa-user-group"></i>
            </div>
            <div className="h10_counter-info">
              <CountUp
                className="h10_counter-info-title"
                spanClassName="odometer count_one"
                value={214}
                suffix="k"
              />
              <span className="h10_counter-info-text">Students Enrolled</span>
            </div>
          </div>
          <div className="h10_counter-item">
            <div className="h10_counter-icon">
              <i className="fa-thin fa-medal"></i>
            </div>
            <div className="h10_counter-info">
              <CountUp
                className="h10_counter-info-title"
                spanClassName="odometer count_one"
                value={56}
                suffix="k"
              />
              <span className="h10_counter-info-text">Certified teachers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterSection4;
