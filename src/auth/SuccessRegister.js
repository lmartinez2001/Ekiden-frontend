import { Link } from 'react-router-dom'

const SuccessRegister = () => {
  return (
    <main className='success_container'>
      <h1 className='success_title'>Inscription réussie</h1>
      <div className='redirect-btns'>
        <Link to='/login' className='button primary'>
          Se connecter
        </Link>
        <Link to='/' className='button secondary'>
          Page d'accueil
        </Link>
      </div>
    </main>
  )
}
export default SuccessRegister
