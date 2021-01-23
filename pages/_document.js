import Document, { Html, Head, Main, NextScript } from 'next/document'
import {Footer} from "../components/Layout/Footer";

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head >
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                </Head>
                <body>
                <Main />
                {/*<Footer />*/}
                <NextScript />
                </body>
            </Html>
        )
    }
}
