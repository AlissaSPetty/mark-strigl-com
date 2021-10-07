import React, { Component } from 'react';
import styled from 'styled-components';

const PageWrapper = styled.div`
  height: calc(100vw * (924 / 1980));
  font-family: 'Oswald', sans-serif;
  width: 100%;
  .menu-wrapper {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    width: 4rem;
    cursor: pointer;
    @media only screen and (min-width: 1200px) {
      display: none;
    }
    .hamburger-menu,
    .hamburger-menu:after,
    .hamburger-menu:before {
      width: 4rem;
      height: 0.5rem;
    }
    .hamburger-menu {
      background: rgba(255, 255, 255, 1);
      margin-left: -3rem;
      position: absolute;
      transform: translateY(2.5rem);
      transition: all 0ms 300ms;
      top: 0;
      width: 100%;
      &.animate {
        background: rgba(255, 255, 255, 0); 
      }
      &:before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 1rem;
        background: rgba(255, 255, 255, 1);
        transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
      }
      &:after {
        content: "";
        position: absolute;
        left: 0;
        top: 1rem;
        background: rgba(255, 255, 255, 1);
        transition: top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
      }
      &.animate {
        &:after {
          top: 0;
          transform: rotate(45deg);
          transition: top 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);;
        }
        &:before {
          bottom: 0;
          transform: rotate(-45deg);
          transition: bottom 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);
        }
      }
    }
  }
  .mobile-menu {
    display: none;
    overflow: hidden;
    transition: 0.5s ease-in-out;
    transform: translateX(50%);
    z-index: 999;
    @media only screen and (max-width: 1200px) {
      @keyframes slide {
        100% { right: 0rem; }
      }
      &.show {
        animation: slide 0.5s forwards;
        background: black;
        right: -50rem;
        display: flex;
        flex-direction: column;
        position: absolute;
        width: 30vw;
        height: 100vh;
        transform: translateX(0);
        .header, .buttons, li {
          margin-left: 10rem;
        }
      }
    }
    @media only screen and (max-width: 900px) {
      &.show {
        width: 50vw;
      }
    }
    @media only screen and (max-width: 500px) {
      &.show {
        width: 100vw;
        .header, .buttons, li {
          margin-left: 5rem;
        }
      }
    }
  }
  .center-wrapper {
    background: url('inner-BG.jpg') center / cover no-repeat;
    display: flex;
    align-items: center;
    height: 92.4rem;
    margin: 6rem auto 2rem;
    max-width: 160rem;
    overflow: hidden;
    @media only screen and (min-width: 1800px) {
      min-width: calc(100vw * (924 / 1980));
    }
    @media only screen and (max-width: 1200px) {
      height: auto;
      flex-direction: column-reverse;
    }
  }
  .right, .left {
    display: flex;
    flex-direction: column;
    max-width: 40rem;
    width: 33%;
    @media only screen and (max-width: 1200px) {
      flex-direction: row;
      max-width: initial;
      width: 100%;
    }
  }
  .right {
    .social {
      display: flex;
      justify-content: center;
      padding: 0 3rem;
      width: 100%;
      @media only screen and (max-width: 1200px) {
        display: flex;
        justify-content: flex-start;
        left: 0;
        padding: 0 3rem;
        position: absolute;
        top: 1rem;
        width: 50%;
      }
      a {
        background: white;
        border: 1px solid #000;
        border-radius: 2rem;
        height: 1.6rem;
        margin: 0.5rem;
        padding: 0.5rem;
        width: 1.6rem;
        transition: 0.25s ease-in-out;
        &:hover {
          transform: scale(1.1);
        }
      }
    }
    .tr-podcast, .tm-podcast, .twitter {
      padding: 0.5rem 3rem;
      width: 100%;
      @media only screen and (max-width: 1200px) {
        padding: 1rem;
      }
    }
    @media only screen and (max-width: 1200px) {
      .podcasts, .twitter {
        margin: 2rem;
        width: 50%;
      }
      .twitter-timeline {
        min-height: 40rem !important;
      }
    }
    @media only screen and (max-width: 800px) {
      flex-wrap: wrap;
      margin: 0 auto;
      .podcasts, .twitter {
        margin: 0 auto;
        width: 80%;
      }
    }
  }
  .logo {
    align-items: center;
    display: flex;
    height: calc(100vw * (924 / 1980));
    justify-content: center;
    max-width: 80rem;
    padding: 10rem;
    width: 100%;
    @media only screen and (max-width: 1200px) {
      background: black;
      height: 30rem;
      margin-top: 0;
      padding: 0 20rem;
      width: 100%;
    }
    @media only screen and (max-width: 800px) {
      height: 20rem
    }
    img {
      width: calc(100vw * (924 / 1980));
      height: auto;
      min-width: 30rem;
    }
  }
  .left {
    @media only screen and (max-width: 1200px) {
      display: none;
    }
  }
  .header {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 2.75rem;
    letter-spacing: 0.1rem;
    margin: 2rem 0 1rem;
    text-align: left;
    width: 100%;
    &:after {
      background: #fff;
      content: "";
      display: block;
      height: 0.5rem;
      margin-top: 1rem;
      width: 10rem;
    }
  }
  .buttons {
    display: flex;
    flex-direction: column;
    width: 100%;
    a {
      margin: 0.5rem 0;
    }
  }
  ul {
    width: 100%;
    li {
      background: black;
      color: white;
      list-style-type: '• ';
      text-align: left;
      transition: 0.5s ease-in-out;
      padding: 0.35rem 0;
      &:hover {
        color: var(--red);
        text-decoration: underline;
      }
    }
  }
  .footer {
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    max-width: 160rem;
    margin: 0 auto;
    position: relative;
    width: 100%;
    @media only screen and (max-width: 1200px) {
      flex-direction: column;
    }
    .mailchimp {
      @media only screen and (max-width: 600px) {
        margin-top: 3rem;
      }
    }
    .copyright {
      p {
        padding: 1rem 0;
        font-weight: bold;
      }
    }
    #mc_embed_signup {
      #mc_embed_signup_scroll {
        align-items: center;
        display: flex;
        justify-content: center;
        width: 25rem;
        label {
          min-width: 23rem;
          padding-right: 0.5rem;
          width: 100%;
          @media only screen and (max-width: 600px) {
          position: absolute;
          padding: 0 0 0 1rem;
          top: -1.6rem;
          }
        }
        input.email {
          min-width: 20rem;
        }
        .button {
          background: black;
          border: 0.5px solid white;
        }
      }
    }
  }
`;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false, 
      hasMounted: false,
      email: ''
    };
  }

  animateMenu = () => {
    if (this.state.toggle === false) {
      this.setState({
        toggle: true
      })
    } else {
      this.setState({
        toggle: false
      })
    }
  }

  injectScript = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.async = true;
      script.src = src;
      script.addEventListener('load', resolve);
      script.addEventListener('error', () => reject('Error loading script.'));
      script.addEventListener('abort', () => reject('Script loading aborted.'));
      document.head.appendChild(script);
    });
  }

  componentDidMount(){
    this.setState({
      hasMounted: true
    })
  }

  componentDidUpdate(prevState) {
    if (this.state.hasMounted != prevState.hasMounted) {
      console.log('test')
      this.injectScript('https://platform.twitter.com/widgets.js')
    }
  }

  render() {
    return (
      <PageWrapper>
        {this.state.hasMounted &&
          <div>
            <div onClick={this.animateMenu} className="menu-wrapper">
              <div className={`hamburger-menu ${this.state.toggle ? 'animate' : ''}`} />
            </div>
            <div className={`mobile-menu ${this.state.toggle ? 'show' : ''}`}>
              <div className="header">Support</div>
              <div className="buttons">
                <a target="_blank" rel="noopener noreferrer" href="https://www.patreon.com/bePatron?u=5540803&redirect_uri=https%3A%2F%2Ftalkingrock.net%2F&utm_medium=widget">
                  <img src="patreon.png" alt="Patreon" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.paypal.com/paypalme/MarkStrigl">
                <img src="paypal.png" alt="PayPal" />
                </a>
              </div>
              <div className="header">Links</div>
              <ul>
                <a target="_blank" rel="noopener noreferrer" href="https://omny.fm/shows/talking-with-mark-strigl/playlists">
                  <li>Talking with Mark Strigl</li>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://art19.com/shows/talking-metal">
                  <li>Talking Metal Podcast</li>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/talkingmetal">
                  <li>Talking Metal Videos</li>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="http://talkingrock.cnjradio.com">
                  <li>Talking Rock Podcast</li>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="http://www.captain.com">
                  <li>The Mysterious Captain T</li>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/space.pony/">
                  <li>Emily Strigl on Instagram</li>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://vimeo.com/markstrigl">
                  <li>Other Creative Content <br /> with Mark Strigl</li>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mark-strigl-b091ba117/">
                  <li>Mark Strigl on LinkedIn</li>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.mattersmagazine.com/post/you-say-you-want-a-podcast-revolution-by-donny-levit">
                  <li>2021 Article On Mark Strigl</li>
                </a>
              </ul>
            </div>
            <div className="center-wrapper">
              <div className="right">
                <div className="social">
                  <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/mstrigl/"><img src="facebook.png" alt="Facebook" /></a>
                  <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/talkingmetal"><img src="twitter.png" alt="Twitter" /></a>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/talkingmetal/"><img src="instagram.png" alt="Instagram" /></a>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/user/talkingmetal"><img src="youtube.png" alt="YouTube" /></a>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.snapchat.com/add/TalkingMetal4U"><img src="snapchat.png" alt="Snapchat" /></a>
                </div>
                <div className="podcasts">
                  <div className="tm-podcast">
                    <iframe src="https://art19.com/shows/talking-metal/embed?playlist_type=latest" style={{ width: "100%", height: "200px", border: "0" }} scrolling="no"></iframe>
                  </div>
                  <div className="tr-podcast">
                    <iframe frameBorder="0" height="200" scrolling="no" src="https://embed.radiopublic.com/e?if=talking-rock-WaVKqZ" width="100%"></iframe>
                  </div>
                </div>
                <div className="twitter">
                  <a className="twitter-timeline" data-height="200" data-theme="dark" href="https://twitter.com/talkingmetal?ref_src=twsrc%5Etfw"></a>
                </div>
              </div>
              <div className="logo">
                <img src="logo.png" alt="Mark Strigl" />
              </div>
              <div className="left">
                <div className="header">Support</div>
                <div className="buttons">
                  <a target="_blank" rel="noopener noreferrer" href="https://www.paypal.com/paypalme/MarkStrigl">
                    <img src="paypal.png" alt="paypal" />
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.patreon.com/bePatron?u=5540803&redirect_uri=https%3A%2F%2Ftalkingrock.net%2F&utm_medium=widget">
                    <img src="patreon.png" alt="patreon" />
                  </a>
                </div>
                <div className="header">Links</div>
                <ul>
                  <a target="_blank" rel="noopener noreferrer" href="https://omny.fm/shows/talking-with-mark-strigl/playlists">
                    <li>Talking with Mark Strigl</li>
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="https://art19.com/shows/talking-metal">
                    <li>Talking Metal Podcast</li>
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/talkingmetal">
                    <li>Talking Metal Videos</li>
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="http://talkingrock.cnjradio.com">
                    <li>Talking Rock Podcast</li>
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="https://captaint.com/">
                    <li>The Mysterious Captain T</li>
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/space.pony/">
                    <li>Emily Strigl on Instagram</li>
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="https://vimeo.com/markstrigl">
                    <li>Other Creative Content <br /> with Mark Strigl</li>
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mark-strigl-b091ba117/">
                    <li>Mark Strigl on LinkedIn</li>
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.mattersmagazine.com/post/you-say-you-want-a-podcast-revolution-by-donny-levit">
                    <li>2021 Article On Mark Strigl</li>
                  </a>
                </ul>
              </div>
          </div>
          <div className="footer">
            <div className="mailchimp">
              <link href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css" rel="stylesheet" type="text/css" />
                <div id="mc_embed_signup" style={{ background: "#000", clear: "left", font: "14px" }}>
                <form action="https://markstrigl.us7.list-manage.com/subscribe/post?u=f7c735174e04d427e7def0390&amp;id=4280e7ee8d" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" noValidate>
                  <div id="mc_embed_signup_scroll">
                    <label htmlFor="mce-EMAIL" >Subscribe to my weekly newsletter</label>
                    <input type="email" name="EMAIL" className="email" id="mce-EMAIL" placeholder="Email Address" onChange={(e)=>this.setState({ email: e.target.value})} required />
                    <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
                      <input type="text" name="b_ed8f0573e78c0bef3ca5e7c03_23534c9323" tabIndex="-1" value="" />
                    </div>
                    <div className="clear">
                      <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"/>
                    </div>
                  </div>
              </form>
            </div>
            </div>
            <div className="copyright">
              <p>© 2021 Mark Strigl</p>
            </div>
        </div>
      </div>
      }
      </PageWrapper>
    );
  };
}

export default Home;
