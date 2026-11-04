import {useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';

const Gallery = () => {
    //returns an obj containing dynamic route params extracted from url
    //when user clicks dogs, useParams gives us dogs
    const { category, query } = useParams();
    const searchTerm = category || query; //one variable to hold whichever value available
    
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    
    const apiKey = import.meta.env.VITE_PIXABAY_API_KEY;
    
    useEffect(() => {
        if (searchTerm){
            setLoading(true);
            setError(null);
            setImages([]);
            
            const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(searchTerm)}&image_type=photo`;

            fetch(url) //sends request to Pixabay
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to fetch images');
                    }
                    return response.json();
                })
                
                .then(data => { //data contains the parsed response
                    setLoading(false);
                    setImages(data.hits); //updates React state with the images
                })
                .catch(error => {
                    console.log('Error fetching images:', error);
                    setError('Unable to load images. Please try again.');
                    setLoading(false);
                });
        }
    }, [searchTerm, apiKey]);
    
    return (
        <div>   
            <h2>{searchTerm} Images</h2>
            
            {loading //are we loading?
                ? "Loading images..." //<- show
                : error //did something go wrong?
                    ? error// display error message
                    :images.length === 0 //did the search return 0 images
                        ? "No results found"//<-show
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