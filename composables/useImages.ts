import { filename } from "pathe/utils";

interface ImagesComposable {
  getImageSrc: (fileName: string) => string | undefined;
}

function useImages(): ImagesComposable {
  // TODO : replace the first parameter of the glob function according to your needs, I needed to import only png and jpeg from the images directory.

  const getImageSrc = (fileName: string): string | undefined => {
    const images = import.meta.glob("@/assets/images/**/**/*.(png|jpeg|webp)", { eager: true });
    for (const path in images) {
      if (Object.hasOwn(images, path)) {
        // unknown type is required here to change the final type as typescript thinks that images.value[path] is a function, it is not.
        const image: unknown = images[path];
        const imagePath = (image as { default: string }).default;
        
        if(imagePath.includes(fileName) && filename(imagePath) === filename(fileName)){
          return imagePath;
        }
        // if (filename(imagePath) === filename(fileName)) {
        //   return imagePath;
        // }
      }
    }
    return undefined;
  };
  return { getImageSrc };
}

export { useImages };