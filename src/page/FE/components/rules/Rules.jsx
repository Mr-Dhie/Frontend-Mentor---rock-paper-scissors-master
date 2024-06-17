import './rules.css'
import { image_rules, icon_close } from '../../../assets'

export default function Rules() {

    function showModal() {
        const modal = document.getElementById("rules_modal");
        modal.style.display = "block";
    }
    function closeModal(){
        const modal = document.getElementById("rules_modal");
        modal.style.display= "none";
    }

    return (
        <>
            <button className='rules_btn' onClick={showModal}>rules</button>

            <div id='rules_modal'>
                <div className='modal__container'>
                    <div className=' rules_modal-container'>
                        <div className='rules_modal-header'>
                            <span>rules</span>
                            <img src={icon_close} alt="close_btn" onClick={closeModal}/>
                        </div>
                        <img src={image_rules} alt="rules" />
                    </div>
                </div>
            </div>
        </>
    )
}