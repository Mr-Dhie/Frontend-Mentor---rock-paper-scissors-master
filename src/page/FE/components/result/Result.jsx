import { useContext, useEffect, useState } from "react"
import Icons from "../icons/Icons"
import { GContext, IconContext } from "../../../BE/GameContext"
import './result.css'

export default function Result() {
    const [show, setShow] = useState(false);
    const you = document.getElementById("youPicked")
    const opponent = document.getElementById("opponentPicked")

    const consume = useContext(GContext);
    const playerPicked = consume[0];
    const setPlayerPicked = consume[1];
    const opponentPicked = consume[2];
    const setCast = consume[5];
    const result = consume[6];
    const score = consume[8];
    const setScore = consume[9];

    const useIcons = useContext(IconContext);
    const image = useIcons[0];
    const alt = useIcons[1];

    function clickHandler() {
        setCast(false)
        setPlayerPicked(null)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, 1000);

        if (show) {
            if (result === "you win") {
                setScore(score + 1);
                you.classList.add("winner");
            } else if (result === "you lose") {
                setScore(score - 1);
                opponent.classList.add("winner");
            } else {
                setScore(score);
            }
        }

        return () => clearTimeout(timer);

    }, [show])



    return (
        <div className="result__container">
            <div style={{ display: "flex", justifyContent: "center" , flexDirection: "column"}}>
                <div style={{ display: "flex" ,justifyContent: "center"}}>
                    <div id="youPicked" className="result__container-picked">
                        <span>you picked</span>
                        <Icons image={image[playerPicked]} alt={alt[playerPicked]} />
                    </div>
                    <div className="result__container-result [ result-desktop ]">
                        {(show) && (
                            <>
                                <span>{result}</span>
                                <button onClick={clickHandler}>play again</button>
                            </>
                        )}
                    </div>

                    <div id="opponentPicked" className="result__container-picked">
                        <span>the house picked</span>
                        <Icons image={image[opponentPicked]} alt={alt[opponentPicked]} />
                    </div>
                </div>
                <div className="result__container-result [ result-mobile ]">
                    {(show) && (
                        <>
                            <span>{result}</span>
                            <button onClick={clickHandler}>play again</button>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}