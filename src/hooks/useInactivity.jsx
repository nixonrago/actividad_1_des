import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';



const useInactivityRedirect = (path, delay = 5000) => {
    const navigate = useNavigate();
    const timeoutRef = useRef(null);

    const resetTimer = () => {

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {

            navigate(path);
        }, delay);
    };

    useEffect(() => {

        const events = ['mousemove', 'keydown', 'click', 'scroll'];
        events.forEach(event =>
            window.addEventListener(event, resetTimer)
        );

        resetTimer();


        return () => {
            events.forEach(event =>
                window.removeEventListener(event, resetTimer)
            );
            clearTimeout(timeoutRef.current); // Limpiar el temporizador cuando se desmonte
        };
    }, [navigate, delay]);
};

export default useInactivityRedirect;
