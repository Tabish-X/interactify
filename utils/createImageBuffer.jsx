export default function createImageBuffer(image) {
    return new Promise((resolve, reject) => {
        if (image && image.size / 1024 > 1024) {
            reject("Image must be less than 100kb");
        } else {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(image);
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = () => {
                reject(fileReader.result);
            };
        }
    });
}
