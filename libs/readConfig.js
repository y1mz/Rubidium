import config from "@/config/siteconfig.json"
import links from "@/config/header.json"

export function readConfig() {
    return {
        siteName: config.siteName,
        siteURL: config.siteURL,
        siteDescription: config.siteDescription,
        authorName: config.authorName,
        authorBio: config.authorBio,
        authorEmail: config.authorEmail,
        year: config.year,
    }
}

export function readFooterLinks() {
    return links.footer
}

export function readHeaderLinks() {
    return links.header
}