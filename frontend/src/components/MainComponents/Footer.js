import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer class="bg-dark tex-white pt-5 pb-4">
        <div class="container text-center text-md-left">
          <div class="row text-center text-md-left">
            <div class="col-md-6 col-lg-6 col-xl-3 mx-auto mt-3">
              <div class="section">
                <h1 class="text-uppercase mb-4 font-weight-bold text-warning">
                  ADDRESS
                </h1>
                <p>
                  <GoLocation /> Sanjivani College of Engineering,
                  At. Sahajanandnagar, Post. Shingnapur Tal. Kopargaon Dist. Ahmednagar,
                  Maharashtra State, India PIN 423603
                </p>
              </div>
            </div>
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <div class="section">
                <h1 class="text-uppercase mb-4 font-weight-bold text-warning">
                  Useful Links
                </h1>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/userlogin/location">Location</NavLink>
                </li>
                <li>
                  <NavLink to="/userlogin/userbusroute">Routes</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </div>
            </div>
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <div class="section">
                <h1 class="text-uppercase mb-4 font-weight-bold text-warning">
                  Contact
                </h1>
                <p>
                  <AiFillHome /> Kopergaon-423603, MH, India
                </p>
                <p>
                  <MdEmail /> info@stvincentngp.edu.in
                </p>
                <p>
                  <BsFillTelephoneFill /> tel: +91 9323683433
                </p>
              </div>
            </div>

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 g-map">
              <h1 class="text-uppercase mb-4 font-weight-bold text-warning">
                Map View
              </h1>
              <div class="row">
                <iframe
                  src=""
                  width="400"
                  height="300"
                  style={{ border: "0" }}
                  allowfullscreen="true"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          <hr className="divider mb-2" />

          <div class="row align-items-center">
            <div class="col-md-7 col-lg-8 copyright">
              <p>Copyright © 2024&nbsp; &nbsp; </p>
              <p class="sbm text-warning"> SBM</p>
            </div>

            <div class="col-md-5 col-lg-4">
              <div class="text-center text-md-right socials">
                <ul class="list-unstyled list-inline">
                  <li class="list-inline-item">
                    <a href="#" class="btn-floating btn-sm text-white social">
                      <FaFacebook />
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="btn-floating btn-sm text-white social">
                      <FaLinkedin />
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="btn-floating btn-sm text-white social">
                      <SiGmail />
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="btn-floating btn-sm text-white social">
                      <BsGithub />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
