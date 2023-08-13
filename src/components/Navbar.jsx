const Navbar = () => {
    return (
        <div className="fixed h-[7vh] z-[100] w-full px-8 bg-transparent">
            <div className="h-[132px] flex items-center">
                <img
                    src="everidoor-logo.png"
                    alt="logo"
                    className="object-cover"
                />
            </div>
        </div>
    );
};

export default Navbar;
