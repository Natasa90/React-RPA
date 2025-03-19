import { useLocation } from "react-router-dom";

export const UserDetails = () => {
  const location = useLocation();
  const { userData, temperature } = location.state || {};

  console.log(userData);

  if (!userData) {
    return <div>No user data available!</div>;
  }
  return (
    <div className="usersInfo_box">
      <h2>Hello, {userData.firstName}!</h2>
      <p>First Name: {userData.firstName}</p>
      <p>Last Name: {userData.lastName}</p>
      <iframe
        src={userData.link}
        className="w-full h-full border rounded-lg"
        allowFullScreen
      />
      <p>Town: {userData.town}</p>
      <p>
        Current temperature in {userData.town} is: {temperature}
      </p>
    </div>
  );
};
