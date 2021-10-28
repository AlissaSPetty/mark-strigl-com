import React, { Component } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

const PageWrapper = styled.div`
.captainT {
    background-color: #000;
    color: #fff;
    font-family: Georgia, serif;
    font-size: 18px;
    padding: 0 5px;
    margin: 0 auto;
    max-width: 40em;
    line-height: 1.6em;
  }
  h1 {
    font-size: 3em;
    margin: 3rem 0;
  }
  h1, h2, h3 {
    font-family: sans-serif;
  }
  #content {
    align: center;
  }
  a {
    color: #ff0;
  }
  img { 
    display: block;
    margin: 0 auto;
  }
`;

class captaint extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <PageWrapper>
        <Helmet>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <title>Captain T</title>
          <meta name="description" content="Captain T" />
          <meta name="author" content="Derek Sivers" />
        </Helmet>
        <body>
          <section className="captainT" id="content">

            <h1>Captain T</h1>

            <img src="../images/CaptainT-USAliens.jpg" />

            <h2><a href="../mp3/CaptainT-1-WeAreTheWorld.mp3">We Are the World</a></h2>
            <audio src="../mp3/CaptainT-1-WeAreTheWorld.mp3" preload="none" controls="controls"></audio>

            <h2><a href="../mp3/CaptainT-2-AmericasFree.mp3">America's Free</a></h2>
            <audio src="../mp3/CaptainT-2-AmericasFree.mp3" preload="none" controls="controls"></audio>

            <h2><a href="../mp3/CaptainT-3-AquaBlue.mp3">Aqua Blue</a></h2>
            <audio src="../mp3/CaptainT-3-AquaBlue.mp3" preload="none" controls="controls"></audio>

            <h2><a href="../mp3/CaptainT-4-DisturbingAbduction.mp3">Disturbing Abduction</a></h2>
            <audio src="../mp3/CaptainT-4-DisturbingAbduction.mp3" preload="none" controls="controls"></audio>

            <h2><a href="../mp3/CaptainT-5-BannerIncredibleHulk.mp3">Banner (Incredible Hulk)</a></h2>
            <audio src="../mp3/CaptainT-5-BannerIncredibleHulk.mp3" preload="none" controls="controls"></audio>

            <h2><a href="../mp3/CaptainT-6-CovertIntelligence.mp3">Covert Intelligence</a></h2>
            <audio src="../mp3/CaptainT-6-CovertIntelligence.mp3" preload="none" controls="controls"></audio>

            <img src="../images/face.jpg" />

            <h4><a href="hollywood.pdf">Click here for a newly declassified message dated July 4th, 1997 from the late Shermy Sheldon AKA Hollywood Gazza T Jabbar, Minister of Propaganda for the New Frontier</a></h4>

            <img src="../images/montage.jpg" />


          </section>
        </body>
      </PageWrapper>
    );
  };
}

export default captaint;
