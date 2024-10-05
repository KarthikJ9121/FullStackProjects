let todo = []

document.addEventListener("keypress", function()
{
    let req = prompt('Enter What you want to do next: \n1.quit\n2.list\n3.add\n4.delete');
    todoStarted(req);
});

function todoStarted(req)
{
    
    while(true)
    {
        if(req == 1)
        {
            if(todo.length === 0)
            {
                console.log("You dont Have any Items \n in your Todo");
                break;
            }
            console.log("Quit Successful");
            console.log("----------Todo List------------")
            for(let i = 0; i < todo.length; i++)
            {
                console.log(i, ' : ', todo[i]);
            }
            console.log("-------------------------------")
            break;
        }
    
        else if(req == 2)
        {
            if(todo.length === 0)
                console.log("Empty Todolist");
            else
            {
                console.log("---------Your TodoList-------------");
                for(let i = 0; i < todo.length; i++)
                {
                    console.log(i + 1, ' : ', todo[i]);
                }
                console.log("-----------------------");
            }
        }
        
        else if(req == 3)
        {
            let task = prompt("Enter the task");
            todo.push(task);
            console.log("Task Added");
        }
    
        else if(req == 4)
        {
            let taskNo = prompt("Enter the Task No.");
            todo.splice(taskNo, 1);
            console.log("task Deleted");
        }
        else
        {
            console.log("Option Invalid");
            break;
        }
        req = prompt('Enter What you want to do next: \n1.quit\n2.list\n3.add\n4.delete');
    }
}