import React from 'react';

export interface ComponentExample {
  id: string;
  name: string;
  description: string;
  category: 'ui' | 'layout' | 'feedback';
  code: string;
  component: React.FC<any>;
}

export interface GeneratedComponent {
  code: string;
  description: string;
}

export enum TabState {
  PREVIEW = 'preview',
  CODE = 'code'
}

export type GenerationStatus = 'idle' | 'loading' | 'success' | 'error';