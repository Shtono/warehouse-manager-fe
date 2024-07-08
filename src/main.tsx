import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { ThemeProvider } from '@mui/material'
import { SnackbarProvider } from 'notistack'

import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.tsx'

import './index.css'
import { GRAPHQL_API_URL } from './config/environment.ts'

import '@fontsource/roboto/300.css'

import HomePage from './pages/Home/HomePage.tsx'

import WarehousesPage from './pages/Warehouses/WarehousesPage.tsx'
import { theme } from './styles/theme.ts'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Error Page</div>,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/warehouses',
        element: <WarehousesPage />,
      },
    ],
  },
])

const client = new ApolloClient({
  uri: GRAPHQL_API_URL,
  cache: new InMemoryCache(),
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'left' }}>
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <RouterProvider router={router} />
        </ApolloProvider>
      </ThemeProvider>
    </SnackbarProvider>
  </React.StrictMode>,
)
