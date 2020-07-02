import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ChakraProvider, CSSReset } from '@chakra-ui/core'
import { Provider } from 'react-redux'
import theme from '@chakra-ui/theme'
import { store } from './core/store'
import { ErrorBoundary as BugsnagErrorBoundary } from './utils/bugsnag'
import AppErrorBoundary from './components/errorBoundaries/AppErrorBoundary'

ReactDOM.render(
  <BugsnagErrorBoundary>
    <ChakraProvider theme={theme}>
      <AppErrorBoundary>
        <Provider store={store}>
          <CSSReset />
          <App />
        </Provider>
      </AppErrorBoundary>
    </ChakraProvider>
  </BugsnagErrorBoundary>,

  document.getElementById('root'),
)
