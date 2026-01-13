import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image?: string;
  stats: {
    commits: number;
    stars: number;
    status: 'LIVE' | 'ARCHIVED' | 'DEV';
  };
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  details: string[];
}

export interface NavItem {
  id: string;
  label: string;
  path: string;
  icon?: React.ReactNode;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
  isError?: boolean;
}