// pages/_app.tsx or app/layout.tsx
import { Provider } from 'react-redux'
import { store } from '@/app/redux/store'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp