import { useState } from 'react';
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handelOnChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handelSubmit = async (e) => {
        try {
            e.preventDefault();
            const response = await fetch('http://localhost:3000/userLogin', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData)
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

        setFormData({ email: "", password: "" })
    }

    return (
        <div>
            <form className="form" onSubmit={handelSubmit}>
                <p className="form-title">Sign in to your account</p>
                <div className="input-container">
                    <input type="email" name="email" placeholder="Enter email" onChange={handelOnChange} />
                    <span></span>
                </div>
                <div className="input-container">
                    <input type="password" name="password" placeholder="Enter password" onChange={handelOnChange} />
                </div>
                <button type="submit" className="submit">
                    Sign in
                </button>
                <p className="signup-link">
                    No account?
                    <a href="/">Sign up</a>
                </p>
            </form>
            <ToastContainer />
        </div>
    );
}
