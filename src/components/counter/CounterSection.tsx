import CountUp from "../utils/CountUp";

interface Props {
  style?: string;
}
const CounterSection = ({ style }: Props) => {
  return (
    <div className={`counter-area ${style ? style : ""}`}>
      <div className="container">
        <div className="counter-wrap">
          <div className="row g-0">
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="counter-item">
                <div className="counter-icon">
                  <i className="fa-thin fa-globe"></i>
                </div>
                <div className="counter-info">
                  <CountUp
                    className="counter-info-title"
                    value={34}
                    spanClassName="odometer count_one"
                    suffix="k"
                  />
                  <span className="counter-info-text">Foreign Followers</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="counter-item">
                <div className="counter-icon">
                  <i className="fa-thin fa-book-open"></i>
                </div>
                <div className="counter-info">
                  <CountUp
                    className="counter-info-title"
                    value={12}
                    spanClassName="odometer count_one"
                    suffix="k"
                  />
                  <span className="counter-info-text">Classes complete</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="counter-item">
                <div className="counter-icon">
                  <i className="fa-thin fa-user-group"></i>
                </div>
                <div className="counter-info">
                  <CountUp
                    className="counter-info-title"
                    value={214}
                    spanClassName="odometer count_one"
                    suffix="k"
                  />
                  <span className="counter-info-text">Students Enrolled</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="counter-item">
                <div className="counter-icon">
                  <i className="fa-thin fa-medal"></i>
                </div>
                <div className="counter-info">
                  <CountUp
                    className="counter-info-title"
                    value={56}
                    spanClassName="odometer count_one"
                    suffix="k"
                  />
                  <span className="counter-info-text">Certified teachers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
