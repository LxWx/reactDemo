import React from 'react';
import PropTypes from 'prop-types';
import './index.css'
export class List extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.num = 0;
    this.timer = null;
  }
  
  componentDidMount() {
    this.timer = setInterval(this.Marquee1,30)
    this.myRef.current.addEventListener('mouseover', () => {
      clearInterval(this.timer)
    })
    this.myRef.current.addEventListener('mouseout', () => {
      this.timer = setInterval(this.Marquee1,30)
    })
  }
  Marquee1 = () => {
    let max = 0;
    if (this.props.max !== undefined) {
      max = this.props.max
    } else {
      max = -100
    }
    if(this.myRef.current.offsetTop <= max){
      this.num = 0;
      this.myRef.current.style.top=0;
    }
    else
    {
      const nums = this.num--
      this.myRef.current.style.top = nums + 'px';
    }
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  render() {
    return (
      <div className='newPosition-list' style={{width:'850px',height:'300px'}}>
        <div className="more-positon">
          最新职位
          <a className="clickMorePosition" data-spm-click="gostr=/hr;locaid=newPositionMore">更多</a>
        </div>
        <ul className="position-list" ref={this.myRef}>
          {
            this.props.list.map((it, n) => {
              return (
                <li key={n} className="scroll-5">
                  <a href={it.href} className="position">{it.name}</a>
                  <em className="time">{it.time}</em>
                  <em className="city" title={it.city}>{it.city}</em>
              </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
List.propTypes = {
  list: PropTypes.array.isRequired,
  max: PropTypes.number
}
List.defaultProps = {
  list: [{
      name: '首页',
      href: 1,
      time: 1,
      city: 1
  },{
    name: '首页',
    href: 1,
    time: 1,
    city: 1
},{
  name: '首页',
  href: 1,
  time: 1,
  city: 1
},{
  name: '首页',
  href: 1,
  time: 1,
  city: 1
},{
  name: '首页',
  href: 1,
  time: 1,
  city: 1
},{
  name: '首页',
  href: 1,
  time: 1,
  city: 1
},{
  name: '首页',
  href: 1,
  time: 1,
  city: 1
},{
  name: '首页',
  href: 1,
  time: 1,
  city: 1
},{
  name: '首页',
  href: 1,
  time: 1,
  city: 1
},{
  name: '首页',
  href: 1,
  time: 1,
  city: 1
},{
  name: '首页',
  href: 1,
  time: 1,
  city: 1
},{
  name: '首页',
  href: 1,
  time: 1,
  city: 1
},{
  name: '首页',
  href: 1,
  time: 1,
  city: 1
},{
  name: '首页',
  href: 1,
  time: 1,
  city: 1
},{
  name: '首页',
  href: 1,
  time: 1,
  city: 1
},{
  name: '首页',
  href: 1,
  time: 1,
  city: 1
},{
  name: '首页',
  href: 1,
  time: 1,
  city: 1
},{
  name: '首页',
  href: 1,
  time: 1,
  city: 1
},{
  name: '首页',
  href: 1,
  time: 1,
  city: 1
},{
  name: '首页',
  href: 1,
  time: 1,
  city: 1
},{
  name: '首页',
  href: 1,
  time: 1,
  city: 1
},{
  name: '首页',
  href: 1,
  time: 1,
  city: 1
},{
  name: '首页',
  href: 1,
  time: 1,
  city: 1
},{
  name: '首页',
  href: 1,
  time: 1,
  city: 1
},{
  name: '首页',
  href: 1,
  time: 1,
  city: 1
},{
  name: '首页',
  href: 1,
  time: 1,
  city: 1
},{
  name: '首页',
  href: 1,
  time: 1,
  city: 1
},{
  name: '首页',
  href: 1,
  time: 1,
  city: 1
},{
  name: '首页',
  href: 1,
  time: 1,
  city: 1
},{
  name: '首页',
  href: 1,
  time: 1,
  city: 1
},{
  name: '首页',
  href: 1,
  time: 1,
  city: 1
},{
  name: '首页',
  href: 1,
  time: 1,
  city: 1
},{
      name: '首页',
      href: 1,
      time: 1,
      city: 1
  },{
    name: '首页',
    href: 1,
    time: 1,
    city: 1
},{
      name: '首页',
      href: 1,
      time: 1,
      city: 1
  },{
    name: '首页',
    href: 1,
    time: 1,
    city: 1
},{
  name: '首页',
  href: 1,
  time: 1,
  city: 1
},{
  name: '首页',
  href: 1,
  time: 1,
  city: 1
},{
  name: '首页',
  href: 1,
  time: 1,
  city: 1
},{
  name: '首页',
  href: 1,
  time: 1,
  city: 1
},{
  name: '首页',
  href: 1,
  time: 1,
  city: 1
},{
  name: '首页',
  href: 1,
  time: 1,
  city: 1
},{
  name: '首页',
  href: 1,
  time: 1,
  city: 1
},{
  name: '首页',
  href: 1,
  time: 1,
  city: 1
},]
}
export default List;
