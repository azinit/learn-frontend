import React, { useEffect } from 'react'
import { Spin, Alert } from "antd";
import { useFetch } from "shared/hooks";
import { TaskItem } from "shared/components";
import { useGetTodosListQuery } from "gen/graphql";

const TasksList = () => {
    const { data, error, loading } = useFetch<Task[]>("todos");
    const { data: query } = useGetTodosListQuery();

    useEffect(() => {
        if (query) {
            console.table(query.todos?.data?.map((todo) => ({
                id: todo?.id,
                title: todo?.title,
                user: todo?.user?.name,
            })));
        }
    }, [query]);

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
