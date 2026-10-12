import React from 'react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import OccasionCard from './OccasionCard';
import { OCCASIONS_DATA } from '../../data/occasions';

export default function OccasionsSection() {
  return (
    <section id="occasions" className="py-20 lg:py-24 bg-surface">
      <Container>
        <SectionHeading
          eyebrow="CELEBRATING WITH AIRI BANQUET"
          title="A Venue for Every Special Occasion"
          subtitle="Every milestone deserves an extraordinary setting. Discover versatile layouts and dedicated hospitality tailored to your most cherished occasions."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {OCCASIONS_DATA.map((item) => (
            <OccasionCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
