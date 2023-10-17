import React from 'react';
import { SliceZone } from '@prismicio/react';

import type { Content } from '@prismicio/client';
import { components } from '../../../slices';

type PostBodyProps = {
  slices: Content.PostDocument['data']['slices'];
};

export default function PostBody({ slices }: PostBodyProps) {
  return (
    <div className="w-full max-w-2xl mx-auto text-left">
      <SliceZone slices={slices} components={components} />
    </div>
  );
}
