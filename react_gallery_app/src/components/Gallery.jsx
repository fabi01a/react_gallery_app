import {useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);//(bc no error has occured yet)handles failed API

    const { category, query } = useParams();////returns an obj containing dynamic route params extracted from url
    const searchTerm = category || query; //one variable to hold whichever value available
    
    const apiKey = import.meta.env.VITE_PIXABAY_API_KEY;
    
    //the code that communicates with API and runs again when dependencies change
    useEffect(() => { //runs after react renders the component
        if (searchTerm){ //protects code against unexpected (cannot be undefined)
            //added encodeURIComponent() to include component without breaking code
            const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(searchTerm)}&image_type=photo&per_page=24`;

            fetch(url) //sends HTTP request to Pixabay and returns a promise
                .then(response => { //registers a callback that runs when HTTP resp becomes avail
                    if (!response.ok) { //if the response wasnt successful, throw an error
                        //without this data.hits could be undefined and app could store instead of an array in images
                        throw new Error('Failed to fetch images');
                    }
                    return response.json();//attempts to parse the response body as json
                })
                //returns a promise that resolves to the parsed JS data
                //once resolved, .then() receives that data
                .then(data => { //data contains the parsed response
                    setLoading(false);
                    setImages(data.hits); //updates React state with the images; storing the array that .map() expects
                })
                //error handling code
                .catch(error => { //handles the error if the Promise chain fails
                    console.log('Error fetching images:', error);
                    setError('Unable to load images. Please try again.');//stored in react state
                    setLoading(false); //tells react the request has finished even though it failed
                    //
                });
        }
    }, [searchTerm, apiKey]);
    
    const title = searchTerm === "dogs" ? "Dog"
                : searchTerm === "cats" ? "Cat"
                : searchTerm === "birds" ? "Bird" 
                : searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1);

    return (
        <div>   
            <h2>{title} Gifs</h2>
        
            {loading //are we loading?
                ? "Loading images..." //<- show
                : error //did something go wrong?
                    ? error// display eokrror message
                    :images.length === 0 //did the search return 0 images
                        ? (
                            <div className="no-results">
                                <h3>No results found</h3>
                                <p>That search did not return any results, please try again.</p>
                            </div>
                        )
                        :(
                            <div className='gallery'>
                                {images.map(image => ( //otherwise display images
                                    <img key={image.id} src={image.webformatURL} alt={image.tags} 
                                    />
                                ))}
                            </div> 
                        )
        }
    </div>
    );
};

export default Gallery;