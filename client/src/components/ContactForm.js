import { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, system,link } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      system: system.value,
      link: link.value,

    };
    let response = await fetch(`${process.env.REACT_APP_PROXY}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

  return (
    <form className="create"  onSubmit={handleSubmit}>
      <h3>Add Your company</h3>

      <label>Name of company:</label>
      <input type="text" id="name" required />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" required />
      <label>System of job board:</label>
      <input type="name" id="system"  />
      <label>Link job board:</label>
      <input type="url" id="link" placeholder="https://example.com" />

      <button type="submit">{status}</button>
    </form>
  );
};

export default ContactForm;
