"use client";
import { useEffect, useRef, useState } from "react";
import { useActionState } from "react";
import { toast } from "react-toastify";
import clsx from "clsx";
import { contactForm2Action, FormResult } from "@/actions/formActions";
import dynamic from "next/dynamic";

const SubjectSelect = dynamic(() => import("../utils/SubjectSelect"), {
  ssr: false,
});

interface Props {
  variant?: boolean;
  btnStyle?: string;
}

const initialState: FormResult = {
  success: false,
  message: "",
  field: undefined,
};

const ALERT_DURATION = 4000;

const ContactForm = ({ variant, btnStyle }: Props) => {
  const [state, formAction, pending] = useActionState(
    contactForm2Action,
    initialState
  );

  const formRef = useRef<HTMLFormElement>(null);

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
    agreeToTerms: false,
  });

  useEffect(() => {
    if (state.data) {
      setFormValues((prev) => ({ ...prev, ...state.data }));
    }
  }, [state._id]);

  useEffect(() => {
    if (state.success && !state.field && formRef.current) {
      formRef.current.reset();
      setFormValues({
        name: "",
        email: "",
        number: "",
        subject: "",
        message: "",
        agreeToTerms: false,
      });
    }
  }, [state._id]);

  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    if (state.message) {
      setAlertMessage(state.message);

      const timer = setTimeout(() => {
        setAlertMessage("");
      }, ALERT_DURATION);

      return () => clearTimeout(timer);
    }
    return undefined;
  }, [state._id]);

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast.success(state.message, { autoClose: ALERT_DURATION });
      } else {
        toast.error(state.message, { autoClose: ALERT_DURATION });
      }
    }
  }, [state._id]);

  useEffect(() => {
    if (state.field) {
      const input = formRef.current?.querySelector<
        HTMLInputElement | HTMLTextAreaElement
      >(`[name="${state.field}"]`);
      if (input) {
        input.focus();
      }
    }
  }, [state._id]);

  const handleSubjectChange = (selectedValue: string) => {
    setFormValues((prev) => ({
      ...prev,
      subject: selectedValue,
    }));
  };

  return (
    <div
      role="region"
      aria-labelledby={
        variant ? "blog-contact-form-heading" : "contact-form-heading"
      }
    >
      <h2
        id={variant ? "blog-contact-form-heading" : "contact-form-heading"}
        className="visually-hidden"
      >
        {variant ? "Blog Contact Form" : "Contact Form"}
      </h2>

      <form
        ref={formRef}
        className={variant ? "blog_details-form" : "contact-form"}
        action={formAction}
        aria-describedby={
          variant ? "blog-contact-form-description" : "contact-form-description"
        }
      >
        <div
          id={
            variant
              ? "blog-contact-form-description"
              : "contact-form-description"
          }
          className="visually-hidden"
        >
          Fill out this form to send us a message. All fields are required.
        </div>

        <input type="hidden" name="subject" value={formValues.subject} />
        <input
          type="hidden"
          name="agreeToTerms"
          value={formValues.agreeToTerms ? "true" : "false"}
        />

        <div className="row">
          <div
            className={
              variant ? "col-sm-6" : "col-xl-6 col-lg-6 col-md-12 col-sm-6"
            }
          >
            <div
              className={
                variant ? "blog_details-form-input" : "contact-form-input"
              }
            >
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                id="name"
                value={formValues.name}
                aria-label="Full Name"
                aria-required="true"
                aria-invalid={state.field === "name"}
                disabled={pending}
                onChange={(e) =>
                  setFormValues((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }))
                }
                required
              />
              <span className="inner-icon">
                <i className="fa-thin fa-user"></i>
              </span>
            </div>
          </div>

          <div
            className={
              variant ? "col-sm-6" : "col-xl-6 col-lg-6 col-md-12 col-sm-6"
            }
          >
            <div
              className={
                variant ? "blog_details-form-input" : "contact-form-input"
              }
            >
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                id="email"
                value={formValues.email}
                aria-label="Email Address"
                aria-required="true"
                aria-invalid={state.field === "email"}
                disabled={pending}
                onChange={(e) =>
                  setFormValues((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }))
                }
                required
              />
              <span className="inner-icon">
                <i className="fa-thin fa-envelope"></i>
              </span>
            </div>
          </div>

          <div
            className={
              variant ? "col-sm-6" : "col-xl-6 col-lg-6 col-md-12 col-sm-6"
            }
          >
            <div
              className={
                variant ? "blog_details-form-input" : "contact-form-input"
              }
            >
              <input
                type="tel"
                placeholder="Your Number"
                name="number"
                id="number"
                value={formValues.number}
                aria-label="Phone Number"
                aria-required="true"
                aria-invalid={state.field === "number"}
                disabled={pending}
                onChange={(e) =>
                  setFormValues((prev) => ({
                    ...prev,
                    number: e.target.value,
                  }))
                }
                required
              />
              <span className="inner-icon">
                <i className="fa-thin fa-phone-volume"></i>
              </span>
            </div>
          </div>

          <div
            className={
              variant ? "col-sm-6" : "col-xl-6 col-lg-6 col-md-12 col-sm-6"
            }
          >
            <div
              className={
                variant
                  ? "blog_details-form-input blog_details-form-input-select"
                  : "contact-form-input"
              }
            >
              <span className="inner-icon">
                <i className="fa-thin fa-circle-exclamation"></i>
              </span>
              <SubjectSelect
                value={formValues.subject}
                onChange={handleSubjectChange}
                variant={false}
              />
            </div>
          </div>

          <div className="col-12">
            <div
              className={
                variant
                  ? "blog_details-form-input mb-50 blog_details-form-textarea"
                  : "contact-form-input mb-50 contact-form-textarea"
              }
            >
              <textarea
                name="message"
                id="message"
                cols={30}
                rows={10}
                placeholder="Feel free to get in touch!"
                value={formValues.message}
                aria-label="Message"
                aria-required="true"
                aria-invalid={state.field === "message"}
                disabled={pending}
                onChange={(e) =>
                  setFormValues((prev) => ({
                    ...prev,
                    message: e.target.value,
                  }))
                }
                required
              />
              <span className="inner-icon">
                <i className="fa-thin fa-pen"></i>
              </span>
            </div>
          </div>

          <div className="col-12">
            <div
              className={
                variant ? "blog_details-form-submit" : "contact-form-submit"
              }
            >
              <div
                className={
                  variant ? "blog_details-form-btn" : "contact-form-btn"
                }
              >
                <button
                  type="submit"
                  className={clsx(
                    `theme-btn ${
                      variant ? "blog_details-btn" : "contact-btn"
                    } ${btnStyle ? btnStyle : ""}`,
                    {
                      "is-pending": pending,
                    }
                  )}
                  aria-label="Send contact message"
                  disabled={pending}
                >
                  {pending ? (
                    <>
                      Sending{" "}
                      <i
                        className="fas fa-spinner fa-spin ms-2"
                        aria-hidden="true"
                      ></i>
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>

              <div
                className={
                  variant
                    ? "blog_details-form-condition"
                    : "contact-form-condition"
                }
              >
                <label className="condition_label">
                  I agree that my data is collected and stored.
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formValues.agreeToTerms}
                    aria-required="true"
                    disabled={pending}
                    onChange={(e) =>
                      setFormValues((prev) => ({
                        ...prev,
                        agreeToTerms: e.target.checked,
                      }))
                    }
                  />
                  <span className="check_mark"></span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {alertMessage && (
          <div
            className={`alert alert-${
              state.success ? "success" : "danger"
            } mt-3 flex items-center`}
            role="alert"
            aria-live="assertive"
          >
            {state.success ? (
              <i className="fas fa-check-circle me-2" aria-hidden="true"></i>
            ) : (
              <i className="fas fa-times-circle me-2" aria-hidden="true"></i>
            )}
            {alertMessage}
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
