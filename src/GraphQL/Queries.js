import { gql } from '@apollo/client'

export const LOAD_SONGS = gql`
    query GetSongsByAuthor($author: String) {
        songs(author: $author) {
            id,
            name,
            author {
                name
            }
        }
    }
`;