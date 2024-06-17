import { useContext, useEffect } from "react";
import Selection from "../selection/Selection"
import { GContext } from "../../../BE/GameContext";
import './countdown.css'

export default function CountDown() {
    const consume = useContext(GContext);
    const cntDown = consume[10];
    const setCntDown = consume[11];
    
    const rules_btn = document.querySelector('.rules_btn');
    rules_btn.disabled = true;

    const display = ["pick!", "scissors", "paper", "rock"];

    useEffect(() => {
        const timer = setTimeout(() => {
            if (cntDown >= 0) {
                setCntDown(cntDown - 1);
                if(cntDown === 0) rules_btn.disabled = false;
            }
        }, 1000);

        return () => clearTimeout(timer);
    })

    return (
        <>
            <Selection />

            <div className=" [ cntdown-modal ]">
                <span>{display[cntDown]}</span>
            </div>
        </>
    )
}