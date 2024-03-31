import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <section className=" bg-white py-10 font-serif h-screen">
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
              <h1 className="text-6xl text-center pt-10">404</h1>
            </div>

            <div className="mt-10">
              <h3 className="text-6xl">Looks like you&apos;re lost</h3>
              <p className="text-xl mt-4">
                The page you are looking for is not available!
              </p>
              <Link
                to="/"
                className="link_404 inline-block mt-8 px-6 py-3 bg-primary text-blue-500 underline rounded-lg"
              >
                Go to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
