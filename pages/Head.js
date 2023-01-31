import Head from "next/head";
import Script from "next/script";

export default function HeadItems() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Dream Education</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta
          content="dream, dream-education, education, o'quv markazi, o'quv, markaz, marg'ilon, margilan, fergana, farg'ona, koreys, koreys tili, inggliz tili, araab tili, til"
          name="keywords"
        />
        <meta content="" name="description" />
        <link href="favicon.ico" rel="icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Nunito:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
          rel="stylesheet"
        />
        {/* <link
          href="lib/owlcarousel/assets/owl.carousel.min.css"
          rel="stylesheet"
        /> */}
      </Head>
      {/* JavaScript Libraries  */}
      <Script src="https://code.jquery.com/jquery-3.4.1.min.js"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></Script>
      <Script src="lib/wow/wow.min.js"></Script>
      <Script src="lib/easing/easing.min.js"></Script>
      <Script src="lib/waypoints/waypoints.min.js"></Script>
      {/* <Script src="lib/owlcarousel/owl.carousel.js"></Script> */}
      {/* Template JavaScript  */}
      <Script src="js/main.js"></Script>
    </>
  );
}
