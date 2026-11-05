import {useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import PhotoList from './PhotoList';

const Gallery = ({ category }) => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { query } = useParams();
    const searchTerm = category || query;
    
    const apiKey = import.meta.env.VITE_PIXABAY_API_KEY;
    
    useEffect(() => {
        if (searchTerm){

            const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(searchTerm)}&image_type=photo&per_page=24`;

            fetch(url)
                .then(response => { 
                    if (!response.ok) {
                        throw new Error('Failed to fetch images');
                    }
                    return response.json();
                })

                .then(data => {
                    setLoading(false);
                    setImages(data.hits);
                })
                
                .catch(error => {
                    console.log('Error fetching images:', error);
                    setError('Unable to load images. Please try again.');
                    setLoading(false);
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
        
            {loading
                ? "Loading images..."
                : error
                    ? error
                    :images.length === 0
                        ? (
                            <div className="no-results">
                                <h3>No results found</h3>
                                <p>That search did not return any results, please try again.</p>
                            </div>
                        )
                        :
                        <PhotoList images={images} />
        }
    </div>
    );
};

export default Gallery;