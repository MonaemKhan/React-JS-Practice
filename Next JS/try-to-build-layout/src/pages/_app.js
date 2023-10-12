import '@/styles/globals.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import AdminLayout from '@/Layout/adminLayout/adminLayout'
import UserLayout from '@/Layout/UseLayout/userLayout';
import { useRouter } from 'next/router';
import Home from '@/pages';

export default function App({ Component, pageProps }) {
  const route = useRouter()
  const isAdmin = route.pathname.startsWith('/admin');
  const isUser = route.pathname.startsWith('/user');
  const Layout = isUser ? UserLayout : isAdmin? AdminLayout : Home;
  // const Layout = (isUser && role === 'user') ? UserLayout : (isAdmin && role === 'admin')? AdminLayout : Home;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>);
}
