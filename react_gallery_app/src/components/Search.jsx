import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    //managing the input state
    const [input,setInput] = useState("");

    const navigate = useNavigate(); //allows us to change the url thru JS

    const handleSubmit = (e) => {
        e.preventDefault(); //prevents full page reloads between pages

        if (!input.trim()) { //stop early if invalid input: if true return immediately exits handleSubmit
            return; // (prevents nav code from running)
        }

        navigate(`/search/${input}`);//change the url
    };
    
    return (
        
        <form onSubmit={handleSubmit} > {/*where the user submits the form */}
            <input 
                type='text' 
                placeholder="Search"
                value={input}
                //where the user types 
                onChange={(e) => setInput(e.target.value)}  //reads the current text from input element
            />
            <button type='submit'> 🔍</button>
        </form>
        
    );
}

export default Search;