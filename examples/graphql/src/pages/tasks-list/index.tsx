import React from 'react'
import { useFetch } from "shared/hooks";

const TasksList = () => {
    const { data, error, loading } = useFetch<Task[]>("");
    if (error) alert(error);

    return (
        <div className="page page-tasks-list">
            <div className="page-title">
                Tasks List
            </div>
            <div className="page-content">
                {loading && "Loading..."}
                <ul>
                    {data?.map(({ id, title }) => (
                        <li>{id}: {title}</li>
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
