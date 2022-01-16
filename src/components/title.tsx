import React from "react";

interface Props {
  taskTitle: string;
}

const Title = ({ taskTitle }: Props) => <h1> {taskTitle} </h1>;

export default Title;
