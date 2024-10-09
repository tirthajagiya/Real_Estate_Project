import { Link } from "react-router-dom";
export default function Header() {
    return (
        <>
            <Link to={'/'}>Home</Link>&nbsp;
            <Link to={'/exploreproperty'}>Explore Property</Link>&nbsp;
            <Link to={'/findbroker'}>Find Broker</Link>&nbsp;
            <Link to={'/customercare'}>Customer Care</Link>&nbsp;
            <Link to={'/login'}>Login</Link>
        </>
    );
}