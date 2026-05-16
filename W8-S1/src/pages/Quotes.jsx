import React, { useEffect, useState } from 'react'

const Quotes = () => {
    const [quotes, setQuotes] = useState([])

    useEffect(function () {
        async function fetchQuotes() {
            const response = await fetch('https://dummyjson.com/quotes')
            const data = await response.json()
            setQuotes(data.quotes)
            // console.log(quotes)
        }

        fetchQuotes()
    }, [])

    console.log(quotes)


    return (
        <div>
            <h1>Quotes</h1>
            <ul>
                {quotes.map(quote => (
                    <li key={quote.id}>
                        <p>{quote.quote}</p>
                        <p><em>- {quote.author}</em></p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Quotes