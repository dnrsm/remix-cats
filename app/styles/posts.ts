import { CSSProperties } from 'react';

export const styles: Record<string, CSSProperties> = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  list: {
    columnCount: '3',
    columnGap: '1.25rem',
    padding: '0',
  },
  card: {
    marginBottom: '1.5rem',
    listStyleType: 'none',
  },
  img: {
    width: '100%',
    verticalAlign: 'bottom',
  },
};
