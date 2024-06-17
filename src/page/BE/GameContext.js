import { createContext, useEffect, useState } from "react"
import { icon_rock, icon_paper, icon_scissors, } from '../assets'


export const GContext = createContext(null)
export const IconContext = createContext(null)


export default function GameContext({ children }) {
    const choices = ["rock", "paper", "scissors"];
    const image = [icon_rock, icon_paper, icon_scissors];
    const alt = ["icon_rock", "icon_paper", "icon_scissors"];

    const [playerPicked, setPlayerPicked] = useState(null);
    const [opponentPicked, setOpponentPicked] = useState(null);
    const [selected, setSelected] = useState(false);

    const [cntdown, setCntDown] = useState(-1);
    const [cast, setCast] = useState(false);//casting the result
    const [result, setResult] = useState(null);

    const score_data = localStorage.getItem("score");
    const [score, setScore] = useState(+score_data || 0);

    useEffect(() => {
        localStorage.setItem("score", score)
    }, [score])




    if (selected) {
        if (choices[playerPicked] === "rock") {
            if (choices[opponentPicked] === "rock") setResult("draw")
            if (choices[opponentPicked] === "paper") setResult("you lose")
            if (choices[opponentPicked] === "scissors") setResult("you win")
        }
        if (choices[playerPicked] === "paper") {
            if (choices[opponentPicked] === "rock") setResult("you win")
            if (choices[opponentPicked] === "paper") setResult("draw")
            if (choices[opponentPicked] === "scissors") setResult("you lose")
        }
        if (choices[playerPicked] === "scissors") {
            if (choices[opponentPicked] === "rock") setResult("you lose")
            if (choices[opponentPicked] === "paper") setResult("you win")
            if (choices[opponentPicked] === "scissors") setResult("draw")
        }

        setSelected(false);
    }




    return (
        <GContext.Provider value={[
            playerPicked, setPlayerPicked,
            opponentPicked, setOpponentPicked,
            cast, setCast,
            result, setResult,
            score, setScore,
            cntdown, setCntDown,
            selected, setSelected
        ]}>

            <IconContext.Provider value={[image, alt]}>
                {children}
            </IconContext.Provider>

        </GContext.Provider>
    )
}