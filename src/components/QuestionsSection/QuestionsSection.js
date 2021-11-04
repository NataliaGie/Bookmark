import { useState } from 'react';
import './QuestionsSection.scss';
import Title from '../../ui/Title/Title';
import { QuestionsData } from './QuestionData';
import PrimaryButton from '../../ui/PrimaryButton/PrimaryButton';

const QuestionsSection = () => {
    const [clicked, setClicked] = useState(false);

    const toggle = index => {
        if (clicked === index) {
            return setClicked(null);
        }
        setClicked(index);
    }

    const blueArrow = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="#5267DF" stroke-width="3" d="M1 1l8 8 8-8"/></svg>
    const redRotateArrow = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" transform="scale(1 -1)"><path fill="none" stroke="hsl(0, 94%, 66%)" stroke-width="3" d="M1 1l8 8 8-8"/></svg>

    return (
        <section className="questionsSection-wrapper">
            <Title>Frequently Asked Questions</Title>
            <p>Here are some of our FAQs. If you have any other questions you'd like answered
               please feel free to email us. 
            </p>
            <div>
                {QuestionsData.map((item, index) => {
                    return (
                        <div
                         onClick={() => toggle(index)}
                         key={index}
                         className="question-container">
                            <div className="question-row">
                                <p className="question">{item.question}</p>
                                <span className="arrow-icon">{clicked === index ? redRotateArrow : blueArrow}</span>
                            </div>
                            {clicked === index ? (
                                <div className="dropdown">
                                    <p className="question-answer">{item.answer}</p>
                                </div>
                            ) : null}
                            <hr className="question-line" />
                        </div>
                    )
                })}
            </div>
            <div className="questionButton-wrapper">
            <PrimaryButton width="thesmallest">More info</PrimaryButton>
            </div>
        </section>
    );
};

export default QuestionsSection;