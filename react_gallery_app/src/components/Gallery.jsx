import {useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';

const Gallery = () => {
    //returns an obj containing dynamic route params extracted from url
    //when user clicks dogs, useParams gives us dogs
    const { category, query } = useParams();
    const searchTerm = category || query; //one variable to hold whichever value available
    
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    
    console.log('Loading state',loading);
    const apiKey = import.meta.env.VITE_PIXABAY_API_KEY;
    
    useEffect(() => {
        if (searchTerm){
            setLoading(true);
            const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(searchTerm)}&image_type=photo`;

            fetch(url) //sends request to Pixabay
                .then(response => response.json()) //parses JSON response
                .then(data => { //data contains the parsed response
                    setLoading(false);
                    setImages(data.hits); //updates React state with the images
                });
                // .then(setImages() => {hits})
        }
    }, [searchTerm, apiKey])
    
    return (
        <div>   
            <h2>{searchTerm} Images</h2>
            {loading ? "Loading images..." :images.map(image => (
                <img key={image.id} src={image.webformatURL} alt={image.tags} />
            ))}
        </div> 
    );
}

export default Gallery;