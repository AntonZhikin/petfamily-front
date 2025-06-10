import axios from "axios";
import { PartETagInfo } from "../components/Upload";

export default class FilesService {
	static async startMultipart(
		fileName: string,
		contentType: string,
		size: number
	) {
		return axios.post<{ key: string; uploadId: string }>(
			"http://localhost:5227/files/multipart",
			{
				fileName,
				contentType,
				size,
			}
		);
	}

	static async uploadPart(url: string, chunk: Blob) {
		return axios.put(url, chunk, {
			headers: {
				"Content-Type": chunk.type,
			},
		});
	}

	static async getPresignedUrl(
		key: string,
		uploadId: string,
		partNumber: number
	) {
		return axios.post<{ ket: string; url: string }>(
			`http://localhost:5227/files/${key}/presigned-part`,
			{
				uploadId,
				partNumber,
			}
		);
	}

	static async completeMultipart(
		key: string,
		uploadId: string,
		parts: PartETagInfo[]
	) {
		return axios.post<{ key: string; location: string }>(
			`http://localhost:5227/files/${key}/complete-multipart`,
			{
				uploadId,
				parts,
			}
		);
	}
}
