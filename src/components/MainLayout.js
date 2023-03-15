import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
      <div className='bg'></div>
      <div className='body-rect--orange'></div>
      <div className='body-rect--blue'></div>
      <Outlet />
    </>
  )
}
export default MainLayout
