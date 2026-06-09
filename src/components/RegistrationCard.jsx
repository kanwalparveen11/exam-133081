
import { useState, useRef } from 'react';

const RegisterUser = ({ addUser }) => {
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', rating: 5, verified: false
    });
    const [error, setError] = useState('');

    // useRef for focus (20 points)
    const nameInputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation
        if (!formData.name) {
            setError("Name cannot be empty");
            return;
        }
        if (formData.rating < 1 || formData.rating > 5) {
            setError("Rating must be between 1 and 5");
            return;
        }

        addUser(formData);

        // Reset form
        setFormData({ name: '', email: '', phone: '', rating: 5, verified: false });
        setError('');

        // Focus back to name (20 points)
        nameInputRef.current.focus();
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
            <input
                ref={nameInputRef}
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <input
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            <input
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
            <input
                type="number"
                placeholder="Rating"
                value={formData.rating}
                onChange={(e) => setFormData({...formData, rating: Number(e.target.value)})}
            />
            <label>
                Verified:
                <input
                    type="checkbox"
                    checked={formData.verified}
                    onChange={(e) => setFormData({...formData, verified: e.target.checked})}
                />
            </label>

            <button type="submit">Register</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    );
};

export default RegisterUser;