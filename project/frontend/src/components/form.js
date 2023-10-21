import React, { useState, useEffect } from "react";
import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/api/iris/";

const IrisFlower = () => {
  const [formData, setFormData] = useState({
    sepal_length: "",
    sepal_width: "",
    petal_length: "",
    petal_width: "",
    // species: "",
  });

  // handling the name change
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const submitForm = () => {
    const formData = new FormData();
    formData.append("sepal_length", formData.sepal_length);
    formData.append("sepal_width", formData.sepal_width);
    formData.append("petal_length", formData.petal_length);
    formData.append("petal_width", formData.petal_width);

    try {
      axios.post(baseUrl, formData).then((response) => {
        setFormData({
          sepal_length: "",
          sepal_width: "",
          petal_length: "",
          petal_width: "",
        });
      });
    } catch (error) {
      console.log(error);
      setFormData({ status: "error" });
    }
  };

  useEffect(() => {
    document.title = "Form";
  }, []);

  return (
    <div>
      <section className="form_section layout_padding-bottom">
        <div className="container">
          <div className="heading_container">
            <h2>Enter Detail of Flower</h2>
          </div>
          <div className="row">
            <div className="col-md-7">
              <div className="form_container">
                <form onSubmit={handleSubmit}>
                  <div>
                    <input
                      type="text"
                      placeholder="sepal length"
                      value={formData.sepal_length}
                      onChange={handleChange}
                      name="sepal_length"
                    />
                  </div>
                  {/* <div>
                    <input
                      type="text"
                      placeholder="sepal width"
                      name="sepal_width"
                      value={formData.sepal_width}
                      onChange={handleChange}
                    />
                  </div> */}
                  {/* <div>
                    <input
                      type="text"
                      placeholder="petal_length"
                      value={formData.petal_length}
                      onChange={handleChange}
                      name="petal_length"
                    />
                  </div> */}
                  <div>
                    {/* <input
                      type="text"
                      // className="petal_width-box"
                      placeholder="petal_width"
                      value={formData.petal_width}
                      onChange={handleChange}
                      name="petal_width"
                    /> */}
                  </div>
                  <div className="btn_box">
                    <button type="submit" onClick={submitForm}>
                      SEND
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* <div className="col-md-5">
              <div className="img-box"></div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};
export default IrisFlower;
