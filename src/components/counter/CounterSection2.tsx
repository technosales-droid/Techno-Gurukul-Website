
import CountUp from "../utils/CountUp";

const CounterSection2 = () => {
  return (
    <div className="h7_counter-area pb-105">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div className="h7_counter-item justify-content-xl-start justify-content-center mb-10">
              <div className="h7_counter-info">
                <CountUp
                  className="h7_counter-info-title"
                  spanClassName="odometer count_one"
                  value={83}
                  suffix="%"
                />
                <span className="h7_counter-info-text">
                  OF RECENT GRADUATES <br /> STARTED NEW JOB
                </span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div className="h7_counter-item justify-content-center mb-10">
              <div className="h7_counter-info">
                <CountUp
                  className="h7_counter-info-title"
                  spanClassName="odometer count_one"
                  value={125}
                  suffix="+"
                />
                <span className="h7_counter-info-text">
                  University DEGREE PROGRAMS
                </span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div className="h7_counter-item justify-content-center mb-10">
              <div className="h7_counter-info">
                <CountUp
                  className="h7_counter-info-title"
                  spanClassName="odometer count_one"
                  value={30}
                  suffix="+"
                />
                <span className="h7_counter-info-text">YEARS OF HISTORY</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div className="h7_counter-item justify-content-xl-end justify-content-center mb-10">
              <div className="h7_counter-info">
                <CountUp
                  className="h7_counter-info-title"
                  spanClassName="odometer count_one"
                  value={345}
                  suffix="+"
                />
                <span className="h7_counter-info-text">
                  Our University Lecture
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterSection2;
