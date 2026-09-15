import type { TeamDataType } from "@/types";
import Image from "next/image";
interface Props {
  teamInfo: TeamDataType;
}
const TeamDetailSection = ({ teamInfo }: Props) => {
  return (
    <section className="teacher_details-area pt-120 pb-60">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-5">
            <div className="teacher_details-img w_img mb-50">
              <Image width={410} height={470} src={teamInfo.image} alt="img" />
            </div>
          </div>
          <div className="col-lg-8 col-md-7">
            <div className="teacher_details-content mb-50">
              <div className="teacher_details-admin">
                <h4 className="teacher_details-title">{teamInfo.name}</h4>
                <span>{teamInfo.role}, Researcher</span>
              </div>
              <div className="teacher_details-rating">
                <ul>
                  <li>
                    <i className="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i className="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i className="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i className="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i className="fa-solid fa-star"></i>
                  </li>
                </ul>
                <span>(03 Reviews)</span>
              </div>
              <h5 className="teacher_details-title2">About Me</h5>
              <p className="mb-20">
                Lorem ipsum dolor sit amet, consectetur elit sed do eius mod
                tempor incidid labore dolore magna aliqua. enim ad minim eniam
                quis nostrud exercitation ullamco laboris nisi aliquip ex
                commodo consequat. duis aute irure dolor in repreed ut
                perspiciatis unde omnis iste natus error sit voluptat em acus
                antium.
              </p>
              <p className="mb-30">
                doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo
                inventore veritatis et quasi arch itecto beatae vitae dicta sunt
                explicabo.
              </p>
              <h5 className="teacher_details-title2">Contact Me</h5>
              <div className="teacher_details-info">
                <ul>
                  <li>
                    <span>Address:</span>Hilton Conference Centre
                  </li>
                  <li>
                    <span>Email:</span>
                    <a href="mailto:Example@gmail.com">Example@gmail.com</a>
                  </li>
                  <li>
                    <span>Phone:</span>
                    <a href="tel:+123548645850">+123 548 6458 50</a>
                  </li>
                </ul>
                <div className="teacher_details-social">
                  <a href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamDetailSection;
