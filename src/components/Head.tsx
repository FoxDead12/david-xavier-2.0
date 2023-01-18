import Head from "next/head"

export function HeadPage ({title, description}: any) {

    return (
        <>
        <Head>
            <title>{title}</title>
            <link rel="canonical" href="https://davidxavier.me/" />
            <link rel="icon" type="image/x-icon" href="/D.ico" />
            <meta name="description" content={description} />
            <meta name="robots" content="index, archive"/>
            <meta name="viewport" content="width=device-width" initial-scale="1" />

            <link rel="alternate" hrefLang="en" href="https://davidxavier.me/en" />
            <link rel="alternate" hrefLang="pt" href="https://davidxavier.me/pt" />
        </Head>
        </>
    )
}