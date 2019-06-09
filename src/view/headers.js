import React from 'react';
import PropTypes from 'prop-types';
import '../style/css/main.css'
const headers = (props) => (
    <div>
        <div className="head">
             <div className="head-main">
                 <div className="head-menu">
                    <div className="login">    
					欢迎来到阿里巴巴集团招聘！		
                    <a href="https://passport.alibaba.com/login.htm?appName=hrjob&amp;params=https%3A%2F%2Fjob.alibaba.com%2F%2Fzhaopin%2Findex.htm" target="_top">登录</a>
                    <a href="http://member1.taobao.com/member/newbie.htm">注册</a>															
                    </div>
                    <ul id="menu">
                    {
                        props.list.map((it, n) => {
                            return (
                                <li key={n}>
                                    <a href={it.href}>
                                        {it.name}
                                    </a>
                                </li>
                            )
                        })
                    }
                    </ul>
                 </div>
                 <a href="https://job.alibaba.com/zhaopin/index.htm" className="logo" style={{textAlign:'right',width: '125px'}}><img src="https://img.alicdn.com/tfs/TB1Zv8_lxSYBuNjSspjXXX73VXa-390-63.png" height="20" alt="" />
                 </a>
                 <i style={{float:'left',color:'white',fontStyle:'normal',fontSize:'20px',lineHeight:'52px',margin: '0 10px',opacity: 0.8}}>|</i>
                 <i style={{float:'left',color:'white',fontStyle:'normal',fontSize:'14px',lineHeight:'54px',opacity: 0.8}}>社招官网</i>
             </div>
             
        </div>
    </div>
);
headers.propTypes = {
    list: PropTypes.array.isRequired
}
headers.defaultProps = {
    list: [{
        name: '首页',
        href: 1
    },{
        name: '社会招聘',
        href: 1
    },{
        name: '校园招聘',
        href: 1
    },{
        name: '了解阿里',
        href: 1
    },{
        name: '个人中心',
        href: 1
    }]
}
export default headers;