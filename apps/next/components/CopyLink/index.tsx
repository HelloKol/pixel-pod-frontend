'use client';
import React, { useState } from 'react';
import { Toast } from '@/components';

// Props
interface Props {
  slug: string;
  className?: string;
}

export default function CopyLink({ slug, className }: Props) {
  const [toasts, setToasts] = useState<string[]>([]);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_BASE_URL}/article/${slug}`);
    const newToast = `Link is copied`;
    setToasts((prevToasts) => [...prevToasts, newToast]);
  };

  const removeToast = (indexToRemove: number) => {
    const updatedToasts = toasts.filter((_, index) => index !== indexToRemove);
    setToasts(updatedToasts);
  };

  return (
    <div className={className || ''}>
      <button
        className="flex items-center gap-2 border-black border-[1px] rounded-full px-4 py-2"
        onClick={handleCopyClick}
      >
        <svg
          className="w-6 h-6 text-gray-800"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 8v3c0 .6-.4 1-1 1H5m11 4h2c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1h-7a1 1 0 0 0-1 1v1m4 3v10c0 .6-.4 1-1 1H6a1 1 0 0 1-1-1v-7.1c0-.3 0-.5.2-.7l2.5-2.9c.2-.2.5-.3.8-.3H13c.6 0 1 .4 1 1Z"
          />
        </svg>
        Copy link
      </button>

      <Toast toasts={toasts} removeToast={removeToast} />
    </div>
  );
}
