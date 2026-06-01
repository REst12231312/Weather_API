import React from 'react'

export default function ErrorMessage({ message }) {
    return (
        <div>
            <p style={{fontWeight: "bolder", color: 'red', fontSize: 20}}>Ошибка: {message}</p>
        </div>
    )
}
