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
            <div className="[ gContainer-width ] ">
                <div className="[ gContainer__playSection ]">
                    <Header />

                    {(cast) ?
                        (cntDown >= 0) ?
                            <CountDown />
                            :
                            <Result />
                        :
                        <Selection />
                    }
                </div>

                <div className="[ gContainer__rules ]">
                    <Rules />
                </div>
            </div>
        </section>
    )
}