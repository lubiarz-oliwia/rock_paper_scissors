import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPaper, faHandRock, faHandScissors } from '@fortawesome/free-solid-svg-icons'

function Games() {
    const [userChoice, setUserChoice] = useState("")
    const [computerChoice, setComputerChoice] = useState("")
    const [result, setResult] = useState("")
    const table = ["paper", "scissor", "rock"]

    const handleRestart = () => {
        setComputerChoice("");
        setUserChoice("");
        setResult("");
    }

    const handleChoice = (value) => {
        setUserChoice(value)
        handleComputer();
    }

    const handleComputer = () => {
        const compChoic = table[Math.floor(Math.random() * table.length)]
        console.log(compChoic);
        setComputerChoice(compChoic);
    }

    useEffect(() => {
        checkResult()
    }, [computerChoice, userChoice])

    const checkResult = () => {
        switch (userChoice + computerChoice) {
            case 'scissorpaper':
            case 'rockscissor':
            case 'paperrock':
                setResult("You WIN!")
                break
            case 'paperscissor':
            case "scissorrock":
            case "rockpaper":
                setResult("Looooser!")
                break
            case "rockrock":
            case "scissorscissor":
            case "paperpaper":
                setResult("It is draw!")
                break
        }
    }

    return (
        <div className="game_container">
            <h1>{result}</h1>
            {userChoice ? <button className="restart_button" onClick={handleRestart}>restart</button> : null}
            <div className="game_icons">
                <FontAwesomeIcon className="icon" icon={faHandPaper} />
                <FontAwesomeIcon className="icon" icon={faHandRock} />
                <FontAwesomeIcon className="icon" icon={faHandScissors} />
            </div>
            <p className="user_choice">User choice is: <span>{userChoice}</span> </p>
            <p className="comp_choice">Computer choice is: <span>{computerChoice}</span></p>
            <div className="buttons_box">
                {table.map((choice, index) =>
                    <button
                        key={index}
                        onClick={() => { handleChoice(choice) }}>
                        {choice}
                    </button>
                )}
            </div>
        </div>
    )
}

export default Games
