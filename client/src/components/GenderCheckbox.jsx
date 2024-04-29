const GenderCheckbox = ({ updateGender }) => {
  const handleChange = (e) => {
    const selectedGender = e.target.value;
    updateGender(selectedGender);
  };
  return (
    <div className="flex mt-2">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text">Male</span>
          <input
            className="radio border-white size-5"
            type="radio"
            name="gender"
            value="male"
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text">Female</span>
          <input
            className="radio border-white size-5"
            type="radio"
            name="gender"
            value="female"
            onChange={handleChange}
          />
        </label>
      </div>
    </div>
  );
};
export default GenderCheckbox;
