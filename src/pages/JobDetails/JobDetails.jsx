import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const { title, company, deadline } = useLoaderData();

  return (
    <div className="m-10">
      <h2 className="text-3xl"> Job Details for {title}</h2>
      <p> apply for {company}</p>
      <p>deadline: {deadline}</p>
      <button className="btn btn-primary"> Apply Now </button>
    </div>
  );
};

export default JobDetails;
