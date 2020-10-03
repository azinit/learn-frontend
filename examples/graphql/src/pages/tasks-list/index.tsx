import React from 'react'
import { Breadcrumb, Spin, Alert } from "antd";
import { useFetch } from "shared/hooks";
import { TaskItem } from "shared/components";

// TODO: autogenerate by location
const TasksListTitle = () => (
    <Breadcrumb className="page-title">
        <Breadcrumb.Item href="/">
            TasksList
        </Breadcrumb.Item>
    </Breadcrumb>
);

const TasksList = () => {
    const { data, error, loading } = useFetch<Task[]>("");

    return (
        <div className="page page-tasks-list">
            <TasksListTitle />
            <div className="page-content">
                {error && (
                    <Alert
                        type="error"
                        message={error}
                        showIcon
                    />
                )}
                {loading && <Spin />}
                <ul>
                    {data?.map((taskProps) => (
                        <li><TaskItem {...taskProps} /></li>
                    ))}
                    {data?.length === 0 && (
                        <li>There are not tasks found</li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default TasksList
