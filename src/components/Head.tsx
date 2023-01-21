import Head from "next/head"

export function HeadPage ({title, description, keywords}: any) {

    return (
        <>
        <Head>
            <title>{title}</title>
            {/* <link rel="canonical" href="https://davidxavier.me/" />
            <link rel="canonical" href="https://davidxavier.me/pt" /> */}

            <link rel="icon" sizes="64x64" type="image/x-icon" href="/D.ico" />
            <link rel="shortcut icon" href="/D.ico" type="image/x-icon"></link>
            <link rel="apple-touch-icon" href="/D.ico" type="image/x-icon"></link>

            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="robots" content="index, archive"/>
            <meta name="viewport" content="width=device-width, initial-scale=1" id="wixDesktopViewport" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="generator" content="By David Xavier" />

            <link rel="alternate" hrefLang="en" href="https://davidxavier.me/" />

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content="https://davidxavier.me/" />
        </Head>
        </>
    )
}

