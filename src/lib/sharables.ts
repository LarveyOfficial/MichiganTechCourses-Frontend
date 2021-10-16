import {IPotentialFutureSemester} from './types';

interface ShareCourseStruct {
	type: 'SHARE_COURSE';
	data: {
		subject: string;
		crse: string;
		semester: IPotentialFutureSemester;
	};
}

export type ShareableStruct = {version: number} & (ShareCourseStruct);

export const encodeShareable = (data: ShareableStruct) => Buffer.from(JSON.stringify(data)).toString('base64');

export const decodeShareable = (packed: string): ShareableStruct => JSON.parse(Buffer.from(packed, 'base64').toString()) as ShareableStruct;
