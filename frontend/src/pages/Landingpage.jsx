import Heroheader, { Footer, Navbar , KeyFeatures ,What}  from "../mycomponents/Landingpg";

export default function Landingpage() {
    return (
        <>
        <Navbar></Navbar>
            <Heroheader></Heroheader>
            <What></What>
            <KeyFeatures></KeyFeatures>
            <Footer></Footer>
        </>
    );
}

