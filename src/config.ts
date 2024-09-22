import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: '瞻思笔记',
  subtitle: 'Technote',
  lang: 'zh_CN',
  themeHue: 250,
  banner: {
    enable: false,
    src: 'assets/images/demo-banner.png',
  },
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    {
      name: 'GitHub',
      url: 'https://github.com/jenniferwonder/technote',
      external: true,
    },
  ],
}

export const profileConfig: ProfileConfig = {
  // avatar: "assets/images/demo-avatar.png",
  avatar: 'assets/images/avatar-wide.jpg',
  name: '瞻妮芙',
  bio: '英语专业，前端开发，进阶打怪',
  links: [
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/jenniferwonder',
    },
    {
      name: 'Twitter',
      icon: 'fa6-brands:x-twitter',
      url: 'https://twitter.com/jennifer_coding',
    },
    {
      name: 'Dev',
      icon: 'fa6-brands:dev',
      url: 'https://dev.to/jenniferwonder',
    },
    // {
    // 	name: "Steam",
    // 	icon: "fa6-brands:steam",
    // 	url: "https://store.steampowered.com",
    // },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
