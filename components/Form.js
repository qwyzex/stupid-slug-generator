import { useState } from "react";
import styles from "../styles/Form.module.sass";

const Form = () => {
    const [inputValue, setInputValue] = useState("");
    const [resultValue, setResultValue] = useState("");
    const [copy, setCopy] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();

        // filter
        const res = inputValue.toLocaleLowerCase().replace(/ /g, "-");
        setResultValue(res);
    }

    function copyText() {
        if (resultValue != "") {
            navigator.clipboard.writeText(resultValue);
            setCopy(true);
            setTimeout(() => {
                setCopy(false)
            }, 2000);
        }
    }

    const CopySVG = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M22 6v16h-16v-16h16zm2-2h-20v20h20v-20zm-24 17v-21h21v2h-19v19h-2z" />
            </svg>
        );
    };

    const CheckSVG = () => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#ffffff"
            >
                <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
            </svg>
        );
    };

    return (
        <div className={styles.formContainer}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputWrapper}>
                    <label>Input Title</label>
                    <input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                </div>
                <div className={styles.resultWrapper}>
                    <label>Slug Result</label>
                    <input value={resultValue} readOnly />
                    <div className={styles.copyWrapper}>
                        <button
                            disabled={resultValue === "" && true}
                            onClick={resultValue && copyText}
                            type="button"
                        >
                            <CopySVG />
                        </button>
                        {copy && <span><CheckSVG />COPIED TO CLIPBOARD!</span>}
                    </div>
                </div>
                <div className={styles.submitButton}>
                    <button type="submit">GENERATE</button>
                </div>
            </form>
        </div>
    );
};

export default Form;
