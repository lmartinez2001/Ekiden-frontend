import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <section className='main-container'>
      <Link to='/login' className='button primary'>
        Connexion
      </Link>

      <Link to='/register' className='button primary'>
        Inscription
      </Link>
    </section>
  )
}
export default Main
