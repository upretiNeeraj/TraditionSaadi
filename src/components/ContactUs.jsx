import React, { useState } from "react";
import "./ContactForm.css"; // Import the CSS for styling

const ContactUs = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        age: "",
        email: "",
        gender: "",
        job: ""
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        // Here you can send form data to your server or reset the form
    };

    return (
        <div className="contact-form-container">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Gender</label>
                    <div className="radio-group">
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="Male"
                                checked={formData.gender === "Male"}
                                onChange={handleChange}
                            />
                            Male
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="Female"
                                checked={formData.gender === "Female"}
                                onChange={handleChange}
                            />
                            Female
                        </label>

                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="job">Job</label>
                    <input
                        type="text"
                        id="job"
                        name="job"
                        value={formData.job}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    );
};

export default ContactUs;
