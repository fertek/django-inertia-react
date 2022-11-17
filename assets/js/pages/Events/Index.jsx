import { Head } from '@inertiajs/inertia-react';

export default function EventsPage({ events }) {
    return (

        <>
            <Head>
                <title>Home</title>
            </Head>
            <h1>{events.length} events</h1>

            <ul>
                {events.map((event, index) => <li key={index}>{event}</li>)}
            </ul>
        </>
    )
}
