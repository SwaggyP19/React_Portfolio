import ('./style.css')

const Header = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>Welcome to your</strong><br />
                    <span className="admin-panel-text">portfolio!</span>
                </h1>
            </div>
        </header>
    );
}

export default Header;