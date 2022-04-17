import React from 'react'
import './Main.css'
import Header from './Header'

const props = () => (
    <React.Fragment>
        <Header {...props} />
        <main className="content">
            Conteúdo
        </main>
    </React.Fragment>
)
export default props