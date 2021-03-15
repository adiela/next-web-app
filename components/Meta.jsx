import Head from 'next/head';

export default function Meta({ title, description }) {
    return (
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="description" content={description} />
        </Head>
    );
}

Meta.defaultProps = {
    title: 'Directory',
    description: 'Website description'
};
