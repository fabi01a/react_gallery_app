import { useState } from 'react';

const Search = () => {
    const [input,setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input);
    }
    return (
        
        <form onSubmit={handleSubmit} > {/*where the user submits the form */}
            <input 
                type='text' 
                placeholder="Search images..."
                value={input}
                //where the user types 
                onChange={(e) => setInput(e.target.value)} 
            />
            <button type='submit'>Search</button>
        </form>
        
    );
}

export default Search;