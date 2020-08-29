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
        headers : {'access-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ3MzE1Y2Y1NjBhYWQ5ZjRiYzFkMWQxNzEwNzkyNjkwIiwiZW1haWwiOiJzZXVuZ2Jpbjk4NTBAZ21haWwuY29tIiwibmlja25hbWUiOiJ5c2IiLCJpYXQiOjE1OTg2ODc2NTYsImV4cCI6MTU5ODY4OTQ1Nn0.QykYkrX6Kn83b_3Xvz4wNo0Ek0zisSEREMJyjTPwuuo'}
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
        axios.get("http://52.78.186.198:3000/timeline/" + this.state.params, this.config)
          .then((response) => {
            const fetchedData = response.data.timelines; 
            const mergedData = this.state.posts.concat(...fetchedData);
            this.setState({posts : mergedData});
        });
      };
      
    async getPosts() {
       const res = await axios.get("http://52.78.186.198:3000/timeline/" + this.state.params, this.config);
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
                  id={post.id}
                  email={post.User.email}
                  content={post.content}
                  isMine={post.isMine}
                  isLike={post.isLike}
                  date={post.createdAt}
                  nickname={post.User.nickname}
                  userImg={post.User.img}
                  uploadImg={post.Images}
                  ></PostItem>
              ))}
            </div>
          )}
        </div>
      );
    }
  }
export default TimeLineView;