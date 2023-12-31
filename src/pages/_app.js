import store from "@/redux/store";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <Toaster />
        {getLayout(<Component {...pageProps} />)}
      </Provider>
    </SessionProvider>
  );
}
