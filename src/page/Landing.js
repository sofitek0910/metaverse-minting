import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../redux/blockchain/blockchainActions";
import { fetchData } from "../redux/data/dataActions";

function Landing() {
    const dispatch = useDispatch();
    const blockchain = useSelector((state) => state.blockchain);
    const data = useSelector((state) => state.data);
    const [CONFIG, SET_CONFIG] = useState({
        CONTRACT_ADDRESS: "",
        SCAN_LINK: "",
        NETWORK: {
        NAME: "",
        SYMBOL: "",
        ID: 0,
        },
        NFT_NAME: "",
        SYMBOL: "",
        MAX_SUPPLY: 1,
        FINNEY_COST: 0,
        DISPLAY_COST: 0,
        GAS_LIMIT: 0,
        MARKETPLACE: "",
        MARKETPLACE_LINK: "",
        SHOW_BACKGROUND: false,
    });

    const getData = () => {
        if (blockchain.account !== "" && blockchain.smartContract !== null) {
            dispatch(fetchData(blockchain.account));
            if (typeof window !== 'undefined') {
                window.location.href = "/test-mint";
            }
        }
    };

    const getConfig = async () => {
        const configResponse = await fetch("/config/config.json", {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        });
        const config = await configResponse.json();
        SET_CONFIG(config);
    };

    useEffect(() => {
        getConfig();
    }, []);

    useEffect(() => {
        getData();
    }, [blockchain.account]);


    return (
        <div>
            <div className="preloader">
                <div className="layer"></div>
                <div className="inner">
                <figure> <img src="./assets/images/preloader1.gif" alt="Image"/> </figure>
                <span>Site Loading</span> </div>
            </div>

            <div className="page-transition">
                <div className="layer"></div>
            </div>

            <nav className="site-navigation">
                <div className="layer"></div>
                <div className="inner">
                    <ul data-splitting>
                        <li><a href="studio.html">ABOUT US</a> <small>About Covet Gallery</small> </li>
                        <li><a href="showcases.html">FEATURED ARTIST</a> <small>Selected Artists for upcoming exhibition</small> </li>
                        <li><a href="blog.html">BLOG</a> <small>Recent posts</small> </li>
                        <li><a href="contact.html">CONTACT</a> <small>Contact Us</small> </li>
                    </ul>
                </div>
            </nav>

            <div className="social-media">
                <div className="layer"> </div>
                <div className="inner">
                    <h5>Social Apps </h5>
                    <ul>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                        <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                        <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                    </ul>
                </div>
            </div>

            {/* <div className="all-cases">
                <div className="layer"> </div>
                <div className="inner">
                    <ul>
                    <li><a href="#">Darkness</a></li>
                    <li><a href="#">Goddes</a></li>
                    <li><a href="#">Employee</a></li>
                    <li><a href="#">Berry</a></li>
                    <li><a href="#">Roosters</a></li>
                    <li><a href="#">Primero</a></li>
                    </ul>
                </div>
            </div> */}

            <main>
                <aside className="left-side">
                    <div className="logo"> 
                        <a href="/"> <img src="./assets/images/logo.png" alt="Image"/></a> 
                    </div>
                    <div className="hamburger" id="hamburger">
                    <div className="hamburger__line hamburger__line--01">
                        <div className="hamburger__line-in hamburger__line-in--01"></div>
                    </div>
                    <div className="hamburger__line hamburger__line--02">
                        <div className="hamburger__line-in hamburger__line-in--02"></div>
                    </div>
                    <div className="hamburger__line hamburger__line--03">
                        <div className="hamburger__line-in hamburger__line-in--03"></div>
                    </div>
                    <div className="hamburger__line hamburger__line--cross01">
                        <div className="hamburger__line-in hamburger__line-in--cross01"></div>
                    </div>
                    <div className="hamburger__line hamburger__line--cross02">
                        <div className="hamburger__line-in hamburger__line-in--cross02"></div>
                    </div>
                    </div>
                    <div className="follow-us"> FOLLOW US </div>
                    <div className="equalizer"> <span></span> <span></span> <span></span> <span></span> </div>
                </aside>
                <div className="all-cases-link"> 
                        {blockchain.account == null && blockchain.account == undefined ? 
                            <span>CONNECT WALLET</span>: 
                            <span className="connect-button megrim-font">
                            {String(blockchain.account).substring(0, 4) +
                                "..." +
                                String(blockchain.account).substring(38)
                            }
                            </span>
                        } 
                    <b  onClick={(e) => {
                        e.preventDefault();
                        dispatch(connect());
                        getData();
                        }
                    }>+</b> 
                </div>
                <header className="video-hero">
                    <div className="video-bg">
                        <video src="./assets/videos/Vid_Primary.mp4" autoPlay muted loop></video>
                    </div>
                    <div className="inner">
                        <span></span>
                    </div>
                </header>
                <section className="intro">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 wow fadeInUp" data-splitting>
                                <h3 className="section-title">INTERACTIVE NFT GALLERY<br/>
                                </h3>
                            </div>
                            <div className="col-lg-7 wow fadeInUp" data-splitting>
                                <p>Experience the works of the best digital artist the world has to offer.  Visitors to our exhibitions will be able to mint directly from the CG site.</p>
                                <small></small> <b>2/25/22</b>
                                <h4>LAUNCH DATE</h4>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="intro-image">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                            <div className="office-slider">
                                <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <figure className="reveal-effect masker wow"> 
                                        <img src="./assets/images/Gallery.jpg" alt="Gallery"/>
                                        <figcaption>
                                            <h6> Powered by Kunstmatrix</h6>
                                        </figcaption>
                                    </figure>
                                </div>
                                <div className="swiper-slide">
                                    <figure className="reveal-effect masker wow"> 
                                        <img src="./assets/images/Demo_slide2.jpg" alt="Image"/>
                                        <figcaption>
                                        </figcaption>
                                    </figure>
                                </div>
                                </div>
                                <div className="swiper-pagination"></div>
                            </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="icon-content-block">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 wow fadeInUp" data-splitting>
                                <h3 className="section-title">HOW IT WORKS<br/></h3>
                            </div>
                            <div className="col-lg-3 col-md-4 wow fadeInUp" data-splitting>
                            <div className="content-block selected">
                                <figure> <img src="./assets/images/mmask_ico.png" alt="Image"/> </figure>
                                <h6>Connect Wallet</h6>
                                <ul>
                                    <li>Connect MetaMask Wallet</li>
                                </ul>
                            </div>
                            </div>
                            <div className="col-lg-3 col-md-4 wow fadeInUp" data-splitting>
                            <div className="content-block">
                                <figure> <img src="./assets/images/view_ico.png" alt="Image"/> </figure>
                                <h6>View Gallery</h6>
                                <ul>
                                <li>View Interactive Gallery</li>
                                <li>Guided Tour Available</li>
                                </ul>
                            </div>
                            </div>
                            <div className="col-lg-3 col-md-4 wow fadeInUp" data-splitting>
                            <div className="content-block">
                                <figure> <img src="./assets/images/eth_ico.png" alt="Image"/> </figure>
                                <h6>MINT With CG</h6>
                                <ul>
                                <li>Select the desired work</li>
                                <li>Route to a page where you can Mint</li>
                                </ul>
                            </div>
                            </div>
                            <div className="col-lg-3 col-md-4 wow fadeInUp" data-splitting>
                            <div className="content-block">
                                <figure> <img src="./assets/images/vault_ico.png" alt="Image"/> </figure>
                                <h6>Access CG Vault</h6>
                                <ul>
                                <li>Each Mint receives access to the vault</li>
                                </ul>
                            </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="works wow" data-wow-offset="10">
                    <ul>
                    <li>
                        <a href="https://opensea.io/collection/ancientbots" target="_blank" data-fancybox>
                            <figure className="reveal-effect masker wow"> 
                                <img src="./assets/images/AncientBot1.jpg" alt="LUK"/>
                            </figure>
                        </a> 
                        <div className="caption wow fadeInUp" data-splitting>
                        <h3>Ancient Bot Collection</h3>
                            <small>Artist: LUK</small> 
                            </div>
                    </li>
                    <li>
                        <a href="https://opensea.io/collection/ancientbots" target="_blank"data-fancybox>
                            <figure className="reveal-effect masker wow"> 
                                <img src="/assets/images/Dream-On.jpg" alt="LUK"/>
                            </figure>
                        </a> 
                        <div className="caption wow fadeInUp" data-splitting>
                        <h3>"Dream On"</h3>
                        <small>Artist: LUK</small></div>
                    </li>
                    <li>
                        <a href="https://opensea.io/collection/ancientbots" target="_blank" data-fancybox>
                            <figure className="reveal-effect masker wow"> 
                                <img src="/assets/images/AncientBot2.jpg" alt="LUK"/>
                            </figure>
                        </a> 
                        <div className="caption wow fadeInUp" data-splitting>
                            <h3>Ancient Bot Collection</h3>
                            <small>Artist: LUK</small> 
                        </div>
                    </li>

                    </ul>
                </section>
            </main>

            <footer className="footer">
                <div className="container">
                    <div className="row">
                    <div className="col-12">
                        <ul>
                            <li><a href="https://discord.com/invite/5UGxHxDR"><i className="fab fa-DISCORD"></i></a></li>
                            <li><a href=""><i className="fab fa-TWITTER"></i></a></li>
                            <li><a href="https://opensea.io/CovetGallery"><i className="fab fa-OPEN SEA"></i></a></li>
                        </ul>
                        <h6>INTERESTED IN SHOWCASING YOUR ART?</h6>
                        <a href="#" className="link">Get in touch with us.</a> 
                    </div>
                    <div className="col-12">
                        <div className="footer-bar"> <span className="copyright">© 2022 Covet Gallery | All Rights Reserved</span></div>
                    </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Landing;
