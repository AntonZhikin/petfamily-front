import { Button } from "@mui/material";
import FilesService from "../api/files";

export type PartETagInfo = {
	partNumber: number;
	eTag: string;
};

export function Upload() {
	const handleFileChange = async (file: File) => {
		const {
			data: { key, uploadId },
		} = await FilesService.startMultipart(file.name, file.type, file.size);

		const chinkSize = 10 * 1024 * 1024;
		const parts: PartETagInfo[] = [];
		let partNumber = 1;

		await uploadFileParts();

		async function uploadFileParts() {
			for (let start = 0; start < file.size; start += chinkSize) {
				const chunk = file.slice(start, start + chinkSize);

				const { data } = await FilesService.getPresignedUrl(
					key,
					uploadId,
					partNumber
				);

				const responce = await FilesService.uploadPart(data.url, chunk);

				const eTag = responce.headers["etag"] as string;

				parts.push({ partNumber, eTag });
				partNumber++;
			}
		}

		const responce = await FilesService.completeMultipart(key, uploadId, parts);
		alert(`Upload complete! + ${responce.data.location}`);
	};

	return (
		<section>
			<Button component="label" variant="contained" tabIndex={-1}>
				UploadVideo
				<input
					type="file"
					className="hidden"
					accept="video/"
					multiple={false}
					onChange={(e) => handleFileChange(e.target.files![0])}
				/>
			</Button>
		</section>
	);
}
