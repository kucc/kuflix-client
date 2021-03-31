import Link from 'next/link';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';

const IndexPage = () => {
  const router = useRouter();
  console.log(router);

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
