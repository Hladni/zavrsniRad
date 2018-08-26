import React, { Component } from "react";
import { Link } from "react-router-dom";

import classes from "./PublicProfile.scss";
import defaultUserPng from "../../../server/public/defaultUser.png";

class PublicProfile extends Component {
  state = {};
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={classes.all}>
        <div className={classes.profile}>
          <div className={classes.profilePictureDiv}>
            <img
              className={classes.profilePicture}
              src={this.props.avatar || defaultUserPng}
              alt="profilePicture"
            />
          </div>
          <div className={classes.infoDiv}>
            {this.props.token && (
              <Link to="/profile/settings">
                <p>
                  <svg height="20" width="20" color="white">
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      d="m124.92 52.2c-.436-.571-1-.911-1.711-1.019l-14.909-2.281c-.815-2.607-1.929-5.268-3.341-7.984.977-1.358 2.443-3.272 4.398-5.744 1.955-2.472 3.34-4.277 4.155-5.418.435-.598.651-1.222.651-1.874 0-.76-.189-1.357-.57-1.792-1.955-2.771-6.436-7.387-13.443-13.851-.65-.543-1.33-.814-2.035-.814-.815 0-1.467.244-1.956.732l-11.568 8.718c-2.228-1.141-4.672-2.146-7.333-3.02l-2.281-14.99c-.054-.706-.367-1.29-.937-1.752-.571-.462-1.235-.692-1.997-.692h-18.09c-1.575 0-2.553.76-2.933 2.281-.706 2.715-1.494 7.766-2.363 15.15-2.553.816-5.02 1.848-7.414 3.097l-11.243-8.718c-.706-.543-1.412-.814-2.118-.814-1.195 0-3.761 1.941-7.699 5.825-3.938 3.884-6.612 6.803-8.03 8.758-.489.706-.733 1.331-.733 1.874 0 .652.271 1.304.814 1.955 3.639 4.4 6.545 8.147 8.718 11.244-1.358 2.498-2.417 4.997-3.177 7.495l-15.15 2.281c-.597.109-1.113.462-1.548 1.06-.435.597-.652 1.222-.652 1.873v18.09c0 .707.217 1.344.652 1.914.435.571 1 .912 1.711 1.02l14.91 2.2c.76 2.661 1.873 5.349 3.34 8.06-.977 1.358-2.444 3.272-4.399 5.744-1.955 2.472-3.341 4.277-4.155 5.418-.435.599-.652 1.222-.652 1.874 0 .706.19 1.33.57 1.873 2.118 2.934 6.599 7.497 13.443 13.688.598.598 1.277.896 2.037.896.815 0 1.494-.244 2.037-.732l11.488-8.719c2.228 1.141 4.672 2.146 7.333 3.02l2.281 14.99c.055.706.367 1.29.937 1.752.57.463 1.236.692 1.996.692h18.09c1.577 0 2.554-.76 2.935-2.281.705-2.716 1.492-7.766 2.361-15.15 2.553-.815 5.03-1.848 7.414-3.097l11.244 8.8c.76.488 1.467.732 2.118.732 1.194 0 3.747-1.927 7.657-5.784 3.912-3.856 6.6-6.79 8.06-8.8.489-.543.734-1.167.734-1.873 0-.706-.271-1.387-.815-2.037-3.91-4.78-6.816-8.527-8.718-11.243 1.086-2.01 2.146-4.481 3.178-7.414l15.07-2.28c.651-.109 1.196-.463 1.63-1.061.434-.598.65-1.223.65-1.874v-18.09c.0001-.706-.215-1.343-.651-1.914m-47.17 25.541c-4.073 4.074-8.989 6.111-14.747 6.111-5.758 0-10.673-2.037-14.747-6.111-4.073-4.073-6.11-8.988-6.11-14.746 0-5.758 2.036-10.673 6.11-14.747 4.074-4.073 8.99-6.11 14.747-6.11 5.758 0 10.674 2.037 14.747 6.11 4.073 4.074 6.11 8.989 6.11 14.747 0 5.758-2.037 10.673-6.11 14.746"
                      transform="matrix(.12786 0 0 .12786 2.949 2.956)"
                      fill="white"
                    />
                  </svg>
                  Settings
                </p>
              </Link>
            )}
            <h2>{this.props.username}</h2>
            <div className={classes.uploadStatsDiv}>
              <div className={classes.uploads}>
                <p>Uploads:</p>
                <h3>{this.props.uploads}</h3>
              </div>
              <div className={classes.uploadViews}>
                <p>Total views:</p>
                <h3>{this.props.totalViews}</h3>
              </div>
              <div className={classes.uploadLikes}>
                <p>Total likes:</p>
                <h3>{this.props.totalLikes}</h3>
              </div>
              <div className={classes.uploadFavorites}>
                <p>Total favorites:</p>
                <h3>{this.props.totalFavorites}</h3>
              </div>
            </div>
          </div>
          <h3>Uploads:</h3>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default PublicProfile;
