'use client';

import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { useEffect } from 'react';
import { GTM_ID, pageview } from '../lib/gtm';

export default function AnalyticsTags() {
  const pathname = usePathname();
  const searchParams = useRouter();

  //  THis useEffect is needed to update the page view everytime the url changes
  // thus causing google to track every page a user navigates to.
  useEffect(() => {
    if (pathname) {
      pageview(pathname);
    }
  }, [pathname, searchParams]);

  if (
    process.env.NODE_ENV !== 'production' &&
    !pathname?.startsWith('brightsidecodes.com') // just to be sure, pathname must start with brightsidecodes
  ) {
    return null;
  }

  return (
    <>
      {/* Google Analytics */}
      {/* Google tag (gtag.js)  */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-CL6VREZV5E" />
      <Script id="analytics manager">
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CL6VREZV5E');
            `}
      </Script>

      {/* google tag manger */}
      <noscript>
        <iframe
          title="Google Analytics"
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
      {/* google tag manager */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer', '${GTM_ID}');
  `,
        }}
      />
    </>
  );
}
