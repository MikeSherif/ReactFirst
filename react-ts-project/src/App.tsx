export function App() {
    const tracks = [
        {id: 1, title: 'Soundtrack', url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3"},
        {
            id: 2,
            title: "Instrumental",
            url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3"
        },
        {id: 3, title: 'Soundtrack', url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3"},
        {
            id: 4,
            title: "Instrumental",
            url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3"
        },
        {id: 5, title: 'Soundtrack', url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3"},
        {
            id: 6,
            title: "Instrumental",
            url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3"
        },
        {id: 7, title: 'Soundtrack', url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3"},
        {
            id: 8,
            title: "Instrumental",
            url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3"
        },
        {id: 9, title: 'Soundtrack', url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3"},
        {
            id: 10,
            title: "Instrumental",
            url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3"
        },
    ]

    const tasks = [
        {id: 1, title: "Купить продукты на неделю", isDone: false},
        {id: 2, title: "Полить цветы", isDone: true},
        {id: 3, title: "Сходить на тренировку", isDone: false},
    ]

    return (
        <div>
            <h1>MikeSherry Player</h1>
            <ul>
                {tracks.map(function (track) {
                    return (
                        <li key={track.id}>
                            <div>
                                {track.title}
                            </div>
                            <audio src={track.url}
                                   controls></audio>
                        </li>
                    )
                })}
            </ul>
            <ul>
                {tasks.map((task) => {
                    return (
                        <li key={task.id}>
                            <h2>{task.title}</h2>
                            <input type="checkbox" checked={task.isDone}/>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

