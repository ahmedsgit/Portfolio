import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = props => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        The World of Ahmed Sazzad
      </SectionTitle>
      <SectionText>
        Since beginning my journey as a freelance designer nearly 10 years ago,
        I've done remote work for agencies, consulted for startups, and
        collaborated with talented people to create digital products for both
        business and consumer use. I'm quietly confident, naturally curious, and
        perpetually working on improving my chops one design problem at a time.
      </SectionText>
      <Button
        onClick={() => (window.location = document.getElementById('contact'))}
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
