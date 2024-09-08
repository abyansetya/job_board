import { getUser } from "@workos-inc/authkit-nextjs";
import { WorkOS } from "@workos-inc/node";
import React from "react";
import "@radix-ui/themes/styles.css";
import { RadioGroup, TextArea, TextField, Theme } from "@radix-ui/themes";
import "react-country-state-city/dist/react-country-state-city.css";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
} from "react-country-state-city";

type PageProps = {
  params: {
    orgId: string;
  };
};

async function NewListingForOrgPage(props: PageProps) {
  const { user } = await getUser();
  const workos = new WorkOS(process.env.WORKOS_API_KEY);

  if (!user) {
    return "Please log in";
  }
  const orgId = props.params.orgId;
  const oms = await workos.userManagement.listOrganizationMemberships({
    userId: user.id,
    organizationId: orgId,
  });
  const hasAccess = oms.data.length > 0;

  if (!hasAccess) {
    return "no access";
  }

  return (
    <Theme>
      <form action="" className="container mt-6 flex flex-col gap-4">
        <TextField.Root placeholder="Job Title" />
        <div className="flex gap-4">
          <div>
            Remote?
            <RadioGroup.Root defaultValue="hybrid" name="remote">
              <RadioGroup.Item value="onsite">On-site</RadioGroup.Item>
              <RadioGroup.Item value="hybrid">Hybrid remote</RadioGroup.Item>
              <RadioGroup.Item value="remote">Fully remote</RadioGroup.Item>
            </RadioGroup.Root>
          </div>
          <div>
            Full time?
            <RadioGroup.Root defaultValue="part" name="remote">
              <RadioGroup.Item value="project">Project</RadioGroup.Item>
              <RadioGroup.Item value="part">Part time</RadioGroup.Item>
              <RadioGroup.Item value="full">Full-time</RadioGroup.Item>
            </RadioGroup.Root>
          </div>
        </div>
        <TextArea placeholder="Job Description" resize="vertical" />
      </form>
    </Theme>
  );
}

export default NewListingForOrgPage;
