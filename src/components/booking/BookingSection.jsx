import React from 'react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import BookingForm from './BookingForm';
import DirectContactCard from './DirectContactCard';

export default function BookingSection() {
  return (
    <section id="booking" className="py-20 lg:py-24 bg-white border-t border-champagne-500/15">
      <Container>
        <SectionHeading
          eyebrow="RESERVATIONS & INQUIRIES"
          title="Plan Your Perfect Event"
          subtitle="Tell us about your upcoming occasion, and our team will help you explore the available arrangements and package options."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <BookingForm />
          <DirectContactCard />
        </div>
      </Container>
    </section>
  );
}
