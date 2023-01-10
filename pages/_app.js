import Layout from '../components/Layout'
import '../styles/globals.css'
import { configureStore } from '@reduxjs/toolkit'
import globalReducer from '../state/index'
import { Provider } from 'react-redux'

const store = configureStore({
  reducer: {
    global: globalReducer
  }
})

export default function App ({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
