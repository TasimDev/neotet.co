import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

export default function Page() {
    return <>
        <section className="proccess">

            <div className="proccess__title container proccess__container">
                <span>Get in touch with us</span>
                <h2 className="title">Start getting exceptional quality designs<br /> and powerful optimization</h2>
            </div>
            <div className="proccess__about">
                <div className="container proccess__container">
                    <div className="title">
                        <span>Dedicated Team</span>
                        <h2>The Power of a Dedicated Team</h2>
                        <p>
                            Imagine having a group of talented individuals completely focused on your project. That's what a
                            dedicated web development team is all about. At Neotet, we've assembled a team of experts, and
                            they're
                            here to turn your web dreams into reality.
                        </p>
                    </div>
                    <div className="image">
                        <Image
                            src="/team/test-proccess-1.jpg"
                            alt="Description of the image"
                            className="image-profile"
                            width={1100}
                            height={500}
                        />
                    </div>
                </div>
            </div>
            <div className="proccess__proccesing">
                <div className="container proccess__container">
                    <div className="phase phase-1">
                        <div className="number">
                            <img src="/svg/excited-5111.svg" alt="excited/svg" />
                        </div>
                        <div className="text">
                            <div className="title">Project Planing & Kick-off</div>
                            <p>
                                You start by talking about your requirements and preferences with Project
                                Managers. They will help you with an understanding of the situation and a clear idea about
                                your project.
                            </p>
                        </div>
                    </div>
                    <div className="phase phase-2">
                        <div className="number">
                            <img src="/svg/vector-4754.svg" alt="design/svg" />
                        </div>
                        <div className="text">
                            <div className="title">Designing & Prototyping </div>
                            <p>
                                This is the most interesting part in which you will participate. We will help you in
                                choosing the design and concept of your digital product. You participate in every part of
                                the project by talking with our UI/UX specialist. You will also find out here more about
                                your
                                project, prepare the project scope, budget, and timeline for your review.
                            </p>
                        </div>
                    </div>
                    <div className="phase phase-3">
                        <div className="number">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-code-slash"
                                viewBox="0 0 16 16">
                                <path
                                    d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                            </svg>
                        </div>
                        <div className="text">
                            <div className="title">Development & Testing</div>
                            <p>
                                Our developers are ready for new challenges. They will make your product ready to use in any
                                plan.
                            </p>
                        </div>
                    </div>
                    <div className="phase phase-4">
                        <div className="number"><img src="/svg/rocket-launch-9976.svg" alt="rocket/svg" /></div>
                        <div className=" text">
                            <div className="title">Deployment</div>
                            <p>
                                After all these stages, your product will be ready for Deployment. We will help you choose
                                your right
                                hosting and product placement.
                            </p>
                        </div>
                    </div>
                    <div className="phase phase-5">
                        <div className="number"><img src="/svg/winner-cup-7827.svg" alt="winnder/svg" /></div>
                        <div className="text">
                            <div className="title">Care & Optimization</div>
                            <p>
                                Once your product is ready, it's our responsibility to take care of it, optimize it and fix
                                bugs. Website meintance, SEO and UX optimization.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        <section id="contact">
            <div className="container">
                <div className="wrapper">
                    <header>
                        <h3>Let us take your business
                            further than it has ever been.
                        </h3>
                    </header>

                    <Link href="/contact" className="btn contact-btn"><div className="text">Contact Us</div> <span className="icon"> <FaAngleRight /></span></Link>

                </div>

            </div>
        </section>
    </>;
}