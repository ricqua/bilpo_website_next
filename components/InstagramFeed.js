import React, { Component } from "react";
import Image from "next/image";

class InstagramFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feeds: [],
      isError: "",
      isLoaded: false,
    };
  }

  componentDidMount() {
    let token =
      "IGQVJVdS1sZAFhBNzV6ckpldEFjWnQ5bWRNMXAtV3FRVVdiS2NjWTQzZAkdhdkJPUERMOU5qbTV0OEctN2h1YlFGZAV9KamlLakNUNTd2cGxVeUFXZAHI4RkdPMEtpREthdTlWcDlkUlpKVkRtVGpLcXhLZAQZDZD";
    let url = `https://graph.instagram.com/me/media?fields=media_count,caption,media_type,permalink,media_url&&access_token=${token}`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.hasOwnProperty("error")) {
          //   console.log("Success:", data);
          this.setState({
            isLoaded: true,
            isError: true,
          });
        } else {
          // console.log("Success:", data);
          this.setState({
            isLoaded: true,
            feeds: data.data,
            isError: false,
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        this.setState({
          isLoaded: true,
          isError: true,
          error,
        });
      });
  }

  render() {
    const { isError, isLoaded, feeds } = this.state;

    if (isError) {
      return (
        <div className="instagram__errorMessage">
          <p>Instagram images not loading.</p>
          <a href="https://www.instagram.com/bilpofood/">
            Bilpo Instragram account
          </a>
        </div>
      );
    } else if (!isLoaded) {
      return <div> Loading... </div>;
    } else {
      // console.log(feeds);
      return (
        <div className="instagramItems">
          {feeds
            .slice(this.props.counterStart, this.props.counterEnd)
            .map((feed, index) => (
              <div key={index} className="instagramItem">
                <a
                  key={index}
                  // href={feed.permalink}
                  className="ig-instagram-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  {feed.media_type === "IMAGE" ||
                  feed.media_type === "CAROUSEL_ALBUM" ? (
                    <img
                      className="instagramImg"
                      key={index}
                      src={feed.media_url}
                      alt="description"
                    />
                  ) : (
                    <video
                      className="instagramImg"
                      key={index}
                      src={feed.media_url}
                      type="video/mp4"
                    ></video>
                  )}

                  <div className="instagramIcon">
                    <p>{feed.caption}</p>
                    <div className="instagram-count-item">
                      <span className="icon">
                        {/* <svg height="18" viewBox="0 0 512 512" width="18">
                          <path
                            fill="currentColor"
                            d="m256 386c-71.683 0-130-58.317-130-130 7.14-172.463 252.886-172.413 260 .001 0 71.682-58.317 129.999-130 129.999zm0-220c-49.626 0-90 40.374-90 90 4.944 119.397 175.074 119.362 180-.001 0-49.625-40.374-89.999-90-89.999zm236 346h-472c-11.046 0-20-8.954-20-20v-472c0-11.046 8.954-20 20-20h472c11.046 0 20 8.954 20 20v472c0 11.046-8.954 20-20 20zm-452-40h432v-432h-432zm372-392c-11.046 0-20 8.954-20 20 0 11.046 8.954 20 20 20 11.046 0 20-8.954 20-20 0-11.046-8.954-20-20-20z"
                          />
                        </svg> */}
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            ))}
        </div>
      );
    }
  }
}

export default InstagramFeed;
