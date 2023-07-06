import React from "react";
import styles from "./GraphProgressBarComponent.module.scss";
import { useEffect, useState } from 'react';

interface Props {
  /// What the progress bar is representing
  label: string;
  /// Normalized progress value [between 0 and 1]
  progress: number;
}

/// Progress bar component.
/// The progress has an appearance that fills from left to right with a gradient from orange to yellow.
/// The progress bar has a label that is displayed above the progress bar.
const GraphProgressBar: React.FC<Props> = ({ label, progress }) => {
  const [barWidth, setBarWidth] = useState(0);

  useEffect(() => {
    setBarWidth(progress * 100);
  }, [progress]);

  return (
    <div className={styles.graph_progress_bar}>
      <div className={styles.graph_progress_bar__label}>{label}</div>
      <div className={styles.graph_progress_bar__progress}>
        <div
          className={styles.graph_progress_bar__progress__bar}
          style={{ width: `${barWidth}%` }}
        ></div>
      </div>
    </div>
  );
};

export default GraphProgressBar;
