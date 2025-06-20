import { useState } from "react";
import axios from "axios";

const AddItem = () => {
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/items/add`, formData);
      if (res.status === 201) {
        setSuccess("Item successfully added!");
        form.reset();
      }
    } catch (err) {
      console.error("Upload failed:", err);
    }
  };
  const inputStyle = {
    width: "100%",
    padding: "0.6rem",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "1rem",
  };
  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: "600px",
        margin: "auto",
        fontFamily: "sans-serif",
        backgroundColor: "#f9f9f9",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2
        style={{ textAlign: "center", marginBottom: "1.5rem", color: "#333" }}
      >
        Add Item
      </h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label style={{ display: "block", marginBottom: 5 }}>Item Name</label>
        <input
          name="name"
          placeholder="Item Name"
          required
          style={inputStyle}
        />
        <br />

        <label style={{ display: "block", margin: "1rem 0 5px" }}>
          Item Type
        </label>
        <input
          name="type"
          placeholder="Item Type"
          required
          style={inputStyle}
        />
        <br />

        <label style={{ display: "block", margin: "1rem 0 5px" }}>
          Description
        </label>
        <textarea
          name="description"
          placeholder="Description"
          rows="4"
          style={{ ...inputStyle, resize: "vertical" }}
        />
        <br />

        <label style={{ display: "block", margin: "1rem 0 5px" }}>
          Cover Image
        </label>
        <input
          type="file"
          name="coverImage"
          accept="image/*"
          required
          style={inputStyle}
        />
        <br />

        <label style={{ display: "block", margin: "1rem 0 5px" }}>
          Additional Images
        </label>
        <input
          type="file"
          name="additionalImages"
          accept="image/*"
          multiple
          style={inputStyle}
        />
        <br />

        <button
          type="submit"
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
            padding: "0.75rem 1.5rem",
            border: "none",
            borderRadius: "6px",
            fontSize: "1rem",
            cursor: "pointer",
            marginTop: "1rem",
            width: "100%",
          }}
        >
          Submit
        </button>
      </form>

      {success && (
        <p style={{ color: "green", marginTop: "1rem", textAlign: "center" }}>
          {success}
        </p>
      )}
    </div>
  );
};

export default AddItem;
