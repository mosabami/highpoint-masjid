const TRACKING_ID = process.env.REACT_APP_GOOGLE_MEASUREMENT_ID ? process.env.REACT_APP_GOOGLE_MEASUREMENT_ID : 'unknown'
console.log( TRACKING_ID)

export default function GoogleAnalytics() {
  return (<>
    <script async src={`https://www.googletagmanager.com/gtag/js?id={TRACKING_ID}`}></script>
    <script
      dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', {TRACKING_ID});
      `,
      }}
    />
    </>
  )
}
