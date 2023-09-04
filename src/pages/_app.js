import { ContextProvider } from '@/components/Context'
import Base from '@/layouts/Base'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
    return (
        <ContextProvider>
            <Base>
                <Component {...pageProps} />
            </Base>
        </ContextProvider>
    )
}
