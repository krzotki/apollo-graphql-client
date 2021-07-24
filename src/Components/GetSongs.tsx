
import React, {useEffect, useState, useRef} from "react";
import {useQuery, gql} from '@apollo/client';
import {LOAD_SONGS} from '../GraphQL/Queries';


interface Song {
    name: string;
    id: number;
    author: {
        name: string;
    }
}

interface SongsDataVars {
    author: string;
}

interface SongsData {
    songs: Song[]
}

const GetSongs = () => {

    const [authorName, updateAuthorName] = useState<string>("");

    const {error, loading, data} = useQuery<SongsData, SongsDataVars>(LOAD_SONGS, {variables: {author: authorName}});

    console.log(data);

    return (
        <div>
            <input placeholder="Author..." onChange={(evt) => updateAuthorName(evt.target.value)}/>

            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    {data && data.songs.map(song => (
                        <div key={song.id}>{song.author.name}: {song.name}</div>
                    ))}
                </div>
            )}
            
        </div>
    );
}


export default GetSongs;
