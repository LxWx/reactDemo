import React from 'react';
// import PropTypes from 'prop-types';
import '../style/css/main.css'
const search = (props) => (
    <div>
    <div className="index-main" id="J-index-main" style={{position:'relative',height:'478px',}}>
	<img className="index-image" src="https://img.alicdn.com/tfs/TB14TEEm7CWBuNjy0FaXXXUlXXa-1440-478.png" style={{verticalAlign: 'middle',width:'100%',}} alt="" />
	<div style={{position: 'absolute',top:0,left:0,width: '100%',height: '100%',background: 'rgba(31,56,88,0.40)',}}></div>
	<div className="index-mid-box" style={{height:'100%',}}>
		<form className="J-search-form">
			<div className="float-mid" style={{top: '50%',marginLeft: '-245px',marginTop: '-145px',}}>
				<p style={{fontSize: '54px',color: '#fff',lineHeight: '56px',}}>If not now, when?</p>
				<p style={{fontSize: '54px',color: '#fff',lineHeight: '56px',}}>If not me, who?</p>
				<p style={{fontSize: '34px',color: '#fff',marginBottom:'38px',lineHeight: '48px',}}>此时此刻，非我莫属！</p>
				<div className="search-box" style={{width:'490px',height:'60px',position: 'relative',border:'0px',background:'none',margin:'0 auto',}}><span id="012501601168374732_span" className="search-topic" style={{left: '15px'}}>请输入职位关键词</span>
					<div style={{width:'100%',height:'100%',background:'#fff',position:'absolute',opacity: '0.1', filter:'alpha(opacity=10)',}}></div>
					<input type="text" topic="请输入职位关键词" style={{width:'368px',height:'40px',paddingTop: '6px',marginTop:'6px',marginLeft:'10px',boxSizing: 'border-box',borderRadius:'3px',}} className="search-text" id="012501601168374732" />
					<input className="search-btn" data-spm-click="gostr=/hr,locaid=searchPosition" type="submit" style={{color:'#fff',background:'#F37327',fontSize:'14px',fontFamily:'PingFangSC-Regular',width: '92px',height: '40px',borderRadius:'3px',marginTop:'10px',marginLeft:'10px',position: 'relative',zIndex:2,}} value="搜索" />
				</div>
				<div className="hot-text" style={{textAlign:'center',}}>
					热门搜索：
						<a className="search-key" href="javascript:void()">JAVA</a>
						<a className="search-key" href="javascript:void()" >IOS</a>
						<a className="search-key" href="javascript:void()" >数据</a>
						<a className="search-key" href="javascript:void()" >安全</a>
						<a className="search-key" href="javascript:void()" >搜索</a>
						<a className="search-key" href="javascript:void()" >算法</a>
						<a className="search-key" href="javascript:void()" >运营</a>
						<a className="search-key" href="javascript:void()" >视觉</a>
						<a className="search-key" href="javascript:void()" >交互</a>
						<a className="search-key" href="javascript:void()" >前端</a>
				</div>
			</div>
		</form>
	</div>
</div>
    </div>
)
export default search