import React, { useEffect, useState } from 'react';

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('profileData'));
    if (data) {
      setProfile(data);
    }
  }, []);

  const clearProfile = () => {
    localStorage.removeItem('profileData');
    setProfile(null);
  };

  return (
    <div className="relative min-h-[88vh] w-full overflow-hidden flex flex-col items-center text-white px-4 sm:px-6 py-6 sm:py-8">
      <div className="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold">Profile</h1>
        <p className="text-sm sm:text-base opacity-80 tracking-wide mt-1 sm:mt-2 select-none max-w-md mx-auto">
          Your Personalized Space — Organized, Secure, Yours Only.
        </p>
      </div>

      {profile ? (
        <>
          <div className="profileContainer mt-6 sm:mt-10 w-full max-w-md sm:max-w-2xl lg:max-w-4xl flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 md:gap-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl shadow-lg px-4 sm:px-6 md:px-8 py-4 sm:py-6">
            <div className="name text-center sm:text-left w-full sm:w-auto">
              <h2 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">{profile.name}</h2>
              <p className="text-white/70 text-base sm:text-lg">{profile.number}</p>
            </div>

            <div className="profileImg w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-lg overflow-hidden border border-white/20 shadow-md order-first sm:order-last">
              <img
                src={profile.image}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <button
            className="mt-6 sm:mt-8 px-4 sm:px-6 py-1 sm:py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-md transition text-sm sm:text-base"
            onClick={clearProfile}
          >
            Clear Profile
          </button>
        </>
      ) : (
        <p className="mt-8 text-white/70 text-center">No profile data saved yet.</p>
      )}
    </div>
  );
};

export default Profile;