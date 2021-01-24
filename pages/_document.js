import Document, { Html, Head, Main, NextScript } from 'next/document'
import {Footer} from "../components/Layout/Footer";

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head />
                <body>
                <Main />
                {/*<Footer />*/}
                <NextScript />
                </body>
            </Html>
        )
    }
}
