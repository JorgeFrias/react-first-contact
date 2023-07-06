// `app/page.tsx` is the UI for the `/` URL
"use client";

import {
  ButtonRole,
  CustomButton,
} from "../src/components/CustomButtonComponent";

import GraphProgressBar from "../src/components/GraphProgressBarComponent";
import Panel from "../src/components/PanelComponent";

export default function Page() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <>
      <Panel
        actionGroup={[
          <CustomButton
            role={ButtonRole.Secondary}
            onClick={handleClick}
            children="Click me!"
          />,
          <CustomButton
            role={ButtonRole.Primary}
            onClick={handleClick}
            children="Better me"
          />,
        ]}
      >
        <h1>Jorge Frías - React Report</h1>
        <GraphProgressBar label="React experience" progress={0.1} />
        <GraphProgressBar label="React potential" progress={0.9} />
        <GraphProgressBar label="Overall fit" progress={1} />
      </Panel>
    </>
  );
}
