import React, { Component } from "react";
import "../css/index.scss";
import Menu from "../components/mobileMenu/mobileMenu";
import Links from '../components/Links/Links';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      hasMounted: false,
      email: "",
    };
  }

  injectScript = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.async = true;
      script.src = src;
      script.addEventListener("load", resolve);
      script.addEventListener("error", () => reject("Error loading script."));
      script.addEventListener("abort", () => reject("Script loading aborted."));
      document.head.appendChild(script);
    });
  };

  componentDidMount() {
    this.setState({
      hasMounted: true,
    });
  }

  componentDidUpdate(prevState) {
    if (this.state.hasMounted != prevState.hasMounted) {
      this.injectScript("https://platform.twitter.com/widgets.js");
    }
  }

  render() {
    return (
      <div className="pageWrapper">
        {this.state.hasMounted && (
          <div>
            <div id="outer-container">
              <Menu
                pageWrapId={"page-wrap"}
                outerContainerId={"outer-container"}
                right
              />
              <main id="page-wrap">
                <div className="center-wrapper">
                  <div className="right">
                    <h2>
                      <span>Mark Strigl</span> is a professional radio
                      personality who is currently available for voice work.
                    </h2>
                    <div className="social">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.facebook.com/mstrigl/"
                      >
                        <img src="facebook.png" alt="Facebook" />
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://twitter.com/talkingmetal"
                      >
                        <img src="twitter.png" alt="Twitter" />
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.instagram.com/talkingmetal/"
                      >
                        <img src="instagram.png" alt="Instagram" />
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.youtube.com/user/talkingmetal"
                      >
                        <img src="youtube.png" alt="YouTube" />
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.snapchat.com/add/TalkingMetal4U"
                      >
                        <img src="snapchat.png" alt="Snapchat" />
                      </a>
                    </div>
                    <div className="audio-clips">
                      <p>
                        Click below to listen to examples of Mark's voiceover
                        work.
                      </p>
                      <div className="container">
                        <iframe
                          style={{ border: 0 }}
                          className="audio"
                          src="https://drive.google.com/file/d/1V_DiuqM4wgeDFG7OxZPP84pSIBwZYNP9/preview?usp=sharing"
                          autoplay="false"
                        />
                        <iframe
                          className="audio"
                          src="https://drive.google.com/file/d/1XsFBzYBRblQEBYZMp4T2pkpa_DuHjAZS/preview?usp=sharing"
                          autoplay="false"
                        />
                      </div>
                    </div>
                    <div className="twitter">
                      <a
                        className="twitter-timeline"
                        data-height="200"
                        data-theme="dark"
                        href="https://twitter.com/talkingmetal?ref_src=twsrc%5Etfw"
                      ></a>
                    </div>
                  </div>
                  <div className="left">
                    <div className="header">Links</div>
                    <Links />
                  </div>
                </div>
                <div className="top">
                  <div className="mailchimp">
                    <link
                      href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css"
                      rel="stylesheet"
                      type="text/css"
                    />
                    <div
                      id="mc_embed_signup"
                      style={{ clear: "left", font: "14px" }}
                    >
                      <form
                        action="https://markstrigl.us7.list-manage.com/subscribe/post?u=f7c735174e04d427e7def0390&amp;id=4280e7ee8d"
                        method="post"
                        id="mc-embedded-subscribe-form"
                        name="mc-embedded-subscribe-form"
                        className="validate"
                        target="_blank"
                        noValidate
                      >
                        <div id="mc_embed_signup_scroll">
                          <label htmlFor="mce-EMAIL">
                            Subscribe to my weekly newsletter
                          </label>
                          <input
                            type="email"
                            name="EMAIL"
                            className="email"
                            id="mce-EMAIL"
                            placeholder="Email Address"
                            onChange={(e) =>
                              this.setState({ email: e.target.value })
                            }
                            required
                          />
                          <div
                            style={{ position: "absolute", left: "-5000px" }}
                            aria-hidden="true"
                          >
                            <input
                              type="text"
                              name="b_ed8f0573e78c0bef3ca5e7c03_23534c9323"
                              tabIndex="-1"
                              value=""
                            />
                          </div>
                          <div className="clear">
                            <input
                              type="submit"
                              value="Subscribe"
                              name="subscribe"
                              id="mc-embedded-subscribe"
                              className="button"
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Home;
