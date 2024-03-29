import { Firearm } from '../models/firearm.model';
import { LengthEnum } from '../models/length-enum.model';

export let FIREARMS: Array<Firearm> = [
	{
		id: '8f331a2c-ef70-4a64-a028-276bf27523c4',
		name: '10/22',
		elevationTurretGradients: 2,
		reticleUnits: 1,
		rounds: [
			{
				id: 'e67e903e-2a22-4cfc-a1a9-e9c92adf6e5b',
				name: 'Federal',
				bulletBC: 0.13,
				bulletDiameterInches: 0.22,
				bulletWeightGrains: 40,
				muzzleVelocityFPS: 1255
			}
		],
		sightHeightInches: 1.5,
		turretUnits: 1,
		windageTurretGradients: 2,
        zeroRangeUnits: LengthEnum.Yards,
		zeroRange: 50
	},
	{
		id: '8a6b05a9-ecb7-4f62-8a73-c07df86209e5',
		name: 'CTR',
		elevationTurretGradients: 10,
		reticleUnits: 0,
		rounds: [
			{
				id: 'ba665537-7653-43c0-82a6-6410972fee09',
				name: 'FGMM 69',
				bulletBC: 0.301,
				bulletDiameterInches: 0.224,
				bulletWeightGrains: 69,
				muzzleVelocityFPS: 2810
			},
			{
				id: '0cd716e3-a485-481c-addd-c96b70d43b4d',
				name: 'FGMM 77',
				bulletBC: 0.372,
				bulletDiameterInches: 0.224,
				bulletWeightGrains: 77,
				muzzleVelocityFPS: 2580
			},
			{
				id: 'a931c049-7771-45f6-8ede-5ea9d7674a2d',
				name: 'Handload 77',
				bulletBC: 0.372,
				bulletDiameterInches: 0.224,
				bulletWeightGrains: 77,
				muzzleVelocityFPS: 2680
			},
			{
				id: 'fe7c8d3e-3ed2-4614-832d-9dd4833fe4db',
				name: 'TAP 5.56',
				bulletBC: 0.354,
				bulletDiameterInches: 0.224,
				bulletWeightGrains: 75,
				muzzleVelocityFPS: 2680
			}
		],
		sightHeightInches: 2,
		turretUnits: 0,
		windageTurretGradients: 10,
        zeroRangeUnits: LengthEnum.Yards,
		zeroRange: 100
	},
	{
		id: '7d7f9e4d-7c33-4e04-ad1e-602e6f5d35f9',
		name: 'OBR',
		elevationTurretGradients: 10,
		reticleUnits: 0,
		rounds: [
			{
				id: 'fb97d392-97cc-4289-80ad-fc1fc50e4ab3',
				name: 'FGGM 168',
				bulletBC: 0.462,
				bulletDiameterInches: 0.308,
				bulletWeightGrains: 168,
				muzzleVelocityFPS: 2650
			},
			{
				id: '0dadbe8f-599e-4fce-8a1f-0e273e5ab535',
				name: 'FGMM 175',
				bulletBC: 0.505,
				bulletDiameterInches: 0.308,
				bulletWeightGrains: 175,
				muzzleVelocityFPS: 2600
			}
		],
		sightHeightInches: 2,
		turretUnits: 0,
		windageTurretGradients: 10,
        zeroRangeUnits: LengthEnum.Yards,
		zeroRange: 100
	},
	{
		id: '479a565e-cfe9-4ddf-8bf2-292cf1b0ca4f',
		name: 'SPR',
		elevationTurretGradients: 10,
		reticleUnits: 0,
		rounds: [
			{
				id: '93a7b0dc-c106-4fd5-8c68-16aa0caa7165',
				name: 'FGMM 69',
				bulletBC: 0.301,
				bulletDiameterInches: 0.224,
				bulletWeightGrains: 69,
				muzzleVelocityFPS: 2950
			},
			{
				id: 'abe8f65c-9e6b-4adf-8625-4f4ceab8cb1f',
				name: 'FGMM 77',
				bulletBC: 0.372,
				bulletDiameterInches: 0.224,
				bulletWeightGrains: 77,
				muzzleVelocityFPS: 2720
			},
			{
				id: '1f3303a9-8bd9-4e0b-bc4b-002073c2edf8',
				name: 'Handload 77',
				bulletBC: 0.372,
				bulletDiameterInches: 0.224,
				bulletWeightGrains: 77,
				muzzleVelocityFPS: 2823
			},
			{
				id: '98949310-8370-4807-af7a-16711831d7d7',
				name: 'TAP 5.56',
				bulletBC: 0.354,
				bulletDiameterInches: 0.224,
				bulletWeightGrains: 75,
				muzzleVelocityFPS: 2821
			}
		],
		sightHeightInches: 2,
		turretUnits: 0,
		windageTurretGradients: 10,
        zeroRangeUnits: LengthEnum.Yards,
		zeroRange: 100
	}
];
