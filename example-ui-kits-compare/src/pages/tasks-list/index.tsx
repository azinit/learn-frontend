import React from 'react'
import { Button as BButton } from 'react-bootstrap'
import { Button as AButton } from 'antd';
import { Button as MButton } from '@material-ui/core'
import { Button as SButton } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css'

const TasksListPage = () => {
    return (
        <div>
            Hello!
            <div className="content">
                <BButton variant="primary">Button</BButton>
                <AButton type="primary">Button</AButton>
                <MButton variant="contained">Button</MButton>
                <SButton primary>Button</SButton>
            </div>
        </div>
    )
}

export default TasksListPage
