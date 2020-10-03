import React from 'react'
import cn from "classnames";
import { Card } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useFetch } from "shared/hooks";
import "./index.scss";

type Props = Task;

// TODO: as feature
const TaskItem = (props: Props) => {
    const { completed, title, userId, id } = props;
    const { data: author } = useFetch<User>(`users/${userId}`);

    return (
        <Card className={cn("task-item", { completed })}>
            <a className="task-item__title" href={`/${id}`}>{title}</a>
            <span className="task-item__author" >
                <UserOutlined />
                {author?.username}
            </span>
        </Card>
    )
}

export default TaskItem
