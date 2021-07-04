import React from 'react'
import PublicationCard from './PublicationCard'

const Articles = ( { articles } ) =>
{
    return (
        <>
            { articles.map( ( article ) => (
                <PublicationCard key={ article.id } article={ article } />
            ) ) }
        </>
    )
}

export default Articles
