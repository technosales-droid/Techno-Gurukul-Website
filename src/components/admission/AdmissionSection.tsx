import Link from "next/link";
import AdmissionForm from "../form/AdmissionForm";
import Image from "next/image";

const AdmissionSection = () => {
    return (
        <section className="h3_admission-area pt-140 pb-90">
            <Image
                width={676}
                height={685}
                src="/assets/img/admission/3/1.png"
                alt="img"
                className="h3_admission-bg"
            />
            <Image
                width={77}
                height={44}
                src="/assets/img/admission/3/shape-1.png"
                alt="img"
                className="h3_admission-shape-1"
            />
            <Image
                width={63}
                height={45}
                src="/assets/img/admission/3/shape-3.png"
                alt="img"
                className="h3_admission-shape-2"
            />
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 ">
                        <div className="h3_admission-wrap mr-65 mb-50">
                            <Image
                                width={125}
                                height={56}
                                src="/assets/img/admission/3/shape-2.png"
                                alt="img"
                                className="h3_admission-wrap-shape-2"
                            />
                            <div className="section-area-3 mb-35 small-section-area-3">
                                <span className="section-subtitle">Education Admissions</span>
                                <h2 className="section-title mb-25">
                                    Bridge Opportunity Gap Support Access Education!
                                </h2>
                                <p className="section-text">
                                    Maecenas Felis Tellus, dictum sed fermentum vel, various
                                    condiment dolour donec aliquot denim ut auctor molestee, era
                                    elite pharetra masa.
                                </p>
                            </div>
                            <div className="h3_admission-content mb-35">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <span>
                                            <i className="fa-regular fa-check"></i>Teach your way
                                        </span>
                                    </div>
                                    <div className="col-sm-6">
                                        <span>
                                            <i className="fa-regular fa-check"></i>Record your video
                                        </span>
                                    </div>
                                    <div className="col-sm-6">
                                        <span>
                                            <i className="fa-regular fa-check"></i>Plan your
                                            curriculum
                                        </span>
                                    </div>
                                    <div className="col-sm-6">
                                        <span>
                                            <i className="fa-regular fa-check"></i>Launch your course
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="h3_admission-button">
                                <Link
                                    href="/sign-up"
                                    className="theme-btn theme-btn-medium theme-btn-3"
                                >
                                    Apply Now<i className="fa-light fa-arrow-up-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="h3_admission-form mb-50">
                            <h5 className="h3_admission-form-title">Admissions</h5>
                            <AdmissionForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdmissionSection;