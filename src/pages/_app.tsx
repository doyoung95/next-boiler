import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/GlobalStyle';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={{}}>
			<GlobalStyle />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
