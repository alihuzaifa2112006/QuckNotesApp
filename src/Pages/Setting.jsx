import React, { useState, useEffect } from 'react';

const Setting = () => {
  const [image, setImage] = useState(null);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('profileData'));
    if (stored) {
      setFormData({ name: stored.name, number: stored.number });
      setImage(stored.image);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.number || !image) {
      setError('Please fill all fields and select an image.');
      setSaved(false);
      return;
    }

    setError('');
    setSaved(true);

    const submittedData = {
      name: formData.name,
      number: formData.number,
      image: image,
    };

    console.log('Submitted Data:', submittedData);
    localStorage.setItem('profileData', JSON.stringify(submittedData));
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="relative min-h-[88vh] w-full overflow-y-auto text-white px-4 sm:px-6 py-6 sm:py-8">
      <div className="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

      <div className="text-center mb-4 sm:mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold select-none">Settings</h1>
        <p className="text-sm sm:text-base opacity-80 tracking-wide select-none">
          Personalize the Look. Tailor the Feel. Make It Yours.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md sm:max-w-2xl lg:max-w-3xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 flex flex-col gap-3 sm:gap-4"
      >
        <div>
          <h2 className="text-lg sm:text-xl font-semibold tracking-wide text-white">Profile Data</h2>
          <p className="text-xs sm:text-sm text-white/70">Required: Your Name, Number & Picture</p>
        </div>

        <input
          type="text"
          placeholder="Your Full Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-3 sm:px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 transition text-sm sm:text-base"
        />

        <input
          type="text"
          placeholder="Your Phone Number"
          value={formData.number}
          onChange={(e) => setFormData({ ...formData, number: e.target.value })}
          className="w-full px-3 sm:px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition text-sm sm:text-base"
        />

        <div className="w-full flex flex-col items-start">
          <label className="text-xs sm:text-sm text-white/70 mb-1">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            className="text-white text-xs sm:text-sm"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                setImage(URL.createObjectURL(file));
              }
            }}
          />
        </div>

        {image && (
          <div className="mt-3 sm:mt-4 flex flex-col items-center gap-2">
            <img
              src={image}
              alt="Selected"
              className="w-24 sm:w-32 h-24 sm:h-32 object-cover rounded-lg border border-white/20"
            />
            <button
              type="button"
              className="px-3 sm:px-4 py-1 text-xs sm:text-sm text-white bg-red-500 rounded-md hover:bg-red-600 transition"
              onClick={() => setImage(null)}
            >
              Delete Image
            </button>
          </div>
        )}

        <button
          type="submit"
          className="mt-4 sm:mt-6 self-center px-4 sm:px-6 py-1 sm:py-2 bg-gradient-to-r from-purple-600 to-indigo-500 rounded-lg text-white hover:scale-105 transition text-sm sm:text-base"
        >
          Save Changes
        </button>

        {error && (
          <p className="text-center text-red-400 mt-2 text-xs sm:text-sm">{error}</p>
        )}

        {saved && (
          <p className="text-center text-green-400 mt-2 text-xs sm:text-sm">Profile saved successfully!</p>
        )}
      </form>
    </div>
  );
};

export default Setting;