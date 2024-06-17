import './icons.css'

export default function Icons({ image, alt, onClick }) {
    return (
        <div className=' [ winner-circle ]'>
            <div className={`choice-outer-layer ${alt}`} onClick={onClick} >
                <div className="choice-inner-layer">
                    <img src={image} alt={alt} />
                </div>
            </div>
        </div>
    )
}