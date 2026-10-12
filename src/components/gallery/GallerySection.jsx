import React, { useState } from 'react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import GalleryCard from './GalleryCard';
import GalleryModal from './GalleryModal';
import { GALLERY_ITEMS } from '../../data/gallery';

export default function GallerySection() {
  const [selectedItem, setSelectedItem] = useState(null);

  const topItems = GALLERY_ITEMS.slice(0, 3);
  const bottomItem1 = GALLERY_ITEMS[3];
  const bottomItem2 = GALLERY_ITEMS[4];

  return (
    <section id="gallery" className="py-20 lg:py-24 bg-white border-y border-champagne-500/15">
      <Container>
        <SectionHeading
          eyebrow="SPACES & ATMOSPHERE"
          title="Discover Airi Banquet"
          subtitle="Immerse yourself in spaces crafted for grandeur—framed by soaring ceilings, ambient chandeliers, and refined coastal charm."
        />

        {/* Row 1: 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {topItems.map((item) => (
            <GalleryCard
              key={item.id}
              item={item}
              onSelect={setSelectedItem}
            />
          ))}
        </div>

        {/* Row 2: Asymmetric Layout (1 Col + 2 Cols Wide) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {bottomItem1 && (
            <GalleryCard
              item={bottomItem1}
              onSelect={setSelectedItem}
              className="lg:col-span-1"
            />
          )}
          {bottomItem2 && (
            <GalleryCard
              item={bottomItem2}
              onSelect={setSelectedItem}
              className="lg:col-span-2"
              isWide={true}
            />
          )}
        </div>
      </Container>

      {/* Modal Dialog */}
      <GalleryModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </section>
  );
}
