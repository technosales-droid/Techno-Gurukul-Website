
import CountUp from "../utils/CountUp";

const CounterSection3 = () => {
  return (
    <div className="h8_counter-area bg-default pt-80 pb-50">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
            <div className="h8_counter-item justify-content-center mb-25">
              <div className="h8_counter-info">
                <div className="h8_counter-info-icon">
                  <i className="fa-solid fa-user"></i>
                </div>
                <CountUp
                  className="h8_counter-info-title"
                  spanClassName="odometer count_one"
                  value={15256}
                  suffix="+"
                />
                <span className="h8_counter-info-text">Happy Student</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
            <div className="h8_counter-item justify-content-center mb-25">
              <div className="h8_counter-info">
                <div className="h8_counter-info-icon">
                  <i className="fa-solid fa-star"></i>
                </div>
                <CountUp
                  className="h8_counter-info-title"
                  spanClassName="odometer count_one"
                  value={5065}
                  suffix="+"
                />
                <span className="h8_counter-info-text">Good Comment</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
            <div className="h8_counter-item justify-content-center mb-25">
              <div className="h8_counter-info">
                <div className="h8_counter-info-icon">
                  <i className="fa-solid fa-cloud-arrow-down"></i>
                </div>
                <CountUp
                  className="h8_counter-info-title"
                  spanClassName="odometer count_one"
                  value={1524}
                  suffix="+"
                />
                <span className="h8_counter-info-text">Services Download</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
            <div className="h8_counter-item justify-content-center mb-25">
              <div className="h8_counter-info">
                <div className="h8_counter-info-icon">
                  <i className="fa-solid fa-trophy"></i>
                </div>
                <CountUp
                  className="h8_counter-info-title"
                  spanClassName="odometer count_one"
                  value={506}
                  suffix="+"
                />
                <span className="h8_counter-info-text">Best Awards</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterSection3;
