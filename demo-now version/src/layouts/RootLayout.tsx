import { NavLink, Outlet } from 'react-router'

export default function RootLayout() {
  return (
    <>
      <nav style={{ display: 'flex', gap: 16, padding: 16 }}>
        <NavLink to="/" end>
          Главная
        </NavLink>
        <NavLink to="/about">О проекте</NavLink>
      </nav>
      <Outlet />
    </>
  )
}
