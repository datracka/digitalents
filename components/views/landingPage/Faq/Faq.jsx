import React from 'react';
import { useTranslations } from 'ui/Translations';

import Section from 'ui/Section';
import { Flex } from 'ui/Grid';
import { Title } from 'ui/variants';
import Accordion from './Accordion';

export default () => {
  const faq = useTranslations();
  const { subtitle1, subtitle2 } = faq;
  const questionsFreelances = [
    { question: faq.question1, answer: faq.answer1 },
    { question: faq.question2, answer: faq.answer2 },
    { question: faq.question3, answer: faq.answer3 },
    { question: faq.question4, answer: faq.answer4 },
    { question: faq.question5, answer: faq.answer5 },
    { question: faq.question6, answer: faq.answer6 },
    { question: faq.question7, answer: faq.answer7 },
    { question: faq.question8, answer: faq.answer8 },
    { question: faq.question9, answer: faq.answer9 },
  ];

  const questionsClients = [
    { question: faq.question10, answer: faq.answer10 },
    { question: faq.question11, answer: faq.answer11 },
    { question: faq.question12, answer: faq.answer12 },
    { question: faq.question13, answer: faq.answer13 },
  ];
  return (
    <Section bg="white" py={4}>
      <Flex width={{ xs: '100%' }} flexDirection="column">
        <Title variant="headlineSecondary" fontSize={{ xs: 6 }}>
          FAQ
        </Title>
        <Title variant="headlinePrimaryDarker" fontSize={{ xs: 2, md: 3 }} mt={4}>
          {subtitle1}
        </Title>
        <Accordion data={questionsFreelances} />
        <Title variant="headlinePrimaryDarker" fontSize={{ xs: 2, md: 3 }} mt={4}>
          {subtitle2}
        </Title>
        <Accordion data={questionsClients} />
      </Flex>
    </Section>
  );
};
