import style from './Navbar.module.scss'
import {Button, IconButton} from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const Navbar = () => {
  return (
	<header>
		<nav>
			<div className='container'>
				<div className={style.navbar}>	
					<div className={style.menu}>
						<div className={style.logo}>#LATOKEN</div>
						<div className={style.menu__item}><a href="#" className={style.menu__item_link}>Exchange</a></div>
						<div className={style.menu__item}><a href="#" className={style.menu__item_link}>NFT</a></div>
						<div className={style.menu__item}><a href="#" className={style.menu__item_link}>Buy crypto</a></div>
						<div className={style.menu__item}><a href="#" className={style.menu__item_link}>Earm</a></div>
						<div className={style.menu__item}><a href="#" className={style.menu__item_link}>DeFi</a></div>
						<div className={style.menu__item}><a href="#" className={style.menu__item_link}>Lauchpad</a></div>
						<div className={style.menu__item}><a href="#" className={style.menu__item_link}>VCTV</a></div>
						<div className={style.menu__item}><a href="#" className={style.menu__item_link}>Apply for IEO / Listing</a></div>
					</div>
					<div className={style.menu}>
						<Button sx={{padding: '5px 10px', textTransform: "none", borderRadius: '10px'}} variant="outlined">Deposit</Button>
						<IconButton color="primary" aria-label="upload picture" component="label">
							<SupportAgentIcon/>
						</IconButton>
						<IconButton color="primary" aria-label="upload picture" component="label">
							<AccountCircleIcon/>
						</IconButton>
					</div>
					<div className={style.burger}>
						<span></span>
					</div>
				</div>
			</div>
		</nav>
	</header>
  )
}

export default Navbar