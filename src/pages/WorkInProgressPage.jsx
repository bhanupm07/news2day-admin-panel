import React from "react";
import { Link } from "react-router-dom";

const WorkInProgressPage = () => {
  return (
    <section className=" bg-white py-10 font-serif">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="w-10/12 sm:w-8/12 text-center">
            <div
              className=" bg-center bg-cover h-96"
              style={{
                backgroundImage:
                  "url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)",
              }}
            >
              <h1 className="text-6xl text-center pt-10">Work In Progress</h1>
            </div>

            <div className="mt">
              <h3 className="text-6xl">Go see other pages</h3>
              <p className="text-xl mt-4">
                Data is not available for this page!
              </p>
              {/* <Link
                to="/"
                className="link_404 inline-block mt-8 px-6 py-3 bg-primary text-blue-500 underline rounded-lg"
              >
                Go to Dashboard
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkInProgressPage;
