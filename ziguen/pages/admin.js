import Navbar from '../components/navbar'
import Footer from '../components/footer'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function Admin() {
  const [usuario, setUsuario] = useState({})
  const router = useRouter()
  useEffect(() => {
    const token = localStorage.getItem('token');
    
    if (!token)
        router.push('/iniciarsessao')
    const user = JSON.parse(localStorage.getItem('user'))

    fetch('http://localhost:3333/users/list', { headers: new Headers({ 'Authorization': `Bearer ${token}` })})
        .then(response => {
            if(response.ok) {
                return response.json();
            }
            throw new Error("Oops! Ocorreu um erro");
        })
        .then(users => {
            const res = users.filter((userAux) => {
                return userAux.id === user.id
            })

            setUsuario(res)
        })
        .catch(e => router.push('/'));
  }, [])
  return (
    <div>
      <Navbar />
      <div className="container" style={{margin: '200px 0'}}>
        <h4 className="text-center">Bem vindo, {usuario[0] ? usuario[0].name : ''}</h4>
      </div>
      <Footer />
    </div>
  )
}