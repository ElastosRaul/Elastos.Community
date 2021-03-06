import {createContainer} from '@/util'
import Component from './Component'
import TaskService from '@/service/TaskService'
import _ from 'lodash'

import {TASK_CATEGORY, TASK_TYPE} from '@/constant'

export default createContainer(Component, (state) => {

    let taskState = state.task

    if (!_.isArray(state.task.all_tasks)) {
        taskState.all_tasks = _.values(state.task.all_tasks)
    }

    taskState.is_admin = state.user.is_admin

    return taskState
}, () => {

    const taskService = new TaskService()

    return {
        async getDeveloperEvents () {
            return taskService.index({
                category: TASK_CATEGORY.DEVELOPER,
                type: TASK_TYPE.EVENT
            })
        },

        async reset() {
            return taskService.resetAllTasks()
        }
    }
})
