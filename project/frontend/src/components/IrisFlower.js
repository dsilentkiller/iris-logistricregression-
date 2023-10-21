import React, { useState, useEffect } from "react";
import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/api/iris-flower/";
const Contact = () => {
  const [contactData, setContactData] = useState({
    sepal_length: "",
    sepal_width: "",
    petal_length: "",
    petal_width: "",
  });

  const headers = {
    // Authorization: "Bearer YOUR_ACCESS_TOKEN",
    "Content-Type": "multipart/form-data", // If necessary
  };
  // status for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // handling the name change
  const handleChange = (event) => {
    setContactData({
      ...contactData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your form submission logic here
  };

  // Handling the sepal_width change
  const submitForm = () => {
    const formContactData = new FormData();
    formContactData.append("sepal_length", contactData.sepal_length);
    formContactData.append("sepal_width", contactData.sepal_width);
    formContactData.append("petal_length", contactData.petal_length);
    formContactData.append("petal_width", contactData.petal_width);

    try {
      axios.post(baseUrl, formContactData, { headers }).then((response) => {
        setContactData({
          sepal_length: "",
          sepal_width: "",
          petal_length: "",
          petal_width: "",
        });
      });
    } catch (error) {
      console.log(error);
      setContactData({ status: "error" });
    }
  };

  useEffect(() => {
    document.title = "Contact Us";
  }, []);

  return (
    <div>
      <section className="contact_section layout_padding-bottom">
        <div className="container">
          <div className="heading_container">
            <h2>Get In Touch</h2>
          </div>
          <div className="row">
            <div className="col-md-7">
              <div className="form_container">
                <form onSubmit={handleSubmit}>
                  <div>
                    <input
                      type="text"
                      placeholder="Sepal length "
                      value={contactData.sepal_length}
                      onChange={handleChange}
                      name="sepal_length"
                    />
                  </div>
                  <div>
                    <input
                      type="sepal_width"
                      placeholder="sepal width"
                      name="sepal_width"
                      value={contactData.sepal_width}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="petal length"
                      value={contactData.petal_length}
                      onChange={handleChange}
                      name="petal_length"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="img-box"
                      placeholder="petal_width"
                      value={contactData.petal_width}
                      onChange={handleChange}
                      name="petal_width"
                    />
                  </div>
                  <div className="btn_box">
                    <button type="submit" onClick={submitForm}>
                      SEND
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-5">
              <div className="img-box"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;
