import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix';
import type { MetaFunction } from 'remix';
import { Header } from '~/components/header';
import { Footer } from '~/components/footer';
import { CSSProperties } from 'react';

const styles: Record<string, CSSProperties> = {
  html: {
    height: '100%',
  },
  body: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    margin: '0',
    padding: '8px',
    boxSizing: 'border-box',
  },
};

export const meta: MetaFunction = () => {
  return { title: 'LGTM Cat' };
};

export default function App() {
  return (
    <html lang="ja" style={styles.html}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body style={styles.body}>
        <Header />
        <Outlet />
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
