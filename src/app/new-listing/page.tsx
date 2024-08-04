import { getUser } from "@workos-inc/authkit-nextjs";
import { WorkOS } from "@workos-inc/node";
import React from "react";

export default async function NewListingPage() {
  const { user } = await getUser();
  const workos = new WorkOS();
  return (
    <div className="container">
      {!user && <div>You need to be logged in to post a job</div>}
      {user && (
        <div>
          <h2 className="text-lg mt-6">Your companies</h2>
          <p className="text-gray-500 text-sm mb-2">
            Select a company to create a job add for
          </p>
          <div className="border border-blue-200 bg-blue-50 p-4 rounded-md">
            No companies found assigned to your user
          </div>

          <h2 className="text-lg mt-6">Create a new company</h2>
          <p className="text-gray-500 text-sm mb-2">
            To create a job listing, you first need to register a company
          </p>
          <form className="flex gap-2" action="">
            <input
              className="p-2 border border-gray-400 rounded-md"
              type="text"
              placeholder="company name"
            />
            <button className="flex gap-2 items-center bg-gray-200 px-4 py-2 rounded-md">
              Create company{" "}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
