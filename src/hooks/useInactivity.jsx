import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';



const useInactivityRedirect = (path, delay = 5000) => {
    const navigate = useNavigate();
    const timeoutRef = useRef(null);

    const resetTimer = () => {
        // Limpia el temporizador anterior
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        // Establece un nuevo temporizador de inactividad
        timeoutRef.current = setTimeout(() => {

            navigate(path); // Redirige al usuario a la página principal
        }, delay);
    };

    useEffect(() => {
        // Agregar event listeners para detectar actividad
        const events = ['mousemove', 'keydown', 'click', 'scroll'];
        events.forEach(event =>
            window.addEventListener(event, resetTimer)
        );

        // Iniciar el temporizador de inactividad cuando el componente se monta
        resetTimer();

        // Limpiar los event listeners al desmontar el componente
        return () => {
            events.forEach(event =>
                window.removeEventListener(event, resetTimer)
            );
            clearTimeout(timeoutRef.current); // Limpiar el temporizador cuando se desmonte
        };
    }, [navigate, delay]);
};

export default useInactivityRedirect;
