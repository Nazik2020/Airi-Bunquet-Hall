import React from 'react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import LocationDetailsCard from './LocationDetailsCard';
import MapEmbed from './MapEmbed';

export default function LocationSection() {
  return (
    <section id="location" className="py-20 lg:py-24 bg-surface">
      <Container>
        <SectionHeading
          eyebrow="LOCATION & ACCESS"
          title="Visit Airi Banquet"
          subtitle="Centrally situated near all major transit links in Galle, offering easy guest arrivals, dedicated parking, and premier coastal accessibility."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <LocationDetailsCard />
          <MapEmbed />
        </div>
      </Container>
    </section>
  );
}
