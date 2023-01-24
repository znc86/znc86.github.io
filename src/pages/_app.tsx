import { type AppType } from "next/dist/shared/lib/utils";
import { appWithTranslation } from "next-i18next";

import "../styles/globals.css";
import '@ericz1803/react-google-calendar/index.css'

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default appWithTranslation(MyApp);
