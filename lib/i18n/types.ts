import en from './messages/en.json';

export type Messages = typeof en;

export type RichListItem = {
  title: string;
  paragraphs?: string[];
  bullets?: Array<{
    label?: string;
    text: string;
  }>;
};
