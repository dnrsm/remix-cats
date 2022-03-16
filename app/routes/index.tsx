import { Link, useLoaderData } from 'remix';
import type { Cats } from '~/types';
import { API_BASE } from '~/constants';
import Pagenation from '~/components/pagenation';
import { styles } from '~/styles/posts';

export const loader = async () => {
  const res = await fetch(`${API_BASE}/cats?skip=0&limit=10`);
  return await res.json();
};

export default function Index() {
  const cats = useLoaderData<Cats[]>();

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <main style={styles.container}>
        <h1>Cats</h1>
        <ul style={styles.list}>
          {cats.map((cat) => (
            <li key={cat.id} style={styles.card}>
              <Link to={`/cat/${cat.id}`}>
                <img
                  style={styles.img}
                  src={`https://cataas.com/cat/${cat.id}`}
                  alt={cat.tags.join('')}
                />
              </Link>
            </li>
          ))}
        </ul>
        <Pagenation />
      </main>
    </div>
  );
}
