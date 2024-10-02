function Header() {
    return (
        <div className="flex ml-20 mr-20 ">
            <img src="/image.png" alt="" />
            <div className="ml-auto font-bold text-black  flex space-x-12 ">
                <button type="">Home</button>
                <button type="">About</button>
                <button type="">Contact</button>
            </div>

        </div>
    );
}
export default Header;