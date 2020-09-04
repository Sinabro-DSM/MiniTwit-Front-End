import React from 'react';
import TimeLineAdd from './TimeLineAdd';
import PostItem from './PostItem';
import axios from 'axios'

class TimeLineView extends React.Component {
    scrollHeight = document.documentElement.scrollHeight;
    scrollTop = document.documentElement.scrollTop;
    clientHeight = document.documentElement.clientHeight;
    timelineUrl = "http://15.164.213.251:3000/"
    state = {
      isLoading: true,
      loading : true,
      setFetching : false,
      posts: [],
      userImg : "",
      params : 1
    };
    token = localStorage.getItem('accessToken')
    refreshToken = localStorage.getItem('refreshToken')
    config = {
        headers : {'access-token' : this.token}
    }
    refreshConfig = {
      headers : {'refresh-token' : this.refreshToken}
    }

    handleScroll = () => {
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;
        const clientHeight = document.documentElement.clientHeight;
        if (scrollTop + clientHeight >= scrollHeight && this.state.isLoading === false) {
            console.log(this.state.posts)
                this.getMorePosts();
            
            
          this.setState(() => {
            return {params: this.state.params + 1};
          });
        }
       };
       
       getMorePosts = () => {
        axios.get(this.timelineUrl + "timeline/" + this.state.params, this.config)
          .then((response) => {
            const fetchedData = response.data.timelines; 
            if(this.scrollTop + this.clientHeight >= this.scrollHeight)
            {
                const mergedData = this.state.posts.concat(...fetchedData);
                this.setState({posts : mergedData}); 
            }
        });
      };
      
    async getPosts() {
      try {
        const res = await axios.get(this.timelineUrl + "timeline/" + this.state.params, this.config);
        this.setState({isLoading : false})
         console.log(this.state.params)
         console.log(res)
         this.setState({posts : res.data.timelines})
         this.setState({userImg : res.data.userImg})
         console.log(this.state.posts)
      }
      catch(e) {
        console.log(e);
        if(e.response.status == 403)
        {
          this.refresh();
        }
      }
        
    };

    refresh()
    {
          axios.get(this.timelineUrl + "user/refresh",this.refreshConfig)
          .then((res) => {
            console.log(res)
            localStorage.setItem('accessToken', res.data.accessToken);
            window.location.reload();
          })
          .catch((error) => {
            console.log(error)
          })
        
    }
    
    async componentDidMount() {
        this.getPosts()
        window.addEventListener("scroll", this.handleScroll);
        return () => {
            window.removeEventListener("scroll", this.handleScroll);
        };
      }
      
    render() {
      const { isLoading, posts, userImg } = this.state;
      return (
        <div>
          {isLoading ? (
            <TimeLineAdd></TimeLineAdd>
          ) : (
            <div>
                <TimeLineAdd userImg={userImg}></TimeLineAdd>
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