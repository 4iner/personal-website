import { useEffect, useRef } from 'react';

const useIntersectionObserver = (options = {}) => {
    const targetRef = useRef(null);
    
    useEffect(() => {
        const target = targetRef.current;
        if (!target) return;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: options.threshold || 0.1,
            rootMargin: options.rootMargin || '50px'
        });
        
        observer.observe(target);
        
        return () => {
            if (target) {
                observer.unobserve(target);
            }
        };
    }, [options.threshold, options.rootMargin]);
    
    return targetRef;
};

export default useIntersectionObserver; 