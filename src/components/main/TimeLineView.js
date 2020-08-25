import React from 'react';
import TimeLineAdd from './TimeLineAdd';
import PostItem from './PostItem';
import axios from 'axios'

class TimeLineView extends React.Component {
    state = {
      isLoading: true,
      posts: [],
      params : 1
    };
    
    config = {
        headers : {'access-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQwYmJjMTRkYmE4NTIxOGU5MWRiYzNiMDc5ZDYwNGQ0IiwiZW1haWwiOiJzZXVuZ2Jpbjk4NTBAZHNtLmhzLmtyIiwibmlja25hbWUiOiJuaWNrbmFtZSIsImlhdCI6MTU5ODM4MjI2MCwiZXhwIjoxNTk4Mzg0MDYwfQ.5adhspUuPuo2gSWenwUbbUk4Ot0ZJCECEKsQFk4BYf8'}
    }
  
    async getPosts() {
      const res = await axios.get("http://3.34.198.6:3000/timeline/" + this.state.params, this.config);
      this.setState({isLoading : false})
      console.log(res)
      this.setState({posts : res.data.timelines})
    };
    async componentDidMount() {
      this.getPosts();
    }
  
    render() {
    console.log(this.state.posts)
      const { isLoading, posts } = this.state;
      return (
        <div>
          {isLoading ? (
            <TimeLineAdd></TimeLineAdd>
          ) : (
            <div>
                <TimeLineAdd></TimeLineAdd>
              {posts.map((post) => (
                <PostItem
                  key={post.id}
                  email={post.User.email}
                  content={post.content}
                  nickname={post.User.nickname}
                  userImg={post.User.img}
                  uploadImg={post.Images.img}></PostItem>
              ))}
            </div>
          )}
        </div>
      );
    }
  }
export default TimeLineView;