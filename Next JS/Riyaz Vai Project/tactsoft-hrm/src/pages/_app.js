import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import AdminLayout from '@/Component/Layout/Admin/adminLayout';
import { useRouter } from 'next/router';
import FrontendLayout from '@/Component/Layout/Frontend/FrontendLayout';
// import ErrorVIewLayout from '@/Component/Layout/ErrorViewLayout/ErrorVIewLayout';
import LoginLayout from '@/Component/Layout/Login/LoginLayout';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isAdminRoute = router.pathname.startsWith('/admin');
  const isLoginRoute = router.pathname.endsWith('/login') || router.pathname.endsWith('/register');
  const Layout = isLoginRoute? LoginLayout: isAdminRoute ? AdminLayout : FrontendLayout;
  // const Layout = isLoginRoute ?  "" : isAdminRoute ? AdminLayout : FrontendLayout;
  // console.log(isLoginRoute);
  // console.log(router.pathname);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}