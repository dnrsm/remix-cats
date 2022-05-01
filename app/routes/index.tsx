import { useLoaderData } from 'remix';
import type { Cat } from '~/types';
import { API_BASE } from '~/constants';
import { Pagenation } from '~/components/pagenation';
import { List } from '~/components/list';
import { styles } from '~/styles/posts';

export const loader = async () => {
  const res = await fetch(`${API_BASE}/cats?skip=0&limit=10`);
  return await res.json();
};

export default function Index() {
  const cats = useLoaderData<Cat[]>();

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <main style={styles.container}>
        <List cats={cats} />
        <Pagenation />
      </main>
    </div>
  );
}
