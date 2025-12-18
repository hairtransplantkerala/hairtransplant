// components/YouTubeThumbnail.tsx
"use client";

import { useState } from 'react';

interface YouTubeThumbnailProps {
  videoId: string;
  title: string;
  customThumbnail?: string;
  className?: string;
}

export default function YouTubeThumbnail({ 
  videoId, 
  title, 
  customThumbnail,
  className = "" 
}: YouTubeThumbnailProps) {
  const [imgError, setImgError] = useState(false);
  const [customError, setCustomError] = useState(false);

  // Determine which thumbnail to show
  const getThumbnailSrc = () => {
    // If custom thumbnail exists and hasn't errored, use it
    if (customThumbnail && !customError) {
      return customThumbnail;
    }
    
    // Otherwise use YouTube thumbnail
    if (imgError) {
      return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    }
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  const handleError = () => {
    if (customThumbnail && !customError) {
      // Custom thumbnail failed, try YouTube
      setCustomError(true);
    } else if (!imgError) {
      // YouTube maxres failed, try hqdefault
      setImgError(true);
    }
  };

  return (
    <img
      src={getThumbnailSrc()}
      alt={title}
      className={className}
      onError={handleError}
      loading="lazy"
    />
  );
}
