import fetch from "isomorphic-unfetch"
import { Config } from "./config.js"

const fetchJson = async (url, options = null) => {
  const res = await fetch(url, options)
  return await res.json()
}

const getCategory = async ({ slug }) => {
  const categoriesUrl = `${Config.apiUrl}/wp-json/wp/v2/categories?slug=${slug}`
  const categories = await fetchJson(categoriesUrl);

  if (categories.length <= 0) {
    return { categories }
  }

  const categoryPostsUrl = `${Config.apiUrl}/wp-json/wp/v2/posts?_embed&categories=${categories[0].id}`
  const posts = await fetchJson(categoryPostsUrl)

  return { categories, posts }
}

const getPage = async ({ slug = 'welcome', apiRoute = 'page' }) => {
  const url = `${Config.apiUrl}/wp-json/postlight/v1/${apiRoute}?slug=${slug}`
  const data = await fetchJson(url)

  return { data }
}

const getPreview = async (id, wpnonce) => {
  const url = `${Config.apiUrl}/wp-json/postlight/v1/post/preview?id=${id}&_wpnonce=${wpnonce}`
  const options = { credentials: "include" }
  const data = await fetchJson(url, options)

  return data
}

const getMenu = async () => {
  const url = `${Config.apiUrl}/wp-json/menus/v1/menus/header-menu`
  const data = await fetchJson(url)

  return data
}

export {
  getCategory,
  getPage,
  getMenu
}