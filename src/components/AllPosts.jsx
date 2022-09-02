import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import classes from './AllPosts.module.css';

const AllPosts = function (props) {
  let array = props.props.postsForPage;
  if (array.length === 0) {
    array = props.props.posts;
  }

  return (
    <>
      <Button variant="text" style={{ marginLeft: 30 }}>
        <Link to="/input">Get Back</Link>
      </Button>
      <div>
        {props.pages.map((p) => {
          return (
            <span
              key={p}
              className={props.currentPage === p ? classes.selectedPage : ''}
              onClick={() => {
                props.onPageChaned(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      <div>
        <div>
          {array.map((p) => {
            return (
              <ul key={Math.random()}>
                <li key={p.id}>
                  {
                    <div>
                      <div>
                        <Typography style={{ fontWeight: 'bold' }}>
                          {p.newTitle}
                        </Typography>
                      </div>
                      <div>
                        <Typography variant="h8">{p.newMessage}</Typography>
                      </div>
                      <div>
                        <Typography
                          style={{ fontStyle: 'italic', fontWeight: 'lighter' }}
                        >
                          {p.time}
                        </Typography>
                      </div>
                    </div>
                  }
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AllPosts;
