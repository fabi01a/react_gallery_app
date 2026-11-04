import { useState , useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Search = () => {
    const [input,setInput] = useState("");

    const location = useLocation();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!input.trim()) {
            return;
        }

        navigate(`/search/${input}`);
    };
    
    useEffect(() => {
        setInput("");
    }, [location.pathname]);

    return (
        
        <form onSubmit={handleSubmit} > {/*where the user submits the form */}
            <input 
                type='text' 
                placeholder="Search"
                value={input}
                //where the user types 
                onChange={(e) => setInput(e.target.value)} 
                
            />
            <button type='submit'> 🔍</button>
        </form>
        
    );
}

export default Search;