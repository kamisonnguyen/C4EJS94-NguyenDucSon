const task = {
    subject: 'Implement login feature',
    createdBy: 'Hoang Ngoc Duc',
    assignTo: 'Nguyen Phuong Nam',
    dueDate: '2019-10-08T18:00:24+0000',
    expectedHours: 0.5,
    };
    console.log("use one line of code to destructure to obtain subject, dueDate and assignTo from this object:")
    let {subject, dueDate, assignTo} = task;
    
    console.log(subject,dueDate,assignTo);

    console.log(task.subject, task.dueDate, task.assignTo);