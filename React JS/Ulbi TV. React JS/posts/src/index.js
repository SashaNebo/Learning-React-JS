import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

// Тем, кто делает сейчас. useHistory убрали, вместо него вы можете использовать useNavigate
// Было const router = useHistory()
// Стало const router = useNavigate()
// Далее, router.push('/path') меняем на router('/path')
// router.replace('/path') меняем на router('/path', {replace: true})
// Если вы хотите использовать state, используйте router('/path', { state: { name:'Xyz' }})
