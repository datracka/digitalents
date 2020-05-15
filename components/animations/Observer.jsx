import React, { useEffect, useState } from 'react';

export default ({ children }) => {
  const [reference, setReference] = useState(null);

  const [isInView, setIsInView] = useState(false);

  const handleRef = ref => {
    setReference(ref);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(entry => {
      if (entry[0].intersectionRatio > 0) {
        setIsInView(true);
      } else {
        // console.log('out of view');
        setIsInView(false);
      }
    });

    if (reference) observer.observe(reference);
    return () => {
      if (reference) observer.unobserve(reference);
    };
  });
  return <React.Fragment>{children(handleRef, isInView)}</React.Fragment>;
};
