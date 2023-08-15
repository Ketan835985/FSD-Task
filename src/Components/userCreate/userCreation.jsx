import { useState } from 'react';
import './userCreate.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function UserCreation() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handelOnChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handelSubmit = async (e) => {
        try{
        e.preventDefault();
        const response = await fetch('http://localhost:3000/userCreate', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData) // Convert formData to JSON
        });

        const result = await response.json();
        if (result.status === true) {
            toast.success(result.message);
        } else {
            toast.error(result.message);
        }
        } catch (error) {
            console.error("Fetch error:", error);
            toast.error("An error occurred while processing your request.");
        }
    }

    return (
        <div>
            <div className="form-box">
                <form onSubmit={handelSubmit}>
                    <span className="title">Sign up</span>
                    <span className="subtitle">Create a free account with your email.</span>
                    <div className="form-container">
                        <input type="text" className="input" placeholder="Full Name" required name="name" onChange={handelOnChange} />
                        <input type="email" className="input" placeholder="Email" required name="email" onChange={handelOnChange} />
                        <input type="password" className="input" placeholder="Password" required name='password' onChange={handelOnChange} />
                    </div>
                    <button type="submit" className="submit">
                        Sign up
                    </button>
                </form>
                <div className="form-section">
                    <p>
                        Have an account? <a href="/Login">Log in</a>
                    </p>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}
