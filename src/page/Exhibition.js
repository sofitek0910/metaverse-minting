import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../redux/blockchain/blockchainActions";
import { fetchData } from "../redux/data/dataActions";
import swal from "sweetalert";

function Exhibition() {
    const dispatch = useDispatch();
    const blockchain = useSelector((state) => state.blockchain);
    const data = useSelector((state) => state.data);
    const [claimingNft, setClaimingNft] = useState(false);
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

    const claimNFTs = () => {
        let cost = CONFIG.WEI_COST;
        let gasLimit = CONFIG.GAS_LIMIT;
        let totalCostWei = String(cost * mintAmount);
        let totalGasLimit = String(gasLimit * mintAmount);
        setClaimingNft(true);
        blockchain.smartContract.methods
        .mintNFT()
        .send({
            gasLimit: String(totalGasLimit),
            to: CONFIG.CONTRACT_ADDRESS,
            from: blockchain.account,
            value: totalCostWei,
        })
        .once("error", (err) => {
            console.log(err);
            swal("Sorry, something went wrong please try again later.", "", "error");
            setClaimingNft(false);
        })
        .then((receipt) => {
            console.log(receipt);
            swal(
            `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`, "", "success"
            );
            setClaimingNft(false);
            dispatch(fetchData(blockchain.account));
        });
    };

    const getData = () => {
        if (blockchain.account !== "" && blockchain.smartContract !== null) {
        dispatch(fetchData(blockchain.account));
        navigate('/test-mint');
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
                    <figure> <img src="./assets/images/preloader.gif" alt="Image"/> </figure>
                    <span>Site Loading</span> </div>
                </div>
                <div className="page-transition">
                    <div className="layer"></div>
                </div>
                <nav className="site-navigation">
                    <div className="layer"></div>
                    <div className="inner">
                        <ul data-splitting>
                            <li><a href="index-carousel.html">MINT</a> <small>Mint here after viewing the gallery</small></li>
                            <li><a href="about.html">ABOUT US</a> <small>About Covet Gallery</small> </li>
                            <li><a href="showcases.html">FEATURED ARTIST</a> <small>Selected Artists for upcoming exhibition</small> </li>
                            <li><a href="blog.html">BLOG</a> <small>Recent posts</small> </li>
                            <li><a href="contact.html">CONTACT</a> <small>Contact Us</small> </li>
                        </ul>
                    </div>
                </nav>
                <div className="social-media">
                    <div className="layer"> </div>
                    <div className="inner">
                        <h5>Social Share </h5>
                        <ul>
                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                            <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                            <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="all-cases">
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
                </div>
                <main>
                <aside className="left-side">
                    <div className="logo"> <a href="/"><img src="./assets/images/logo.png" alt="Image"/></a> </div>
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
                <div className="all-cases-link"> <span>TEST EXHIBITION</span> <b>+</b> </div>
                <header className="carousel-hero">
                    <div className="carousel-slider">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide" data-background="./assets/images/testmint_1.jpg">
                                <div className="inner"><h2></h2> 
                                    01
                                </div>
                            </div>
                            <div className="swiper-slide" data-background="./assets/images/testmint_2.jpg">
                                <div className="inner"><h2></h2> 
                                    02 
                                </div>
                            </div>
                            <div className="swiper-slide" data-background="./assets/images/testmint_3.jpg">
                                <div className="inner"><h2></h2> 
                                    03
                                </div>
                            </div>
                        </div>
                        <div className="slide-progress"> <span>01</span>
                            <div className="swiper-pagination"></div>
                            <span>03</span> </div>
                        <div className="swiper-button-prev">PREV</div>
                        <div className="swiper-button-next">NEXT</div>
                    </div>
                </header>
                <section className="intro">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 wow fadeInUp" data-splitting>
                            <h3 className="section-title">HOW WE MAKE <br/>
                                USER EXPERIENCES</h3>
                            <a href="#">hello@tourog.com</a> </div>
                            <div className="col-lg-7 wow fadeInUp" data-splitting>
                            <p>You can't use up creativity. The more you use, the 
                                more you have in your signifant mind.</p>
                            <h6>Salvador Dali</h6>
                            <small>Digital Artisit</small> <b>25</b>
                            <h4>YEARS OF<br/>
                                DIGITAL EXPERIENCE</h4>
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
                                        <figure className="reveal-effect masker wow fadeInUp"> <img src="./assets/images/office01.jpg" alt="Image"/>
                                        <figcaption>
                                            <h6> HEADQUARTOR OF TOUROG</h6>
                                        </figcaption>
                                        </figure>
                                    </div>
                                    <div className="swiper-slide">
                                        <figure> <img src="./assets/images/office02.jpg" alt="Image"/>
                                        <figcaption>
                                            <h6> TORONTO OFFICE</h6>
                                        </figcaption>
                                        </figure>
                                    </div>
                                    <div className="swiper-slide">
                                        <figure> <img src="./assets/images/office03.jpg" alt="Image"/>
                                        <figcaption>
                                            <h6> HEADQUARTOR OF TOUROG</h6>
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
                                <h3 className="section-title">THE THINGS<br/>
                                    WE ARE ABLE TO DO</h3>
                            </div>
                            <div className="col-lg-3 col-md-4 wow fadeInLeft" data-splitting>
                                <div className="content-block">
                                    <figure> <img src="./assets/images/icon01.png" alt="Image"/> </figure>
                                    <h6>DIGITAL PRODUCTS</h6>
                                    <ul>
                                    <li>Digital Branding</li>
                                    <li>Web & Mobile Sites</li>
                                    <li>User Interface Design</li>
                                    <li>Responsive Techs</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 wow bounceIn" data-splitting>
                                <div className="content-block selected">
                                    <figure> <img src="./assets/images/icon02.png" alt="Image"/> </figure>
                                    <h6>UI-UX DESIGN</h6>
                                    <ul>
                                    <li>Digital Strategy</li>
                                    <li>User Experience Design</li>
                                    <li>User Interface Design</li>
                                    <li>Mobile Sites</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 wow fadeInRight" data-splitting>
                                <div className="content-block">
                                    <figure> <img src="./assets/images/icon03.png" alt="Image"/> </figure>
                                    <h6>WEB DEVELOPMENT</h6>
                                    <ul>
                                    <li>Custom Platform</li>
                                    <li>Back-End Executions</li>
                                    <li>Interface Apps</li>
                                    <li>Mobile Systems</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="works">
                    <ul>
                        <li>
                            <a href="./assets/images/works01.jpg" data-fancybox><figure className="reveal-effect masker wow"> <img src="./assets/images/works01.jpg" alt="Image"/> </figure></a>
                            <div className="caption wow" data-splitting>
                            <h3>Darkness Vehicle</h3>
                            <small>DIGITAL, PRINT, DEVELOPMENT</small> </div>
                        </li>
                        <li>
                            <a href="./assets/images/works01.jpg" data-fancybox><figure className="reveal-effect masker wow"> <img src="./assets/images/works02.jpg" alt="Image"/> </figure></a>
                            <div className="caption wow" data-splitting>
                            <h3>Goddes Cover Art</h3>
                            <small>PRINT, DIGITAL, DEVELOPMENT</small></div>
                        </li>
                        <li>
                            <a href="./assets/images/works01.jpg" data-fancybox><figure className="reveal-effect masker wow"> <img src="./assets/images/works03.jpg" alt="Image"/></figure></a>
                            <div className="caption wow" data-splitting>
                            <h3>Hard Employee</h3>
                            <small>WEB, DIGITAL, DEVELOPMENT</small> </div>
                        </li>
                        <li>
                            <a href="./assets/images/works01.jpg" data-fancybox><figure className="reveal-effect masker wow"><img src="./assets/images/works04.jpg" alt="Image"/> </figure></a>
                            <div className="caption wow" data-splitting>
                            <h3>Sweet Berry Pie</h3>
                            <small>DIGITAL, PRINT, DEVELOPMENT</small> </div>
                        </li>
                        <li>
                            <a href="./assets/images/works01.jpg" data-fancybox><figure className="reveal-effect masker wow"><img src="./assets/images/works05.jpg" alt="Image"/> </figure></a>
                            <div className="caption wow" data-splitting>
                            <h3>King of Roosters</h3>
                            <small>PRINT, DIGITAL, DEVELOPMENT</small> </div>
                        </li>
                        <li>
                            <a href="./assets/images/works01.jpg" data-fancybox><figure className="reveal-effect masker wow"><img src="./assets/images/works06.jpg" alt="Image"/></figure></a>
                            <div className="caption wow" data-splitting>
                            <h3>Primero  Car</h3>
                            <small>WEB, DIGITAL, DEVELOPMENT</small> </div>
                        </li>
                    </ul>
                </section>
                <section className="clients">
                    <div className="container">
                        <div className="row"> <div className="col-lg-5 wow" data-splitting>
                            <h3 className="section-title">AGENSY PROUD<br/>
                                IS QUALITY OF<br/>
                                PARTNERS</h3>
                            </div>
                            <div className="col-lg-7">
                            <ul>
                                <li className="reveal-effect masker wow"> <img src="./assets/images/logo01.png" alt="Image"/> </li>
                                <li className="reveal-effect masker wow"> <img src="./assets/images/logo02.png" alt="Image"/> </li>
                                <li className="reveal-effect masker wow"> <img src="./assets/images/logo03.png" alt="Image"/> </li>
                                <li className="reveal-effect masker wow"> <img src="./assets/images/logo04.png" alt="Image"/> </li>
                                <li className="reveal-effect masker wow"> <img src="./assets/images/logo05.png" alt="Image"/> </li>
                                <li className="reveal-effect masker wow"> <img src="./assets/images/logo06.png" alt="Image"/> </li>
                                <li className="reveal-effect masker wow"> <img src="./assets/images/logo07.png" alt="Image"/> </li>
                                <li className="reveal-effect masker wow"> <img src="./assets/images/logo08.png" alt="Image"/> </li>
                                <li className="reveal-effect masker wow"> <img src="./assets/images/logo09.png" alt="Image"/> </li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </section>
                </main>
                <footer className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <ul>
                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                                    <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                </ul>
                                <h6>LET’S HAVE A TALK ABOUT YOUR PROJECT.</h6>
                                <h2>Need more information or want <br/>
                                to get in touch?</h2>
                                <a href="#" className="link">Get in touch</a> </div>
                            <div className="col-12">
                                <div className="footer-bar"> <span className="copyright">© 2019 Tourog | All Rights Reserved</span> <span className="creation">Site created by <a href="#">Themezinho</a></span> </div>
                            </div>
                        </div>
                    </div>
                </footer>
        </div>
    );
}

export default Exhibition;
