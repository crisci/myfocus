import { Container, Navbar } from "react-bootstrap";
import { BsFillGearFill } from "react-icons/bs";
// import { IoStatsChartSharp } from "react-icons/io5";
// import { BiUserCircle } from "react-icons/bi";
import { useState } from "react";
import PModal from "./PModal";

function Nav(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
        <Navbar variant="dark" className="navbar navbar-dark fixed-top" style={{backgroundColor: "transparent !important"}}>
            <Container fluid style={{ paddingLeft: "1.2rem", paddingRight: "1.2rem" }}>
                <Navbar.Brand style={{fontWeight:"500"}}>
                    myFocus
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end" style={{color:"white"}}>
                    <BsFillGearFill role="button" style={{width:"1.4em", height: "1.4em", marginRight: "1em"}} onClick={handleShow}/>
                    {/* <IoStatsChartSharp role="button" style={{width:"1.4em", height: "1.4em", marginRight: "1em"}}/>
                    <BiUserCircle role="button" style={{width:"1.6em", height: "1.6em"}}/> */}
                </Navbar.Collapse>
            </Container>
            <PModal show={show} handleClose={handleClose} pomodoro={props.pomodoro} shortBreak={props.shortBreak} longBreak={props.longBreak} resetTimers={props.resetTimers}/>
        </Navbar >
    );
}

export default Nav;