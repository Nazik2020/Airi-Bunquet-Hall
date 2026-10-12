import React from 'react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import FeatureCard from './FeatureCard';
import { WHY_CHOOSE_DATA } from '../../data/features';

export default function WhyUsSection() {
  return (
    <section id="why-us" className="py-20 lg:py-24 bg-surface">
      <Container>
        <SectionHeading
          eyebrow="THE AIRI ADVANTAGE"
          title="Why Choose Airi Banquet?"
          subtitle="We bring ease, flexibility, and attentive hospitality so you can focus on what matters most—celebrating with family and friends."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_DATA.map((item) => (
            <FeatureCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
