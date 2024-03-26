import Footer from "./Footer";
import Header from "./Header";

const Layout = ({children}: { children: React.ReactNode }) => {
    return (
        <html>
        <Header></Header>
        <main>{children}</main>
        <Footer></Footer>
        </html>
    );
};

export default Layout;
