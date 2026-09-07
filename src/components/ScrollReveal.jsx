import { useEffect } from "react";

const ScrollReveal = () => {
  useEffect(() => {
    const selectores = ".reveal-up";

    let observer;

    const observar = () => {
      const elementos = document.querySelectorAll(selectores);

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("reveal-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );

      elementos.forEach((elemento) => {
        observer.observe(elemento);
      });
    };

    observar();

    const mutationObserver = new MutationObserver(() => {
      observer.disconnect();
      observar();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
};

export default ScrollReveal;