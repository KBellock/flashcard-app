import {useState} from 'react'

function Flashcard({flashcard}) {
    const [flip, setFlip] = useState(false);

    

    return (
        <div onClick={() => setFlip(!flip)} className={`card ${flip ? 'flip' : ''}`}>
            <div className="card-front">
                {flashcard.question}
                <div className="flashcard-options">
                    {flashcard.options.map(option => {
                        return <div className="flashcard-option" key={option}>{option}</div>
                    })}
                </div>
            </div>

            <div className="card-back">
                {flashcard.answer}
            </div>
            
        </div>
    )
}

export default Flashcard
