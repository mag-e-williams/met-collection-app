import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { fetchMetObjects } from '@/api/fetchMetObjects';
import { fetchMetObjectsData } from '@/api/fetchMetObjectsData';

import type { MetObjectsData } from '@/types/MetObjectsData';
import type { MetObjects } from '@/types/MetObjects';

import MetCollection from './MetCollection';

export function Homepage() {
  
  return (
    <MetCollection />
  );
}

