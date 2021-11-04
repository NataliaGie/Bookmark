import './FeaturesSection.scss';
import Title from '../../ui/Title/Title';
import PrimaryButton from '../../ui/PrimaryButton/PrimaryButton';

const FeaturesSection = () => {
    const screen2Pic = <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="536" height="346"><defs><rect id="a" width="536" height="346" rx="8"/></defs><g fill="none" fillRule="evenodd"><mask id="b" fill="#fff"><use xlinkHref="#a"/></mask><use fill="#E8EAF6" fillRule="nonzero" xlinkHref="#a"/><g mask="url(#b)"><path fill="#242A45" d="M-3.53.197h547v59h-547z"/><g transform="translate(22.47 14.197)" fill="#FFF"><circle cx="16" cy="16" r="16" opacity=".245"/><circle cx="477" cy="16" r="16" opacity=".104"/><g transform="translate(47 6)"><rect width="120" height="6" opacity=".75" rx="3"/><rect width="64" height="6" y="14" opacity=".25" rx="3"/></g></g></g><g mask="url(#b)"><g transform="translate(57 93)"><rect width="261" height="316" fill="#FFF" rx="8"/><rect width="128" height="316" x="295" fill="#FFF" rx="8"/><rect width="120" height="6" x="78.47" y="38.197" fill="#242A45" opacity=".5" rx="3"/></g></g><g transform="translate(88.47 115.197)"><circle cx="16" cy="26" r="16" fill="#F98E5D"/><rect width="88" height="6" x="284" fill="#242A45" opacity=".25" rx="3"/><rect width="88" height="6" x="284" y="20" fill="#242A45" opacity=".25" rx="3"/><rect width="88" height="6" x="284" y="40" fill="#242A45" opacity=".25" rx="3"/><rect width="88" height="6" x="284" y="60" fill="#242A45" opacity=".25" rx="3"/><rect width="88" height="6" x="284" y="94" fill="#242A45" opacity=".25" rx="3"/><rect width="88" height="6" x="284" y="114" fill="#242A45" opacity=".25" rx="3"/><rect width="88" height="6" x="284" y="134" fill="#242A45" opacity=".25" rx="3"/><rect width="64" height="6" x="47" y="30" fill="#242A45" opacity=".25" rx="3"/></g><g transform="translate(88.47 181.197)"><circle cx="16" cy="16" r="16" fill="#6AC6D6"/><rect width="120" height="6" x="47" y="6" fill="#242A45" opacity=".5" rx="3"/><rect width="64" height="6" x="47" y="20" fill="#242A45" opacity=".25" rx="3"/></g><g transform="translate(88.47 237.197)"><circle cx="16" cy="16" r="16" fill="#A47ED4"/><rect width="120" height="6" x="47" y="6" fill="#242A45" opacity=".5" rx="3"/><rect width="64" height="6" x="47" y="20" fill="#242A45" opacity=".25" rx="3"/></g><g transform="translate(88.47 293.197)"><circle cx="16" cy="16" r="16" fill="#EC7878"/><rect width="120" height="6" x="47" y="6" fill="#242A45" opacity=".5" rx="3"/><rect width="64" height="6" x="47" y="20" fill="#242A45" opacity=".25" rx="3"/></g></g></svg>

    return (
    <section className="features-section-wrapper">
        <Title>Features</Title>
        <p className="features-one-paragraph">Our aim is to make it quick and easy for you to access
            your favourite websites. Your bookmarks sync between your
            devices so you can access them on the go.
        </p>
        <div className="features-items-wrapper">
            <hr className="feature-section-line" />
            <p className="features-paragraph dark">Simple Bookmarking</p>
            <hr className="red-one" />
            <hr className="feature-section-line" />
            <p className="features-paragraph">Speedy Searching</p>
            <hr className="feature-section-line" />
            <p className="features-paragraph">Easy Sharing</p>
            <hr className="feature-section-line" />
        </div>
        <hr className="desktop-line" />
        <div className="features-content-wrapper">
            <div className="picture-wrapper">
                <div className="rounded-shape-left"></div>
                <div className="screen2-pic">{screen2Pic}</div>
            </div>
            <div className="section5-wrapper">
                <Title>Bookmark in one click</Title>
                <div className="features-items-column">
                    <p className="section5-paragraph">Organize your bookmarks however you like. Our simple drag-and-drop interface gives
                        you complete control over how you manage your favourite sites. 
                    </p>
                    <button className="button-features" width="thesmallest">More info</button>
                </div>
            </div>
        </div>
    </section>
    );
}

export default FeaturesSection;