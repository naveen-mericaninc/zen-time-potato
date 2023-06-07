const Inputs = () => {
  return (
    <>
      <div className="grid grid-cols-3">
        {/* Location */}
        <div>
          <label>Location</label>
          <div className="flex">
            <right>
              <select className="select select-bordered w-full max-w-xs">
                <option selected>India</option>
                <option>United state</option>
                <option>Germany</option>
                <option>SriLanka</option>
                <option>Canada</option>
                <option>London</option>
              </select>
            </right>
            <left>
              <select className="select select-bordered w-full max-w-xs">
                <option selected>Tamilnadu</option>
                <option>Kerala</option>
                <option>Karnataka</option>
                <option>Delhi</option>
                <option>Pune</option>
                <option>Lucknow</option>
              </select>
            </left>
          </div>
        </div>

        {/* Category */}
        <div>
          <label>Category</label>
          <div>
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                select
              </option>
              <option>Front End</option>
              <option>Back End</option>
              <option>Full Sack</option>
              <option>React.js</option>
              <option>Next.js</option>
            </select>
          </div>
        </div>
        {/* Classification */}
        <div>
          <label>Classification</label>
          <div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Billable</span>
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-blue-500"
                  checked
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Non-Billable</span>
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-red-500"
                  checked
                />
              </label>
            </div>
          </div>
        </div>
        {/* Work Authorization */}
        <div>
          <label>Work Authorization</label>
          <div>
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                select
              </option>
              <option>Admin</option>
              <option>Manager</option>
              <option>Team Leader</option>
            </select>
          </div>
        </div>
        {/* Payroll ID */}
        <div>
          <label>Payroll ID</label>
          <div className="form-control w-full max-w-xs">
            <input
              type="text"
              placeholder=""
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </div>
        {/*Holiday Calender*/}
        <div>
          <label>Holiday Calender</label>
          <div>
            <input
              className="appearance-none border border-gray-300 rounded-md py-2 px-4 leading-tight focus:outline-none focus:border-blue-500 bg-transparent"
              type="date"
              placeholder="Enter your Name "
            />
          </div>
        </div>
        {/* Worker ID */}
        <div>
          <label>Worker ID</label>
          <div className="form-control w-full max-w-xs">
            <input
              type="text"
              placeholder=""
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </div>
        {/* Weekend Profile */}
        <div>
          <label>Weekend Profile</label>
          <div>
            <select className="select select-bordered w-full max-w-xs">
              <option selected>Default</option>
              <option>Admin</option>
              <option>Manager</option>
              <option>Team Leader</option>
            </select>
          </div>
        </div>
        {/* Veteran Status */}
        <div>
          <label> Veteran Status</label>
          <div>
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                select
              </option>
              <option>Admin</option>
              <option>Manager</option>
              <option>Team Leader</option>
            </select>
          </div>
        </div>
        {/* Employee Type */}
        <div>
          <label>Employee Type</label>
          <div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">
                  Employee/Consultant/Contractor
                </span>
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-blue-500"
                  checked
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Back-Office staff</span>
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-red-500"
                  checked
                />
              </label>
            </div>
          </div>
        </div>
        {/* Mental Status */}
        <div>
          <label>Mental Status</label>
          <div>
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                select
              </option>
              <option>Admin</option>
              <option>Manager</option>
              <option>Team Leader</option>
            </select>
          </div>
        </div>
        {/* Employee Status */}
        <div>
          <label>Employee Status</label>
          <div>
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                select
              </option>
              <option>Admin</option>
              <option>Manager</option>
              <option>Team Leader</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inputs;
