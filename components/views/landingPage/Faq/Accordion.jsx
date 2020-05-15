import React, { useState } from 'react';
import AccordionSection from './AccordionSection';

export default ({ data }) => {
  const [openSections, setOpenSections] = useState({});

  const onClick = label => {
    const isOpen = !!openSections[label];
    setOpenSections({ ...openSections, [label]: !isOpen });
  };
  return (
    <React.Fragment>
      {data.map(({ question, answer }, index) => (
        <AccordionSection
          key={index} // eslint-disable-line react/no-array-index-key
          label={index}
          isOpen={openSections[index]}
          question={question}
          answer={answer}
          onClick={onClick}
        />
      ))}
    </React.Fragment>
  );
};
