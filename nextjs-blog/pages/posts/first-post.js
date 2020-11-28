import Link from 'next/link'

export default function FirstPost() {
    return (
        <>
            <h1>First Post</h1>
            <h2>
                {/* <Link href="/" as={`/index`}>
                    <a>Back to home</a>
                </Link> */}
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </>
    )
}