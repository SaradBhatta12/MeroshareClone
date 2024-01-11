"use client"
import React from "react";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Herosection from "./Herosection";
function NavBar() {

    const navBarMain = useRef()
    const setWidth = useRef()
    const boxBody = useRef()

    // useEffect(() => {


    // }, [])



    return (
        <>

            <div className="main" >
                <div className="fullNavBar" id="navBar" ref={navBarMain}>
                    <div className="navMenu">
                        <div className="logo">
                            <img
                                src="https://meroshare.cdsc.com.np/assets/img/brand-dash.png"
                                alt=""
                            />
                        </div>
                        <div className="Forflex">
                            <div className="navLinks">
                                <Link href={"/"} className="allLinks">
                                    <div className="icon">
                                        <span className="material-symbols-outlined">
                                            house
                                        </span>
                                        <p>Dashboard</p>
                                    </div>
                                </Link>
                                <Link href={"/Details"} className="allLinks">
                                    <div className="icon">
                                        <span className="material-symbols-outlined">
                                            share
                                        </span>
                                        <p>My Details</p>
                                    </div>
                                </Link>
                                <Link href={"/Home"} className="allLinks">
                                    <div className="icon">
                                        <span className="material-symbols-outlined">
                                            notes
                                        </span>
                                        <p>My Share</p>
                                    </div>
                                </Link>
                                <Link href={"/Home"} className="allLinks">
                                    <div className="icon">
                                        <span className="material-symbols-outlined">
                                            details
                                        </span>
                                        <p>My Transection History</p>
                                    </div>
                                </Link>
                                <Link href={"/Home"} className="allLinks">
                                    <div className="icon">
                                        <span className="material-symbols-outlined">
                                            contact_mail
                                        </span>
                                        <p>My Portfolio</p>
                                    </div>
                                </Link>
                                <Link href={"/Home"} className="allLinks">
                                    <div className="icon">
                                        <span className="material-symbols-outlined">
                                            language
                                        </span>
                                        <p>My Pledge Share Details</p>
                                    </div>
                                </Link>
                                <Link href={"/Home"} className="allLinks">
                                    <div className="icon">
                                        <span className="material-symbols-outlined">
                                            checkbook
                                        </span>
                                        <p>My Bank Request</p>
                                    </div>
                                </Link>
                                <Link href={"/Home"} className="allLinks">
                                    <div className="icon">
                                        <span className="material-symbols-outlined">
                                            compost
                                        </span>
                                        <p>My ASBA</p>
                                    </div>
                                </Link>
                                <Link href={"/Home"} className="allLinks">
                                    <div className="icon">
                                        <span className="material-symbols-outlined">
                                            shop_two
                                        </span>
                                        <p>My Purchese Source</p>
                                    </div>
                                </Link>
                                <Link href={"/Home"} className="allLinks">
                                    <div className="icon">
                                        <span className="material-symbols-outlined">
                                            sell
                                        </span>
                                        <p>My EDIS</p>
                                    </div>
                                </Link>

                            </div>

                        </div>
                    </div>
                    <div className="footer">
                        © 2024 CDS and Clearing Limited.
                        All Rights Reserved
                    </div>
                </div>

                <div className="footerTop" ref={setWidth}>
                    <div className="menu" onClick={() => {
                        navBarMain.current.classList.toggle('addNav')
                        setWidth.current.classList.toggle('addnew')
                        boxBody.current.classList.toggle('smallwidth')

                    }}>
                        <span className="material-symbols-outlined">
                            menu
                        </span>
                    </div>
                    <div className="right">
                        <div className="logOut">
                            <span className="material-symbols-outlined">
                                logout
                            </span>
                        </div>
                        <div className="aboutUser">
                            <div className="userL">
                                <span className="material-symbols-outlined">
                                    person
                                </span>
                            </div>
                            <div className="about">
                                <h5>SARAD CHANDRA BHATT</h5>
                                <p>MERO SHARE PROFILE </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >


            <div>
                <div className="alartNotice" ref={boxBody}>
                    <Herosection />
                </div>
            </div>
        </>
    );
}

export default NavBar;
