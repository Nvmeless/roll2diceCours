import React, { useState } from "react";
import { Container, Typography } from "../../atoms";

const Task = ({ deleteTask, toggle, isDone, taskName }) => {
  return (
    <Container.Flex>
      <Container.Base>
        <Typography.Link
          onClick={() => {
            toggle();
          }}
        >
          {isDone ? "V" : "X"}
        </Typography.Link>
      </Container.Base>
      <Typography.Paragraph>- {taskName} -</Typography.Paragraph>
      <Container.Base
        onClick={() => {
          deleteTask();
        }}
      >
        <Typography.Link>X</Typography.Link>
      </Container.Base>
    </Container.Flex>
  );
};

export default Task;
