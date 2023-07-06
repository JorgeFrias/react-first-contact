// `app/page.tsx` is the UI for the `/` URL
"use client";

import {
  ButtonRole,
  CustomButton,
} from "../src/components/CustomButtonComponent";

import GraphProgressBar from "../src/components/GraphProgressBarComponent";

export default function Page() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <>
      <h1>Hello, Home page!</h1>
      <CustomButton
        role={ButtonRole.Secondary}
        onClick={handleClick}
        children="Click me!"
      />

      <CustomButton
        role={ButtonRole.Primary}
        onClick={handleClick}
        children="Better me"
      />

      <GraphProgressBar label="Progress" progress={0.5} />
      <GraphProgressBar label="Progress" progress={0.1} />
      <GraphProgressBar label="Progress" progress={0.8} />
    </>
  );
}
