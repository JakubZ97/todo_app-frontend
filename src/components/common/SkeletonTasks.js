import React, { useRef } from 'react';

export default function SkeletonTasks() {
  const timesRender = useRef(4);

  return (
    <>
      {Array.from({ length: timesRender.current }, (_, index) => (
        <div className="skeleton-container" key={index}>
          <span className="skeleton-container__header" />
          <span className="skeleton-container__description" />
          <span className="skeleton-container__time" />
        </div>
      ))}
    </>
  );
}
