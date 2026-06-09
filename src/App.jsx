import { useState, useEffect, useCallback, useMemo } from 'react';
import UserCard from './components/UserCard';
import RegisterUser from './components/RegisterUser';

function App() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!response.ok) throw new Error('Failed to fetch data');gi
            const data = await response.json();

            const updatedData = data.map(user => ({
                ...user,
                rating: 5,
                verified: false
            }));

            setUsers(updatedData);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const averageRating = useMemo(() => {
        if (users.length === 0) return 0;
        const total = users.reduce((sum, user) => sum + user.rating, 0);
        return (total / users.length).toFixed(2);
    }, [users]
    const addUser = useCallback((newUser) => {
        setUsers(prevUsers => [...prevUsers, { ...newUser, id: Date.now() }]);
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return (
        <div>
            <p>Error: {error}</p>
            <button onClick={fetchData}>Retry</button>
        </div>
    );

    return (
        <div style={{ padding: '20px' }}>
            <h1>User Directory</h1>
            <h3>Average Rating: {averageRating}</h3>

            <RegisterUser addUser={addUser} />

            <div className="user-list">
                {users.map(user => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>
        </div>
    );
}

export default App;