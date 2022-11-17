import { Link } from '@inertiajs/inertia-react'

const Layout = ({children}) => (
    <>
    <nav>
        <ul>
            <li><Link href={reverseUrl('home')}>Home</Link></li>
            <li><Link href={reverseUrl('contact')}>Contact</Link></li>
        </ul>
    </nav>
    <main role="main">
        {children}
    </main>
    </>
)

export default page => <Layout>{page}</Layout>;
