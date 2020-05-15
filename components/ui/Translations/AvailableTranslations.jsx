/** @jsx jsx */
import { jsx } from '@emotion/core';
import Font from 'ui/Font';

import useTranslations from './useTranslations';

const AvailableTranslations = () => {
  const translations = useTranslations();
  const entries = Object.entries(translations);
  return entries.length > 0 ? (
    <Font element="table" css={{ borderCollapse: 'collapse', 'tr>*': { border: '1px solid' } }}>
      <thead>
        <tr>
          <th>Key</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {entries.map(([key, value]) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{value}</td>
          </tr>
        ))}
      </tbody>
    </Font>
  ) : (
    <Font>No translations available</Font>
  );
};

export default AvailableTranslations;
