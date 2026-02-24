import { useState } from "react";

function GeneralInfo({ data, setData }) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleEdit = () => {
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <section className="info-section">
        <h2>General Information</h2>
        <p>
          <strong>Name:</strong> {data.name}
        </p>
        <p>
          <strong>Email:</strong> {data.email}
        </p>
        <p>
          <strong>Phone:</strong> {data.phone}
        </p>
        <button onClick={handleEdit}>Edit</button>
      </section>
    );
  }

  return (
    <section className="info-section">
      <h2>General Information</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            setData({
              ...data,
              photo: URL.createObjectURL(e.target.files[0]),
            })
          }
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={data.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={data.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={data.phone}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default GeneralInfo;
