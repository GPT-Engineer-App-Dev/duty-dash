import { useState } from 'react';
import { Box, Button, Input, List, ListItem, IconButton } from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';

const TodoPage = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const handleAddTask = () => {
    if (input) {
      setTasks([...tasks, input]);
      setInput('');
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <Box p={4}>
      <Input
        placeholder="Add a new task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
      />
      <Button onClick={handleAddTask} mt={2}>Add Task</Button>
      <List spacing={3} mt={4}>
        {tasks.map((task, index) => (
          <ListItem key={index} d="flex" justifyContent="space-between" alignItems="center">
            {task}
            <IconButton
              icon={<FaTrash />}
              onClick={() => handleDeleteTask(index)}
              aria-label="Delete task"
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TodoPage;