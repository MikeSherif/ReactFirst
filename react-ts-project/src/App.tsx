import {useState} from "react";

const tracks = [
    {id: 1, title: 'Soundtrack', url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3"},
    {id: 2, title: "Instrumental", url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3"},
]


export function App() {
    const stateManager = useState(null)
    let selectedTrackId= stateManager[0];
    let setSelectedTrackId = stateManager[1];
    const [flag, setFlag] = useState(false)
    const openPopup = () => {
        setFlag(true)
    }
    const closePopup = () => {
        setFlag(false)
    }
    if (tracks === null || tracks === undefined) {
        return (
            <>
                <h1>MikeSherry Player</h1>
                <span>Loading...</span>
            </>
        )
    }
    if (tracks.length === 0) {
        return (
            <>
                <h1>MikeSherry Player</h1>
                <span>Not found</span>
            </>
        )
    }
    return (
        <div>
            <h1>MikeSherry Player</h1>
            <ul>

                {tracks.map(function (track) {
                    return (
                        <li key={track.id}
                            style={{border: track.id === selectedTrackId ? '1px solid white' : 'none'}}>
                            <div onClick={()=>{
                                setSelectedTrackId(track.id)
                            }}>
                                {track.title}
                            </div>
                            <audio src={track.url}
                                   controls></audio>
                            <button onClick={openPopup}>Показать</button>
                            {flag && (
                                <div>
                                    Попап
                                    <button onClick={closePopup}>Закрыть попап</button>
                                </div>
                            )}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

