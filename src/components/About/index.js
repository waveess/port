import React from "react";
import coverImage from '../../assets/cover/hero.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';


function About() {
    return (
        <section className="">
            <h1 id="about">Rawan Fatima</h1>
            <img src={coverImage} className="hero"  alt="cover" />

            <div className="row">

                <div className="col-7 ip-desc">
                    <h4>About me</h4>
                    <p>
                    A CS major, aspiring to become a software engineer. 
                    I took up web development to challenge my creative skills. 
                    It allows me create content to become a better problem solver.
                    </p>
                </div>


            </div>

        </section>
    )
}

export default About;