import fs  from 'fs'
import path from 'path';
import matter from 'gray-matter'

export function getMarckdown() {
  const contentFolder = path.join(process.cwd(), 'src', 'content');

  // Lee todas las carpetas dentro de "content"
  const subfolders = fs.readdirSync(contentFolder);

  // Recorre las subcarpetas y busca los archivos .md en cada una de ellas
  const slugs = subfolders.flatMap(subfolder => {
      const subfolderPath = path.join(contentFolder, subfolder);
      const files = fs.readdirSync(subfolderPath);
      const mdFiles = files.filter(file => file.endsWith('.md'));

      // Analiza el contenido de cada archivo .md para obtener la metadata
      const metadata = mdFiles.map(mdFile => {
          const mdFilePath = path.join(subfolderPath, mdFile);
          const fileContent = fs.readFileSync(mdFilePath, 'utf8');
          const parsedContent = matter(fileContent);
          
          // Aquí puedes acceder a la metadata, por ejemplo, parsedContent.data.title
          return {
              filename: mdFile.replace(".md", ""),
              metadata: parsedContent.data,
          };
      });

      return metadata;
  });

  return slugs;
}


export function getMarkdownContentByName(fileName: string) {
  const contentFolder = path.join(process.cwd(), 'src', 'content');
  const subfolders = fs.readdirSync(contentFolder);

  for (const subfolder of subfolders) {
      const subfolderPath = path.join(contentFolder, subfolder);
      const files = fs.readdirSync(subfolderPath);

      // Verifica si el archivo existe en la subcarpeta actual
      if (files.includes(fileName + '.md')) {
          const fileFullPath = path.join(subfolderPath, fileName + '.md');
          try {
              const fileContent = fs.readFileSync(fileFullPath, 'utf-8');
              const parsedContent = matter(fileContent);

              // Quita la metadata del contenido
              const contentWithoutMetadata = parsedContent.content;

              return {
                  content: contentWithoutMetadata,
                  getMetadata: () => {
                      // Función para obtener la metadata cuando sea necesario
                      return parsedContent.data;
                  },
              };
          } catch (error) {
              console.error(`Error al leer el archivo ${fileName}: ${error}`);
              return null;
          }
      }
  }

  console.error(`El archivo ${fileName} no se encontró.`);
  return null;
}