import Icons from "../icons/Icons"
import { useContext } from "react"
import { GContext, IconContext } from "../../../BE/GameContext"
import './selection.css'

export default function Selection() {
    const consume = useContext(GContext)
    const useIcons = useContext(IconContext)

    const image = useIcons[0]
    const alt = useIcons[1]


    const setPlayerPicked = consume[1];
    const setOpponetPicked = consume[3];
    const setCast = consume[5];
    const setCntDown = consume[11];

    const setSelected = consume[13];

    function clickHandler(picked) {
        setPlayerPicked(picked);
        setOpponetPicked(Math.floor(Math.random() * 3));
        setCntDown(3);
        setCast(true);
        setSelected(true); 
    }


    return (
        <div className="selection__container triangle-bg">
            <div style={{ marginTop: "1.5rem" }}>
                <div className="selection__container-row">
                    <Icons image={image[1]} alt={alt[1]} onClick={() => clickHandler(1)} />
                    <Icons image={image[2]} alt={alt[2]} onClick={() => clickHandler(2)} />
                </div>
                <div className="selection__container-row [ margin ]">
                    <Icons image={image[0]} alt={alt[0]} onClick={() => clickHandler(0)} />
                </div>
            </div>
        </div>
    )
}