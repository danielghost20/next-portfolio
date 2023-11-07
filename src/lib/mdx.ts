import matter from 'gray-matter'
import {serialize} from 'next-mdx-remote/serialize'
import fs from 'fs'
import path from 'path'

const root = process.cwd()

export function getFiles () {
    return fs.readdirSync(path.join(root, 'src/content'))
}

export async function getFileBySlug (slug: string ) {
    const mdxSource = fs.readFileSync(path.join(root, 'src/content', `${slug}.mdx`), 'utf-8')

    const {data, content} = await matter(mdxSource)
    const source = await serialize(content, {})

    return {
        source,
        frontMatter: {
            ...data,
            slug
        }
    }
}

export function getAllFilesMetadata () {
    const files = getFiles()

    return files.reduce((allPost, postSlug) => {
        const mdxSource = fs.readFileSync(path.join(root, 'src/content', postSlug), 'utf-8')
        const {data} = matter(mdxSource)

        return [{...data, slug: postSlug.replace('.mdx', '')}, ...allPost]
    }, [])
}