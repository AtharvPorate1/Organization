import Navbar from "@/Components/Navbar";



interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
};

export default Layout;
