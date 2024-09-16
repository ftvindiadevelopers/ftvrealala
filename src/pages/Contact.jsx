import { useState, useEffect } from "react";

// import { useHistory } from 'react-router-dom';
import MainSection from "../components/MainSection";
import AllImages from "../Images";
import { login } from "../api/api";
import Select from "react-select";
import Validation from "../api/FormValidation";
import { useNavigate } from "react-router-dom";

function Contact() {
  const currentDate = new Date();
  const formattedDate = currentDate
    .toISOString()
    .slice(0, 19)
    .replace("T", " ");

  const initialFormData = () => ({
    name: "",
    email: "",
    contact: "",
    website: "",
    message: "",
    completed_proj: "",
    ongoing_proj: "",
    developer_name: "",
    residences_options: "",
    commercial_options: "",
    hospitality_options: "",
    state: selectedState,
    city: selectedCity,
    investment: "",
    created_at: formattedDate,
    // terms_and_condition: Boolean,
  });
  const [authToken, setAuthToken] = useState("");
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [selectedOption3, setSelectedOption3] = useState("");
  const [selectDisabled1, setSelectDisabled1] = useState(true);
  const [selectDisabled2, setSelectDisabled2] = useState(true);
  const [selectDisabled3, setSelectDisabled3] = useState(true);
  const [errors, setErrors] = useState({});
  const [isFormReady, setIsFormReady] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // null, "success", or "error"
  const [formData, setFormData] = useState(initialFormData);
  const navigate = useNavigate();

  const fetchContact = async () => {
    try {
      const fetchedToken = await login(); // Assuming this function works and retrieves the token.

      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${fetchedToken}`,
      };

      // const response = await fetch(`http://localhost:8089/api/enquiry`, {
      const response = await fetch(
        `https://node.ftvrealestate.in:8089/api/enquiry`,
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers,
          mode: "cors",
        }
      );
      // console.log("Response:", response);
      if (response.status == 200) {
        const data = await response.json();
        navigate("/thank-you");
        console.log(data);
      } else {
        console.error("fetch data failed:", response.statusText);
        const errorText = await response.text();
        console.error("fetch failed with status:", response.status, errorText);
        setErrorMessage(errorText);
        setErrors(errorText);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      if (error.status === "error" && error.message) {
        setErrorMessage(error.message);
        setErrors(error.message);
      } else {
        setErrors(
          "An error occurred while submitting the form. Please try again later."
        );
        setErrorMessage(
          "An error occurred while submitting the form. Please try again later."
        );
      }
    }
  };
  // const handleCheckboxChange = (e) => {
  //   setSelectDisabled(!e.target.checked);
  //   if (!e.target.checked) {
  //     setSelectedOption([]);
  //   }
  // };
  const handleCheckboxChange = (e, selectNumber) => {
    const value = e.target.checked;
    switch (selectNumber) {
      case 1:
        setSelectDisabled1(!value);
        break;
      case 2:
        setSelectDisabled2(!value);
        break;
      case 3:
        setSelectDisabled3(!value);
        break;
      default:
        break;
    }
  };

  function handleChange(event) {
    // console.log(event);
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  useEffect(() => {
    if (isFormReady) {
      const formErrors = Validation(formData);
      setErrors(formErrors);
      if (Object.keys(formErrors).length === 0) {
        fetchContact()
          //   setFormData(initialFormData);
          //   setSubmissionStatus("success");
          // }
          .then(() => {
            setFormData(initialFormData);
            setSubmissionStatus("success");
          })
          .catch((error) => {
            setSubmissionStatus("error");
            setErrorMessage("Something went wrong");
            setErrors("Something went wrong");
            console.error("Fetch failed with error:", error);
          });
      } else {
        setIsFormReady(false);
      }
    }
  }, [isFormReady, formData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
    console.log(formData);
    setFormData((prevValue) => ({
      ...prevValue,
      message: prevValue.message == "" ? "No data" : prevValue.message,
      residences_options:
        prevValue.residences_options == ""
          ? "No data"
          : prevValue.residences_options,
      commercial_options:
        prevValue.commercial_options == ""
          ? "No data"
          : prevValue.commercial_options,
      hospitality_options:
        prevValue.hospitality_options == ""
          ? "No data"
          : prevValue.hospitality_options,
    }));

    setIsFormReady(true);
  };

  const options = [
    { value: "f-residences", label: "F Residences" },
    { value: "f-villas", label: "F Villas" },
    { value: "f-furnished-apartments", label: "F Furnished Apartments" },
  ];
  const options2 = [
    { value: "ftv-malls", label: "FTV Malls" },
    { value: "ftv-business-bay", label: " FTV Business Bay" },
    { value: "ftv-outlet-malls", label: "FTV Outlet Malls" },
    { value: "ftv-coworks", label: "FTV Coworks" },
  ];
  const options3 = [
    { value: "ftv-hotels", label: "FTV Hotels" },
    { value: "ftv-resorts", label: "FTV Resorts" },
    { value: "ftv-house", label: "FTV House" },
  ];

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    setFormData((prevData) => ({
      ...prevData,
      residences_options: "" + selectedOption.map((option) => option.value),
    }));
  };

  const handleSelectChange2 = (selectedOption2) => {
    setSelectedOption2(selectedOption2);
    setFormData((prevData) => ({
      ...prevData,
      commercial_options: "" + selectedOption2.map((option) => option.value),
    }));
  };

  const handleSelectChange3 = (selectedOption3) => {
    setSelectedOption3(selectedOption3);
    setFormData((prevData) => ({
      ...prevData,
      hospitality_options: "" + selectedOption3.map((option) => option.value),
    }));
  };

  useEffect(() => {
    fetch("https://www.universal-tutorial.com/api/getaccesstoken", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "api-token":
          "j9EF8D8eDp_H5D40m01kiK9E7JnY7s8Yd8bkFkzIUs945wrtSCMTl94WJ7BW0Mbznh4",
        "user-email": "ingaleaarti956@gmail.com",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setAuthToken(data.auth_token);
        getState(data.auth_token);
      })
      .catch((error) => console.error(error));
  }, []);

  const getState = (token) => {
    fetch(`https://www.universal-tutorial.com/api/states/India`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setStates(data);
      })
      .catch((error) => console.error(error));
  };

  const getCity = () => {
    fetch(`https://www.universal-tutorial.com/api/cities/${selectedState}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`,
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCities(data);
      })
      .catch((error) => console.error(error));
  };

  const handleStateChange = (event) => {
    const selectedStateValue = event.target.value;
    setSelectedState(selectedStateValue);

    setFormData((prevData) => ({
      ...prevData,
      state: selectedStateValue,
    }));
  };

  const handleCityChange = (event) => {
    const selectedCityValue = event.target.value;
    setSelectedCity(selectedCityValue);
    setFormData((prevData) => ({
      ...prevData,
      city: selectedCityValue,
    }));
  };

  useEffect(() => {
    if (selectedState) {
      getCity();
    }
  }, [selectedState]);

  return (
    <>
      <MainSection
        mainImage={AllImages.contactBanner}
        mainHeading="Contact us"
        showPara={false}
      />
      <section className="enquiry-form-sec" id="enquiry-now">
        <div className="container-fluid m-0 p-0">
          <div className="row m-0 justify-content-center p-0">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="enquiry-image">
                <img loading="lazy" src={AllImages.ProjectsDubai} alt="" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12" id="enquiry">
              <div className="myenquire-form">
              {errorMessage && (
                  <div className="error-message">{errorMessage}</div>
                )}
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <label htmlFor="" className="form-label">
                        Full Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="input-form form-control"
                        name="name"
                        onChange={handleChange}
                        autoComplete="off"
                        value={formData.name}
                        placeholder="Your Name"
                      />
                      {errors.name && (
                        <p className="input-error">{errors.name}</p>
                      )}
                    </div>

                    <div className="col-md-6 mb-4">
                      <label htmlFor="" className="form-label">
                        Contact Number <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="input-form form-control"
                        name="contact"
                        onChange={handleChange}
                        value={formData.contact}
                        placeholder="Your Phone No."
                        maxLength="10"
                        minLength="10"
                        min="0"
                      />
                      {errors.contact && (
                        <p className="input-error">{errors.contact}</p>
                      )}
                    </div>
                    <div className="col-md-12 mb-4">
                      <label htmlFor="" className="form-label">
                        Email Id <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        className="input-form form-control"
                        name="email"
                        onChange={handleChange}
                        value={formData.email}
                        placeholder="Your Email Id"
                      />
                      {errors.email && (
                        <p className="input-error">{errors.email}</p>
                      )}
                    </div>
                    <div className="col-md-6 mb-4">
                      <label htmlFor="" className="form-label">
                        Developer’s Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="input-form form-control"
                        name="developer_name"
                        onChange={handleChange}
                        value={formData.developer_name}
                        placeholder="Developer’s Name"
                      />
                      {errors.developer_name && (
                        <p className="input-error">{errors.developer_name}</p>
                      )}
                    </div>
                    <div className="col-md-6 mb-4">
                      <label htmlFor="" className="form-label">
                        Developer’s Website{" "}
                        <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="input-form form-control"
                        name="website"
                        onChange={handleChange}
                        value={formData.website}
                        placeholder="Developer’s Website"
                      />
                      {errors.website && (
                        <p className="input-error">{errors.website}</p>
                      )}
                    </div>
                    <div className="col-md-6 mb-4">
                      <label htmlFor="" className="form-label">
                        No. of Completed Projects{" "}
                        <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="input-form form-control"
                        name="completed_proj"
                        onChange={handleChange}
                        value={formData.completed_proj}
                        placeholder="No of Completed Projects"
                      />
                      {errors.completed_proj && (
                        <p className="input-error">{errors.completed_proj}</p>
                      )}
                    </div>
                    <div className="col-md-6 mb-4">
                      <label htmlFor="" className="form-label">
                        No. of Ongoing Projects{" "}
                        <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="input-form form-control"
                        name="ongoing_proj"
                        onChange={handleChange}
                        value={formData.ongoing_proj}
                        placeholder="No of Ongoing Projects"
                      />
                      {errors.ongoing_proj && (
                        <p className="input-error">{errors.ongoing_proj}</p>
                      )}
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col-md-6">
                      <label htmlFor="" className="form-label">
                        State <span className="text-danger">*</span>
                      </label>
                      <select
                        className="form-control"
                        autoComplete="off"
                        name="state"
                        value={selectedState} // Use selectedState here instead of formData.selectedState
                        onChange={handleStateChange}
                      >
                        <option value="">Select State</option>
                        {states.map((state, index) => (
                          <option key={index} value={state.state_name}>
                            {state.state_name}
                          </option>
                        ))}
                      </select>
                      {errors.state && (
                        <p className="input-error">{errors.state}</p>
                      )}
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="" className="form-label">
                        City <span className="text-danger">*</span>
                      </label>
                      <select
                        className="form-control"
                        autoComplete="off"
                        name="city"
                        value={selectedCity}
                        onChange={handleCityChange}
                      >
                        <option value="">Select City</option>
                        {cities.map((city, index) => (
                          <option key={index} value={city.city_name}>
                            {city.city_name}
                          </option>
                        ))}
                      </select>
                      {errors.city && (
                        <p className="input-error">{errors.city}</p>
                      )}
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12 mb-3">
                      <div className="">
                        <label htmlFor="" className="form-label">
                          Real Estate Licensing Categories Required ?
                        </label>
                      </div>
                    </div>
                    <div className="col-12 mb-3">
                      <div className="mb-3 form-check-res">
                        <div className="form-check-select">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="residences"
                            name="residences"
                            id="residences"
                            onChange={(e) => handleCheckboxChange(e, 1)}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="residences"
                          >
                            Residences Licensing
                          </label>
                        </div>
                        <div className="form-check-select">
                          <Select
                            value={selectedOption}
                            onChange={handleSelectChange}
                            options={options}
                            isMulti={true}
                            name="residences_options"
                            isDisabled={selectDisabled1}
                          />
                        </div>
                        {errors.residences_options && (
                          <p className="input-error">
                            {errors.residences_options}
                          </p>
                        )}
                      </div>

                      <div className="mb-3 form-check-res">
                        <div className="form-check-select">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="commercial"
                            name="commercial"
                            id="commercial"
                            onChange={(e) => handleCheckboxChange(e, 2)}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="commercial"
                          >
                            Commercial spaces Licensing
                          </label>
                        </div>
                        <div className="form-check-select">
                          <Select
                            value={selectedOption2}
                            onChange={handleSelectChange2}
                            options={options2}
                            isMulti={true}
                            name="commercial_options"
                            isDisabled={selectDisabled2}
                          />
                        </div>
                      </div>
                      <div className="mb-3 form-check-res">
                        <div className="form-check-select">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="hospitality"
                            name="hospitality"
                            onChange={(e) => handleCheckboxChange(e, 3)}
                            id="hospitality"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="hospitality"
                          >
                            Hospitality Licensing
                          </label>
                        </div>
                        <div className="form-check-select">
                          <Select
                            value={selectedOption3}
                            onChange={handleSelectChange3}
                            options={options3}
                            isMulti={true}
                            name="hospitality_options"
                            isDisabled={selectDisabled3}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mb-4">
                    <label htmlFor="" className="form-label">
                      Project Value <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="input-form form-control"
                      name="investment"
                      onChange={handleChange}
                      value={formData.investment}
                      placeholder="Project Value Ex.: 10CR"
                    />
                    {errors.investment && (
                      <p className="input-error">{errors.investment}</p>
                    )}
                  </div>
                  <div className="row mohide">
                    <div className="col-md-12 mb-3">
                      <label htmlFor="" className="form-label">
                        Write in your queries
                      </label>
                      <textarea
                        className="input-form form-control"
                        name="message"
                        onChange={handleChange}
                        value={formData.message}
                        type="text"
                        placeholder="Write in your queries"
                      ></textarea>
                      {errors.message && (
                        <p className="input-error">{errors.message}</p>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-submit "
                    name="enquiry_submit"
                    aria-label="submit"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
