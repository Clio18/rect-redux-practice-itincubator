import classes from './Post.module.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

function Post(props) {
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
    <div className={classes.container}>
      <Typography variant='h5' className={classes.container_header}>
        Books
      </Typography>
      <div className={classes.container_workarea}>
        <div className={classes.workarea_input}>
          <TextField
            id='margin-dense'
            margin='dense'
            label='Title'
            size='small'
            variant='filled'
            color='secondary'
            value={props.postCont.newPost.newTitle}
            onChange={updateTitleHandler}
          />
        </div>
        <div className={classes.workarea_textarea}>
          <TextField
            label='Description'
            size='normal'
            variant='filled'
            value={props.postCont.newPost.newMessage}
            onChange={updateMessageHandler}
          />
        </div>
        <div className={classes.workarea_button}>
          <Button
            onClick={sendMessageHandler}
            variant='contained'
            color='success'
            size='small'
          >
            Send
          </Button>
        </div>
        <div className={classes.workarea_link}>
          <Link to='/posts' style={{ textDecoration: 'none' }}>
            Show all books
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Post;
