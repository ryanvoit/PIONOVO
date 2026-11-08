import { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'

const HomePage = lazy(() => import('./pages/HomePage/HomePage.tsx'))
const CatalogPage = lazy(() => import('./pages/CataloguePage/CatalogPage.tsx'))
const DeliveryPage = lazy(() => import('./pages/DeliveryPage/DeliveryPage.tsx'))
const PaymentPage = lazy(() => import('./pages/PaymentPage/PaymentPage.tsx'))
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage.tsx'))

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="catalogue" element={<CatalogPage />} />
          <Route path="delivery" element={<DeliveryPage />} />
          <Route path="payment" element={<PaymentPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
