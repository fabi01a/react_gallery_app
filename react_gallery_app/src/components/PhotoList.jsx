const PhotoList = ({ images }) => {
    return (
        <div className="gallery">
            {images.map(image => (
                <img
                    key={image.id}
                    src={image.webformatURL}
                    alt={image.tags}
                />
            ))}
        </div>
    );
};

export default PhotoList;