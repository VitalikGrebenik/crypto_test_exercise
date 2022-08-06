import { observable, action, computed } from "mobx"
import { IInfo } from "../modeles/models"

import axios, { AxiosError } from 'axios';

class InfoStore {
	@observable private info: IInfo[] = [];
	@observable private TwoInfo: IInfo[] = [];

	@computed
	get getInfo(){
		return this.info
	}
	@computed
	get getTwoInfo(){
		return this.TwoInfo
	}

	@action
	setInfo = (info:IInfo[]): void =>{
		this.info = info
	};

	@action
	setTwoInfo = (TwoInfo:IInfo[]): void =>{
		this.TwoInfo = TwoInfo
	};

	@action
	fetchInfo =()=>{
		axios.get('https://62b9c3b5ff109cd1dc9a8b95.mockapi.io/Info')
		.then(({data})=>{
			const DataInfo:IInfo[] = data.map((item: any)=>{
				const obj:IInfo = {
					id: item.id ,
					nameCrypto: item.nameCrypto,
					cryptoText: item.cryptoText,
					mins: item.mins,
					sec: item.sec,
				}
				return obj
			})
			this.setInfo(DataInfo)
		})
	}
	@action
	fetchTwoInfo =()=>{
		axios.get('https://62b9c3b5ff109cd1dc9a8b95.mockapi.io/Favorite')
		.then(({data})=>{
			const DataInfo:IInfo[] = data.map((item: any)=>{
				const obj:IInfo = {
					id: item.id ,
					nameCrypto: item.nameCrypto,
					cryptoText: item.cryptoText,
					mins: item.mins,
					sec: item.sec,
				}
				return obj
			})
			this.setTwoInfo(DataInfo)
		})
	}
}

export default InfoStore