import React from 'react'
import { Spin, Alert } from "antd";
import { useFetch } from "shared/hooks";
import { TaskItem } from "shared/components";

const TasksList = () => {
    const { data, error, loading } = useFetch<Task[]>("todos");

    return (
        <div className="page page-tasks-list">
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
