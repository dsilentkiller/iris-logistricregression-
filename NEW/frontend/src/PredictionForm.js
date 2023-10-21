import React, { useState } from "react";
import axios from "axios";

function PredictionForm() {
  const [sepal_length, setSepalLength] = useState("");
  const [sepal_width, setSepalWidth] = useState("");
  const [petal_length, setPetalLength] = useState("");
  const [petal_width, setPetalWidth] = useState("");
  const [prediction, setPrediction] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/predict/", {
        sepal_length: sepal_length,
        sepal_width: sepal_width,
        petal_length: petal_length,
        petal_width: petal_width,
      });
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Sepal Length(cm);
        <input
          type="text"
          value={sepal_length}
          onChange={(event) => setSepalLength(event.target.value)}
        />
      </label>
      <br />
      <label>
        Sepal Width(cm):
        <input
          type="text"
          value={sepal_width}
          onChange={(event) => setSepalWidth(event.target.value)}
        />
      </label>
      <label>
        Petal length(cm):
        <input
          type="text"
          value={petal_length}
          onChange={(event) => setPetalLength(event.target.value)}
        />
      </label>
      <label>
        Petal Width(cm):
        <input
          type="text"
          value={petal_width}
          onChange={(event) => setPetalWidth(event.target.value)}
        />
      </label>
      <button type="submit">Predict</button>
      {prediction && <p> Prediction:{prediction}</p>}
    </form>
  );
}

export default PredictionForm;
