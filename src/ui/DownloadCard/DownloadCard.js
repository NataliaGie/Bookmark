import './DownloadCard.scss';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

const DownloadCard = (props) => (
    <div className="downloadCard-wrapper">
        <div>{props.browserSvg}</div>
        <h3>{props.browserTitle}</h3>
        <p className="card-paragraph">{props.browserDescription}</p>
        <div className="dotted-line" />
        <PrimaryButton width={"bigger"}>Add &#38; Install Extension</PrimaryButton>
    </div>
);

export default DownloadCard;