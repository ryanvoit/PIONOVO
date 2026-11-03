import { Link } from 'react-router'

export default function NotFoundPage() {
  return (
    <section style={{ padding: 16 }}>
      <h1>404</h1>
      <p>Такой страницы нет.</p>
      <Link to="/">На главную</Link>
    </section>
  )
}
