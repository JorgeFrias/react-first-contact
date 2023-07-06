// `app/page.tsx` is the UI for the `/` URL
"use client";

import {
  ButtonRole,
  CustomButton,
} from "../src/components/CustomButtonComponent";

import GraphProgressBar from "../src/components/GraphProgressBarComponent";
import Panel from "../src/components/PanelComponent";
import CaesarCipher from "../src/_utils/CaesarCipher";

export default function Page() {
  const handleClickHire = () => {
    // Send an email to the candidate
    const subject = "Seems like you learned React";
    // I don't want to expose my email, so I'm going to encrypt it
    // - Cypher key (Caesar shift)
    let key: number = 3;
    // - The cipher object
    let cipher = new CaesarCipher(key);
    // - Email
    let emailEncrypted: string = "phCmrujhiuldv1hx";
    let email = cipher.decrypt(emailEncrypted);

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}`;
  };

  const handleClickNotInterested = () => {
    alert(
      "Shame on you! Just kidding, was fun to meet you, and invest a couple of hours reading react documentation!"
    );
  };

  return (
    <>
      <Panel
        actionGroup={[
          <CustomButton
            role={ButtonRole.Secondary}
            onClick={handleClickNotInterested}
            children="Not Interested"
          />,
          <CustomButton
            role={ButtonRole.Primary}
            onClick={handleClickHire}
            children="Hire me!"
          />,
        ]}
      >
        <h1>Jorge Frías - React Report</h1>
        <GraphProgressBar label="React experience" progress={0.05} />
        <GraphProgressBar label="React potential" progress={0.9} />
        <GraphProgressBar label="Overall fit" progress={1} />
      </Panel>
    </>
  );
}
