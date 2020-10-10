import React, { useEffect } from 'react'
import { useQuery } from '@apollo/client';
import { loader } from "graphql.macro";
import { Spin, Alert } from "antd";
import { useFetch } from "shared/hooks";
import { TaskItem } from "shared/components";

const QUERY = loader("./query.gql");

const TasksList = () => {
    const { data, error, loading } = useFetch<Task[]>("todos");
    const query = useQuery(QUERY);

    useEffect(() => {
        // console.log("#", query.data);
        if (query.data) {
            // @ts-ignore
            console.table(query.data.todos.data.map(({ __typename, ...details }) => ({
                id: details.id,
                title: details.title,
                user: details.user.name,
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
