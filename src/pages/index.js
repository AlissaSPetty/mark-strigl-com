import React, { Component } from 'react';
import '../css/index.scss';

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
      <div>
      <div className='pageWrapper'>
        {this.state.hasMounted &&
          <div>
            <div onClick={this.animateMenu} className="menu-wrapper">
              <div className={`hamburger-menu ${this.state.toggle ? 'animate' : ''}`} />
            </div>
            <div className={`mobile-menu ${this.state.toggle ? 'show' : ''}`}>
              <div className="header">Links</div>
              <ul>
                <a target="_blank" rel="noopener noreferrer" href="https://www.siriusxm.com/channels/ozzys-boneyard">
                  <li>Listen to Mark Strigl on SXM</li>
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
                <a target="_blank" rel="noopener noreferrer" href="https://markstrigl.net/captaint/">
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
            <div className='container'>
              <h2><span>Mark Strigl</span> is a professional radio personality who is currently available for voice work.</h2>
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
                <div className="twitter">
                  <a className="twitter-timeline" data-height="200" data-theme="dark" href="https://twitter.com/talkingmetal?ref_src=twsrc%5Etfw"></a>
                </div>
              </div>
              <div className="left">
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
                  <a target="_blank" rel="noopener noreferrer" href="https://markstrigl.net/captaint/">
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
              <p>© 2023 Mark Strigl</p>
            </div>
        </div>
      </div>
      }
      </div>
      </div>
    );
  };
}

export default Home;
