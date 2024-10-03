import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;
const router = Router();

const cleanFileName = (fileName: string) => {
  const file = fileName.split(".").shift();
  return file;
};

readdirSync(PATH_ROUTER).filter((fileName) => {
  const cleanName = cleanFileName(fileName);
  if (cleanName !== "index") {
    import(`./${cleanName}`).then((moduleRouter) => {
      if (moduleRouter && moduleRouter.default) {
        console.log(`Se está cargando la ruta... /${cleanName}`);
        router.use(`/${cleanName}`, moduleRouter.default);  // Montar el enrutador
      } else {
        console.error(`Error: El módulo ./${cleanName} no exporta un enrutador.`);
      }
    }).catch((error) => {
      console.error(`Error al cargar la ruta ./${cleanName}:`, error);
    });
  }
});

export { router };
