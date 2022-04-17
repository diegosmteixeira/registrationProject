import './Header.css'
import React from 'react'

const props = () => (
    <header className="header d-none d-sm-flex flex-column">
        <h1 className="mt-3">
            <i className="fa fa-home" aria-hidden="true"></i> Início
        </h1>
        <p className="lead text-muted">Segundo projeto do capítulo de React.</p>
    </header>
)
export default props