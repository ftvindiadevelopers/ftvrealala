export default function Validation(formData) {
  const errors = {};

  const nameRegx = /^[a-zA-Z][a-zA-Z\s']* [a-zA-Z\s']*$/i;
  if (formData.name === "") {
    errors.name = "Name is Required!";
  } else if (!nameRegx.test(formData.name)) {
    errors.name = "Enter Valid Name";
  }
  if (formData.email === "") {
    errors.email = "Email is required!";
  } else {
    // Regular expression for validating email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      errors.email = "Invalid email address!";
    }
  }
  if (formData.ongoing_proj === "") {
    errors.ongoing_proj = "No. of Ongoing Projects is Required!";
  } else if (!/^\d+$/.test(formData.ongoing_proj)) {
    errors.ongoing_proj = "Please enter numbers only";
  }
  if (formData.developer_name === "") {
    errors.developer_name = "Developer name is Required!";
  }

  if (formData.completed_proj === "") {
    errors.completed_proj = "No. of Completed Projects is Required!";
  } else if (!/^\d+$/.test(formData.completed_proj)) {
    errors.completed_proj = "Please enter numbers only";
  }
  if (formData.investment === "") {
    errors.investment = "Investment is Required!";
  } else if (!/^\d+$/.test(formData.investment)) {
    errors.investment = "Please enter numbers only";
  }
  if (formData.website === "") {
    errors.website = "Website URL is required!";
  } else if (
    !/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/.test(
      formData.website
    )
  ) {
    errors.website =
      "Please enter a valid URL and it should start with https://";
  }

  if (formData.state === "") {
    errors.state = "State field is Required!";
  }
  if (formData.city === "") {
    errors.city = "City field is Required!";
  }
  if (formData.contact === "") {
    errors.contact = "Contact field is Required!";
  } else if (!/^[6-9]\d{9}$/.test(formData.contact.replace(/\s/g, ""))) {
    errors.contact =
      "The contact field must exclusively contain 10 digits and start with 6, 7, 8, or 9";
  }
  return errors;
}

export function CtaValidation(ctaformData) {
  const ctaErrors = {};
  if (ctaformData.name === "") {
    ctaErrors.name = "Name is Required!";
  }
  if (ctaformData.email === "") {
    ctaErrors.email = "Email is required!";
  } else {
    // Regular expression for validating email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(ctaformData.email)) {
      ctaErrors.email = "Invalid email address!";
    }
  }
  if (ctaformData.mobile === "") {
    ctaErrors.mobile = "mobile field is Required! ";
  } else if (!/^\d{10}$/.test(ctaformData.mobile)) {
    ctaErrors.mobile = "The mobile field must exclusively contain 10 digits";
  }
  return ctaErrors;
}

export function subValidate(subformData) {
  const subError = {};
  if (subformData.email === "") {
    subError.email = "Please Enter Email ID!";
  } else {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(subformData.email)) {
      subError.email = "Invalid email address!";
    }
  }
  return subError;
}
