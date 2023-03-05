import { createRoot } from 'react-dom/client'
import { Vitrine } from './Vitrine'

const root = createRoot(document.getElementById('vitrine'))
root.render(<Vitrine />)

const root2 = createRoot(document.getElementById('vitrine2'))
root2.render(<Vitrine />)

const root3 = createRoot(document.getElementById('vitrine3'))
root3.render(<Vitrine />)
