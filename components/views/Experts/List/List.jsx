/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import NoData from 'ui/NoData';
import getConfig from 'next/config';
import { useTranslations } from 'ui/Translations';

import Box from './Box';

const List = ({ items }) => {
  if (items.length === 0) return <NoData />;
  const { publicRuntimeConfig } = getConfig();
  const { moreInfo } = useTranslations();

  return items.map(({ id, genericTitle, genericAboutMe, aboutMe, prettyFreelancerTypes }, key) => (
    <Box key={id} even={key % 2 === 0}>
      <h2>{genericTitle}</h2>
      <div className="tags">
        {prettyFreelancerTypes.map(tag => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      <div className="content">
        <div>
          <p>{genericAboutMe}</p>
          {aboutMe && <p>{aboutMe}</p>}
        </div>
        <a
          className="more"
          href={publicRuntimeConfig.typeformExpertsForm}
          target="_blank"
          rel="noopener noreferrer"
        >
          {moreInfo}
        </a>
      </div>
    </Box>
  ));
};

export default List;
