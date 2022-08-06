import style from './card.module.scss'
import {Typography, Chip, Card, CardActions, CardContent, Button} from '@mui/material';
import { IInfo } from "../../../modeles/models";


interface InfoProps {
	info: IInfo,
}

const CardItem = ({info}:InfoProps) => {	
  return (
	<Card sx={{
		flex: '0 1 33%',
		border: '2px solid rgb(203, 203, 203)',
		borderRadius: '15px',
	}}>
		<CardContent>
			<div className={style.section__card__title}>
				<Typography sx={{ fontSize: 20 , margin: '0'}} color="text.secondary" gutterBottom>
					Word of the Day
				</Typography>
				<Chip label="success" sx={{backgroundColor: '#feeefa', color: '#ff78ea'}} />
			</div>
			<Typography variant="h5" component="div">
			{info.nameCrypto}
			</Typography>
			<Typography sx={{ mb: 1.5 }} color="text.secondary">
			{info.cryptoText}
			</Typography>
			<div>
				<Typography sx={{ mb: 1.5 }} color="text.secondary">
				Airdrop will finish in:
				</Typography>
				<div className={style.airDropTimer__blok}>
					<div className={style.airDropTimer__item}>
						<Typography variant="h4" gutterBottom component="div">
							0
						</Typography>
						<Typography variant="subtitle1" gutterBottom component="div">
							Days
						</Typography>
					</div>
					<div className={style.airDropTimer__item}>
						<Typography variant="h4" gutterBottom component="div">
							0
						</Typography>
						<Typography variant="subtitle1" gutterBottom component="div">
							Hours
						</Typography>
					</div>
					<div className={style.airDropTimer__item}>
						<Typography variant="h4" gutterBottom component="div">
							{info.mins}
						</Typography>
						<Typography variant="subtitle1" gutterBottom component="div">
							Mins
						</Typography>
					</div>
					<div className={style.airDropTimer__item}>
						<Typography variant="h4" gutterBottom component="div">
							{info.sec}
						</Typography>
						<Typography variant="subtitle1" gutterBottom component="div">
							Sec
						</Typography>
					</div>
				</div>
			</div>
		</CardContent>
		<CardActions >
			<Button variant="outlined" sx={{flex:'0 1 50%'}} size="small">Learn More</Button>
			<Button variant="outlined" sx={{flex:'0 1 50%'}} size="small">Earn</Button>
		</CardActions>
	</Card>
  )
}

export default CardItem