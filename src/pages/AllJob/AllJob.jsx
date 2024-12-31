import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import useJobs from "../../hooks/useJobs";
import HotJobCard from "../Home/HotjobCard";

const AllJob = () => {
  const [sort, setSort] = useState(false);
  const [search, setSearch] = useState("");
  const [minSalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");
  const { jobs, loading } = useJobs(sort, search, minSalary, maxSalary);
  console.log(sort);
  if (loading) {
    return (
      <span className="loading loading-ring loading-md items-center text-center justify-center"></span>
    );
  }
  return (
    <div>
      <h1 className="py-5 text-4xl font-bold text-center">All job here</h1>
      <div className="w-11/12 mx-auto bg-base-200 py-5 flex items-center gap-5">
        <button
          onClick={() => setSort(!sort)}
          className={`btn btn-neutral ${sort && "btn-success"}`}
        >
          {sort == true ? "Sorted by salary" : "Sort by salary"}
        </button>
        <BsSearch />
        <input
          onKeyUp={(e) => setSearch(e.target.value)}
          type="text"
          className="input w-full max-w-2xl"
          name=""
          placeholder="Search Jobs by Location"
        />
        <div className="space-y-3">
          <input
            onKeyUp={(e) => setMinSalary(e.target.value)}
            type="text"
            className="input w-full max-w-xs"
            name=""
            placeholder="minimum salary"
          />
          <input
            onKeyUp={(e) => setMaxSalary(e.target.value)}
            type="text"
            className="input w-full max-w-xs"
            name=""
            placeholder="max salary"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {jobs.map((job) => (
          <HotJobCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default AllJob;
