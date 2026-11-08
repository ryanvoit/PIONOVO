import { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'

const HomePage = lazy(() => import('./pages/home/HomePage.tsx'))
const CatalogPage = lazy(() => import('./pages/catalogue/CatalogPage.tsx'))
const DeliveryPage = lazy(() => import('./pages/delivery/DeliveryPage.tsx'))
const PaymentPage = lazy(() => import('./pages/payment/PaymentPage.tsx'))
const ContactsPage = lazy(() => import('./pages/contacts/ContactsPage.tsx'))

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
