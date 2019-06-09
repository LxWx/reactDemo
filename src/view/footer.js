import React from 'react';
import PropTypes from 'prop-types';
import List from '../component/list/index'
import '../style/css/main.css'
const footer = (props) => (
    [
        <div key="1" className="newPosition-content" style={{width:'1180px',height:'300px',margin:'32px auto'}}>
        <List />
        <div style={{width:'310px',float:'right'}}>
			<a className="show-pic pic-1 jumpToAliyun" href="https://www.aliyun.com/careers" data-spm-click="gostr=/hr;locaid=aliyun" style={{textAlign:'center',lineHeight:'140px'}}><img style={{width:'179px',verticalAlign: 'middle'}} src="https://img.alicdn.com/tfs/TB1Z7JvoxGYBuNjy0FnXXX5lpXa-358-136.png" /></a>
			<a className="show-pic pic-2 jumpToEhr" href="https://job.alibaba.com/zhaopin/informationPlatformBu.htm?" data-spm-click="gostr=/hr;locaid=xinxipingtai" style={{textAlign:'center',lineHeight:'140px'}}><img style={{width:'260px',verticalAlign: 'middle'}} src="https://img.alicdn.com/tfs/TB18tFCCH2pK1RjSZFsXXaNlXXa-240-34.svg" /></a>
		</div>
    </div>,
    <div key="2" className="index-footer">
        <div className="footer-content" style={{textAlign: 'center'}}>
            阿里巴巴集团 Copyright ©1999-2019 版权所有
        </div>
    </div>
    ]
    
);
footer.propTypes = {

}
footer.defaultProps = {

}
export default footer;