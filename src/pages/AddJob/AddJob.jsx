import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const AddJob = () => {
  const { user } = useAuth();

  const handleAddJOb = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    //     console.log(formData.entries());
    const initialData = Object.fromEntries(formData.entries());
    console.log(initialData);
    const { min, max, currency, ...newJob } = initialData;
    console.log(newJob);
    newJob.salaryRange = {
      min,
      max,
      currency,
    };
    newJob.requirements = newJob.requirements.split("\n");
    newJob.responsibilities = newJob.responsibilities.split("\n");
    console.log(newJob);

    fetch("https://job-portal-server-flax-eta.vercel.app/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Job has been added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          Navigate("/myPostedJob");
        }
      });
  };
  return (
    <div>
      <form onSubmit={handleAddJOb} className="card-body">
        {/* Job Title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Title </span>
          </label>
          <input
            name="title"
            type="text"
            placeholder="JOB Title"
            className="input input-bordered"
            required
          />
        </div>
        {/* Job Location  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Location </span>
          </label>
          <input
            name="location"
            type="text"
            placeholder="Job Location "
            className="input input-bordered"
            required
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Job Type  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Type </span>
            </label>
            <select
              defaultValue="Pick a job type"
              className="select select-ghost w-full max-w-xs"
            >
              <option disabled>Pick a job type</option>
              <option>Full Time</option>
              <option>Intern</option>
              <option>Part Time</option>
            </select>
          </div>
          {/* Job Category  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Field </span>
            </label>
            <select
              defaultValue="Pick a job Field"
              className="select select-ghost w-full max-w-xs"
            >
              <option disabled>Pick a job Field</option>
              <option>Engineering</option>
              <option>Marketing </option>
              <option>Finance </option>
            </select>
          </div>
        </div>

        {/* salary range  */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-end">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Salary Range</span>
            </label>
            <input
              name="min"
              type="text"
              placeholder="Min"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <input
              name="max"
              type="text"
              placeholder="Max"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <select
              defaultValue="Currency"
              name="currency"
              className="select select-ghost w-full max-w-xs"
            >
              <option disabled>Currency</option>
              <option>BDT</option>
              <option>USD </option>
              <option>Pound </option>
            </select>
          </div>
        </div>

        {/* Job Description  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Description </span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            name="description"
            placeholder="Job Description "
            required
          ></textarea>
        </div>
        {/* Company Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company Name </span>
          </label>
          <input
            name="company"
            type="text"
            placeholder="Job Location "
            className="input input-bordered"
            required
          />
        </div>

        {/* Job Requirements */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Requirements </span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            name="requirements"
            placeholder=" Put Each requirements in a new line"
            required
          ></textarea>
        </div>

        {/* Job Responsibilities*/}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Responsibilities </span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            name="responsibilities"
            placeholder=" Write Each Responsibilities in a new line"
            required
          ></textarea>
        </div>

        {/* HR Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">HR Name </span>
          </label>
          <input
            name="hr_name"
            type="text"
            placeholder="HR Name"
            className="input input-bordered"
            required
          />
        </div>
        {/* HR email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">HR email </span>
          </label>
          <input
            name="hr_email"
            defaultValue={user?.email}
            type="text"
            placeholder="HR Email"
            className="input input-bordered"
            required
          />
        </div>

        {/* Application Deadline */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Deadline </span>
          </label>
          <input
            name="hr_name"
            type="date"
            placeholder="Application Deadline"
            className="input input-bordered"
            required
          />
        </div>

        {/* Company Logo URL */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company Logo URL</span>
          </label>
          <input
            name="company_logo"
            type="text"
            placeholder="Company Logo URL"
            className="input input-bordered"
            required
          />
        </div>

        {/* submit button  */}
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
