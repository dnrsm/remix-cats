import { CSSProperties } from 'react';

const styles: Record<string, CSSProperties> = {
  footer: {
    textAlign: 'center',
    fontSize: '12px',
    marginBottom: '12px',
  },
};

export const Footer = () => {
  return <footer style={styles.footer}>© 2022 LGTM Cat</footer>;
};
