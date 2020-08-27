import React from 'react';
import TimeLineAdd from './TimeLineAdd';
import PostItem from './PostItem';
import axios from 'axios'

class TimeLineView extends React.Component {
    state = {
      isLoading: true,
      loading : true,
      setFetching : false,
      posts: [],
      params : 1
    };
    
    config = {
        headers : {'access-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjRmY2Q5ZmM5YmExOTcwMGE5NDY4YTY2N2U3Y2ZkMzExIiwiZW1haWwiOiJzZXVuZ2Jpbjk4NTBAZ21haWwuY29tIiwibmlja25hbWUiOiJ5c2IiLCJpYXQiOjE1OTg1NDA0MDQsImV4cCI6MTU5ODU0MjIwNH0.O9Og8ki0IxVrU9SmiK6cDWvxva7wH0_KMICWM5wEjXs'}
    }

    handleScroll = () => {
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;
        const clientHeight = document.documentElement.clientHeight;
        if (scrollTop + clientHeight >= scrollHeight && this.state.isLoading === false) {
          this.getMorePosts();
          this.setState(() => {
            return {params: this.state.params + 1};
          });
        }
       };

       getMorePosts = () => {
        axios.get("http://3.34.99.55:3000/timeline/" + this.state.params, this.config)
          .then((response) => {
            const fetchedData = response.data.timelines; // 피드 데이터 부분
            // 기존 데이터 배열과 새로 받아온 데이터 배열을 합쳐 새 배열을 만들고 state에 저장한다. 
            const mergedData = this.state.posts.concat(...fetchedData);
            this.setState({posts : mergedData});
        });
      };
      
  
    async getPosts() {
       const res = await axios.get("http://3.34.99.55:3000/timeline/" + this.state.params, this.config);
        this.setState({isLoading : false})
        console.log(this.state.params)
        console.log(res)
      
        this.setState({posts : res.data.timelines})
        console.log(this.state.posts)
    };
    
    async componentDidMount() {
        this.getPosts();
        window.addEventListener("scroll", this.handleScroll);
          return () => {
              window.removeEventListener("scroll", this.handleScroll);
          };
      }
  
    render() {
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