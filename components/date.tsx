import React from 'react';
import { asDate, DateField } from '@prismicio/client';

const formatter = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
});

type DateProps = {
  dateField: DateField;
};

export default function Date({ dateField }: DateProps) {
  const date = asDate(dateField);

  return <time dateTime={dateField}>{formatter.format(date)}</time>;
}
