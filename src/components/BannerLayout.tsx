"use client";

import { ReactNode } from 'react';
import Image from 'next/image';

interface BannerLayoutProps {
  children: ReactNode;
}

export function BannerLayout({ children }: BannerLayoutProps) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="relative w-full md:w-[300px] h-[200px] md:h-screen md:fixed">
        <div className="absolute inset-0 bg-primary/10">
          <Image 
            src="/products_banner.jpg" 
            alt="Banner" 
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
      
      <div className="flex-1 md:ml-[300px]">
        {children}
      </div>
    </div>
  );
}