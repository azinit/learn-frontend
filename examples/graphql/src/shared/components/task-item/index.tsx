import React from 'react'
import cn from "classnames";
import { Card } from "antd";
import "./index.scss";

type Props = Task;

const TaskItem = (props: Props) => {
    const { completed, id, title, userId } = props;
    return (
        <Card className={cn("task-item", { completed })}>
            [{id}] {title}
        </Card>
    )
}

export default TaskItem
