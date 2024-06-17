import Header from "./components/header/Header"
import Rules from "./components/rules/Rules"
import Selection from "./components/selection/Selection"
import CountDown from "./components/countdown-modal/CountDown"
import Result from "./components/result/Result"
import { useContext } from "react"
import { GContext } from "../BE/GameContext"
import './game.css'

export default function Game() {
    const consume = useContext(GContext);
    const cast = consume[4];
    const cntDown = consume[10];
    return (
        <section className="[ gContainer ]">
            <div className="[ gContainer-content ] ">
                <div className="gContainer-gameArea">
                    <Header />

                    {(cast) ?
                        (cntDown >= 0) ?
                            <CountDown />
                            :
                            <Result />
                        :
                        <Selection />
                    }
                    <div className="gContainer-rules-mobile">
                        <Rules />
                    </div>
                </div>
                <div className="gContainer-rules">
                    <Rules />
                </div>
            </div>
        </section>
    )
}