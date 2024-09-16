import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <div className="not-found-container text-center pt-5">
            <h2 className="section-heading"  >Sorry, the page you were looking for was not found.</h2>
            <Link to="/" className="theme-btn">Return to Home</Link>
        </div>
    )
}
