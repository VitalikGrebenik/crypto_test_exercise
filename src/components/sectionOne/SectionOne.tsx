import React from 'react'
import style from './sectionOne.module.scss'
import {Typography, Chip} from '@mui/material';

const SectionOne = () => {
  return (
	<section className={style.section__one}>
		<div className='container'>
			<div className={style.section}>
				<div className={style.left}>
				<Typography variant="h2" sx={{fontWeight:600, marginBottom: '10px'}} gutterBottom component="div">
					Sigh up and get a guaranteed reward
				</Typography>
				<Typography variant="subtitle1" gutterBottom component="div">
					subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
				</Typography>
				<div className={style.items}>
					<Chip label="Airdrops" sx={{fontWeight:500,backgroundColor: '#feeefa', color: '#ff78ea'}} />
					<Chip label="Giveaways" sx={{fontWeight:500, backgroundColor: '#bfffa9', color: '#699e58'}} />
					<Chip label="Trading competitions" sx={{ fontWeight:500 ,backgroundColor: '#c9d4ff', color: '#39446f'}} />
				</div>
				</div>
				<div className={style.right}>
					<img src="" alt="icon" />
				</div>
			</div>
		</div>
	</section>
  )
}

export default SectionOne