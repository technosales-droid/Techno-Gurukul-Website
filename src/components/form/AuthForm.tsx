"use client";
import { useEffect, useRef, useState } from "react";
import { useActionState } from "react";
import { toast } from "react-toastify";
import clsx from "clsx";
import { authFormAction, FormResult } from "@/actions/formActions";

interface Props {
  signIn?: boolean;
}

const initialState: FormResult = {
  success: false,
  message: "",
  field: undefined,
};

const ALERT_DURATION = 4000;

const AuthForm = ({ signIn }: Props) => {
  const [state, formAction, pending] = useActionState(
    authFormAction,
    initialState
  );

  const formRef = useRef<HTMLFormElement>(null);
  const [showPassword, setShowPassword] = useState(false);

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    rememberMe: false,
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
        password: "",
        rememberMe: false,
      });
      setShowPassword(false);
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

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div role="region" aria-labelledby="auth-form-heading">
      <h2 id="auth-form-heading" className="visually-hidden">
        {signIn ? "Sign In Form" : "Sign Up Form"}
      </h2>

      <form
        ref={formRef}
        className="account-form"
        action={formAction}
        aria-describedby="auth-form-description"
      >
        <div id="auth-form-description" className="visually-hidden">
          {signIn
            ? "Sign in to your account using your username/email and password."
            : "Create a new account by filling out all required fields."}
        </div>

        <input
          type="hidden"
          name="isSignIn"
          value={signIn ? "true" : "false"}
        />

        <div className="account-form-item mb-20">
          <div className="account-form-label">
            <label htmlFor={signIn ? "email" : "firstName"}>
              {signIn ? "Your Email" : "First Name"}
            </label>
          </div>
          <div className="account-form-input">
            <input
              type={signIn ? "email" : "text"}
              id={signIn ? "email" : "firstName"}
              name={signIn ? "email" : "firstName"}
              value={signIn ? formValues.email : formValues.firstName}
              placeholder={signIn ? "Enter Your Email" : "First Name"}
              aria-label={signIn ? "Email" : "First Name"}
              aria-required="true"
              aria-invalid={state.field === (signIn ? "email" : "firstName")}
              disabled={pending}
              onChange={(e) =>
                setFormValues((prev) => ({
                  ...prev,
                  [signIn ? "email" : "firstName"]: e.target.value,
                }))
              }
              autoComplete={signIn ? "email" : "given-name"}
              required
            />
          </div>
        </div>

        {!signIn && (
          <>
            <div className="account-form-item mb-20">
              <div className="account-form-label">
                <label htmlFor="lastName">Last Name</label>
              </div>
              <div className="account-form-input">
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
                  autoComplete="on"
                  required
                />
              </div>
            </div>

            <div className="account-form-item mb-20">
              <div className="account-form-label">
                <label htmlFor="email">Your Email</label>
              </div>
              <div className="account-form-input">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formValues.email}
                  placeholder="Enter Your Email"
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
                  autoComplete="email"
                  required
                />
              </div>
            </div>
          </>
        )}

        <div className="account-form-item mb-15">
          <div className="account-form-label">
            <label htmlFor="password">Your Password</label>
            <a href="#" aria-label="Forgot password link">
              Forgot Password ?
            </a>
          </div>
          <div className="account-form-input account-form-input-pass">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formValues.password}
              placeholder="*********"
              aria-label="Password"
              aria-required="true"
              aria-invalid={state.field === "password"}
              aria-describedby={!signIn ? "password-requirements" : undefined}
              disabled={pending}
              onChange={(e) =>
                setFormValues((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
              autoComplete={signIn ? "current-password" : "new-password"}
              required
            />
            <span
              role="button"
              onClick={togglePasswordVisibility}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="password-toggle-btn"
            >
              <i
                className={clsx(
                  showPassword ? "fa-thin fa-eye" : "fa-thin fa-eye-slash"
                )}
                aria-hidden="true"
              ></i>
            </span>
          </div>
          {!signIn && (
            <div id="password-requirements" className="password-help-text mt-2">
              Password must be at least 8 characters with uppercase, lowercase,
              and number.
            </div>
          )}
        </div>

        <div className="account-form-condition">
          <label className="condition_label">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={formValues.rememberMe}
              disabled={pending}
              onChange={(e) =>
                setFormValues((prev) => ({
                  ...prev,
                  rememberMe: e.target.checked,
                }))
              }
              aria-describedby="remember-me-description"
            />
            <span className="check_mark"></span>
            Remember Me
          </label>
          <div id="remember-me-description" className="visually-hidden">
            Keep me signed in on this device
          </div>
        </div>

        <input
          type="hidden"
          name="rememberMe"
          value={formValues.rememberMe ? "true" : "false"}
        />

        <div className="account-form-button">
          <button
            type="submit"
            className={clsx("account-btn", {
              "is-pending": pending,
            })}
            aria-label={`${signIn ? "Sign in" : "Sign up"} to account`}
            disabled={pending}
          >
            {pending ? (
              <>
                {signIn ? "Signing In" : "Signing Up"}{" "}
                <i className="fas fa-spinner fa-spin" aria-hidden="true"></i>
              </>
            ) : (
              `Sign ${signIn ? "In" : "Up"}`
            )}
          </button>
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

export default AuthForm;
