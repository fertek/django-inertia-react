import { Head } from '@inertiajs/inertia-react';

export default function ContactPage({ supportEmail }) {
    return (

        <>
            <Head>
                <title>Contact</title>
            </Head>
            <h1>{supportEmail}</h1>
        </>
    )
}
