"use client";
import { useEffect, useRef, useState } from "react";
import { useActionState } from "react";
import { toast } from "react-toastify";
import clsx from "clsx";
import { newsletterForm3Action, FormResult } from "@/actions/formActions";

const initialState: FormResult = {
  success: false,
  message: "",
  field: undefined,
};

const ALERT_DURATION = 4000;

const NewsletterForm2 = () => {
  const [state, formAction, pending] = useActionState(
    newsletterForm3Action,
    initialState
  );

  const formRef = useRef<HTMLFormElement>(null);

  const [formValues, setFormValues] = useState({
    email: "",
  });

  // Sync form values with server state data
  useEffect(() => {
    if (state.data) {
      setFormValues((prev) => ({ ...prev, ...state.data }));
    }
  }, [state._id]);

  // Reset form on successful submission
  useEffect(() => {
    if (state.success && !state.field && formRef.current) {
      formRef.current.reset();
      setFormValues({
        email: "",
      });
    }
  }, [state._id]);

  // Show toast notifications
  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast.success(state.message, { autoClose: ALERT_DURATION });
      } else {
        toast.error(state.message, { autoClose: ALERT_DURATION });
      }
    }
  }, [state._id]);

  // Focus on error field
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

  const [alertMessage, setAlertMessage] = useState("");

  // Manage alert message auto-dismissal
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

  return (
    <div role="region" aria-labelledby="newsletter-form2-heading">
      <h2 id="newsletter-form2-heading" className="visually-hidden">
        Learning Registration Form
      </h2>

      <form
        ref={formRef}
        className="h2_cta-content-form"
        action={formAction}
        aria-describedby="newsletter-form2-description"
      >
        <div id="newsletter-form2-description" className="visually-hidden">
          Enter your email address to start your learning journey today.
        </div>

        <input
          type="email"
          placeholder="Enter your Email"
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

        <button
          type="submit"
          className={clsx({
            "is-pending": pending,
          })}
          aria-label="Start learning today"
          disabled={pending}
        >
          {pending ? (
            <>
              Getting Started{" "}
              <i className="fas fa-spinner fa-spin" aria-hidden="true"></i>
            </>
          ) : (
            "Start Learning Today"
          )}
        </button>

        {alertMessage && (
          <div
            className={`alert alert-${
              state.success ? "success" : "danger"
            } position-absolute top-100 start-0 end-0 mt-2 d-flex align-items-center`}
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

export default NewsletterForm2;
