import React from "react";
import pro from "../Assets/project.svg";
import web from "../Assets/website.png";
import front from "../Assets/frontend.png";
import back from "../Assets/backend.png";
import RecipeApp from "../Images/RecipeApp.jpg";
import StackOverflow from "../Images/StackOverflow.jpg";
import ThirumanaMaalaiMatrimony from "../Images/ThirumanaMaalaiMatrimony.jpg";
import Marriagehallbooking from "../Images/Marriagehallbooking.jpg";

const Projects = () => {


    return (
        <div className="skill">
            <h3 className="fw-bold text-center">
                <img alt="profile" src={pro} className="me-2 mb-2" />
                PROJECTS
            </h3>

            <div className="grid grid-3 row mb-5">
                <div className="col-lg-4 col-md-6  mt-3">
                    <div className="card project-card">
                        <img
                            alt="profile"
                            src={RecipeApp}
                            className="card-img-top  img-fluid"
                        />
                        <div className="card-body">
                            <h6 className="card-title fs-5">RECIPE KEEPER APP - MERN</h6>
                            <p className="card-text fw-light fs-6 ">
                                A Recipe Keeper App is a digital platform designed to help users organize, store, and manage their collection of recipes. It serves as a convenient solution for individuals who love cooking,
                                offering a range of features to enhance the culinary experience.
                            </p>
                            <div className="text-start fs-6">
                                <a
                                    href="https://github.com/prakashlohanathan/Recipe-frontend"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <button className="button">
                                        <img alt="profile" src={front} className="code-img" />
                                        FrontEnd
                                    </button>
                                </a>

                                <a
                                    href="https://github.com/prakashlohanathan/Recipe-Backend"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <button className="button">
                                        <img alt="profile" src={back} className="code-img" />
                                        BackEnd
                                    </button>
                                </a>

                                <a
                                    href=" https://recipeapp-prakash.netlify.app/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <button className="button">
                                        <img alt="profile" src={web} className="code-img-web" />
                                        Website
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6  mt-3">
                    <div className="card project-card">
                        <img
                            alt="profile"
                            src={StackOverflow}
                            className="card-img-top  img-fluid "
                        />
                        <div className="card-body">
                            <h6 className="card-title fs-5">STACK OVERFLOW CLONE - MERN</h6>
                            <p className="card-text fw-light fs-6 ">
                                Stack Overflow is a question and answer community platform that primarily focuses on
                                programming and technology-related topics.
                            </p>
                            <div className="ms-3">
                                <a
                                    href="https://github.com/prakashlohanathan/StackOverflowClone-FE"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <button className="button">
                                        <img alt="profile" src={front} className="code-img" />
                                        FrontEnd
                                    </button>
                                </a>

                                <a
                                    href="https://github.com/prakashlohanathan/Stackoverflow-backend"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <button className="button">
                                        <img alt="profile" src={back} className="code-img" />
                                        BackEnd
                                    </button>
                                </a>

                                <a
                                    href="https://stackoverflow-prakash.netlify.app/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <button className="button">
                                        <img alt="profile" src={web} className="code-img-web" />
                                        Website
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6  mt-3">
                    <div className="card project-card">
                        <img
                            alt="profile"
                            src={ThirumanaMaalaiMatrimony}
                            className="card-img-top  img-fluid "
                        />
                        <div className="card-body">
                            <h6 className="card-title fs-5">THIRUMANA MAALAI MATRIMONY - MERN</h6>
                            <p className="card-text fw-light fs-6 ">
                            A matrimonial or matrimonial site is an online platform designed to facilitate the process of finding a life partner for individuals seeking marriage. These platforms aim to connect individuals based on their personal preferences, 
                            cultural background, interests, and other compatibility factors.
                            </p>
                            <div className="ms-3">
                                <a
                                    href="https://github.com/prakashlohanathan/Thirumana-Maalai-Mantrimony-Frontend"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <button className="button">
                                        <img alt="profile" src={front} className="code-img" />
                                        FrontEnd
                                    </button>
                                </a>

                                <a
                                    href="https://github.com/prakashlohanathan/Thirumana-maalai-Matrimony-Backend"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <button className="button">
                                        <img alt="profile" src={back} className="code-img" />
                                        BackEnd
                                    </button>
                                </a>

                                <a
                                    href="https://prakash-thirumanamaalai.netlify.app/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <button className="button">
                                        <img alt="profile" src={web} className="code-img-web" />
                                        Website
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6  mt-3">
                    <div className="card project-card">
                        <img
                            alt="profile"
                            src={Marriagehallbooking}
                            className="card-img-top  img-fluid "
                        />
                        <div className="card-body">
                            <h6 className="card-title fs-5">HALL BOOKING - MERN</h6>
                            <p className="card-text fw-light fs-6 ">
                            Providing users authentication for login , sigup and if they
                            are forgot the password they can also change .
                            </p>
                            <div className="ms-3">
                                <a
                                    href="https://github.com/prakashlohanathan/Hall-Booking-App-FrontEnd"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <button className="button">
                                        <img alt="profile" src={front} className="code-img" />
                                        FrontEnd
                                    </button>
                                </a>

                                <a
                                    href="https://github.com/prakashlohanathan/ResetPasswordBE"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <button className="button">
                                        <img alt="profile" src={back} className="code-img" />
                                        BackEnd
                                    </button>
                                </a>

                                <a
                                    href="https://prakash-hallbooking.netlify.app/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <button className="button">
                                        <img alt="profile" src={web} className="code-img-web" />
                                        Website
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
