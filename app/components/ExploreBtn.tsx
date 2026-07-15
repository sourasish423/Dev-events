'use client';

import posthog from '@/lib/posthog-browser';

const ExploreBtn = () => {
  const handleClick = () => {
    posthog.capture('explore_events_clicked', {
      cta_location: 'home_hero',
      destination: 'featured_events',
    });
  };

  return (
    <button
      type="button"
      id="explore-btn"
      className="mt-7 mx-auto"
      onClick={handleClick}
    >
      <a href="#events">
        Explore Events
        <img src="/icons/arrow-down.svg" alt="arrow-down" width={24} height={24} />
      </a>
    </button>
  );
};

export default ExploreBtn;