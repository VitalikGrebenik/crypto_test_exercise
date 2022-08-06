import React, { useEffect, useState } from 'react'
import style from './SectionThree.module.scss'
import { observer, inject } from "mobx-react"
import {Button, Typography} from '@mui/material';
import CardItem from './sectionCard/CardItem';
import { IInfo } from '../../modeles/models';
import InfoStore from '../../stores/infoStore'


type IInfoProps = {
	infoStore?: InfoStore
}

const SectionThree = inject('infoStore')(observer(({infoStore}:IInfoProps) => {
	const info:IInfo[] = infoStore!.getInfo
	const infoTwo:IInfo[] = infoStore!.getTwoInfo

	useEffect(()=>{
		if(infoStore){
			infoStore.fetchInfo();			
			setInterval(() => {
				infoStore.fetchInfo();
			  }, 30 * 1000);
		}
	},[])

	useEffect(()=>{
		if(infoStore){
			infoStore.fetchTwoInfo();
			setInterval(() => {
				infoStore.fetchTwoInfo();
			  }, 30 * 1000);
		}
	},[])
	

	const [addPost,setAddPost] = useState([0,3])
	const renderaddpost = ()=>{
		setAddPost(addPost.map(i=>i+3))
	}

  return (
	<section>
		<div className='container'>
			<div className={style.section}>
				<div className={style.section__title}>
					<Typography sx={{padding: '20px 0'}}variant="h5" gutterBottom component="div">
						Airdrops & Giveways 
					</Typography>
					<Button variant="outlined" onClick={renderaddpost}>Show more</Button>
				</div>
				<div className={style.section__card}>
					{
						info.slice(addPost[0],addPost[1]).map(item=><CardItem key={item.id} info={item}/>)
					}
				</div>
				<div className={style.section__card}>
					{
						infoTwo.map(item=><CardItem key={item.id} info={item}/>)
					}
				</div>
			</div>
		</div>
	</section>
  )
}))

export default SectionThree