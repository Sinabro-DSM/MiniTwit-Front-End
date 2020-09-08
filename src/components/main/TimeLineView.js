import React from 'react';
import TimeLineAdd from './TimeLineAdd';
import PostItem from './PostItem';
import axios from 'axios'
import Sidebar from '../Sidebar/Sidebar'
import Header from '../header/Header'

class TimeLineView extends React.Component {
  constructor(props) {
    super(props);
  }
    scrollHeight = document.documentElement.scrollHeight;
    scrollTop = document.documentElement.scrollTop;
    clientHeight = document.documentElement.clientHeight;
    state = {
      isLoading: false,
      loading : true,
      setFetching : false,
      posts: [],
      userImg : "",
      params : 1,
      userName: "",
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
        axios.get(this.props.baseUrl + "timeline/" + this.state.params, this.config)
          .then((response) => {
            const fetchedData = response.data.timelines; 
            if(this.scrollTop + this.clientHeight >= this.scrollHeight)
            {
                const mergedData = this.state.posts.concat(...fetchedData);
                this.setState({posts : mergedData}); 
            }
        });
      };
    getPosts() {
      const res = axios.get(this.props.baseUrl + "timeline/" + this.state.params, this.config)
      .then((res) => {
        console.log(this.state.params)
         console.log(res)
         this.setState({posts: res.data.timelines})
         this.setState({userImg: res.data.userImg})
         this.setState({userName: res.data.nickname})
         console.log(this.state.posts)
      })
      .catch((error) => {
        if(error.response.status === 403)
        {
          console.log('hi')
          this.props.refresh();
        }
      })
    };

    async componentDidMount() {
        this.getPosts()
        window.addEventListener("scroll", this.handleScroll);
        return () => {
            window.removeEventListener("scroll", this.handleScroll);
        };
      }
      
    render() {
      
      const { isLoading, posts, userImg, userName } = this.state;
      return (
        <div>
          {isLoading ? (
            <TimeLineAdd></TimeLineAdd>
          ) : (
            <div>
                <Sidebar></Sidebar>
                <Header name={userName}></Header>
                <TimeLineAdd baseUrl={this.props.baseUrl} userImg={userImg}></TimeLineAdd>
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
                  baseUrl={this.props.baseUrl}
                  ></PostItem>
              ))}
            </div>
          )}
        </div>
      );
    }
  }
export default TimeLineView;