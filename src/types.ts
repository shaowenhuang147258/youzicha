/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface CreditorItem {
  label: string;
  labelEn: string;
  value: string;
}

export interface Project {
  id: string;
  code: string; // e.g., ABCD-001
  title: string;
  titleEn: string;
  category: string;
  categoryEn: string;
  year: string;
  client: string;
  clientEn: string;
  brief: string;
  briefEn: string;
  details: string;
  detailsEn: string;
  tags: string[];
  credits: CreditorItem[];
  colorTheme: {
    bg: string;
    fg: string;
    accent: string;
  };
  // Dynamic visual layout structure using beautiful SVG designs or direct raw code
  svgId: string;
}

export interface MessageSubmission {
  id: string;
  name: string;
  email: string;
  company: string;
  content: string;
  timestamp: string;
}
