"use server";

export interface FormResult {
  success: boolean;
  message?: string;
  field?: string | undefined;
  _id?: number;
  data?: object;
}

export interface AdmissionFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  dateOfBirth: string;
  academicQualifications: string;
}

export interface AuthFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface ContactFormData2 {
  name: string;
  email: string;
  number: string;
  subject: string;
  message: string;
  agreeToTerms: boolean;
}

export interface NewsletterFormData2 {
  email: string;
  agreeToTerms: boolean;
}

export interface NewsletterFormData3 {
  email: string;
}

// Validation utilities
const validateEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const validatePassword = (password: string): boolean => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&_]{8,}$/;
  return regex.test(password);
};

const validateUsername = (username: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const usernameRegex = /^[a-zA-Z0-9_-]{3,20}$/;
  return emailRegex.test(username) || usernameRegex.test(username);
};

// Admission Form Action
export async function admissionFormAction(
  _prevState: FormResult,
  formData: FormData
): Promise<FormResult> {
  try {
    const rawData = {
      firstName: (formData.get("firstName") as string)?.trim() || "",
      lastName: (formData.get("lastName") as string)?.trim() || "",
      email: (formData.get("email") as string)?.trim() || "",
      phone: (formData.get("phone") as string)?.trim() || "",
      streetAddress: (formData.get("streetAddress") as string)?.trim() || "",
      city: (formData.get("city") as string)?.trim() || "",
      state: (formData.get("state") as string)?.trim() || "",
      zipCode: (formData.get("zipCode") as string)?.trim() || "",
      dateOfBirth: (formData.get("dateOfBirth") as string)?.trim() || "",
      academicQualifications:
        (formData.get("academicQualifications") as string)?.trim() || "",
    };

    // Validate first name
    if (!rawData.firstName) {
      return {
        success: false,
        message: "First name is required.",
        field: "firstName",
        _id: Date.now(),
        data: rawData,
      };
    }
    if (rawData.firstName.length < 2) {
      return {
        success: false,
        message: "First name must be at least 2 characters long.",
        field: "firstName",
        _id: Date.now(),
        data: rawData,
      };
    }

    // Validate last name
    if (!rawData.lastName) {
      return {
        success: false,
        message: "Last name is required.",
        field: "lastName",
        _id: Date.now(),
        data: rawData,
      };
    }
    if (rawData.lastName.length < 2) {
      return {
        success: false,
        message: "Last name must be at least 2 characters long.",
        field: "lastName",
        _id: Date.now(),
        data: rawData,
      };
    }

    // Validate email
    if (!rawData.email) {
      return {
        success: false,
        message: "Email address is required.",
        field: "email",
        _id: Date.now(),
        data: rawData,
      };
    }
    if (!validateEmail(rawData.email)) {
      return {
        success: false,
        message: "Please enter a valid email address.",
        field: "email",
        _id: Date.now(),
        data: rawData,
      };
    }

    // Validate phone
    if (!rawData.phone) {
      return {
        success: false,
        message: "Phone number is required.",
        field: "phone",
        _id: Date.now(),
        data: rawData,
      };
    }

    // Validate street address
    if (!rawData.streetAddress) {
      return {
        success: false,
        message: "Street address is required.",
        field: "streetAddress",
        _id: Date.now(),
        data: rawData,
      };
    }

    // Validate city
    if (!rawData.city) {
      return {
        success: false,
        message: "City is required.",
        field: "city",
        _id: Date.now(),
        data: rawData,
      };
    }

    // Validate state
    if (!rawData.state) {
      return {
        success: false,
        message: "State is required.",
        field: "state",
        _id: Date.now(),
        data: rawData,
      };
    }

    // Validate zip code
    if (!rawData.zipCode) {
      return {
        success: false,
        message: "Zip code is required.",
        field: "zipCode",
        _id: Date.now(),
        data: rawData,
      };
    }

    // Validate date of birth
    if (!rawData.dateOfBirth) {
      return {
        success: false,
        message: "Date of birth is required.",
        field: "dateOfBirth",
        _id: Date.now(),
        data: rawData,
      };
    }

    // Validate academic qualifications
    if (!rawData.academicQualifications) {
      return {
        success: false,
        message: "Academic qualifications are required.",
        field: "academicQualifications",
        _id: Date.now(),
        data: rawData,
      };
    }
    if (rawData.academicQualifications.length < 10) {
      return {
        success: false,
        message: "Academic qualifications must be at least 10 characters long.",
        field: "academicQualifications",
        _id: Date.now(),
        data: rawData,
      };
    }

    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log(
      "Submitted Admission Form Data:",
      JSON.stringify(rawData, null, 2)
    );

    return {
      success: true,
      message: "Your admission application has been submitted successfully!",
      field: undefined,
      _id: Date.now(),
      data: {},
    };
  } catch (error) {
    console.error("Admission form submission error:", error);
    return {
      success: false,
      message:
        "An error occurred while processing your request. Please try again.",
      _id: Date.now(),
      data: {
        firstName: (formData.get("firstName") as string) || "",
        lastName: (formData.get("lastName") as string) || "",
        email: (formData.get("email") as string) || "",
        phone: (formData.get("phone") as string) || "",
        streetAddress: (formData.get("streetAddress") as string) || "",
        city: (formData.get("city") as string) || "",
        state: (formData.get("state") as string) || "",
        zipCode: (formData.get("zipCode") as string) || "",
        dateOfBirth: (formData.get("dateOfBirth") as string) || "",
        academicQualifications:
          (formData.get("academicQualifications") as string) || "",
      },
    };
  }
}

// Auth Form Action (Sign In/Sign Up)
export async function authFormAction(
  _prevState: FormResult,
  formData: FormData
): Promise<FormResult> {
  try {
    const isSignIn = formData.get("isSignIn") === "true";

    const rawData = {
      firstName: (formData.get("firstName") as string)?.trim() || "",
      lastName: (formData.get("lastName") as string)?.trim() || "",
      email: (formData.get("email") as string)?.trim() || "",
      password: (formData.get("password") as string)?.trim() || "",
      rememberMe: formData.get("rememberMe") === "true",
    };

    if (isSignIn) {
      // Sign In Validation
      if (!rawData.email) {
        return {
          success: false,
          message: "Email is required.",
          field: "email",
          _id: Date.now(),
          data: rawData,
        };
      }

      if (!validateUsername(rawData.email)) {
        return {
          success: false,
          message: "Please enter a valid email address.",
          field: "firstName",
          _id: Date.now(),
          data: rawData,
        };
      }

      if (!rawData.password) {
        return {
          success: false,
          message: "Password is required.",
          field: "password",
          _id: Date.now(),
          data: rawData,
        };
      }
    } else {
      // Sign Up Validation
      if (!rawData.firstName) {
        return {
          success: false,
          message: "First name is required.",
          field: "firstName",
          _id: Date.now(),
          data: rawData,
        };
      }
      if (rawData.firstName.length < 2) {
        return {
          success: false,
          message: "First name must be at least 2 characters long.",
          field: "firstName",
          _id: Date.now(),
          data: rawData,
        };
      }

      if (!rawData.lastName) {
        return {
          success: false,
          message: "Last name is required.",
          field: "lastName",
          _id: Date.now(),
          data: rawData,
        };
      }
      if (rawData.lastName.length < 2) {
        return {
          success: false,
          message: "Last name must be at least 2 characters long.",
          field: "lastName",
          _id: Date.now(),
          data: rawData,
        };
      }

      if (!rawData.email) {
        return {
          success: false,
          message: "Email address is required.",
          field: "email",
          _id: Date.now(),
          data: rawData,
        };
      }
      if (!validateEmail(rawData.email)) {
        return {
          success: false,
          message: "Please enter a valid email address.",
          field: "email",
          _id: Date.now(),
          data: rawData,
        };
      }

      if (!rawData.password) {
        return {
          success: false,
          message: "Password is required.",
          field: "password",
          _id: Date.now(),
          data: rawData,
        };
      }
      if (!validatePassword(rawData.password)) {
        return {
          success: false,
          message:
            "Password must be at least 8 characters with uppercase, lowercase, and number.",
          field: "password",
          _id: Date.now(),
          data: rawData,
        };
      }
    }

    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log(
      `${isSignIn ? "Sign In" : "Sign Up"} Data:`,
      JSON.stringify(rawData, null, 2)
    );

    return {
      success: true,
      message: `${isSignIn ? "Sign in" : "Account creation"} successful!`,
      field: undefined,
      _id: Date.now(),
      data: {},
    };
  } catch (error) {
    console.error("Auth form submission error:", error);
    return {
      success: false,
      message:
        "An error occurred while processing your request. Please try again.",
      _id: Date.now(),
      data: {
        firstName: (formData.get("firstName") as string) || "",
        lastName: (formData.get("lastName") as string) || "",
        email: (formData.get("email") as string) || "",
        password: (formData.get("password") as string) || "",
        rememberMe: formData.get("rememberMe") === "true",
      },
    };
  }
}

// Contact Form 2 Action
export async function contactForm2Action(
  _prevState: FormResult,
  formData: FormData
): Promise<FormResult> {
  try {
    const rawData = {
      name: (formData.get("name") as string)?.trim() || "",
      email: (formData.get("email") as string)?.trim() || "",
      number: (formData.get("number") as string)?.trim() || "",
      subject: (formData.get("subject") as string)?.trim() || "",
      message: (formData.get("message") as string)?.trim() || "",
      agreeToTerms: formData.get("agreeToTerms") === "true",
    };

    if (!rawData.name) {
      return {
        success: false,
        message: "Name is required.",
        field: "name",
        _id: Date.now(),
        data: rawData,
      };
    }
    if (rawData.name.length < 2) {
      return {
        success: false,
        message: "Name must be at least 2 characters long.",
        field: "name",
        _id: Date.now(),
        data: rawData,
      };
    }

    if (!rawData.email) {
      return {
        success: false,
        message: "Email address is required.",
        field: "email",
        _id: Date.now(),
        data: rawData,
      };
    }
    if (!validateEmail(rawData.email)) {
      return {
        success: false,
        message: "Please enter a valid email address.",
        field: "email",
        _id: Date.now(),
        data: rawData,
      };
    }

    if (!rawData.number) {
      return {
        success: false,
        message: "Phone number is required.",
        field: "number",
        _id: Date.now(),
        data: rawData,
      };
    }

    if (!rawData.subject) {
      return {
        success: false,
        message: "Subject is required.",
        field: "subject",
        _id: Date.now(),
        data: rawData,
      };
    }

    if (!rawData.message) {
      return {
        success: false,
        message: "Message is required.",
        field: "message",
        _id: Date.now(),
        data: rawData,
      };
    }
    if (rawData.message.length < 10) {
      return {
        success: false,
        message: "Message must be at least 10 characters long.",
        field: "message",
        _id: Date.now(),
        data: rawData,
      };
    }

    if (!rawData.agreeToTerms) {
      return {
        success: false,
        message: "You must agree to the terms and conditions.",
        field: "agreeToTerms",
        _id: Date.now(),
        data: rawData,
      };
    }

    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log(
      "Submitted Blog Contact Form Data:",
      JSON.stringify(rawData, null, 2)
    );

    return {
      success: true,
      message: "Your message has been sent successfully!",
      field: undefined,
      _id: Date.now(),
      data: {},
    };
  } catch (error) {
    console.error("Contact form 2 submission error:", error);
    return {
      success: false,
      message:
        "An error occurred while processing your request. Please try again.",
      _id: Date.now(),
      data: {
        name: (formData.get("name") as string) || "",
        email: (formData.get("email") as string) || "",
        number: (formData.get("number") as string) || "",
        subject: (formData.get("subject") as string) || "",
        message: (formData.get("message") as string) || "",
        agreeToTerms: formData.get("agreeToTerms") === "true",
      },
    };
  }
}

// Newsletter Form 2 Action (with terms)
export async function newsletterForm2Action(
  _prevState: FormResult,
  formData: FormData
): Promise<FormResult> {
  try {
    const rawData = {
      email: (formData.get("email") as string)?.trim() || "",
      agreeToTerms: formData.get("agreeToTerms") === "true",
    };

    if (!rawData.email) {
      return {
        success: false,
        message: "Email address is required.",
        field: "email",
        _id: Date.now(),
        data: rawData,
      };
    }
    if (!validateEmail(rawData.email)) {
      return {
        success: false,
        message: "Please enter a valid email address.",
        field: "email",
        _id: Date.now(),
        data: rawData,
      };
    }

    if (!rawData.agreeToTerms) {
      return {
        success: false,
        message: "You must agree to the terms of use and privacy policy.",
        field: "agreeToTerms",
        _id: Date.now(),
        data: rawData,
      };
    }

    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log(
      "Submitted Newsletter Form Data:",
      JSON.stringify(rawData, null, 2)
    );

    return {
      success: true,
      message: "Successfully subscribed to our newsletter!",
      field: undefined,
      _id: Date.now(),
      data: {},
    };
  } catch (error) {
    console.error("Newsletter form 2 submission error:", error);
    return {
      success: false,
      message:
        "An error occurred while processing your request. Please try again.",
      _id: Date.now(),
      data: {
        email: (formData.get("email") as string) || "",
        agreeToTerms: formData.get("agreeToTerms") === "true",
      },
    };
  }
}

// Newsletter Form 3 Action (simple email only)
export async function newsletterForm3Action(
  _prevState: FormResult,
  formData: FormData
): Promise<FormResult> {
  try {
    const email = (formData.get("email") as string)?.trim() || "";

    if (!email) {
      return {
        success: false,
        message: "Email address is required.",
        field: "email",
        _id: Date.now(),
        data: { email },
      };
    }
    if (!validateEmail(email)) {
      return {
        success: false,
        message: "Please enter a valid email address.",
        field: "email",
        _id: Date.now(),
        data: { email },
      };
    }

    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Submitted Newsletter Form2 Data:", email);

    return {
      success: true,
      message: "Welcome! You're all set to start learning today!",
      field: undefined,
      _id: Date.now(),
      data: {},
    };
  } catch (error) {
    console.error("Newsletter form 3 submission error:", error);
    return {
      success: false,
      message:
        "An error occurred while processing your request. Please try again.",
      _id: Date.now(),
      data: { email: (formData.get("email") as string) || "" },
    };
  }
}
