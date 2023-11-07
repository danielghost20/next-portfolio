"use client"

import {MDXRemote} from 'next-mdx-remote'

export default function Prueba (data: any) {
    return <MDXRemote {...data} />
}