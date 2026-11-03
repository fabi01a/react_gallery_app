import { useParams } from 'react-router-dom';

const Gallery = () => {
    //returns an obj containing dynamic route params extracted from url
    //when user clicks dogs, useParams gives us dogs
    const { category, query } = useParams();
    const searchTerm = category || query; //one variable to hold whichever value available
    return (
        <h2>{searchTerm} Images</h2>
    );
}

export default Gallery;