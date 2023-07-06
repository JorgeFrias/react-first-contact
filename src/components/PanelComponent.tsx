import React from "react";
import styles from "./PanelComponent.module.scss";

interface Props {
  /// Content to be displayed inside the panel
  children: React.ReactNode;
  /// Actions to be displayed inside the panel
  actionGroup: React.ReactNode[];
}

const Panel: React.FC<Props> = ({ children, actionGroup }) => {
  return (
    <div className={styles.panel}>
      <div>{children}</div>
      {actionGroup && (
        <div className={styles.action_group}>
          {actionGroup.map((action, index) => (
            <div key={index}>{action}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Panel;
