import FollowButton from "./FollowButton.jsx";
import LikeButton from "./LikeButton.jsx";

const postImage = "https://i.pinimg.com/736x/95/6e/49/956e49cbfed676944880d8295a355e72.jpg";
const userImage = "https://i.pinimg.com/474x/f3/51/ac/f351ace6646768fb407d0f85d6d51d71.jpg";

export default function Post() {
    return (
        <div className="post">
            <div className="user-info">
                <img id="profile-img" src={userImage} alt="Profile Image" />
                <p className="user-name">Pilgrim</p>
                <FollowButton/>
            </div>
            <img id="post-img" src={postImage} alt="Post Image" />
            <LikeButton/>
        </div>
    );
}
