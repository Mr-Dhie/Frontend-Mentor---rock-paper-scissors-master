import { useContext } from 'react'
import {logo} from '../../../assets'
import './header.css'
import { GContext } from '../../../BE/GameContext'

export default function Header(){
    const consume = useContext(GContext)
    const score = consume[8];
    return(
        <div className='header__container'>
            <div>
                <img src={logo} alt="logo" />
            </div>
            <div className='header__score'>
                <span className='header__score-text'>score</span>
                <span className='header__score-score'>{score}</span>
            </div>
        </div>
    )
}