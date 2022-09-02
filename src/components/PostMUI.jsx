import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';

function PostMUI(props) {
  const updateMessageHandler = (event) => {
    let body = event.target.value;
    props.updateMessage(body);
  };

  const updateTitleHandler = (event) => {
    let body = event.target.value;
    props.updateTitle(body);
  };

  const sendMessageHandler = () => {
    props.sendMessage();
  };

  return (
    <Stack spacing={2} marginTop="20px" alignItems="center">
      <Stack
        direction="column"
        spacing={2}
        width="25%"
        margin-left="auto"
        margin-right="auto"
      >
        <Typography
          variant="h5"
          textAlign="center"
          textTransform="uppercase"
          fontWeight="bold"
          letterSpacing="4px"
        >
          Books
        </Typography>
        <TextField
          id="margin-dense"
          margin="dense"
          label="Title"
          size="small"
          variant="filled"
          color="secondary"
          value={props.postCont.newPost.newTitle}
          onChange={updateTitleHandler}
        />
        <TextField
          label="Description"
          size="normal"
          variant="filled"
          value={props.postCont.newPost.newMessage}
          onChange={updateMessageHandler}
        />
        <Button
          onClick={sendMessageHandler}
          variant="contained"
          color="success"
          size="small"
        >
          Send
        </Button>
        <Link
          to="/posts"
          style={{ textDecoration: 'none', textTransform: 'uppercase' }}
        >
          Show all books
        </Link>
      </Stack>
    </Stack>
  );
}

export default PostMUI;
