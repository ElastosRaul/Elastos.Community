import React from 'react'
import BaseComponent from '@/model/BaseComponent'
import {Form, Icon, Input, InputNumber, Button, Checkbox, Select, message, Row, Col, Upload} from 'antd'

import {upload_file} from "@/util";
import './style.scss'

import {TASK_CATEGORY, TASK_TYPE} from '@/constant'

const FormItem = Form.Item
const TextArea = Input.TextArea

/**
 * This is generic task create form for both Developer and Social Bounties / Events
 *
 * Which version of the form depends on the leader's program
 *
 * Leaders - can create:
 * - Events (offline) restricted to their area - must be approved
 * - Events (online) anywhere - Social or Developer
 *
 * TODO: in the future we should developer leaders
 *
 * Community Leaders - each community has a leader
 * - a leader can create events in their own local community or online community
 * - local offline events are automatically shown in their local community, a country leader
 *  can create events in any child community
 * - these events are shown in the Social page as well
 * - a local event can have sub tasks, these are shown as tasks in the Social page
 */
class C extends BaseComponent {

    handleSubmit (e) {
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('CreateTask - received values of form: ', values)
                this.props.createTask(values, this.state);

            }
        })
    }

    constructor (props) {
        super(props)

        this.step1Container = React.createRef()
        this.step2Container = React.createRef()

        this.state = {
            upload_url : null,
            upload_loading : false
        };
    }

    getInputProps () {
        const {getFieldDecorator} = this.props.form

        const taskName_fn = getFieldDecorator('taskName', {
            rules: [{required: true, message: 'Please input a task name'}],
            initialValue: ''
        })
        const taskName_el = (
            <Input size="large"/>
        )

        const taskCategory_fn = getFieldDecorator('taskCategory', {
            rules: [{required: true, message: 'Please select a category'}],
            initialValue: TASK_CATEGORY.SOCIAL
        })
        const taskCategory_el = (
            <Select>
                <Option value={TASK_CATEGORY.SOCIAL}>Social</Option>
                <Option value={TASK_CATEGORY.DEVELOPER}>Developer</Option>
                <Option value={TASK_CATEGORY.LEADER}>Leader</Option>
            </Select>
        )

        // sub-tasks are not here because those can only be created from an existing Task Detail Page
        const taskType_fn = getFieldDecorator('taskType', {
            rules: [{required: true, message: 'Please select a task type'}],
            initialValue: TASK_TYPE.EVENT
        })
        const taskType_el = (
            <Select>
                <Option value={TASK_TYPE.EVENT}>Event</Option>
                <Option value={TASK_TYPE.PROJECT}>Project</Option>
                {this.props.is_admin && <Option value={TASK_TYPE.TASK}>Task</Option>}
            </Select>
        )

        const taskCommunity_fn = getFieldDecorator('taskCommunity')
        const taskCommunity_el = (
            <Select>

            </Select>
        )

        const taskDesc_fn = getFieldDecorator('taskDesc', {
            rules: [{required: true, message: 'You must have a description'}],
            initialValue: ''
        })
        const taskDesc_el = (
            <TextArea rows={4} name="taskDesc"></TextArea>
        )

        const taskCandLimit_fn = getFieldDecorator('taskCandLimit', {
            rules: [{type: 'integer', message: 'You must set a limit'}]
        })
        const taskCandLimit_el = (
            <InputNumber size="large"/>
        )

        const taskCandSltLimit_fn = getFieldDecorator('taskCandSltLimit', {
            rules: [{type: 'integer', message: 'You must set a limit'}]
        })
        const taskCandSltLimit_el = (
            <InputNumber size="large"/>
        )

        const taskRewardUpfront_fn = getFieldDecorator('taskRewardUpfront', {
            rules: [{type: 'number', message: 'Please explictly enter 0 if intended'}]
        })
        const taskRewardUpfront_el = (
            <InputNumber size="large"/>
        )

        const taskReward_fn = getFieldDecorator('taskReward', {
            rules: [{type: 'number', message: 'Please explictly enter 0 if intended'}],
        })
        const taskReward_el = (
            <InputNumber size="large"/>
        )

        const thumbnail_fn = getFieldDecorator('thumbnail', {
            rules: []
        });
        const p_thumbnail = {
            showUploadList: false,
            customRequest :(info)=>{
                this.setState({
                    upload_loading: true
                });
                upload_file(info.file).then((d)=>{
                    const url = d.url;
                    this.setState({
                        upload_loading: false,
                        upload_url : url
                    });
                })
            }
        };
        const thumbnail_el = (
            <Upload name="logo" listType="picture" {...p_thumbnail}>
                {
                    this.state.upload_url ? (
                        <img style={{width:'200px'}} src={this.state.upload_url} />
                        ) : (
                        <Button loading={this.state.upload_loading}>
                            <Icon type="upload" /> Click to upload
                        </Button>
                    )
                }

            </Upload>
        );


        return {
            taskName: taskName_fn(taskName_el),
            taskCategory: taskCategory_fn(taskCategory_el),
            taskType: taskType_fn(taskType_el),

            taskCommunity: taskCommunity_fn(taskCommunity_el),

            taskDesc: taskDesc_fn(taskDesc_el),
            taskCandLimit: taskCandLimit_fn(taskCandLimit_el),
            taskCandSltLimit: taskCandSltLimit_fn(taskCandSltLimit_el),

            taskRewardUpfront: taskRewardUpfront_fn(taskRewardUpfront_el),
            taskReward: taskReward_fn(taskReward_el),

            thumbnail: thumbnail_fn(thumbnail_el)
        }
    }

    ord_render () {
        const {getFieldDecorator} = this.props.form
        const p = this.getInputProps()

        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 8},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 12},
            },
        }

        // TODO: terms of service checkbox

        // TODO: react-motion animate slide left

        return (
            <div className="c_taskCreateFormContainer">

                <Form onSubmit={this.handleSubmit.bind(this)} className="d_taskCreateForm">
                    <div>
                        <FormItem label="Task Name" {...formItemLayout}>
                            {p.taskName}
                        </FormItem>
                        <FormItem label="Community"  {...formItemLayout}>
                            {p.taskCommunity}
                        </FormItem>
                        <FormItem label="Thumbnail" {...formItemLayout}>
                            {p.thumbnail}
                        </FormItem>
                        <FormItem label="Category" {...formItemLayout}>
                            {p.taskCategory}
                        </FormItem>
                        <FormItem label="Type"  {...formItemLayout}>
                            {p.taskType}
                        </FormItem>
                        <FormItem label="Description" {...formItemLayout}>
                            {p.taskDesc}
                        </FormItem>
                        <FormItem label="Candidates" {...formItemLayout}>
                            <Row>
                                <Col span={3}>
                                    {/*<InputNumber size="large" name="taskCandLimit"/>*/}
                                    {p.taskCandLimit}
                                </Col>
                                <Col class="midLabel" span={6}>
                                    Max Accepted:
                                </Col>
                                <Col span={3}>
                                    {/*<InputNumber size="large" name="taskCandSltLimit"/>*/}
                                    {p.taskCandSltLimit}
                                </Col>
                            </Row>
                        </FormItem>

                        <FormItem label="ELA Upfront" {...formItemLayout}>
                            {p.taskRewardUpfront}
                        </FormItem>
                        <FormItem label="ELA Reward" {...formItemLayout}>
                            {p.taskReward}
                        </FormItem>

                        <FormItem wrapperCol={{xs: {span: 24, offset: 0}, sm: {span: 12, offset: 8}}}>
                            <Button loading={this.props.loading} type="ebp" htmlType="submit" className="d_btn">
                                {this.props.is_admin ? 'Create Task' : 'Submit Proposal'}
                            </Button>
                        </FormItem>
                    </div>
                </Form>
            </div>
        )

    }
}
export default Form.create()(C)
