import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const NewQuestion = () => {
  const history = useHistory();
  const [values, setValues] = useState({
    title: "",
    category: "",
    content: "",
  });
  const errors = {};
  const validate = () => {
    if (!values.title) {
      return (errors.title = "Fill the Title!");
    }
    if (!values.category) {
      return (errors.category = "Choice Category");
    }
    if (!values.content) {
      return (errors.content = "Fill the content!");
    }
    if (!(values.content.length > 10)) {
      return (errors.content = "The length of content must be min 10 chars!");
    }
    return;
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(validate());
    validate();
    if (!validate()) {
      console.log("Submitted", values);
      history.push("/");
      return;
    } else {
      alert(JSON.stringify(validate()));
    }
  };
  return (
    <div>
      <h1>New Question</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          id="title"
          onChange={handleChange}
          placeholder="Title"
        />
        <br />
        <div onChange={handleChange}>
          <input
            type="radio"
            name="category"
            id="category-aws-devops"
            value="aws-devops"
          />
          AWS & Devops
          <br />
          <input
            type="radio"
            name="category"
            id="category-data-science"
            value="data-science"
          />
          Data Science
          <br />
          <input
            type="radio"
            name="category"
            id="category-full-stack"
            value="full-stack"
          />
          Full-Stack
        </div>
        <textarea
          style={{ width: "300px", height: "100px" }}
          type="textarea"
          name="content"
          id="content"
          placeholder="Content of question!"
          onChange={handleChange}
        />
        <br />

        <button type="submit" value="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewQuestion;
