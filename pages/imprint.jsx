import React from 'react';
import Font from 'ui/Font';
import Section from 'ui/common/Section';
import DefaultLayout from 'layouts/DefaultLayout';
import styled from '@emotion/styled';

const SpacerSection = styled(Section)`
  margin-top: 12rem;
  margin-bottom: 1rem;
  flex-direction: column;
  align-items: flex-start;
`;

const Paragraph = styled('p')`
  margin: 10px 0px;
`;

const Spacer = styled('div')`
  margin-bottom: 2rem;
`;

export default () => {
  return (
    <DefaultLayout>
      <SpacerSection>
        <Font variant="bigPrimaryDarker" gutterBottom>
          <h2>Imprint</h2>
        </Font>
        <Font variant="textPrimary" gutterBottom>
          <Spacer>
            <Paragraph>Angaben gem. § 5 TMG</Paragraph>
            <Paragraph>Gerlent UG (haftungsbeschränkt)</Paragraph>
            <Paragraph>Am Kielortplatz 2 22850 Norderstedt</Paragraph>
            <Paragraph>E-Mail: info@gerlent.com Web: www.gerlent.com</Paragraph>
          </Spacer>
          <Spacer>
            <Paragraph>Geschäftsführer: Behsaad Ramez </Paragraph>
            <Paragraph>Registergericht: Kiel (Schleswig-Holstein), HRB 18652 KI</Paragraph>
          </Spacer>
          <Spacer>
            <Paragraph>
              Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:
            </Paragraph>
          </Spacer>
          <Spacer>
            <Paragraph>USt-ID Nr. DE312754216 </Paragraph>
          </Spacer>
          <Spacer>
            <Paragraph>Verantwortlich für den Inhalt nach § 5 TMG: </Paragraph>
            <Paragraph>Geschäftsführer Behsaad Ramez, Mitgründer Christian Heusinger</Paragraph>
          </Spacer>
          <Spacer>
            <Paragraph>
              <Font variant="textPrimaryDarker">Informationen zur Online-Streitbeilegung: </Font>
              <Paragraph>
                Die EU-Kommission hat im ersten Quartal 2016 eine Internetplattform zur
                Online-Beilegung von Streitigkeiten (sog. „OS-Plattform“) bereitgestellt. Die
                OS-Plattform soll als Anlaufstelle zur außergerichtlichen Beilegung von
                Streitigkeiten betreffend vertragliche Verpflichtungen, die aus Online-Kaufverträgen
                erwachsen, dienen.
              </Paragraph>
              <Paragraph>Die OS-Plattform ist unter folgendem Link erreichbar:</Paragraph>
              <Paragraph>
                <a href=">http://ec.europa.eu/consumers/odr">http://ec.europa.eu/consumers/odr</a>
              </Paragraph>
            </Paragraph>
          </Spacer>
        </Font>
      </SpacerSection>
    </DefaultLayout>
  );
};
