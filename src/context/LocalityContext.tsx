import React, { createContext, useContext, useState, useEffect } from 'react';

interface LocalityContextType {
    city: string;
    isLoaded: boolean;
}

const LocalityContext = createContext<LocalityContextType>({
    city: 'Nairobi',
    isLoaded: false,
});

export const LocalityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [city, setCity] = useState('Nairobi');
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const fetchLocation = async () => {
            try {
                const response = await fetch('https://ipapi.co/json/');
                const data = await response.json();
                if (data.city) {
                    setCity(data.city);
                }
            } catch (error) {
                console.error("Locality detection failed:", error);
                // Fallback is already 'Nairobi'
            } finally {
                setIsLoaded(true);
            }
        };

        fetchLocation();
    }, []);

    return (
        <LocalityContext.Provider value={{ city, isLoaded }}>
            {children}
        </LocalityContext.Provider>
    );
};

export const useLocality = () => useContext(LocalityContext);
