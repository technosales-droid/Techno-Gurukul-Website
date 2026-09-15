import Link from "next/link";
import AuthForm from "../form/AuthForm";
import Image from "next/image";

interface Props {
  signIn?: boolean; // true for Sign In, false for Sign Up
}

const AuthSection = ({ signIn }: Props) => {
  return (
    <div className="account-area pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8 col-md-10">
            <div className="account-wrap">
              {/* Conditional rendering for Sign Up/Sign In links */}
              {!signIn ? (
                <div className="account-top sign-up">
                  <div className="account-top-current">
                    <span>Sign Up</span>
                  </div>
                  <div className="account-top-link">
                    <Link href="/sign-in">Sign In</Link>
                  </div>
                </div>
              ) : (
                <div className="account-top">
                  <div className="account-top-link">
                    <Link href="/sign-up">Sign Up</Link>
                  </div>
                  <div className="account-top-current">
                    <span>Sign In</span>
                  </div>
                </div>
              )}

              <div className="account-main">
                <h3 className="account-title">
                  {signIn ? "Sign in to" : "Create"} Your Account 👋
                </h3>
                {/* Add onSubmit handler to the form */}
                <AuthForm signIn={signIn ? true : false} />

                {/* OR separator and Social Login links */}
                <div className="account-break">
                  <span>OR</span>
                </div>
                <div className="account-bottom">
                  <div className="account-option">
                    {/* Social login links - Keep as <a> tags */}
                    <a href="#" className="account-option-account">
                      <Image
                        width={20}
                        height={20}
                        src="/assets/img/bg/google.png"
                        alt="img"
                      />
                      <span>Google</span>
                    </a>
                    <a href="#" className="account-option-account">
                      <Image
                        width={17}
                        height={20}
                        src="/assets/img/bg/apple.png"
                        alt="img"
                      />
                      <span>Apple</span>
                    </a>
                    <a href="#" className="account-option-account">
                      <Image
                        width={20}
                        height={20}
                        src="/assets/img/bg/facebook.png"
                        alt="img"
                      />
                      <span>Facebook</span>
                    </a>
                  </div>
                  {/* Sign Up/Sign In toggle text */}
                  <div className="account-bottom-text">
                    {signIn ? (
                      <p>
                        Don’t have an account ?{" "}
                        <Link href="/sign-up">Sign Up for free</Link>
                      </p>
                    ) : (
                      <p>
                        Already have an account ?{" "}
                        <Link href="/sign-in">Sign In for here</Link>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthSection;
