
import { useState, useEffect } from 'react';
import HistorialReview from '../components/HistorialReview';

const useReviews = (libroId) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {

        const filteredReviews = HistorialReview.filter(review => review.libroId === libroId);
        setReviews(filteredReviews);
    }, [libroId]);

    return reviews;
};

export default useReviews;
