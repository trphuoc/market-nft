import Footer from "./Footer"
import Header from "./Header"
import Sidebar from "./Sidebar"

const Layout = ({children}) => {
    return (
        <>
            <div className="body__left">
                <Sidebar></Sidebar>
            </div>
            <div className="body__right">
                <Header></Header>
                <main className="body__content">{children}</main>
                <Footer></Footer>
            </div>
        </>
    )
}

export default Layout