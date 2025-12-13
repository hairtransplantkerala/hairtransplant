"use client";

interface YouTubeThumbnailProps {
  videoId: string;
  title: string;
  className?: string;
}

export default function YouTubeThumbnail({ videoId, title, className }: YouTubeThumbnailProps) {
  return (
    <img
      src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
      alt={title}
      className={className}
      onError={(e) => {
        e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
      }}
    />
  );
}
