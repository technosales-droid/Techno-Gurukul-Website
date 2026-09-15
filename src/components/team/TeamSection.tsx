import Link from "next/link";
import { useMemo } from "react";
import { teamMembers } from "@/data";
import Image from "next/image";

interface Props {
  variant?: boolean;
}

const TeamSection = ({ variant }: Props) => {
  // Memoize the sliced team members based on variant prop
  const displayedTeamMembers = useMemo(() => {
    return teamMembers.slice(0, variant ? teamMembers.length : 6);
  }, [variant]);

  return (
    <section
      className={
        variant
          ? "innerPage_teacher-area pt-120 pb-90"
          : "h2_teacher-area pb-80"
      }
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-8 col-md-12 mb-30">
            <div className="h2_teacher-section bg-default">
              <div className="section-area-2">
                <h2 className="section-title mb-30">
                  Our Most <br /> Experience{" "}
                  <span>
                    Professor{" "}
                    <Image
                      width={211}
                      height={11}
                      src="/assets/img/banner/2/line.png"
                      alt="img"
                    />
                  </span>
                </h2>
              </div>
              <div className="h2_teacher-button">
                <Link
                  href="/contact"
                  className="theme-btn theme-btn-medium teacher-btn"
                >
                  Become An Instructor
                </Link>
              </div>
            </div>
          </div>

          {displayedTeamMembers.map((teamMember) => (
            <div className="col-xl-3 col-lg-4 col-sm-6" key={teamMember.id}>
              <div className="h2_teacher-item mb-30">
                <div className="h2_teacher-img">
                  <Image
                    width={410}
                    height={470}
                    src={teamMember.image}
                    alt={teamMember.name}
                  />
                </div>
                <div className="h2_teacher-content">
                  <h5 className="h2_teacher-content-title">
                    <Link href={`/team/${teamMember.slug}`}>{teamMember.name}</Link>
                  </h5>
                  <span>{teamMember.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
