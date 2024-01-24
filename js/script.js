/**
 * Initializes click events for each .task-trash element and its confirm and cancel buttons.
 */
$('.task-trash').each(function () {
    // Elements
    const taskTrashEl = $(this);
    const taskTrashConfirmEl = taskTrashEl.find('.task-trash-confirm');
    const taskTrashCancelEl = taskTrashEl.find('.task-trash-cancel');

    /**
     * Confirms the action, hides the task, removes 'active' class, and removes event listeners.
     */
    const confirmTrash = () => {
        // Hides the task element and removes 'active' class
        taskTrashEl.hide();
        taskTrashEl.removeClass('active');

        // Removes event listeners after use
        taskTrashConfirmEl.off('click', confirmTrash);
        taskTrashCancelEl.off('click', cancelTrash);

        // Restores the click event listener after a short delay
        setTimeout(() => {
            taskTrashEl.on('click', displayChoices);
        }, 10);
    };

    /**
     * Cancels the action and removes 'active' class from the task.
     */
    const cancelTrash = () => {
        // Removes 'active' class from the task element
        taskTrashEl.removeClass('active');

        // Removes event listeners after use
        taskTrashConfirmEl.off('click', confirmTrash);
        taskTrashCancelEl.off('click', cancelTrash);

        // Restores the click event listener after a short delay
        setTimeout(() => {
            taskTrashEl.on('click', displayChoices);
        }, 10);
    };

    /**
     * Displays the confirmation and cancellation choices for the task.
     */
    const displayChoices = () => {
        let hasNotActive = !taskTrashEl.hasClass('active');

        if (hasNotActive) {
            // Adds 'active' class to the task element
            taskTrashEl.addClass('active');

            // Adds click event listener for confirm and cancel buttons
            taskTrashConfirmEl.on('click', confirmTrash);
            taskTrashCancelEl.on('click', cancelTrash);
        }

        // Removes the event listener to avoid click conflicts
        taskTrashEl.off('click', displayChoices);
    };

    // Adds click event listener to the trash button
    taskTrashEl.on('click', displayChoices);
});
