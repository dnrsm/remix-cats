import { useLoaderData, LoaderFunction } from 'remix';
import type { Cat } from '~/types';
import { API_BASE } from '~/constants';
import { Pagenation } from '~/components/pagenation';
import { List } from '~/components/list';
import { styles } from '~/styles/posts';

export const loader: LoaderFunction = async ({ params }) => {
  const res = await fetch(
    `${API_BASE}/cats?skip=${Number(params.id) * 10}&limit=10`
  );
  return res;
};

export default function Page() {
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
