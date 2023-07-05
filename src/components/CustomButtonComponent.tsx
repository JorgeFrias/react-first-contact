import React from "react";
import styles from './CustomButtonComponent.module.scss'

enum ButtonRole {
  Primary,
  Secondary,
}

interface Props {
  role: ButtonRole;
  children: React.ReactNode,
  onClick: () => void;
}

const CustomButton: React.FC<Props> = ({
  role,
  children,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={ role === ButtonRole.Primary ? styles.button_primary : styles.button_secondary }
    >
      {children}
    </button>
  );
};

export { ButtonRole, CustomButton }