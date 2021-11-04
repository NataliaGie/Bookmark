import './PrimaryButton.scss';

const PrimaryButton = (props) => (
    <button className={`${"primary-button primary-button-" + props.width}`}>{props.children}</button>
);

export default PrimaryButton;