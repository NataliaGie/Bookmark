import './SecondaryButton.scss';

const SecondaryButton = (props) => (
    <button className="secondary-button">{props.children}</button>
);

export default SecondaryButton;