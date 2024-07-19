//import { CLOUD_NAME, CLOUD_API_KEY, CLOUD_API_SECRET_KEY } from "../utils/keys.js";
import {Cloudinary} from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { max } from "@cloudinary/url-gen/actions/roundCorners";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { face } from "@cloudinary/url-gen/qualifiers/focusOn";


  const cld = new Cloudinary({
    cloud: {
        cloudName: CLOUD_NAME,
        api_key: CLOUD_API_KEY, 
        api_secret: CLOUD_API_SECRET_KEY
    },
});

const image1 = cld.image("portfolio/html2")
const image2 = cld.image("portfolio/css4")
const image3 = cld.image("portfolio/js")
const image4 = cld.image("portfolio/node2")
const image5 = cld.image("portfolio/express2")
const image6 = cld.image("portfolio/react2")
const image7 = cld.image("portfolio/vite2")
const image8 = cld.image("portfolio/zustand")
const image9 = cld.image("portfolio/tanstack")
const image10 = cld.image("portfolio/json2")
const image11 = cld.image("portfolio/tailwind3")
const image12 = cld.image("portfolio/sequelize2")
const image13 = cld.image("portfolio/postgre3")
const image14 = cld.image("portfolio/redux2")


export const html = image1.resize(fill().width(100).height(100))
export const css = image2.resize(fill().width(100).height(100))
export const js = image3.resize(fill().width(100).height(100))
export const node = image4.resize(fill().width(100).height(100))
export const express = image5.resize(fill().width(100).height(100))
export const react = image6.resize(fill().width(100).height(100))
export const vite = image7.resize(fill().width(100).height(100))
export const zustand = image8.resize(fill().width(120).height(100))
export const tanstack = image9.resize(fill().width(100).height(100))
export const json = image10.resize(fill().width(100).height(100))
export const tailwind = image11.resize(fill().width(120).height(100))
export const sequelize = image12.resize(fill().width(100).height(100))
export const postgre = image13.resize(fill().width(100).height(100))
export const redux = image14.resize(fill().width(100).height(100))

const image15 = cld.image("portfolio/cm")
const image16 = cld.image("portfolio/ef")
const image17 = cld.image("portfolio/lider")
const image18 = cld.image("portfolio/henry")
const image19 = cld.image("portfolio/redes")

export const cm = image15.resize(fill().width(700).height(500))
export const efset = image16.resize(fill().width(700).height(500))
export const lider = image17.resize(fill().width(700).height(500))
export const henry = image18.resize(fill().width(700).height(500))
export const redes = image19.resize(fill().width(700).height(500))


const git = cld.image("redes/github")
const link = cld.image("redes/linkedin")
const link2 = cld.image("redes/linkedin2")
const git2 = cld.image("redes/github2")
const mail = cld.image("redes/gmail")
const wsp = cld.image("redes/whatsapp")

export const github = git2.resize(fill().width(200).height(200))
export const linkedin = link2.resize(fill().width(200).height(200))
export const gmail = mail.resize(fill().width(100).height(100))
export const whatsapp = wsp.resize(fill().width(75).height(75))

