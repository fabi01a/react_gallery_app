import { useParams } from 'react-router-dom';

const Gallery = () => {
    //returns an obj containing dynamic route params extracted from url
    //when user clicks dogs, useParams gives us dogs
    const { category } = useParams();
    return (
        <h2>{category} Images</h2>
    );
}

export default Gallery;