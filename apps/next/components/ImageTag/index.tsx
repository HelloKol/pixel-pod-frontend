import React from 'react';
import Image from 'next/image';

interface Props {
  src: string;
  alt?: string;
  height?: number;
  width?: number;
  layout: 'responsive' | 'fill' | 'intrinsic' | 'fixed';
  priority?: boolean;
  imgClassName?: string;
  fadeUp?: boolean;
  quality?: number;
  blurDataURL?: string;
  objectFit?:
    | 'contain'
    | 'cover'
    | 'fill'
    | 'none'
    | 'scale-down'
    | 'inherit'
    | 'initial'
    | 'unset'
    | 'revert';
}

export default function ImageTag({
  src,
  alt = '',
  height,
  width,
  layout,
  priority = false,
  imgClassName = '',
  quality,
  objectFit,
  blurDataURL
}: Props) {
  return (
    <div className="relative h-full w-full">
      <Image
        src={src}
        alt={alt || ''}
        layout={layout}
        width={width || undefined}
        height={height || undefined}
        quality={quality || 100}
        priority={priority}
        objectFit={objectFit || undefined}
        placeholder={blurDataURL ? 'blur' : 'empty'}
        blurDataURL={blurDataURL}
      />
    </div>
  );
}
