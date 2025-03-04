import Image from "next/image";

const Profile = () => {
  return (
    <div className="profileSection">
      {/* Landscape Image */}
      <img
      className="profile-width"
        src="/profile.jpg"
        alt="The Founders & Team"
      />
    </div>
  );
};

export default Profile;
