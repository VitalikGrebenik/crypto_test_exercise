import React from 'react'
import {Typography} from '@mui/material';
import style from './sectionTwo.module.scss'

const SectionTwo = () => {
  return (
	<section>
		<div className='container'>
			<div className={style.section}>
				<div className={style.items}>
					<div className={style.item}>
						<Typography variant="h2" sx={{fontWeight:600, fontSize: '80px' ,color: 'gray', marginBottom: '10px'}} gutterBottom component="div">
							1
						</Typography>
						<Typography variant="subtitle1" gutterBottom component="div">
							subtitle1. Lorem ipsum dolor sit amet
						</Typography>
					</div>
				</div>
				<div className={style.items}>
					<div className={style.item}>
						<Typography variant="h2" sx={{fontWeight:600, fontSize: '80px' , color: 'gray', marginBottom: '10px'}} gutterBottom component="div">
							2
						</Typography>
						<Typography variant="subtitle1" gutterBottom component="div">
							subtitle1. Lorem ipsum dolor sit amet
						</Typography>
					</div>
				</div>
				<div className={style.items}>
				<div className={style.item}>
						<Typography variant="h2" sx={{fontWeight:600, fontSize: '80px' , color: 'gray', marginBottom: '10px'}} gutterBottom component="div">
							3
						</Typography>
						<Typography variant="subtitle1" gutterBottom component="div">
							subtitle1. Lorem ipsum dolor sit amet
						</Typography>
					</div>
				</div>
				<div className={style.items}>
				<div className={style.item}>
						<Typography variant="h2" sx={{fontWeight:600, fontSize: '80px' , color: 'gray', marginBottom: '10px'}} gutterBottom component="div">
							4
						</Typography>
						<Typography variant="subtitle1" gutterBottom component="div">
							subtitle1. Lorem ipsum dolor sit amet
						</Typography>
					</div>
				</div>
			</div>
		</div>
	</section>
  )
}

export default SectionTwo