import React from "react";
type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return <div className="container mt-16 mx-auto px-5">{children}</div>;
}
