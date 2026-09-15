"use client";
import { useEffect, useRef, useState } from "react";
import { useActionState } from "react";
import { toast } from "react-toastify";
import clsx from "clsx";
import { admissionFormAction, FormResult } from "@/actions/formActions";

interface Props {
  variant?: boolean;
}

const initialState: FormResult = {
  success: false,
  message: "",
  field: undefined,
};

const ALERT_DURATION = 4000;

const AdmissionForm = ({ variant }: Props) => {
  const [state, formAction, pending] = useActionState(
    admissionFormAction,
    initialState
  );

  const formRef = useRef<HTMLFormElement>(null);

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    dateOfBirth: "",
    academicQualifications: "",
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
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        streetAddress: "",
        city: "",
        state: "",
        zipCode: "",
        dateOfBirth: "",
        academicQualifications: "",
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

  return (
    <div role="region" aria-labelledby="admission-form-heading">
      <h2 id="admission-form-heading" className="visually-hidden">
        Admission Application Form
      </h2>

      <form
        ref={formRef}
        action={formAction}
        aria-describedby="admission-form-description"
      >
        <div id="admission-form-description" className="visually-hidden">
          Fill out this admission application form. All fields are required.
        </div>

        <div className="row g-15">
          <div className="col-xl-6 col-sm-6">
            <div
              className={
                !variant ? "h3_admission-form-input" : "h6_admission-form-input"
              }
            >
              <label htmlFor="firstName" className="visually-hidden">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formValues.firstName}
                placeholder="First Name"
                aria-label="First Name"
                aria-required="true"
                aria-invalid={state.field === "firstName"}
                disabled={pending}
                onChange={(e) =>
                  setFormValues((prev) => ({
                    ...prev,
                    firstName: e.target.value,
                  }))
                }
                required
              />
            </div>
          </div>

          <div className="col-xl-6 col-sm-6">
            <div
              className={
                !variant ? "h3_admission-form-input" : "h6_admission-form-input"
              }
            >
              <label htmlFor="lastName" className="visually-hidden">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formValues.lastName}
                placeholder="Last Name"
                aria-label="Last Name"
                aria-required="true"
                aria-invalid={state.field === "lastName"}
                disabled={pending}
                onChange={(e) =>
                  setFormValues((prev) => ({
                    ...prev,
                    lastName: e.target.value,
                  }))
                }
                required
              />
            </div>
          </div>

          <div className="col-xl-6 col-sm-6">
            <div
              className={
                !variant ? "h3_admission-form-input" : "h6_admission-form-input"
              }
            >
              <label htmlFor="email" className="visually-hidden">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formValues.email}
                placeholder="Email"
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
            </div>
          </div>

          <div className="col-xl-6 col-sm-6">
            <div
              className={
                !variant ? "h3_admission-form-input" : "h6_admission-form-input"
              }
            >
              <label htmlFor="phone" className="visually-hidden">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formValues.phone}
                placeholder="Phone"
                aria-label="Phone Number"
                aria-required="true"
                aria-invalid={state.field === "phone"}
                disabled={pending}
                onChange={(e) =>
                  setFormValues((prev) => ({
                    ...prev,
                    phone: e.target.value,
                  }))
                }
                required
              />
            </div>
          </div>

          <div className="col-xl-6 col-sm-6">
            <div
              className={
                !variant ? "h3_admission-form-input" : "h6_admission-form-input"
              }
            >
              <label htmlFor="streetAddress" className="visually-hidden">
                Street Address
              </label>
              <input
                type="text"
                id="streetAddress"
                name="streetAddress"
                value={formValues.streetAddress}
                placeholder="Street Address"
                aria-label="Street Address"
                aria-required="true"
                aria-invalid={state.field === "streetAddress"}
                disabled={pending}
                onChange={(e) =>
                  setFormValues((prev) => ({
                    ...prev,
                    streetAddress: e.target.value,
                  }))
                }
                required
              />
            </div>
          </div>

          <div className="col-xl-6 col-sm-6">
            <div
              className={
                !variant ? "h3_admission-form-input" : "h6_admission-form-input"
              }
            >
              <label htmlFor="city" className="visually-hidden">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formValues.city}
                placeholder="City"
                aria-label="City"
                aria-required="true"
                aria-invalid={state.field === "city"}
                disabled={pending}
                onChange={(e) =>
                  setFormValues((prev) => ({
                    ...prev,
                    city: e.target.value,
                  }))
                }
                required
              />
            </div>
          </div>

          <div className="col-xl-6 col-sm-6">
            <div
              className={
                !variant ? "h3_admission-form-input" : "h6_admission-form-input"
              }
            >
              <label htmlFor="state" className="visually-hidden">
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={formValues.state}
                placeholder="State"
                aria-label="State"
                aria-required="true"
                aria-invalid={state.field === "state"}
                disabled={pending}
                onChange={(e) =>
                  setFormValues((prev) => ({
                    ...prev,
                    state: e.target.value,
                  }))
                }
                required
              />
            </div>
          </div>

          <div className="col-xl-6 col-sm-6">
            <div
              className={
                !variant ? "h3_admission-form-input" : "h6_admission-form-input"
              }
            >
              <label htmlFor="zipCode" className="visually-hidden">
                Zip Code
              </label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={formValues.zipCode}
                placeholder="Zip Code"
                aria-label="Zip Code"
                aria-required="true"
                aria-invalid={state.field === "zipCode"}
                disabled={pending}
                onChange={(e) =>
                  setFormValues((prev) => ({
                    ...prev,
                    zipCode: e.target.value,
                  }))
                }
                required
              />
            </div>
          </div>

          <div className="col-12">
            <div
              className={
                !variant ? "h3_admission-form-input" : "h6_admission-form-input"
              }
            >
              <label htmlFor="dateOfBirth" className="visually-hidden">
                Date of Birth
              </label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formValues.dateOfBirth}
                aria-label="Date of Birth"
                aria-required="true"
                aria-invalid={state.field === "dateOfBirth"}
                disabled={pending}
                onChange={(e) =>
                  setFormValues((prev) => ({
                    ...prev,
                    dateOfBirth: e.target.value,
                  }))
                }
                required
              />
            </div>
          </div>

          <div className="col-12">
            <div
              className={
                !variant ? "h3_admission-form-input" : "h6_admission-form-input"
              }
            >
              <label
                htmlFor="academicQualifications"
                className="visually-hidden"
              >
                Academic Qualifications
              </label>
              <textarea
                id="academicQualifications"
                name="academicQualifications"
                value={formValues.academicQualifications}
                placeholder="Academic Qualifications"
                aria-label="Academic Qualifications"
                aria-required="true"
                aria-invalid={state.field === "academicQualifications"}
                disabled={pending}
                onChange={(e) =>
                  setFormValues((prev) => ({
                    ...prev,
                    academicQualifications: e.target.value,
                  }))
                }
                required
              />
            </div>
          </div>

          <div className="col-12">
            <div
              className={
                !variant ? "h3_admission-form-btn" : "h6_admission-form-btn"
              }
            >
              <button
                type="submit"
                className={clsx(
                  `theme-btn ${
                    !variant
                      ? "h3_admission-btn theme-btn-full theme-btn-3"
                      : "h6_admission-btn theme-btn-full theme-btn-6"
                  }`,
                  {
                    "is-pending": pending,
                  }
                )}
                aria-label="Submit admission application"
                disabled={pending}
              >
                {pending ? (
                  <>
                    Submitting{" "}
                    <i
                      className="fas fa-spinner fa-spin"
                      aria-hidden="true"
                    ></i>
                  </>
                ) : (
                  <>
                    {!variant ? "Submit Form" : "Contact Us"}
                    <i
                      className="fa-light fa-arrow-right"
                      aria-hidden="true"
                    ></i>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {alertMessage && (
          <div
            className={clsx(
              `alert alert-${state.success ? "success" : "danger"} mt-3`,
              "flex items-center"
            )}
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

export default AdmissionForm;
