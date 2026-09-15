"use client";
import { useEffect, useRef, useState } from "react";
import { useActionState } from "react";
import { toast } from "react-toastify";
import clsx from "clsx";
import { newsletterForm2Action, FormResult } from "@/actions/formActions";

interface Props {
  variant?: boolean;
}

const initialState: FormResult = {
  success: false,
  message: "",
  field: undefined,
};

const ALERT_DURATION = 4000;

const NewsletterForm = ({ variant }: Props) => {
  const [state, formAction, pending] = useActionState(
    newsletterForm2Action,
    initialState
  );

  const formRef = useRef<HTMLFormElement>(null);

  const [formValues, setFormValues] = useState({
    email: "",
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
        email: "",
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

  return (
    <div role="region" aria-labelledby="newsletter-form-heading">
      <h2 id="newsletter-form-heading" className="visually-hidden">
        Newsletter Subscription Form
      </h2>

      <form
        ref={formRef}
        action={formAction}
        aria-describedby="newsletter-form-description"
      >
        <div id="newsletter-form-description" className="visually-hidden">
          Subscribe to our newsletter by entering your email address and
          agreeing to our terms.
        </div>

        <input
          type="hidden"
          name="agreeToTerms"
          value={formValues.agreeToTerms ? "true" : "false"}
        />

        <div
          className={
            variant ? "h6_footer-subscribe-form" : "footer-subscribe-form"
          }
        >
          <input
            type="email"
            placeholder="Enter Your Email*"
            name="email"
            id="email2"
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
              "is-pending opacity-100": pending,
            })}
            aria-label="Subscribe to newsletter"
            disabled={pending}
          >
            {pending ? (
              <>
                Subscribing{" "}
                <i className="fas fa-spinner fa-spin" aria-hidden="true"></i>
              </>
            ) : (
              "Subscribe"
            )}
          </button>
        </div>

        <div
          className={
            variant
              ? "h6_footer-subscribe-condition"
              : "footer-subscribe-condition"
          }
        >
          <label className="condition_label">
            I agree to the terms of use and privacy policy.
            <input
              type="checkbox"
              name="agreeToTerms"
              id="agreeToTerms"
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

export default NewsletterForm;
