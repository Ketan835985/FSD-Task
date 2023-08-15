import { toast } from 'react-toastify'
import './DeleteButton.css'

export default function DeleteButton() {

    const handelOnSubmit = async () => {
        try {
            const response = await fetch('http://localhost:3000/userDelete', {
                method: 'DELETE',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({email :localStorage.getItem("email")})
            });

            const result = await response.json(); // Add 'await' here

            if (result.status === true) {
                toast.success(result.message);
                localStorage.removeItem("email");
                setTimeout(() => {
                    window.location.href = "/";
                }, 1000);
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
            <button className="noselect" onClick={handelOnSubmit}>
                <span className="text">Delete</span>
                <span className="icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                    >
                        <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
                    </svg>
                </span>
            </button>

        </div>
    )
}
