import {gql} from '@apollo/client'

export const ADD_SONG = gql`
    mutation AddSong($songToAdd: SongInput!) {
        addSong(song: $songToAdd) {
            name
        }
    }
`;