import React from 'react'
import PublicationCard from './PublicationCard'

const Books = ( { books } ) =>
{
    return (
        <>
            { books.map( ( book ) => (
                <PublicationCard key={ book.id } book={ book } />
            ) ) }
        </>
    )
}

export default Books
