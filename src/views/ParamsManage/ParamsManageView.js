import React, { Component, PropTypes } from 'react'
import { Table, Row, Col, Button, Modal, DatePicker, Dropdown, Icon, message, Select, Pagination } from 'antd'
import ReactEcharts from 'echarts-for-react'
import './ParamsManage.scss'

export default class PageRetain extends Component {
	constructor(props){
		super(props)
	}
	handleClick(e){
		const childs = e.currentTarget.parentNode.childNodes;
		for(let i=0; i < childs.length; i++){
			childs[i].classList.remove('active');
		}
		e.currentTarget.classList.add('active');
	}
	render(){
		const columns = [{
	      title: '自定义事件',
	      dataIndex: 'userDefine',
	      key: 'userDefine',
	      sorter: (a, b) => a.userDefine - b.userDefine
	    }, {
	      title: '参数key',
	      dataIndex: 'keyParam',
	      key: 'keyParam'
	    }, {
	      title: '参数备注名',
	      dataIndex: 'paramName',
	      key: 'paramName'
	    }, {
	      title: '创建日期/创建人',
	      dataIndex: 'creator',
	      key: 'creator',
	      sorter: (a, b) => a.creator - b.creator
	    }, {
	      title: '操作',
	      dataIndex: 'operation',
	      key: 'operation'
	     
	    }];
	    const data = [{
	    	firstUserTime: '05/02',
			activeUserNum: '3',
			plus1: '0%',
			plus2: '0%',
			plus3: '0%',
			plus4: '0%',
			plus5: '0%',
			plus6: '0%',
			plus7: '0%',
			plus15: '0%'
	    }];
		return (
			<div className='layout-container'>
				<Row className='header-container'>
      				<Col span={6} className='fix-left'><h5>参数管理</h5><Icon type="question-circle" /></Col>
    			</Row>
    			<Row style={{marginBottom:'-1px',position: 'static'}}>
    				<ul className='nav-bar'>
	    				<li onClick={e => this.handleClick(e)} className='active'><a>页面参数</a></li>
	    				<li onClick={e => this.handleClick(e)} className='last-li'><a>自定义事件参数</a></li>
    				</ul>
    			</Row>
    			<Row style={{padding:'20px 10px',position:'static',marginBottom:'-1px',border:'1px solid #e9e9e9'}}>
    				<Select
    						showSearch
    						style={{ width: 150 }}
    						defaultValue="all"
    						size='large'
  						>
    						<Option value="all">所有自定义事件</Option>
  					</Select>
  					<Button style={{marginLeft:'30px',background: '#28b5d6',color: '#fff',position:'absolute',right:'40px'}}>新增参数</Button>
    			</Row>
    			<Row>
	    			<div className='table-title-bar'>
	    				<div className='table-title-text'>事件参数列表</div>
	    				<div className='inputBox'>
	    					<input type="text" placeholder='输入关键字进行搜索...' style={{width:'130px',height:'30px'}}/>
	    				</div>
	    				<div className='outputBtn'><Button onClick={this.outputClick}>查询</Button></div>
	    			</div>
					<Table
    					columns={columns}
    					// dataSource={data}
    					className="tableContent"
    					onChange={this.handleChange}
    					style={{ border:'1px solid #e9e9e9' }}
 					/>
    			</Row>
			</div>
		)
	}
}