import Game from "./page/FE/Game"
import GameContext from "./page/BE/GameContext"

const App = () => {

    return (
        <main>
            <GameContext>
                <Game />
            </GameContext>
        </main>
    )
}

export default App