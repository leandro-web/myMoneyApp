import React from 'react'

const ano = new Date()

export default props => (
    <footer className="main-footer">
        <strong>
            Copyright &copy; {ano.getFullYear()}
        </strong>
    </footer>
)