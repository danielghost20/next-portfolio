import fs  from 'fs'
import path from 'path';
import matter from 'gray-matter'

export function getMarckdown() {
    const contentFolder = path.join(process.cwd(), 'src', 'content');

    const files = fs.readdirSync(contentFolder);
    const mdFiles = files.filter(file => file.endsWith('.md'));
  
    const slugs = mdFiles.map(mdFile => {
      const mdFilePath = path.join(contentFolder, mdFile);
      const fileContent = fs.readFileSync(mdFilePath, 'utf8');
      const parsedContent = matter(fileContent);
  
      return {
        filename: path.basename(mdFilePath, '.md'), // Obtiene el nombre sin la extensión
        metadata: parsedContent.data,
      };
    });
  
    return slugs;
}


export function getMarkdownContentByName(fileName: string) {
    const contentFolder = path.join(process.cwd(), 'src', 'content');
    const mdFilePath = path.join(contentFolder, `${fileName}.md`);
  
    try {
      const fileContent = fs.readFileSync(mdFilePath, 'utf-8');
      const parsedContent = matter(fileContent);
  
      const contentWithoutMetadata = parsedContent.content;
  
      return {
        content: contentWithoutMetadata,
        getMetadata: () => {
          return parsedContent.data;
        },
      };
    } catch (error) {
      console.error(`Error al leer el archivo ${fileName}: ${error}`);
      return null;
    }
}