
import React, {useEffect, useState} from "react";
import {useMutation, gql} from '@apollo/client';
import {ADD_SONG} from '../GraphQL/Mutations';

interface NewSongDetails {
    name: string;
    authorId: number;
}

interface AddedSongData {
    id: number;
    name: string;
    authorId: number;
}


const AddSong = () => {
    const [songName, setSongName] = useState<string>("");
    const [authorId, setAuthor] = useState<number>(0);

    const [saveSong, {error, data}] = useMutation<
        {addSong: AddedSongData} ,
        {songToAdd: NewSongDetails}
    >(ADD_SONG, {
        variables: {songToAdd: {name: songName, authorId: authorId}}
    });

    return (
        <div>
            <h3>Add song</h3>
            {error ? <p>Whoopsie: {error.message}</p> : null}
            {data && data.addSong ? <p>Added song</p> : null}

            <form>
                <p>
                    <label>Name</label>
                    <input
                        name="name"
                        onChange={e => setSongName(e.target.value)}
                />
                </p>
                <p>
                    <label>AuthorId</label>
                    <input
                        type="number"
                        name="authorId"
                        onChange={e => setAuthor(+e.target.value)}
                    />
                </p>

                <button onClick={(evt) => {
                    evt.preventDefault();
                    songName && authorId && saveSong()
                }}>
                Add
                </button>
            </form>
        </div>
    );

};

export default AddSong;